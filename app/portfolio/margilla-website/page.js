import MargillaWebsiteCaseStudy from '@/components/MargillaWebsiteCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, shareImage } from '@/data/case-studies/margilla-website'

const title =
  'Margilla Website — SaaS Website Design & Development Case Study | Muhammad Kashif'

const description =
  'Website design and development case study: the website for Margilla, a profit analytics tool for TikTok Shop sellers — real dashboard screens, pricing up front, a live demo and a free profit calculator.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt:
    'Margilla website homepage on desktop',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'SaaS website design',
    'SaaS landing page design and development',
    'React website design and development',
    'TikTok Shop analytics website',
    'startup website designer',
    'Margilla website case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Margilla Website — SaaS Website Design & Development Case Study',
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
    '@type': 'SoftwareApplication',
    name: meta.client,
    url: meta.liveUrl,
    applicationCategory: 'BusinessApplication',
  },
  articleSection: 'Website Design & Development',
  keywords:
    'SaaS website design, React development, TikTok Shop analytics, Margilla',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Margilla — Website', path: meta.path },
])

export default function MargillaWebsitePage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <MargillaWebsiteCaseStudy />
    </>
  )
}
