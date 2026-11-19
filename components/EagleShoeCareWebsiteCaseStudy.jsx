// Eagle Shoe Care — Shopify store + B2B wholesale case study, in the Lumora design.
// Content lives in data/case-studies/eagle-shoe-care-website.js.
import LxShell from '@/components/lx/LxShell'
import { DeviceFrames } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext } from '@/components/lx/Case'
import {
  results, meta, heroDevices, phones, wholesaleDevices,
  introParagraphs, wholesaleParagraphs, features,
} from '@/data/case-studies/eagle-shoe-care-website'

export default function EagleShoeCareWebsiteCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Eagle Shoe Care — Shopify Store"
          eyebrow="Shopify design & development · Shoe care brand"
          lines={['Eagle Shoe Care', 'Shopify Store + B2B']}
          lead="A fully custom Shopify store for a shoe and leather care brand — one site that sells to shoppers and signs up the shops that stock it."
          meta={[
            ['Client', meta.client],
            ['Platform', meta.platform],
            ['Scope', meta.scope],
            ['Live site', <a key="live" href={meta.liveUrl} target="_blank" rel="noopener noreferrer" className="alink"><span>{meta.liveLabel}</span></a>],
            ['Languages', meta.languages],
            ['Built with', meta.stack],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The site" title="The homepage, top to bottom">
          <div className="prose rv" style={{ marginBottom: '3rem' }}>
            {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="rv"><DeviceFrames items={heroDevices} full /></div>
          <div className="rv" style={{ marginTop: '2rem' }}>
            <Pill variant="dark" arrow="up-right" href={meta.liveUrl} external>Visit the live site</Pill>
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="B2B" title="Wholesale, built into the store" lead="Retailers apply, get approved and order from the same site shoppers use. Tap the screen to scroll the full application page.">
          <div className="prose rv" style={{ marginBottom: '3rem' }}>
            {wholesaleParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="rv"><DeviceFrames items={wholesaleDevices} /></div>
        </CaseBlock>

        <CaseBlock eyebrow="On a phone" title="Built for the thumb" lead="Every section has its own mobile layout — not a squeezed desktop. Tap the screen to scroll the full homepage.">
          <div className="rv"><DeviceFrames items={phones} /></div>
        </CaseBlock>

        <CaseBlock eyebrow="Under the hood" title="What is built in">
          <ul className="feats rv">
            {features.map(f => <li key={f.title}><h3>{f.title}</h3><p>{f.text}</p></li>)}
          </ul>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling to shoppers and to shops?</p>
                <h2>One Shopify store that handles retail and wholesale.</h2>
                <p>A custom theme built around your range — with a wholesale application, trade terms and sign-in built in.</p>
              </div>
              <div className="ccta__actions">
                <Pill variant="light" arrow="up-right" data-go="contact" data-service="Website Design & Development">Start a project</Pill>
                <Pill variant="outline" arrow={null} href="/services/shopify-store-design/" className="pill--on-dark">Shopify store design</Pill>
              </div>
            </div>
          </div>
        </section>

        <CaseNext current={meta.slug} />
      </main>
    </LxShell>
  )
}
