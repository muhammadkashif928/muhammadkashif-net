'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const IMAGE = '/1779399082204.jpeg'

const improvements = [
  'Sharper details — fine label engravings and glass facets rendered with crystal clarity',
  'Better lighting & reflections — premium studio-quality lighting with glass refractions',
  'Premium texture enhancement — rich amber glass depth and metallic cap finish',
  'Cleaner background — pure white replaces the flat grey for e-commerce compliance',
  'Professional luxury finish — suitable for high-end brand marketing and paid ads',
]

const useCases = [
  { label: 'Amazon Listings', desc: 'White-background compliant, high-resolution for zoom.' },
  { label: 'Shopify Stores', desc: 'Luxury visual quality that increases perceived value.' },
  { label: 'LinkedIn Ads', desc: 'Premium creative ready for B2B brand marketing.' },
  { label: 'Luxury Brand Marketing', desc: 'High-end finish matching competitor visuals.' },
]

export default function ClosetluxPortfolio() {
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
              ▶ Image Restoration · Luxury Product Photography
            </span>
            <h1 className="font-bebas leading-none text-[#f5f5f0]" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)' }}>
              CLOSETLUX<br />
              <span style={{ WebkitTextStroke: '2px #f5f5f0', color: 'transparent' }}>IMAGE RESTORATION</span>
            </h1>
            <p className="font-mono text-sm text-[#f5f5f0]/60 mt-5 max-w-2xl leading-relaxed">
              Turning an ordinary product render into a premium commercial visual —
              the <strong className="text-[#f5f5f0]/80">Closetlux Oud Faizi</strong> Extrait de Parfum
              transformed from a flat grey render into a luxury-grade image ready for Amazon, Shopify, and high-end brand marketing.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-10 pt-8 border-t border-[#f5f5f0]/10">
              {[
                { label: 'CLIENT', value: 'Shahid Anwar (@Closetlux)' },
                { label: 'DATE', value: 'Jun 27, 2026' },
                { label: 'TIME', value: '09:15 AM' },
                { label: 'SOFTWARE', value: 'Adobe Photoshop' },
                { label: 'OUTPUT', value: 'Commercial Ready' },
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
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-4">▶ BEFORE → AFTER TRANSFORMATION</p>

          <div
            className="relative cursor-zoom-in border-2 border-[#0a0a0a] overflow-hidden group bg-white"
            style={{ boxShadow: '6px 6px 0px #0a0a0a' }}
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={IMAGE}
              alt="Closetlux Oud Faizi perfume bottle — before and after image restoration by Muhammad Kashif"
              className="w-full object-contain bg-white"
              width="2048"
              height="1001"
              fetchPriority="high"
            />
            {/* Before label — left side */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] bg-[#0a0a0a] text-[#f5f5f0] px-2 sm:px-3 py-1">
                BEFORE
              </span>
            </div>
            {/* After label — right half */}
            <div className="absolute top-3 sm:top-4" style={{ left: 'calc(50% + 8px)' }}>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] bg-[#e8e800] text-[#0a0a0a] px-2 sm:px-3 py-1">
                AFTER
              </span>
            </div>
            {/* Centre divider */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-[#0a0a0a]/25 pointer-events-none" />
            {/* Hover zoom hint */}
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

        {/* ── Content + Sidebar ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 border-t-2 border-[#0a0a0a] pt-12">
          <div className="grid md:grid-cols-[1fr_260px] gap-10 sm:gap-14">

            <div className="prose-closetlux">
              <h2>About the Project</h2>
              <p>
                <strong>@Closetlux</strong>, the luxury fragrance brand by <strong>Shahid Anwar</strong>, needed their
                <strong> Oud Faizi</strong> product render elevated from a basic grey-background render to a
                premium commercial visual — ready to compete in high-end e-commerce and paid advertising channels.
              </p>
              <p>
                The original render lacked the visual impact needed for luxury positioning.
                The grey background flattened the product's presence, lighting was undynamic,
                and the glass depth and label texture failed to communicate the premium quality of the fragrance.
              </p>

              <h2>What Was Improved</h2>
              <ul>
                {improvements.map(item => <li key={item}>{item}</li>)}
              </ul>

              <h2>Use Cases for This Visual</h2>
              <p>The restored image was optimised for multiple commercial contexts:</p>
              <div className="use-case-grid">
                {useCases.map(u => (
                  <div key={u.label} className="use-case-item">
                    <strong>{u.label}</strong>
                    <span>{u.desc}</span>
                  </div>
                ))}
              </div>

              <h2>Why Image Restoration Matters for Luxury Products</h2>
              <p>
                In the luxury market, perception is everything. A product that looks premium in its visuals commands
                a higher price point and earns more trust from first-time buyers. For a fragrance like Oud Faizi —
                a rich, complex Extrait de Parfum — the visual must communicate the same depth and sophistication
                as the scent itself.
              </p>
              <p>
                The difference between an ordinary render and a professionally restored image can mean the difference
                between a scroll-past and a purchase decision. Small visual improvements create massive differences
                in customer perception and conversion rates.
              </p>

              <h2>Project Details</h2>
              <p>
                <strong>Client:</strong> Shahid Anwar — @Closetlux<br />
                <strong>Product:</strong> Closetlux Oud Faizi, 100ML Extrait de Parfum<br />
                <strong>Service:</strong> Image Restoration & Premium Visual Enhancement<br />
                <strong>Software:</strong> Adobe Photoshop<br />
                <strong>Date:</strong> June 27, 2026 · 09:15 AM<br />
                <strong>Output:</strong> Amazon, Shopify, LinkedIn Ads, Luxury Brand Marketing
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="border-2 border-[#0a0a0a] p-5 bg-[#0a0a0a]" style={{ boxShadow: '4px 4px 0px #e8e800' }}>
                <h3 className="font-bebas text-xl tracking-widest text-[#e8e800] mb-3">NEED SIMILAR WORK?</h3>
                <p className="font-mono text-xs text-[#f5f5f0]/60 leading-relaxed mb-4">
                  Transform your product renders into premium commercial visuals that drive real conversions.
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
                  ['Client', 'Shahid Anwar'],
                  ['Brand', '@Closetlux'],
                  ['Product', 'Oud Faizi Parfum'],
                  ['Date', 'Jun 27, 2026'],
                  ['Time', '09:15 AM'],
                  ['Software', 'Photoshop'],
                  ['Output', 'Commercial Ready'],
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
                    { title: 'Leather Items Optimized', slug: 'leather-items-optimized' },
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
            </aside>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-[#0a0a0a] py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8e800] mb-4">▶ READY TO ELEVATE YOUR PRODUCT VISUALS?</p>
            <h2 className="font-bebas text-[clamp(2rem,6vw,4rem)] leading-none text-[#f5f5f0] mb-6">
              TURN YOUR RENDERS INTO<br />PREMIUM COMMERCIAL VISUALS
            </h2>
            <p className="font-mono text-sm text-[#f5f5f0]/50 mb-8 max-w-lg mx-auto leading-relaxed">
              Sharper details, premium lighting, cleaner backgrounds — visuals that convert across Amazon, Shopify, and luxury brand marketing.
            </p>
            <Link
              href="/contact-me/"
              className="inline-block font-bebas text-base tracking-widest px-8 py-4 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[6px_6px_0px_#f5f5f0] transition-all"
            >
              GET STARTED →
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
            <div className="flex w-full max-w-5xl justify-between mb-3 px-1">
              <span className="font-mono text-[10px] tracking-widest bg-[#0a0a0a] text-[#f5f5f0] border border-[#f5f5f0]/20 px-3 py-1">BEFORE</span>
              <span className="font-mono text-[10px] tracking-widest bg-[#e8e800] text-[#0a0a0a] px-3 py-1">AFTER</span>
            </div>
            <img
              src={IMAGE}
              alt="Closetlux Oud Faizi — before and after image restoration full screen"
              className="max-w-5xl w-full max-h-[78vh] object-contain"
            />
            <p className="font-mono text-[9px] text-[#f5f5f0]/30 tracking-widest mt-4 text-center">
              CLOSETLUX OUD FAIZI · CLIENT: SHAHID ANWAR · PRESS ESC TO CLOSE
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        .prose-closetlux h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          letter-spacing: 0.05em;
          color: #0a0a0a;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          border-bottom: 2px solid #0a0a0a;
          padding-bottom: 0.4rem;
        }
        .prose-closetlux p {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          line-height: 1.95;
          color: rgba(10,10,10,0.65);
          margin-bottom: 1.2rem;
        }
        .prose-closetlux strong { color: #0a0a0a; font-weight: 700; }
        .prose-closetlux ul { list-style: none; padding: 0; margin-bottom: 1.5rem; }
        .prose-closetlux li {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          line-height: 1.85;
          color: rgba(10,10,10,0.65);
          margin-bottom: 0.6rem;
          padding-left: 1.2rem;
          position: relative;
        }
        .prose-closetlux li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #e8e800;
          font-size: 0.5rem;
          top: 0.38rem;
        }
        .use-case-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 480px) { .use-case-grid { grid-template-columns: 1fr; } }
        .use-case-item {
          border: 2px solid #0a0a0a;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .use-case-item strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          color: #0a0a0a;
        }
        .use-case-item span {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          line-height: 1.6;
          color: rgba(10,10,10,0.5);
        }
      `}</style>
    </>
  )
}
