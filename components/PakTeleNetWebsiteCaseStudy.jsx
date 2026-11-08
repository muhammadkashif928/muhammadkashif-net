// Pak Tele Net — fiber internet website case study, in the Lumora design.
// Content lives in data/case-studies/pak-tele-net-website.js.
import LxShell from '@/components/lx/LxShell'
import { DeviceFrames } from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext, SOFTWARE } from '@/components/lx/Case'
import {
  results, meta, heroDevices, phones, introParagraphs, features,
} from '@/data/case-studies/pak-tele-net-website'

export default function PakTeleNetWebsiteCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Pak Tele Net — Website"
          eyebrow="Website design & development · Fiber internet provider"
          lines={['Pak Tele Net', 'Fiber Internet Website']}
          lead="A bilingual English and Urdu website for a fiber internet provider in Burewala — designed and built from scratch so customers can pick a speed, check their area, get connected on WhatsApp and pay their bill, all from their phone."
          meta={[
            ['Client', meta.client],
            ['Platform', meta.platform],
            ['Scope', meta.scope],
            ['Software', SOFTWARE],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The site" title="The homepage, top to bottom">
          <div className="prose rv" style={{ marginBottom: '3rem' }}>
            {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="rv"><DeviceFrames items={heroDevices} full /></div>
        </CaseBlock>

        <CaseBlock eyebrow="On a phone" title="Built for the thumb" lead="Nearly every customer arrives on a phone, so every section has its own mobile layout — with WhatsApp one tap away. Tap the screen to scroll the full homepage.">
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
                <p className="eyebrow eyebrow--light">Running a local service business?</p>
                <h2>A website your customers can use from their phone.</h2>
                <p>Designed and built from scratch — fast, mobile-first and in the language your customers speak.</p>
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
