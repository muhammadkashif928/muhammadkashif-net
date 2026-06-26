'use client'
import { useEffect, useRef } from 'react'

const skills = [
  { label: 'AI Concept Art',        pct: 91 },
  { label: 'Brand Identity',        pct: 80 },
  { label: 'High-End Retouching',   pct: 79 },
  { label: 'Competitor Analysis',   pct: 59 },
  { label: 'Infographic Design',    pct: 58 },
  { label: 'A+ Content Strategy',   pct: 51 },
]

const brands = ['Angelus', 'Tarrago', 'Eagle Shoe Care', 'Leather Hero', 'Lincoln', 'Silver', 'Fiamme']

export default function About() {
  const barsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => bar.classList.add('animate'))
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (barsRef.current) observer.observe(barsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)', padding: '4rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>▶ WHO I AM</p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* ── BIO ── */}
          <div>
            <h2 className="font-bebas leading-none mb-8 sm:mb-10" style={{ fontSize: 'clamp(2.8rem,7vw,5rem)', color: 'var(--b-text)' }}>
              TRACK
              <br />
              <span style={{ WebkitTextStroke: '2px var(--b-text)', color: 'transparent' }}>RECORD</span>
            </h2>

            <p className="font-mono text-sm sm:text-base leading-relaxed mb-5" style={{ color: 'var(--b-muted)' }}>
              I am Muhammad Kashif, a Strategic Brand Developer for Amazon Sellers.
              With over <strong style={{ color: 'var(--b-text)' }}>8 years of experience</strong>, I go beyond simple
              design to manage the entire visual lifecycle of U.S.-based brands.
            </p>
            <p className="font-mono text-sm sm:text-base leading-relaxed mb-5" style={{ color: 'var(--b-muted)' }}>
              I have successfully optimized main images and infographics for
              hundreds of products and crafted high-converting A+ Content
              strategies that dominate their categories.
            </p>
            <p className="font-mono text-sm sm:text-base leading-relaxed" style={{ color: 'var(--b-muted)' }}>
              My approach blends traditional design mastery with cutting-edge AI,
              transforming standard product photography into stunning 8K assets
              that establish instant trust and drive sales.
            </p>

            {/* Company badge */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-6 border-2 card-lift inline-block w-full sm:w-auto" style={{ borderColor: 'var(--b-border)', boxShadow: '4px 4px 0px var(--b-border)' }}>
              <p className="font-bebas text-xl sm:text-2xl tracking-widest" style={{ color: 'var(--b-text)' }}>Designer Trends INC</p>
              <p className="font-mono text-xs tracking-widest mt-1" style={{ color: 'var(--b-muted)' }}>Creative Designer Specialist · 2018 – Present</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {brands.map(b => (
                  <span key={b} className="font-mono text-xs px-2 py-1 border" style={{ borderColor: 'var(--b-border)', color: 'var(--b-muted)' }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 border-t" style={{ borderColor: 'var(--b-border)' }}>
              {[
                { num: '8+',   label: 'Years\nExperience' },
                { num: '200+', label: 'Products\nOptimised' },
                { num: '50+',  label: 'Freelance\nClients' },
              ].map((s, i) => (
                <div key={s.label} className="py-5" style={{ borderRight: i < 2 ? '1px solid var(--b-border)' : 'none', paddingLeft: i > 0 ? '1rem' : 0, paddingRight: i < 2 ? '1rem' : 0 }}>
                  <div className="font-bebas leading-none" style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', color: 'var(--b-text)' }}>{s.num}</div>
                  <div className="font-mono text-xs tracking-widest mt-1 whitespace-pre-line leading-relaxed" style={{ color: 'var(--b-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SKILLS ── */}
          <div ref={barsRef}>
            <h3 className="font-bebas text-2xl sm:text-3xl tracking-widest mb-8 sm:mb-10" style={{ color: 'var(--b-text)' }}>SPECIALIZED SKILLS</h3>

            <div className="flex flex-col gap-6 sm:gap-7">
              {skills.map((s, i) => (
                <div key={s.label}>
                  <div className="flex justify-between items-baseline mb-2 sm:mb-3">
                    <span className="font-mono text-xs sm:text-sm tracking-widest" style={{ color: 'var(--b-text)' }}>
                      {s.label.toUpperCase()}
                    </span>
                    <span className="font-bebas text-lg sm:text-xl" style={{ color: 'var(--b-muted)' }}>{s.pct}%</span>
                  </div>
                  <div className="h-2 relative overflow-hidden" style={{ backgroundColor: 'var(--b-subtle)', border: '1px solid var(--b-border)' }}>
                    <div
                      className="h-full skill-bar-fill"
                      style={{ '--pct': `${s.pct}%`, backgroundColor: 'var(--b-text)', animationDelay: `${i * 0.12}s`, width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-10 sm:mt-12 p-5 sm:p-6 border-l-2" style={{ borderColor: 'var(--b-text)', backgroundColor: 'var(--b-subtle)' }}>
              <p className="font-mono text-sm sm:text-base leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                "My approach blends data-driven competitor analysis with AI-enhanced
                visuals — every image I create is engineered to dominate search
                results and convert browsers into buyers."
              </p>
              <p className="font-mono text-xs tracking-widest mt-4" style={{ color: 'var(--b-text)' }}>— MUHAMMAD KASHIF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
