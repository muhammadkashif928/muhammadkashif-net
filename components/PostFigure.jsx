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
 *
 * Styling lives in styles/lumora-site.css (.pf-*), inside the .lx article layout.
 * The props are part of the blog bot's contract (scripts/new-post.mjs) — keep them.
 */

function Caption({ children }) {
  if (!children) return null
  return <figcaption className="pf-caption">{children}</figcaption>
}

function Tile({ label, note, emphasis }) {
  return (
    <div className={`pf-tile${emphasis ? ' pf-tile--em' : ''}`}>
      <span className="pf-label">{label}</span>
      {note && <span className="pf-note">{note}</span>}
    </div>
  )
}

export default function PostFigure({ kind = 'grid', items = [], caption, label }) {
  const safe = Array.isArray(items) ? items.filter(Boolean).slice(0, 6) : []
  if (safe.length === 0) return null

  const Header = label ? <p className="pf-kicker">{label}</p> : null

  if (kind === 'compare') {
    const [a, b] = safe
    return (
      <figure className="pf pf--compare">
        {Header}
        <div className="pf-compare">
          <Tile label={a?.label} note={a?.note} />
          <Tile label={b?.label} note={b?.note} emphasis />
        </div>
        <Caption>{caption}</Caption>
      </figure>
    )
  }

  if (kind === 'sequence') {
    return (
      <figure className="pf pf--sequence">
        {Header}
        <ol className="pf-sequence">
          {safe.map((it, i) => (
            <li key={it.label} className="pf-step">
              <span className="pf-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="pf-label">{it.label}</span>
              {it.note && <span className="pf-note">{it.note}</span>}
            </li>
          ))}
        </ol>
        <Caption>{caption}</Caption>
      </figure>
    )
  }

  if (kind === 'stack') {
    return (
      <figure className="pf pf--stack">
        {Header}
        <div className="pf-stack">
          {safe.map(it => (
            <div key={it.label} className="pf-band">
              <span className="pf-label">{it.label}</span>
              {it.note && <span className="pf-note">{it.note}</span>}
            </div>
          ))}
        </div>
        <Caption>{caption}</Caption>
      </figure>
    )
  }

  // grid — the default
  return (
    <figure className="pf pf--grid">
      {Header}
      <div className="pf-grid">
        {safe.map(it => <Tile key={it.label} label={it.label} note={it.note} emphasis={Boolean(it.emphasis)} />)}
      </div>
      <Caption>{caption}</Caption>
    </figure>
  )
}
