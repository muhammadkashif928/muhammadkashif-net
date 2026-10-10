import LxShell from '@/components/lx/LxShell'
import { Icon, Pill } from '@/components/lx/Icons'

export const metadata = {
  title: 'Page Not Found | Muhammad Kashif',
  robots: { index: false, follow: false },
}

const links = [
  { href: '/my-portfolio/', label: 'Work', note: 'Case studies and before/afters' },
  { href: '/services/', label: 'Services', note: 'Scope, prices and turnaround' },
  { href: '/blog/', label: 'Blog', note: 'Guides on listing design' },
  { href: '/contact-me/', label: 'Contact', note: 'Tell me about your product' },
]

export default function NotFound() {
  return (
    <LxShell>
      <main id="main-content">
        <section className="phero nf">
          <div className="phero__wm rv" data-gate="" aria-hidden="true">404</div>
          <div className="shell phero__in">
            <div className="phero__main">
              <div className="rv" data-gate="" style={{ '--ry': '10px', '--rd': '200ms' }}><span className="eyebrow">Error 404</span></div>
              <h1 className="phero__h1 lines" data-gate="" data-delay="250" data-stagger="120" data-lines="This page|has moved on.">This page<br />has moved on.</h1>
              <p className="phero__lead rv" data-gate="" style={{ '--ry': '12px', '--rd': '600ms' }}>The link may be old or mistyped. Here are the places most people are looking for.</p>
              <div className="ctas rv" data-gate="" style={{ '--ry': '10px', '--rd': '700ms' }}>
                <Pill variant="dark" href="/">Back to home</Pill>
                <Pill variant="outline" arrow={null} data-go="contact">Ask a question</Pill>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="shell section__in section__in--tight">
            <ul className="srows">
              {links.map((l, i) => (
                <li key={l.href} className="rv" style={{ '--rd': `${i * 80}ms` }}>
                  <a className="srow-link" href={l.href}>
                    <div className="srow">
                      <span className="srow__idx">{String(i + 1).padStart(2, '0')}</span>
                      <h2 style={{ flex: 1, fontSize: '1.875rem', fontWeight: 500, letterSpacing: '-.01em' }}>{l.label}</h2>
                      <p>{l.note}</p>
                      <span className="srow__badge"><Icon name="arrow-ur" /></span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
