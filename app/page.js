import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ClientStrip from '@/components/ClientStrip'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  // 54 chars — Google shows ~60; keep under to avoid truncation (S-1)
  title: 'Amazon Listing Designer for Leather & Shoe Care Brands',
  // 142 chars — Google shows ~155 (S-2)
  description: 'Amazon listing design for leather, shoe care & footwear brands: main images, infographics, A+ Content and Brand Stores built to win the click.',
  path: '/',
  image: '/images/profile.avif',
  imageAlt: 'Muhammad Kashif — Amazon Brand Designer and A+ Content Specialist in Kuching, Malaysia',
})

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientStrip />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
