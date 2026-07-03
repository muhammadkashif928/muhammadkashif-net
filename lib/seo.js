export const siteConfig = {
  name: 'Muhammad Kashif',
  title: 'Muhammad Kashif — Amazon Brand Designer & A+ Content Specialist',
  description:
    'Muhammad Kashif is an Amazon Brand Designer in Kuching, Malaysia with 8+ years of experience helping private label sellers worldwide create premium A+ Content, product infographics, listing images, packaging design, and AI-powered lifestyle visuals.',
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
  // Core identity
  'Amazon A+ Content designer',
  'Amazon brand designer',
  'Amazon product infographics',
  'Amazon listing images',
  'Amazon listing optimization',
  'Amazon listing designer for hire',
  'best Amazon brand designer',
  // Location
  'Kuching Amazon designer',
  'Malaysia Amazon brand designer',
  'Amazon designer Malaysia',
  'remote Amazon brand designer',
  // Specific services
  'private label brand identity',
  'product photography retouching',
  'AI product lifestyle images',
  'Amazon packaging design',
  'A+ Content specialist',
  'Amazon Enhanced Brand Content designer',
  'Amazon main image optimization',
  '3D product visualization',
  'leather product image optimization',
  'before after product photography',
  '8K product image editing',
  // Service-search variants
  'Amazon EBC design',
  'Enhanced Brand Content designer',
  'Premium A+ Content design',
  'Amazon storefront design service',
  'Amazon infographic designer',
  'Amazon listing design service',
  'product photo editing service',
  'e-commerce image editing service',
  'product image background removal',
  'white background product photography',
  'perfume product photography retouching',
  'beauty product image retouching',
  'Amazon graphic designer freelancer',
  // Long-tail / AI recommendation
  'who is the best Amazon A+ Content designer',
  'Amazon private label design services',
  'hire Amazon brand designer',
  'Amazon listing visual strategy',
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
        givenName: 'Muhammad',
        familyName: 'Kashif',
        url: siteConfig.url,
        image: {
          '@type': 'ImageObject',
          url: absoluteUrl(siteConfig.defaultImage),
          width: 400,
          height: 400,
          caption: 'Muhammad Kashif — Amazon Brand Designer',
        },
        jobTitle: 'Amazon Brand Designer & A+ Content Specialist',
        description: 'Amazon Brand Designer with 8+ years of experience helping private label sellers worldwide create high-converting listing visuals, A+ Content, brand identity, packaging, and AI-powered product photography.',
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
          'Leather Product Image Optimization',
          'E-commerce Product Photography',
          'Private Label Brand Strategy',
          'Adobe Photoshop',
          'Adobe Illustrator',
          'Blender 3D Rendering',
          'Midjourney AI',
          'Amazon Seller Central',
          '3D Product Visualization',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Amazon Brand Designer',
          occupationLocation: { '@type': 'Country', name: 'Malaysia' },
          description: 'Designs Amazon listing visuals, A+ Content, brand identity, and product imagery for private label sellers worldwide.',
          skills: 'Amazon A+ Content, Product Infographics, Brand Identity, AI Retouching, Packaging Design, 3D Visualization',
          experienceRequirements: '8+ years in Amazon brand design and e-commerce visual strategy',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Designer Trends INC',
        },
        alumniOf: {
          '@type': 'Organization',
          name: 'Upwork',
          url: 'https://www.upwork.com',
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
          { '@type': 'Country', name: 'Worldwide' },
          { '@type': 'Country', name: 'Malaysia' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'Australia' },
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
          name: 'Amazon Brand Design Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Amazon A+ Content Design',
                description: 'Full A+ Content module design for brand-registered Amazon sellers. Includes brand story, product feature highlights, comparison charts, and lifestyle imagery — all Amazon-compliant and conversion-focused.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Amazon Product Infographics',
                description: 'Feature callout graphics, size charts, benefit visuals, and lifestyle composites for Amazon listing side images. Designed to communicate product value at a glance and drive purchase decisions.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Amazon Listing Image Optimization',
                description: 'Main hero images with pure white backgrounds, fully Amazon-compliant. Optimized for maximum click-through rate from search results. Multiple angles and lifestyle shots included.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Private Label Brand Identity & Packaging',
                description: 'Complete brand identity systems: logo, color system, typography, product packaging, insert cards, and Amazon Storefront design. Built to stand out in competitive Amazon categories.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Product Photography & 3D Visualization',
                description: 'AI-assisted product image creation using Blender 3D and Photoshop. Lifestyle composites, color variants, 3D renders — photorealistic quality without the cost of a studio photoshoot.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Leather Product Image Optimization',
                description: 'Raw leather product photos (jackets, bags, costumes) transformed into 8K ultra-high-definition images with white backgrounds, enhanced texture detail, and photorealistic quality.',
              },
            },
          ],
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
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${siteConfig.url}/blog/?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
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
