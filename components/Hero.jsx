'use client'
import { useEffect, useState } from 'react'

const roles = [
  'AMAZON BRAND DESIGNER',
  'A+ CONTENT STRATEGIST',
  'AI VISUAL SPECIALIST',
  'LISTING OPTIMIZER',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let i = typing ? 0 : current.length
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1)); i++
        if (i === current.length) { clearInterval(interval); setTimeout(() => setTyping(false), 2000) }
      } else {
        setDisplayed(current.slice(0, i - 1)); i--
        if (i === 0) { clearInterval(interval); setRoleIndex(p => (p + 1) % roles.length); setTyping(true) }
      }
    }, typing ? 55 : 30)
    return () => clearInterval(interval)
  }, [roleIndex, typing])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ backgroundColor: 'var(--a-bg)' }}>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: 'var(--a-border)' }} />

      {/* Decorative corner — top right */}
      <div className="absolute top-0 right-0 w-28 h-28" style={{ backgroundColor: 'var(--accent)', opacity: 0.08 }} />
      <div className="absolute top-0 right-0 w-28 h-28 border-b-2 border-l-2" style={{ borderColor: 'var(--a-border)' }} />

      {/* Decorative corner — bottom left */}
      <div className="absolute bottom-0 left-0 w-48 h-px" style={{ backgroundColor: 'var(--accent)', opacity: 0.3 }} />
      <div className="absolute bottom-0 left-0 w-px h-48" style={{ backgroundColor: 'var(--accent)', opacity: 0.3 }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">

        {/* ── LEFT: TEXT ── */}
        <div>
          <div className="fade-up-1 flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
            <p className="font-mono text-[10px] tracking-[0.35em]" style={{ color: 'var(--a-muted)' }}>
              AVAILABLE FOR PROJECTS
            </p>
          </div>

          <h1 className="font-bebas leading-none fade-up-2" style={{ fontSize: 'clamp(4rem,11vw,8.5rem)', color: 'var(--a-text)' }}>
            MUHAMMAD
            <br />
            <span style={{ color: 'var(--accent)', WebkitTextStroke: '1px var(--a-border)' }}>KASHIF</span>
          </h1>

          <div className="mt-5 h-10 flex items-center fade-up-3">
            <span className="font-mono tracking-widest" style={{ fontSize: 'clamp(0.65rem,1.5vw,0.8rem)', color: 'var(--a-text)' }}>
              {displayed}<span className="cursor-blink" style={{ color: 'var(--accent)' }}>|</span>
            </span>
          </div>

          <p className="mt-6 font-mono text-sm leading-relaxed max-w-md fade-up-4" style={{ color: 'var(--a-muted)' }}>
            I turn Amazon Private Label products into Premium Brands using
            advanced AI-Powered Design & Strategic A+ Content.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 fade-up-4">
            <a
              href="#portfolio"
              className="font-bebas text-lg tracking-widest px-8 py-3 border-2 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-inv)',
                borderColor: 'var(--accent)',
                boxShadow: '4px 4px 0px var(--a-muted)',
              }}
            >
              VIEW PORTFOLIO
            </a>
            <a
              href="#contact"
              className="font-bebas text-lg tracking-widest px-8 py-3 border-2 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--a-text)',
                borderColor: 'var(--a-border)',
                boxShadow: '4px 4px 0px var(--a-subtle)',
              }}
            >
              HIRE ME
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10 fade-up-5">
            {[
              { num: '8+',   label: 'YEARS EXP' },
              { num: '200+', label: 'PROJECTS' },
              { num: '7+',   label: 'BRANDS' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-bebas leading-none" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--a-text)' }}>{s.num}</div>
                <div className="font-mono text-[9px] tracking-[0.25em] mt-1" style={{ color: 'var(--a-muted)' }}>{s.label}</div>
              </div>
            ))}
            {/* Dividers */}
            <div className="hidden sm:flex items-center gap-10 pl-0">
            </div>
          </div>
        </div>

        {/* ── RIGHT: PHOTO ── */}
        <div className="relative flex justify-center md:justify-end fade-up-3">
          <div className="relative w-72 h-96 md:w-80 md:h-[30rem]">
            {/* Offset shadow block */}
            <div className="absolute inset-0 translate-x-4 translate-y-4" style={{ backgroundColor: 'var(--a-subtle)', border: '1px solid var(--a-border)' }} />

            {/* Photo frame */}
            <div className="absolute inset-0 overflow-hidden border-2" style={{ borderColor: 'var(--a-border)', backgroundColor: 'var(--a-subtle)' }}>
              <img
                src="/images/profile.avif"
                alt="Muhammad Kashif"
                className="w-full h-full object-cover object-top"
                style={{ filter: 'grayscale(30%) contrast(1.1)' }}
              />
              {/* Gradient overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, var(--a-bg), transparent)' }} />
            </div>

            {/* Label tag */}
            <div className="absolute -bottom-4 -left-4 px-4 py-2 border-2" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
              <span className="font-bebas text-xs tracking-widest" style={{ color: 'var(--a-text)' }}>
                AMAZON BRAND DESIGNER
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t" style={{ borderColor: 'var(--a-border)' }}>
        <div className="marquee-track py-2">
          {Array(10).fill('AMAZON A+ CONTENT — BRAND IDENTITY — AI DESIGN — INFOGRAPHICS — LISTING OPTIMIZATION — ').map((t, i) => (
            <span key={i} className="font-bebas text-sm tracking-widest mx-4" style={{ color: 'var(--a-subtle)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-8 hidden md:flex flex-col items-center gap-2 scroll-bounce">
        <div className="font-mono text-[9px] tracking-[0.3em] rotate-90 origin-center mb-4" style={{ color: 'var(--a-muted)' }}>SCROLL</div>
        <div className="w-px h-12" style={{ backgroundColor: 'var(--a-border)' }} />
      </div>
    </section>
  )
}
