// Shared layout for the legal pages (privacy, terms, disclaimer).
// `sections` keep the pages' existing mini-markdown: "**Heading:**" lines, "- " bullets,
// blank lines between paragraphs.
import LxShell from './LxShell'
import { PageHero } from './Sections'

const slug = s => s.toLowerCase().replace(/^\d+\.\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function Content({ text }) {
  const blocks = []
  let list = null
  for (const raw of text.split('\n')) {
    const line = raw.trim()
    if (line.startsWith('- ')) {
      if (!list) { list = []; blocks.push({ type: 'ul', items: list }) }
      list.push(line.slice(2))
      continue
    }
    list = null
    if (!line) continue
    if (line.startsWith('**') && line.endsWith('**')) blocks.push({ type: 'h3', text: line.replace(/\*\*/g, '') })
    else blocks.push({ type: 'p', text: line })
  }
  // Inline **bold** inside paragraphs and list items
  const inline = s => s.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part)
  return blocks.map((b, i) => {
    if (b.type === 'ul') return <ul key={i}>{b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}</ul>
    if (b.type === 'h3') return <h3 key={i}>{b.text}</h3>
    return <p key={i}>{inline(b.text)}</p>
  })
}

export default function LegalDoc({ watermark = 'LEGAL', crumb, lines, updated, intro, sections }) {
  return (
    <LxShell>
      <main id="main-content">
        <PageHero watermark={watermark} crumb={[{ label: crumb }]} lines={lines} lead={updated} />
        <section className="section">
          <div className="shell section__in">
            <div className="agrid legal-doc">
              <div className="agrid__main">
                {intro && <p className="note legal-doc__intro">{intro}</p>}
                <div className="prose">
                  {sections.map(sec => (
                    <section key={sec.title} id={slug(sec.title)} className="legal-doc__sec">
                      <h2>{sec.title}</h2>
                      <Content text={sec.content} />
                    </section>
                  ))}
                </div>
              </div>
              <aside className="agrid__side">
                <nav className="aside-card toc" aria-label="Sections">
                  <p className="eyebrow">On this page</p>
                  <ol>{sections.map(sec => <li key={sec.title}><a href={`#${slug(sec.title)}`}>{sec.title.replace(/^\d+\.\s*/, '')}</a></li>)}</ol>
                </nav>
                <div className="aside-card aside-card--dark">
                  <p className="eyebrow eyebrow--light">Questions?</p>
                  <h2>Ask me directly.</h2>
                  <p>Email <a href="mailto:info@muhammadkashif.net" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3 }}>info@muhammadkashif.net</a> about anything on this page.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
