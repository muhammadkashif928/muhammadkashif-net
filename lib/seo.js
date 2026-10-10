import { services } from '@/data/services'
import { servicePresentation } from '@/data/service-presentation'
import { shopifyService, shopifyPackages } from '@/data/shopify'

export const siteConfig = {
  name: 'Muhammad Kashif',
  title: 'Amazon Listing & A+ Content Designer | Muhammad Kashif',
  description:
    'Amazon listing design, product infographics, A+ Content and Brand Stores for every product category. Work with Muhammad Kashif, based in Kuching, serving worldwide.',
  url: 'https://muhammadkashif.net',
  locale: 'en_US',
  author: 'Muhammad Kashif',
  email: 'info@muhammadkashif.net',
  phone: '+60179152084',
  location: 'Kuching, Sarawak, Malaysia',
  defaultImage: '/images/profile.avif',
  socialImage: '/images/services/full-listing-design-v1.webp',
  sameAs: [
    'https://www.upwork.com/freelancers/~016edc19243e405472',
    'https://www.linkedin.com/in/muhammadkashif928/',
    'https://www.facebook.com/profile.php?id=100011667847244',
    'https://instagram.com/muhammadkashif928',
  ],
}

export const seoKeywords = [
  'Amazon listing design across product categories',
  'ecommerce product image designer',
  'Amazon product listing designer',
  'product image optimization',
  'Amazon A+ Content designer',
  'Amazon brand designer',
  'Amazon product infographics',
  'Amazon main image optimization',
  'Amazon Brand Store design',
  'Amazon listing designer for hire',
]

export function absoluteUrl(path = '/') {
  if (!path) return siteConfig.url
  if (/^https?:\/\//.test(path)) return path
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function createMetadata({
  title,
  description,
  path = '/',
  image = siteConfig.socialImage,
  imageAlt,
  keywords = [],
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}) {
  const canonical = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)
  const isGeneratedCover = typeof image === 'string' && image.startsWith('/api/cover/')
  const metaTitle = title || siteConfig.title
  const metaDescription = description || siteConfig.description

  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          // Only declare dimensions we know; existing photographs vary in shape.
          ...(isGeneratedCover ? { width: 1200, height: 630 } : {}),
          alt: imageAlt || metaTitle,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }
}

export function getGlobalJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.author,
        givenName: 'Muhammad',
        familyName: 'Kashif',
        url: siteConfig.url,
        image: {
          '@type': 'ImageObject',
          url: absoluteUrl(siteConfig.defaultImage),
          width: 400,
          height: 400,
          caption: 'Muhammad Kashif — E-commerce Creative Designer',
        },
        jobTitle: 'E-commerce Creative Designer',
        description: 'E-commerce creative designer working with brands across all product categories, with 8+ years of experience and 200+ completed projects. Creates Amazon main images, product infographics, A+ Content and Brand Stores, plus Shopify store design and brand and digital design, for sellers in the United States, United Kingdom, and Canada. Works remotely worldwide from Kuching, Malaysia.',
        knowsLanguage: ['English', 'Malay', 'Urdu'],
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kuching',
          addressRegion: 'Sarawak',
          addressCountry: 'MY',
        },
        sameAs: siteConfig.sameAs,
        knowsAbout: [
          'Amazon A+ Content Design',
          'Amazon Listing Optimization',
          'Product Infographics',
          'Brand Identity Design',
          'Packaging Design',
          'AI Product Lifestyle Images',
          'Product Image Optimization',
          'E-commerce Product Photography',
          'Private Label Brand Strategy',
          'Shopify Store Design',
          'WordPress Websites',
          'Video Editing',
          'Adobe Photoshop',
          'Adobe Illustrator',
          'Blender 3D Rendering',
          'Midjourney AI',
          'Amazon Seller Central',
          '3D Product Visualization',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'E-commerce Creative Designer',
          occupationLocation: { '@type': 'Country', name: 'Malaysia' },
          description: 'Designs Amazon listing visuals, A+ Content, brand identity, and product imagery for private label sellers in the United States, United Kingdom, Canada, and worldwide.',
          skills: 'Amazon A+ Content, Product Infographics, Brand Identity, AI Retouching, Packaging Design, 3D Visualization',
          experienceRequirements: '8+ years in Amazon brand design and e-commerce visual strategy',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Designer Trends Inc',
        },
      },
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': `${siteConfig.url}/#service`,
        name: siteConfig.name,
        alternateName: 'Muhammad Kashif Amazon Design',
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.defaultImage),
        description: siteConfig.description,
        founder: { '@id': `${siteConfig.url}/#person` },
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'Malaysia' },
          'Worldwide',
        ],
        priceRange: '$$',
        currenciesAccepted: 'USD, MYR',
        paymentAccepted: 'PayPal, Bank Transfer, Upwork, Wise',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kuching',
          addressRegion: 'Sarawak',
          addressCountry: 'MY',
        },
        telephone: siteConfig.phone,
        email: siteConfig.email,
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Amazon & Shopify Design Services',
          // Built from data/services.js and data/shopify.js so the prices here always match the pages.
          itemListElement: catalogOffers(),
        },
        sameAs: siteConfig.sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: { '@id': `${siteConfig.url}/#service` },
        inLanguage: 'en-US',

      },
    ],
  }
}

export function getBreadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function getArticleJsonLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.image)],
    datePublished: post.publishedAt || post.date,
    dateModified: post.updatedAt || post.publishedAt || post.date,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author,
      url: absoluteUrl('/about/'),
    },
    inLanguage: 'en-US',
    articleSection: post.category,
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
      '@id': absoluteUrl(`/${post.slug}/`),
    },
    keywords: post.tags?.join(', '),
  }
}

export function getFaqJsonLd(faqs = []) {
  if (!faqs.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

function catalogOffers() {
  const amazon = services.map(s => ({
    '@type': 'Offer',
    url: `https://muhammadkashif.net/services/${s.slug}/`,
    itemOffered: { '@type': 'Service', name: servicePresentation[s.slug]?.title || s.title, description: servicePresentation[s.slug]?.brief },
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', ...(s.fromPrice ? { minPrice: s.priceUsd } : { price: s.priceUsd }), valueAddedTaxIncluded: false },
  }))
  const shopify = shopifyPackages.map(p => ({
    '@type': 'Offer',
    url: `https://muhammadkashif.net/services/${shopifyService.slug}/#${p.id}`,
    itemOffered: { '@type': 'Service', name: `Shopify Store Design — ${p.name}`, description: p.fit },
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', ...(p.from ? { minPrice: p.priceUsd } : { price: p.priceUsd }), valueAddedTaxIncluded: false },
  }))
  return [...amazon, ...shopify]
}
