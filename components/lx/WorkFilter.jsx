'use client'
// Portfolio browser. Visitors see category cards first; choosing one opens that
// category's case studies underneath. The project cards are rendered on the server
// with `data-cat` and stay hidden until a category is chosen. The choice is kept in
// the URL hash (e.g. /my-portfolio/#websites) so it can be linked from other pages.
import { useEffect, useRef, useState } from 'react'
import WorkCats from './WorkCats'

export default function WorkFilter({ categories, counts, extra = [], children }) {
  const [active, setActive] = useState(null)
  const grid = useRef(null)
  const results = useRef(null)
  const wantScroll = useRef(false)

  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(location.hash.slice(1))
      const ok = categories.some(c => c.id === id)
      if (ok) wantScroll.current = true
      setActive(ok ? id : null)
    }
    fromHash()
    addEventListener('hashchange', fromHash)
    return () => removeEventListener('hashchange', fromHash)
  }, [categories])

  useEffect(() => {
    grid.current?.querySelectorAll('li[data-cat]').forEach(li => { li.hidden = li.dataset.cat !== active })
    if (!active || !wantScroll.current) return
    wantScroll.current = false
    const t = setTimeout(() => {
      const el = results.current
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 96, behavior: 'smooth' })
    }, 350)
    return () => clearTimeout(t)
  }, [active])

  // Choosing the open category again closes it.
  const pick = id => {
    const next = id === active ? null : id
    wantScroll.current = !!next
    setActive(next)
    history.replaceState(null, '', next ? `#${next}` : location.pathname + location.search)
  }

  const cats = categories.map(c => ({ ...c, n: counts[c.id] || 0 })).filter(c => c.n)
  const open = cats.find(c => c.id === active)
  return (
    <>
      <WorkCats items={[...cats, ...extra]} active={active} onPick={pick} />
      <div ref={results} className="wresults" hidden={!open}>
        <div className="wresults__head">
          <h3>{open?.label}<span>{open?.n} {open?.n === 1 ? 'project' : 'projects'}</span></h3>
          <button type="button" className="wresults__close" onClick={() => pick(active)}>Close</button>
        </div>
        <div ref={grid}>{children}</div>
      </div>
    </>
  )
}
