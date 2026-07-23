import LeatherHeroCaseStudy from '@/components/LeatherHeroCaseStudy'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig, getBreadcrumbJsonLd } from '@/lib/seo'
import { meta, afterImages } from '@/data/case-studies/leather-hero'

const title =
  'Leather Hero Furniture Salve — Amazon Listing Design Case Study | Muhammad Kashif'

const description =
  'Amazon listing design case study: Leather Hero Furniture Salve. A leather and wood furniture care listing running four near-identical images, rebuilt into a full ten-image set led by before-and-after proof, real furniture settings, and a cross-section that shows the salve penetrating the leather.'

export const metadata = createMetadata({
  title,
  description,
  path: meta.path,
  image: afterImages[2].src,
  imageAlt:
    'Leather Hero Furniture Salve applied to a leather sofa with a magnified cut-away showing the salve penetrating the leather grain',
  type: 'article',
  publishedTime: meta.publishedISO,
  modifiedTime: meta.publishedISO,
  keywords: [
    'leather care Amazon listing design',
    'furniture care Amazon listing images',
    'leather conditioner Amazon infographics',
    'Amazon before and after listing images',
    'furniture salve Amazon listing',
    'wood care product listing design',
    'Amazon listing image strategy leather',
    'leather sofa care product images',
    'Amazon A+ content leather care brand',
    'Leather Hero case study',
  ],
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Leather Hero Furniture Salve — Amazon Listing Design Case Study',
  description,
  image: afterImages.slice(0, 4).map((img) => absoluteUrl(img.src)),
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
    name: 'Leather Hero Furniture Salve, 5oz — 3-Piece Kit',
    category: meta.category,
    brand: { '@type': 'Brand', name: meta.client },
  },
  articleSection: 'Amazon Listing Design',
  keywords:
    'leather care Amazon listing design, furniture care listing images, before and after product images, Amazon infographics, leather conditioner listing',
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/my-portfolio/' },
  { name: 'Leather Hero — Furniture Salve', path: meta.path },
])

export default function LeatherHeroFurnitureSalvePage() {
  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <LeatherHeroCaseStudy />
    </>
  )
}
