import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import PageHeader from '@/components/PageHeader'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Contact Muhammad Kashif | Hire an Amazon Brand Designer',
  description: "Let's grow your Amazon brand with high-converting main images, product infographics, A+ Content, and Brand Stores — for products across all categories. Contact Muhammad Kashif today.",
  path: '/contact-me/',
  keywords: ['hire Amazon brand designer', 'contact Amazon A+ Content designer', 'Muhammad Kashif contact'],
})

export default function ContactMe() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="interior-page contact-page">
        <PageHeader label="LET’S TALK" title={<>Your next launch<br />starts with a conversation.</>} subtitle="Send your product link, what you need designed and your ideal timing. We’ll find a clear starting point." image="/images/kashif-portrait-ivory-v1.webp" imageAlt="Muhammad Kashif, your design partner" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
