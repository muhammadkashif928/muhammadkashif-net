import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Contact Muhammad Kashif | Hire an Amazon Brand Designer',
  description: "Let's grow your Amazon brand with A+ Content, product infographics, main image strategy, packaging, and AI-powered product visuals. Contact Muhammad Kashif today.",
  path: '/contact-me/',
  keywords: ['hire Amazon brand designer', 'contact Amazon A+ Content designer', 'Muhammad Kashif contact'],
})

export default function ContactMe() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </>
  )
}
