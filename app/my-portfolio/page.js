import LxShell from '@/components/lx/LxShell'
import { Pill } from '@/components/lx/Icons'
import { FeaturedCards, FEATURED, PORTFOLIO_ONLY, WORK_CATEGORIES, PageHero, Facts, SecHead, Steps } from '@/components/lx/Sections'
import WorkFilter from '@/components/lx/WorkFilter'
import { portfolioProjects } from '@/data/portfolio'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Portfolio — Amazon Design & Website Case Studies | Muhammad Kashif',
  description: 'Portfolio and case studies by Muhammad Kashif: Amazon listing sets, main images, brand stores, lifestyle composites and custom-built websites — filter by category to see the work you need.',
  path: '/my-portfolio/',
  image: '/images/lx/work/leather-hero-salve.webp',
  imageAlt: 'Leather Hero Furniture Salve tin and brush on a dark wooden surface — a case study from Muhammad Kashif’s portfolio',
  keywords: [
    'Amazon design portfolio',
    'Amazon listing design case studies',
    'Amazon main image case study',
    'product image optimization portfolio',
    'AI product lifestyle composite',
    'website design portfolio',
  ],
})

// Newest first, using the dated order in data/portfolio.js (unknown slugs go last).
const order = portfolioProjects.map(p => p.slug)
const rank = slug => (order.indexOf(slug) + 1) || order.length + 1
const caseStudies = [...PORTFOLIO_ONLY, ...FEATURED].sort((a, b) => rank(a.slug) - rank(b.slug))
const categoryCounts = caseStudies.reduce((n, p) => ({ ...n, [p.category]: (n[p.category] || 0) + 1 }), {})

// Tells search engines this page is a collection, and lists every case study on it in order.
const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': absoluteUrl('/my-portfolio/#collection'),
  url: absoluteUrl('/my-portfolio/'),
  name: 'Portfolio — Amazon Design & Website Case Studies',
  isPartOf: { '@id': `${siteConfig.url}/#website` },
  author: { '@id': `${siteConfig.url}/#person` },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: caseStudies.length,
    itemListElement: caseStudies.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: absoluteUrl(p.href),
      name: p.title,
      ...(p.img ? { image: absoluteUrl(p.img) } : {}),
    })),
  },
}

export default function MyPortfolio() {
  return (
    <LxShell>
      <JsonLd data={collectionJsonLd} />
      <main id="main-content">
        <PageHero
          watermark="WORK"
          crumb={[{ label: 'Portfolio' }]}
          path="/my-portfolio/"
          lines={['Selected work.', 'Proof over claims.']}
          lead="In-depth case studies across Amazon listing sets, main images, brand stores and custom websites. Pick a category below to see just the work you need."
          aside={<Facts items={[
            ['Case studies', `${caseStudies.length} in depth`],
            ['Brands', '7+ major brands'],
            ['Products', '200+ designed'],
            ['Marketplace', 'Amazon US & beyond'],
          ]} />}
        />

        <section className="section">
          <div className="shell section__in">
            <SecHead eyebrow="Case studies" pill title="Recent work" lead="The brief, the decisions and the before-and-after for every image in the set." />
            <WorkFilter categories={WORK_CATEGORIES} counts={categoryCounts} total={caseStudies.length}>
              <FeaturedCards projects={caseStudies} />
            </WorkFilter>
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="How every project runs" title="From brief to ready-to-upload.">
              <div className="rv" style={{ '--ry': '12px', '--rd': '150ms' }}><Pill variant="outline" arrow="up-right" data-go="contact">Discuss your project</Pill></div>
            </SecHead>
            <Steps />
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
