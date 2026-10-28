import DisposableFootSocksCaseStudy from '@/components/DisposableFootSocksCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, galleryImages, shareImage } from '@/data/case-studies/disposable-foot-socks'

const title =
  'Disposable Foot Socks — Amazon Listing Design Case Study | Muhammad Kashif'

const description =
  'Amazon listing design case study: a 144-count box of disposable try-on foot socks. A full ten-image listing set — three main-image candidates plus infographics for stretch, hygiene, breathability, uses, fit and value.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt:
    'A hand pulling a sheer sock from a red 144-count Foot Socks dispenser box',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'disposable foot socks Amazon listing design',
    'try-on socks Amazon infographics',
    'foot socks listing images',
    'Amazon infographic design footwear accessories',
    'Amazon main image design socks',
    'disposable socks product photography Amazon',
    'footwear accessories Amazon listing designer',
    'Amazon listing designer foot care',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Disposable Foot Socks — Amazon Listing Design Case Study',
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
  },
  articleSection: 'Amazon Listing Design',
  keywords:
    'disposable foot socks Amazon listing design, try-on socks infographics, Amazon main image, footwear accessories listing',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Disposable Foot Socks', path: meta.path },
])

export default function DisposableFootSocksPage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <DisposableFootSocksCaseStudy />
    </>
  )
}
