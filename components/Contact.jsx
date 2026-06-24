'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New project inquiry from ${form.name}`,
          from_name: 'muhammadkashif.net',
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#f5f5f0] py-24 border-t-2 border-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-[#0a0a0a]/40 mb-2">
          ▶ LET'S TALK
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="font-bebas text-[clamp(3rem,7vw,5rem)] leading-none text-[#0a0a0a]">
              YOUR BRAND
              <br />
              DESERVES
              <br />
              <span className="[-webkit-text-stroke:2px_#0a0a0a] text-transparent">BETTER</span>
            </h2>

            <p className="font-mono text-sm text-[#0a0a0a]/60 leading-relaxed mt-8 max-w-sm">
              Quality design is the difference between browsing and buying.
              Ready to upgrade your Amazon presence with 8K visuals and
              strategic A+ content?
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                { label: 'EMAIL', value: 'info@muhammadkashif.net', href: 'mailto:info@muhammadkashif.net' },
                { label: 'WHATSAPP', value: '+92 342 4625 844', href: 'https://wa.me/923424625844' },
                { label: 'UPWORK', value: 'View Profile', href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-b border-[#0a0a0a]/20 pb-4 hover:border-[#0a0a0a] transition-colors"
                >
                  <span className="font-mono text-[10px] tracking-widest text-[#0a0a0a]/40 w-20">
                    {c.label}
                  </span>
                  <span className="font-mono text-sm text-[#0a0a0a] group-hover:text-[#0a0a0a] font-bold">
                    {c.value}
                  </span>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform text-[#0a0a0a]/40">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="border-2 border-[#0a0a0a] p-8 shadow-brutal-lg bg-white">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="font-bebas text-6xl text-[#e8e800] [-webkit-text-stroke:2px_#0a0a0a]">SENT!</div>
                <p className="font-mono text-sm text-[#0a0a0a]/60 mt-4">
                  Message received. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 font-mono text-xs tracking-widest text-[#0a0a0a] border-b border-[#0a0a0a]"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { id: 'name', label: 'YOUR NAME', type: 'text', placeholder: 'John Smith' },
                  { id: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'john@company.com' },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="font-mono text-[10px] tracking-widest text-[#0a0a0a]/40 block mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full border-2 border-[#0a0a0a] bg-transparent px-4 py-3 font-mono text-sm text-[#0a0a0a] placeholder:text-[#0a0a0a]/20 focus:outline-none focus:border-[#e8e800] focus:shadow-[2px_2px_0px_#0a0a0a] transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-[10px] tracking-widest text-[#0a0a0a]/40 block mb-2">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your product and goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-2 border-[#0a0a0a] bg-transparent px-4 py-3 font-mono text-sm text-[#0a0a0a] placeholder:text-[#0a0a0a]/20 focus:outline-none focus:border-[#e8e800] transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-mono text-xs text-red-600">
                    Something went wrong. Please email me directly at info@muhammadkashif.net
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="font-bebas text-xl tracking-widest px-8 py-4 bg-[#0a0a0a] text-[#f5f5f0] border-2 border-[#0a0a0a] shadow-[4px_4px_0px_#e8e800] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_#e8e800] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0"
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
