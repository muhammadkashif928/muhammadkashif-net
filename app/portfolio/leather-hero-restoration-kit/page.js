import LeatherHeroRestorationKitCaseStudy from '@/components/LeatherHeroRestorationKitCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, galleryImages, shareImage } from '@/data/case-studies/leather-hero-restoration-kit'

const title =
  'Leather Hero Restoration Kit — Amazon Listing Design Case Study | Muhammad Kashif'

const description =
  'Amazon listing design case study: the Leather Hero Leather Restoration Complete Kit — a six-piece clean, restore and protect kit for black leather. An eleven-image set built on bag and sofa before-and-afters and a three-step routine.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt:
    'Leather Hero Restoration Kit — a black leather sofa shown faded before and restored after',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'leather restoration kit Amazon listing design',
    'leather color restorer infographics',
    'leather furniture before and after images',
    'Amazon infographic design leather care',
    'Amazon main image design kit',
    'leather care Amazon listing designer',
    'Leather Hero restoration kit case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Leather Hero Restoration Kit — Amazon Listing Design Case Study',
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
    'leather restoration kit Amazon listing design, color restorer infographics, leather before and after, Amazon main image, leather care listing',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Leather Hero — Restoration Kit', path: meta.path },
])

export default function LeatherHeroRestorationKitPage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <LeatherHeroRestorationKitCaseStudy />
    </>
  )
}
