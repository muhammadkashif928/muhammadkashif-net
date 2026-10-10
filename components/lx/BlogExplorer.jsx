'use client'
// Searchable, filterable list of blog articles for /blog/. The newest post is shown
// large; the rest are cards. Cards re-render as the filters change, so they don't use
// the scroll-reveal classes (those are only wired up once, on page load).
import { useMemo, useState } from 'react'
import { Icon } from './Icons'

export default function BlogExplorer({ items }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = useMemo(() => ['All', ...Array.from(new Set(items.map(i => i.category)))], [items])

  const q = query.trim().toLowerCase()
  const filtered = items.filter(i =>
    (category === 'All' || i.category === category) &&
    (!q || `${i.title} ${i.description} ${i.category}`.toLowerCase().includes(q)))
  const showFeature = category === 'All' && !q
  const [feature, ...rest] = filtered
  const cards = showFeature ? rest : filtered

  return (
    <div className="bx">
      <div className="bx__bar">
        <label className="bx__search">
          <span className="sr-only">Search articles</span>
          <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search guides — A+ Content, main images, Brand Store…" />
        </label>
        <p className="bx__count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}</p>
      </div>
      <div className="bx__filters" role="group" aria-label="Filter by category">
        {categories.map(c => (
          <button key={c} type="button" aria-pressed={category === c} className={category === c ? 'is-on' : undefined} onClick={() => setCategory(c)}>{c}</button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bx__empty">
          <p>No articles match that search.</p>
          <button type="button" className="pill pill--outline" onClick={() => { setQuery(''); setCategory('All') }}><span className="pill__in">Clear filters</span></button>
        </div>
      ) : (
        <>
          {showFeature && feature && (
            <a className="bx__feature" href={feature.href}>
              <div className="bx__feature-img"><img src={feature.image} alt={feature.alt || feature.title} width="1200" height="675" /></div>
              <div className="bx__feature-copy">
                <p className="atile__meta"><span>Latest · {feature.category}</span><span>{feature.date}</span></p>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <span className="pill pill--dark has-arrow"><span className="pill__in">Read the guide<span className="pill__badge ur"><Icon name="arrow-ur" /></span></span></span>
              </div>
            </a>
          )}
          <ul className="atiles bx__grid">
            {cards.map(item => (
              <li key={item.href}>
                <a className="atile" href={item.href}>
                  <div className="atile__img"><img src={item.image} alt={item.alt || item.title} width="960" height="640" loading="lazy" /></div>
                  <div className="atile__body">
                    <div className="atile__meta"><span>{item.category}</span><span>{item.date}</span></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="atile__foot"><span>Read the guide</span><span className="atile__badge"><Icon name="arrow-ur" /></span></div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
