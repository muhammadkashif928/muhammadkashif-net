import LxShell from '@/components/lx/LxShell'
import JsonLd from '@/components/JsonLd'
import { Pill } from '@/components/lx/Icons'
import { PageHero, Facts, SecHead } from '@/components/lx/Sections'
import { createMetadata, getBreadcrumbJsonLd, getFaqJsonLd, absoluteUrl, siteConfig } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Remote Amazon Listing Designer for US, UK & Europe',
  description: 'Hire Muhammad Kashif remotely for Amazon listing images, A+ Content, Brand Stores and Shopify design in the US, UK and Europe. English communication and clear USD pricing.',
  path: '/international-amazon-design-services/',
  keywords: [
    'freelance Amazon listing designer USA',
    'Amazon A+ Content designer UK',
    'Amazon designer Europe',
    'remote Amazon listing designer',
    'ecommerce designer for European brands',
    'Amazon product image designer for hire',
  ],
})

const regions = [
  {
    title: 'United States',
    copy: 'Design support for brands selling on Amazon.com, including main images, product infographics, A+ Content, Brand Story and Brand Stores. Project calls can be arranged with overlap for US business hours.',
  },
  {
    title: 'United Kingdom',
    copy: 'Remote creative support for Amazon.co.uk listings and Shopify stores, with English-language communication, written scopes and files prepared for the agreed marketplace placements.',
  },
  {
    title: 'European Union',
    copy: 'Design support for brands and agencies in Germany, France, Italy, Spain, the Netherlands and other European markets. You provide approved local-language copy where required; I build the visual system around it.',
  },
]

const faqs = [
  {
    q: 'Where is Muhammad Kashif based?',
    a: 'Muhammad is based in Kuching, Sarawak, Malaysia. He works remotely with clients in the United States, United Kingdom, Europe, Canada, Australia and other markets.',
  },
  {
    q: 'Can you work with a US, UK or European agency?',
    a: 'Yes. Project-based and ongoing support are available for e-commerce brands and agencies. The scope, deliverables, communication rhythm and approval process are agreed before work begins.',
  },
  {
    q: 'Which Amazon marketplaces do you design for?',
    a: 'Projects can be prepared for Amazon.com, Amazon.co.uk and European Amazon marketplaces. Marketplace-specific copy and claims must be supplied or approved by the client.',
  },
  {
    q: 'How are international projects managed?',
    a: 'Projects use a written brief, agreed milestones and async updates, with calls when useful. Prices on the services page are in US dollars, and larger or multi-market scopes are quoted before work begins.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl('/international-amazon-design-services/')}#service`,
  name: 'Remote Amazon and e-commerce design services',
  description: 'Remote freelance Amazon listing, A+ Content, Brand Store and Shopify design for brands in the United States, United Kingdom and Europe.',
  url: absoluteUrl('/international-amazon-design-services/'),
  provider: { '@id': `${siteConfig.url}/#service` },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'AdministrativeArea', name: 'European Union' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Italy' },
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'Country', name: 'Netherlands' },
  ],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: absoluteUrl('/contact-me/'),
    servicePhone: siteConfig.phone,
    availableLanguage: ['English', 'Malay', 'Urdu'],
  },
}

export default function InternationalAmazonDesignServices() {
  return (
    <LxShell>
      <JsonLd data={[
        serviceJsonLd,
        getFaqJsonLd(faqs),
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: 'International clients', path: '/international-amazon-design-services/' },
        ]),
      ]} />
      <main id="main-content">
        <PageHero
          watermark="REMOTE"
          crumb={[{ label: 'Services', href: '/services/' }, { label: 'International clients' }]}
          lines={['Your product.', 'One remote design partner.']}
          lead="Amazon and Shopify design for brands in the United States, United Kingdom and Europe — delivered remotely from Kuching, Malaysia with clear scopes, async updates and flexible call times."
          aside={<Facts items={[
            ['Based in', 'Kuching, Malaysia'],
            ['Working with', 'US, UK & Europe'],
            ['Communication', 'English'],
            ['Response', 'Within 24 hours'],
          ]} />}
        />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead
              eyebrow="International service"
              title="Specialist work without an agency handoff."
              lead="You work directly with the designer responsible for the brief, research, visual direction and final files. Location is clear, deliverables are written down, and the project is organized for remote collaboration."
            />
            <div className="svcs">
              {regions.map((region, index) => (
                <article className="svc" id={`region-${index + 1}`} key={region.title}>
                  <div className="svc__side">
                    <span className="svc__idx">0{index + 1}</span>
                    <h2 className="svc__title">{region.title}</h2>
                  </div>
                  <div className="svc__body">
                    <p className="svc__fit"><small>Remote design service</small>{region.copy}</p>
                    <div className="svc__actions">
                      <Pill variant="outline" arrow="up-right" href="/services/">Compare services</Pill>
                      <a className="svc__more" href="/contact-me/">Discuss a project</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead
              eyebrow="What you can hire me for"
              title="Amazon creative and the storefront around it."
              lead="Choose a focused deliverable or build a connected system across your product gallery, A+ Content, Brand Story, Brand Store and Shopify site."
            />
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Remote freelance support</p>
                <h2>Start with the product and the decision it needs to explain.</h2>
                <p>Current scope, prices, turnaround and revision allowances are published on the services page. Multi-market and agency work is quoted after the deliverables are confirmed.</p>
              </div>
              <div className="ccta__actions">
                <Pill variant="light" arrow="up-right" href="/services/">Explore services</Pill>
                <Pill variant="outline" arrow="up-right" href="/my-portfolio/" className="pill--on-dark">View selected work</Pill>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="questions">
          <div className="shell section__in section__in--tight">
            <div className="faq--split">
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">Working across borders</span></div>
                <h2 className="sec-h2 lines" data-delay="120">What international clients usually ask.</h2>
                <p className="sec-lead rv" style={{ '--ry': '12px', '--rd': '150ms' }}>Ready to discuss a product? <a href="/contact-me/" style={{ textDecoration: 'underline', textUnderlineOffset: 3, color: '#111' }}>Send the brief</a>.</p>
              </div>
              <div className="faq">
                {faqs.map((item, index) => (
                  <details key={item.q} open={index === 0}>
                    <summary><span>{item.q}</span><span aria-hidden="true">+</span></summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
