import LxShell from '@/components/lx/LxShell'
import BlogExplorer from '@/components/lx/BlogExplorer'
import { PageHero, Facts } from '@/components/lx/Sections'
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
  const posts = [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  const items = posts.map(post => ({ href: `/${post.slug}/`, title: post.title, description: post.excerpt, category: post.category, date: post.date, image: post.image, alt: post.imageAlt }))
  const topics = new Set(posts.map(p => p.category)).size

  return (
    <LxShell>
      <main id="main-content">
        <PageHero
          watermark="JOURNAL"
          crumb={[{ label: 'Blog' }]}
          lines={['A sharper eye.', 'A stronger listing.']}
          lead="Practical guides on product imagery, A+ Content and brand design. Find an answer, explore an idea, or plan your next launch."
          aside={<Facts items={[
            ['Guides', `${posts.length} articles`],
            ['Topics', `${topics} categories`],
            ['Latest', posts[0]?.date || '—'],
            ['Written by', 'Muhammad Kashif'],
          ]} />}
        />
        <section className="section">
          <div className="shell section__in">
            <BlogExplorer items={items} />
          </div>
        </section>
      </main>
    </LxShell>
  )
}
