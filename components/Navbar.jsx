'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ThemeProvider'

const links = [
  { label: 'HOME',         href: '#home' },
  { label: 'ABOUT',        href: '#about' },
  { label: 'SERVICES',     href: '#services' },
  { label: 'PORTFOLIO',    href: '#portfolio' },
  { label: 'BLOG',         href: '/blog/' },
  { label: 'CONTACT',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--a-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--a-border)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a
          href="#home"
          className="font-bebas tracking-[0.12em] transition-colors"
          style={{ color: 'var(--a-text)', fontSize: 'clamp(0.85rem, 2vw, 1.05rem)' }}
        >
          MUHAMMAD KASHIF<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-mono text-[10px] tracking-widest underline-anim transition-colors"
                style={{ color: 'var(--a-muted)' }}
                onMouseEnter={e => e.target.style.color = 'var(--a-text)'}
                onMouseLeave={e => e.target.style.color = 'var(--a-muted)'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Theme toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center border transition-all duration-200"
            style={{
              borderColor: 'var(--a-border)',
              color: 'var(--a-text)',
            }}
          >
            {theme === 'dark' ? (
              /* Sun icon */
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* CTA — hidden on mobile */}
          <a
            href="#contact"
            className="hidden md:block font-bebas text-sm tracking-widest px-5 py-2 border-2 transition-all"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-inv)',
              borderColor: 'var(--accent)',
            }}
          >
            HIRE ME
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: 'var(--a-text)', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : '' }} />
            <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: 'var(--a-text)', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: 'var(--a-text)', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : '' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-4" style={{ backgroundColor: 'var(--a-bg)', borderTop: '1px solid var(--a-border)' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-bebas text-2xl tracking-widest transition-colors"
              style={{ color: 'var(--a-text)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 font-bebas text-lg tracking-widest px-5 py-3 text-center border-2"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-inv)', borderColor: 'var(--accent)' }}
          >
            HIRE ME
          </a>
        </div>
      )}
    </nav>
  )
}
