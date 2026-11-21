import EagleShoeCareShoeCreamCaseStudy from '@/components/EagleShoeCareShoeCreamCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, galleryImages, shareImage } from '@/data/case-studies/eagle-shoe-care-shoe-cream'

const title =
  'Eagle Shoe Care Premium Shoe Cream — Amazon Listing Design Case Study | Muhammad Kashif'

const description =
  'Amazon listing design case study: Eagle Shoe Care Premium Shoe Cream — a black carnauba shoe cream with brush and buffing cloth. A ten-image set built on a scuffed-boot before-and-after, the bundle and a buff-to-shine routine, plus A+ Content for desktop and mobile.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt:
    'Eagle Premium Shoe Cream — a scuffed black boot beside the same boot restored to a shine',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'shoe cream Amazon listing design',
    'shoe polish infographics',
    'shoe care before and after images',
    'Amazon infographic design shoe care',
    'Amazon main image design shoe cream',
    'shoe care Amazon listing designer',
    'shoe care A+ Content design',
    'Eagle Shoe Care shoe cream case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eagle Shoe Care Premium Shoe Cream — Amazon Listing Design Case Study',
  description,
  image: galleryImages.slice(0, 4).map((img) => absoluteUrl(img.src)),
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
    '@type': 'Product',
    name: meta.product,
    category: meta.category,
    brand: { '@type': 'Brand', name: meta.client },
  },
  articleSection: 'Amazon Listing Design',
  keywords:
    'shoe cream Amazon listing design, shoe polish infographics, shoe care before and after, Amazon main image, shoe care listing',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Eagle Shoe Care — Shoe Cream', path: meta.path },
])

export default function EagleShoeCareShoeCreamPage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <EagleShoeCareShoeCreamCaseStudy />
    </>
  )
}
