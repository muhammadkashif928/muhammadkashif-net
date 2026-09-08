/**
 * Stripe webhook — the only place an order is treated as paid.
 *
 * The browser is never trusted to confirm a payment: it can be closed mid
 * redirect, and /order/success/ is just a page anyone can open. Money moving
 * is what this endpoint reacts to.
 *
 * Point Stripe at  https://muhammadkashif.net/api/stripe/webhook/
 * and subscribe to payment_intent.succeeded and payment_intent.payment_failed.
 *
 * The trailing slash is required: next.config.js sets trailingSlash: true, so
 * the bare path answers 308 and Stripe — which does not follow redirects on
 * webhook delivery — would mark every event as failed.
 */
import nodemailer from 'nodemailer'
import { getStripe } from '@/lib/stripe'
import { markOrderPaid, getOrder, formatAmount } from '@/lib/orders'
import { getService, orderFields } from '@/data/services'
import { orderPaidEmail, orderReceiptEmail } from '@/lib/emails'

// Raw body is required for signature verification, so this must not run on
// the edge runtime and must never be pre-parsed.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function createTransport() {
  return nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })
}

/**
 * Rebuild the human-readable brief. The database row is the good copy; the
 * PaymentIntent metadata is the fallback so a booking is still actionable if
 * storage was down when the order was created.
 */
function buildFields(service, dbOrder, metadata) {
  const details = dbOrder?.details || {}
  return orderFields(service)
    .map((field) => {
      const value = details[field.name] ?? metadata[`d_${field.name}`] ?? ''
      return value ? [field.label, String(value)] : null
    })
    .filter(Boolean)
}

async function handlePaid(intent) {
  const metadata = intent.metadata || {}
  const service = getService(metadata.service_slug)
  if (!service) {
    console.error('Paid intent has no known service:', intent.id, metadata.service_slug)
    return
  }

  // Stripe retries until it gets a 2xx, so this must be idempotent.
  const state = await markOrderPaid(intent.id)
  if (state === 'noop') return

  const dbOrder = await getOrder(intent.id)
  const name = dbOrder?.name || metadata.customer_name || 'Customer'
  const email = dbOrder?.email || metadata.customer_email || intent.receipt_email
  const amount = formatAmount(intent.amount_received || intent.amount, intent.currency)
  const fields = buildFields(service, dbOrder, metadata)

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Order paid but SMTP is not configured:', intent.id)
    return
  }

  const transporter = createTransport()

  // Tell me. This is the one that matters — a paid order I never see is the
  // worst possible failure, so it is logged loudly if it throws.
  try {
    const notify = orderPaidEmail({ service, amount, name, email, fields, paymentIntentId: intent.id })
    await transporter.sendMail({
      from: `"Muhammad Kashif Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email ? `"${name}" <${email}>` : undefined,
      subject: notify.subject,
      text: notify.text,
      html: notify.html,
    })
  } catch (err) {
    console.error('ORDER PAID but notification email failed:', intent.id, err.message)
  }

  // Receipt to the client. Stripe already sends its own, so this is best effort.
  if (email) {
    try {
      const receipt = orderReceiptEmail({ service, amount, name, paymentIntentId: intent.id })
      await transporter.sendMail({
        from: `"Muhammad Kashif" <${process.env.SMTP_USER}>`,
        to: `"${name}" <${email}>`,
        replyTo: process.env.SMTP_USER,
        subject: receipt.subject,
        text: receipt.text,
        html: receipt.html,
      })
    } catch (err) {
      console.error('Order receipt failed (payment is fine):', intent.id, err.message)
    }
  }
}

export async function POST(request) {
  const stripe = getStripe()
  const secret = process.env.STRIPE_WEBHOOK_SECRET

  if (!stripe || !secret) {
    console.error('Stripe webhook hit but STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET is unset')
    return Response.json({ error: 'Webhook not configured' }, { status: 503 })
  }

  const signature = request.headers.get('stripe-signature')
  const raw = await request.text()

  let event
  try {
    event = stripe.webhooks.constructEvent(raw, signature, secret)
  } catch (err) {
    // Unsigned or replayed — never act on it.
    console.error('Stripe signature verification failed:', err.message)
    return Response.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    if (event.type === 'payment_intent.succeeded') {
      await handlePaid(event.data.object)
    } else if (event.type === 'payment_intent.payment_failed') {
      const intent = event.data.object
      console.warn('Payment failed:', intent.id, intent.last_payment_error?.message)
    }
  } catch (err) {
    // Return 500 so Stripe retries rather than dropping a real payment.
    console.error('Webhook handler error:', event.type, err.message)
    return Response.json({ error: 'Handler failed' }, { status: 500 })
  }

  return Response.json({ received: true })
}
