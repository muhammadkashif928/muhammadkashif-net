// Category cards for the portfolio: one text-only card per type of work, with a project
// count. With `onPick` (portfolio page) a card opens its projects in place; without it
// (home page) each card links to that category on the portfolio page.
import { Icon } from './Icons'

export default function WorkCats({ items, active, onPick }) {
  return (
    <ul className="wcats">
      {items.map((c, i) => {
        const inner = (
          <>
            <span className="wcat__glow" aria-hidden="true" />
            <span className="wcat__num" aria-hidden="true">{String(c.n).padStart(2, '0')}</span>
            <span className="wcat__top">
              <span className="wcat__ic">{c.icon === 'play' ? <svg className="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none" /></svg> : <Icon name={c.icon} />}</span>
              <span className="wcat__badge"><Icon name="arrow-ur" /></span>
            </span>
            <span className="wcat__body">
              <span className="wcat__n">{c.n} {c.n === 1 ? c.unit : `${c.unit}s`}</span>
              <strong>{c.label}</strong>
              <small>{c.blurb}</small>
              <span className="wcat__go">{c.href ? 'Watch the videos' : 'View projects'}<i /></span>
            </span>
          </>
        )
        return (
          <li key={c.id} className={`rv${c.href ? ' wcats__accent' : ''}`} style={{ '--rd': `${i * 70}ms` }}>
            {onPick && !c.href
              ? <button type="button" className="wcat" aria-pressed={active === c.id} onClick={() => onPick(c.id)}>{inner}</button>
              : <a className="wcat" href={c.href || `/my-portfolio/#${c.id}`}>{inner}</a>}
          </li>
        )
      })}
    </ul>
  )
}
