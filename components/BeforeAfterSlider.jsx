'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'

/**
 * Draggable before/after comparison.
 * - Mouse + touch via pointer events (touch-action: pan-y keeps vertical page
 *   scroll working while horizontal drags are captured here).
 * - Keyboard: ←/→ step 2%, Shift+←/→ step 10%, Home/End jump to either end.
 * - Exposed to assistive tech as a slider with a percentage value.
 */
export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  initial = 50,
  sizes = '(min-width: 1024px) 900px, 100vw',
}) {
  const [pos, setPos] = useState(initial)
  const [dragging, setDragging] = useState(false)
  const frameRef = useRef(null)

  const setFromClientX = useCallback((clientX) => {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (!rect.width) return
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = useCallback(
    (e) => {
      e.currentTarget.setPointerCapture?.(e.pointerId)
      setDragging(true)
      setFromClientX(e.clientX)
    },
    [setFromClientX]
  )

  const onPointerMove = useCallback(
    (e) => {
      if (!dragging) return
      setFromClientX(e.clientX)
    },
    [dragging, setFromClientX]
  )

  const endDrag = useCallback((e) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId)
    setDragging(false)
  }, [])

  const onKeyDown = useCallback((e) => {
    const step = e.shiftKey ? 10 : 2
    let next = null
    if (e.key === 'ArrowLeft') next = (p) => p - step
    else if (e.key === 'ArrowRight') next = (p) => p + step
    else if (e.key === 'Home') next = () => 0
    else if (e.key === 'End') next = () => 100
    if (!next) return
    e.preventDefault()
    setPos((p) => Math.min(100, Math.max(0, next(p))))
  }, [])

  return (
    <figure className="m-0">
      <div
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="relative w-full select-none overflow-hidden border-2"
        style={{
          aspectRatio: '1 / 1',
          touchAction: 'pan-y',
          cursor: dragging ? 'grabbing' : 'ew-resize',
          borderColor: 'var(--b-border)',
          backgroundColor: 'var(--b-subtle)',
        }}
      >
        {/* AFTER — full width underneath */}
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes={sizes}
          className="object-cover"
          draggable={false}
        />

        {/* BEFORE — clipped to the handle position */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes={sizes}
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Corner labels */}
        <span
          className="pointer-events-none absolute left-3 top-3 font-mono text-[10px] tracking-[0.2em] px-2 py-1 border"
          style={{
            backgroundColor: 'var(--a-bg)',
            color: 'var(--a-text)',
            borderColor: 'var(--a-border)',
            opacity: pos > 12 ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          {beforeLabel}
        </span>
        <span
          className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] tracking-[0.2em] px-2 py-1 border"
          style={{
            backgroundColor: 'var(--b-bg)',
            color: 'var(--b-text)',
            borderColor: 'var(--b-text)',
            opacity: pos < 88 ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          {afterLabel}
        </span>

        {/* Divider */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pos}%`, width: '2px', backgroundColor: 'var(--b-bg)', transform: 'translateX(-1px)' }}
        />

        {/* Handle — the focusable slider */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Reveal the original image or the redesigned image"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% original, ${100 - Math.round(pos)}% redesigned`}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 flex items-center justify-center border-2"
          style={{
            left: `${pos}%`,
            width: '44px',
            height: '44px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'var(--b-bg)',
            borderColor: 'var(--b-text)',
            color: 'var(--b-text)',
            boxShadow: '3px 3px 0px var(--b-text)',
            cursor: 'ew-resize',
            touchAction: 'none',
          }}
        >
          <span aria-hidden="true" className="font-mono text-xs leading-none tracking-tighter">
            ◀▶
          </span>
        </div>
      </div>

      <figcaption
        className="font-mono text-xs mt-4 leading-relaxed"
        style={{ color: 'var(--b-muted)' }}
      >
        Drag the handle, or focus it and use the arrow keys. Left is the image the
        listing was running. Right is the replacement.
      </figcaption>
    </figure>
  )
}
