'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'BLOG', href: '/blog/' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a] border-b-2 border-[#f5f5f0]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="font-bebas text-2xl tracking-widest text-[#f5f5f0] hover:text-[#e8e800] transition-colors"
        >
          MUHAMMAD KASHIF<span className="text-[#e8e800]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-widest text-[#f5f5f0] underline-anim hover:text-[#e8e800] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block font-bebas text-sm tracking-widest px-5 py-2 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#0a0a0a] shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
        >
          HIRE ME
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#f5f5f0] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#f5f5f0] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#f5f5f0] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t-2 border-[#f5f5f0] px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-bebas text-2xl tracking-widest text-[#f5f5f0] hover:text-[#e8e800] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 font-bebas text-lg tracking-widest px-5 py-2 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#f5f5f0] text-center"
          >
            HIRE ME
          </a>
        </div>
      )}
    </nav>
  )
}
