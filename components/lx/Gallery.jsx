'use client'
// Image grid whose images open full screen (prev/next, arrow keys, Esc, swipe).
// images: [{ src, alt, width, height, caption?, slot?, feature? }]
import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from './Icons'

export default function Gallery({ images, columns = 3, showCaptions = true, aspect = '1 / 1', className = '' }) {
  const [open, setOpen] = useState(-1)
  const touch = useRef(null)
  const n = images.length
  const close = useCallback(() => setOpen(-1), [])
  const step = useCallback(d => setOpen(i => (i + d + n) % n), [n])

  useEffect(() => {
    if (open < 0) return
    window.__lx?.stopScroll()
    const onKey = e => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); window.__lx?.startScroll() }
  }, [open, close, step])

  const img = open >= 0 ? images[open] : null

  return (
    <>
      <ul className={`gal gal--${columns} ${className}`.trim()}>
        {images.map((im, i) => (
          <li key={im.src} className={`gal__item${im.feature ? ' gal__item--feature' : ''}`}>
            <button type="button" className="gal__btn" onClick={() => setOpen(i)} aria-label={`Enlarge: ${im.alt}`}>
              <img src={im.src} alt={im.alt} width={im.width} height={im.height} loading="lazy" decoding="async" style={{ aspectRatio: aspect }} />
              <span className="gal__zoom" aria-hidden="true"><Icon name="plus" /></span>
              {im.feature && <span className="gal__flag">The one</span>}
            </button>
            {showCaptions && (im.slot || im.caption) && (
              <div className="gal__cap">
                {im.slot && <p className="gal__slot">{im.slot}</p>}
                {im.caption && <p>{im.caption}</p>}
              </div>
            )}
          </li>
        ))}
      </ul>

      {img && (
        <div
          className="lbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          data-lenis-prevent=""
          onClick={e => { if (e.target === e.currentTarget) close() }}
          onTouchStart={e => { touch.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            if (touch.current == null) return
            const dx = e.changedTouches[0].clientX - touch.current
            touch.current = null
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
          }}
        >
          <button type="button" className="lbox__x" onClick={close} aria-label="Close"><Icon name="x" /></button>
          {n > 1 && <button type="button" className="lbox__nav lbox__nav--prev" onClick={() => step(-1)} aria-label="Previous image"><Icon name="arrow" /></button>}
          <figure className="lbox__fig">
            <img src={img.src} alt={img.alt} />
            <figcaption>
              <span>{img.slot || img.alt}</span>
              {n > 1 && <span className="lbox__count">{open + 1} / {n}</span>}
            </figcaption>
          </figure>
          {n > 1 && <button type="button" className="lbox__nav" onClick={() => step(1)} aria-label="Next image"><Icon name="arrow" /></button>}
        </div>
      )}
    </>
  )
}
