'use client'
import { gaEvent } from '@/lib/gtag'

const targets = [
  { label: 'WHATSAPP', href: 'https://wa.me/60179152084',      event: 'whatsapp_click' },
  { label: 'EMAIL',    href: 'mailto:info@muhammadkashif.net', event: 'email_click' },
]

// Sticky bottom contact bar for phones (<768px), where the social dock
// never renders. globals.css pads the body by the bar's height so it
// can't cover the last section's content.
export default function MobileContactBar() {
  return (
    <nav className="contact-bar" aria-label="Quick contact">
      {targets.map((t) => (
        <a
          key={t.label}
          href={t.href}
          target={t.href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="contact-bar-btn font-bebas tracking-widest"
          onClick={() => gaEvent(t.event, { location: 'mobile_bar' })}
        >
          {t.label}
        </a>
      ))}
    </nav>
  )
}
