import PakTeleNetWebsiteCaseStudy from '@/components/PakTeleNetWebsiteCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, shareImage } from '@/data/case-studies/pak-tele-net-website'

const title =
  'Pak Tele Net Website — Bilingual Fiber Internet Site Case Study | Muhammad Kashif'

const description =
  'Website design and development case study: a bilingual English and Urdu website for Pak Tele Net, a fiber internet provider in Burewala — speed packages, a coverage map, WhatsApp-first contact and phone bill payment.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: shareImage.src,
  imageAlt:
    'Pak Tele Net website homepage on desktop',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'internet service provider website design',
    'bilingual English Urdu website',
    'local business website design Pakistan',
    'React website design and development',
    'WhatsApp website for local business',
    'Pak Tele Net website case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pak Tele Net Website — Bilingual Fiber Internet Site Case Study',
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
    'website design, React development, bilingual website, internet service provider, Pak Tele Net',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Pak Tele Net — Website', path: meta.path },
])

export default function PakTeleNetWebsitePage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <PakTeleNetWebsiteCaseStudy />
    </>
  )
}
