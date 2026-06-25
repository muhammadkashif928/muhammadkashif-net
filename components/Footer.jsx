'use client'
const socials = [
  { label: 'UPWORK',    href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
  { label: 'LINKEDIN',  href: 'https://www.linkedin.com/in/muhammad-kashif-228554243' },
  { label: 'FACEBOOK',  href: 'https://www.facebook.com/profile.php?id=100011667847244' },
  { label: 'INSTAGRAM', href: 'https://instagram.com/muhamadkashif928' },
  { label: 'WHATSAPP',  href: 'https://wa.me/923424625844' },
]

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'About',       href: '/about/' },
  { label: 'Services',    href: '/services/' },
  { label: 'Portfolio',   href: '/my-portfolio/' },
  { label: 'Blog',        href: '/blog/' },
  { label: 'Resume',      href: '/resume/' },
  { label: 'Contact',     href: '/contact-me/' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
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
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-bebas tracking-[0.1em] leading-tight mb-4" style={{ fontSize: '1.4rem', color: 'var(--a-text)' }}>
              MUHAMMAD KASHIF<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p className="font-mono text-xs leading-relaxed max-w-xs mb-4" style={{ color: 'var(--a-muted)' }}>
              Turning Amazon Private Label products into Premium Brands using
              advanced AI-Powered Design & Strategic A+ Content.
            </p>
            <p className="font-mono text-[10px] tracking-widest" style={{ color: 'var(--a-subtle)' }}>
              Kuching, Sarawak, Malaysia
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bebas text-sm tracking-widest mb-5" style={{ color: 'var(--accent)' }}>NAVIGATION</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-mono text-[10px] tracking-widest transition-colors"
                    style={{ color: 'var(--a-muted)' }}
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
            <h4 className="font-bebas text-sm tracking-widest mb-5" style={{ color: 'var(--accent)' }}>CONNECT</h4>
            <ul className="flex flex-col gap-2.5">
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

          {/* Legal */}
          <div>
            <h4 className="font-bebas text-sm tracking-widest mb-5" style={{ color: 'var(--accent)' }}>LEGAL</h4>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((l) => (
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
            <div className="mt-6 p-4 border" style={{ borderColor: 'var(--a-border)' }}>
              <p className="font-mono text-[9px] leading-relaxed" style={{ color: 'var(--a-muted)' }}>
                This site uses cookies and may display ads via Google AdSense.
                See our <a href="/privacy-policy/" style={{ color: 'var(--a-text)' }}>Privacy Policy</a> for details.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 border-t" style={{ borderColor: 'var(--a-border)' }}>
          <p className="font-mono text-[9px] tracking-widest" style={{ color: 'var(--a-subtle)' }}>
            © {new Date().getFullYear()} MUHAMMAD KASHIF. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="font-mono text-[9px] tracking-widest transition-colors" style={{ color: 'var(--a-subtle)' }}
                onMouseEnter={e => e.target.style.color = 'var(--a-muted)'}
                onMouseLeave={e => e.target.style.color = 'var(--a-subtle)'}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
