import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ContentExplorer from '@/components/ContentExplorer'
import ProjectCTA from '@/components/ProjectCTA'
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
  const items = [...blogPosts].sort((a,b) => new Date(b.publishedAt) - new Date(a.publishedAt)).map(post => ({ href: `/${post.slug}/`, title: post.title, description: post.excerpt, category: post.category, date: post.date, image: post.image, alt: post.imageAlt }))
  return <><Navbar /><main id="main-content" className="interior-page"><PageHeader label="THE RESOURCE LIBRARY" title={<>A sharper eye.<br />A stronger listing.</>} subtitle="Practical guides on product imagery, A+ Content and brand design. Find an answer, explore an idea, or plan your next launch." image="/images/design-studio-v1.webp" imageAlt="Creative workspace with product design layouts" imageCaption="AI-generated studio concept" /><ContentExplorer items={items} kind="articles" /><ProjectCTA title="Put the ideas to work for your brand." /></main><Footer /></>
}
