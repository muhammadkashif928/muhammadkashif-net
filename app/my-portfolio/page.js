import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Amazon Design Portfolio — Case Studies | Muhammad Kashif',
  description: 'Portfolio and case studies by Muhammad Kashif: Amazon A+ Content, product image optimization, brand identity, packaging design, AI retouching, and leather product photography — all built to convert browsers into buyers.',
  path: '/my-portfolio/',
  image: '/images/portfolio-1.webp',
  imageAlt: 'Amazon design portfolio — A+ Content, product photography, and brand identity case studies',
  keywords: [
    'Amazon design portfolio',
    'A+ Content portfolio case study',
    'Amazon listing design case studies',
    'leather product image optimization portfolio',
    'brand identity packaging portfolio',
    'AI product retouching portfolio',
  ],
})

const projects = [
  {
    slug: 'premium-a-content',
    tag: 'A+ CONTENT',
    title: 'Premium A+ Content',
    desc: 'Full Amazon listing optimization including side images, A+ content modules, and conversion-focused layout strategy.',
    img: '/images/portfolio-1.webp',
  },
  {
    slug: 'ai-creative-retouching',
    tag: 'RETOUCHING',
    title: 'AI & Creative Retouching',
    desc: '3D product visualization created using Blender & Photoshop. Photorealistic rendering with lifestyle integration.',
    img: '/images/portfolio-2.jpg',
  },
  {
    slug: 'brand-identity-packaging',
    tag: 'BRAND IDENTITY',
    title: 'Brand Identity & Packaging',
    desc: 'End-to-end packaging design and brand identity system for a private label brand entering a competitive market.',
    img: '/images/portfolio-3.webp',
  },
  {
    slug: 'leather-items-optimized',
    tag: 'IMAGE OPTIMIZATION',
    title: 'Leather Items Optimized',
    desc: '12 leather products — jackets, bags & biker costumes — transformed from raw photos into 8K ultra-high-definition e-commerce images with before & after showcase.',
    img: encodeURI('/portfolio/Leather Products/Product 3 (Leather Jacket)/Leather Jacket img 1.png'),
  },
]

export default function MyPortfolio() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f0] min-h-screen">
        {/* Header */}
        <div className="bg-[#0a0a0a] pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-xs tracking-[0.3em] text-[#e8e800] mb-2">▶ CASE STUDIES</p>
            <h1 className="font-bebas text-[clamp(3.5rem,9vw,7rem)] leading-none text-[#f5f5f0]">
              MY<br />PORTFOLIO
            </h1>
            <p className="font-mono text-sm text-[#f5f5f0]/50 mt-6 max-w-lg">
              High-converting visual strategies for Amazon sellers — from A+ content to full brand identity systems.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/blackdsn-portfolio/${p.slug}/`}
                className="group border-2 border-[#0a0a0a] bg-white shadow-brutal hover:shadow-brutal-xl hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all overflow-hidden"
              >
                <div className="h-60 bg-[#0a0a0a]/10 overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    width="1200"
                    height="900"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[10px] tracking-widest bg-[#e8e800] text-[#0a0a0a] px-2 py-1 border border-[#0a0a0a]">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 border-t-2 border-[#0a0a0a]">
                  <h2 className="font-bebas text-xl tracking-widest text-[#0a0a0a] mb-3">{p.title}</h2>
                  <p className="font-mono text-xs text-[#0a0a0a]/60 leading-relaxed">{p.desc}</p>
                  <div className="mt-5 flex items-center gap-2 font-mono text-xs tracking-widest text-[#0a0a0a] font-bold">
                    VIEW CASE
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
