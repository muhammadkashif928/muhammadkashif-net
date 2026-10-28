// Building blocks for the case-study pages, in the Lumora design.
import { Pill } from './Icons'
import { FeaturedCards } from './Sections'

/* Page hero: breadcrumb, headline, lead, project facts and the hero image */
// The toolkit behind every case study — shown in each hero's facts box.
export const SOFTWARE = 'Claude, ChatGPT, Gemini, Photoshop, Lightroom'

export function CaseHero({ crumb, eyebrow, lines, lead, meta, image }) {
  return (
    <>
      <section className="phero chero">
        <div className="shell phero__in chero__in">
          <div className="phero__main">
            <nav className="phero__crumbs rv" data-gate="" style={{ '--ry': '10px', '--rd': '200ms' }} aria-label="Breadcrumb">
              <a href="/">Home</a><span aria-hidden="true">/</span><a href="/my-portfolio/">Work</a><span aria-hidden="true">/</span><span>{crumb}</span>
            </nav>
            {eyebrow && <div className="rv" data-gate="" style={{ '--ry': '10px', '--rd': '250ms' }}><span className="eyebrow">{eyebrow}</span></div>}
            <h1 className="phero__h1 lines" data-gate="" data-delay="300" data-stagger="120" data-lines={lines.join('|')}>
              {lines.map((l, i) => <span key={l}>{l}{i < lines.length - 1 && <br />}</span>)}
            </h1>
            {lead && <p className="phero__lead rv" data-gate="" style={{ '--ry': '12px', '--rd': '600ms' }}>{lead}</p>}
          </div>
          {meta && (
            <aside className="phero__aside rv" data-gate="" style={{ '--ry': '16px', '--rs': 0.96, '--rd': '450ms' }}>
              <ul className="facts">
                {meta.map(([k, v]) => <li key={k}><span className="k">{k}</span><span className="v">{v}</span></li>)}
              </ul>
            </aside>
          )}
        </div>
      </section>
      {image && (
        <div className="shell">
          <figure className="acover chero__img rv" data-gate="" style={{ '--ry': '20px', '--rd': '400ms' }}>
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} fetchPriority="high" decoding="async" style={image.style} />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        </div>
      )}
    </>
  )
}

/* A heading on the left, long-form text (or anything) on the right */
export function CaseText({ eyebrow, title, paragraphs = [], children, id }) {
  return (
    <section className="section" id={id}>
      <div className="shell section__in section__in--tight">
        <div className="ctext">
          <div className="ctext__head">
            <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">{eyebrow}</span></div>
            <h2 className="sec-h2 lines" data-delay="120" style={{ marginTop: '1.25rem' }}>{title}</h2>
          </div>
          <div className="prose rv" style={{ '--ry': '16px', '--rd': '150ms' }}>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

/* A full-width block with its own heading */
export function CaseBlock({ eyebrow, title, lead, children, id, tight = true }) {
  return (
    <section className="section" id={id}>
      <div className={`shell section__in${tight ? ' section__in--tight' : ''}`}>
        <div className="sec-head sec-head--split">
          <div>
            <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">{eyebrow}</span></div>
            <h2 className="sec-h2 lines" data-delay="120" style={{ marginTop: '1.25rem' }}>{title}</h2>
          </div>
          {lead && <p className="sec-lead rv" style={{ '--ry': '12px', '--rd': '150ms' }}>{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

/* Numbered decision / process cards */
export function CaseSteps({ items }) {
  return (
    <ol className="steps">
      {items.map((it, i) => (
        <li key={it.title} className="rv" style={{ '--rd': `${(i % 3) * 120}ms` }}>
          <div className="step"><span className="step__n">{it.n || i + 1}</span><h3>{it.title}</h3><p>{it.body}</p></div>
        </li>
      ))}
    </ol>
  )
}

/* Reported results — renders nothing unless there is real data */
export function CaseResults({ results }) {
  if (!results?.metrics?.length) return null
  return (
    <section className="stats" aria-label="Results">
      <div className="shell stats__in">
        <div className="stats__panel rv">
          <span className="eyebrow eyebrow--light">What it did</span>
          <h2 className="stats__h2 lines" data-delay="120">Results after the new set went live.</h2>
          <ul className="stats__grid">
            {results.metrics.map((m, i) => (
              <li key={m.label} className="rv" style={{ '--rd': `${i * 90}ms` }}>
                <div className="stat__num">{m.value}</div>
                <p className="stat__lbl">{m.label}{m.timeframe ? ` · ${m.timeframe}` : ''}</p>
              </li>
            ))}
          </ul>
          {results.source && <p className="cres__src">{results.source}</p>}
          {results.quote && (
            <blockquote className="cres__quote">
              <p>“{results.quote}”</p>
              {results.attribution && <footer>{results.attribution}{results.attributionRole ? ` — ${results.attributionRole}` : ''}</footer>}
            </blockquote>
          )}
        </div>
      </div>
    </section>
  )
}

/* Other case studies + a call to action */
export function CaseNext({ current, title = 'More case studies' }) {
  return (
    <section className="section">
      <div className="shell section__in section__in--tight">
        <div className="sec-head sec-head--split">
          <div>
            <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">Keep exploring</span></div>
            <h2 className="sec-h2 lines" data-delay="120" style={{ marginTop: '1.25rem' }}>{title}</h2>
          </div>
          <div className="rv" style={{ '--ry': '12px', '--rd': '150ms' }}><Pill variant="outline" href="/my-portfolio/">All work</Pill></div>
        </div>
        <FeaturedCards exclude={current} />
      </div>
    </section>
  )
}
