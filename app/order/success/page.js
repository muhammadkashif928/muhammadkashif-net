import LxShell from '@/components/lx/LxShell'
import { Pill } from '@/components/lx/Icons'
import { serviceName } from '@/components/lx/Sections'
import { getStripe } from '@/lib/stripe'
import { formatAmount } from '@/lib/orders'
import { getService } from '@/data/services'
import { createMetadata } from '@/lib/seo'

export const dynamic = 'force-dynamic'

export const metadata = createMetadata({
  title: 'Order confirmed',
  description: 'Your order has been received.',
  path: '/order/success/',
  noIndex: true,
})

/**
 * Read the real payment status from Stripe rather than trusting the
 * `redirect_status` in the URL, which anyone can type. The client secret in
 * the query string is what proves this visitor owns the PaymentIntent —
 * without a match we say nothing about it.
 */
async function loadIntent(searchParams) {
  const id = searchParams.payment_intent
  const secret = searchParams.payment_intent_client_secret
  if (!id || !secret) return null

  const stripe = getStripe()
  if (!stripe) return null

  try {
    const intent = await stripe.paymentIntents.retrieve(id)
    return intent.client_secret === secret ? intent : null
  } catch {
    return null
  }
}

const STATES = {
  succeeded: {
    kicker: 'Payment received',
    title: "You're booked.",
    body: 'Your payment went through and your brief is with me. Check your inbox for a confirmation — I will follow up personally within one business day with next steps.',
  },
  processing: {
    kicker: 'Payment processing',
    title: 'Almost there.',
    body: 'Your bank is still confirming this payment. It usually clears within a few minutes — you will get a confirmation email the moment it does, and so will I.',
  },
  failed: {
    kicker: 'Payment not completed',
    title: 'Nothing was charged.',
    body: 'That payment did not go through, so you have not been charged. You can try again with another card, or email me and I will invoice you directly.',
  },
}

export default async function OrderSuccessPage({ searchParams }) {
  const sp = await searchParams
  const intent = await loadIntent(sp)
  const service = getService(sp.service)

  const key =
    intent?.status === 'succeeded' ? 'succeeded'
    : intent?.status === 'processing' ? 'processing'
    : 'failed'
  const state = STATES[key]

  return (
    <LxShell>
      <main id="main-content">
        <section className="phero osuccess">
          <div className="shell phero__in">
            <div className="phero__main">
              <div className="rv" data-gate="" style={{ '--ry': '10px', '--rd': '200ms' }}><span className={`eyebrow osuccess__k osuccess__k--${key}`}>{state.kicker}</span></div>
              <h1 className="phero__h1 lines" data-gate="" data-delay="250" data-lines={state.title}>{state.title}</h1>
              <p className="phero__lead rv" data-gate="" style={{ '--ry': '12px', '--rd': '500ms' }}>{state.body}</p>
              <div className="ctas rv" data-gate="" style={{ '--ry': '10px', '--rd': '650ms' }}>
                {key === 'failed' && service && <Pill variant="dark" href={`/order/${service.slug}/`}>Try again</Pill>}
                <Pill variant={key === 'failed' ? 'outline' : 'dark'} arrow={key === 'failed' ? null : 'right'} href="/my-portfolio/">See the work</Pill>
                <Pill variant="outline" arrow={null} href="/contact-me/">Message me</Pill>
              </div>
            </div>
            {intent && key !== 'failed' && (
              <aside className="phero__aside rv" data-gate="" style={{ '--ry': '16px', '--rs': 0.96, '--rd': '450ms' }}>
                <ul className="facts">
                  {service && <li><span className="k">Service</span><span className="v">{serviceName(service)}</span></li>}
                  <li><span className="k">Amount</span><span className="v">{formatAmount(intent.amount, intent.currency)}</span></li>
                  <li><span className="k">Reference</span><span className="v" style={{ wordBreak: 'break-all' }}>{intent.id}</span></li>
                  <li><span className="k">Next step</span><span className="v">Reply within 1 business day</span></li>
                </ul>
              </aside>
            )}
          </div>
        </section>
      </main>
    </LxShell>
  )
}
