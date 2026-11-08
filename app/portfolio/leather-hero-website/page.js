import LeatherHeroWebsiteCaseStudy from '@/components/LeatherHeroWebsiteCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, shareImage } from '@/data/case-studies/leather-hero-website'

const title =
  'Leather Hero Website — Custom Next.js Brand Site Case Study | Muhammad Kashif'

const description =
  'Website design and development case study: a fully custom 89-page Next.js site for Leather Hero, a leather-care brand that sells on Amazon — product pages, shop, categories, search, a 48-post blog and tracked Buy at Amazon buttons.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt:
    'Leather Hero website homepage on desktop',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'custom website for Amazon brand',
    'Next.js website design and development',
    'leather care brand website',
    'Amazon seller brand website designer',
    'Amazon Attribution website',
    'Leather Hero website case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Leather Hero Website — Custom Next.js Brand Site Case Study',
  description,
  image: [absoluteUrl(shareImage.src)],
  datePublished: meta.publishedISO,
  dateModified: meta.publishedISO,
  author: {
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.author,
  },
  publisher: {
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#service`,
    name: siteConfig.name,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/brand/mk-symbol-v2.svg'),
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': absoluteUrl(meta.path),
  },
  about: {
    '@type': 'WebSite',
    name: meta.client,
    url: meta.liveUrl,
  },
  articleSection: 'Website Design & Development',
  keywords:
    'website design, Next.js development, brand website for Amazon sellers, leather care, Leather Hero',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Leather Hero — Website', path: meta.path },
])

export default function LeatherHeroWebsitePage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <LeatherHeroWebsiteCaseStudy />
    </>
  )
}
