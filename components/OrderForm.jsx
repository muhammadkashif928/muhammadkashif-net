'use client'
// Two-step checkout: the project brief, then Stripe's Payment Element.
// Contract with the API is unchanged: POST /api/checkout/payment-intent/ (trailing slash)
// with { serviceSlug, name, email, honeypot, details, ...attribution }, then
// confirmPayment → /order/success/?service=<slug>. The amount is set server-side.
// Styled with the .lx design (styles/lumora-site.css, .ofm-*).
import { useMemo, useRef, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { orderFields, priceAmount } from '@/data/services'
import { getAttribution } from '@/lib/attribution'
import { gaEvent } from '@/lib/gtag'

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

// loadStripe must be called once, outside render, or the SDK re-initialises
// on every keystroke.
const stripePromise = PUBLISHABLE_KEY ? loadStripe(PUBLISHABLE_KEY) : null

// Payment fields in the site's palette and typeface.
const appearance = {
  theme: 'stripe',
  variables: {
    colorPrimary: '#0a0a0a',
    colorBackground: '#ffffff',
    colorText: '#111111',
    colorTextSecondary: 'rgba(17,17,17,0.55)',
    colorDanger: '#b42318',
    fontFamily: 'Onest, Arial, sans-serif',
    fontSizeBase: '15px',
    borderRadius: '14px',
    spacingUnit: '4px',
  },
  rules: {
    '.Input': { border: '1px solid #e6e5e2', boxShadow: 'none', padding: '12px 14px' },
    '.Input:focus': { border: '1px solid rgba(17,17,17,0.35)', boxShadow: 'none', outline: 'none' },
    '.Tab': { border: '1px solid #e6e5e2', boxShadow: 'none' },
    '.Tab--selected': { border: '1px solid #0a0a0a', boxShadow: 'none' },
    '.Label': { fontSize: '12px', fontWeight: '500', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.5)' },
  },
}
const fonts = [{ cssSrc: 'https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap' }]

/* ── Step 2: card details ─────────────────────────────────────────────── */

function PaymentStep({ service, onBack }) {
  const stripe = useStripe()
  const elements = useElements()
  const [status, setStatus] = useState('idle') // idle | paying | error
  const [errorMsg, setErrorMsg] = useState('')

  const pay = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setStatus('paying')
    setErrorMsg('')
    gaEvent('begin_checkout', { service: service.slug, value: service.priceUsd, currency: 'USD' })

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order/success/?service=${service.slug}`,
      },
    })

    // Reached only when the payment could not even be submitted; on success
    // the browser has already been redirected to return_url.
    setStatus('error')
    setErrorMsg(error?.message || 'That payment could not be completed. Please try another card.')
  }

  return (
    <form onSubmit={pay} className="ofm">
      <PaymentElement options={{ layout: 'tabs' }} />

      {status === 'error' && <p className="ofm__error" role="alert">{errorMsg}</p>}

      <div className="ofm__actions">
        <button type="submit" disabled={!stripe || status === 'paying'} className="pill pill--dark has-arrow">
          <span className="pill__in">{status === 'paying' ? 'Processing…' : `Pay ${priceAmount(service)}`}<span className="pill__badge ur"><svg className="i" aria-hidden="true"><use href="#i-arrow-ur" /></svg></span></span>
        </button>
        <button type="button" onClick={onBack} disabled={status === 'paying'} className="ofm__back">← Edit brief</button>
      </div>

      <p className="ofm__fine">Payments are processed by Stripe. Card details are entered directly into Stripe&apos;s hosted fields and never touch this server.</p>
    </form>
  )
}

/* ── Step 1 + shell ───────────────────────────────────────────────────── */

export default function OrderForm({ service }) {
  const fields = useMemo(() => orderFields(service), [service])
  const top = useRef(null)

  const [step, setStep] = useState('details') // details | payment
  const [clientSecret, setClientSecret] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | error
  const [errorMsg, setErrorMsg] = useState('')

  const scrollToTop = () => {
    const el = top.current
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 32, behavior: 'smooth' })
  }

  const submitDetails = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const data = new FormData(e.currentTarget)
    const details = {}
    for (const field of fields) {
      const v = data.get(field.name)
      if (v) details[field.name] = String(v)
    }

    try {
      // trailingSlash: true — post to the canonical URL so this does not 308.
      const res = await fetch('/api/checkout/payment-intent/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceSlug: service.slug,
          name: data.get('name'),
          email: data.get('email'),
          honeypot: data.get('website'),
          details,
          ...getAttribution(),
        }),
      })
      const payload = await res.json()

      if (!res.ok || !payload.clientSecret) {
        setStatus('error')
        setErrorMsg(payload.error || 'Could not start the payment. Please try again.')
        return
      }

      setClientSecret(payload.clientSecret)
      setStep('payment')
      setStatus('idle')
      gaEvent('add_payment_info', { service: service.slug, value: service.priceUsd, currency: 'USD' })
      scrollToTop()
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please email info@muhammadkashif.net and I will invoice you directly.')
    }
  }

  if (!PUBLISHABLE_KEY) {
    return (
      <div className="ofm-card">
        <p className="modal__kick">Let’s confirm your project</p>
        <h2 className="ofm__title">Email me and I’ll invoice you.</h2>
        <p className="ofm__fine">
          To arrange this service, email <a href="mailto:info@muhammadkashif.net">info@muhammadkashif.net</a> and I will send you an invoice for this service directly.
        </p>
      </div>
    )
  }

  if (step === 'payment' && clientSecret) {
    return (
      <div className="ofm-card" ref={top}>
        <ol className="ofm__steps" aria-label="Checkout steps"><li className="done">Project brief</li><li className="on">Payment</li></ol>
        <h2 className="ofm__title">Pay &amp; book your slot</h2>
        <Elements stripe={stripePromise} options={{ clientSecret, appearance, fonts }}>
          <PaymentStep service={service} onBack={() => { setStep('details'); scrollToTop() }} />
        </Elements>
      </div>
    )
  }

  return (
    <div className="ofm-card" ref={top}>
      <ol className="ofm__steps" aria-label="Checkout steps"><li className="on">Project brief</li><li>Payment</li></ol>
      <h2 className="ofm__title">Tell me about the project</h2>

      <form onSubmit={submitDetails} className="ofm mform">
        {/* Honeypot — hidden from people, irresistible to bots */}
        <div className="hp-field" aria-hidden="true">
          <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>

        <div className="ofm__row">
          <label htmlFor="name"><span>Your name *</span>
            <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" placeholder="Your name" />
          </label>
          <label htmlFor="email"><span>Email *</span>
            <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="you@company.com" />
          </label>
        </div>

        {fields.map((field) => (
          <label key={field.name} htmlFor={field.name}>
            <span>{field.label}{field.required ? ' *' : ''}</span>
            {field.type === 'select' ? (
              <select id={field.name} name={field.name} required={field.required} defaultValue="">
                <option value="" disabled>Choose one…</option>
                {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea id={field.name} name={field.name} required={field.required} rows={4} maxLength={2000} placeholder={field.placeholder} />
            ) : (
              <input id={field.name} name={field.name} type={field.type} required={field.required} maxLength={2000} placeholder={field.placeholder} />
            )}
            {field.help && <small className="ofm__help">{field.help}</small>}
          </label>
        ))}

        {status === 'error' && <p className="ofm__error" role="alert">{errorMsg}</p>}

        <div className="ofm__actions">
          <button type="submit" disabled={status === 'submitting'} className="pill pill--dark has-arrow">
            <span className="pill__in">{status === 'submitting' ? 'Preparing checkout…' : 'Continue to payment'}<span className="pill__badge"><svg className="i" aria-hidden="true"><use href="#i-arrow" /></svg></span></span>
          </button>
        </div>

        <p className="ofm__fine">
          Nothing is charged until the next step. Not ready to buy? <a href="/contact-me/">Ask me a question first</a>.
        </p>
      </form>
    </div>
  )
}
