import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About from '@/components/About'
import PageHeader from '@/components/PageHeader'
import JsonLd from '@/components/JsonLd'
import { createMetadata, getBreadcrumbJsonLd, absoluteUrl, siteConfig } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'About Muhammad Kashif — Amazon Brand Designer & A+ Content Specialist',
  description: 'Muhammad Kashif is an Amazon Brand Designer based in Kuching, Malaysia with 8+ years of experience and 200+ projects completed. He specializes in A+ Content, product infographics, brand identity, packaging, and AI-powered product photography for private label sellers worldwide.',
  path: '/about/',
  keywords: [
    'about Muhammad Kashif',
    'Amazon designer Malaysia',
    'Amazon brand designer Kuching',
    'who is Muhammad Kashif',
    'Muhammad Kashif Amazon designer portfolio',
    'best Amazon brand designer Malaysia',
    'hire Amazon designer',
  ],
})

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: 'Muhammad Kashif',
  givenName: 'Muhammad',
  familyName: 'Kashif',
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.defaultImage),
  jobTitle: 'Amazon Brand Designer & A+ Content Specialist',
  description: 'Muhammad Kashif is an Amazon Brand Designer with 8+ years of experience helping private label sellers worldwide create high-converting listing visuals, A+ Content, brand identity, packaging, and AI-powered product photography.',
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuching',
    addressRegion: 'Sarawak',
    addressCountry: 'MY',
  },
  sameAs: siteConfig.sameAs,
  knowsAbout: [
    'Amazon A+ Content Design', 'Amazon Listing Optimization', 'Product Infographics',
    'Brand Identity Design', 'Packaging Design', 'AI Product Lifestyle Images',
    'Leather Product Image Optimization', 'E-commerce Product Photography',
    'Private Label Brand Strategy', 'Adobe Photoshop', 'Adobe Illustrator',
    'Blender 3D Rendering', 'Midjourney AI', 'Amazon Seller Central', '3D Product Visualization',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: '8+ Years Amazon Brand Design Experience' },
    { '@type': 'EducationalOccupationalCredential', name: '200+ Completed Client Projects' },
  ],
  worksFor: { '@type': 'Organization', name: 'Designer Trends INC' },
}

const timeline = [
  { year: '2016–Present', role: 'Creative Designer Specialist', company: 'Designer Trends INC', desc: 'Directed visual brand strategy for 7+ major brands. Managed full listing optimization, A+ content, and brand identity for U.S.-based Amazon private label sellers.' },
  { year: '2019–Present', role: 'Freelance Amazon Brand Designer', company: 'Upwork & Fiverr', desc: 'Delivered 200+ projects including product photography, infographics, main image strategy, and AI-generated lifestyle composites for global clients.' },
  { year: '2016–2019', role: 'Graphic Designer', company: 'Independent', desc: 'Built foundational skills in Photoshop, Illustrator, and product retouching. Developed expertise in e-commerce visual standards and Amazon guidelines.' },
]

const tools = [
  'Adobe Photoshop', 'Adobe Illustrator', 'Blender 3D', 'Midjourney AI',
  'Stable Diffusion', 'Adobe Firefly', 'Canva Pro', 'Helium 10',
  'Jungle Scout', 'Amazon Seller Central',
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[personJsonLd, getBreadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])]} />
      <Navbar />
      <main>
        <PageHeader
          label="WHO I AM"
          title={<>ABOUT<br />MUHAMMAD<br />KASHIF</>}
          subtitle="Strategic Brand Developer for Amazon Sellers with 8+ years of experience transforming products into premium brands."
        />

        {/* About section (skills, bio) */}
        <About />

        {/* Career Timeline */}
        <section className="py-24 border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-[10px] tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>▶ CAREER PATH</p>
            <h2 className="font-bebas mb-14" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--a-text)' }}>WORK TIMELINE</h2>

            <div className="flex flex-col gap-0">
              {timeline.map((t, i) => (
                <div key={i} className="grid md:grid-cols-[200px_1fr] border-t py-10" style={{ borderColor: 'var(--a-border)' }}>
                  <div>
                    <p className="font-mono text-xs tracking-widest mb-1" style={{ color: 'var(--accent)' }}>{t.year}</p>
                  </div>
                  <div>
                    <h3 className="font-bebas text-2xl tracking-wide mb-1" style={{ color: 'var(--a-text)' }}>{t.role}</h3>
                    <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'var(--a-muted)' }}>{t.company}</p>
                    <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--a-muted)' }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-24 border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-[10px] tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>▶ MY TOOLKIT</p>
            <h2 className="font-bebas mb-12" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--b-text)' }}>TOOLS & SOFTWARE</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t} className="font-mono text-xs tracking-widest px-5 py-3 border-2" style={{ borderColor: 'var(--b-border)', color: 'var(--b-text)', backgroundColor: 'var(--b-subtle)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-bebas text-4xl tracking-wide mb-2" style={{ color: 'var(--a-text)' }}>READY TO WORK TOGETHER?</h2>
              <p className="font-mono text-xs" style={{ color: 'var(--a-muted)' }}>Let's turn your product into a premium brand that dominates Amazon.</p>
            </div>
            <div className="flex gap-4">
              <a href="/resume/" className="font-bebas text-base tracking-widest px-7 py-3 border-2 transition-all" style={{ backgroundColor: 'transparent', color: 'var(--a-text)', borderColor: 'var(--a-border)' }}>
                VIEW RESUME
              </a>
              <a href="/contact-me/" className="font-bebas text-base tracking-widest px-7 py-3 border-2 transition-all" style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-inv)', borderColor: 'var(--accent)' }}>
                HIRE ME →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
