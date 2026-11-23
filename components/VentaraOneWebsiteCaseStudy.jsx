// Ventara ONE (Ventara Mart) — online store case study, in the Lumora design.
// Content lives in data/case-studies/ventara-one-website.js.
import LxShell from '@/components/lx/LxShell'
import { DeviceFrames } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext } from '@/components/lx/Case'
import {
  results, meta, heroDevices, pages, phones, introParagraphs, features,
} from '@/data/case-studies/ventara-one-website'

export default function VentaraOneWebsiteCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Ventara ONE — Online Store"
          eyebrow="Website design & development · Groceries & everyday essentials"
          lines={['Ventara ONE', 'Online Store']}
          lead="A custom-coded online store for groceries and everyday essentials, shipped from Chicago — 13 departments and 165 products, designed and built from scratch with Stripe checkout."
          meta={[
            ['Client', meta.client],
            ['Platform', meta.platform],
            ['Scope', meta.scope],
            ['Languages', meta.languages],
            ['Built with', meta.stack],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The store" title="The homepage, top to bottom">
          <div className="prose rv" style={{ marginBottom: '3rem' }}>
            {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="rv"><DeviceFrames items={heroDevices} full /></div>
          <div className="rv" style={{ marginTop: '2rem' }}>
            <Pill variant="dark" arrow="up-right" href={meta.liveUrl} external>Visit the live store</Pill>
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="Inside pages" title="Departments and products" lead="A department page leads with its own photo header and a sortable product grid; a product page puts price, delivery terms and both buy buttons beside the photo. Click a screen to scroll the full page.">
          <div className="rv"><DeviceFrames items={pages} /></div>
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
                <p className="eyebrow eyebrow--light">Need an online store?</p>
                <h2>A store that makes a big catalogue feel simple.</h2>
                <p>Designed and built from scratch — fast, mobile-first and ready to take payments.</p>
              </div>
              <div className="ccta__actions">
                <Pill variant="light" arrow="up-right" data-go="contact" data-service="Website Design & Development">Start a project</Pill>
                <Pill variant="outline" arrow={null} href="/services/" className="pill--on-dark">See services</Pill>
              </div>
            </div>
          </div>
        </section>

        <CaseNext current={meta.slug} />
      </main>
    </LxShell>
  )
}
