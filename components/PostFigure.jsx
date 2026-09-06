/**
 * In-article figures for blog posts.
 *
 * A listing designer's blog with no visuals argues against itself, and until
 * now the scaffolder could only emit paragraphs and bullets. This closes that.
 *
 * The writer does not hand-write SVG — model-authored vector art breaks in
 * ways nobody notices until it is live. Instead it picks one of a few
 * primitives and supplies structured data, so every figure is on-brand by
 * construction and cannot render broken.
 *
 *   grid      a row of tiles            — swatch rows, image sets, carousels
 *   compare   two labelled panels       — before/after, right/wrong
 *   sequence  numbered steps            — a process, an order of operations
 *   stack     horizontal bands          — A+ modules, page structure
 *
 * Every figure carries a caption, because a figure a reader cannot interpret
 * unaided is decoration.
 */

const INK = '#0a0a0a'
const CREAM = '#f5f5f0'
const ACCENT = '#e8e800'

function Caption({ children }) {
  if (!children) return null
  return (
    <figcaption
      className="font-mono text-xs leading-relaxed mt-3 pl-3"
      style={{ color: 'rgba(10,10,10,0.62)', borderLeft: `2px solid ${INK}` }}
    >
      {children}
    </figcaption>
  )
}

function Tile({ label, note, emphasis }) {
  return (
    <div
      className="flex-1 min-w-0 border-2 p-3 sm:p-4 flex flex-col justify-between"
      style={{
        borderColor: INK,
        backgroundColor: emphasis ? INK : CREAM,
        color: emphasis ? CREAM : INK,
        minHeight: '6.5rem',
      }}
    >
      <span className="font-bebas text-base sm:text-lg tracking-widest leading-none break-words">{label}</span>
      {note && (
        <span
          className="font-mono text-[11px] leading-snug mt-3 break-words"
          style={{ color: emphasis ? 'rgba(245,245,240,0.72)' : 'rgba(10,10,10,0.62)' }}
        >
          {note}
        </span>
      )}
    </div>
  )
}

export default function PostFigure({ kind = 'grid', items = [], caption, label }) {
  const safe = Array.isArray(items) ? items.filter(Boolean).slice(0, 6) : []
  if (safe.length === 0) return null

  const Header = label ? (
    <p className="font-mono text-[11px] tracking-[0.25em] mb-3" style={{ color: 'rgba(10,10,10,0.55)' }}>
      {label}
    </p>
  ) : null

  if (kind === 'compare') {
    const [a, b] = safe
    return (
      <figure className="my-10 m-0">
        {Header}
        <div className="grid sm:grid-cols-2 gap-4" style={{ boxShadow: `6px 6px 0 rgba(10,10,10,0.10)` }}>
          <Tile label={a?.label} note={a?.note} />
          <Tile label={b?.label} note={b?.note} emphasis />
        </div>
        <Caption>{caption}</Caption>
      </figure>
    )
  }

  if (kind === 'sequence') {
    return (
      <figure className="my-10 m-0">
        {Header}
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0">
          {safe.map((it, i) => (
            <li key={it.label} className="border-2 p-4 m-0" style={{ borderColor: INK, backgroundColor: CREAM }}>
              <span
                className="font-mono text-[11px] tracking-widest inline-block px-2 py-1 mb-3"
                style={{ backgroundColor: INK, color: ACCENT }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-bebas text-lg tracking-wide leading-none block">{it.label}</span>
              {it.note && (
                <span className="font-mono text-[11px] leading-snug block mt-2" style={{ color: 'rgba(10,10,10,0.62)' }}>
                  {it.note}
                </span>
              )}
            </li>
          ))}
        </ol>
        <Caption>{caption}</Caption>
      </figure>
    )
  }

  if (kind === 'stack') {
    return (
      <figure className="my-10 m-0">
        {Header}
        <div className="border-2" style={{ borderColor: INK }}>
          {safe.map((it, i) => (
            <div
              key={it.label}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-3"
              style={{
                borderTop: i === 0 ? 'none' : `1px solid rgba(10,10,10,0.18)`,
                backgroundColor: i % 2 ? 'rgba(10,10,10,0.03)' : 'transparent',
              }}
            >
              <span className="font-bebas text-lg tracking-widest leading-none sm:w-48 shrink-0">{it.label}</span>
              {it.note && (
                <span className="font-mono text-xs leading-relaxed" style={{ color: 'rgba(10,10,10,0.68)' }}>
                  {it.note}
                </span>
              )}
            </div>
          ))}
        </div>
        <Caption>{caption}</Caption>
      </figure>
    )
  }

  // grid — the default
  return (
    <figure className="my-10 m-0">
      {Header}
      <div className="flex flex-wrap gap-3">
        {safe.map((it, i) => (
          <Tile key={it.label} label={it.label} note={it.note} emphasis={Boolean(it.emphasis)} />
        ))}
      </div>
      <Caption>{caption}</Caption>
    </figure>
  )
}
