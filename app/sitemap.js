import { blogPosts } from '@/data/blog'

const baseUrl = 'https://muhammadkashif.net'
const siteUpdated = '2026-07-17T10:00:00+08:00'

function route(path, changeFrequency, priority, lastModified = siteUpdated) {
  return {
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }
}

export default function sitemap() {
  const coreRoutes = [
    route('/', 'monthly', 1),
    route('/about/', 'monthly', 0.9),
    route('/services/', 'monthly', 0.95),
    route('/my-portfolio/', 'monthly', 0.9),
    route('/blog/', 'weekly', 0.9),
    route('/resume/', 'monthly', 0.75),
    route('/contact-me/', 'yearly', 0.85),
  ]

  const portfolioRoutes = [
    route('/blackdsn-portfolio/premium-a-content/', 'yearly', 0.75),
    route('/blackdsn-portfolio/ai-creative-retouching/', 'yearly', 0.75),
    route('/blackdsn-portfolio/brand-identity-packaging/', 'yearly', 0.75),
    route('/blackdsn-portfolio/leather-items-optimized/', 'monthly', 0.8),
    route('/blackdsn-portfolio/closetlux-image-restoration/', 'monthly', 0.8),
    route('/blackdsn-portfolio/perfume-oil-bottle-retouching/', 'monthly', 0.8),
    route('/blackdsn-portfolio/jason-markk-lifestyle-composite/', 'monthly', 0.8),
    route('/blackdsn-portfolio/yara-lattafa-amazon-main-image/', 'monthly', 0.8),
  ]

  const blogRoutes = blogPosts.map((post) =>
    route(
      `/${post.slug}/`,
      post.publishedAt?.startsWith('2026') ? 'monthly' : 'yearly',
      post.publishedAt?.startsWith('2026') ? 0.8 : 0.7,
      post.updatedAt || post.publishedAt || siteUpdated
    )
  )

  const legalRoutes = [
    route('/privacy-policy/', 'yearly', 0.35),
    route('/terms/', 'yearly', 0.35),
    route('/disclaimer/', 'yearly', 0.35),
  ]

  return [...coreRoutes, ...portfolioRoutes, ...blogRoutes, ...legalRoutes]
}
