import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BlogLayout({ children, title, category, date, image, tags }) {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f0] min-h-screen">
        {/* Hero */}
        <div className="bg-[#0a0a0a] pt-24 pb-0">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/category/amazon-fba/" className="font-mono text-xs tracking-widest text-[#e8e800] hover:underline">
                {category}
              </Link>
            </div>
            <h1 className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-tight text-[#f5f5f0]">
              {title}
            </h1>
            <p className="font-mono text-xs tracking-widest text-[#f5f5f0]/40 mt-4">{date}</p>
          </div>
          {image && (
            <div className="max-w-4xl mx-auto px-6">
              <div className="h-72 md:h-96 overflow-hidden border-2 border-[#f5f5f0]/10">
                <img src={image} alt={title} className="w-full h-full object-cover grayscale contrast-110" />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-[1fr_280px] gap-12">
            {/* Article */}
            <article className="prose-custom">
              {children}
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="border-2 border-[#0a0a0a] p-6 shadow-brutal">
                  <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-4">TAGS</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] tracking-widest bg-[#0a0a0a] text-[#f5f5f0] px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="border-2 border-[#0a0a0a] p-6 bg-[#0a0a0a] shadow-brutal">
                <h3 className="font-bebas text-xl tracking-widest text-[#e8e800] mb-3">NEED A+ CONTENT?</h3>
                <p className="font-mono text-xs text-[#f5f5f0]/60 leading-relaxed mb-4">
                  Let me upgrade your Amazon listing with premium visuals that drive sales.
                </p>
                <Link
                  href="/contact-me/"
                  className="block font-bebas text-sm tracking-widest text-center px-4 py-3 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[4px_4px_0px_#f5f5f0] transition-all"
                >
                  HIRE ME →
                </Link>
              </div>

              {/* Recent posts */}
              <div className="border-2 border-[#0a0a0a] p-6 shadow-brutal">
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-4">MORE POSTS</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { title: 'What is A+ content?', slug: 'what-is-a-content' },
                    { title: 'What is product infographics?', slug: 'what-is-product-infographics' },
                    { title: 'Why white background matters', slug: 'why-white-background-is-so-important-for-main-image-of-product' },
                    { title: 'What is website?', slug: 'what-is-website' },
                  ].map(p => (
                    <Link
                      key={p.slug}
                      href={`/${p.slug}/`}
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
        .prose-custom strong {
          color: #0a0a0a;
          font-weight: 700;
        }
        .prose-custom ul, .prose-custom ol {
          padding-left: 1.5rem;
          margin-bottom: 1.2rem;
        }
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
