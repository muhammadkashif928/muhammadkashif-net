import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Muhammad Kashif | Amazon Brand Designer & A+ Content Strategist',
  description: 'Muhammad Kashif turns Amazon private label products into premium brands with A+ Content, product infographics, listing images, packaging, and AI-powered design.',
  path: '/',
  image: '/images/profile.avif',
  imageAlt: 'Muhammad Kashif, Amazon Brand Designer',
  keywords: ['Amazon Brand Designer', 'A+ Content Strategist', 'Amazon product infographic designer'],
})

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
