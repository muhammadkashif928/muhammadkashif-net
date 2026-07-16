import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Page Not Found | Muhammad Kashif',
  robots: { index: false, follow: false },
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Blog' },
  { href: '/my-portfolio/', label: 'Portfolio' },
  { href: '/services/', label: 'Services' },
  { href: '/contact-me/', label: 'Contact' },
]

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-16 sm:pt-[4.5rem] min-h-[70vh]" style={{ backgroundColor: 'var(--a-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>
            ▶ ERROR 404
          </p>
          <h1 className="font-bebas leading-none" style={{ fontSize: 'clamp(3rem,9vw,7rem)', color: 'var(--a-text)' }}>
            Page Not Found
          </h1>
          <p className="font-mono text-sm sm:text-base mt-5 sm:mt-6 max-w-xl leading-relaxed" style={{ color: 'var(--a-muted)' }}>
            This page doesn&apos;t exist — it may have moved when the site was rebuilt. Try one of these instead:
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm px-5 py-3 border-2 transition-colors hover:opacity-80"
                style={{ borderColor: 'var(--a-text)', color: 'var(--a-text)' }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
