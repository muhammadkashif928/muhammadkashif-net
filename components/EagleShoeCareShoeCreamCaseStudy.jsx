// Eagle Shoe Care — Premium Shoe Cream listing case study, in the Lumora design.
// Content lives in data/case-studies/eagle-shoe-care-shoe-cream.js.
import LxShell from '@/components/lx/LxShell'
import Gallery, { ZoomPair } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext, SOFTWARE } from '@/components/lx/Case'
import {
  results, meta, mainPrimary, mainAlt, galleryImages, mainImageParagraphs,
} from '@/data/case-studies/eagle-shoe-care-shoe-cream'

export default function EagleShoeCareShoeCreamCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Eagle Shoe Care — Shoe Cream"
          eyebrow="Amazon listing design · Shoe care — cream & polish"
          lines={['Eagle Shoe Care', 'Premium Shoe Cream']}
          lead="A black carnauba shoe cream sold with its own brush and buffing cloth. A ten-image set that shows the bundle, proves the result on a scuffed boot and walks the buyer from first coat to final shine."
          meta={[
            ['Client', meta.client],
            ['Product', meta.product],
            ['Marketplace', meta.marketplace],
            ['Scope', meta.scope],
            ['Software', SOFTWARE],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The main image" title="Two frames, one decision">
          <div className="rv">
            <ZoomPair items={[
              { img: mainPrimary, tag: 'Primary', note: 'Open jar, lid leaning, all three pieces in view.' },
              { img: mainAlt, tag: 'Alternate', note: 'Lid face-on — bigger label, A/B challenger.' },
            ]} />
          </div>
          <div className="prose rv" style={{ marginTop: '3rem' }}>
            {mainImageParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="The set" title="Ten images, ten jobs" lead="Every slot in a listing is a question the buyer has not asked out loud yet. Here is what each of the ten is for.">
          <div className="rv"><Gallery images={galleryImages} columns={3} /></div>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling shoe care on Amazon?</p>
                <h2>Proof over claims, slot by slot.</h2>
                <p>The same treatment for your listing — every image answering a question the buyer hasn’t asked yet.</p>
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
