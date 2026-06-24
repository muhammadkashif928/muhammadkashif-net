'use client'
const socials = [
  { label: 'UPWORK',    href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
  { label: 'LINKEDIN',  href: 'https://www.linkedin.com/in/muhammad-kashif-228554243' },
  { label: 'FACEBOOK',  href: 'https://www.facebook.com/profile.php?id=100011667847244' },
  { label: 'INSTAGRAM', href: 'https://instagram.com/muhamadkashif928' },
  { label: 'WHATSAPP',  href: 'https://wa.me/923424625844' },
]

const navLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Services',      href: '#services' },
  { label: 'Portfolio',     href: '#portfolio' },
  { label: 'Blog',          href: '/blog/' },
  { label: 'Contact',       href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--a-bg)', borderTop: '1px solid var(--a-border)' }}>

      {/* Marquee strip */}
      <div className="overflow-hidden py-4 border-b" style={{ borderColor: 'var(--a-border)' }}>
        <div className="marquee-track">
          {Array(12).fill('AMAZON BRAND DESIGNER — A+ CONTENT — PRODUCT PHOTOGRAPHY — AI DESIGN — ').map((t, i) => (
            <span key={i} className="font-bebas text-3xl tracking-widest mx-6" style={{ color: 'var(--a-subtle)' }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="font-bebas leading-none mb-4" style={{ fontSize: '3.5rem', color: 'var(--a-text)' }}>
              MK<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p className="font-mono text-xs leading-relaxed max-w-xs" style={{ color: 'var(--a-muted)' }}>
              Turning Amazon Private Label products into Premium Brands using
              advanced AI-Powered Design & Strategic A+ Content.
            </p>
            <p className="font-mono text-[10px] mt-4 tracking-widest" style={{ color: 'var(--a-subtle)' }}>
              Burewala, Vehari, Pakistan
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bebas text-sm tracking-widest mb-6" style={{ color: 'var(--accent)' }}>NAVIGATION</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-mono text-[10px] tracking-widest transition-colors" style={{ color: 'var(--a-muted)' }}
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
            <h4 className="font-bebas text-sm tracking-widest mb-6" style={{ color: 'var(--accent)' }}>CONNECT</h4>
            <ul className="flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[10px] tracking-widest transition-colors" style={{ color: 'var(--a-muted)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--a-text)'}
                    onMouseLeave={e => e.target.style.color = 'var(--a-muted)'}
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t" style={{ borderColor: 'var(--a-border)' }}>
          <p className="font-mono text-[9px] tracking-widest" style={{ color: 'var(--a-subtle)' }}>
            © {new Date().getFullYear()} MUHAMMAD KASHIF. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {['DISCLAIMER', 'PRIVACY POLICY', 'TERMS'].map((l) => (
              <span key={l} className="font-mono text-[9px] tracking-widest cursor-default" style={{ color: 'var(--a-subtle)' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
