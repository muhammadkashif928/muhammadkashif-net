import VentaraOneWebsiteCaseStudy from '@/components/VentaraOneWebsiteCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, shareImage } from '@/data/case-studies/ventara-one-website'

const title = 'Ventara ONE — Custom Online Store Case Study'

const description =
  'Custom-coded online store for Ventara ONE: groceries and everyday essentials shipped from Chicago, with 13 departments, 165 products and Stripe checkout.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt: 'Ventara Mart online store homepage on desktop',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'custom online store design',
    'ecommerce website design and development',
    'grocery store website design',
    'Stripe checkout website',
    'custom coded ecommerce store',
    'Ventara ONE website case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
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
    'website design, ecommerce development, online store, Stripe checkout, Ventara ONE',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Ventara ONE — Online Store', path: meta.path },
])

export default function VentaraOneWebsitePage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <VentaraOneWebsiteCaseStudy />
    </>
  )
}
