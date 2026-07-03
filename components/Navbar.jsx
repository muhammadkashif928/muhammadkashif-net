'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/components/ThemeProvider'

const links = [
  { label: 'HOME',      href: '/' },
  { label: 'ABOUT',     href: '/about/' },
  { label: 'SERVICES',  href: '/services/' },
  { label: 'PORTFOLIO', href: '/my-portfolio/' },
  { label: 'BLOG',      href: '/blog/' },
  { label: 'RESUME',    href: '/resume/' },
  { label: 'CONTACT',   href: '/contact-me/' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.replace(/\/$/, ''))
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled && !menuOpen ? 'nav-glass' : ''}`}
      style={{
        backgroundColor: menuOpen ? 'var(--a-bg)' : scrolled ? undefined : 'transparent',
        borderBottom: scrolled ? '1px solid var(--a-border)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-[4.5rem]">

        {/* Logo */}
        <a
          href="/"
          className="font-bebas tracking-[0.08em] transition-colors shrink-0 leading-none"
          style={{ color: 'var(--a-text)', fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)' }}
        >
          MUHAMMAD KASHIF<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop links — only xl screens get all 7 */}
        <ul className="hidden xl:flex items-center gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`font-mono text-xs tracking-widest transition-colors relative inline-block py-1 ${isActive(l.href) ? '' : 'underline-anim'}`}
                style={{ color: isActive(l.href) ? 'var(--a-text)' : 'var(--a-muted)' }}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px" style={{ backgroundColor: 'var(--accent)' }} />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center border shrink-0 transition-all"
            style={{ borderColor: 'var(--a-border)', color: 'var(--a-text)' }}
          >
            {theme === 'dark' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* CTA — sm+ */}
          <a
            href="/contact-me/"
            className="btn-brutal hidden sm:block font-bebas text-sm tracking-widest px-4 sm:px-5 py-2 border-2 shrink-0"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-inv)', borderColor: 'var(--accent)' }}
          >
            HIRE ME
          </a>

          {/* Hamburger — xl hides */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2 shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: 'var(--a-text)', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : '' }} />
            <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: 'var(--a-text)', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: 'var(--a-text)', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : '' }} />
          </button>
        </div>
      </div>

      {/* Reading progress bar */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 h-[2px] pointer-events-none" style={{ width: `${progress * 100}%`, backgroundColor: 'var(--accent)', opacity: 0.8, transition: 'width 0.1s linear' }} />
      )}

      {/* Mobile/Tablet menu */}
      {menuOpen && (
        <div className="menu-slide xl:hidden px-4 sm:px-6 py-6 flex flex-col gap-2" style={{ backgroundColor: 'var(--a-bg)', borderTop: '1px solid var(--a-border)' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-bebas text-2xl sm:text-3xl tracking-widest py-2 transition-colors block"
              style={{ color: isActive(l.href) ? 'var(--accent)' : 'var(--a-text)', borderBottom: '1px solid var(--a-border)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact-me/"
            onClick={() => setMenuOpen(false)}
            className="mt-4 font-bebas text-lg tracking-widest px-5 py-3 text-center border-2"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-inv)', borderColor: 'var(--accent)' }}
          >
            HIRE ME →
          </a>
        </div>
      )}
    </nav>
  )
}
