// Yara by Lattafa — Amazon main image case study, in the Lumora design.
import LxShell from '@/components/lx/LxShell'
import Gallery from '@/components/lx/Gallery'
import { Icon, Pill } from '@/components/lx/Icons'
import { CaseHero, CaseText, CaseBlock, CaseSteps, CaseNext } from '@/components/lx/Case'

const RESULT = { src: '/1776985426943.jpeg', width: 1280, height: 1918, alt: 'Yara by Lattafa Eau de Parfum — raw product shots transformed into an Amazon main image using AI and Photoshop', slot: 'Raw shots → Amazon main image' }

const workflow = [
  'Took the basic raw product shots — lit casually, angled, on textured backgrounds.',
  'Cleaned perspective and alignment in Photoshop for shape clarity and an upright presentation.',
  'Fixed the lighting to premium fragrance standards — no flat light, no harsh shadows.',
  'Removed distractions for a pure white background and Amazon compliance.',
  'Balanced the reflections on the silver metalwork for a luxury, high-end feel.',
  'Centred the composition for Amazon CTR, so the product fills the frame correctly.',
]

const principles = [
  { title: 'Shape clarity', body: "The bottle silhouette must be instantly readable at thumbnail size. The Yara's cylindrical form and cross-wrap metalwork needed to read clearly even at 200×200px in search results." },
  { title: 'Lighting control', body: 'Premium fragrances live or die on their lighting. The pink lacquer and silver elements each reflect light differently — too bright kills the pink depth; too dark loses the metalwork detail.' },
  { title: 'Premium feel', body: 'The first impression must communicate the price point before the buyer reads a single word. Every highlight, every shadow, every reflection is there to signal luxury quality.' },
  { title: 'Amazon CTR optimisation', body: "Centring, white space management and filling 85%+ of the frame — these are not aesthetic choices, they are conversion decisions guided by Amazon's own image best practices." },
]

const shift = [
  ['Clean background', 'Shape clarity that reads at thumbnail size'],
  ['Decent lighting', 'Lighting that signals price point before the buyer reads'],
  ['“Looks nice”', 'Makes them click — converts browsing into buying'],
  ['Studio shoot', 'AI + Photoshop workflow — faster, cheaper, more control'],
]

export default function YaraLattafaPortfolio() {
  return (
    <LxShell>
      <main id="main-content">
        <CaseHero
          crumb="Yara by Lattafa"
          eyebrow="Amazon main image · AI + Photoshop · Conversion optimisation"
          lines={['Yara by Lattafa', 'Amazon main image']}
          lead="Raw product shots transformed into a scroll-stopping Amazon main image for Yara by Lattafa Eau de Parfum — AI-assisted clean-up, Photoshop precision, no studio shoot."
          meta={[
            ['Product', 'Yara Eau de Parfum, 100 ml'],
            ['Service', 'Main image redesign'],
            ['Software', 'AI + Adobe Photoshop'],
            ['Output', 'Amazon-compliant main image'],
            ['Published', 'Jun 27, 2026'],
          ]}
          image={{ src: '/images/lx/work/yara.webp', alt: 'Yara by Lattafa perfume bottle lit on a dark surface', width: 1536, height: 1024 }}
        />

        <CaseBlock eyebrow="Before / after" title="From raw shots to the main image" lead="Two casual product shots — textured backgrounds, uneven angles, inconsistent lighting — became one Amazon-compliant main image. Tap to enlarge.">
          <div className="csplit rv">
            <div className="csplit__img"><Gallery images={[RESULT]} columns={1} showCaptions={false} aspect="1280 / 1918" /></div>
            <ul className="csplit__notes">
              <li><span className="csplit__k">Input</span>Two casual product shots — textured backgrounds, uneven angles, inconsistent lighting.</li>
              <li><span className="csplit__k">Process</span>AI for background removal and initial clean-up; Photoshop for precision lighting, reflections, centring and the final polish.</li>
              <li><span className="csplit__k">Output</span>Pure white background, CTR-optimised framing and a luxury finish — done in minutes, not days.</li>
            </ul>
          </div>
        </CaseBlock>

        <CaseBlock eyebrow="The workflow" title="Six steps, one image">
          <ol className="cflow rv">
            {workflow.map((w, i) => <li key={i}><span>{String(i + 1).padStart(2, '0')}</span>{w}</li>)}
          </ol>
        </CaseBlock>

        <CaseBlock eyebrow="Main images aren’t just a clean background" title="Four principles behind the frame">
          <CaseSteps items={principles} />
        </CaseBlock>

        <CaseBlock eyebrow="The shift" title="From “make it look nice” to “make it convert”">
          <ul className="cshift rv">
            {shift.map(([from, to]) => <li key={from}><span className="cshift__from">{from}</span><Icon name="arrow" /><span className="cshift__to">{to}</span></li>)}
          </ul>
        </CaseBlock>

        <CaseText eyebrow="The write-up" title="The smarter workflow">
          <p>The Yara by Lattafa is a premium fragrance — a rose-pink cylindrical bottle with intricate silver cross-wrap metalwork, Arabic calligraphy and an ornate medallion. It is a premium-looking product. But the raw shots buried all of that: textured backgrounds, tilted angles and flat ambient lighting that made it look like any other online listing.</p>
          <p>The redesign took minutes — not because the work was trivial, but because the workflow was smart. AI handled the heavy lifting on background removal and initial clean-up. Photoshop handled the precision: lighting balance, reflection control on the silver elements, centring, and the subtle drop shadow that grounds the bottle without making it look fake.</p>
          <h2>Your main image is your first sale</h2>
          <p>On Amazon, your main image is not one of many assets. It is the only thing a buyer sees before they decide whether to click. It appears in search results, in sponsored ads, in competitor comparisons. It is your first impression, your first click and your first sale — all in a single square image.</p>
          <p>Getting it wrong means paying for traffic that doesn’t convert. Getting it right means your product competes at the level it deserves — regardless of your listing age or review count.</p>
          <h2>AI helped. But the real edge is knowing what to fix</h2>
          <p>AI accelerates the workflow. But AI doesn’t know that the silver metalwork needs to read differently from the pink lacquer. It doesn’t know that centring the bottle 3% to the right improves visual balance. It doesn’t know that Amazon’s zoom feature means the label text needs to be readable at 400% scale.</p>
          <p>The edge — right now and increasingly in the future — is not who has access to the tools. It’s who understands Amazon’s rules, buyer psychology and conversion design well enough to know exactly what to fix and what not to touch.</p>
        </CaseText>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="ccta rv">
              <div>
                <p className="eyebrow eyebrow--light">Your main image isn’t converting?</p>
                <h2>Make it convert. Not just look nice.</h2>
                <p>Fast, precise, Amazon-compliant — and built to make buyers click.</p>
              </div>
              <div className="ccta__actions">
                <Pill variant="light" arrow="up-right" href="/order/main-image-optimization/">Order a main image</Pill>
                <Pill variant="outline" arrow={null} href="/services/main-image-optimization/" className="pill--on-dark">See the service</Pill>
              </div>
            </div>
          </div>
        </section>

        <CaseNext current="yara-lattafa-amazon-main-image" />
      </main>
    </LxShell>
  )
}
