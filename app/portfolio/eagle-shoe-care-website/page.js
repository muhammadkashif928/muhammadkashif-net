import EagleShoeCareWebsiteCaseStudy from '@/components/EagleShoeCareWebsiteCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, shareImage } from '@/data/case-studies/eagle-shoe-care-website'

const title =
  'Eagle Shoe Care — Custom Shopify Store + B2B Wholesale Case Study | Muhammad Kashif'

const description =
  'Shopify design and development case study: a fully custom Shopify theme for Eagle Shoe Care — a retail store with a product finder and Buy on Amazon buttons, plus a built-in B2B wholesale application and sign-in.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt:
    'Eagle Shoe Care Shopify store homepage on desktop',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'custom Shopify theme development',
    'Shopify B2B wholesale store',
    'Shopify store design for Amazon brands',
    'shoe care brand website',
    'Shopify wholesale application form',
    'Eagle Shoe Care website case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eagle Shoe Care — Custom Shopify Store + B2B Wholesale Case Study',
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
  articleSection: 'Shopify Store Design & Development',
  keywords:
    'Shopify store design, custom Shopify theme, B2B wholesale, shoe care, leather care, Eagle Shoe Care',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Eagle Shoe Care — Shopify Store', path: meta.path },
])

export default function EagleShoeCareWebsitePage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <EagleShoeCareWebsiteCaseStudy />
    </>
  )
}
