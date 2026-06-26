'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

function imgUrl(folder, file) {
  return encodeURI(`/portfolio/Leather Products/${folder}/${file}`)
}

const PRODUCTS = [
  {
    id: 1,
    name: 'Crocodile Leather Bag for Ladies',
    category: 'Leather Bag',
    folder: 'Product 1 (Crocodile Leather Bag for Ladies)',
    before: ['rough original image.jpeg'],
    after: [
      'ChatGPT Image Jun 24, 2026, 12_24_55 AM.png',
      'Crocodile Leather bag img 2.png',
    ],
  },
  {
    id: 2,
    name: 'Leather Cow Bag for Ladies',
    category: 'Leather Bag',
    folder: 'Product 2 (Leather Cow Bag for Ladies)',
    before: ['rough original image.jpeg'],
    after: ['Leather Cow Bag img 1.png'],
  },
  {
    id: 3,
    name: 'Leather Jacket',
    category: 'Leather Jacket',
    folder: 'Product 3 (Leather Jacket)',
    before: ['rough original image.jpeg'],
    after: [
      'Leather Jacket img 1.png',
      'Leather Jacket img 2.png',
      'Leather Jacket img 3.png',
    ],
  },
  {
    id: 4,
    name: 'Suede Biker Jacket — Long Design',
    category: 'Biker Jacket',
    folder: 'Product 4 (Suede Biker Jacket with long design)',
    before: ['rough original image.jpeg', 'rough original image 2.jpeg'],
    after: [
      'ChatGPT Image Jun 24, 2026, 01_10_01 AM.png',
      'Suede Biker Jacket img 2.png',
      'Suede Biker Jacket img 3.png',
    ],
  },
  {
    id: 5,
    name: "Women's Leather Jacket",
    category: 'Female Jacket',
    folder: 'Product 5 (Female Jacket)',
    before: ['rough original image 1.jpeg', 'rough original image 2.jpeg'],
    after: [
      'ChatGPT Image Jun 24, 2026, 01_26_15 AM.png',
      'ChatGPT Image Jun 24, 2026, 01_29_48 AM.png',
      'ChatGPT Image Jun 24, 2026, 01_31_34 AM.png',
    ],
  },
  {
    id: 6,
    name: 'Motorcycle Leather Jacket',
    category: 'Motorcycle Jacket',
    folder: 'Product 6 (Motorcycle Jacket) ',
    before: ['rough original image 1.jpeg', 'rough original image  2.jpeg'],
    after: [
      'Motorcycle Jacket img 1.png',
      'Motorcycle Jacket img 2.png',
      'Motorcycle Jacket img 3.png',
    ],
  },
  {
    id: 7,
    name: 'Classic Leather Jacket',
    category: 'Leather Jacket',
    folder: 'Product 7 (Leather Jacket)',
    before: ['rough original image 1.jpeg', 'rough original image 2.jpeg'],
    after: [
      'Leather Jacket img 1.png',
      'Leather Jacket img 2.png',
      'Leather Jacket img 3.png',
    ],
  },
  {
    id: 8,
    name: 'Premium Leather Jacket',
    category: 'Leather Jacket',
    folder: 'Product 8 (Leather Jacket )',
    before: ['rough original image  1.jpeg', 'rough original image  2.jpeg'],
    after: [
      'ChatGPT Image Jun 24, 2026, 02_07_29 AM.png',
      'ChatGPT Image Jun 24, 2026, 02_10_02 AM.png',
      'ChatGPT Image Jun 24, 2026, 02_12_01 AM.png',
    ],
  },
  {
    id: 9,
    name: "Biker's Leather Costume",
    category: 'Biker Costume',
    folder: "Product 9 (Biker's Leather Costume)",
    before: [
      'rough original image 1.jpeg',
      'rough original image 2.jpeg',
      'rough original image 3.jpeg',
      'rough original image 4.jpeg',
    ],
    after: [
      "Biker's Leather Costume img 1.png",
      "Biker's Leather Costume img 2.png",
      "Biker's Leather Costume img 3.png",
      "Biker's Leather Costume img 4.png",
      "Biker's Leather Costume img 5.png",
    ],
  },
  {
    id: 10,
    name: 'Urban Leather Jacket',
    category: 'Leather Jacket',
    folder: 'Product 10 (Leather Jacket)',
    before: ['rough original image 1.jpeg', 'rough original image 2.jpeg'],
    after: ['Leather Jacket img 1.png', 'Leather Jacket img 2.png'],
  },
  {
    id: 11,
    name: "Biker's Leather Costume II",
    category: 'Biker Costume',
    folder: "Product 11 (BIker's Leather Costume 2)",
    before: [
      'rough original image 1.jpeg',
      'rough original image 2.jpeg',
      'rough original image 3.jpeg',
      'rough original image 4.jpeg',
    ],
    after: [
      "Biker's Leather Costume 2 img 1.png",
      "Biker's Leather Costume 2 img 2.png",
      "Biker's Leather Costume 2 img 3.png",
      "Biker's Leather Costume 2 img 4.png",
      "Biker's Leather Costume 2 img 5.png",
    ],
  },
  {
    id: 12,
    name: "Suede Biker's Jacket",
    category: 'Suede Jacket',
    folder: "Product 12 (Suede Biker's Jacket)",
    before: ['rough original image 1.jpeg', 'rough original image 2.jpeg'],
    after: [
      'ChatGPT Image Jun 24, 2026, 04_18_36 AM.png',
      'ChatGPT Image Jun 24, 2026, 04_21_32 AM.png',
    ],
  },
]

