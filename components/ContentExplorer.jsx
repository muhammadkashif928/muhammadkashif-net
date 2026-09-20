'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function ContentExplorer({ items, kind }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(items.map(item => item.category))]
  const visible = useMemo(() => items.filter(item => (category === 'All' || item.category === category) && `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query.trim().toLowerCase())), [items, query, category])
  return <section className="interior-section"><div className="studio-wrap">
    <div className="explorer-toolbar"><div><label htmlFor={`${kind}-search`}>Find {kind === 'work' ? 'a project' : 'an article'}</label><input id={`${kind}-search`} type="search" placeholder={kind === 'work' ? 'Search work, products or services…' : 'Search guides and topics…'} value={query} onChange={e => setQuery(e.target.value)} /></div><p aria-live="polite">{visible.length} {visible.length === 1 ? 'result' : 'results'}</p></div>
    <div className="explorer-filters" aria-label="Filter by category">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <div className="explorer-grid">{visible.map(item => <Link className="explorer-card" href={item.href} key={item.href}>
      <div className="explorer-image"><img src={item.image} alt={item.alt || item.title} width="960" height="640" loading="lazy" /><span>{item.category}</span></div>
      <div className="explorer-copy"><p className="explorer-date">{item.date}</p><h2>{item.title}</h2><p>{item.description}</p><span className="explorer-link">{kind === 'work' ? 'Explore project' : 'Read the guide'} ↗</span></div>
    </Link>)}</div>
    {visible.length === 0 && <div className="explorer-empty"><h2>No matches yet.</h2><p>Try another keyword or browse all {kind === 'work' ? 'projects' : 'articles'}.</p><button className="studio-button" onClick={() => { setQuery(''); setCategory('All') }}>Clear filters</button></div>}
  </div></section>
}
