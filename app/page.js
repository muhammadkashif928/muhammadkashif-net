import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { StartingPoints, ProductCategories, DesignProcess, HomeFAQ } from '@/components/HomeGrowth'
import ClientStrip from '@/components/ClientStrip'
import About from '@/components/About'
import Services from '@/components/Services'
import HomeProof from '@/components/HomeProof'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  // 54 chars — Google shows ~60; keep under to avoid truncation (S-1)
  title: 'Amazon Listing Design & A+ Content for Every Category',
  // 142 chars — Google shows ~155 (S-2)
  description: 'Amazon listing design across all product categories: main images, infographics, A+ Content and Brand Stores that help your brand stand out.',
  path: '/',
  image: '/images/profile.avif',
  imageAlt: 'Muhammad Kashif — Amazon Brand Designer and A+ Content Specialist in Kuching, Malaysia',
})

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <ClientStrip />
      <StartingPoints />
      <Services />
      <Portfolio />
      <ProductCategories />
      <HomeProof />
      <DesignProcess />
      <Testimonials />
      <About />
      <HomeFAQ />
      <Contact />
      <Footer />
    </main>
  )
}
