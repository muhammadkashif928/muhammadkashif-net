'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const IMAGE = '/1776985426943.jpeg'

const workflow = [
  { arrow: '→', text: 'Took the basic raw product shots — lit casually, angled, on textured backgrounds' },
  { arrow: '→', text: 'Cleaned perspective & alignment in Photoshop for shape clarity and upright presentation' },
  { arrow: '→', text: 'Fixed lighting to match premium fragrance standards — no flat, no harsh shadows' },
  { arrow: '→', text: 'Removed distractions → pure white background for Amazon compliance' },
  { arrow: '→', text: 'Balanced reflections on the silver metalwork for a luxury, high-end feel' },
  { arrow: '→', text: 'Centered composition optimised for Amazon CTR — product fills the frame correctly' },
]

const principles = [
  {
    title: 'Shape Clarity',
    desc: 'The bottle silhouette must be instantly readable at thumbnail size. The Yara\'s cylindrical form and cross-wrap metalwork needed to read clearly even at 200×200px in search results.',
  },
  {
    title: 'Lighting Control',
    desc: 'Premium fragrances live or die on their lighting. The pink lacquer and silver elements each reflect light differently — too bright kills the pink depth; too dark loses the metalwork detail.',
  },
  {
    title: 'Premium Feel',
    desc: 'The first impression must communicate the price point before the buyer reads a single word. Every highlight, every shadow, every reflection is there to signal luxury quality.',
  },
  {
    title: 'Amazon CTR Optimisation',
    desc: 'Centering, white space management, and occupying 85%+ of the image frame — these are not aesthetic choices, they are conversion rate decisions guided by Amazon\'s own image best practices.',
  },
]

const shiftItems = [
  { from: 'Clean background', to: 'Shape clarity that reads at thumbnail size' },
  { from: 'Decent lighting', to: 'Lighting that signals price point before the buyer reads' },
  { from: '"Looks nice"', to: 'Makes them click — converts browsing into buying' },
  { from: 'Studio shoot', to: 'AI + Photoshop workflow — faster, cheaper, more control' },
]

