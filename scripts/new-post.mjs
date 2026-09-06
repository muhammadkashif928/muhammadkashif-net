#!/usr/bin/env node
/**
 * Scaffold a blog post from a JSON brief.
 *
 *   node scripts/new-post.mjs drafts/my-post.json
 *
 * Writes app/<slug>/page.js and inserts the metadata entry at the TOP of
 * blogPosts in data/blog.js (newest first). The sitemap picks it up
 * automatically from data/blog.js — nothing else needs touching.
 *
 * Refuses to overwrite an existing post. Run with --force to replace one.
 *
 * Brief shape — see docs/CONTENT-PIPELINE.md for the writing rules:
 * {
 *   "slug": "kebab-case-url",
 *   "title": "Sentence Case Title",
 *   "category": "Amazon Listing Optimization",
 *   "image": "/images/blog-something.jpg",
 *   "imageAlt": "...",
 *   "excerpt": "One or two sentences, 140-165 chars.",
 *   "tags": ["A+ Content", "Conversion Design"],
 *   "faqs": [{ "q": "...", "a": "..." }],
 *   "intro": "Opening paragraph.",
 *   "related": [{ "slug": "existing-post", "title": "Its Title" }],   // >= 2, required
 *   "sections": [{
 *     "h2": "Section heading",
 *     "paragraphs": ["..."],
 *     "bullets": [{ "lead": "Bold lead-in", "text": "rest of the point" }],
 *     "figure": {                       // >= 1 across the post, required
 *       "kind": "grid|compare|sequence|stack",
 *       "label": "OPTIONAL EYEBROW",
 *       "caption": "Required. What the reader should take from it.",
 *       "items": [{ "label": "...", "note": "...", "emphasis": false }]
 *     }
 *   }],
 *   "conclusion": "Closing paragraph."
 * }
 */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const ROOT = path.resolve(import.meta.dirname, '..')
const force = process.argv.includes('--force')
const briefPath = process.argv.slice(2).find((a) => !a.startsWith('--'))

if (!briefPath) {
  console.error('usage: node scripts/new-post.mjs <brief.json> [--force]')
  process.exit(1)
}

// ── Load and validate ──────────────────────────────────────────────────

let brief
try {
  brief = JSON.parse(fs.readFileSync(path.resolve(briefPath), 'utf8'))
} catch (err) {
  console.error(`Could not read brief: ${err.message}`)
  process.exit(1)
}

const problems = []
const need = (k, test, msg) => { if (!test) problems.push(`${k}: ${msg}`) }

need('slug', /^[a-z0-9]+(-[a-z0-9]+)*$/.test(brief.slug || ''), 'must be kebab-case')
need('title', brief.title?.length >= 20 && brief.title.length <= 75, 'must be 20-75 characters')
need('category', Boolean(brief.category), 'required')
need('excerpt', brief.excerpt?.length >= 110 && brief.excerpt.length <= 170, 'must be 110-170 characters')
need('image', /^\/(api\/cover\/[a-z0-9-]+|[^\s]+\.(jpe?g|png|webp|avif))$/i.test(brief.image || ''), 'must be a site-absolute image path or /api/cover/<slug>')
need('imageAlt', brief.imageAlt?.length >= 20, 'must be a real description, 20+ characters')
need('tags', Array.isArray(brief.tags) && brief.tags.length >= 2 && brief.tags.length <= 4, 'needs 2-4 tags')
need('faqs', Array.isArray(brief.faqs) && brief.faqs.length >= 3, 'needs at least 3 FAQs')
need('intro', brief.intro?.length >= 200, 'opening paragraph is too short')
need('sections', Array.isArray(brief.sections) && brief.sections.length >= 4, 'needs at least 4 sections')
need('related', Array.isArray(brief.related) && brief.related.length >= 2, 'needs at least 2 internal links to existing posts')
need('figures', (brief.sections || []).some((s) => s.figure), 'at least one section must carry a figure — a design blog with no visuals argues against itself')
for (const [i, s] of (brief.sections || []).entries()) {
  if (!s.figure) continue
  const f = s.figure
  need(`sections[${i}].figure.kind`, ['grid', 'compare', 'sequence', 'stack'].includes(f.kind), 'must be grid, compare, sequence or stack')
  need(`sections[${i}].figure.caption`, Boolean(f.caption), 'every figure needs a caption')
  need(`sections[${i}].figure.items`, Array.isArray(f.items) && f.items.length >= 2, 'needs at least 2 items')
  if (f.kind === 'compare') need(`sections[${i}].figure.items`, f.items?.length === 2, 'compare takes exactly 2 items')
}
need('conclusion', brief.conclusion?.length >= 150, 'conclusion is too short')

