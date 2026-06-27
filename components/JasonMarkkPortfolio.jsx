'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const IMAGES = [
  {
    src: '/1768694862919.jpeg',
    label: 'BEFORE',
    badge: 'bg-[#0a0a0a] text-[#f5f5f0]',
    title: 'Before — Clean Product Shot',
    desc: 'Standard white-background product image. Clear and Amazon-compliant — but no story.',
  },
  {
    src: '/1768694867521.jpeg',
    label: 'AFTER',
    badge: 'bg-[#e8e800] text-[#0a0a0a]',
    title: 'After — AI + Photoshop Lifestyle Composite',
    desc: 'HOKA sneaker prop composited behind the spray bottle using AI generation and Photoshop retouching. Context creates desire.',
  },
  {
    src: '/1768694869921.jpeg',
    label: 'COMPARISON',
    badge: 'bg-[#f5f5f0] text-[#0a0a0a]',
    title: 'Before vs After — Comparison Card',
    desc: 'Side-by-side: left is clarity, right is story. The after image tells buyers exactly how this product fits into their life.',
  },
]

const approach = [
  { step: '01', title: 'Analyse the Product Use Case', desc: 'Jason Markk Repel is a shoe and sneaker protector. The target buyer is a sneakerhead or footwear enthusiast. A sneaker prop was the obvious, contextually relevant choice.' },
  { step: '02', title: 'Generate the Prop with AI', desc: 'A HOKA sneaker in matching white/neutral tones was generated using AI image generation tools, sized and positioned to work harmoniously with the spray bottle.' },
  { step: '03', title: 'Composite in Photoshop', desc: 'The AI-generated sneaker was composited behind the product in Photoshop — depth, shadow, and lighting adjusted so both elements feel like they were photographed together.' },
  { step: '04', title: 'Refine & Balance', desc: 'Final colour grading, shadow softening, and edge refinement applied to ensure the product remains the focal point while the prop adds context without distraction.' },
]

