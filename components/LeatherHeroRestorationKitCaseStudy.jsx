// Leather Hero — Leather Restoration Kit case study, in the Lumora design.
// Content lives in data/case-studies/leather-hero-restoration-kit.js.
import LxShell from '@/components/lx/LxShell'
import Gallery, { ZoomPair } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext, SOFTWARE } from '@/components/lx/Case'
import {
  results, meta, mainPrimary, mainAlt, galleryImages, mainImageParagraphs,
} from '@/data/case-studies/leather-hero-restoration-kit'

export default function LeatherHeroRestorationKitCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Leather Hero — Restoration Kit"
          eyebrow="Amazon listing design · Leather care — furniture restoration"
          lines={['Leather Hero', 'Restoration Kit']}
          lead="Leather Hero’s fourth product — a six-piece clean, restore and protect kit for black leather. An eleven-image set built around before-and-after proof and a three-step routine the buyer can follow at a glance."
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
              { img: mainPrimary, tag: 'Primary', note: 'Every piece spread out — the buyer can count the kit.' },
              { img: mainAlt, tag: 'Alternate', note: 'Grouped tighter — bigger labels, second slot / A-B challenger.' },
            ]} />
          </div>
          <div className="prose rv" style={{ marginTop: '3rem' }}>
            {mainImageParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="The set" title="Eleven images, eleven jobs" lead="Every slot in a listing is a question the buyer has not asked out loud yet. Here is what each of the eleven is for.">
          <div className="rv"><Gallery images={galleryImages} columns={3} /></div>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling leather care on Amazon?</p>
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
