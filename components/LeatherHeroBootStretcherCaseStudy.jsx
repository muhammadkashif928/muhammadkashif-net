// Leather Hero — Boot Stretcher case study, in the Lumora design.
// Content lives in data/case-studies/leather-hero-boot-stretcher.js.
import LxShell from '@/components/lx/LxShell'
import Gallery, { ZoomPair } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext, SOFTWARE } from '@/components/lx/Case'
import {
  results, meta, mainPrimary, mainAlt, galleryImages, mainImageParagraphs,
} from '@/data/case-studies/leather-hero-boot-stretcher'

export default function LeatherHeroBootStretcherCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Leather Hero — Boot Stretcher"
          eyebrow="Amazon listing design · Footwear care — boot stretchers"
          lines={['Leather Hero', 'Boot Stretcher']}
          lead="Leather Hero’s third product — a heavy-duty calf and shaft boot stretcher — and the first tool rather than a formula. A nine-image set built around mechanism, fit and a before-and-after on a tooled cowboy boot."
          meta={[
            ['Client', meta.client],
            ['Product', 'Heavy-duty calf & shaft boot stretcher'],
            ['Marketplace', meta.marketplace],
            ['Scope', meta.scope],
            ['Software', SOFTWARE],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The main image" title="Two frames, one decision">
          <div className="rv">
            <ZoomPair items={[
              { img: mainPrimary, tag: 'Primary', note: 'Stretcher alone — only what ships, readable at thumbnail size.' },
              { img: mainAlt, tag: 'Alternate', note: 'With a boot for scale — second slot / A-B challenger.' },
            ]} />
          </div>
          <div className="prose rv" style={{ marginTop: '3rem' }}>
            {mainImageParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="The set" title="Nine images, nine jobs" lead="Every slot in a listing is a question the buyer has not asked out loud yet. Here is what each of the nine is for.">
          <div className="rv"><Gallery images={galleryImages} columns={3} /></div>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling leather care or footwear on Amazon?</p>
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
