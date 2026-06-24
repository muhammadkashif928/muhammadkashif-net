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
        setDisplayed(current.slice(0, i + 1))
        i++
        if (i === current.length) {
          clearInterval(interval)
          setTimeout(() => setTyping(false), 1800)
        }
      } else {
        setDisplayed(current.slice(0, i - 1))
        i--
        if (i === 0) {
          clearInterval(interval)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setTyping(true)
        }
      }
    }, typing ? 60 : 35)

    return () => clearInterval(interval)
  }, [roleIndex, typing])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#f5f5f0 1px, transparent 1px), linear-gradient(90deg, #f5f5f0 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent block top-right */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8e800] opacity-90" />
      <div className="absolute top-32 right-32 w-16 h-16 border-2 border-[#f5f5f0] opacity-20" />

      {/* Bottom left decoration */}
      <div className="absolute bottom-0 left-0 w-48 h-1 bg-[#e8e800]" />
      <div className="absolute bottom-0 left-0 w-1 h-48 bg-[#e8e800]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-[#e8e800] mb-4 fade-up-delay-1">
            ▶ AVAILABLE FOR PROJECTS
          </p>

          <h1 className="font-bebas text-[clamp(4rem,10vw,8rem)] leading-none text-[#f5f5f0] fade-up-delay-2">
            MUHAMMAD
            <br />
            <span className="text-[#e8e800]">KASHIF</span>
          </h1>

          <div className="mt-4 h-12 flex items-center fade-up-delay-3">
            <span className="font-mono text-sm md:text-base text-[#f5f5f0] tracking-widest">
              {displayed}
              <span className="cursor-blink text-[#e8e800]">|</span>
            </span>
          </div>

          <p className="mt-6 font-mono text-sm text-[#f5f5f0]/60 leading-relaxed max-w-md fade-up-delay-4">
            I turn Amazon Private Label products into Premium Brands using
            advanced AI-Powered Design & Strategic A+ Content.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 fade-up-delay-4">
            <a
              href="#portfolio"
              className="font-bebas text-lg tracking-widest px-8 py-3 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] shadow-[4px_4px_0px_#f5f5f0] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_#f5f5f0] transition-all"
            >
              VIEW PORTFOLIO
            </a>
            <a
              href="#contact"
              className="font-bebas text-lg tracking-widest px-8 py-3 bg-transparent text-[#f5f5f0] border-2 border-[#f5f5f0] shadow-[4px_4px_0px_#e8e800] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_#e8e800] transition-all"
            >
              HIRE ME
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8 fade-up-delay-4">
            {[
              { num: '8+', label: 'YEARS EXP' },
              { num: '200+', label: 'PROJECTS' },
              { num: '7+', label: 'BRANDS' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-bebas text-4xl text-[#e8e800]">{s.num}</div>
                <div className="font-mono text-[10px] tracking-widest text-[#f5f5f0]/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo block */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem]">
            {/* Shadow block */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#e8e800]" />
            {/* Border frame */}
            <div className="absolute inset-0 border-2 border-[#f5f5f0] bg-[#1a1a1a] overflow-hidden">
              <img
                src="/images/profile.avif"
                alt="Muhammad Kashif"
                className="w-full h-full object-cover object-top grayscale contrast-125"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                  const placeholder = document.createElement('span')
                  placeholder.className = 'font-bebas text-6xl text-[#f5f5f0]/20'
                  placeholder.textContent = 'MK'
                  e.target.parentElement.appendChild(placeholder)
                }}
              />
            </div>
            {/* Label tag */}
            <div className="absolute -bottom-4 -left-4 bg-[#e8e800] border-2 border-[#0a0a0a] px-4 py-2">
              <span className="font-bebas text-sm tracking-widest text-[#0a0a0a]">
                AMAZON BRAND DESIGNER
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 w-full border-t-2 border-[#f5f5f0]/10 overflow-hidden">
        <div className="marquee-track py-2">
          {Array(8).fill('AMAZON A+ CONTENT — BRAND IDENTITY — AI DESIGN — INFOGRAPHICS — PRODUCT PHOTOGRAPHY — LISTING OPTIMIZATION — ').map((t, i) => (
            <span key={i} className="font-bebas text-sm tracking-widest text-[#f5f5f0]/20 mx-4">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
