import { notFound } from 'next/navigation'
import LxShell from '@/components/lx/LxShell'
import { Icon } from '@/components/lx/Icons'
import { serviceName } from '@/components/lx/Sections'
import OrderForm from '@/components/OrderForm'
import { servicePresentation } from '@/data/service-presentation'
import JsonLd from '@/components/JsonLd'
import { services, getService, priceLabel, onSale, regularLabel, savingsPercent } from '@/data/services'
import { createMetadata, getBreadcrumbJsonLd, absoluteUrl, siteConfig } from '@/lib/seo'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  const title = `Order ${titleCase(service.title)} — ${priceLabel(service)}`
  return createMetadata({
    title,
    description: `${service.desc} ${priceLabel(service)}, ${service.unit}. Typical turnaround ${service.turnaround}. Secure card checkout.`,
    path: `/order/${service.slug}/`,
    keywords: [`buy ${service.title.toLowerCase()}`, `${service.title.toLowerCase()} price`, 'hire Amazon designer'],
  })
}

function titleCase(s) {
  return s.toLowerCase().replace(/(^|\s|\+)\w/g, (m) => m.toUpperCase())
}

export default async function OrderPage({ params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const offerJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: titleCase(service.title),
    description: service.desc,
    provider: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
    areaServed: ['US', 'GB', 'CA'],
    offers: {
      '@type': 'Offer',
      price: service.priceUsd,
      priceCurrency: 'USD',
      url: absoluteUrl(`/order/${service.slug}/`),
      availability: 'https://schema.org/InStock',
    },
  }

  const name = serviceName(service)
  const look = servicePresentation[service.slug]

  return (
    <LxShell>
      <JsonLd
        data={[
          offerJsonLd,
          getBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: titleCase(service.title), path: `/order/${service.slug}/` },
          ]),
        ]}
      />
      <main id="main-content">
        <section className="ahero ohero">
          <div className="shell ahero__in">
            <nav className="phero__crumbs rv" data-gate="" style={{ '--ry': '10px', '--rd': '200ms' }} aria-label="Breadcrumb">
              <a href="/">Home</a><span aria-hidden="true">/</span><a href="/services/">Services</a><span aria-hidden="true">/</span><a href={`/services/${service.slug}/`}>{name}</a><span aria-hidden="true">/</span><span>Order</span>
            </nav>
            <h1 className="ahero__h1 lines" data-gate="" data-delay="250" data-stagger="90" data-lines={`Order ${name}`}>Order {name}</h1>
            <p className="phero__lead rv" data-gate="" style={{ '--ry': '12px', '--rd': '500ms' }}>Review the scope, share your brief, then continue to secure payment.</p>
          </div>
        </section>

        <section className="section">
          <div className="shell ogrid">
            <div className="ogrid__form">
              <OrderForm service={service} />
            </div>

            <aside className="ogrid__side">
              <div className="osum">
                <img src={look.image} alt={look.alt} width="640" height="400" />
                <div className="osum__body">
                  <p className="eyebrow">{service.num} — Your order</p>
                  <h2>{name}</h2>
                  {onSale(service) && <span className="sale-flag">Sale · save {savingsPercent(service)}%</span>}
                  <p className="osum__price"><strong>{priceLabel(service)}</strong>{onSale(service) && <s className="svc__was">{regularLabel(service)}</s>}<span>{service.unit}</span></p>
                  <p className="osum__k">What you get</p>
                  <ul className="checks checks--one">
                    {service.deliverables.map((d) => <li key={d}><Icon name="check" />{d}</li>)}
                  </ul>
                  <div className="osum__row"><span>Turnaround</span><strong>{service.turnaround}</strong></div>
                </div>
              </div>
              {service.fromPrice && (
                <p className="ofm__fine">{priceLabel(service)} covers the scope listed above. Anything beyond it is quoted and invoiced separately after we confirm the brief — never charged automatically.</p>
              )}
              <p className="ofm__fine">Questions before you buy? <a href="/contact-me/">Message me first</a> — I reply within 24 hours.</p>
            </aside>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
