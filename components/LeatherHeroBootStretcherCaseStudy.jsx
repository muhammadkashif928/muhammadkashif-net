// Leather Hero — Boot Stretcher case study, in the Lumora design.
// Content lives in data/case-studies/leather-hero-boot-stretcher.js.
import LxShell from '@/components/lx/LxShell'
import Gallery, { ZoomPair } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseText, CaseBlock, CaseResults, CaseNext } from '@/components/lx/Case'
import {
  results, meta, siblings, mainPrimary, mainAlt, galleryImages,
  contextParagraphs, mainImageParagraphs,
} from '@/data/case-studies/leather-hero-boot-stretcher'

// Swap each sibling's name in a paragraph for a link to its case study.
function linkSiblings(text) {
  return siblings.reduce(
    (parts, s) => parts.flatMap((part) => {
      if (typeof part !== 'string') return [part]
      const [before, ...rest] = part.split(s.title)
      if (!rest.length) return [part]
      return [before, <a key={s.path} href={s.path}>{s.title}</a>, rest.join(s.title)]
    }),
    [text]
  )
}

export default function LeatherHeroBootStretcherCaseStudy() {
  const [firstContext, ...restContext] = contextParagraphs

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
            ['Published', meta.published],
          ]}
          image={{ src: '/images/lx/work/leather-hero-boot-stretcher.webp', alt: 'Leather Hero boot stretcher with an “Extra Heavy Duty” tag beside a tooled brown cowboy boot on a dark wood floor', width: 1536, height: 1024, style: { objectPosition: 'center 40%' } }}
        />

        <CaseText eyebrow="The context" title="Third product, a different sell">
          <p>{linkSiblings(firstContext)}</p>
          {restContext.map((p, i) => <p key={i}>{p}</p>)}
        </CaseText>

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
