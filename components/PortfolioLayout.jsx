import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProjectCTA from '@/components/ProjectCTA'
import { portfolioProjects, projectHref } from '@/data/portfolio'

export default function PortfolioLayout({ title, tag, service, industry, published, coverImage, images, children }) {
  const related = portfolioProjects.filter(p => p.title !== title).slice(0,3)
  return <><Navbar /><main id="main-content" className="interior-page case-study-page"><PageHeader label={tag || 'CASE STUDY'} title={title} image={coverImage} imageAlt={`${title} project cover`} secondary={{ label: 'All projects', href: '/my-portfolio/' }} />
    <div className="studio-wrap case-meta">{[{ label: 'Service', value: service }, { label: 'Industry', value: industry }, { label: 'Published', value: published }].map(item => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>
    <div className="studio-wrap article-grid"><div><div className="prose-custom">{children}</div>{images?.length > 0 && <div className="case-gallery">{images.map((image,index) => <img key={image} src={image} alt={`${title} — design ${index+1}`} width="1600" height="1200" loading="lazy" />)}</div>}</div><aside className="article-sidebar"><div className="sidebar-card"><h2>Have a similar project?</h2><p>Let’s find the right approach for your product.</p><a className="studio-button" href="/contact-me/">Start a conversation ↗</a></div><div className="sidebar-card"><h2>More work</h2>{related.map(p => <a key={p.slug} href={projectHref(p)}>{p.title} ↗</a>)}</div></aside></div><ProjectCTA /></main><Footer /></>
}
