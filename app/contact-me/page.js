import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Contact Muhammad Kashif | Hire an Amazon Brand Designer',
  description: "Let's grow your Amazon brand with high-converting main images, product infographics, A+ Content, and Brand Stores — with deep specialism in leather care, shoe care, and footwear listings. Contact Muhammad Kashif today.",
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
