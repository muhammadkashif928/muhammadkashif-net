import LxShell from '@/components/lx/LxShell'
import { Pill } from '@/components/lx/Icons'
import { ServiceRows, ServiceDetail, Faq, Steps, PageHero, Facts, SecHead } from '@/components/lx/Sections'
import { services } from '@/data/services'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Amazon Listing Design Services | Muhammad Kashif',
  description: 'Explore Amazon main image design, product infographics, A+ Content and Brand Store services. Compare scope, pricing and turnaround across all product categories.',
  path: '/services/',
  keywords: [
    'Amazon design services',
    'Amazon main image optimization service',
    'Amazon product infographic service',
    'A+ Content design service',
    'Amazon Brand Story design service',
    'Amazon Brand Store design service',
    'Amazon Storefront design service',
    'hire Amazon A+ Content designer',
    'Amazon listing optimization service',
    'Amazon brand design Malaysia',
  ],
})

const lowest = Math.min(...services.map(s => s.priceUsd))

export default function ServicesPage() {
  return (
    <LxShell>
      <main id="main-content">
        <PageHero
          watermark="SERVICES"
          crumb={[{ label: 'Services' }]}
          lines={['Built for your product.', 'Designed for the decision.']}
          lead="From the first image to a complete brand store. See the scope, the turnaround and what's included — then choose the support your next launch needs."
          aside={<Facts items={[
            ['Services', `${services.length}, from $${lowest}`],
            ['Turnaround', '2–14 business days'],
            ['Revisions', '2–3 rounds included'],
            ['Files', 'Seller Central-ready'],
          ]} />}
        />

        <section className="services">
          <div className="shell services__in">
            <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">What I deliver</span></div>
            <h2 className="services__h2 lines" data-delay="120">Design at every touchpoint.</h2>
            <ServiceRows hrefFor={s => `#${s.slug}`} />
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="Scope & turnaround" title="What each project includes" lead="Every project starts with competitor analysis and ends with files sized for the agreed Amazon placements." />
            <div className="svcs">
              {services.map(s => <ServiceDetail key={s.slug} service={s} feature={s.slug === 'full-listing-design'} />)}
            </div>
            <p className="note rv"><strong>Scope, revisions &amp; payment.</strong> Prices are in USD, per project, and include competitor analysis, the revision allowance listed above and Seller Central-ready files. A &ldquo;from&rdquo; price covers the scope shown; larger catalogs and additional work are quoted separately before work begins — never charged automatically. Card payments are handled securely by Stripe.</p>
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="From brief to ready-to-upload" title="Good design. A straightforward process.">
              <div className="rv" style={{ '--ry': '12px', '--rd': '150ms' }}><Pill variant="outline" arrow="up-right" data-go="contact">Discuss your project</Pill></div>
            </SecHead>
            <Steps />
          </div>
        </section>

        <section className="section" id="questions">
          <div className="shell section__in section__in--tight">
            <div className="faq--split">
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">Before we start</span></div>
                <h2 className="sec-h2 lines" data-delay="120">A few things you might ask.</h2>
                <p className="sec-lead rv" style={{ '--ry': '12px', '--rd': '150ms' }}>Something else on your mind? <a href="/contact-me/" style={{ textDecoration: 'underline', textUnderlineOffset: 3, color: '#111' }}>Ask me directly</a>.</p>
              </div>
              <Faq />
            </div>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
