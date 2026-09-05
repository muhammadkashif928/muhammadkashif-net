'use client'
import { useEffect } from 'react'
import { gaEvent } from '@/lib/gtag'

const targets = [
  { label: 'WHATSAPP', href: 'https://wa.me/60179152084',      event: 'whatsapp_click' },
  { label: 'EMAIL',    href: 'mailto:info@muhammadkashif.net', event: 'email_click' },
]

// Sticky bottom contact bar for phones (<768px), where the social dock
// never renders.
//
// It used to sit there permanently. Padding the body only clears the very
// end of the document, so for the whole scroll the bar covered the bottom
// ~49px of the viewport — on a phone that meant it sat on top of the hero
// stats row and, in the proof section, across a line of body copy. A fixed
// element always occludes; the fix is to get it out of the way while the
// reader is reading.
//
// So: tuck it away as soon as they scroll down, bring it straight back the
// moment they scroll up, and always show it at the top and at the bottom of
// the page. The class goes on <html> so globals.css can move the
// back-to-top button down with it.
export default function MobileContactBar() {
  useEffect(() => {
    const root = document.documentElement
    let last = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      const delta = y - last
      // ignore sub-pixel jitter and iOS rubber-banding
      if (Math.abs(delta) < 6) return
      const atTop = y < 200
      const atBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 140
      root.classList.toggle('bar-tucked', delta > 0 && !atTop && !atBottom)
      last = y
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
      root.classList.remove('bar-tucked')
    }
  }, [])

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
