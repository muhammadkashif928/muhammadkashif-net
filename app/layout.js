import './globals.css'
import Script from 'next/script'
import { ThemeProvider } from '@/components/ThemeProvider'
import JsonLd from '@/components/JsonLd'
import ScrollReveal from '@/components/ScrollReveal'
import AttributionTracker from '@/components/AttributionTracker'
import SocialDock from '@/components/SocialDock'
import MobileContactBar from '@/components/MobileContactBar'
import { getGlobalJsonLd, seoKeywords, siteConfig } from '@/lib/seo'
import { GA_ID } from '@/lib/gtag'

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  classification: 'Amazon Brand Design, Freelance Design Services',
  category: 'Amazon brand design',
  subject: 'Amazon A+ Content Design, Product Infographics, Brand Identity',
  alternates: {
    canonical: '/',
    types: {
      'text/plain': '/llms.txt',
    },
  },
  manifest: '/manifest.webmanifest',
  robots: {
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
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'profile',
    firstName: 'Muhammad',
    lastName: 'Kashif',
    username: 'muhammadkashif928',
    gender: 'male',
    images: [
      {
        url: '/images/profile.avif',
        width: 1200,
        height: 1200,
        alt: 'Muhammad Kashif — Amazon Brand Designer and A+ Content Specialist serving US, UK, and international private label sellers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/images/profile.avif'],
    creator: '@muhamadkashif928',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  other: {
    'geo.region': 'MY-13',
    'geo.placename': 'Kuching, Sarawak, Malaysia',
    'geo.position': '1.5535;110.3593',
    'ICBM': '1.5535, 110.3593',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply saved theme before paint (default: light) to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'light';if(t!=='dark')document.documentElement.classList.add('theme-light');}catch(e){document.documentElement.classList.add('theme-light');}})();`,
          }}
        />
      </head>
      <body className="noise">
        {/* Google Analytics 4 */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');`}
        </Script>
        <JsonLd data={getGlobalJsonLd()} />
        <ScrollReveal />
        <AttributionTracker />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SocialDock />
        <MobileContactBar />
      </body>
    </html>
  )
}
