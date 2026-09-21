'use client'
import { useEffect, useState } from 'react'

/**
 * Thin site-wide strip above the navbar.
 *
 * Edit `announcement` to change the message. Bump `id` whenever the copy
 * changes so visitors who dismissed the previous one see the new message —
 * the dismissal is remembered per id, not globally.
 */
const announcement = {
  id: 'studio-2026',
  text: 'Thoughtful product design for your next launch — booking projects now',
  // Phone-width version; the full line does not fit and would ellipsize.
  shortText: 'Booking new design projects',
  ctaLabel: 'SEE SERVICES',
  ctaHref: '/services/',
}

const STORAGE_KEY = `mk-announce-dismissed:${announcement.id}`

export default function AnnouncementBar() {
  // Start hidden so the server HTML and the first client paint agree; the
  // effect below decides whether this visitor should actually see it.
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let dismissed = false
    try { dismissed = localStorage.getItem(STORAGE_KEY) === '1' } catch { /* private mode */ }
    if (dismissed) return
    setVisible(true)
    document.documentElement.classList.add('has-announce')
    return () => document.documentElement.classList.remove('has-announce')
  }, [])

  const dismiss = () => {
    setVisible(false)
    document.documentElement.classList.remove('has-announce')
    try { localStorage.setItem(STORAGE_KEY, '1') } catch { /* private mode */ }
  }

  if (!visible) return null

  return (
    <div
      className="announce-bar fixed top-0 left-0 w-full z-[60] flex items-center justify-center gap-3 sm:gap-5 px-9 sm:px-12"
      style={{ backgroundColor: 'var(--a-text)', color: 'var(--a-bg)' }}
    >
      <span className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" style={{ backgroundColor: 'var(--a-bg)' }} />

      <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] truncate min-w-0">
        <span className="hidden sm:inline">{announcement.text}</span>
        <span className="sm:hidden">{announcement.shortText || announcement.text}</span>
      </p>

      <a
        href={announcement.ctaHref}
        className="font-bebas text-xs sm:text-sm tracking-widest underline underline-offset-4 whitespace-nowrap hidden sm:inline shrink-0"
        style={{ color: 'var(--a-bg)' }}
      >
        {announcement.ctaLabel} →
      </a>

      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-base leading-none opacity-70 hover:opacity-100 transition-opacity"
        style={{ color: 'var(--a-bg)' }}
      >
        ×
      </button>
    </div>
  )
}