for (const [i, s] of (brief.sections || []).entries()) {
  need(`sections[${i}].h2`, Boolean(s.h2), 'required')
  need(`sections[${i}].paragraphs`, Array.isArray(s.paragraphs) && s.paragraphs.length >= 1, 'needs at least one paragraph')
}

if (problems.length) {
  console.error('Brief is not valid:\n  - ' + problems.join('\n  - '))
  process.exit(1)
}

const postDir = path.join(ROOT, 'app', brief.slug)
if (fs.existsSync(postDir) && !force) {
  console.error(`app/${brief.slug}/ already exists. Pass --force to replace it.`)
  process.exit(1)
}

const blogDataPath = path.join(ROOT, 'data', 'blog.js')
let blogData = fs.readFileSync(blogDataPath, 'utf8')
if (blogData.includes(`slug: '${brief.slug}'`) && !force) {
  console.error(`data/blog.js already has an entry for '${brief.slug}'.`)
  process.exit(1)
}

// ── Helpers ────────────────────────────────────────────────────────────

/** Escape text for use inside JSX element children. */
const jsxText = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&rsquo;')

/** Escape for a single-quoted JS string literal. */
const jsStr = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`

const pascal = brief.slug
  .split('-')
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join('')

// Kuching is UTC+8 and has no daylight saving.
const now = new Date()
const kuching = new Date(now.getTime() + 8 * 3600 * 1000)
const iso = kuching.toISOString().replace(/\.\d{3}Z$/, '+08:00')
const human = kuching.toLocaleDateString('en-US', {
  month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
})

// ── Build app/<slug>/page.js ───────────────────────────────────────────


/** Serialise a figure into a <PostFigure> call. Data only — never raw SVG. */
function renderFigure(f) {
  const items = (f.items || []).slice(0, 6).map((it) => {
    const parts = [`label: ${jsStr(it.label)}`]
    if (it.note) parts.push(`note: ${jsStr(it.note)}`)
    if (it.emphasis) parts.push('emphasis: true')
    return `{ ${parts.join(', ')} }`
  }).join(', ')
  const attrs = [`kind=${jsStr(f.kind)}`]
  if (f.label) attrs.push(`label=${jsStr(f.label)}`)
  attrs.push(`caption=${jsStr(f.caption)}`)
  return `        <PostFigure\n          ${attrs.join('\n          ')}\n          items={[${items}]}\n        />`
}

const usesFigures = (brief.sections || []).some((s) => s.figure)

const body = brief.sections.map((s) => {
  const paras = s.paragraphs.map((p) => `        <p>\n          ${jsxText(p)}\n        </p>`).join('\n')
  const bullets = s.bullets?.length
    ? '\n        <ul>\n' + s.bullets.map((b) =>
        b.lead
          ? `          <li><strong>${jsxText(b.lead)}:</strong> ${jsxText(b.text)}</li>`
          : `          <li>${jsxText(b.text ?? b)}</li>`
      ).join('\n') + '\n        </ul>'
    : ''
  const figure = s.figure ? '\n' + renderFigure(s.figure) : ''
  return `        <h2>${jsxText(s.h2)}</h2>\n${paras}${bullets}${figure}`
}).join('\n\n')

const related = brief.related?.length
  ? `\n        <h2>Related Reading</h2>\n        <ul>\n` +
    brief.related.map((r) => `          <li><a href="/${r.slug}/">${jsxText(r.title)}</a></li>`).join('\n') +
    `\n        </ul>\n`
  : ''

const page = `import BlogLayout from '@/components/BlogLayout'
import BlogStructuredData from '@/components/BlogStructuredData'${usesFigures ? "\nimport PostFigure from '@/components/PostFigure'" : ''}
import { getBlogPost } from '@/data/blog'
import { createMetadata } from '@/lib/seo'

