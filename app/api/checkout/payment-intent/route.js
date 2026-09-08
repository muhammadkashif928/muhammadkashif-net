/**
 * Creates the Stripe PaymentIntent that backs the embedded Payment Element.
 *
 * The amount is read from data/services.js and never from the request body —
 * a customer editing the payload in devtools cannot change what they are
 * charged, only which catalog service they are buying.
 */
import { getStripe } from '@/lib/stripe'
import { validateOrder, toStripeMetadata, saveOrder } from '@/lib/orders'
import { enrichLead } from '@/lib/leads'

const CURRENCY = 'usd'

// Per-IP fixed window, scoped to this serverless instance — enough to blunt
// scripted abuse without a shared store. The window genuinely resets, so a
// customer who fumbles the form is not throttled for the life of the lambda.
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 6
const recent = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const rec = recent.get(ip)

  if (!rec || now - rec.start >= WINDOW_MS) {
    // Bound the map so a long-lived instance cannot be grown without limit.
    if (recent.size > 5000) recent.clear()
    recent.set(ip, { start: now, count: 1 })
    return false
  }

  if (rec.count >= MAX_PER_WINDOW) return true
  rec.count += 1
  return false
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  if (isRateLimited(ip)) {
    return Response.json({ error: 'Too many attempts. Please wait a minute.' }, { status: 429 })
  }

  const stripe = getStripe()
  if (!stripe) {
    console.error('STRIPE_SECRET_KEY is not set')
    return Response.json(
      { error: 'Payments are not configured yet. Please email info@muhammadkashif.net and I will invoice you directly.' },
      { status: 503 }
    )
  }

  let body
  try { body = await request.json() } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Honeypot — a bot filling the hidden field gets a plausible dead end.
  if (body?.honeypot) {
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 400 })
  }

  const result = validateOrder(body)
  if (result.error) return Response.json({ error: result.error }, { status: 400 })

  const { service, name, email, details } = result
  const amountCents = service.priceUsd * 100

  const attribution = enrichLead(request, body)

  try {
    const intent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: CURRENCY,
      // Lets Stripe show cards, wallets and Link per the Dashboard settings.
      automatic_payment_methods: { enabled: true },
      receipt_email: email,
      description: `${service.title} — muhammadkashif.net`,
      metadata: toStripeMetadata({ service, name, email, details, attribution }),
    })

    // Best effort: the payment must not depend on the database being up.
    await saveOrder({
      paymentIntentId: intent.id,
      serviceSlug: service.slug,
      serviceTitle: service.title,
      amountCents,
      currency: CURRENCY,
      status: 'pending',
      name,
      email,
      details,
      country: attribution.country,
      city: attribution.city,
      referrer: attribution.referrer,
      utm_source: attribution.utmSource,
      utm_medium: attribution.utmMedium,
      utm_campaign: attribution.utmCampaign,
      ip,
    })

    return Response.json({
      clientSecret: intent.client_secret,
      amountCents,
      currency: CURRENCY,
    })
  } catch (err) {
    console.error('PaymentIntent create failed:', err.message)
    return Response.json(
      { error: 'Could not start the payment. Please try again, or email info@muhammadkashif.net.' },
      { status: 500 }
    )
  }
}
