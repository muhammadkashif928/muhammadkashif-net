'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PortfolioLayout({ title, tag, service, industry, published, coverImage, images, children }) {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f0] min-h-screen">
        {/* Hero */}
        <div className="bg-[#0a0a0a] pt-24">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <Link href="/my-portfolio/" className="font-mono text-xs tracking-widest text-[#f5f5f0]/40 hover:text-[#e8e800] transition-colors mb-6 inline-block">
              ← BACK TO PORTFOLIO
            </Link>
            <span className="block font-mono text-xs tracking-widest text-[#e8e800] mb-4">{tag}</span>
            <h1 className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-none text-[#f5f5f0]">{title}</h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-8 mt-8 border-t border-[#f5f5f0]/10 pt-8">
              {[
                { label: 'SERVICE', value: service },
                { label: 'INDUSTRY', value: industry },
                { label: 'PUBLISHED', value: published },
              ].map(m => (
                <div key={m.label}>
                  <p className="font-mono text-[10px] tracking-widest text-[#f5f5f0]/30">{m.label}</p>
                  <p className="font-mono text-xs text-[#f5f5f0] mt-1">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cover image */}
          {coverImage && (
            <div className="max-w-5xl mx-auto px-6">
              <div className="h-80 md:h-[500px] overflow-hidden border-2 border-[#f5f5f0]/10">
                <img
                  src={coverImage}
                  alt={`${title} portfolio case study cover`}
                  width="1600"
                  height="900"
                  fetchPriority="high"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-[1fr_300px] gap-16">
            <div>
              <div className="prose-custom">{children}</div>

              {/* Additional images */}
              {images && images.length > 0 && (
                <div className="mt-12 grid gap-6">
                  {images.map((img, i) => (
                    <div key={i} className="border-2 border-[#0a0a0a] shadow-brutal overflow-hidden">
                      <img
                        src={img}
                        alt={`${title} portfolio image ${i + 1}`}
                        width="1600"
                        height="1200"
                        loading="lazy"
                        className="w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="border-2 border-[#0a0a0a] p-6 bg-[#0a0a0a] shadow-brutal">
                <h3 className="font-bebas text-xl tracking-widest text-[#e8e800] mb-3">NEED SIMILAR WORK?</h3>
                <p className="font-mono text-xs text-[#f5f5f0]/60 leading-relaxed mb-4">
                  Let's talk about your project and create visuals that drive sales.
                </p>
                <Link
                  href="/contact-me/"
                  className="block font-bebas text-sm tracking-widest text-center px-4 py-3 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[4px_4px_0px_#f5f5f0] transition-all"
                >
                  START A PROJECT →
                </Link>
              </div>

              <div className="border-2 border-[#0a0a0a] p-6 shadow-brutal">
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-4">MORE PROJECTS</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { title: 'Leather Hero — Furniture Salve', slug: 'leather-hero-furniture-salve' },
                    { title: 'Premium A+ Content', slug: 'premium-a-content' },
                    { title: 'AI & Creative Retouching', slug: 'ai-creative-retouching' },
                    { title: 'Brand Identity & Packaging', slug: 'brand-identity-packaging' },
                    { title: 'Leather Items Optimized', slug: 'leather-items-optimized' },
                    { title: 'Closetlux Image Restoration', slug: 'closetlux-image-restoration' },
                    { title: 'Perfume Oil Bottle Retouching', slug: 'perfume-oil-bottle-retouching' },
                    { title: 'Jason Markk Lifestyle Composite', slug: 'jason-markk-lifestyle-composite' },
                    { title: 'Yara Lattafa Amazon Main Image', slug: 'yara-lattafa-amazon-main-image' },
                  ].map(p => (
                    <Link
                      key={p.slug}
                      href={`/blackdsn-portfolio/${p.slug}/`}
                      className="font-mono text-xs text-[#0a0a0a] hover:text-[#0a0a0a]/60 border-b border-[#0a0a0a]/10 pb-2 transition-colors"
                    >
                      {p.title} →
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        .prose-custom h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.05em;
          color: #0a0a0a;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .prose-custom p {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          line-height: 1.9;
          color: rgba(10,10,10,0.7);
          margin-bottom: 1.2rem;
        }
        .prose-custom strong { color: #0a0a0a; font-weight: 700; }
        .prose-custom ul { padding-left: 1.5rem; margin-bottom: 1.2rem; }
        .prose-custom li {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          line-height: 1.9;
          color: rgba(10,10,10,0.7);
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  )
}