const post = getBlogPost(${jsStr(brief.slug)})

export const metadata = createMetadata({
  title: \`\${post.title} | Muhammad Kashif\`,
  description: post.excerpt,
  path: \`/\${post.slug}/\`,
  image: post.image,
  imageAlt: post.imageAlt,
  keywords: post.tags,
  type: 'article',
  publishedTime: post.publishedAt,
  modifiedTime: post.updatedAt,
})

export default function ${pascal}() {
  return (
    <>
      <BlogStructuredData post={post} />
      <BlogLayout
        title={post.title}
        category={post.category}
        date={post.date}
        image={post.image}
        imageAlt={post.imageAlt}
        tags={post.tags}
        slug={post.slug}
      >
        <p>
          ${jsxText(brief.intro)}
        </p>

${body}

${related}
        <h2>Frequently Asked Questions</h2>
        {post.faqs.map((item) => (
          <div key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}

        <h2>Conclusion</h2>
        <p>
          ${jsxText(brief.conclusion)}
        </p>
      </BlogLayout>
    </>
  )
}
`

// ── Build the data/blog.js entry ───────────────────────────────────────

const entry = `  {
    slug: ${jsStr(brief.slug)},
    title: ${jsStr(brief.title)},
    category: ${jsStr(brief.category)},
    date: ${jsStr(human)},
    publishedAt: ${jsStr(iso)},
    updatedAt: ${jsStr(iso)},
    image: ${jsStr(brief.image)},
    imageAlt: ${jsStr(brief.imageAlt)},
    excerpt: ${jsStr(brief.excerpt)},
    tags: [${brief.tags.map(jsStr).join(', ')}],
    faqs: [
${brief.faqs.map((f) => `      {
        q: ${jsStr(f.q)},
        a: ${jsStr(f.a)},
      },`).join('\n')}
    ],
  },
`

const anchor = 'export const blogPosts = [\n'
if (!blogData.startsWith(anchor)) {
  console.error('data/blog.js does not start with the expected `export const blogPosts = [`.')
  process.exit(1)
}
// --force regenerates the page, so it must REPLACE the existing entry
// rather than add a second one. Inserting blindly produced a duplicate slug
// that the publish guard caught — silently, it would have broken getBlogPost
// and the sitemap.
const existing = new RegExp(`\\n  \\{\\n    slug: '${brief.slug}',[\\s\\S]*?\\n  \\},\\n`)
if (existing.test(blogData)) {
  if (!force) {
    console.error(`data/blog.js already has an entry for "${brief.slug}". Use --force to replace it.`)
    process.exit(1)
  }
  blogData = blogData.replace(existing, '\n')
  console.log(`replaced existing data/blog.js entry for ${brief.slug}`)
}
blogData = anchor + entry + blogData.slice(anchor.length)

// ── Write ──────────────────────────────────────────────────────────────

fs.mkdirSync(postDir, { recursive: true })
fs.writeFileSync(path.join(postDir, 'page.js'), page)
fs.writeFileSync(blogDataPath, blogData)

console.log(`created  app/${brief.slug}/page.js`)
console.log(`updated  data/blog.js  (entry inserted at top)`)

const imageFile = path.join(ROOT, 'public', brief.image.replace(/^\//, ''))
if (!brief.image.startsWith('/api/cover/') && !fs.existsSync(imageFile)) {
  console.log(`\nWARNING  public${brief.image} does not exist.`)
  console.log(`         The post will render with a broken hero image until you add it.`)
}

const words = [brief.intro, ...brief.sections.flatMap((s) => s.paragraphs), brief.conclusion]
  .join(' ').trim().split(/\s+/).length
console.log(`\n${words} words across ${brief.sections.length} sections, ${brief.faqs.length} FAQs.`)
if (words < 900) console.log('WARNING  under 900 words — likely too thin to rank.')
