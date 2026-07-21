'use client'
import {
  createContext, useContext, useState, useEffect, useRef, useCallback,
} from 'react'
import { createPortal } from 'react-dom'
import { BOOKING_URL, BOOKING_CONFIGURED } from '@/lib/booking'

// ─────────────────────────────────────────────────────────────
//  ONE modal for the whole app. Any <BookingButton> calls open();
//  the single modal (portaled to <body>) renders on demand, so the
//  Google iframe is created only when a user actually opens it.
// ─────────────────────────────────────────────────────────────

const BookingContext = createContext(null)

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside <BookingProvider>')
  return ctx
}

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Portals need the DOM — only render after hydration.
  useEffect(() => setMounted(true), [])

  const open  = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <BookingContext.Provider value={{ isOpen, open, close }}>
      {children}
      {mounted && isOpen && createPortal(<BookingModal onClose={close} />, document.body)}
    </BookingContext.Provider>
  )
}

function BookingModal({ onClose }) {
  const overlayRef        = useRef(null)
  const modalRef          = useRef(null)
  const closeBtnRef       = useRef(null)
  const previouslyFocused = useRef(null)
  const [loaded, setLoaded] = useState(false)

  // Scroll lock + focus trap + Esc + focus restore — all torn down on close.
  useEffect(() => {
    previouslyFocused.current = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Move focus into the dialog.
    closeBtnRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return }
      if (e.key !== 'Tab') return

      const focusables = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, iframe, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusables || focusables.length === 0) return

      const first = focusables[0]
      const last  = focusables[focusables.length - 1]
      const active = document.activeElement
      const inside = modalRef.current.contains(active)

      // Wrap focus at the edges (and pull it back if it ever escaped the dialog).
      if (e.shiftKey && (active === first || !inside)) {
        e.preventDefault(); last.focus()
      } else if (!e.shiftKey && (active === last || !inside)) {
        e.preventDefault(); first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus()
      }
    }
  }, [onClose])

  // Backdrop click: only when the press starts on the overlay itself, not the modal.
  const onOverlayMouseDown = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      className="booking-overlay"
      role="presentation"
      onMouseDown={onOverlayMouseDown}
    >
      <div
        ref={modalRef}
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        <div className="booking-modal__bar">
          <span className="booking-modal__title" id="booking-modal-title">
            <span className="booking-modal__dot" aria-hidden="true" />
            BOOK A DISCOVERY CALL
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            className="booking-modal__close"
            aria-label="Close booking dialog"
            onClick={onClose}
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="booking-modal__body">
          {BOOKING_CONFIGURED ? (
            <>
              {!loaded && (
                <div className="booking-modal__loading" aria-hidden="true">
                  <span className="booking-modal__spinner" />
                  CONNECTING TO CALENDAR…
                </div>
              )}
              <iframe
                className="booking-modal__frame"
                src={BOOKING_URL}
                title="Book a discovery call — Google Calendar appointment scheduling"
                onLoad={() => setLoaded(true)}
                loading="eager"
              />
            </>
          ) : (
            <div className="booking-modal__fallback">
              <strong className="booking-modal__fallback-tag">[NEEDS DATA]</strong>
              <span>
                Paste your Google booking ID into <code>lib/booking.js</code> to
                activate scheduling.
              </span>
              <a
                className="booking-modal__fallback-link"
                href="mailto:info@muhammadkashif.net?subject=Discovery%20Call%20Request"
              >
                Or email to book →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
