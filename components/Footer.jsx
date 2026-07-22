'use client'
import { useState, useEffect } from 'react'

const socials = [
  { label: 'UPWORK',    href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
  { label: 'LINKEDIN',  href: 'https://www.linkedin.com/in/muhammad-kashif-228554243' },
  { label: 'FACEBOOK',  href: 'https://www.facebook.com/profile.php?id=100011667847244' },
  { label: 'INSTAGRAM', href: 'https://instagram.com/muhamadkashif928' },
  { label: 'WHATSAPP',  href: 'https://wa.me/60179152084' },
]

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about/' },
  { label: 'Services',  href: '/services/' },
  { label: 'Portfolio', href: '/my-portfolio/' },
  { label: 'Blog',      href: '/blog/' },
  { label: 'Resume',    href: '/resume/' },
  { label: 'Contact',   href: '/contact-me/' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
]

const linkStyle = { color: 'var(--a-muted)' }

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer style={{ backgroundColor: 'var(--a-bg)', borderTop: '1px solid var(--a-border)' }}>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`back-to-top ${showTop ? '' : 'hidden-btn'}`}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Marquee */}
      <div className="overflow-hidden py-3 sm:py-4 border-b" style={{ borderColor: 'var(--a-border)' }}>
        <div className="marquee-track">
          {Array(12).fill('AMAZON BRAND DESIGNER — A+ CONTENT — LEATHER & FOOTWEAR SPECIALIST — PRODUCT INFOGRAPHICS — ').map((t, i) => (
            <span key={i} className="font-bebas text-2xl sm:text-3xl tracking-widest mx-5 sm:mx-6" style={{ color: 'var(--a-subtle)' }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main grid — 1 col mobile, 2 col sm, 4 col lg */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand — spans 2 cols on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="font-bebas tracking-[0.08em] leading-tight mb-4" style={{ fontSize: '1.35rem', color: 'var(--a-text)' }}>
              MUHAMMAD KASHIF<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p className="font-mono text-sm leading-relaxed mb-4" style={{ color: 'var(--a-muted)' }}>
              Turning Amazon private label products — especially leather care, shoe
              care & footwear brands — into premium listings that convert.
            </p>
            <p className="font-mono text-xs tracking-widest" style={{ color: 'var(--a-subtle)' }}>📍 Kuching, Sarawak, Malaysia</p>
            <p className="font-mono text-xs tracking-widest mt-1" style={{ color: 'var(--a-subtle)' }}>✦ Working remotely with US, UK &amp; Canada brands</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bebas text-base tracking-widest mb-4 sm:mb-5" style={{ color: 'var(--accent)' }}>NAVIGATION</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-mono text-xs sm:text-sm tracking-widest transition-colors" style={linkStyle}
                    onMouseEnter={e => e.target.style.color = 'var(--a-text)'}
                    onMouseLeave={e => e.target.style.color = 'var(--a-muted)'}
                  >
                    {l.label.toUpperCase()} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bebas text-base tracking-widest mb-4 sm:mb-5" style={{ color: 'var(--accent)' }}>CONNECT</h4>
            <ul className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-xs sm:text-sm tracking-widest transition-colors" style={linkStyle}
                    onMouseEnter={e => e.target.style.color = 'var(--a-text)'}
                    onMouseLeave={e => e.target.style.color = 'var(--a-muted)'}
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bebas text-base tracking-widest mb-4 sm:mb-5" style={{ color: 'var(--accent)' }}>LEGAL</h4>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-mono text-xs sm:text-sm tracking-widest transition-colors" style={linkStyle}
                    onMouseEnter={e => e.target.style.color = 'var(--a-text)'}
                    onMouseLeave={e => e.target.style.color = 'var(--a-muted)'}
                  >
                    {l.label.toUpperCase()} →
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-4 border" style={{ borderColor: 'var(--a-border)' }}>
              <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--a-muted)' }}>
                This site uses cookies and may display ads. See our{' '}
                <a href="/privacy-policy/" style={{ color: 'var(--a-text)' }}>Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 border-t" style={{ borderColor: 'var(--a-border)' }}>
          <p className="font-mono text-xs tracking-widest text-center sm:text-left" style={{ color: 'var(--a-subtle)' }}>
            © {new Date().getFullYear()} MUHAMMAD KASHIF. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="font-mono text-xs tracking-widest transition-colors" style={{ color: 'var(--a-subtle)' }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
