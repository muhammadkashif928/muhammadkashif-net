// Fiamme — Amazon Brand Store case study, in the Lumora design.
// Content lives in data/case-studies/fiamme-brand-store.js.
import LxShell from '@/components/lx/LxShell'
import Gallery from '@/components/lx/Gallery'
import { Pill } from '@/components/lx/Icons'
import { CaseHero, CaseBlock, CaseResults, CaseNext, SOFTWARE } from '@/components/lx/Case'
import { results, meta, fullPage, modules, pageParagraphs } from '@/data/case-studies/fiamme-brand-store'

export default function FiammeBrandStoreCaseStudy() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Fiamme — Brand Store"
          eyebrow="Amazon Brand Store design · Leather care — suede & nubuck"
          lines={['Fiamme', 'Brand Store']}
          lead="A luxury leather-care brand with one hero product — a three-piece suede and nubuck kit. A seven-module Amazon Brand Store that sells the brand first, then walks the shopper from what is in the kit to how to use it and everything it is for."
          meta={[
            ['Client', meta.client],
            ['Product', meta.product],
            ['Marketplace', meta.marketplace],
            ['Scope', meta.scope],
            ['Software', SOFTWARE],
            ['Published', meta.published],
          ]}
        />

        <CaseBlock eyebrow="The page" title="One scroll, brand to basket">
          <div className="store">
            <div className="store__page rv">
              <Gallery images={[fullPage]} columns={1} aspect="auto" showCaptions={false} className="gal--wide" />
            </div>
            <div className="store__text">
              <div className="prose rv">
                {pageParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <ol className="store__list rv">
                {modules.map(m => <li key={m.src}>{m.slot.replace(/^\d+ — /, '')}</li>)}
              </ol>
            </div>
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="Module by module" title="Seven modules, seven jobs" lead="Every module on a store page is a reason to keep scrolling. Here is what each of the seven is for — tap any one to enlarge.">
          <div className="rv"><Gallery images={modules} columns={1} aspect="auto" className="gal--wide store__mods" /></div>
        </CaseBlock>

        <CaseResults results={results} />

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Selling leather care on Amazon?</p>
                <h2>A store that sells the brand, not just the product.</h2>
                <p>The same treatment for your Brand Store — every module giving the shopper a reason to keep scrolling.</p>
              </div>
              <div className="ccta__actions">
                <Pill variant="light" arrow="up-right" data-go="contact" data-service="Amazon Brand Store">Start a project</Pill>
                <Pill variant="outline" arrow={null} href="/services/amazon-brand-store/" className="pill--on-dark">See the service</Pill>
              </div>
            </div>
          </div>
        </section>

        <CaseNext current={meta.slug} />
      </main>
    </LxShell>
  )
}