export default function JasonMarkkPortfolio() {
  const [lightbox, setLightbox] = useState(null) // index into IMAGES
  const touchStartX = useRef(null)

  const close = useCallback(() => setLightbox(null), [])
  const next = useCallback(() => setLightbox(i => (i + 1) % IMAGES.length), [])
  const prev = useCallback(() => setLightbox(i => (i - 1 + IMAGES.length) % IMAGES.length), [])

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [lightbox, close, next, prev])

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) dx > 0 ? prev() : next()
    touchStartX.current = null
  }

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
              ▶ AI + Photoshop · Lifestyle Composite · Product Image Optimization
            </span>
            <h1 className="font-bebas leading-none text-[#f5f5f0]" style={{ fontSize: 'clamp(2.2rem,6.5vw,5rem)' }}>
              JASON MARKK REPEL<br />
              <span style={{ WebkitTextStroke: '2px #f5f5f0', color: 'transparent' }}>LIFESTYLE COMPOSITE</span>
            </h1>
            <p className="font-mono text-sm text-[#f5f5f0]/60 mt-5 max-w-2xl leading-relaxed">
              Left or right — which makes you click Buy? Context creates desire. The left is clarity;
              the right is a story. Using a mix of AI generation and Photoshop compositing, a standard product
              shot was transformed into a lifestyle visual that instantly communicates what the product is
              for and how it fits into the buyer's life.
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-10 pt-8 border-t border-[#f5f5f0]/10">
              {[
                { label: 'PRODUCT', value: 'Jason Markk Repel Spray' },
                { label: 'DATE', value: 'Jun 27, 2026' },
                { label: 'TIME', value: '09:25 AM' },
                { label: 'SOFTWARE', value: 'AI Generation + Photoshop' },
                { label: 'TECHNIQUE', value: 'Lifestyle Composite' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-mono text-[9px] tracking-[0.3em] text-[#f5f5f0]/30">{s.label}</p>
                  <p className="font-mono text-xs text-[#e8e800] mt-1 font-bold">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Comparison Card (hero visual) ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-4">▶ BEFORE vs AFTER — WHICH MAKES YOU CLICK BUY?</p>
          <div
            className="relative cursor-zoom-in border-2 border-[#0a0a0a] overflow-hidden group bg-white"
            style={{ boxShadow: '6px 6px 0px #0a0a0a' }}
            onClick={() => setLightbox(2)}
          >
            <img
              src={IMAGES[2].src}
              alt="Jason Markk Repel Spray — before and after product image optimization comparison card"
              className="w-full object-contain bg-white"
              width="1080"
              height="1080"
              fetchPriority="high"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0a0a0a]/15">
              <span className="font-mono text-xs tracking-widest text-white border border-white/60 px-4 py-2 bg-[#0a0a0a]/50">
                ⊕ CLICK TO ZOOM FULL SCREEN
              </span>
            </div>
          </div>
        </div>

        {/* ── Before / After side-by-side ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-4">▶ INDIVIDUAL IMAGES — CLICK TO ZOOM</p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {IMAGES.slice(0, 2).map((img, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div
                  className="relative cursor-zoom-in border-2 border-[#0a0a0a] overflow-hidden group bg-white aspect-square"
                  style={{ boxShadow: '4px 4px 0px #0a0a0a' }}
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-contain bg-white"
                    loading="lazy"
                    width="1080"
                    height="1080"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className={`font-mono text-[8px] sm:text-[9px] tracking-[0.2em] px-2 py-1 ${img.badge}`}>
                      {img.label}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0a0a0a]/20">
                    <span className="font-mono text-[10px] tracking-widest text-white border border-white/60 px-3 py-1.5">⊕ ZOOM</span>
                  </div>
                </div>
                <div className="px-1">
                  <p className="font-bebas text-sm sm:text-base tracking-wide text-[#0a0a0a] leading-tight">{img.title}</p>
                  <p className="font-mono text-[9px] text-[#0a0a0a]/50 leading-relaxed mt-1">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Process Steps ── */}
        <div className="border-t-2 border-[#0a0a0a]" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8e800]/60 mb-6">▶ THE PROCESS — AI + PHOTOSHOP COMPOSITING</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {approach.map((s) => (
                <div key={s.step} className="border border-[#f5f5f0]/10 p-5">
                  <div className="font-bebas text-3xl leading-none text-[#e8e800]/30 mb-2">{s.step}</div>
                  <h3 className="font-bebas text-lg tracking-wide text-[#f5f5f0] mb-2">{s.title}</h3>
                  <p className="font-mono text-[10px] text-[#f5f5f0]/45 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Written content + Sidebar ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-[1fr_260px] gap-10 sm:gap-14">

            <div className="prose-jason">
              <h2>Context Creates Desire</h2>
              <p>
                The original Jason Markk Repel image is a technically correct product shot — clean white background,
                good centering, label readable. It does its job. But it does not <em>sell</em>.
              </p>
              <p>
                The buyer looking at a sneaker protector spray already owns sneakers they care about. The moment
                you show the product beside a pair of premium sneakers, you are not just showing them what they
                are buying — you are showing them the outcome. The shoe they love, protected. That is desire, not clarity.
              </p>

              <h2>Why AI + Photoshop is the Right Tool for This</h2>
              <p>
                Traditional lifestyle compositing would require sourcing a physical prop, arranging a studio shoot,
                and reshooting the product in context — expensive, slow, and inflexible. Using AI generation to
                create the sneaker prop and Photoshop to composite it precisely gives us:
              </p>
              <ul>
                <li><strong>Speed</strong> — prop generation and compositing in a fraction of the time of a studio shoot</li>
                <li><strong>Control</strong> — exact color, tone, and angle chosen to complement the product</li>
                <li><strong>Cost efficiency</strong> — no studio, no photographer, no physical prop required</li>
                <li><strong>Flexibility</strong> — any number of prop variants (different sneaker styles, colors) easily testable for A/B optimization</li>
              </ul>

              <h2>Is AI Becoming Essential for Product Retouching?</h2>
              <p>
                AI is not replacing the designer — it is removing the friction between creative concept and
                execution. The judgement of <em>what prop to use</em>, <em>where to position it</em>,
                <em>how to light it</em>, and <em>how to make it feel real</em> — that is still the designer's
                work. AI just means you can test and iterate 10× faster.
              </p>
              <p>
                For product image optimization in 2026, AI generation combined with professional Photoshop compositing
                is not a shortcut — it is the new professional standard.
              </p>

              <h2>Project Details</h2>
              <p>
                <strong>Product:</strong> Jason Markk Shoe &amp; Sneaker Protector Repel Spray<br />
                <strong>Prop:</strong> HOKA Clifton sneaker (AI-generated, composited)<br />
                <strong>Technique:</strong> AI prop generation + Photoshop compositing<br />
                <strong>Software:</strong> AI Image Generation + Adobe Photoshop<br />
                <strong>Date:</strong> June 27, 2026 · 09:25 AM<br />
                <strong>Output:</strong> Amazon listing image, social media creative, A/B test variant
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="border-2 border-[#0a0a0a] p-5 bg-[#0a0a0a]" style={{ boxShadow: '4px 4px 0px #e8e800' }}>
                <h3 className="font-bebas text-xl tracking-widest text-[#e8e800] mb-3">WANT LIFESTYLE COMPOSITES?</h3>
                <p className="font-mono text-xs text-[#f5f5f0]/60 leading-relaxed mb-4">
                  Turn your product shots into story-driven visuals using AI + Photoshop — faster and more cost-effective than a studio shoot.
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
                  ['Product', 'Jason Markk Repel Spray'],
                  ['Date', 'Jun 27, 2026'],
                  ['Time', '09:25 AM'],
                  ['Software', 'AI + Photoshop'],
                  ['Technique', 'Lifestyle Composite'],
                  ['Prop', 'HOKA Sneaker (AI)'],
                  ['Output', 'Amazon / Social Media'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-start border-b border-[#0a0a0a]/10 py-2 last:border-0 gap-2">
                    <span className="font-mono text-[9px] text-[#0a0a0a]/40 shrink-0">{k}</span>
                    <span className="font-mono text-[9px] text-[#0a0a0a] font-bold text-right">{v}</span>
                  </div>
                ))}
              </div>

              {/* Images count */}
              <div className="border-2 border-[#0a0a0a] p-5">
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-3">IMAGES IN THIS PROJECT</h3>
                {IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className="w-full flex items-center gap-3 border-b border-[#0a0a0a]/10 py-2.5 last:border-0 hover:bg-[#f5f5f0] transition-colors text-left"
                  >
                    <img src={img.src} alt={img.title} className="w-10 h-10 object-cover border border-[#0a0a0a]/10 shrink-0" />
                    <div className="min-w-0">
                      <span className={`font-mono text-[8px] tracking-widest px-1.5 py-0.5 ${img.badge} inline-block mb-0.5`}>{img.label}</span>
                      <p className="font-mono text-[9px] text-[#0a0a0a] leading-tight truncate">{img.title}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="border-2 border-[#0a0a0a] p-5">
                <h3 className="font-bebas text-lg tracking-widest text-[#0a0a0a] mb-4">MORE PROJECTS</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { title: 'Closetlux Image Restoration', slug: 'closetlux-image-restoration' },
                    { title: 'Perfume Oil Bottle Retouching', slug: 'perfume-oil-bottle-retouching' },
                    { title: 'Leather Items Optimized', slug: 'leather-items-optimized' },
                    { title: 'AI & Creative Retouching', slug: 'ai-creative-retouching' },
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
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8e800] mb-4">▶ YOUR PRODUCT DESERVES A STORY, NOT JUST A PHOTO</p>
            <h2 className="font-bebas text-[clamp(2rem,6vw,4rem)] leading-none text-[#f5f5f0] mb-6">
              CONTEXT CREATES DESIRE.<br />LET'S BUILD YOURS.
            </h2>
            <p className="font-mono text-sm text-[#f5f5f0]/50 mb-8 max-w-lg mx-auto leading-relaxed">
              AI + Photoshop lifestyle composites that tell buyers exactly what your product is for — and make them click Buy.
            </p>
            <Link href="/contact-me/"
              className="inline-block font-bebas text-base tracking-widest px-8 py-4 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:shadow-[6px_6px_0px_#f5f5f0] transition-all">
              GET YOUR COMPOSITE MADE →
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a]/97 backdrop-blur-sm"
          role="dialog" aria-modal="true"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#f5f5f0]/10 shrink-0">
            <div>
              <p className="font-mono text-[9px] tracking-widest text-[#e8e800]">JASON MARKK REPEL SPRAY</p>
              <p className="font-bebas text-base sm:text-lg tracking-wide text-[#f5f5f0] leading-tight">{IMAGES[lightbox].title}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0 ml-3">
              <span className="font-mono text-xs text-[#f5f5f0]/40 hidden sm:block">{lightbox + 1} / {IMAGES.length}</span>
              <button onClick={close}
                className="font-mono text-xs tracking-widest text-[#f5f5f0]/60 hover:text-[#e8e800] border border-[#f5f5f0]/20 hover:border-[#e8e800] px-3 py-2 transition-all">
                ✕ CLOSE
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden px-12 sm:px-16 py-4">
            <button onClick={prev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 font-mono text-lg sm:text-2xl text-[#f5f5f0]/50 hover:text-[#e8e800] w-9 sm:w-12 h-9 sm:h-12 flex items-center justify-center border border-[#f5f5f0]/10 hover:border-[#e8e800] transition-all">
              ←
            </button>
            <div className="relative">
              <img
                key={IMAGES[lightbox].src}
                src={IMAGES[lightbox].src}
                alt={IMAGES[lightbox].title}
                className="max-w-full max-h-[calc(100vh-200px)] object-contain"
              />
              <div className="absolute top-3 left-3">
                <span className={`font-mono text-[10px] tracking-widest px-3 py-1.5 font-bold ${IMAGES[lightbox].badge}`}>
                  {IMAGES[lightbox].label}
                </span>
              </div>
            </div>
            <button onClick={next}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 font-mono text-lg sm:text-2xl text-[#f5f5f0]/50 hover:text-[#e8e800] w-9 sm:w-12 h-9 sm:h-12 flex items-center justify-center border border-[#f5f5f0]/10 hover:border-[#e8e800] transition-all">
              →
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="shrink-0 border-t border-[#f5f5f0]/10 px-4 py-3">
            <div className="flex gap-2 justify-center">
              {IMAGES.map((img, i) => (
                <button key={i} onClick={() => setLightbox(i)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 overflow-hidden border-2 transition-all shrink-0 ${i === lightbox ? 'border-[#e8e800] opacity-100' : 'border-[#f5f5f0]/10 opacity-50 hover:opacity-80'}`}>
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <p className="font-mono text-[9px] text-[#f5f5f0]/30 text-center mt-2 tracking-widest hidden sm:block">
              ← → ARROW KEYS · ESC TO CLOSE
            </p>
            <p className="font-mono text-[9px] text-[#f5f5f0]/30 text-center mt-2 tracking-widest sm:hidden">
              {lightbox + 1} / {IMAGES.length} · SWIPE TO NAVIGATE
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        .prose-jason h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          letter-spacing: 0.05em;
          color: #0a0a0a;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          border-bottom: 2px solid #0a0a0a;
          padding-bottom: 0.4rem;
        }
        .prose-jason p {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          line-height: 1.95;
          color: rgba(10,10,10,0.65);
          margin-bottom: 1.2rem;
        }
        .prose-jason em { font-style: italic; }
        .prose-jason strong { color: #0a0a0a; font-weight: 700; }
        .prose-jason ul { list-style: none; padding: 0; margin-bottom: 1.5rem; }
        .prose-jason li {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          line-height: 1.85;
          color: rgba(10,10,10,0.65);
          margin-bottom: 0.6rem;
          padding-left: 1.2rem;
          position: relative;
        }
        .prose-jason li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #e8e800;
          font-size: 0.5rem;
          top: 0.38rem;
        }
      `}</style>
    </>
  )
}
