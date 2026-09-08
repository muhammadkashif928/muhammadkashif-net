'use client'
import { useMemo, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useTheme } from '@/components/ThemeProvider'
import { orderFields, priceAmount } from '@/data/services'
import { getAttribution } from '@/lib/attribution'
import { gaEvent } from '@/lib/gtag'

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

// loadStripe must be called once, outside render, or the SDK re-initialises
// on every keystroke.
const stripePromise = PUBLISHABLE_KEY ? loadStripe(PUBLISHABLE_KEY) : null

const label = 'font-mono text-[10px] tracking-[0.25em] uppercase block mb-2'

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
    <form onSubmit={pay}>
      <PaymentElement options={{ layout: 'tabs' }} />

      {status === 'error' && (
        <p className="font-mono text-xs mt-5 p-3 border-2" style={{ color: 'var(--b-text)', borderColor: 'var(--b-text)' }}>
          {errorMsg}
        </p>
      )}

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={!stripe || status === 'paying'}
          className="btn-brutal font-bebas text-lg tracking-widest px-8 py-4 border-2 flex-1 disabled:opacity-50"
          style={{ backgroundColor: 'var(--b-text)', color: 'var(--b-bg)', borderColor: 'var(--b-text)', boxShadow: '4px 4px 0px var(--b-border)' }}
        >
          {status === 'paying' ? 'PROCESSING…' : `PAY ${priceAmount(service)} →`}
        </button>
        <button
          type="button"
          onClick={onBack}
          disabled={status === 'paying'}
          className="font-mono text-xs tracking-widest px-6 py-4 border-2 disabled:opacity-50"
          style={{ color: 'var(--b-muted)', borderColor: 'var(--b-border)' }}
        >
          ← EDIT BRIEF
        </button>
      </div>

      <p className="font-mono text-[11px] leading-relaxed mt-5" style={{ color: 'var(--b-muted)' }}>
        Payments are processed by Stripe. Card details are entered directly into
        Stripe&apos;s hosted fields and never touch this server.
      </p>
    </form>
  )
}

/* ── Step 1 + shell ───────────────────────────────────────────────────── */

