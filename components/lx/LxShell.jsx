'use client'
// Page shell for the Lumora-design pages: loader, header, menu overlay, footer and the
// contact pop-up, wrapped in the .lx root that styles/lumora.css is scoped to.
// The page's own content is passed in as children (server components).
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Onest } from 'next/font/google'
import { startLumora } from '@/lib/lumora/runtime'
import { services } from '@/data/services'
import { servicePresentation } from '@/data/service-presentation'
import { Sprite, Icon, Pill } from './Icons'
import ContactFields from './ContactFields'
import '@/styles/lumora.css'
import '@/styles/lumora-site.css'

const onest = Onest({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-onest', display: 'swap' })

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/my-portfolio/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact-me/' },
]

const CONNECT = [
  { label: 'info@muhammadkashif.net', href: 'mailto:info@muhammadkashif.net' },
  { label: 'WhatsApp', href: 'https://wa.me/60179152084', external: true },
  { label: 'Book a 10-min call', href: 'https://cal.com/kashifdesign/listing-teardown-call', external: true },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~016edc19243e405472', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-kashif-228554243', external: true },
  { label: 'Instagram', href: 'https://instagram.com/muhammadkashif928', external: true },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100011667847244', external: true },
]

function ext(external) { return external ? { target: '_blank', rel: 'noopener' } : {} }

export default function LxShell({ children }) {
  const root = useRef(null)
  const pathname = usePathname()

  useEffect(() => startLumora(root.current), [pathname])

  return (
    <div ref={root} className={`lx ${onest.variable}`}>
      <Sprite />

      {/* Intro loader (once per visit) */}
      <div className="loader" id="lx-loader" role="status" aria-label="Loading" suppressHydrationWarning>
        <div className="loader__center">
          <div className="loader__brand"><Icon name="logo" />Muhammad Kashif.</div>
          <p>Make your product the one they notice.</p>
        </div>
        <div className="loader__prog">
          <div className="loader__track"><div className="loader__fill" id="lx-loader-fill" /></div>
          <div className="loader__row"><span>Loading</span><span className="loader__count" id="lx-loader-count">000</span></div>
        </div>
      </div>

      {/* Header */}
      <header className="site-header rv" data-gate="">
        <div className="shell hdr">
          <a className="brand-btn" href="/" aria-label="Muhammad Kashif — home">
            <span className="brand"><Icon name="logo" />Muhammad Kashif.</span>
          </a>
          <nav className="pnav" aria-label="Primary">
            <ul>
              {NAV.map(item => (
                <li key={item.href}><a className="pnav__btn" href={item.href} data-nav-page={item.href}><span>{item.label}</span></a></li>
              ))}
            </ul>
          </nav>
          <div className="hdr__right">
            <div className="chip clock" aria-label="Local time in Kuching">
              <span className="clock__lbl">Kuching</span>
              <span className="clock__time" data-clock-time="" suppressHydrationWarning>9:41am</span>
              <span className="clock__sep" aria-hidden="true">•</span>
              <span className="clock__date" data-clock-date="" suppressHydrationWarning>12 March, 2025</span>
            </div>
            <button type="button" className="chip menu-btn" data-action="nav-open" aria-label="Open menu" aria-haspopup="dialog" aria-controls="lx-navm" aria-expanded="false">
              <span><Icon name="grid" /><span className="hide-xs">Menu</span></span>
            </button>
          </div>
        </div>
      </header>

      {children}

      {/* Footer */}
      <footer className="footer">
        <div className="shell footer__in">
          <div className="footer__cta">
            <h2 className="footer__h2 lines" data-stagger="100">Let&apos;s build your next first impression.</h2>
            <Pill variant="light" arrow="up-right" data-go="contact">Start a project</Pill>
          </div>
          <div className="footer__cols">
            <div>
              <div className="fbrand"><Icon name="logo" />Muhammad Kashif.</div>
              <p className="ftag">Turning products across every category into premium Amazon listings that help shoppers buy with confidence.</p>
              <div className="floc"><span>Kuching, Sarawak, Malaysia</span><span>Working remotely with US, UK &amp; Canada brands</span></div>
            </div>
            <div className="fcol">
              <h4>Navigate</h4>
              <ul>
                {NAV.map(item => <li key={item.href}><a className="alink" href={item.href}><span>{item.label}</span></a></li>)}
                <li><a className="alink" href="/resume/"><span>Resume</span></a></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Services</h4>
              <ul>
                {services.map(s => (
                  <li key={s.slug}><a className="alink" href={`/services/${s.slug}/`}><span>{servicePresentation[s.slug]?.title || s.title}</span></a></li>
                ))}
              </ul>
            </div>
            <div className="fcol">
              <h4>Connect</h4>
              <ul>
                {CONNECT.map(c => <li key={c.label}><a className="alink" href={c.href} {...ext(c.external)}><span>{c.label}</span></a></li>)}
              </ul>
            </div>
          </div>
          <div className="legal">
            <p>© {new Date().getFullYear()} Muhammad Kashif. All rights reserved.</p>
            <nav aria-label="Legal">
              <a className="alink" href="/privacy-policy/"><span>Privacy</span></a>
              <a className="alink" href="/terms/"><span>Terms</span></a>
              <a className="alink" href="/disclaimer/"><span>Disclaimer</span></a>
            </nav>
          </div>
        </div>
        <div className="footer__wm" aria-hidden="true">KASHIF</div>
      </footer>

      {/* Menu overlay */}
      <div className="navm" id="lx-navm" role="dialog" aria-modal="true" aria-label="Menu" hidden>
        <div className="shell navm__top">
          <a className="navm__brand" href="/"><Icon name="logo" />Muhammad Kashif.</a>
          <button type="button" className="navm__close" data-action="nav-close"><Icon name="x" />Close</button>
        </div>
        <nav className="shell navm__nav" aria-label="Menu">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.href}>
                <a className="navm__item" style={{ '--i': i }} href={item.href} data-nav-page={item.href}>
                  <span className="navm__idx">{String(i + 1).padStart(2, '0')}</span><span className="navm__lbl">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="shell navm__bottom">
          <span data-nav-clock="" suppressHydrationWarning>Kuching time</span>
          <button type="button" data-go="contact">Start a project →</button>
        </div>
      </div>

      {/* Contact pop-up */}
      <div className="modal" id="lx-modal" role="dialog" aria-modal="true" aria-labelledby="lx-modal-title" data-form-host="" hidden>
        <div className="modal__panel">
          <button type="button" className="modal__x" data-action="modal-close" aria-label="Close"><Icon name="x" /></button>
          <div className="mform-wrap">
            <div className="modal__head">
              <span className="modal__kick">Start a project</span>
              <h2 id="lx-modal-title">Tell me about your product.</h2>
            </div>
            <ContactFields location="lumora_modal" rows={4} />
            <div className="mform__alt">
              <span>Prefer another way?</span>
              <a href="https://cal.com/kashifdesign/listing-teardown-call" target="_blank" rel="noopener">Book a 10-min call</a>
              <a href="https://wa.me/60179152084" target="_blank" rel="noopener">WhatsApp</a>
              <a href="mailto:info@muhammadkashif.net">info@muhammadkashif.net</a>
            </div>
          </div>
          <div className="msuccess">
            <div className="msuccess__badge"><Icon name="logo" /></div>
            <h2>Request received</h2>
            <p>Thanks for reaching out — I&apos;ll get back to you within 24 hours.</p>
            <Pill variant="dark" arrow={null} data-action="modal-close">Close</Pill>
          </div>
        </div>
      </div>
    </div>
  )
}
