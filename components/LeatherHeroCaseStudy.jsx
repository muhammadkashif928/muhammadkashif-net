// Leather Hero — Furniture Salve case study, in the Lumora design.
// Content lives in data/case-studies/leather-hero.js (results, images, copy).
import LxShell from '@/components/lx/LxShell'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import Gallery from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseText, CaseBlock, CaseSteps, CaseResults, CaseNext } from '@/components/lx/Case'
import {
  results, meta, beforeImages, afterImages, changes, problemParagraphs, detailParagraphs,
} from '@/data/case-studies/leather-hero'

const sentence = s => s.charAt(0) + s.slice(1).toLowerCase()

export default function LeatherHeroCaseStudy() {
  const feature = afterImages.find(i => i.feature) || afterImages[2]
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Leather Hero — Furniture Salve"
          eyebrow="Amazon listing design · Leather & wood furniture care"
          lines={['Leather Hero', 'Furniture Salve']}
          lead="A restoration product whose listing never showed a restoration — rebuilt from four images into a full ten-slot set built around proof."
          meta={[
            ['Client', meta.client],
            ['Product', meta.product],
            ['Marketplace', meta.marketplace],
            ['Scope', meta.scope],
            ['Published', meta.published],
          ]}
          image={{ src: '/images/lx/work/leather-hero-salve.webp', alt: 'Leather Hero Furniture Salve tin, salve and wooden brush on a dark walnut surface', width: 1536, height: 1024 }}
        />

        <CaseText eyebrow="The problem" title="What the listing was costing them" paragraphs={problemParagraphs} />

        <CaseBlock eyebrow="Before / after" title="The main image" lead="Drag the handle to compare the original with the redesign.">
          <div className="cba rv">
            <div className="cba__slider">
              <BeforeAfterSlider before={beforeImages[0]} after={afterImages[0]} />
            </div>
            <p className="cba__note">Same three pieces, same white background, same Amazon policy. What changes is legibility at thumbnail size — the tin face turned toward the camera, the brush lifted clear of the pad instead of crossing it, and the pad given its own silhouette rather than sitting flat behind everything else.</p>
          </div>
        </CaseBlock>

        <CaseBlock eyebrow={`Coverage ${beforeImages.length} → ${afterImages.length}`} title="From four images to ten" lead="The originals first, the replacement set below. The point isn’t only that there are more of them — no two of the ten are doing the same job.">
          <p className="gal__label rv">The original set — {beforeImages.length} images</p>
          <div className="rv"><Gallery images={beforeImages.map(i => ({ ...i, slot: i.label }))} columns={4} showCaptions={false} /></div>
          <p className="gal__label gal__label--on rv">The new set — {afterImages.length} images</p>
          <div className="rv"><Gallery images={afterImages} columns={5} showCaptions={false} /></div>
        </CaseBlock>

        <CaseBlock eyebrow="The full set" title="What each slot is for" lead="Ten images, ten different objections. Every slot in a listing is a question the buyer hasn’t asked out loud yet.">
          <div className="rv"><Gallery images={afterImages} columns={3} /></div>
        </CaseBlock>

        <CaseBlock eyebrow="Three decisions" title="What changed, and why">
          <CaseSteps items={changes.map(c => ({ n: c.n, title: sentence(c.title), body: c.body }))} />
        </CaseBlock>

        <CaseText eyebrow="The detail worth noticing" title="Slot 3 — the penetration cross-section" paragraphs={detailParagraphs}>
          <figure>
            <img src={feature.src} alt={feature.alt} width={feature.width} height={feature.height} loading="lazy" />
            <figcaption>{feature.slot}</figcaption>
          </figure>
        </CaseText>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling a restoration product?</p>
                <h2>Show the result, don’t claim it.</h2>
                <p>The same treatment for your listing — proof over claims, objections answered slot by slot.</p>
              </div>
              <div className="ccta__actions">
                <Pill variant="light" arrow="up-right" data-go="contact" data-service="Product Infographics">Start a project</Pill>
                <Pill variant="outline" arrow={null} href="/services/product-infographics/" className="pill--on-dark">See the service</Pill>
              </div>
            </div>
          </div>
        </section>

        <CaseNext current={meta.slug} />
      </main>
    </LxShell>
  )
}
