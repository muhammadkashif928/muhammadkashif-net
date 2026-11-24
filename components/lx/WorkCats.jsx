// Category cards for the portfolio: one card per type of work, with a cover image and a
// project count. With `onPick` (portfolio page) a card filters the grid in place; without
// it (home page) each card links to its filtered view of the portfolio.
import { Icon } from './Icons'

export default function WorkCats({ items, active, onPick }) {
  return (
    <ul className="wcats">
      {items.map((c, i) => {
        const inner = (
          <>
            <img className="wcat__img" src={c.img} alt="" loading="lazy" decoding="async" />
            <span className="wcat__shade" />
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
