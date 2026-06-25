import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Services | Muhammad Kashif — Amazon Brand Designer',
  description: 'Professional Amazon design services: A+ content, product photography, competitor analysis, main image strategy, brand identity & AI-powered generative design.',
}

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We discuss your product, target market, competitors, and brand goals. I audit your current listing and identify the biggest opportunities for visual improvement.' },
  { step: '02', title: 'Competitor Analysis', desc: 'I analyze your top 10 competitors in depth — their images, A+ content, pricing, and reviews — to find visual gaps I can exploit for your listing.' },
  { step: '03', title: 'Strategy & Concepts', desc: 'Based on the analysis, I develop a visual strategy and initial concepts. You review and approve the direction before I move to full production.' },
  { step: '04', title: 'Design & Production', desc: 'I produce all deliverables at the highest quality using Photoshop, Illustrator, Blender, and AI tools. Every pixel is intentional and Amazon-compliant.' },
  { step: '05', title: 'Revisions & Delivery', desc: 'You receive the complete package with revision rounds. Final files are delivered in all required formats, ready to upload directly to Amazon Seller Central.' },
]

const faq = [
  { q: 'How long does a typical project take?', a: 'A full listing optimization (main image + 6 side images + A+ content) takes 5–7 business days. Rush delivery is available.' },
  { q: 'Do you follow Amazon image guidelines?', a: 'Yes. Every deliverable is 100% Amazon-compliant. Main images have pure white backgrounds, correct pixel dimensions, and meet all Amazon TOS requirements.' },
  { q: 'Can I request revisions?', a: 'Absolutely. All packages include revision rounds. I work until you are completely satisfied with the result.' },
  { q: 'Do you work with new sellers?', a: 'Yes — whether you are launching your first product or scaling an established brand, I can create visuals that compete at any level.' },
  { q: 'What files do you deliver?', a: 'High-resolution JPG/PNG files at 2000×2000px minimum. Layered PSDs and vector files are available on request.' },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="WHAT I DELIVER"
          title={<>MY<br />SERVICES</>}
          subtitle="Every service is built around one goal: making your Amazon listing more profitable than your competitors'."
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
