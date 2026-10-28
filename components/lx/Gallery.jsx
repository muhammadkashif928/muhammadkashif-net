'use client'
// Image grid whose images open full screen (prev/next, arrow keys, Esc, swipe).
// In the viewer, a click/tap on the image zooms in; moving the pointer pans.
// images: [{ src, alt, width, height, thumb?, caption?, slot?, feature? }]
// `thumb` is a smaller file for the grid; the viewer always loads `src`.
import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from './Icons'

const ZOOM = 2.5

export function Lightbox({ images, open, setOpen }) {
  const [zoom, setZoom] = useState(null) // transform-origin while zoomed, e.g. '40% 60%'
  const touch = useRef(null)
  const n = images.length
  const close = useCallback(() => setOpen(-1), [setOpen])
  const step = useCallback(d => { setZoom(null); setOpen(i => (i + d + n) % n) }, [n, setOpen])

  useEffect(() => {
    if (open < 0) return
    window.__lx?.stopScroll()
    const onKey = e => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); window.__lx?.startScroll(); setZoom(null) }
  }, [open, close, step])

  if (open < 0) return null
  const img = images[open]

  const originAt = (e, point) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = Math.min(100, Math.max(0, ((point.clientX - r.left) / r.width) * 100))
    const y = Math.min(100, Math.max(0, ((point.clientY - r.top) / r.height) * 100))
    return `${x}% ${y}%`
  }

  return (
    <div
      className="lbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      data-lenis-prevent=""
      onClick={e => { if (e.target === e.currentTarget) close() }}
      onTouchStart={e => { touch.current = e.touches[0].clientX }}
      onTouchEnd={e => {
        if (touch.current == null || zoom) return
        const dx = e.changedTouches[0].clientX - touch.current
        touch.current = null
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
      }}
    >
      <button type="button" className="lbox__x" onClick={close} aria-label="Close"><Icon name="x" /></button>
      {n > 1 && <button type="button" className="lbox__nav lbox__nav--prev" onClick={() => step(-1)} aria-label="Previous image"><Icon name="arrow" /></button>}
      <figure className="lbox__fig">
        <div
          className={`lbox__zoom${zoom ? ' is-zoomed' : ''}`}
          onClick={e => setZoom(z => (z ? null : originAt(e, e)))}
          onMouseMove={e => { if (zoom) setZoom(originAt(e, e)) }}
          onTouchMove={e => { if (zoom) setZoom(originAt(e, e.touches[0])) }}
        >
          <img src={img.src} alt={img.alt} draggable="false" style={zoom ? { transform: `scale(${ZOOM})`, transformOrigin: zoom } : undefined} />
        </div>
        <figcaption>
          <span>{img.slot || img.alt}</span>
          {n > 1 && <span className="lbox__count">{open + 1} / {n}</span>}
          <span className="lbox__hint">{zoom ? 'Click to zoom out' : 'Click image to zoom'}</span>
        </figcaption>
      </figure>
      {n > 1 && <button type="button" className="lbox__nav" onClick={() => step(1)} aria-label="Next image"><Icon name="arrow" /></button>}
    </div>
  )
}

// Side-by-side figures (main-image candidates, before/after) that open in the viewer.
// items: [{ img, tag, note }]
export function ZoomPair({ items, className = '' }) {
  const [open, setOpen] = useState(-1)
  const images = items.map(({ img, tag }) => ({ ...img, slot: tag }))
  return (
    <>
      <div className={`cpair ${className}`.trim()}>
        {items.map(({ img, tag, note }, i) => (
          <figure key={tag} className="cpair__item">
            <button type="button" className="cpair__btn" onClick={() => setOpen(i)} aria-label={`Enlarge: ${img.alt}`}>
              <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" />
              <span className="gal__zoom" aria-hidden="true"><Icon name="plus" /></span>
            </button>
            <figcaption><strong>{tag}</strong>{note}</figcaption>
          </figure>
        ))}
      </div>
      <Lightbox images={images} open={open} setOpen={setOpen} />
    </>
  )
}

export default function Gallery({ images, columns = 3, showCaptions = true, aspect = '1 / 1', className = '' }) {
  const [open, setOpen] = useState(-1)

  return (
    <>
      <ul className={`gal gal--${columns} ${className}`.trim()}>
        {images.map((im, i) => (
          <li key={im.src} className={`gal__item${im.feature ? ' gal__item--feature' : ''}`}>
            <button type="button" className="gal__btn" onClick={() => setOpen(i)} aria-label={`Enlarge: ${im.alt}`}>
              <img src={im.thumb || im.src} alt={im.alt} width={im.width} height={im.height} loading="lazy" decoding="async" style={{ aspectRatio: aspect }} />
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

      <Lightbox images={images} open={open} setOpen={setOpen} />
    </>
  )
}
