import { notFound } from 'next/navigation'
import LxShell from '@/components/lx/LxShell'
import JsonLd from '@/components/JsonLd'
import { Icon, Pill } from '@/components/lx/Icons'
import { ServiceDetail, Faq, Steps, PageHero, Facts, SecHead, serviceName, FeaturedCard, FEATURED, SERVICE_PROOF, PriceText } from '@/components/lx/Sections'
import { services, getService, priceLabel } from '@/data/services'
import { servicePresentation } from '@/data/service-presentation'
import { blogPosts } from '@/data/blog'
import { serviceSeo } from '@/data/service-seo'
import { createMetadata, getBreadcrumbJsonLd, getFaqJsonLd, absoluteUrl, siteConfig } from '@/lib/seo'

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }) {
  const { slug } = await params
  const presentation = servicePresentation[slug]
  if (!presentation) return {}
  return createMetadata({ title: serviceSeo[slug].title, description: serviceSeo[slug].description, path: `/services/${slug}/`, image: presentation.image, imageAlt: presentation.alt })
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = getService(slug)
  const detail = servicePresentation[slug]
  if (!service || !detail) notFound()
  const seo = serviceSeo[slug]
  const guides = blogPosts.filter(post => post.service === slug || seo.articles.includes(post.slug)).slice(0, 3)
  const schema = { '@context': 'https://schema.org', '@type': 'Service', '@id': absoluteUrl(`/services/${slug}/#service`), name: seo.heading, description: seo.description, url: absoluteUrl(`/services/${slug}/`), image: absoluteUrl(detail.image), serviceType: detail.title, provider: { '@id': `${siteConfig.url}/#service` }, areaServed: 'Worldwide', offers: { '@type': 'Offer', url: absoluteUrl(`/order/${slug}/`), priceCurrency: 'USD', ...(service.fromPrice ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: service.priceUsd, priceCurrency: 'USD' } } : { price: service.priceUsd }) } }
  const proof = FEATURED.find(p => p.slug === SERVICE_PROOF[slug])
  const name = serviceName(service)

  return (
    <LxShell>
      <JsonLd data={[schema, getFaqJsonLd(seo.faqs)]} />
      <JsonLd data={getBreadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: detail.title, path: `/services/${slug}/` }])} />
      <main id="main-content">
        <PageHero
          watermark={service.num}
          crumb={[{ label: 'Services', href: '/services/' }, { label: name }]}
          lines={[detail.headline]}
          lead={detail.brief}
          aside={<Facts items={[
            ['Service', name],
            ['Price', <PriceText key="p" service={service} />],
            ['Scope', service.unit],
            ['Turnaround', service.turnaround],
          ]} />}
        >
          <div className="ctas rv" data-gate="" style={{ '--ry': '10px', '--rd': '700ms' }}>
            <Pill variant="dark" arrow="up-right" href={`/order/${slug}/`}>Order · {priceLabel(service)}</Pill>
            <Pill variant="outline" arrow={null} data-go="contact" data-service={name}>Ask about your project</Pill>
          </div>
        </PageHero>

        <section className="section">
          <div className="shell section__in">
            <div className="svcs">
              <ServiceDetail service={service} feature={slug === 'full-listing-design'} headingLevel="h2" showDetailsLink={false} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="See the approach in practice" title={proof ? 'From a real project' : 'What the work looks like'} />
            {proof && (
              <div className="detail-grid">
                <div className="rv"><FeaturedCard project={proof} /></div>
                <div className="proof-copy rv" style={{ '--rd': '120ms' }}>
                  <p className="eyebrow">{proof.meta}</p>
                  <h3>{proof.title}</h3>
                  <p>{proof.desc}</p>
                  <div className="chips">{proof.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <Pill variant="dark" arrow="up-right" href={proof.href}>Read the case study</Pill>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="faq--split">
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">Designed for your category</span></div>
                <h2 className="sec-h2 lines" data-delay="120">{seo.heading}</h2>
                <p className="sec-lead rv" style={{ '--ry': '12px', '--rd': '150ms' }}>{seo.text}</p>
              </div>
              <div>
                {guides.length > 0 && (
                  <div className="rv" style={{ marginBottom: '3rem' }}>
                    <p className="eyebrow" style={{ marginBottom: '1rem' }}>Planning your project</p>
                    <ul className="guides">
                      {guides.map(post => <li key={post.slug}><a href={`/${post.slug}/`}>{post.title}<Icon name="arrow-ur" /></a></li>)}
                    </ul>
                  </div>
                )}
                <p className="eyebrow rv" style={{ marginBottom: '.5rem' }}>Before we begin</p>
                <Faq items={seo.faqs.map(f => [f.q, f.a])} />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <SecHead eyebrow="From brief to ready-to-upload" title="Good design. A straightforward process.">
              <div className="rv" style={{ '--ry': '12px', '--rd': '150ms' }}><Pill variant="outline" href="/services/">All services</Pill></div>
            </SecHead>
            <Steps />
          </div>
        </section>
      </main>
    </LxShell>
  )
}
