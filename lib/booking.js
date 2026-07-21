// ─────────────────────────────────────────────────────────────
//  BOOKING CONFIG — single source of truth for the whole site.
//  Swap BOOKING_ID once and every button + the modal update.
// ─────────────────────────────────────────────────────────────

// Your Google Calendar appointment-schedule ID (the long token from the
// embed URL, e.g. "AcZssZ1a2b3c..."). Paste it here — nothing else to touch.
export const BOOKING_ID = 'PASTE_YOUR_BOOKING_ID_HERE'

export const GCAL_ORIGIN = 'https://calendar.google.com'

// The embeddable booking view. `gv=true` = the appointment-scheduling UI.
export const BOOKING_URL = `${GCAL_ORIGIN}/calendar/appointments/schedules/${BOOKING_ID}?gv=true`

// True only once a real ID is pasted — lets the modal fail gracefully in dev
// (shows a fallback instead of a broken Google iframe) and never ships fake state.
export const BOOKING_CONFIGURED =
  typeof BOOKING_ID === 'string' &&
  BOOKING_ID.length > 0 &&
  !BOOKING_ID.startsWith('PASTE_')

// ── Lazy connection warming (req #4) ──────────────────────────
// Called on hover / focus / touch intent. Adds a one-time preconnect so the
// TLS handshake to Google is already done by the time the user clicks —
// but downloads ZERO Google page bytes until the modal actually opens.
let warmed = false
export function warmBookingConnection() {
  if (warmed || typeof document === 'undefined') return
  warmed = true

  const preconnect = document.createElement('link')
  preconnect.rel = 'preconnect'
  preconnect.href = GCAL_ORIGIN
  preconnect.crossOrigin = 'anonymous'
  document.head.appendChild(preconnect)

  // Fallback for browsers that ignore cross-origin preconnect.
  const dns = document.createElement('link')
  dns.rel = 'dns-prefetch'
  dns.href = GCAL_ORIGIN
  document.head.appendChild(dns)
}

// ── Trackable booking-intent event (req #6) ───────────────────
// Fires on every booking-button click. Safe with or without GTM:
// if no container is installed, the event just sits in window.dataLayer.
export function trackBookingIntent(source = 'unknown') {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'booking_intent',
    booking_source: source,            // 'hero' | 'contact' | 'for-agencies' | ...
    booking_action: 'open_modal',
    booking_configured: BOOKING_CONFIGURED,
    timestamp: new Date().toISOString(),
  })
}
