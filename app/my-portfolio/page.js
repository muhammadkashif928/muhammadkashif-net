import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { createMetadata } from '@/lib/seo'
import { portfolioProjects, projectHref } from '@/data/portfolio'

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

        {/* Projects grid — all projects, newest first */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {portfolioProjects.map((p) => (
              <Link
                key={p.slug}
                href={projectHref(p)}
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
                  <h2 className="font-bebas text-xl tracking-widest text-[#0a0a0a] mb-2">{p.title}</h2>
                  <p className="font-mono text-xs text-[#0a0a0a]/60 leading-relaxed mb-4">{p.desc}</p>
                  {/* Date + Software */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4 pt-3 border-t border-[#0a0a0a]/10">
                    <span className="font-mono text-[9px] text-[#0a0a0a]/40">
                      <span className="text-[#0a0a0a]/25 mr-1">DATE</span>{p.date}
                    </span>
                    <span className="text-[#0a0a0a]/20 text-[9px]">·</span>
                    <div className="flex gap-1.5">
                      {p.software.map(sw => (
                        <span key={sw} className="font-mono text-[8px] tracking-widest px-2 py-0.5 border border-[#0a0a0a]/20 text-[#0a0a0a]/50 bg-[#f5f5f0]">
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#0a0a0a] font-bold">
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
