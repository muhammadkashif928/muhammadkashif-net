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
  title: 'Muhammad Kashif — Amazon Brand Designer & A+ Content Specialist | Kuching, Malaysia',
  description: 'Muhammad Kashif is an Amazon Brand Designer based in Kuching, Malaysia with 8+ years of experience. He designs A+ Content, product infographics, listing images, brand identity, packaging, and AI-powered lifestyle visuals for private label sellers worldwide. 200+ projects completed.',
  path: '/',
  image: '/images/profile.avif',
  imageAlt: 'Muhammad Kashif — Amazon Brand Designer and A+ Content Specialist in Kuching, Malaysia',
  keywords: [
    'Amazon Brand Designer',
    'A+ Content Specialist',
    'Amazon product infographic designer',
    'Muhammad Kashif Amazon designer',
    'Amazon listing designer Malaysia',
    'hire Amazon designer Kuching',
    'best Amazon A+ Content designer',
  ],
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
