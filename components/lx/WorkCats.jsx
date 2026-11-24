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
            <span className="wcat__top"><span className="wcat__n">{c.n} {c.n === 1 ? c.unit : `${c.unit}s`}</span><span className="wcat__badge"><Icon name="arrow-ur" /></span></span>
            <span className="wcat__body"><strong>{c.label}</strong><small>{c.blurb}</small></span>
          </>
        )
        return (
          <li key={c.id} className="rv" style={{ '--rd': `${i * 70}ms` }}>
            {onPick && !c.href
              ? <button type="button" className="wcat" aria-pressed={active === c.id} onClick={() => onPick(c.id)}>{inner}</button>
              : <a className="wcat" href={c.href || `/my-portfolio/#${c.id}`}>{inner}</a>}
          </li>
        )
      })}
    </ul>
  )
}
