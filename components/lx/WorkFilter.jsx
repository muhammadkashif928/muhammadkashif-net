'use client'
// Category tabs for the portfolio grid. The cards are rendered on the server
// with `data-cat`; this hides the ones outside the chosen category and keeps
// the choice in the URL hash (e.g. /my-portfolio/#websites) so it can be linked.
import { useEffect, useRef, useState } from 'react'
import WorkCats from './WorkCats'

export default function WorkFilter({ categories, counts, total, extra = [], children }) {
  const [active, setActive] = useState('all')
  const grid = useRef(null)
  const tabRow = useRef(null)

  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(location.hash.slice(1))
      const ok = categories.some(c => c.id === id)
      setActive(ok ? id : 'all')
      // Arriving from a category card on another page: bring the filtered grid into view.
      if (ok) setTimeout(toGrid, 400)
    }
    fromHash()
    addEventListener('hashchange', fromHash)
    return () => removeEventListener('hashchange', fromHash)
  }, [categories])

  useEffect(() => {
    grid.current?.querySelectorAll('li[data-cat]').forEach(li => {
      li.hidden = active !== 'all' && li.dataset.cat !== active
    })
    // On a phone the tab row scrolls sideways — bring the chosen tab into view.
    const row = tabRow.current, tab = row?.querySelector('[aria-pressed="true"]')
    if (tab) row.scrollTo({ left: tab.offsetLeft - (row.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' })
  }, [active])

  const toGrid = () => {
    const row = tabRow.current
    if (row) window.scrollTo({ top: row.getBoundingClientRect().top + window.pageYOffset - 96, behavior: 'smooth' })
  }
  const pickCard = id => { pick(id); toGrid() }

  const pick = id => {
    setActive(id)
    history.replaceState(null, '', id === 'all' ? location.pathname + location.search : `#${id}`)
  }

  const tabs = [{ id: 'all', label: 'All work', n: total }, ...categories.map(c => ({ ...c, n: counts[c.id] || 0 })).filter(c => c.n)]
  return (
    <>
      <WorkCats items={[...tabs.slice(1), ...extra]} active={active} onPick={pickCard} />
      <div ref={tabRow} className="wtabs rv" role="group" aria-label="Filter case studies by category">
        {tabs.map(t => (
          <button key={t.id} type="button" className="wtab" aria-pressed={active === t.id} onClick={() => pick(t.id)}>
            {t.label}<span className="wtab__n">{t.n}</span>
          </button>
        ))}
      </div>
      <div ref={grid}>{children}</div>
    </>
  )
}