function buildGallery(product) {
  const befores = product.before.map((f, i) => ({
    src: imgUrl(product.folder, f),
    type: 'BEFORE',
    label: product.before.length > 1 ? `Before ${i + 1}` : 'Before',
    alt: `${product.name} — original raw photo${product.before.length > 1 ? ` ${i + 1}` : ''}`,
  }))
  const afters = product.after.map((f, i) => ({
    src: imgUrl(product.folder, f),
    type: 'AFTER',
    label: product.after.length > 1 ? `After ${i + 1}` : 'After',
    alt: `${product.name} — 8K optimized image${product.after.length > 1 ? ` ${i + 1}` : ''}`,
  }))
  return [...befores, ...afters]
}

export default function LeatherItemsPortfolio() {
  const [lightbox, setLightbox] = useState(null)
  // lightbox = { productIndex: number, imageIndex: number }
  const touchStartX = useRef(null)

  const currentProduct = lightbox !== null ? PRODUCTS[lightbox.productIndex] : null
  const currentGallery = currentProduct ? buildGallery(currentProduct) : []
  const currentImg = currentGallery[lightbox?.imageIndex] ?? null
  const totalImgs = currentGallery.length

  const openLightbox = useCallback((productIndex, imageIndex) => {
    setLightbox({ productIndex, imageIndex })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const navNext = useCallback(() => {
    setLightbox(lb => {
      if (!lb) return lb
      const gallery = buildGallery(PRODUCTS[lb.productIndex])
      return { ...lb, imageIndex: (lb.imageIndex + 1) % gallery.length }
    })
  }, [])

  const navPrev = useCallback(() => {
    setLightbox(lb => {
      if (!lb) return lb
      const gallery = buildGallery(PRODUCTS[lb.productIndex])
      return { ...lb, imageIndex: (lb.imageIndex - 1 + gallery.length) % gallery.length }
    })
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navNext()
      if (e.key === 'ArrowLeft') navPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, closeLightbox, navNext, navPrev])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  // Touch swipe
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) dx > 0 ? navPrev() : navNext()
    touchStartX.current = null
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: 'var(--b-bg)' }}>

        {/* ── Hero ── */}
        <div className="bg-[#0a0a0a] pt-24 pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <Link
              href="/my-portfolio/"
              className="font-mono text-xs tracking-widest text-[#f5f5f0]/40 hover:text-[#e8e800] transition-colors mb-6 inline-block"
            >
              ← BACK TO PORTFOLIO
            </Link>
            <span className="block font-mono text-[10px] tracking-[0.35em] text-[#e8e800] mb-4 uppercase">
              ▶ Image Optimization · Leather Products
            </span>
            <h1 className="font-bebas leading-none text-[#f5f5f0]" style={{ fontSize: 'clamp(3rem,9vw,7rem)' }}>
              LEATHER ITEMS<br />
              <span style={{ WebkitTextStroke: '2px #f5f5f0', color: 'transparent' }}>OPTIMIZED</span>
            </h1>
            <p className="font-mono text-sm text-[#f5f5f0]/60 mt-6 max-w-2xl leading-relaxed">
              Raw product photos transformed into ultra-high-definition 8K images with pristine white backgrounds,
              deep texture rendering, and photorealistic detail. Every image is e-commerce ready —
              optimized for Amazon, Shopify, and premium brand listings.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-[#f5f5f0]/10">
              {[
                { label: 'PRODUCTS', value: '12' },
                { label: 'OUTPUT QUALITY', value: '8K' },
                { label: 'TRANSFORMATION', value: 'BEFORE → AFTER' },
                { label: 'CATEGORY', value: 'LEATHER GOODS' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-mono text-[9px] tracking-[0.3em] text-[#f5f5f0]/30">{s.label}</p>
                  <p className="font-mono text-sm text-[#e8e800] mt-1 font-bold">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section intro ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-4">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-2">▶ BEFORE & AFTER GALLERY</p>
          <h2 className="font-bebas text-[clamp(1.8rem,4vw,3rem)] text-[#0a0a0a] leading-tight">
            CLICK ANY IMAGE TO VIEW FULL SCREEN
          </h2>
          <p className="font-mono text-xs text-[#0a0a0a]/50 mt-2">
            Each card shows the original raw photo (left) alongside the 8K-optimized final image (right).
            Click to zoom — use arrow keys or swipe to navigate all images.
          </p>
        </div>

        {/* ── Product Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {PRODUCTS.map((product, pi) => {
              const firstBefore = product.before[0]
              const firstAfter = product.after[0]
              const gallery = buildGallery(product)
              return (
                <article
                  key={product.id}
                  className="border-2 border-[#0a0a0a] bg-white overflow-hidden"
                  style={{ boxShadow: '5px 5px 0px #0a0a0a' }}
                >
                  {/* Before / After images */}
                  <div className="grid grid-cols-2">
                    {/* BEFORE */}
                    <div
                      className="relative cursor-zoom-in group overflow-hidden"
                      style={{ aspectRatio: '4/3' }}
                      onClick={() => openLightbox(pi, 0)}
                    >
                      <img
                        src={imgUrl(product.folder, firstBefore)}
                        alt={`${product.name} — original raw photo before optimization`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="600"
                        height="450"
                      />
                      <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/30 transition-colors duration-300" />
                      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-2 pt-2">
                        <span className="font-mono text-[9px] tracking-[0.2em] bg-[#0a0a0a] text-[#f5f5f0] px-2 py-1">
                          BEFORE
                        </span>
                        {product.before.length > 1 && (
                          <span className="font-mono text-[8px] text-[#f5f5f0]/70 bg-[#0a0a0a]/60 px-1.5 py-0.5">
                            +{product.before.length - 1}
                          </span>
                        )}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-mono text-[10px] tracking-widest text-[#f5f5f0] border border-[#f5f5f0] px-3 py-1.5">
                          ⊕ ZOOM
                        </span>
                      </div>
                    </div>

                    {/* AFTER */}
                    <div
                      className="relative cursor-zoom-in group overflow-hidden border-l-2 border-[#0a0a0a]"
                      style={{ aspectRatio: '4/3' }}
                      onClick={() => openLightbox(pi, product.before.length)}
                    >
                      <img
                        src={imgUrl(product.folder, firstAfter)}
                        alt={`${product.name} — 8K optimized product image after retouching`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="600"
                        height="450"
                      />
                      <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/20 transition-colors duration-300" />
                      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-2 pt-2">
                        <span className="font-mono text-[9px] tracking-[0.2em] bg-[#e8e800] text-[#0a0a0a] px-2 py-1">
                          AFTER
                        </span>
                        {product.after.length > 1 && (
                          <span className="font-mono text-[8px] text-[#f5f5f0] bg-[#0a0a0a]/60 px-1.5 py-0.5">
                            +{product.after.length - 1}
                          </span>
                        )}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-mono text-[10px] tracking-widest text-[#0a0a0a] border border-[#0a0a0a] bg-[#e8e800]/90 px-3 py-1.5">
                          ⊕ ZOOM
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="border-t-2 border-[#0a0a0a] px-4 sm:px-5 py-4 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-[#0a0a0a]/40 uppercase block mb-0.5">
                        {product.category}
                      </span>
                      <h3 className="font-bebas text-base sm:text-lg tracking-wider text-[#0a0a0a] leading-tight truncate">
                        {product.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => openLightbox(pi, product.before.length)}
                      className="shrink-0 font-mono text-[9px] tracking-widest text-[#0a0a0a] border-2 border-[#0a0a0a] px-3 py-2 hover:bg-[#e8e800] hover:border-[#e8e800] transition-all whitespace-nowrap"
                      aria-label={`View all ${gallery.length} images for ${product.name}`}
                    >
                      VIEW ALL {gallery.length} →
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* ── SEO Content ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t-2 border-[#0a0a0a] mt-8">
          <div className="grid md:grid-cols-[1fr_280px] gap-12 sm:gap-16">
            <div className="prose-leather">
              <h2>Professional Leather Product Image Optimization</h2>
              <p>
                These 12 leather products — spanning jackets, bags, biker costumes, and suede outerwear — were
                received as raw, unedited client photographs. Each image was individually processed and transformed
                into a studio-quality 8K asset using AI-assisted retouching combined with manual post-processing
                techniques in Photoshop.
              </p>
              <p>
                The result is a dramatic visual upgrade: clean white backgrounds, enhanced texture clarity on
                every stitch and grain of the leather, corrected lighting, and razor-sharp detail rendering
                that brings out the craftsmanship in each garment. These images are fully optimized for
                e-commerce platforms including Amazon, Etsy, Shopify, and brand lookbooks.
              </p>

              <h2>What the Optimization Process Involves</h2>
              <ul>
                <li><strong>Background removal & replacement</strong> — every product isolated on a pure white background for clean, professional presentation</li>
                <li><strong>8K upscaling & texture enhancement</strong> — fine leather grain, stitching detail, and zipper hardware rendered in ultra-high definition</li>
                <li><strong>Color correction & tone balancing</strong> — accurate color reproduction for black, brown, tan, and suede leather tones</li>
                <li><strong>Shadow & reflection creation</strong> — natural drop shadows and subtle floor reflections for a 3-dimensional studio effect</li>
                <li><strong>Wrinkle & crease reduction</strong> — unwanted packing creases smoothed while preserving authentic leather character</li>
                <li><strong>Multi-angle delivery</strong> — front, side, and detail shots provided for complete listing coverage</li>
              </ul>

              <h2>Why Product Image Quality Matters for Leather Goods</h2>
              <p>
                Leather is a tactile material — buyers want to see texture, sheen, and construction quality
                before purchasing. Low-resolution or poorly lit photographs undermine premium positioning
                and directly impact conversion rates. High-quality product photography for leather items
                signals craftsmanship, builds trust, and justifies higher price points in competitive markets.
              </p>
              <p>
                Studies consistently show that optimized main images on Amazon can increase click-through rates
                by 20–40%. For leather jackets and bags specifically — where visual quality signals premium
                value — professional retouching is not optional, it is a core part of the listing strategy.
              </p>

              <h2>Leather Products Featured in This Portfolio</h2>
              <ul>
                <li>Crocodile leather bag for ladies</li>
                <li>Leather cow bag for ladies</li>
                <li>Classic and premium leather jackets (4 styles)</li>
                <li>Suede biker jacket with long design</li>
                <li>Women's leather jacket</li>
                <li>Motorcycle leather jacket</li>
                <li>Full biker leather costume sets (2 collections)</li>
                <li>Suede biker's jacket</li>
              </ul>

              <h2>Service Information</h2>
              <p>
                <strong>Service:</strong> AI-Assisted Product Image Optimization<br />
                <strong>Output:</strong> 8K Resolution PNG, White Background, Multi-Angle<br />
                <strong>Suitable for:</strong> Amazon, Shopify, Etsy, Brand Lookbooks<br />
                <strong>Products processed:</strong> 12 leather items, 30+ images delivered<br />
                <strong>Turnaround:</strong> 24–48 hours per product batch
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="border-2 border-[#0a0a0a] p-5 bg-[#0a0a0a]" style={{ boxShadow: '4px 4px 0px #e8e800' }}>
                <h3 className="font-bebas text-xl tracking-widest text-[#e8e800] mb-3">NEED YOUR PRODUCTS OPTIMIZED?</h3>
                <p className="font-mono text-xs text-[#f5f5f0]/60 leading-relaxed mb-4">
                  Send your raw product photos and receive 8K-quality, e-commerce-ready images that convert browsers into buyers.
                </p>
                <Link
                  href="/contact-me/"
                  className="block font-bebas text-sm tracking-widest text-center px-4 py-3 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[4px_4px_0px_#f5f5f0] transition-all"
                >
                  START YOUR PROJECT →
                </Link>
              </div>

              <div className="border-2 border-[#0a0a0a] p-5" style={{ boxShadow: '4px 4px 0px #0a0a0a' }}>
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-4">MORE PROJECTS</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { title: 'Premium A+ Content', slug: 'premium-a-content' },
                    { title: 'AI & Creative Retouching', slug: 'ai-creative-retouching' },
                    { title: 'Brand Identity & Packaging', slug: 'brand-identity-packaging' },
                  ].map(p => (
                    <Link
                      key={p.slug}
                      href={`/blackdsn-portfolio/${p.slug}/`}
                      className="font-mono text-xs text-[#0a0a0a] hover:text-[#0a0a0a]/60 border-b border-[#0a0a0a]/10 pb-2 transition-colors"
                    >
                      {p.title} →
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-2 border-[#0a0a0a] p-5 bg-[#f5f5f0]">
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-3">QUICK STATS</h3>
                {[
                  ['Products', '12'],
                  ['Total Images', '30+'],
                  ['Output Quality', '8K'],
                  ['Background', 'Pure White'],
                  ['Format', 'PNG / JPEG'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center border-b border-[#0a0a0a]/10 py-2 last:border-0">
                    <span className="font-mono text-[10px] text-[#0a0a0a]/50">{k}</span>
                    <span className="font-mono text-[10px] text-[#0a0a0a] font-bold">{v}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="bg-[#0a0a0a] py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8e800] mb-4">▶ READY TO TRANSFORM YOUR PRODUCT IMAGES?</p>
            <h2 className="font-bebas text-[clamp(2rem,6vw,4.5rem)] leading-none text-[#f5f5f0] mb-6">
              LET'S MAKE YOUR LEATHER<br />PRODUCTS LOOK PREMIUM
            </h2>
            <p className="font-mono text-sm text-[#f5f5f0]/50 mb-8 max-w-lg mx-auto leading-relaxed">
              From raw product shots to 8K e-commerce images — professional retouching that drives real results.
            </p>
            <Link
              href="/contact-me/"
              className="inline-block font-bebas text-base tracking-widest px-8 py-4 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[6px_6px_0px_#f5f5f0] transition-all"
            >
              GET STARTED TODAY →
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {/* ── Lightbox ── */}
      {lightbox !== null && currentImg && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a]/97 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${currentProduct.name} image viewer`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#f5f5f0]/10 shrink-0">
            <div className="min-w-0">
              <p className="font-mono text-[9px] tracking-[0.25em] text-[#e8e800] truncate">{currentProduct.category}</p>
              <p className="font-bebas text-base sm:text-xl tracking-wider text-[#f5f5f0] leading-tight truncate">{currentProduct.name}</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 shrink-0 ml-3">
              <span className="font-mono text-xs text-[#f5f5f0]/40 hidden sm:block">
                {lightbox.imageIndex + 1} / {totalImgs}
              </span>
              <button
                onClick={closeLightbox}
                className="font-mono text-xs tracking-widest text-[#f5f5f0]/60 hover:text-[#e8e800] border border-[#f5f5f0]/20 hover:border-[#e8e800] px-3 py-2 transition-all"
                aria-label="Close image viewer"
              >
                ✕ CLOSE
              </button>
            </div>
          </div>

          {/* Main image area */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden px-12 sm:px-16 py-4">
            {/* Prev arrow */}
            <button
              onClick={navPrev}
              disabled={totalImgs <= 1}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 font-mono text-lg sm:text-2xl text-[#f5f5f0]/50 hover:text-[#e8e800] disabled:opacity-20 w-9 sm:w-12 h-9 sm:h-12 flex items-center justify-center border border-[#f5f5f0]/10 hover:border-[#e8e800] transition-all"
              aria-label="Previous image"
            >
              ←
            </button>

            {/* Image */}
            <div className="relative max-w-full max-h-full flex items-center justify-center">
              <img
                key={currentImg.src}
                src={currentImg.src}
                alt={currentImg.alt}
                className="max-w-full max-h-[calc(100vh-220px)] object-contain"
                style={{ imageRendering: 'high-quality' }}
              />
              {/* BEFORE / AFTER badge */}
              <div className={`absolute top-3 left-3 font-mono text-[10px] tracking-widest px-3 py-1.5 font-bold ${
                currentImg.type === 'BEFORE'
                  ? 'bg-[#0a0a0a] text-[#f5f5f0] border border-[#f5f5f0]/30'
                  : 'bg-[#e8e800] text-[#0a0a0a]'
              }`}>
                {currentImg.type === 'BEFORE' ? '◉ BEFORE — Raw Photo' : '★ AFTER — 8K Optimized'}
              </div>
            </div>

            {/* Next arrow */}
            <button
              onClick={navNext}
              disabled={totalImgs <= 1}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 font-mono text-lg sm:text-2xl text-[#f5f5f0]/50 hover:text-[#e8e800] disabled:opacity-20 w-9 sm:w-12 h-9 sm:h-12 flex items-center justify-center border border-[#f5f5f0]/10 hover:border-[#e8e800] transition-all"
              aria-label="Next image"
            >
              →
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="shrink-0 border-t border-[#f5f5f0]/10 px-4 py-3">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide justify-start sm:justify-center">
              {currentGallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(lb => ({ ...lb, imageIndex: i }))}
                  className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 overflow-hidden border-2 transition-all ${
                    i === lightbox.imageIndex
                      ? 'border-[#e8e800] opacity-100'
                      : 'border-[#f5f5f0]/10 opacity-50 hover:opacity-80 hover:border-[#f5f5f0]/40'
                  }`}
                  aria-label={`${img.label} — ${img.type}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <p className="font-mono text-[9px] text-[#f5f5f0]/30 text-center mt-2 tracking-widest sm:hidden">
              {lightbox.imageIndex + 1} / {totalImgs} · SWIPE OR USE ARROWS
            </p>
            <p className="font-mono text-[9px] text-[#f5f5f0]/30 text-center mt-2 tracking-widest hidden sm:block">
              ← → ARROW KEYS TO NAVIGATE · ESC TO CLOSE
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        .prose-leather h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          letter-spacing: 0.05em;
          color: #0a0a0a;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          border-bottom: 2px solid #0a0a0a;
          padding-bottom: 0.4rem;
        }
        .prose-leather p {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          line-height: 1.95;
          color: rgba(10,10,10,0.65);
          margin-bottom: 1.2rem;
        }
        .prose-leather strong { color: #0a0a0a; font-weight: 700; }
        .prose-leather ul {
          padding-left: 0;
          margin-bottom: 1.5rem;
          list-style: none;
        }
        .prose-leather li {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          line-height: 1.85;
          color: rgba(10,10,10,0.65);
          margin-bottom: 0.6rem;
          padding-left: 1.2rem;
          position: relative;
        }
        .prose-leather li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #e8e800;
          font-size: 0.55rem;
          top: 0.35rem;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  )
}
