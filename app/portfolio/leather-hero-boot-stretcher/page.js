import LeatherHeroBootStretcherCaseStudy from '@/components/LeatherHeroBootStretcherCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, galleryImages, beforeAfter } from '@/data/case-studies/leather-hero-boot-stretcher'

const title =
  'Leather Hero Boot Stretcher — Amazon Listing Design Case Study | Muhammad Kashif'

const description =
  'Amazon listing design case study: the Leather Hero heavy-duty calf & shaft boot stretcher — the brand’s third product. A nine-image infographic set built around mechanism, fit and a tooled cowboy boot shown before and after stretching.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: beforeAfter.src,
  imageAlt:
    'Leather Hero Boot Stretcher — a tooled cowboy boot shaft shown before and after stretching',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'boot stretcher Amazon listing design',
    'calf and shaft boot stretcher infographics',
    'cowboy boot stretcher listing images',
    'Amazon infographic design footwear tools',
    'boot stretcher before and after images',
    'Amazon main image design boot stretcher',
    'footwear accessories Amazon listing designer',
    'western boot care Amazon infographics',
    'Leather Hero boot stretcher case study',
    'Amazon listing designer footwear care',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Leather Hero Boot Stretcher — Amazon Listing Design Case Study',
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
    name: 'Leather Hero Heavy-Duty Boot Stretcher',
    category: meta.category,
    brand: { '@type': 'Brand', name: meta.client },
  },
  articleSection: 'Amazon Listing Design',
  keywords:
    'boot stretcher Amazon listing design, calf and shaft stretcher infographics, cowboy boot before and after, Amazon main image, footwear care listing',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Leather Hero — Boot Stretcher', path: meta.path },
])

export default function LeatherHeroBootStretcherPage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <LeatherHeroBootStretcherCaseStudy />
    </>
  )
}
