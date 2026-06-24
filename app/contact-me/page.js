import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Contact Me | Muhammad Kashif — Amazon Brand Designer',
  description: "Let's put our efforts together to grow your business. Get in touch for Amazon A+ content, infographics, and brand design.",
}

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
