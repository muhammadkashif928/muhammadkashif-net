import LeatherHeroPurseCaseStudy from '@/components/LeatherHeroPurseCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, galleryImages, beforeAfter } from '@/data/case-studies/leather-hero-purse'

const title =
  'Leather Hero Purse Care Kit — Amazon Listing Design Case Study | Muhammad Kashif'

const description =
  'Amazon listing design case study: the Leather Hero Purse Cleaner & Conditioner Kit — the brand’s second product. An eight-image set built around main-image craft and a leather bag before-and-after that proves the kit restores and extends leather life.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: beforeAfter.src,
  imageAlt:
    'Leather Hero Purse Care Kit — an aged leather crossbody bag shown before and after cleaning and conditioning',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'leather handbag care Amazon listing design',
    'purse cleaner conditioner Amazon listing',
    'leather bag before and after listing images',
    'Amazon main image design leather care',
    'handbag care kit Amazon infographics',
    'leather purse conditioner listing design',
    'Amazon listing image strategy handbags',
    'leather care brand Amazon A+ content',
    'Leather Hero purse kit case study',
    'Amazon listing designer leather goods',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Leather Hero Purse Care Kit — Amazon Listing Design Case Study',
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
      url: absoluteUrl('/icon.svg'),
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': absoluteUrl(meta.path),
  },
  about: {
    '@type': 'Product',
    name: 'Leather Hero Purse Cleaner & Conditioner Kit',
    category: meta.category,
    brand: { '@type': 'Brand', name: meta.client },
  },
  articleSection: 'Amazon Listing Design',
  keywords:
    'leather handbag care Amazon listing design, purse cleaner conditioner listing images, leather bag before and after, Amazon main image craft, leather care listing',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Leather Hero — Purse Care Kit', path: meta.path },
])

export default function LeatherHeroPurseCareKitPage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <LeatherHeroPurseCaseStudy />
    </>
  )
}
