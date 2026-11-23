import DesignerTrendsIncWebsiteCaseStudy from '@/components/DesignerTrendsIncWebsiteCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, shareImage } from '@/data/case-studies/designer-trends-inc-website'

const title =
  'Designer Trends Inc. — Custom Company Website Case Study'

const description =
  'Custom company website for Designer Trends Inc., the group behind Eagle, Leather Hero, Fiammé and ToeArmor — designed and built in Next.js.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt:
    'Designer Trends Inc. website homepage on desktop',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'custom company website design',
    'corporate website design and development',
    'Next.js company website',
    'B2B wholesale website design',
    'footwear brand portfolio website',
    'Designer Trends Inc website case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Designer Trends Inc. — Custom Company Website Case Study',
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
    '@type': 'Organization',
    name: meta.client,
  },
  articleSection: 'Website Design & Development',
  keywords:
    'website design, Next.js development, company website, B2B wholesale, Designer Trends Inc.',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Designer Trends Inc. — Website', path: meta.path },
])

export default function DesignerTrendsIncWebsitePage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <DesignerTrendsIncWebsiteCaseStudy />
    </>
  )
}
