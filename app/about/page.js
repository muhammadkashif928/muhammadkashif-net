import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About from '@/components/About'
import { DesignProcess } from '@/components/HomeGrowth'
import ProjectCTA from '@/components/ProjectCTA'
import PageHeader from '@/components/PageHeader'
import JsonLd from '@/components/JsonLd'
import { createMetadata, getBreadcrumbJsonLd, absoluteUrl, siteConfig } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'About Muhammad Kashif — Amazon Brand Designer & A+ Content Specialist',
  description: 'Muhammad Kashif is an Amazon Brand Designer based in Kuching, Malaysia with 8+ years of experience and 200+ projects completed. He specializes in A+ Content, product infographics, brand identity, packaging, and AI-powered product photography for private label sellers worldwide.',
  path: '/about/',
  keywords: [
    'about Muhammad Kashif',
    'Amazon designer Malaysia',
    'Amazon brand designer Kuching',
    'who is Muhammad Kashif',
    'Muhammad Kashif Amazon designer portfolio',
    'best Amazon brand designer Malaysia',
    'hire Amazon designer',
  ],
})

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: 'Muhammad Kashif',
  givenName: 'Muhammad',
  familyName: 'Kashif',
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.defaultImage),
  jobTitle: 'Amazon Brand Designer & A+ Content Specialist',
  description: 'Muhammad Kashif is an Amazon Brand Designer with 8+ years of experience helping private label sellers worldwide create high-converting listing visuals, A+ Content, brand identity, packaging, and AI-powered product photography.',
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuching',
    addressRegion: 'Sarawak',
    addressCountry: 'MY',
  },
  sameAs: siteConfig.sameAs,
  knowsAbout: [
    'Amazon A+ Content Design', 'Amazon Listing Optimization', 'Product Infographics',
    'Brand Identity Design', 'Packaging Design', 'AI Product Lifestyle Images',
    'Product Image Optimization', 'E-commerce Product Photography',
    'Private Label Brand Strategy', 'Adobe Photoshop', 'Adobe Illustrator',
    'Blender 3D Rendering', 'Midjourney AI', 'Amazon Seller Central', '3D Product Visualization',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: '8+ Years Amazon Brand Design Experience' },
    { '@type': 'EducationalOccupationalCredential', name: '200+ Completed Client Projects' },
  ],
  worksFor: { '@type': 'Organization', name: 'Designer Trends INC' },
}

export default function AboutPage() {
  return <><JsonLd data={[personJsonLd, getBreadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])]} /><Navbar /><main id="main-content" className="interior-page">
    <PageHeader label="MEET YOUR DESIGNER" title={<>A creative partner.<br />An eye for the details.</>} subtitle="I’m Muhammad Kashif. I work directly with brands to turn product information into clear, considered visuals for Amazon and ecommerce." primary={{ label: 'Let’s talk', href: '/contact-me/' }} secondary={{ label: 'See my work', href: '/my-portfolio/' }} />
    <About />
    <section className="interior-section"><div className="studio-wrap"><p className="studio-eyebrow">WHAT WORKING TOGETHER LOOKS LIKE</p><div className="value-grid">{[
      ['Direct collaboration', 'Talk to the designer doing the work, from your first brief to final delivery.'],
      ['Product-first thinking', 'The visuals start with what your product does and what your customer needs to understand.'],
      ['Craft with a purpose', 'Retouching, composition and AI-assisted imagery serve the story, with careful attention to product accuracy.'],
    ].map(([title,text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></div></section><DesignProcess /><ProjectCTA />
  </main><Footer /></>
}
