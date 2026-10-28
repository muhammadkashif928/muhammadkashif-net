// Leather Hero — Purse Care Kit case study, in the Lumora design.
// Content lives in data/case-studies/leather-hero-purse.js.
import LxShell from '@/components/lx/LxShell'
import Gallery, { ZoomPair } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseText, CaseBlock, CaseResults, CaseNext } from '@/components/lx/Case'
import {
  results, meta, sibling, mainPrimary, mainAlt, beforeAfter, galleryImages,
  contextParagraphs, beforeAfterIntro, beforeAfterCaption, mainImageParagraphs,
} from '@/data/case-studies/leather-hero-purse'

export default function LeatherHeroPurseCaseStudy() {
  // The first context paragraph names the sibling study; link it.
  const [firstContext, ...restContext] = contextParagraphs
  const [beforeLink, afterLink] = firstContext.split('Furniture Salve')

  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Leather Hero — Purse Care Kit"
          eyebrow="Amazon listing design · Leather care — handbags & purses"
          lines={['Leather Hero', 'Purse Care Kit']}
          lead="Leather Hero’s second product — a purse cleaner & conditioner kit — given the same proof-first treatment as the Furniture Salve, this time on leather."
          meta={[
            ['Client', meta.client],
            ['Product', 'Purse cleaner & conditioner kit'],
            ['Marketplace', meta.marketplace],
            ['Scope', meta.scope],
            ['Published', meta.published],
          ]}
          image={{ src: '/images/lx/work/leather-hero-purse.webp', alt: 'Leather Hero purse conditioner and cleaner bottles with a tan leather handbag on a dark surface', width: 1536, height: 1024 }}
        />

        <CaseText eyebrow="The context" title="Second product, same brand">
          <p>
            {beforeLink}<a href={sibling.path}>Furniture Salve</a>{afterLink}
          </p>
          {restContext.map((p, i) => <p key={i}>{p}</p>)}
        </CaseText>

        <CaseBlock eyebrow="Before / after" title="The bag, restored" lead={beforeAfterIntro}>
          <figure className="cfig rv">
            <img src={beforeAfter.src} alt={beforeAfter.alt} width={beforeAfter.width} height={beforeAfter.height} loading="lazy" />
            <figcaption>{beforeAfterCaption}</figcaption>
          </figure>
        </CaseBlock>

        <CaseBlock eyebrow="The main image" title="Two frames, one decision">
          <div className="rv">
            <ZoomPair items={[
              { img: mainPrimary, tag: 'Primary', note: 'Leads with the bag — context wins the click.' },
              { img: mainAlt, tag: 'Alternate', note: 'Kit only — maximum clarity, second slot / A-B challenger.' },
            ]} />
          </div>
          <div className="prose rv" style={{ marginTop: '3rem' }}>
            {mainImageParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="The set" title="Eight images, eight jobs" lead="Every slot in a listing is a question the buyer has not asked out loud yet. Here is what each of the eight is for.">
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