export default function OrderForm({ service }) {
  const { theme } = useTheme()
  const fields = useMemo(() => orderFields(service), [service])

  const [step, setStep] = useState('details') // details | payment
  const [clientSecret, setClientSecret] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | error
  const [errorMsg, setErrorMsg] = useState('')

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
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please email info@muhammadkashif.net and I will invoice you directly.')
    }
  }

  // Brutalist Stripe fields: square corners, mono type, theme-matched.
  const appearance = useMemo(
    () => ({
      theme: theme === 'dark' ? 'night' : 'stripe',
      variables: {
        colorPrimary: theme === 'dark' ? '#f0f0eb' : '#080808',
        colorBackground: theme === 'dark' ? '#ffffff' : '#ffffff',
        colorText: '#080808',
        colorDanger: '#b00020',
        fontFamily: '"Space Mono", monospace',
        borderRadius: '0px',
        spacingUnit: '4px',
      },
      rules: {
        '.Input': { border: '1px solid rgba(8,8,8,0.25)', boxShadow: 'none' },
        '.Input:focus': { border: '1px solid #080808', boxShadow: 'none', outline: 'none' },
        '.Tab': { border: '1px solid rgba(8,8,8,0.25)', boxShadow: 'none' },
        '.Tab--selected': { border: '1px solid #080808', boxShadow: 'none' },
        '.Label': { fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' },
      },
    }),
    [theme]
  )

  const inputStyle = {
    borderColor: 'var(--b-border)',
    color: 'var(--b-text)',
    backgroundColor: 'transparent',
  }

  if (!PUBLISHABLE_KEY) {
    return (
      <div className="p-6 border-2" style={{ borderColor: 'var(--b-text)' }}>
        <h3 className="font-bebas text-2xl tracking-wide mb-2" style={{ color: 'var(--b-text)' }}>
          ONLINE PAYMENT NOT CONFIGURED
        </h3>
        <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--b-muted)' }}>
          Card checkout is not switched on yet. Email{' '}
          <a href="mailto:info@muhammadkashif.net" className="underline" style={{ color: 'var(--b-text)' }}>
            info@muhammadkashif.net
          </a>{' '}
          and I will send you an invoice for this service directly.
        </p>
      </div>
    )
  }

  if (step === 'payment' && clientSecret) {
    return (
      <div>
        <p className={label} style={{ color: 'var(--b-muted)' }}>Step 2 of 2 — Payment</p>
        <h2 className="font-bebas text-3xl sm:text-4xl tracking-wide mb-8" style={{ color: 'var(--b-text)' }}>
          PAY &amp; BOOK YOUR SLOT
        </h2>
        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <PaymentStep service={service} onBack={() => setStep('details')} />
        </Elements>
      </div>
    )
  }

  return (
    <div>
      <p className={label} style={{ color: 'var(--b-muted)' }}>Step 1 of 2 — Project brief</p>
      <h2 className="font-bebas text-3xl sm:text-4xl tracking-wide mb-8" style={{ color: 'var(--b-text)' }}>
        TELL ME ABOUT THE PROJECT
      </h2>

      <form onSubmit={submitDetails} className="flex flex-col gap-6">

        {/* Honeypot — hidden from people, irresistible to bots */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
          className="absolute opacity-0 pointer-events-none -z-10 h-0 w-0" />

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={label} style={{ color: 'var(--b-muted)' }}>Your name *</label>
            <input id="name" name="name" type="text" required maxLength={100}
              className="w-full border-2 px-4 py-3 font-mono text-sm outline-none focus:border-current"
              style={inputStyle} />
          </div>
          <div>
            <label htmlFor="email" className={label} style={{ color: 'var(--b-muted)' }}>Email *</label>
            <input id="email" name="email" type="email" required maxLength={200}
              className="w-full border-2 px-4 py-3 font-mono text-sm outline-none focus:border-current"
              style={inputStyle} />
          </div>
        </div>

        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className={label} style={{ color: 'var(--b-muted)' }}>
              {field.label}{field.required ? ' *' : ''}
            </label>

            {field.type === 'select' ? (
              <select id={field.name} name={field.name} required={field.required} defaultValue=""
                className="w-full border-2 px-4 py-3 font-mono text-sm outline-none appearance-none"
                style={inputStyle}>
                <option value="" disabled>Choose one…</option>
                {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea id={field.name} name={field.name} required={field.required} rows={4} maxLength={2000}
                placeholder={field.placeholder}
                className="w-full border-2 px-4 py-3 font-mono text-sm outline-none resize-none"
                style={inputStyle} />
            ) : (
              <input id={field.name} name={field.name} type={field.type} required={field.required}
                maxLength={2000} placeholder={field.placeholder}
                className="w-full border-2 px-4 py-3 font-mono text-sm outline-none"
                style={inputStyle} />
            )}

            {field.help && (
              <p className="font-mono text-[11px] mt-2 leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                {field.help}
              </p>
            )}
          </div>
        ))}

        {status === 'error' && (
          <p className="font-mono text-xs p-3 border-2" style={{ color: 'var(--b-text)', borderColor: 'var(--b-text)' }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-brutal font-bebas text-lg tracking-widest px-8 py-4 border-2 disabled:opacity-50"
          style={{ backgroundColor: 'var(--b-text)', color: 'var(--b-bg)', borderColor: 'var(--b-text)', boxShadow: '4px 4px 0px var(--b-border)' }}
        >
          {status === 'submitting' ? 'PREPARING CHECKOUT…' : 'CONTINUE TO PAYMENT →'}
        </button>

        <p className="font-mono text-[11px] leading-relaxed" style={{ color: 'var(--b-muted)' }}>
          Nothing is charged until the next step. Not ready to buy?{' '}
          <a href="/contact-me/" className="underline" style={{ color: 'var(--b-text)' }}>Ask me a question first</a>.
        </p>
      </form>
    </div>
  )
}
