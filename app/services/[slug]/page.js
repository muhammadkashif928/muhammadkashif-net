import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProjectCTA from '@/components/ProjectCTA'
import { DesignProcess } from '@/components/HomeGrowth'
import JsonLd from '@/components/JsonLd'
import { services, getService, priceLabel } from '@/data/services'
import { servicePresentation } from '@/data/service-presentation'
import { portfolioProjects, projectHref } from '@/data/portfolio'
import { createMetadata, getBreadcrumbJsonLd } from '@/lib/seo'

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }) {
  const { slug } = await params
  const presentation = servicePresentation[slug]
  if (!presentation) return {}
  return createMetadata({ title: `${presentation.title} | Amazon Design Services`, description: presentation.brief, path: `/services/${slug}/`, image: presentation.image, imageAlt: presentation.alt })
}
export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = getService(slug)
  const detail = servicePresentation[slug]
  if (!service || !detail) notFound()
  const project = portfolioProjects.find(p => p.slug === detail.project)
  return <><Navbar /><JsonLd data={getBreadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: detail.title, path: `/services/${slug}/` }])} /><main id="main-content" className="interior-page">
    <PageHeader label={detail.title} title={detail.headline} subtitle={detail.brief} image={detail.image} imageAlt={detail.alt} imageCaption={detail.caption} primary={{ label: `Book · ${priceLabel(service)}`, href: `/order/${slug}/` }} secondary={{ label: 'Ask about your project', href: '/contact-me/' }} />
    <section className="interior-section"><div className="studio-wrap service-detail-grid"><div><p className="studio-eyebrow">THE RIGHT FIT</p><h2 className="studio-heading">Built around<br /><em>your next step.</em></h2><p className="studio-lead">{detail.fit}</p><div className="service-facts"><div><span>PROJECT PRICE</span><strong>{priceLabel(service)}</strong><small>{service.unit}</small></div><div><span>TYPICAL TURNAROUND</span><strong>{service.turnaround}</strong><small>Scope confirmed with your brief</small></div></div>{service.fromPrice && <p className="fine-print">The starting price covers the listed scope. Additional work is quoted separately before it begins.</p>}</div><div className="deliverable-card"><h2>What’s included</h2><ul>{service.deliverables.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul><a className="studio-button" href={`/order/${slug}/`}>Start your project ↗</a></div></div></section>
    {project && <section className="interior-section service-related"><div className="studio-wrap"><p className="studio-eyebrow">SEE THE APPROACH IN PRACTICE</p><a href={projectHref(project)} className="service-project"><img src={project.img} alt={project.title} width="960" height="640" loading="lazy" /><div><h2>{project.title}</h2><p>{project.desc}</p><span className="studio-text-link">Explore the case study ↗</span></div></a></div></section>}
    <DesignProcess /><ProjectCTA /></main><Footer /></>
}
