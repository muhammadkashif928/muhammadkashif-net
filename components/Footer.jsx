const socials = [
  { label: 'UPWORK', href: 'https://www.upwork.com/freelancers/~016edc19243e405472' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/muhammad-kashif-228554243' },
  { label: 'FACEBOOK', href: 'https://www.facebook.com/profile.php?id=100011667847244' },
  { label: 'INSTAGRAM', href: 'https://instagram.com/muhamadkashif928' },
  { label: 'WHATSAPP', href: 'https://wa.me/923424625844' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-[#f5f5f0]/20">
      {/* Top strip */}
      <div className="border-b border-[#f5f5f0]/10 py-6 overflow-hidden">
        <div className="marquee-track">
          {Array(10).fill('AMAZON BRAND DESIGNER — ').map((t, i) => (
            <span key={i} className="font-bebas text-4xl tracking-widest text-[#f5f5f0]/5 mx-4">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-bebas text-5xl text-[#f5f5f0] leading-none">
              MK<span className="text-[#e8e800]">.</span>
            </div>
            <p className="font-mono text-xs text-[#f5f5f0]/40 mt-4 leading-relaxed max-w-xs">
              Turning Amazon Private Label products into Premium Brands using
              advanced AI-Powered Design & Strategic A+ Content.
            </p>
            <p className="font-mono text-xs text-[#f5f5f0]/30 mt-4">
              Burewala, Vehari, Pakistan
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bebas text-sm tracking-widest text-[#e8e800] mb-6">
              NAVIGATION
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Blog', href: '/blog/' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-mono text-xs tracking-widest text-[#f5f5f0]/40 hover:text-[#f5f5f0] transition-colors"
                  >
                    {l.label.toUpperCase()} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bebas text-sm tracking-widest text-[#e8e800] mb-6">
              CONNECT
            </h4>
            <ul className="flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-widest text-[#f5f5f0]/40 hover:text-[#f5f5f0] transition-colors"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-[#f5f5f0]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] tracking-widest text-[#f5f5f0]/20">
            © {new Date().getFullYear()} MUHAMMAD KASHIF. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {['DISCLAIMER', 'PRIVACY POLICY', 'TERMS'].map((l) => (
              <span
                key={l}
                className="font-mono text-[10px] tracking-widest text-[#f5f5f0]/20 cursor-default hover:text-[#f5f5f0]/40 transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
