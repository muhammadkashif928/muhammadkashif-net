'use client'
import { useBooking } from '@/components/BookingProvider'
import { trackBookingIntent, warmBookingConnection } from '@/lib/booking'

// ─────────────────────────────────────────────────────────────
//  Drop-in booking CTA. Matches the site's .btn-brutal buttons.
//  Pass `style` for colors (like the existing hero/contact buttons)
//  and `className` to override size. Behavior is identical everywhere:
//    · click  → dataLayer push (req #6) + open the shared modal
//    · intent → warm the Google connection (preconnect only, req #4)
// ─────────────────────────────────────────────────────────────

export default function BookingButton({
  source = 'unknown',
  label = 'BOOK A DISCOVERY CALL',
  className = 'text-base sm:text-lg px-6 sm:px-8 py-3',
  style,
  ...rest
}) {
  const { open } = useBooking()

  const handleClick = () => {
    trackBookingIntent(source)   // fires the trackable booking-intent event
    open()
  }

  // Hover / keyboard-focus / first touch = intent. Preconnect, nothing heavy.
  const warm = () => warmBookingConnection()

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={warm}
      onFocus={warm}
      onTouchStart={warm}
      className={`btn-brutal font-bebas tracking-widest border-2 ${className}`}
      style={style}
      {...rest}
    >
      {label}
    </button>
  )
}
