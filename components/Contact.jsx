'use client'
import { useState } from 'react'

const contactLinks = [
  { label: 'EMAIL',    value: 'info@muhammadkashif.net', href: 'mailto:info@muhammadkashif.net' },
  { label: 'WHATSAPP', value: '+60 179152084',            href: 'https://wa.me/60179152084' },
  { label: 'UPWORK',   value: 'View Profile →',          href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
]

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', message: '', honeypot: '' })
  const [status, setStatus]     = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot check — bots fill the hidden field
    if (form.honeypot) return

    setStatus('sending')
    setErrorMsg('')

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
      if (!apiKey) {
        setStatus('error')
        setErrorMsg('Contact form is not configured yet. Please email me directly.')
        return
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: apiKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Project inquiry from ${form.name}`,
          from_name: 'muhammadkashif.net',
          botcheck: '',
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '', honeypot: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please email me directly at info@muhammadkashif.net')
    }
  }

  const inputStyle = {
    borderColor: 'var(--b-border)',
    color: 'var(--b-text)',
    backgroundColor: 'transparent',
  }

  return (
    <section id="contact" className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>▶ LET'S TALK</p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* ── LEFT ── */}
          <div>
            <h2 className="font-bebas leading-none mb-6 sm:mb-8" style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--b-text)' }}>
              YOUR BRAND
              <br />
              DESERVES
              <br />
              <span style={{ WebkitTextStroke: '2px var(--b-text)', color: 'transparent' }}>BETTER</span>
            </h2>

            <p className="font-mono text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-sm" style={{ color: 'var(--b-muted)' }}>
              Quality design is the difference between browsing and buying.
              Ready to upgrade your Amazon presence with premium visuals and
              strategic A+ content?
            </p>

            <div className="flex flex-col gap-0 border-t" style={{ borderColor: 'var(--b-border)' }}>
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 sm:gap-5 py-4 sm:py-5 border-b transition-all"
                  style={{ borderColor: 'var(--b-border)' }}
                >
                  <span className="font-mono text-xs tracking-[0.3em] w-20 shrink-0" style={{ color: 'var(--b-muted)' }}>{c.label}</span>
                  <span className="font-mono text-sm sm:text-base font-bold" style={{ color: 'var(--b-text)' }}>{c.value}</span>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform" style={{ color: 'var(--b-muted)' }}>→</span>
                </a>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--b-text)' }} />
              <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--b-muted)' }}>
                TYPICAL RESPONSE: WITHIN 24 HOURS
              </span>
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="border-2 p-6 sm:p-8" style={{ borderColor: 'var(--b-border)', boxShadow: '6px 6px 0px var(--b-border)' }}>
            {status === 'success' ? (
              <div className="text-center py-10 sm:py-14">
                <div className="font-bebas leading-none mb-4" style={{ fontSize: '5rem', color: 'var(--b-text)', WebkitTextStroke: '2px var(--b-border)' }}>SENT!</div>
                <p className="font-mono text-sm sm:text-base" style={{ color: 'var(--b-muted)' }}>Message received. I'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 font-mono text-sm tracking-widest border-b" style={{ color: 'var(--b-text)', borderColor: 'var(--b-text)' }}>
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">

                {/* Honeypot — hidden from humans, traps bots */}
                <input
                  type="text"
                  name="website"
                  value={form.honeypot}
                  onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {[
                  { id: 'name',  label: 'YOUR NAME',     type: 'text',  placeholder: 'John Smith',        required: true },
                  { id: 'email', label: 'EMAIL ADDRESS',  type: 'email', placeholder: 'john@company.com', required: true },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="font-mono text-xs tracking-widest block mb-2" style={{ color: 'var(--b-muted)' }}>{f.label} *</label>
                    <input
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full border-2 px-4 py-3 font-mono text-sm sm:text-base outline-none transition-all"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--b-text)'}
                      onBlur={e => e.target.style.borderColor = 'var(--b-border)'}
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-xs tracking-widest block mb-2" style={{ color: 'var(--b-muted)' }}>YOUR MESSAGE *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your product and goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-2 px-4 py-3 font-mono text-sm sm:text-base outline-none transition-all resize-none"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--b-text)'}
                    onBlur={e => e.target.style.borderColor = 'var(--b-border)'}
                  />
                </div>

                {status === 'error' && (
                  <div className="border px-4 py-3" style={{ borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.08)' }}>
                    <p className="font-mono text-sm" style={{ color: '#ef4444' }}>{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="font-bebas text-lg sm:text-xl tracking-widest px-8 py-4 border-2 transition-all disabled:opacity-50"
                  style={{ backgroundColor: 'var(--b-text)', color: 'var(--b-bg)', borderColor: 'var(--b-text)', boxShadow: '4px 4px 0px var(--b-border)' }}
                >
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE →'}
                </button>

                <p className="font-mono text-xs text-center" style={{ color: 'var(--b-muted)' }}>
                  Protected by spam filtering · Your data is never shared
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
