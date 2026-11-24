import LxShell from '@/components/lx/LxShell'
import HeroWater from '@/components/lx/HeroWater'
import { Pill } from '@/components/lx/Icons'
import { PageHero, Facts, SecHead } from '@/components/lx/Sections'
import AdVideos, { AdVideo } from '@/components/lx/AdVideos'
import { adVideos, verticalAd } from '@/data/ad-videos'
import JsonLd from '@/components/JsonLd'
import { createMetadata, absoluteUrl, siteConfig } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'AI Product Ad Videos — Portfolio',
  description: 'AI-made product ad videos by Muhammad Kashif for Eagle Shoe Care, Leather Hero and Fiamme: short 4K ads that show the problem, the product and the result.',
  path: '/ai-ad-videos/',
  image: '/videos/ads/eagle-mink-oil-kit.jpg',
  imageAlt: 'Eagle Mink Oil tin with a horsehair dauber and a microfiber cloth on a wooden surface — a frame from an AI product ad video',
  keywords: ['AI product ad video', 'AI video ads for Amazon', 'product video ads', 'AI commercial for e-commerce brands'],
})

const all = [...adVideos, verticalAd]
const listJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': absoluteUrl('/ai-ad-videos/#collection'),
  url: absoluteUrl('/ai-ad-videos/'),
  name: 'AI Product Ad Videos',
  isPartOf: { '@id': `${siteConfig.url}/#website` },
  author: { '@id': `${siteConfig.url}/#person` },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: all.length,
    itemListElement: all.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'VideoObject',
        name: `${v.brand} ${v.title} — product ad video`,
        description: v.text,
        thumbnailUrl: absoluteUrl(`/videos/ads/${v.slug}.jpg`),
        contentUrl: absoluteUrl(`/videos/ads/${v.slug}.mp4`),
        uploadDate: '2026-11-24',
        duration: `PT${v.seconds}S`,
      },
    })),
  },
}

export default function AiAdVideos() {
  return (
    <LxShell>
      <JsonLd data={listJsonLd} />
      <main id="main-content">
        <PageHero
          watermark="VIDEO"
          crumb={[{ label: 'Portfolio', href: '/my-portfolio/' }, { label: 'AI ad videos' }]}
          path="/ai-ad-videos/"
          lines={['AI ad videos.', 'Product first.']}
          lead="Short product ads made with AI video tools for leather and shoe-care brands. Each one follows the same order a shopper thinks in: the problem, the product, how to use it, and the result."
          aside={<Facts items={[
            ['Videos', `${all.length} ads`],
            ['Brands', 'Eagle · Leather Hero · Fiamme'],
            ['Length', '38–44 seconds'],
            ['Master', '4K, landscape & vertical'],
          ]} />}
        />

        <section className="section">
          <div className="shell section__in">
            <SecHead eyebrow="Watch" pill title="The ads" lead="Press play on any of them. Sound is on, and starting one pauses the others." />
            <AdVideos videos={adVideos} />
          </div>
        </section>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="advsplit">
              <HeroWater />
              <div>
                <SecHead eyebrow="Vertical" title="Re-cut for phones." split={false} lead="The same ad is delivered in 9:16 for Reels, TikTok and Shorts. This cut has no on-screen text, so captions can be written for each platform." />
                <div className="rv" style={{ '--ry': '12px', '--rd': '150ms', marginTop: '2rem' }}><Pill variant="dark" arrow="up-right" data-go="contact">Ask about an ad for your product</Pill></div>
              </div>
              <div className="rv" style={{ '--ry': '16px' }}><AdVideo video={verticalAd} vertical /></div>
            </div>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
