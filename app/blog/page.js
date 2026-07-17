import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Amazon Design Blog | A+ Content, Product Images & Listing SEO',
  description: 'Articles on Amazon A+ Content, product infographics, brand strategy, product photography, AI lifestyle images, and listing SEO by Muhammad Kashif.',
  path: '/blog/',
  image: '/images/blog-amazon-a-plus-strategy.jpg',
  keywords: ['Amazon design blog', 'Amazon A+ Content blog', 'Amazon listing SEO articles'],
})

export default function Blog() {
  // Newest posts first (by publish date)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  )

  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f0] min-h-screen">
        {/* Header */}
        <div className="bg-[#0a0a0a] pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-xs tracking-[0.3em] text-[#e8e800] mb-2">▶ INSIGHTS</p>
            <h1 className="font-bebas text-[clamp(3.5rem,9vw,7rem)] leading-none text-[#f5f5f0]">
              BLOG
            </h1>
            <p className="font-mono text-sm text-[#f5f5f0]/50 mt-6 max-w-lg">
              Strategy, design, and insider knowledge for Amazon sellers who want to win.
            </p>
          </div>
        </div>

        {/* Posts grid */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}/`}
                className="group border-2 border-[#0a0a0a] bg-white shadow-brutal hover:shadow-brutal-xl hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all overflow-hidden"
              >
                {/* Image */}
                {post.image && (
                  <div className="h-48 bg-[#0a0a0a]/10 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      width="1600"
                      height="900"
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 border-t-2 border-[#0a0a0a]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] tracking-widest bg-[#e8e800] text-[#0a0a0a] px-2 py-1 border border-[#0a0a0a]">
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px] text-[#0a0a0a]/40">{post.date}</span>
                  </div>

                  <h2 className="font-bebas text-xl tracking-widest text-[#0a0a0a] mb-3 leading-tight">
                    {post.title}
                  </h2>

                  <p className="font-mono text-xs text-[#0a0a0a]/60 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-2 font-mono text-xs tracking-widest text-[#0a0a0a] font-bold">
                    READ ARTICLE
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
