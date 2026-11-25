// Eagle Shoe Care — Complete 5-Piece Leather Care Kit lifestyle carousel, in the Lumora design.
// Content lives in data/case-studies/eagle-leather-care-kit-carousel.js.
import LxShell from '@/components/lx/LxShell'
import Gallery from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext, SOFTWARE } from '@/components/lx/Case'
import { results, meta, slides, introParagraphs } from '@/data/case-studies/eagle-leather-care-kit-carousel'

export default function EagleLeatherCareKitCarouselCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Eagle Shoe Care — Boot Care Kit Carousel"
          eyebrow="Lifestyle carousel · Shoe care — leather boot care kit"
          lines={['Eagle Shoe Care', 'Boot Care Kit Carousel']}
          lead="A five-piece leather care kit, told as a six-slide vertical carousel. One western boot, from faded grey to deep black: the before-and-after, four steps and the finished pair."
          meta={[
            ['Client', meta.client],
            ['Product', meta.product],
            ['Format', meta.format],
            ['Scope', meta.scope],
            ['Software', SOFTWARE],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The idea" title="Five pieces, four steps">
          <div className="prose rv">
            {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="The carousel" title="Six slides, six jobs" lead="In swipe order. Tap any slide to see it full size.">
          <div className="rv"><Gallery images={slides} columns={3} aspect="9 / 16" /></div>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling shoe care?</p>
                <h2>Show the routine, not just the box.</h2>
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
