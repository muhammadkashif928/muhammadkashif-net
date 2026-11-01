import FiammeBrandStoreCaseStudy from '@/components/FiammeBrandStoreCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, modules, shareImage } from '@/data/case-studies/fiamme-brand-store'

const title =
  'Fiamme Amazon Brand Store — Storefront Design Case Study | Muhammad Kashif'

const description =
  'Amazon Brand Store design case study: Fiamme Luxury Leather Care — a seven-module storefront for a three-piece suede and nubuck kit that sells the brand first, then the kit, the routine and every use.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt:
    'Fiamme Suede & Nubuck Kit — the hero module of the Fiamme Amazon Brand Store',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'Amazon Brand Store design',
    'Amazon storefront design leather care',
    'Amazon store page designer',
    'suede and nubuck kit Amazon store',
    'leather care brand store design',
    'Fiamme brand store case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fiamme Amazon Brand Store — Storefront Design Case Study',
  description,
  image: modules.slice(0, 4).map((img) => absoluteUrl(img.src)),
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
  articleSection: 'Amazon Brand Store Design',
  keywords:
    'Amazon Brand Store design, Amazon storefront, leather care store page, suede and nubuck kit, Fiamme',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Fiamme — Brand Store', path: meta.path },
])

export default function FiammeBrandStorePage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <FiammeBrandStoreCaseStudy />
    </>
  )
}
