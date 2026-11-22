import LeatherHeroCareKitCarouselCaseStudy from '@/components/LeatherHeroCareKitCarouselCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, slides, shareImage } from '@/data/case-studies/leather-hero-care-kit-carousel'

const title =
  'Leather Hero Leather Care Kit — Lifestyle Carousel Case Study | Muhammad Kashif'

const description =
  'Lifestyle carousel case study: Leather Hero Premium Leather Care Kit — a cleaner and conditioner told as a seven-slide 9:16 carousel on one car seat, from the promise and the kit through four steps to a split-seat before-and-after.'

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
    'leather care lifestyle carousel',
    'product carousel design',
    'leather cleaner and conditioner images',
    'how-to steps product images',
    'leather care before and after images',
    'leather care product image designer',
    'Leather Hero care kit case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Leather Hero Leather Care Kit — Lifestyle Carousel Case Study',
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
    'leather care lifestyle carousel, product carousel, leather cleaner and conditioner, how-to step images, before and after',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Leather Hero — Care Kit Carousel', path: meta.path },
])

export default function LeatherHeroCareKitCarouselPage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <LeatherHeroCareKitCarouselCaseStudy />
    </>
  )
}
