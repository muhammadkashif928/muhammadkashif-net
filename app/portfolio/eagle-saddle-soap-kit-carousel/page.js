import EagleSaddleSoapKitCarouselCaseStudy from '@/components/EagleSaddleSoapKitCarouselCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, slides, shareImage } from '@/data/case-studies/eagle-saddle-soap-kit-carousel'

const title =
  'Eagle Saddle Soap Kit — Lifestyle Carousel Case Study'

const description =
  'Lifestyle carousel case study: Eagle Shoe Care 3-Piece Saddle Soap Kit — a five-slide 9:16 carousel on one work boot, from the before-and-after through three steps to the clean pair.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt: shareImage.alt,
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'shoe care lifestyle carousel',
    'product carousel design',
    'saddle soap product images',
    'how-to steps product images',
    'boot cleaning before and after images',
    'shoe care product image designer',
    'Eagle Shoe Care saddle soap case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eagle Saddle Soap Kit — Lifestyle Carousel Case Study',
  description,
  image: [shareImage, ...slides.slice(0, 3)].map((img) => absoluteUrl(img.src)),
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
  articleSection: 'Lifestyle Carousel Design',
  keywords:
    'shoe care lifestyle carousel, product carousel, saddle soap, how-to step images, before and after',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Eagle Shoe Care — Saddle Soap Kit Carousel', path: meta.path },
])

export default function EagleSaddleSoapKitCarouselPage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <EagleSaddleSoapKitCarouselCaseStudy />
    </>
  )
}
