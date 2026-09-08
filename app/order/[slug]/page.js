import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OrderForm from '@/components/OrderForm'
import JsonLd from '@/components/JsonLd'
import { services, getService, priceLabel } from '@/data/services'
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

  return (
    <>
      <Navbar />
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

      <main style={{ backgroundColor: 'var(--b-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">

          <a href="/services/" className="font-mono text-[11px] tracking-[0.25em] inline-block mb-8" style={{ color: 'var(--b-muted)' }}>
            ← ALL SERVICES
          </a>

          <div className="grid lg:grid-cols-[1fr_22rem] gap-10 lg:gap-16 items-start">

            {/* Form */}
            <div className="order-2 lg:order-1">
              <OrderForm service={service} />
            </div>

            {/* Summary — sticks alongside the form on desktop */}
            <aside className="order-1 lg:order-2 lg:sticky lg:top-28">
              <div className="border-2 p-6 sm:p-7" style={{ borderColor: 'var(--b-text)', boxShadow: '6px 6px 0px var(--b-border)' }}>
                <p className="font-mono text-[10px] tracking-[0.3em] mb-3" style={{ color: 'var(--b-muted)' }}>
                  {service.num} — YOUR ORDER
                </p>

                <h1 className="font-bebas text-2xl sm:text-3xl tracking-wide leading-tight mb-5" style={{ color: 'var(--b-text)' }}>
                  {service.title}
                </h1>

                <div className="flex items-baseline gap-2 pb-5 mb-5 border-b" style={{ borderColor: 'var(--b-border)' }}>
                  <span className="font-bebas text-4xl leading-none" style={{ color: 'var(--b-text)' }}>
                    {priceLabel(service)}
                  </span>
                  <span className="font-mono text-xs" style={{ color: 'var(--b-muted)' }}>{service.unit}</span>
                </div>

                <p className="font-mono text-[10px] tracking-[0.25em] mb-3" style={{ color: 'var(--b-muted)' }}>WHAT YOU GET</p>
                <ul className="flex flex-col gap-2.5 mb-6">
                  {service.deliverables.map((d) => (
                    <li key={d} className="font-mono text-xs leading-relaxed flex gap-2.5" style={{ color: 'var(--b-muted)' }}>
                      <span style={{ color: 'var(--b-text)' }}>—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t flex justify-between items-center gap-3" style={{ borderColor: 'var(--b-border)' }}>
                  <span className="font-mono text-[10px] tracking-[0.25em]" style={{ color: 'var(--b-muted)' }}>TURNAROUND</span>
                  <span className="font-mono text-xs text-right" style={{ color: 'var(--b-text)' }}>{service.turnaround}</span>
                </div>
              </div>

              {service.fromPrice && (
                <p className="font-mono text-[11px] leading-relaxed mt-4" style={{ color: 'var(--b-muted)' }}>
                  {priceLabel(service)} covers the scope listed above. Anything
                  beyond it is quoted and invoiced separately after we confirm
                  the brief — never charged automatically.
                </p>
              )}

              <p className="font-mono text-[11px] leading-relaxed mt-4" style={{ color: 'var(--b-muted)' }}>
                Questions before you buy?{' '}
                <a href="/contact-me/" className="underline" style={{ color: 'var(--b-text)' }}>Message me first</a> —
                I reply within 24 hours.
              </p>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
