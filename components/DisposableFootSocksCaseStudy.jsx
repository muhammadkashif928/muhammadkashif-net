// Disposable Foot Socks case study, in the Lumora design.
// Content lives in data/case-studies/disposable-foot-socks.js.
import LxShell from '@/components/lx/LxShell'
import Gallery, { ZoomPair } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext } from '@/components/lx/Case'
import {
  results, meta, mainPrimary, mainAlternates, galleryImages, knitImages, mainImageParagraphs,
} from '@/data/case-studies/disposable-foot-socks'

export default function DisposableFootSocksCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Disposable Foot Socks"
          eyebrow="Amazon listing design · Footwear accessories — try-on socks"
          lines={['Disposable', 'Foot Socks']}
          lead="A 144-count box of sheer try-on socks — a commodity on Amazon. A full ten-image listing set that makes it read as a considered product: how it looks on, how it stretches, why it is hygienic, and why the box is worth it."
          meta={[
            ['Client', meta.client],
            ['Product', meta.product],
            ['Marketplace', meta.marketplace],
            ['Scope', meta.scope],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The main image" title="Three frames, one decision">
          <div className="rv">
            <ZoomPair className="cpair--3" items={[
              { img: mainPrimary, tag: 'Primary', note: 'Box alone — only what ships, readable at thumbnail size.' },
              { img: mainAlternates[0], tag: 'Alternate — worn', note: 'Feet in the socks — second slot, answers “how does it look on?”' },
              { img: mainAlternates[1], tag: 'Alternate — dispense', note: 'Hand pulling a sock — third slot, sells the tissue-box format.' },
            ]} />
          </div>
          <div className="prose rv" style={{ marginTop: '3rem' }}>
            {mainImageParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="The set" title="Ten images, ten jobs" lead="Every slot in a listing is a question the buyer has not asked out loud yet. Here is what each of the ten is for.">
          <div className="rv"><Gallery images={galleryImages} columns={3} /></div>
        </CaseBlock>

        <CaseBlock eyebrow="Second version" title="The same set, in knit" lead="The listing rebuilt for the knit version of the sock — same slots, same order. Tap any image to enlarge.">
          <div className="rv"><Gallery images={knitImages} columns={5} showCaptions={false} /></div>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling footwear or foot-care products on Amazon?</p>
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
