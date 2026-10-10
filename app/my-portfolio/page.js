import LxShell from '@/components/lx/LxShell'
import { Icon } from '@/components/lx/Icons'
import { FeaturedCards, FEATURED, PageHero, Facts, SecHead } from '@/components/lx/Sections'
import { createMetadata } from '@/lib/seo'
import { portfolioProjects, projectHref } from '@/data/portfolio'

export const metadata = createMetadata({
  title: 'Amazon Design Portfolio — Case Studies | Muhammad Kashif',
  description: 'Portfolio and case studies by Muhammad Kashif: Amazon A+ Content, product image optimization, brand identity, packaging design, AI retouching, and product photography — all built to convert browsers into buyers.',
  path: '/my-portfolio/',
  image: '/images/portfolio-1.webp',
  imageAlt: 'Amazon design portfolio — A+ Content, product photography, and brand identity case studies',
  keywords: [
    'Amazon design portfolio',
    'A+ Content portfolio case study',
    'Amazon listing design case studies',
    'product image optimization portfolio',
    'brand identity packaging portfolio',
    'AI product retouching portfolio',
  ],
})

// Product shots on white read better shown whole than cropped.
const CONTAIN = new Set(['perfume-oil-bottle-retouching', 'closetlux-image-restoration', 'leather-items-optimized'])
const toTitleCase = s => s.toLowerCase().replace(/(^|\s|\/)(\S)/g, (m, sep, c) => sep + c.toUpperCase()).replace(/\bA\+/g, 'A+').replace(/\bAi\b/g, 'AI')

export default function MyPortfolio() {
  const featured = new Set(FEATURED.map(f => f.slug))
  const archive = portfolioProjects.filter(p => !featured.has(p.slug))

  return (
    <LxShell>
      <main id="main-content">
        <PageHero
          watermark="WORK"
          crumb={[{ label: 'Work' }]}
          lines={['Selected work.', 'Proof over claims.']}
          lead={`${portfolioProjects.length} projects across main images, full listing sets, lifestyle composites and retouching. Each one is built to win the click — then answer the buyer's next question.`}
          aside={<Facts items={[
            ['Projects', `${portfolioProjects.length} case studies`],
            ['Brands', '7+ major brands'],
            ['Products', '200+ designed'],
            ['Marketplace', 'Amazon US & beyond'],
          ]} />}
        />

        <section className="section">
          <div className="shell section__in">
            <SecHead eyebrow="Featured case studies" pill title="Recent work" lead="The brief, the decisions and the before-and-after for every image in the set." />
            <FeaturedCards />
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="From the archive" title="Retouching, restoration & brand work" lead="Single-image fixes, catalogue clean-ups and brand systems — the craft behind every listing." />
            <ul className="atiles">
              {archive.map((p, i) => (
                <li key={p.slug} className="rv" style={{ '--rd': `${(i % 3) * 90}ms` }}>
                  <a className="atile" href={projectHref(p)}>
                    <div className={`atile__img${CONTAIN.has(p.slug) ? ' atile__img--contain' : ''}`}>
                      <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
                    </div>
                    <div className="atile__body">
                      <div className="atile__meta"><span>{toTitleCase(p.tag)}</span><span>{p.date?.slice(-4)}</span></div>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      <div className="atile__foot"><span>Explore project</span><span className="atile__badge"><Icon name="arrow-ur" /></span></div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="shell section__in section__in--tight section__in--flush">
            <div className="sec-head">
              <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">One design partner. Every kind of product.</span></div>
              <h2 className="sec-h2 lines" data-delay="120">Your category. A fresh perspective.</h2>
            </div>
          </div>
          <div className="band">
            <ul className="shell">
              <li className="rv" style={{ '--rd': '0ms' }}><div className="tile tile--light">Beauty</div></li>
              <li className="rv" style={{ '--rd': '120ms' }}><div className="tile tile--accent">Home</div></li>
              <li className="rv" style={{ '--rd': '240ms' }}><div className="tile tile--dark">Tech</div></li>
              <li className="rv" style={{ '--rd': '360ms' }}><div className="tile tile--ghost">&amp; more</div></li>
            </ul>
          </div>
          <div className="shell">
            <p className="sec-lead rv" style={{ '--ry': '12px', paddingBottom: '5rem' }}>Also welcoming health &amp; wellness, pet supplies, food, sports, toys, fashion and lifestyle. The visual approach is tailored to your product, your audience and your marketplace.</p>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
