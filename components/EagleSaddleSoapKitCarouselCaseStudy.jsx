// Eagle Shoe Care — 3-Piece Saddle Soap Kit lifestyle carousel, in the Lumora design.
// Content lives in data/case-studies/eagle-saddle-soap-kit-carousel.js.
import LxShell from '@/components/lx/LxShell'
import Gallery from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext, SOFTWARE } from '@/components/lx/Case'
import { results, meta, slides, introParagraphs } from '@/data/case-studies/eagle-saddle-soap-kit-carousel'

export default function EagleSaddleSoapKitCarouselCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Eagle Shoe Care — Saddle Soap Kit Carousel"
          eyebrow="Lifestyle carousel · Shoe care — saddle soap"
          lines={['Eagle Shoe Care', 'Saddle Soap Kit Carousel']}
          lead="A three-piece saddle soap kit, told as a five-slide vertical carousel. One work boot, from dusty to clean: the before-and-after, three steps and the finished pair."
          meta={[
            ['Client', meta.client],
            ['Product', meta.product],
            ['Format', meta.format],
            ['Scope', meta.scope],
            ['Software', SOFTWARE],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The idea" title="Three pieces, three steps">
          <div className="prose rv">
            {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="The carousel" title="Five slides, five jobs" lead="In swipe order. Tap any slide to see it full size.">
          <div className="rv"><Gallery images={slides} columns={5} aspect="9 / 16" /></div>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling shoe care?</p>
                <h2>Show the routine, not just the tin.</h2>
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
