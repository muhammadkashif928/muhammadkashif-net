import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
    kicker: 'PAYMENT RECEIVED',
    title: "YOU'RE BOOKED",
    body: 'Your payment went through and your brief is with me. Check your inbox for a confirmation — I will follow up personally within one business day with next steps.',
  },
  processing: {
    kicker: 'PAYMENT PROCESSING',
    title: 'ALMOST THERE',
    body: 'Your bank is still confirming this payment. It usually clears within a few minutes — you will get a confirmation email the moment it does, and so will I.',
  },
  failed: {
    kicker: 'PAYMENT NOT COMPLETED',
    title: 'NOTHING WAS CHARGED',
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
    <>
      <Navbar />
      <main id="main-content" className="interior-page min-h-screen flex items-center" style={{ backgroundColor: 'var(--b-bg)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full">

          <p className="font-mono text-[11px] tracking-[0.35em] mb-4" style={{ color: 'var(--b-muted)' }}>
            ▶ {state.kicker}
          </p>

          <h1 className="font-bebas leading-none mb-6" style={{ fontSize: 'clamp(2.75rem,8vw,5.5rem)', color: 'var(--b-text)' }}>
            {state.title}
          </h1>

          <p className="font-mono text-sm sm:text-base leading-relaxed max-w-xl mb-10" style={{ color: 'var(--b-muted)' }}>
            {state.body}
          </p>

          {intent && key !== 'failed' && (
            <div className="border-2 p-6 mb-10" style={{ borderColor: 'var(--b-text)', boxShadow: '6px 6px 0px var(--b-border)' }}>
              <dl className="flex flex-col gap-3">
                {service && (
                  <div className="flex justify-between gap-4">
                    <dt className="font-mono text-[10px] tracking-[0.25em]" style={{ color: 'var(--b-muted)' }}>SERVICE</dt>
                    <dd className="font-mono text-xs text-right" style={{ color: 'var(--b-text)' }}>{service.title}</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <dt className="font-mono text-[10px] tracking-[0.25em]" style={{ color: 'var(--b-muted)' }}>AMOUNT</dt>
                  <dd className="font-mono text-xs text-right" style={{ color: 'var(--b-text)' }}>
                    {formatAmount(intent.amount, intent.currency)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-mono text-[10px] tracking-[0.25em]" style={{ color: 'var(--b-muted)' }}>REFERENCE</dt>
                  <dd className="font-mono text-xs text-right break-all" style={{ color: 'var(--b-text)' }}>{intent.id}</dd>
                </div>
              </dl>
            </div>
          )}

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {key === 'failed' && service && (
              <a href={`/order/${service.slug}/`}
                className="btn-brutal font-bebas text-base sm:text-lg tracking-widest px-7 py-3 border-2"
                style={{ backgroundColor: 'var(--b-text)', color: 'var(--b-bg)', borderColor: 'var(--b-text)', boxShadow: '4px 4px 0px var(--b-border)' }}>
                TRY AGAIN
              </a>
            )}
            <a href="/my-portfolio/"
              className="btn-brutal font-bebas text-base sm:text-lg tracking-widest px-7 py-3 border-2"
              style={{ backgroundColor: key === 'failed' ? 'transparent' : 'var(--b-text)', color: key === 'failed' ? 'var(--b-text)' : 'var(--b-bg)', borderColor: 'var(--b-text)', boxShadow: '4px 4px 0px var(--b-border)' }}>
              SEE THE WORK
            </a>
            <a href="/contact-me/"
              className="btn-brutal font-bebas text-base sm:text-lg tracking-widest px-7 py-3 border-2"
              style={{ backgroundColor: 'transparent', color: 'var(--b-text)', borderColor: 'var(--b-border)', boxShadow: '4px 4px 0px var(--b-border)' }}>
              MESSAGE ME
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
