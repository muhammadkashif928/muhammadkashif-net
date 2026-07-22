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
  title: 'Muhammad Kashif — Amazon Designer for Leather, Shoe Care & Footwear Brands',
  description: 'Amazon brand designer specializing in leather care, shoe care, and footwear brands — trusted by Angelus, Eagle Shoe Care, Leather Hero, and Lincoln. 8+ years and 200+ products: high-converting main images, infographics, A+ Content, and Brand Stores for US, UK, and Canada private label sellers.',
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