export default function YaraLattafaPortfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e) => { if (e.key === 'Escape') setLightboxOpen(false) }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [lightboxOpen])

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: 'var(--b-bg)' }}>

        {/* ── Hero ── */}
        <div className="bg-[#0a0a0a] pt-24 pb-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <Link href="/my-portfolio/"
              className="font-mono text-xs tracking-widest text-[#f5f5f0]/40 hover:text-[#e8e800] transition-colors mb-6 inline-block">
              ← BACK TO PORTFOLIO
            </Link>
            <span className="block font-mono text-[10px] tracking-[0.35em] text-[#e8e800] mb-4 uppercase">
              ▶ Amazon Main Image · AI + Photoshop · Conversion Optimisation
            </span>
            <h1 className="font-bebas leading-none text-[#f5f5f0]" style={{ fontSize: 'clamp(2.2rem,6.5vw,5rem)' }}>
              YARA BY LATTAFA<br />
              <span style={{ WebkitTextStroke: '2px #f5f5f0', color: 'transparent' }}>AMAZON MAIN IMAGE</span>
            </h1>
            <p className="font-mono text-sm text-[#f5f5f0]/60 mt-5 max-w-2xl leading-relaxed">
              Redesigned in minutes — no studio shoot, no complex setup, no endless revisions.
              Just a smarter workflow. Raw product shots transformed into a scroll-stopping Amazon main image
              for <strong className="text-[#f5f5f0]/80">Yara by Lattafa</strong> Eau de Parfum using
              AI-assisted cleanup and Photoshop precision.
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-10 pt-8 border-t border-[#f5f5f0]/10">
              {[
                { label: 'PRODUCT', value: 'Yara by Lattafa EDP 100ML' },
                { label: 'DATE', value: 'Jun 27, 2026' },
                { label: 'TIME', value: '09:29 AM' },
                { label: 'SOFTWARE', value: 'AI + Adobe Photoshop' },
                { label: 'OUTPUT', value: 'Amazon Main Image' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-mono text-[9px] tracking-[0.3em] text-[#f5f5f0]/30">{s.label}</p>
                  <p className="font-mono text-xs text-[#e8e800] mt-1 font-bold">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main Image ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-4">
            ▶ RAW SHOTS → AMAZON MAIN IMAGE · CLICK TO ZOOM
          </p>
          <div className="grid md:grid-cols-[1fr_2fr] gap-4 sm:gap-6 items-start">

            {/* Annotation column */}
            <div className="space-y-4 md:pt-2">
              <div className="border-2 border-[#0a0a0a] p-4 bg-white" style={{ boxShadow: '3px 3px 0 #0a0a0a' }}>
                <span className="font-mono text-[9px] tracking-[0.2em] bg-[#0a0a0a] text-[#f5f5f0] px-2 py-0.5 inline-block mb-2">RAW INPUTS</span>
                <p className="font-mono text-[10px] text-[#0a0a0a]/60 leading-relaxed">
                  Two casual product shots — textured backgrounds, uneven angles, inconsistent lighting.
                  Not sellable as-is.
                </p>
              </div>
              <div className="border-2 border-[#0a0a0a] p-4 bg-[#0a0a0a]" style={{ boxShadow: '3px 3px 0 #e8e800' }}>
                <span className="font-mono text-[9px] tracking-[0.2em] bg-[#e8e800] text-[#0a0a0a] px-2 py-0.5 inline-block mb-2">WORKFLOW</span>
                <p className="font-mono text-[10px] text-[#f5f5f0]/60 leading-relaxed">
                  Ai + Photoshop — AI for background removal and initial cleanup; Photoshop for
                  precision lighting, reflections, centering, and final polish.
                </p>
              </div>
              <div className="border-2 border-[#0a0a0a] p-4 bg-[#f5f5f0]" style={{ boxShadow: '3px 3px 0 #0a0a0a' }}>
                <span className="font-mono text-[9px] tracking-[0.2em] bg-[#0a0a0a] text-[#e8e800] px-2 py-0.5 inline-block mb-2">RESULT</span>
                <p className="font-mono text-[10px] text-[#0a0a0a]/60 leading-relaxed">
                  Amazon-compliant main image. Pure white background. CTR-optimised framing. Scroll-stopping
                  luxury finish — done in minutes, not days.
                </p>
              </div>
            </div>

            {/* Image */}
            <div
              className="relative cursor-zoom-in border-2 border-[#0a0a0a] overflow-hidden group bg-white"
              style={{ boxShadow: '6px 6px 0 #0a0a0a' }}
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={IMAGE}
                alt="Yara by Lattafa Eau de Parfum — raw product shots transformed into Amazon main image using AI and Photoshop"
                className="w-full object-contain bg-white"
                width="1280"
                height="1918"
                fetchPriority="high"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0a0a0a]/15">
                <span className="font-mono text-xs tracking-widest text-white border border-white/60 px-4 py-2 bg-[#0a0a0a]/50">
                  ⊕ CLICK TO VIEW FULL SCREEN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Workflow Steps ── */}
        <div className="border-t-2 border-[#0a0a0a] bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8e800]/60 mb-6">▶ THE EXACT WORKFLOW</p>
            <div className="flex flex-col gap-0">
              {workflow.map((step, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-[#f5f5f0]/8 py-4 last:border-0">
                  <span className="font-bebas text-2xl text-[#e8e800] leading-none shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-mono text-[11px] text-[#f5f5f0]/65 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4 Principles ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-2">▶ WHAT MOST PEOPLE GET WRONG</p>
          <h2 className="font-bebas text-[clamp(1.6rem,4vw,2.5rem)] text-[#0a0a0a] leading-tight mb-8">
            MAIN IMAGES ARE NOT JUST ABOUT<br />"CLEAN BACKGROUND"
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <div key={i} className="border-2 border-[#0a0a0a] p-5" style={{ boxShadow: '4px 4px 0 #0a0a0a' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[9px] text-[#e8e800] bg-[#0a0a0a] px-1.5 py-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-bebas text-lg tracking-wide text-[#0a0a0a]">{p.title}</h3>
                </div>
                <p className="font-mono text-[10px] text-[#0a0a0a]/55 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── The Shift ── */}
        <div className="border-t-2 border-[#0a0a0a] border-b-2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-2">▶ THE GAME IS SHIFTING</p>
            <h2 className="font-bebas text-[clamp(1.6rem,4vw,2.5rem)] text-[#0a0a0a] leading-tight mb-8">
              FROM "MAKE IT LOOK NICE"<br />TO "MAKE IT CONVERT"
            </h2>
            <div className="flex flex-col gap-0">
              {shiftItems.map((item, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto_1fr] items-center border-t border-[#0a0a0a]/10 py-4 gap-4">
                  <div className="border border-[#0a0a0a]/20 px-3 py-2 text-center">
                    <span className="font-mono text-[10px] text-[#0a0a0a]/40 block mb-0.5 tracking-widest">BEFORE</span>
                    <span className="font-mono text-[10px] text-[#0a0a0a]/60">{item.from}</span>
                  </div>
                  <span className="font-bebas text-xl text-[#e8e800] bg-[#0a0a0a] px-3 py-1.5">→</span>
                  <div className="border-2 border-[#0a0a0a] px-3 py-2 text-center bg-white">
                    <span className="font-mono text-[10px] text-[#e8e800] bg-[#0a0a0a] px-1.5 py-0.5 block mb-1 text-[8px] tracking-widest w-fit mx-auto">AFTER</span>
                    <span className="font-mono text-[10px] text-[#0a0a0a] font-bold">{item.to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Written content + Sidebar ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-[1fr_260px] gap-10 sm:gap-14">

            <div className="prose-yara">
              <h2>The Smarter Workflow</h2>
              <p>
                The Yara by Lattafa is a premium fragrance — a rose-pink cylindrical bottle with intricate
                silver cross-wrap metalwork, Arabic calligraphy, and an ornate medallion. It is a premium-looking
                product. But the raw shots buried all of that: textured backgrounds, tilted angles, and flat
                ambient lighting that made it look like any other online listing.
              </p>
              <p>
                The redesign took minutes — not because the work was trivial, but because the workflow was smart.
                AI handled the heavy lifting on background removal and initial cleanup. Photoshop handled the
                precision: lighting balance, reflection control on the silver elements, centering, and the subtle
                drop shadow that grounds the bottle without making it look fake.
              </p>

              <h2>Your Main Image Is Your First Sale</h2>
              <p>
                On Amazon, your main image is not one of many assets. It is the only thing a buyer sees
                before they decide whether to click. It appears in search results, in sponsored ads, in
                competitor comparisons. It is your first impression, your first click, and your first sale —
                all in a single square image.
              </p>
              <p>
                Getting it wrong means paying for traffic that doesn't convert. Getting it right means your
                product competes at the level it deserves — regardless of your listing age or review count.
              </p>

              <h2>AI Helped. But the Real Edge Is Knowing What to Fix</h2>
              <p>
                AI accelerates the workflow. But AI doesn't know that the silver metalwork needs to read
                differently from the pink lacquer. It doesn't know that centering the bottle 3% to the right
                improves visual balance. It doesn't know that Amazon's zoom feature means the label text needs
                to be readable at 400% scale.
              </p>
              <p>
                The edge — right now and increasingly in the future — is not who has access to the tools.
                It's who understands Amazon's rules, buyer psychology, and conversion design well enough
                to know exactly what to fix and what not to touch.
              </p>

              <h2>Project Details</h2>
              <p>
                <strong>Product:</strong> Yara by Lattafa — Eau de Parfum, Natural Spray, 100ML / 3.4 FL OZ<br />
                <strong>Service:</strong> Amazon Main Image Redesign &amp; Optimisation<br />
                <strong>Software:</strong> AI + Adobe Photoshop<br />
                <strong>Date:</strong> June 27, 2026 · 09:29 AM<br />
                <strong>Output:</strong> Amazon main image — white background, CTR-optimised, scroll-stopping
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="border-2 border-[#0a0a0a] p-5 bg-[#0a0a0a]" style={{ boxShadow: '4px 4px 0px #e8e800' }}>
                <h3 className="font-bebas text-xl tracking-widest text-[#e8e800] mb-3">YOUR MAIN IMAGE ISN'T CONVERTING?</h3>
                <p className="font-mono text-xs text-[#f5f5f0]/60 leading-relaxed mb-4">
                  Let's redesign it. Fast, precise, Amazon-compliant — and built to make buyers click.
                </p>
                <Link href="/contact-me/"
                  className="block font-bebas text-sm tracking-widest text-center px-4 py-3 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[4px_4px_0px_#f5f5f0] transition-all">
                  START YOUR PROJECT →
                </Link>
              </div>

              <div className="border-2 border-[#0a0a0a] p-5" style={{ boxShadow: '4px 4px 0px #0a0a0a' }}>
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-3">PROJECT INFO</h3>
                {[
                  ['Product', 'Yara by Lattafa'],
                  ['Type', 'EDP 100ML / 3.4 FL OZ'],
                  ['Date', 'Jun 27, 2026'],
                  ['Time', '09:29 AM'],
                  ['Software', 'AI + Photoshop'],
                  ['Output', 'Amazon Main Image'],
                  ['Background', 'Pure White'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-start border-b border-[#0a0a0a]/10 py-2 last:border-0 gap-2">
                    <span className="font-mono text-[9px] text-[#0a0a0a]/40 shrink-0">{k}</span>
                    <span className="font-mono text-[9px] text-[#0a0a0a] font-bold text-right">{v}</span>
                  </div>
                ))}
              </div>

              {/* Key stats */}
              <div className="border-2 border-[#0a0a0a] p-5 bg-[#f5f5f0]">
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-3">WHY MAIN IMAGE MATTERS</h3>
                {[
                  ['First touchpoint', 'In search, ads, and comparisons'],
                  ['85%+ frame fill', 'Amazon best practice for CTR'],
                  ['Zoom-ready', 'Label readable at 400% scale'],
                  ['No studio needed', 'AI + Photoshop in minutes'],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-[#0a0a0a]/10 py-2.5 last:border-0">
                    <p className="font-bebas text-sm tracking-wide text-[#0a0a0a]">{k}</p>
                    <p className="font-mono text-[9px] text-[#0a0a0a]/50">{v}</p>
                  </div>
                ))}
              </div>

              <div className="border-2 border-[#0a0a0a] p-5">
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-4">MORE PROJECTS</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { title: 'Jason Markk Lifestyle Composite', slug: 'jason-markk-lifestyle-composite' },
                    { title: 'Closetlux Image Restoration', slug: 'closetlux-image-restoration' },
                    { title: 'Perfume Oil Bottle Retouching', slug: 'perfume-oil-bottle-retouching' },
                    { title: 'Leather Items Optimized', slug: 'leather-items-optimized' },
                  ].map(p => (
                    <Link key={p.slug} href={`/blackdsn-portfolio/${p.slug}/`}
                      className="font-mono text-xs text-[#0a0a0a] hover:text-[#0a0a0a]/60 border-b border-[#0a0a0a]/10 pb-2 transition-colors">
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
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8e800] mb-4">▶ YOUR MAIN IMAGE IS YOUR FIRST SALE</p>
            <h2 className="font-bebas text-[clamp(2rem,6vw,4rem)] leading-none text-[#f5f5f0] mb-6">
              MAKE IT CONVERT.<br />NOT JUST LOOK NICE.
            </h2>
            <p className="font-mono text-sm text-[#f5f5f0]/50 mb-8 max-w-lg mx-auto leading-relaxed">
              AI + Photoshop workflow. Amazon rules + buyer psychology. Scroll-stopping main images that actually drive clicks and sales.
            </p>
            <Link href="/contact-me/"
              className="inline-block font-bebas text-base tracking-widest px-8 py-4 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[6px_6px_0px_#f5f5f0] transition-all">
              REDESIGN MY MAIN IMAGE →
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
          role="dialog" aria-modal="true"
        >
          <button onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 font-mono text-xs tracking-widest text-[#f5f5f0]/60 hover:text-[#e8e800] border border-[#f5f5f0]/20 hover:border-[#e8e800] px-3 py-2 transition-all z-10">
            ✕ CLOSE
          </button>
          <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 py-16"
            onClick={e => e.stopPropagation()}>
            <p className="font-mono text-[9px] tracking-widest text-[#e8e800] mb-3">YARA BY LATTAFA · AMAZON MAIN IMAGE · AI + PHOTOSHOP</p>
            <img src={IMAGE}
              alt="Yara by Lattafa — raw shots to Amazon main image full screen"
              className="max-h-[82vh] w-auto object-contain" />
            <p className="font-mono text-[9px] text-[#f5f5f0]/30 tracking-widest mt-4 text-center">
              PRESS ESC TO CLOSE
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        .prose-yara h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          letter-spacing: 0.05em;
          color: #0a0a0a;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          border-bottom: 2px solid #0a0a0a;
          padding-bottom: 0.4rem;
        }
        .prose-yara p {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          line-height: 1.95;
          color: rgba(10,10,10,0.65);
          margin-bottom: 1.2rem;
        }
        .prose-yara strong { color: #0a0a0a; font-weight: 700; }
      `}</style>
    </>
  )
}
