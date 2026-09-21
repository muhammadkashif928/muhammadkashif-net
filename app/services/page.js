import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import PageHeader from '@/components/PageHeader'
import ProjectCTA from '@/components/ProjectCTA'
import { DesignProcess, HomeFAQ } from '@/components/HomeGrowth'
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

export default function ServicesPage() {
  return <><Navbar /><main id="main-content" className="interior-page">
    <PageHeader label="DESIGN SERVICES" title={<>Built for your product.<br />Designed for the decision.</>} subtitle="From the first image to a complete brand store. Explore the scope, see examples and choose the support your next launch needs." image="/images/design-studio-v1.webp" imageAlt="Creative workspace with product layouts and brand swatches" imageCaption="AI-generated studio concept" primary={{ label: 'Find your service', href: '#services' }} secondary={{ label: 'Ask for a quote', href: '/contact-me/' }} />
    <Services /><DesignProcess /><HomeFAQ /><ProjectCTA />
  </main><Footer /></>
}
