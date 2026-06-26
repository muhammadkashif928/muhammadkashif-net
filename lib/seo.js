export const siteConfig = {
  name: 'Muhammad Kashif',
  title: 'Muhammad Kashif - Amazon Brand Designer',
  description:
    'Amazon Brand Designer in Kuching, Malaysia helping private label sellers create premium A+ Content, product infographics, listing images, packaging, and AI-powered lifestyle visuals.',
  url: 'https://muhammadkashif.net',
  locale: 'en_US',
  author: 'Muhammad Kashif',
  email: 'info@muhammadkashif.net',
  phone: '+60179152084',
  location: 'Kuching, Sarawak, Malaysia',
  defaultImage: '/images/profile.avif',
  sameAs: [
    'https://www.upwork.com/freelancers/~016edc19243e405472',
    'https://www.linkedin.com/in/muhammad-kashif-228554243',
    'https://www.facebook.com/profile.php?id=100011667847244',
    'https://instagram.com/muhamadkashif928',
  ],
}

export const seoKeywords = [
  'Amazon A+ Content designer',
  'Amazon brand designer',
  'Amazon product infographics',
  'Amazon listing images',
  'Amazon listing optimization',
  'private label brand identity',
  'product photography retouching',
  'AI product lifestyle images',
  'Amazon packaging design',
  'Kuching Amazon designer',
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
  image = siteConfig.defaultImage,
  imageAlt,
  keywords = [],
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}) {
  const canonical = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)
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
          width: 1600,
          height: 900,
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
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.defaultImage),
        jobTitle: 'Amazon Brand Designer',
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
          'Amazon A+ Content',
          'Amazon listing optimization',
          'Product infographics',
          'Brand identity',
          'Packaging design',
          'AI product imagery',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.url}/#service`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.defaultImage),
        description: siteConfig.description,
        founder: { '@id': `${siteConfig.url}/#person` },
        areaServed: 'Worldwide',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kuching',
          addressRegion: 'Sarawak',
          addressCountry: 'MY',
        },
        serviceType: [
          'Amazon A+ Content Design',
          'Amazon Product Infographic Design',
          'Amazon Listing Image Optimization',
          'Private Label Brand Identity',
          'AI Product Lifestyle Image Design',
        ],
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
