import LxShell from '@/components/lx/LxShell'
import JsonLd from '@/components/JsonLd'
import { Icon, Pill } from '@/components/lx/Icons'
import { Faq, Steps, PageHero, Facts, SecHead } from '@/components/lx/Sections'
import { shopifyService, shopifyPackages, shopifyFaqs } from '@/data/shopify'
import { createMetadata, getBreadcrumbJsonLd, getFaqJsonLd, absoluteUrl, siteConfig } from '@/lib/seo'

const path = `/services/${shopifyService.slug}/`

export const metadata = createMetadata({
  title: 'Shopify Store Design Packages | Muhammad Kashif',
  description: 'Shopify store design from $500: Starter for new brands, Growth for custom storefronts and B2B / Wholesale for retail and wholesale from one store. Scope, revisions and turnaround.',
  path,
  keywords: ['Shopify store design', 'Shopify designer', 'Shopify store setup service', 'Shopify wholesale B2B store', 'custom Shopify storefront', 'Shopify product page design'],
})

const STORE_STEPS = [
  ['Scope', 'We go through your brand, catalog and competitors, agree the package and what each page needs to do, and confirm the price before any work starts.'],
  ['Build & refine', 'I set up the theme, build the pages and structure the catalog, then refine it with you over the revision rounds your package includes.'],
  ['QA & launch', 'Mobile layouts, payments and shipping are checked end to end before the store goes live.'],
]

const usd = n => `$${n.toLocaleString('en-US')}`
const priceText = p => `${p.from ? 'from ' : ''}${usd(p.priceUsd)}`

function Tiers() {
  return (
    <ul className="tiers">
      {shopifyPackages.map((p, i) => (
        <li key={p.id} className="rv" style={{ '--rd': `${i * 100}ms` }}>
          <article className={`tier${p.featured ? ' tier--feature' : ''}`} id={p.id}>
            <h3 className="tier__name">{p.name}</h3>
            <p className="tier__price">{p.from && <small>Starting at</small>}{usd(p.priceUsd)}</p>
            <p className="tier__fit">{p.fit}</p>
            <ul className="tier__list">
              {p.includes.map(item => (
                <li key={item} className={item.endsWith('plus:') ? 'tier__plus' : undefined}>
                  {!item.endsWith('plus:') && <Icon name="check" />}{item}
                </li>
              ))}
            </ul>
            <p className="tier__meta"><span>{p.revisions}</span><span>{p.turnaround}</span></p>
            <Pill variant={p.featured ? 'light' : 'dark'} arrow="up-right" data-go="contact" data-service={`Shopify Store Design — ${p.name} (${priceText(p)})`}>Start with {p.name}</Pill>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default function ShopifyStoreDesignPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`${path}#service`),
    name: 'Shopify Store Design',
    serviceType: 'Shopify store design',
    description: metadata.description,
    url: absoluteUrl(path),
    provider: { '@id': `${siteConfig.url}/#service` },
    areaServed: 'Worldwide',
    offers: shopifyPackages.map(p => ({
      '@type': 'Offer',
      name: `${p.name} package`,
      priceCurrency: 'USD',
      ...(p.from
        ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: p.priceUsd, priceCurrency: 'USD' } }
        : { price: p.priceUsd }),
      description: p.fit,
    })),
  }

  return (
    <LxShell>
      <JsonLd data={[schema, getFaqJsonLd(shopifyFaqs.map(([q, a]) => ({ q, a })))]} />
      <JsonLd data={getBreadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: 'Shopify Store Design', path }])} />
      <main id="main-content">
        <PageHero
          watermark="SHOPIFY"
          crumb={[{ label: 'Services', href: '/services/' }, { label: 'Shopify Store Design' }]}
          lines={['A storefront built', 'the way buyers decide.']}
          lead="The same thinking as an Amazon listing: research first, then every page section gets one job, in the order a buyer thinks. Three packages, from a clean launch on a premium theme to a full retail-and-wholesale store."
          aside={<Facts items={[
            ['Service', 'Shopify store design'],
            ['Packages', `3, from ${usd(shopifyService.fromUsd)}`],
            ['Turnaround', '1–6 weeks'],
            ['Revisions', '1–3 rounds included'],
          ]} />}
        >
          <div className="ctas rv" data-gate="" style={{ '--ry': '10px', '--rd': '700ms' }}>
            <Pill variant="dark" arrow="up-right" data-go="contact" data-service="Shopify Store Design">Discuss your store</Pill>
            <Pill variant="outline" arrow={null} href="#packages">Compare packages</Pill>
          </div>
        </PageHero>

        <section className="section" id="packages">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="Packages" title="Choose the store you need." lead="Prices are in USD, per store. Each package starts with a short scoping conversation; anything beyond the listed scope is quoted before work begins." />
            <Tiers />
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="From brief to launch" title="Good design. A straightforward process.">
              <div className="rv" style={{ '--ry': '12px', '--rd': '150ms' }}><Pill variant="outline" href="/services/">Amazon services</Pill></div>
            </SecHead>
            <Steps items={STORE_STEPS} />
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
              <Faq items={shopifyFaqs} />
            </div>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
