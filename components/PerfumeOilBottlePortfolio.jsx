'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const IMAGE = '/1775606072952.jpeg'

const improvements = [
  { title: 'Straightened perspective', desc: 'Corrected the uneven angle so the bottle presents upright and symmetrical.' },
  { title: 'Pure white background', desc: 'Distraction-free background for full marketplace compliance (Amazon, Shopee, TikTok Shop).' },
  { title: 'Color accuracy preserved', desc: 'Authentic brass tones and ruby-red stone colors maintained — no artificial shifts.' },
  { title: 'Metal texture enhanced', desc: 'Intricate antique brass filigree brought out naturally without over-processing.' },
  { title: 'Jewelry stones refined', desc: 'Ruby gemstone inlays sharpened for clarity, depth, and premium appearance.' },
  { title: 'Cap & dropper positioned', desc: 'Both elements repositioned for premium product presentation at optimal viewing angle.' },
  { title: 'Shadow balanced', desc: 'Realistic grounding shadow added for natural product depth on white background.' },
  { title: 'Sharpness optimised', desc: 'Overall clarity enhanced to perform at full zoom on marketplace product pages.' },
]

const useCases = [
  { label: 'Amazon', icon: '✔', desc: 'White-bg compliant. High-res for customer zoom.' },
  { label: 'Shopee', icon: '✔', desc: 'Clean listing image that stands out in category feeds.' },
  { label: 'TikTok Shop', icon: '✔', desc: 'Scroll-stopping visual for social commerce.' },
  { label: 'Marketplace Approval', icon: '✔', desc: 'Meets all major platform image policy requirements.' },
]

const metrics = [
  { label: 'Click-Through Rate', sub: 'Better first impressions from search results' },
  { label: 'Brand Trust', sub: 'Professional visuals signal product quality' },
  { label: 'Conversion Rate', sub: 'Buyers can see exactly what they are getting' },
  { label: 'Platform Approval', sub: 'White background meets all marketplace TOS' },
]

export default function PerfumeOilBottlePortfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e) => { if (e.key === 'Escape') setLightboxOpen(false) }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: 'var(--b-bg)' }}>

        {/* ── Hero ── */}
        <div className="bg-[#0a0a0a] pt-24 pb-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <Link
              href="/my-portfolio/"
              className="font-mono text-xs tracking-widest text-[#f5f5f0]/40 hover:text-[#e8e800] transition-colors mb-6 inline-block"
            >
              ← BACK TO PORTFOLIO
            </Link>
            <span className="block font-mono text-[10px] tracking-[0.35em] text-[#e8e800] mb-4 uppercase">
              ▶ Product Retouching · E-commerce Image Optimization
            </span>
            <h1 className="font-bebas leading-none text-[#f5f5f0]" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)' }}>
              PERFUME OIL BOTTLE<br />
              <span style={{ WebkitTextStroke: '2px #f5f5f0', color: 'transparent' }}>RETOUCHING</span>
            </h1>
            <p className="font-mono text-sm text-[#f5f5f0]/60 mt-5 max-w-2xl leading-relaxed">
              From ordinary to marketplace-ready. A casual photo with uneven angle, distracting background,
              and inconsistent lighting — transformed into a clean, professional, e-commerce-ready main image
              through careful product retouching and optimization.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-10 pt-8 border-t border-[#f5f5f0]/10">
              {[
                { label: 'PRODUCT', value: 'UAE Perfume Oil Bottle' },
                { label: 'DATE', value: 'Jun 27, 2026' },
                { label: 'TIME', value: '09:18 AM' },
                { label: 'SOFTWARE', value: 'Adobe Photoshop' },
                { label: 'OUTPUT', value: 'Marketplace Ready' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-mono text-[9px] tracking-[0.3em] text-[#f5f5f0]/30">{s.label}</p>
                  <p className="font-mono text-xs text-[#e8e800] mt-1 font-bold">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Before / After Image ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-4">▶ ORIGINAL → MARKETPLACE-READY TRANSFORMATION</p>

          <div
            className="relative cursor-zoom-in border-2 border-[#0a0a0a] overflow-hidden group bg-white"
            style={{ boxShadow: '6px 6px 0px #0a0a0a' }}
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={IMAGE}
              alt="Perfume oil bottle before and after product retouching — from casual photo to marketplace-ready e-commerce image"
              className="w-full object-contain bg-white"
              width="800"
              height="368"
              fetchPriority="high"
            />
            {/* ORIGINAL label — embedded in image already, but reinforce */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] bg-[#0a0a0a] text-[#f5f5f0] px-2 sm:px-3 py-1">
                BEFORE — ORIGINAL
              </span>
            </div>
            <div className="absolute bottom-3 sm:bottom-4" style={{ left: 'calc(50% + 8px)' }}>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] bg-[#e8e800] text-[#0a0a0a] px-2 sm:px-3 py-1">
                AFTER — OPTIMIZED
              </span>
            </div>
            {/* Centre divider */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-[#0a0a0a]/20 pointer-events-none" />
            {/* Hover hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0a0a0a]/15">
              <span className="font-mono text-xs tracking-widest text-white border border-white/60 px-4 py-2 bg-[#0a0a0a]/50">
                ⊕ CLICK TO VIEW FULL SCREEN
              </span>
            </div>
          </div>
          <p className="font-mono text-[9px] text-[#0a0a0a]/30 text-center mt-3 tracking-widest sm:hidden">
            TAP TO VIEW FULL SCREEN
          </p>
        </div>

        {/* ── Improvements Grid ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-5">▶ WHAT WAS IMPROVED</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {improvements.map((item, i) => (
              <div
                key={i}
                className="border-2 border-[#0a0a0a] p-4"
                style={{ boxShadow: '3px 3px 0px #0a0a0a' }}
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[9px] text-[#e8e800] bg-[#0a0a0a] px-1.5 py-0.5 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-bebas text-base tracking-wide text-[#0a0a0a] leading-tight mb-1">
                      {item.title}
                    </p>
                    <p className="font-mono text-[10px] text-[#0a0a0a]/55 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Impact Metrics ── */}
        <div className="border-t-2 border-[#0a0a0a]" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8e800]/60 mb-6">▶ SMALL IMPROVEMENTS, SIGNIFICANT IMPACT ON</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="border border-[#f5f5f0]/10 p-4">
                  <p className="font-bebas text-lg tracking-wide text-[#e8e800] leading-tight mb-1">{m.label}</p>
                  <p className="font-mono text-[9px] text-[#f5f5f0]/40 leading-relaxed">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Content + Sidebar ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-[1fr_260px] gap-10 sm:gap-14">

            <div className="prose-perf">
              <h2>About the Project</h2>
              <p>
                This ornate UAE-imported perfume oil bottle arrived as a casual product photo — shot at an
                uneven angle on a patterned tablecloth with a cluttered, blurry sofa background. The dropper
                was lying out of position and the overall presentation did not communicate the premium, handcrafted
                nature of the product.
              </p>
              <p>
                Through careful product retouching and optimization in Adobe Photoshop, the image was transformed
                into a clean, professional, e-commerce-ready visual that meets the listing requirements of
                Amazon, Shopee, and TikTok Shop — while fully preserving the authentic character of the product.
              </p>

              <h2>The Challenge</h2>
              <p>
                Ornate metalwork products like this bottle present a specific retouching challenge:
                the intricate brass filigree, embedded ruby gemstones, and frosted glass body each
                require different retouching approaches to enhance without losing authenticity.
                Over-processing metalwork kills the handcrafted feel; under-processing leaves it looking flat.
              </p>
              <p>
                The dropper and cap positioning also needed to convey premium quality — the final image shows
                both elements clearly, allowing buyers to understand exactly what they are receiving without
                any ambiguity.
              </p>

              <h2>Marketplace Use Cases</h2>
              <div className="use-case-grid-perf">
                {useCases.map(u => (
                  <div key={u.label} className="use-case-item-perf">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#e8e800] text-xs">{u.icon}</span>
                      <strong>{u.label}</strong>
                    </div>
                    <span>{u.desc}</span>
                  </div>
                ))}
              </div>

              <h2>On Product Photography & Presentation</h2>
              <p>
                Great product photography is not just about taking a picture — it is about presenting value
                at first glance. If your product images are not converting, the issue might not be the product;
                it might be the presentation.
              </p>
              <p>
                For intricate, handcrafted products like this perfume oil bottle, the visual must communicate
                craftsmanship, authenticity, and premium quality before a single word of the listing is read.
                A well-retouched image does this instantly.
              </p>

              <h2>Project Details</h2>
              <p>
                <strong>Product:</strong> UAE Imported Perfume Oil Bottle (ornate brass &amp; ruby gemstone)<br />
                <strong>Service:</strong> Product Retouching &amp; E-commerce Image Optimization<br />
                <strong>Software:</strong> Adobe Photoshop<br />
                <strong>Date:</strong> June 27, 2026 · 09:18 AM<br />
                <strong>Output:</strong> Marketplace-ready for Amazon, Shopee, TikTok Shop
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="border-2 border-[#0a0a0a] p-5 bg-[#0a0a0a]" style={{ boxShadow: '4px 4px 0px #e8e800' }}>
                <h3 className="font-bebas text-xl tracking-widest text-[#e8e800] mb-3">NEED YOUR PRODUCT RETOUCHED?</h3>
                <p className="font-mono text-xs text-[#f5f5f0]/60 leading-relaxed mb-4">
                  Turn your product photos into marketplace-ready images that convert browsers into buyers.
                </p>
                <Link
                  href="/contact-me/"
                  className="block font-bebas text-sm tracking-widest text-center px-4 py-3 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[4px_4px_0px_#f5f5f0] transition-all"
                >
                  START YOUR PROJECT →
                </Link>
              </div>

              <div className="border-2 border-[#0a0a0a] p-5" style={{ boxShadow: '4px 4px 0px #0a0a0a' }}>
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-3">PROJECT INFO</h3>
                {[
                  ['Product', 'UAE Perfume Oil Bottle'],
                  ['Date', 'Jun 27, 2026'],
                  ['Time', '09:18 AM'],
                  ['Software', 'Photoshop'],
                  ['Background', 'Pure White'],
                  ['Platforms', 'Amazon, Shopee, TikTok'],
                  ['Output', 'Marketplace Ready'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-start border-b border-[#0a0a0a]/10 py-2 last:border-0 gap-2">
                    <span className="font-mono text-[9px] text-[#0a0a0a]/40 shrink-0">{k}</span>
                    <span className="font-mono text-[9px] text-[#0a0a0a] font-bold text-right">{v}</span>
                  </div>
                ))}
              </div>

              <div className="border-2 border-[#0a0a0a] p-5">
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-4">MORE PROJECTS</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { title: 'Closetlux Image Restoration', slug: 'closetlux-image-restoration' },
                    { title: 'Leather Items Optimized', slug: 'leather-items-optimized' },
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
            </aside>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-[#0a0a0a] py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8e800] mb-4">▶ IS YOUR PRODUCT IMAGE HURTING YOUR CONVERSIONS?</p>
            <h2 className="font-bebas text-[clamp(2rem,6vw,4rem)] leading-none text-[#f5f5f0] mb-6">
              FROM ORDINARY PHOTO<br />TO MARKETPLACE-READY
            </h2>
            <p className="font-mono text-sm text-[#f5f5f0]/50 mb-8 max-w-lg mx-auto leading-relaxed">
              Professional product retouching that improves click-through rate, brand trust, and conversion rate — across Amazon, Shopee, TikTok Shop and beyond.
            </p>
            <Link
              href="/contact-me/"
              className="inline-block font-bebas text-base tracking-widest px-8 py-4 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[6px_6px_0px_#f5f5f0] transition-all"
            >
              GET YOUR IMAGES RETOUCHED →
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]/97 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 font-mono text-xs tracking-widest text-[#f5f5f0]/60 hover:text-[#e8e800] border border-[#f5f5f0]/20 hover:border-[#e8e800] px-3 py-2 transition-all z-10"
          >
            ✕ CLOSE
          </button>
          <div
            className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 py-16"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex w-full max-w-4xl justify-between mb-3 px-1">
              <span className="font-mono text-[10px] tracking-widest bg-[#0a0a0a] text-[#f5f5f0] border border-[#f5f5f0]/20 px-3 py-1">BEFORE — ORIGINAL</span>
              <span className="font-mono text-[10px] tracking-widest bg-[#e8e800] text-[#0a0a0a] px-3 py-1">AFTER — OPTIMIZED</span>
            </div>
            <img
              src={IMAGE}
              alt="UAE perfume oil bottle — original casual photo vs marketplace-ready retouched image"
              className="max-w-4xl w-full max-h-[78vh] object-contain"
            />
            <p className="font-mono text-[9px] text-[#f5f5f0]/30 tracking-widest mt-4 text-center">
              UAE PERFUME OIL BOTTLE · PRODUCT RETOUCHING · PRESS ESC TO CLOSE
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        .prose-perf h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          letter-spacing: 0.05em;
          color: #0a0a0a;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          border-bottom: 2px solid #0a0a0a;
          padding-bottom: 0.4rem;
        }
        .prose-perf p {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          line-height: 1.95;
          color: rgba(10,10,10,0.65);
          margin-bottom: 1.2rem;
        }
        .prose-perf strong { color: #0a0a0a; font-weight: 700; }
        .use-case-grid-perf {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 480px) { .use-case-grid-perf { grid-template-columns: 1fr; } }
        .use-case-item-perf {
          border: 2px solid #0a0a0a;
          padding: 0.75rem;
        }
        .use-case-item-perf strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          color: #0a0a0a;
        }
        .use-case-item-perf span {
          display: block;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          line-height: 1.6;
          color: rgba(10,10,10,0.5);
          margin-top: 0.2rem;
        }
      `}</style>
    </>
  )
}
