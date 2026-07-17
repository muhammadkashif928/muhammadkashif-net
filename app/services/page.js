import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import PageHeader from '@/components/PageHeader'
import JsonLd from '@/components/JsonLd'
import { createMetadata, getBreadcrumbJsonLd, getFaqJsonLd } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Amazon Design Services — A+ Content, Infographics, Brand Identity & Image Optimization',
  description: 'Muhammad Kashif offers professional Amazon brand design services: A+ Content design, product infographics, main image optimization, brand identity, packaging design, AI lifestyle photography, and leather product image retouching. Serving private label sellers worldwide from Kuching, Malaysia.',
  path: '/services/',
  keywords: [
    'Amazon design services',
    'A+ Content design service',
    'Amazon product infographic service',
    'Amazon brand design Malaysia',
    'hire Amazon A+ Content designer',
    'Amazon listing optimization service',
    'leather product image retouching service',
    'private label packaging design service',
    'AI product photography service',
    'Amazon main image optimization service',
  ],
})

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We discuss your product, target market, competitors, and brand goals. I audit your current listing and identify the biggest opportunities for visual improvement.' },
  { step: '02', title: 'Competitor Analysis', desc: 'I analyze your top 10 competitors in depth — their images, A+ content, pricing, and reviews — to find visual gaps I can exploit for your listing.' },
  { step: '03', title: 'Strategy & Concepts', desc: 'Based on the analysis, I develop a visual strategy and initial concepts. You review and approve the direction before I move to full production.' },
  { step: '04', title: 'Design & Production', desc: 'I produce all deliverables at the highest quality using Photoshop, Illustrator, Blender, and AI tools. Every pixel is intentional and Amazon-compliant.' },
  { step: '05', title: 'Revisions & Delivery', desc: 'You receive the complete package with revision rounds. Final files are delivered in all required formats, ready to upload directly to Amazon Seller Central.' },
]

const faq = [
  { q: 'Who is Muhammad Kashif and what does he do?', a: 'Muhammad Kashif is an Amazon Brand Designer and A+ Content Specialist based in Kuching, Malaysia with 8+ years of experience. He helps Amazon private label sellers worldwide create high-converting visual content — including A+ Content, product infographics, listing images, brand identity, packaging design, and AI-powered product photography. He has completed 200+ projects for global clients across the US, UK, Canada, and beyond.' },
  { q: 'What Amazon design services does Muhammad Kashif offer?', a: 'Services include: (1) Amazon A+ Content design, (2) product infographics and side images, (3) main image optimization with white background, (4) private label brand identity and packaging, (5) AI product photography and 3D visualization, and (6) leather/apparel product image optimization with before-and-after 8K quality output.' },
  { q: 'How can I hire Muhammad Kashif for my Amazon listing?', a: 'You can contact Muhammad Kashif via email at info@muhammadkashif.net, WhatsApp at +60 179152084, through the contact form at muhammadkashif.net/contact-me/, or via his Upwork profile. He responds within 24 hours.' },
  { q: 'How long does a typical project take?', a: 'A full listing optimization (main image + 6 side images + A+ content) takes 5–7 business days. Individual infographics or image edits can be turned around in 24–48 hours. Rush delivery is available.' },
  { q: 'What is Amazon A+ Content and why do I need it?', a: 'Amazon A+ Content (formerly Enhanced Brand Content / EBC) replaces the standard product description with rich visual modules — brand story, feature highlights, comparison charts, and lifestyle imagery. Studies show professionally designed A+ Content increases conversion rates by 5–10% and reduces return rates by communicating product features more clearly. It is available to all brand-registered Amazon sellers.' },
  { q: 'Do you follow Amazon image guidelines?', a: 'Yes. Every deliverable is 100% Amazon-compliant. Main images have pure white backgrounds (RGB 255, 255, 255), correct pixel dimensions (minimum 1000×1000px, recommended 2000×2000px), and meet all Amazon Terms of Service requirements for each image slot.' },
  { q: 'Can I request revisions?', a: 'Absolutely. All packages include revision rounds. I work until you are completely satisfied with the final result — your satisfaction is the measure of project completion.' },
  { q: 'Do you work with new Amazon sellers?', a: 'Yes — whether you are launching your first product or scaling an established brand with 100+ ASINs, I create visuals that compete at any level of the Amazon marketplace.' },
  { q: 'What files do you deliver?', a: 'High-resolution JPG/PNG files at 2000×2000px minimum (2000×800px for A+ Content). Layered Photoshop PSDs and vector AI/EPS files are available on request for brands that want to make future edits in-house.' },
  { q: 'What is the best way to optimize leather product images for Amazon?', a: 'Leather product images need to show texture, grain, stitching detail, and hardware clearly — these tactile qualities are what buyers look for. The best results combine background removal to a pure white background, AI upscaling to 8K resolution, manual retouching for leather texture enhancement, and controlled lighting simulation. Muhammad Kashif specializes in this exact process, as showcased in his Leather Items Optimized portfolio.' },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          getFaqJsonLd(faq),
          getBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
          ]),
        ]}
      />
      <main>
        <PageHeader
          label="WHAT I DELIVER"
          title={<>MY<br />SERVICES</>}
          subtitle="Hire a professional Amazon listing designer for US, UK, and Canada private label brands. Every service is built around one goal: making your Amazon listing more profitable than your competitors'."
        />

        <Services />

        {/* Process */}
        <section className="py-24 border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-[10px] tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>▶ HOW IT WORKS</p>
            <h2 className="font-bebas mb-14" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--b-text)' }}>MY PROCESS</h2>
            <div className="flex flex-col gap-0">
              {process.map((p, i) => (
                <div key={i} className="grid md:grid-cols-[120px_1fr] border-t py-10" style={{ borderColor: 'var(--b-border)' }}>
                  <div className="font-bebas text-5xl leading-none" style={{ color: 'var(--b-subtle)' }}>{p.step}</div>
                  <div>
                    <h3 className="font-bebas text-2xl tracking-wide mb-3" style={{ color: 'var(--b-text)' }}>{p.title}</h3>
                    <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--b-muted)' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-[10px] tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>▶ FREQUENTLY ASKED</p>
            <h2 className="font-bebas mb-14" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--a-text)' }}>FAQ</h2>
            <div className="flex flex-col gap-0 max-w-3xl">
              {faq.map((item, i) => (
                <div key={i} className="border-t py-8" style={{ borderColor: 'var(--a-border)' }}>
                  <h3 className="font-bebas text-xl tracking-wide mb-3" style={{ color: 'var(--a-text)' }}>{item.q}</h3>
                  <p className="font-mono text-sm leading-relaxed" style={{ color: 'var(--a-muted)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
