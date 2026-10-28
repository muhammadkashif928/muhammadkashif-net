import LxShell from '@/components/lx/LxShell'
import { Pill } from '@/components/lx/Icons'
import { FeaturedCards, FEATURED, PORTFOLIO_ONLY, PageHero, Facts, SecHead, Steps } from '@/components/lx/Sections'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Amazon Design Portfolio — Case Studies | Muhammad Kashif',
  description: 'Portfolio and case studies by Muhammad Kashif: Amazon main images, full listing sets and AI + Photoshop lifestyle composites — each built to win the click and answer the buyer’s next question.',
  path: '/my-portfolio/',
  image: '/images/lx/work/leather-hero-salve.webp',
  imageAlt: 'Leather Hero Furniture Salve tin and brush on a dark wooden surface — a case study from Muhammad Kashif’s portfolio',
  keywords: [
    'Amazon design portfolio',
    'Amazon listing design case studies',
    'Amazon main image case study',
    'product image optimization portfolio',
    'AI product lifestyle composite',
  ],
})

const caseStudies = [...PORTFOLIO_ONLY, ...FEATURED]

export default function MyPortfolio() {
  return (
    <LxShell>
      <main id="main-content">
        <PageHero
          watermark="WORK"
          crumb={[{ label: 'Work' }]}
          lines={['Selected work.', 'Proof over claims.']}
          lead="In-depth case studies across main images, full listing sets and lifestyle composites. Each one is built to win the click — then answer the buyer's next question."
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
            <FeaturedCards projects={caseStudies} lead={caseStudies.length % 2 === 1} />
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
