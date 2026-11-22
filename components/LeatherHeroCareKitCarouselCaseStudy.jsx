// Leather Hero — Premium Leather Care Kit lifestyle carousel, in the Lumora design.
// Content lives in data/case-studies/leather-hero-care-kit-carousel.js.
import LxShell from '@/components/lx/LxShell'
import Gallery from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext, SOFTWARE } from '@/components/lx/Case'
import { results, meta, slides, introParagraphs } from '@/data/case-studies/leather-hero-care-kit-carousel'

export default function LeatherHeroCareKitCarouselCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Leather Hero — Care Kit Carousel"
          eyebrow="Lifestyle carousel · Leather care — cleaner & conditioner"
          lines={['Leather Hero', 'Leather Care Kit Carousel']}
          lead="A two-step leather cleaner and conditioner kit, told as a seven-slide vertical carousel. One car seat, from dirty to clean: the promise, what's in the box, four steps and a split-seat before-and-after."
          meta={[
            ['Client', meta.client],
            ['Product', meta.product],
            ['Format', meta.format],
            ['Scope', meta.scope],
            ['Software', SOFTWARE],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The idea" title="Two bottles, one routine">
          <div className="prose rv">
            {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="The carousel" title="Seven slides, seven jobs" lead="In swipe order. Tap any slide to see it full size.">
          <div className="rv"><Gallery images={slides} columns={4} aspect="9 / 16" /></div>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling leather care?</p>
                <h2>Show the routine, not just the bottle.</h2>
                <p>Lifestyle images and carousels that walk the buyer from problem to result, one slide at a time.</p>
              </div>
              <div className="ccta__actions">
                <Pill variant="light" arrow="up-right" data-go="contact" data-service="Full Listing Design">Start a project</Pill>
                <Pill variant="outline" arrow={null} href="/services/full-listing-design/" className="pill--on-dark">See the service</Pill>
              </div>
            </div>
          </div>
        </section>

        <CaseNext current={meta.slug} />
      </main>
    </LxShell>
  )
}
