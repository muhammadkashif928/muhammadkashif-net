'use client'
import { useState } from 'react'

const contactLinks = [
  { label: 'EMAIL',    value: 'info@muhammadkashif.net',                    href: 'mailto:info@muhammadkashif.net' },
  { label: 'WHATSAPP', value: '+60 179152084',                              href: 'https://wa.me/60179152084' },
  { label: 'UPWORK',   value: 'View Profile →',                             href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name, email: form.email, message: form.message,
          subject: `Project inquiry from ${form.name}`,
          from_name: 'muhammadkashif.net',
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
      if (data.success) setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-[10px] tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>▶ LET'S TALK</p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* ── LEFT ── */}
          <div>
            <h2 className="font-bebas leading-none mb-8" style={{ fontSize: 'clamp(3rem,7vw,5rem)', color: 'var(--b-text)' }}>
              YOUR BRAND
              <br />
              DESERVES
              <br />
              <span style={{ WebkitTextStroke: '2px var(--b-text)', color: 'transparent' }}>BETTER</span>
            </h2>

            <p className="font-mono text-sm leading-relaxed mb-10 max-w-sm" style={{ color: 'var(--b-muted)' }}>
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
                  className="group flex items-center gap-5 py-5 border-b transition-all"
                  style={{ borderColor: 'var(--b-border)' }}
                >
                  <span className="font-mono text-[9px] tracking-[0.3em] w-20 shrink-0" style={{ color: 'var(--b-muted)' }}>{c.label}</span>
                  <span className="font-mono text-sm font-bold transition-colors" style={{ color: 'var(--b-text)' }}>{c.value}</span>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform" style={{ color: 'var(--b-muted)' }}>→</span>
                </a>
              ))}
            </div>

            {/* Response time */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--b-text)' }} />
              <span className="font-mono text-[10px] tracking-widest" style={{ color: 'var(--b-muted)' }}>
                TYPICAL RESPONSE: WITHIN 24 HOURS
              </span>
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div className="border-2 p-8" style={{ borderColor: 'var(--b-border)', boxShadow: '6px 6px 0px var(--b-border)' }}>
            {status === 'success' ? (
              <div className="text-center py-14">
                <div className="font-bebas text-7xl leading-none mb-4" style={{ color: 'var(--b-text)', WebkitTextStroke: '2px var(--b-border)' }}>SENT!</div>
                <p className="font-mono text-sm" style={{ color: 'var(--b-muted)' }}>Message received. I'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 font-mono text-xs tracking-widest border-b" style={{ color: 'var(--b-text)', borderColor: 'var(--b-text)' }}>
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { id: 'name',  label: 'YOUR NAME',     type: 'text',  placeholder: 'John Smith' },
                  { id: 'email', label: 'EMAIL ADDRESS',  type: 'email', placeholder: 'john@company.com' },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="font-mono text-[9px] tracking-widest block mb-2" style={{ color: 'var(--b-muted)' }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full border-2 bg-transparent px-4 py-3 font-mono text-sm outline-none transition-all"
                      style={{
                        borderColor: 'var(--b-border)',
                        color: 'var(--b-text)',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--b-text)'}
                      onBlur={e => e.target.style.borderColor = 'var(--b-border)'}
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-[9px] tracking-widest block mb-2" style={{ color: 'var(--b-muted)' }}>YOUR MESSAGE</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your product and goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-2 bg-transparent px-4 py-3 font-mono text-sm outline-none transition-all resize-none"
                    style={{ borderColor: 'var(--b-border)', color: 'var(--b-text)' }}
                    onFocus={e => e.target.style.borderColor = 'var(--b-text)'}
                    onBlur={e => e.target.style.borderColor = 'var(--b-border)'}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-mono text-xs" style={{ color: '#ef4444' }}>
                    Something went wrong. Email me directly at info@muhammadkashif.net
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="font-bebas text-xl tracking-widest px-8 py-4 border-2 transition-all disabled:opacity-50"
                  style={{
                    backgroundColor: 'var(--b-text)',
                    color: 'var(--b-bg)',
                    borderColor: 'var(--b-text)',
                    boxShadow: '4px 4px 0px var(--b-border)',
                  }}
                >
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
