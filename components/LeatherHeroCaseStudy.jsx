import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import CaseStudyResults from '@/components/CaseStudyResults'
import {
  results,
  showPendingState,
  meta,
  beforeImages,
  afterImages,
  changes,
  problemParagraphs,
  detailParagraphs,
} from '@/data/case-studies/leather-hero'

const featureImage = afterImages.find((img) => img.feature) ?? afterImages[0]

export default function LeatherHeroCaseStudy() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── 1. HERO ─────────────────────────────────────────────── */}
        <section className="pt-24" style={{ backgroundColor: 'var(--a-bg)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <Link
              href="/my-portfolio/"
              className="font-mono text-xs tracking-widest mb-8 inline-block underline-anim"
              style={{ color: 'var(--a-muted)' }}
            >
              ← BACK TO PORTFOLIO
            </Link>

            <div className="grid lg:grid-cols-[1fr_minmax(0,480px)] gap-10 lg:gap-16 items-start">
              <div>
                <p className="font-mono text-xs tracking-[0.35em] mb-4" style={{ color: 'var(--a-muted)' }}>
                  ▶ AMAZON LISTING DESIGN · LEATHER &amp; WOOD FURNITURE CARE
                </p>
                <h1
                  className="font-bebas leading-none"
                  style={{ fontSize: 'clamp(2.75rem,8vw,6rem)', color: 'var(--a-text)' }}
                >
                  LEATHER HERO
                  <br />
                  <span style={{ WebkitTextStroke: '2px var(--a-text)', color: 'transparent' }}>
                    FURNITURE SALVE
                  </span>
                </h1>
                <p
                  className="font-mono text-sm sm:text-base leading-relaxed mt-6 max-w-xl"
                  style={{ color: 'var(--a-muted)' }}
                >
                  A restoration product whose listing never showed a restoration — rebuilt
                  from four images into a full ten-slot set built around proof.
                </p>

                <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 mt-10 pt-8 border-t" style={{ borderColor: 'var(--a-border)' }}>
                  {[
                    ['CLIENT', meta.client],
                    ['PRODUCT', meta.product],
                    ['CATEGORY', meta.category],
                    ['MARKETPLACE', meta.marketplace],
                    ['SCOPE', meta.scope],
                    ['PUBLISHED', meta.published],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-mono text-[10px] tracking-[0.3em]" style={{ color: 'var(--a-muted)' }}>
                        {label}
                      </dt>
                      <dd className="font-mono text-xs mt-2 leading-relaxed" style={{ color: 'var(--a-text)' }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Feature asset — the penetration cross-section */}
              <div
                className="relative w-full border-2"
                style={{ aspectRatio: '1 / 1', borderColor: 'var(--a-border)' }}
              >
                <Image
                  src={featureImage.src}
                  alt={featureImage.alt}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. THE PROBLEM ──────────────────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>
              ▶ THE PROBLEM
            </p>
            <h2
              className="font-bebas leading-none mb-10 sm:mb-14"
              style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--b-text)' }}
            >
              WHAT THE
              <br />
              LISTING WAS
              <br />
              <span style={{ WebkitTextStroke: '2px var(--b-text)', color: 'transparent' }}>COSTING THEM</span>
            </h2>
            <div className="max-w-2xl space-y-6">
              {problemParagraphs.map((p, i) => (
                <p key={i} className="font-mono text-sm sm:text-base leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. BEFORE / AFTER ───────────────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>
              ▶ BEFORE / AFTER
            </p>
            <h2
              className="font-bebas leading-none mb-10 sm:mb-14"
              style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--b-text)' }}
            >
              THE SET,
              <br />
              SIDE BY SIDE
            </h2>

            {/* 3a — interactive comparison */}
            <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14 items-start">
              <BeforeAfterSlider
                before={beforeImages[0]}
                after={afterImages[0]}
                beforeLabel="ORIGINAL"
                afterLabel="REDESIGNED"
                sizes="(min-width: 1024px) 800px, 100vw"
              />
              <div className="lg:pt-4">
                <h3 className="font-bebas text-xl sm:text-2xl tracking-widest mb-4" style={{ color: 'var(--b-text)' }}>
                  THE MAIN IMAGE
                </h3>
                <p className="font-mono text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                  Same three pieces, same white background, same Amazon policy. What
                  changes is legibility at thumbnail size — the tin face turned toward
                  the camera, the brush lifted clear of the pad instead of crossing it,
                  and the pad given its own silhouette rather than sitting flat behind
                  everything else.
                </p>
              </div>
            </div>

            {/* 3b — coverage jump */}
            <div className="mt-16 sm:mt-24 pt-12 border-t" style={{ borderColor: 'var(--b-border)' }}>
              <h3 className="font-bebas text-2xl sm:text-3xl tracking-widest mb-2" style={{ color: 'var(--b-text)' }}>
                COVERAGE: 4 SLOTS → 10 SLOTS
              </h3>
              <p className="font-mono text-xs sm:text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--b-muted)' }}>
                The originals are on top, the replacement set below. The point isn’t only
                that there are more of them — it’s that no two of the ten are doing the
                same job.
              </p>

              <div className="space-y-10">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] mb-4" style={{ color: 'var(--b-muted)' }}>
                    WAS — 4 IMAGES
                  </p>
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl">
                    {beforeImages.map((img) => (
                      <div
                        key={img.src}
                        className="relative border-2"
                        style={{ aspectRatio: '1 / 1', borderColor: 'var(--b-border)' }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          loading="lazy"
                          sizes="(min-width: 768px) 160px, 24vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] mb-4" style={{ color: 'var(--b-text)' }}>
                    NOW — 10 IMAGES
                  </p>
                  <div className="grid grid-cols-5 gap-2 sm:gap-4">
                    {afterImages.map((img) => (
                      <div
                        key={img.src}
                        className="relative border-2"
                        style={{
                          aspectRatio: '1 / 1',
                          borderColor: img.feature ? 'var(--b-text)' : 'var(--b-border)',
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          loading="lazy"
                          sizes="(min-width: 768px) 200px, 19vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3c — the full set with strategic captions */}
            <div className="mt-16 sm:mt-24 pt-12 border-t" style={{ borderColor: 'var(--b-border)' }}>
              <h3 className="font-bebas text-2xl sm:text-3xl tracking-widest mb-2" style={{ color: 'var(--b-text)' }}>
                WHAT EACH SLOT IS FOR
              </h3>
              <p className="font-mono text-xs sm:text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--b-muted)' }}>
                Ten images, ten different objections. Every slot in a listing is a
                question the buyer hasn’t asked out loud yet.
              </p>

              <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 list-none p-0">
                {afterImages.map((img) => (
                  <li
                    key={img.src}
                    className="border-2 overflow-hidden flex flex-col"
                    style={{
                      borderColor: img.feature ? 'var(--b-text)' : 'var(--b-border)',
                      boxShadow: img.feature
                        ? '6px 6px 0px var(--b-text)'
                        : '4px 4px 0px var(--b-border)',
                    }}
                  >
                    <div className="relative w-full" style={{ aspectRatio: '1 / 1', backgroundColor: 'var(--b-subtle)' }}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                      {img.feature && (
                        <span
                          className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.2em] px-2 py-1 border"
                          style={{
                            backgroundColor: 'var(--b-bg)',
                            color: 'var(--b-text)',
                            borderColor: 'var(--b-text)',
                          }}
                        >
                          ★ THE ONE
                        </span>
                      )}
                    </div>
                    <div className="p-5 sm:p-6 border-t flex-1" style={{ borderColor: 'var(--b-border)' }}>
                      <p className="font-mono text-[10px] tracking-[0.2em] mb-3" style={{ color: 'var(--b-text)' }}>
                        {img.slot}
                      </p>
                      <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                        {img.caption}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 4. WHAT I CHANGED ───────────────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>
              ▶ WHAT I CHANGED
            </p>
            <h2
              className="font-bebas leading-none mb-10 sm:mb-14"
              style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--a-text)' }}
            >
              THREE DECISIONS
            </h2>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {changes.map((c) => (
                <article
                  key={c.n}
                  className="border-2 p-6 sm:p-8 flex flex-col"
                  style={{ borderColor: 'var(--a-border)', boxShadow: '4px 4px 0px var(--a-subtle)' }}
                >
                  <p
                    className="font-bebas leading-none mb-4"
                    style={{ fontSize: '3rem', color: 'transparent', WebkitTextStroke: '1.5px var(--a-text)' }}
                  >
                    {c.n}
                  </p>
                  <h3
                    className="font-bebas text-lg sm:text-xl tracking-widest mb-4"
                    style={{ color: 'var(--a-text)' }}
                  >
                    {c.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--a-muted)' }}>
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. THE DETAIL WORTH NOTICING ────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--b-bg)', borderColor: 'var(--b-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--b-muted)' }}>
              ▶ THE DETAIL WORTH NOTICING
            </p>
            <h2
              className="font-bebas leading-none mb-3"
              style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', color: 'var(--b-text)' }}
            >
              THE DETAIL
              <br />
              WORTH NOTICING
            </h2>
            <p className="font-mono text-xs tracking-[0.2em] mb-12" style={{ color: 'var(--b-muted)' }}>
              SLOT 3 — THE PENETRATION CROSS-SECTION
            </p>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div
                className="relative w-full border-2 lg:sticky lg:top-24"
                style={{
                  aspectRatio: `${featureImage.width} / ${featureImage.height}`,
                  borderColor: 'var(--b-text)',
                  boxShadow: '8px 8px 0px var(--b-border)',
                }}
              >
                <Image
                  src={featureImage.src}
                  alt={featureImage.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                {detailParagraphs.map((p, i) => (
                  <p key={i} className="font-mono text-sm sm:text-base leading-relaxed" style={{ color: 'var(--b-muted)' }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. RESULTS ──────────────────────────────────────────── */}
        <CaseStudyResults results={results} showPending={showPendingState} />

        {/* ── 7. CTA ──────────────────────────────────────────────── */}
        <section className="border-t" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'var(--a-border)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-[0.35em] mb-3" style={{ color: 'var(--a-muted)' }}>
                ▶ NEXT
              </p>
              <h2
                className="font-bebas leading-none"
                style={{ fontSize: 'clamp(2.25rem,6vw,4.5rem)', color: 'var(--a-text)' }}
              >
                SELLING LEATHER CARE
                <br />
                OR FOOTWEAR ON AMAZON?
              </h2>
              <p className="font-mono text-sm sm:text-base leading-relaxed mt-6 max-w-xl" style={{ color: 'var(--a-muted)' }}>
                The same treatment — proof over claims, objections answered slot by slot.
              </p>
              <div className="mt-8 sm:mt-10">
                <a
                  href="/contact-me/"
                  className="btn-brutal font-bebas tracking-widest border-2 inline-block w-full sm:w-auto text-center text-lg sm:text-xl px-8 py-4"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-inv)',
                    borderColor: 'var(--accent)',
                    boxShadow: '4px 4px 0px var(--a-muted)',
                  }}
                >
                  START A PROJECT →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
