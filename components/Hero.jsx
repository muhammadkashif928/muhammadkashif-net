'use client'
import { useEffect, useState } from 'react'

const roles = [
  'AI-POWERED BRAND DESIGNER',
  'AMAZON CREATIVE SPECIALIST',
  'A+ CONTENT STRATEGIST',
  '8K AI RETOUCHING EXPERT',
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
      <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: 'var(--a-border)' }} />

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28" style={{ backgroundColor: 'var(--accent)', opacity: 0.08 }} />
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 border-b-2 border-l-2" style={{ borderColor: 'var(--a-border)' }} />
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-px" style={{ backgroundColor: 'var(--accent)', opacity: 0.3 }} />
      <div className="absolute bottom-0 left-0 w-px h-32 sm:h-48" style={{ backgroundColor: 'var(--accent)', opacity: 0.3 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center w-full">

        {/* ── TEXT ── */}
        <div>
          <div className="fade-up-1 flex items-center gap-2 mb-5 sm:mb-6">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
            <p className="font-mono text-xs tracking-[0.3em]" style={{ color: 'var(--a-muted)' }}>
              AVAILABLE FOR PROJECTS
            </p>
          </div>

          <h1 className="font-bebas leading-none fade-up-2" style={{ fontSize: 'clamp(3.5rem,10vw,8.5rem)', color: 'var(--a-text)' }}>
            MUHAMMAD
            <br />
            <span style={{ color: 'var(--accent)', WebkitTextStroke: '1px var(--a-border)' }}>KASHIF</span>
          </h1>

          {/* Typewriter */}
          <div className="mt-4 sm:mt-5 h-10 sm:h-12 flex items-center fade-up-3">
            <span className="font-mono tracking-widest" style={{ fontSize: 'clamp(0.7rem,2vw,0.85rem)', color: 'var(--a-text)' }}>
              {displayed}<span className="cursor-blink" style={{ color: 'var(--accent)' }}>|</span>
            </span>
          </div>

          <p className="mt-5 sm:mt-6 font-mono text-sm sm:text-base leading-relaxed max-w-md fade-up-4" style={{ color: 'var(--a-muted)' }}>
            Hire an Amazon brand &amp; listing designer who turns private label
            products into premium brands for US, UK &amp; Canada sellers — with
            high-converting listing images, product infographics, and strategic
            A+ Content.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 fade-up-4">
            <a
              href="/my-portfolio/"
              className="btn-brutal font-bebas text-base sm:text-lg tracking-widest px-6 sm:px-8 py-3 border-2"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-inv)', borderColor: 'var(--accent)', boxShadow: '4px 4px 0px var(--a-muted)' }}
            >
              VIEW PORTFOLIO
            </a>
            <a
              href="/contact-me/"
              className="btn-brutal font-bebas text-base sm:text-lg tracking-widest px-6 sm:px-8 py-3 border-2"
              style={{ backgroundColor: 'transparent', color: 'var(--a-text)', borderColor: 'var(--a-border)', boxShadow: '4px 4px 0px var(--a-subtle)' }}
            >
              HIRE ME
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-14 grid grid-cols-3 sm:flex sm:gap-10 gap-0 border-t fade-up-5" style={{ borderColor: 'var(--a-border)' }}>
            {[
              { num: '8+',   label: 'YEARS EXP' },
              { num: '200+', label: 'PRODUCTS' },
              { num: '50+',  label: 'CLIENTS' },
            ].map((s, i) => (
              <div key={s.label} className="py-5 text-center sm:text-left" style={{ borderRight: i < 2 ? '1px solid var(--a-border)' : 'none', paddingLeft: i > 0 ? '1rem' : 0, paddingRight: i < 2 ? '1rem' : 0 }}>
                <div className="font-bebas leading-none" style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: 'var(--a-text)' }}>{s.num}</div>
                <div className="font-mono text-xs tracking-[0.2em] mt-1" style={{ color: 'var(--a-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PHOTO: PREMIUM 8K FRAME ── */}
        <div className="relative flex justify-center md:justify-end fade-up-3 order-first md:order-last">
          <div className="relative w-60 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[30rem]">

            {/* Rotating glow halo */}
            <div className="hero-glow" aria-hidden="true" />

            {/* Offset backing plate */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" style={{ backgroundColor: 'var(--a-subtle)', border: '1px solid var(--a-border)' }} />

            {/* Photo frame */}
            <div className="absolute inset-0 overflow-hidden border-2" style={{ borderColor: 'var(--a-border)', backgroundColor: 'var(--a-subtle)' }}>
              <img
                src="/images/profile.avif"
                alt="Muhammad Kashif, Amazon Brand Designer"
                width="640"
                height="960"
                fetchPriority="high"
                className="hero-photo-img w-full h-full object-cover object-top"
                style={{ filter: 'grayscale(20%) contrast(1.12) saturate(1.05)' }}
              />

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, var(--a-bg), transparent)' }} />

              {/* Light sweep + scanline */}
              <div className="hero-shine" aria-hidden="true" />
              <div className="hero-scanline" aria-hidden="true" />

              {/* HUD corner brackets */}
              <div className="hero-bracket tl" aria-hidden="true" />
              <div className="hero-bracket tr" aria-hidden="true" />
              <div className="hero-bracket bl" aria-hidden="true" />
              <div className="hero-bracket br" aria-hidden="true" />

            </div>

            {/* Name plate */}
            <div className="absolute -bottom-4 -left-3 sm:-left-4 px-3 sm:px-4 py-2 border-2" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
              <span className="font-bebas text-xs sm:text-sm tracking-widest" style={{ color: 'var(--a-text)' }}>
                AMAZON BRAND DESIGNER
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t" style={{ borderColor: 'var(--a-border)' }}>
        <div className="marquee-track py-2">
          {Array(10).fill('AMAZON A+ CONTENT — BRAND IDENTITY — AI DESIGN — INFOGRAPHICS — LISTING OPTIMIZATION — ').map((t, i) => (
            <span key={i} className="font-bebas text-xs sm:text-sm tracking-widest mx-4" style={{ color: 'var(--a-subtle)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="absolute bottom-14 right-6 hidden lg:flex flex-col items-center gap-2 scroll-bounce">
        <div className="font-mono text-[10px] tracking-[0.3em] rotate-90 origin-center mb-4" style={{ color: 'var(--a-muted)' }}>SCROLL</div>
        <div className="w-px h-12" style={{ backgroundColor: 'var(--a-border)' }} />
      </div>
    </section>
  )
}
