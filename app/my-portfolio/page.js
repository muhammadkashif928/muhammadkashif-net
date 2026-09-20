import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ContentExplorer from '@/components/ContentExplorer'
import ProjectCTA from '@/components/ProjectCTA'
import { createMetadata } from '@/lib/seo'
import { portfolioProjects, projectHref } from '@/data/portfolio'

export const metadata = createMetadata({
  title: 'Amazon Design Portfolio — Case Studies | Muhammad Kashif',
  description: 'Portfolio and case studies by Muhammad Kashif: Amazon A+ Content, product image optimization, brand identity, packaging design, AI retouching, and product photography — all built to convert browsers into buyers.',
  path: '/my-portfolio/',
  image: '/images/portfolio-1.webp',
  imageAlt: 'Amazon design portfolio — A+ Content, product photography, and brand identity case studies',
  keywords: [
    'Amazon design portfolio',
    'A+ Content portfolio case study',
    'Amazon listing design case studies',
    'product image optimization portfolio',
    'brand identity packaging portfolio',
    'AI product retouching portfolio',
  ],
})

export default function MyPortfolio() {
  const items = portfolioProjects.map(project => ({ href: projectHref(project), title: project.title, description: project.desc, category: project.tag, date: project.date, image: project.img, alt: project.title }))
  return <><Navbar /><main id="main-content" className="interior-page"><PageHeader label="SELECTED WORK" title={<>The details.<br />The difference.</>} subtitle="Explore real product transformations, listing design and brand projects. See the thinking behind the finished visuals." primary={{ label: 'Discuss your project', href: '/contact-me/' }} /><ContentExplorer items={items} kind="work" /><ProjectCTA /></main><Footer /></>
}
