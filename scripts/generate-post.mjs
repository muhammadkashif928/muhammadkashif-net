#!/usr/bin/env node
/**
 * Daily post generator — OPTIONAL, metered fallback.
 *
 * Normal operation does NOT use this: the daily scheduled Claude task writes
 * the post on the Max subscription and calls scripts/new-post.mjs directly,
 * which costs nothing per post. This script exists for the case where you
 * want the pipeline to run without any Claude session involved at all, and
 * are willing to pay per post for an Anthropic API key.
 *
 * See docs/CONTENT-PIPELINE.md.
 *
 *   ANTHROPIC_API_KEY=... node scripts/generate-post.mjs
 *
 * 1. Takes the first topic in content/topics.json whose slug is not already
 *    published, and whose angle does not collide with an existing post.
 * 2. Asks the model to research it and return a brief in the exact shape
 *    scripts/new-post.mjs expects.
 * 3. Validates, scaffolds the post, moves the topic to `used`.
 *
 * Exits 78 (nothing to do) when the queue is empty — the workflow treats
 * that as a clean no-op rather than a failure.
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import process from 'node:process'

const ROOT = path.resolve(import.meta.dirname, '..')
const MODEL = process.env.POST_MODEL || 'claude-sonnet-4-5'
const KEY = process.env.ANTHROPIC_API_KEY

if (!KEY) { console.error('ANTHROPIC_API_KEY is not set.'); process.exit(1) }

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8')

// ── What already exists ────────────────────────────────────────────────

const blogSrc = read('data/blog.js')
const publishedSlugs = [...blogSrc.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
const publishedTitles = [...blogSrc.matchAll(/title:\s*'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1])

const topicsPath = path.join(ROOT, 'content/topics.json')
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'))

const next = topics.queue.find((t) => !publishedSlugs.includes(t.slug))
if (!next) {
  console.log('Queue is empty or fully published. Nothing to do.')
  console.log('Refill content/topics.json.')
  process.exit(78)
}

console.log(`Topic: ${next.slug} — ${next.workingTitle}`)

// ── Ask for the brief ──────────────────────────────────────────────────

const houseStyle = read('docs/CONTENT-PIPELINE.md')
const voiceSample = read('app/amazon-listing-audit-checklist/page.js')

const system = `You write for muhammadkashif.net, the site of Muhammad Kashif — an Amazon listing and A+ Content designer specialising in leather care, shoe care and footwear brands. His buyers are US private-label brand owners.

You are given the house style below. Follow it exactly. It is not advisory.

<house_style>
${houseStyle}
</house_style>

<voice_reference>
This is an existing post. Match its voice, density and structure.
${voiceSample.slice(0, 6000)}
</voice_reference>

HARD RULES — a violation makes the post unusable:
- Invent nothing. No statistics, no client results, no percentages, no Amazon policy thresholds you have not confirmed by search. If a number would strengthen a sentence but you do not have it, write the sentence without the number.
- Amazon's requirements change. Describe what is stable and do not quote specific thresholds unless a search confirmed them today.
- No hype, no "in today's competitive marketplace", no "game-changer", no "unlock", no opening that restates the title.
- Second person, addressed to the seller. American English.
- Do not pitch. No "contact me", no "get in touch". The page layout handles that.
- Never reuse phrasing or section structure from pages you read while researching.

Return ONLY a JSON object, no prose around it, no markdown fence.`

const user = `Write today's post.

TOPIC: ${next.workingTitle}
SLUG:  ${next.slug}
ANGLE: ${next.angle}
SEARCH INTENT: ${next.intent}

Already published on this site — your post must not overlap any of these:
${publishedTitles.map((t, i) => `- ${publishedSlugs[i]}: ${t}`).join('\n')}

Research the topic first. Read what currently ranks in US results and understand where those pages are vague or generic, then be specific where they are not. Your post must be better on substance, not longer.

Pick 2-3 of the published slugs above that a reader of this post would genuinely want next, and return them in "related".

Return this exact JSON shape:

{
  "slug": "${next.slug}",
  "title": "20-75 chars, no colon-subtitle padding",
  "category": "one of: Amazon Listing Optimization | Amazon Product Images | Amazon SEO | Brand Design",
  "imageAlt": "20+ chars describing the post subject",
  "excerpt": "110-170 chars. A real summary, not a teaser.",
  "tags": ["2 to 4 tags"],
  "faqs": [{ "q": "a question a buyer would actually type", "a": "2-3 sentences that stand alone" }],
  "intro": "Opening paragraph, 200+ chars. Start with the problem, not the topic.",
  "sections": [
    { "h2": "Heading", "paragraphs": ["..."], "bullets": [{ "lead": "Bold lead-in", "text": "rest of the point" }] }
  ],
  "conclusion": "150+ chars. Restate the mechanism. Do not summarise the headings.",
  "related": [{ "slug": "existing-slug", "title": "Its title" }]
}

4-7 sections. 1000-1400 words across intro + section paragraphs + conclusion. Bullets only where the content is genuinely a list; omit the key otherwise.`

async function ask(useSearch) {
  const body = {
    model: MODEL,
    max_tokens: 8000,
    system,
    messages: [{ role: 'user', content: user }],
  }
  if (useSearch) {
    body.tools = [{ type: 'web_search_20250305', name: 'web_search', max_uses: 6 }]
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 400)}`)
  const json = await res.json()
  return json.content.filter((b) => b.type === 'text').map((b) => b.text).join('')
}

let raw
try {
  raw = await ask(true)
} catch (err) {
  console.warn(`Web search unavailable (${err.message.slice(0, 120)}). Retrying without it.`)
  raw = await ask(false)
}

// ── Parse ──────────────────────────────────────────────────────────────

const start = raw.indexOf('{')
const end = raw.lastIndexOf('}')
if (start === -1 || end === -1) {
  console.error('No JSON object in the response. First 500 chars:\n' + raw.slice(0, 500))
  process.exit(1)
}

let brief
try {
  brief = JSON.parse(raw.slice(start, end + 1))
} catch (err) {
  console.error('Response was not valid JSON: ' + err.message)
  process.exit(1)
}

brief.slug = next.slug
brief.image = `/api/cover/${next.slug}`

// Drop related links that point at posts which do not exist.
brief.related = (brief.related || []).filter((r) => publishedSlugs.includes(r.slug)).slice(0, 3)

fs.mkdirSync(path.join(ROOT, 'drafts'), { recursive: true })
const briefPath = path.join(ROOT, 'drafts', `${next.slug}.json`)
fs.writeFileSync(briefPath, JSON.stringify(brief, null, 2))

// ── Scaffold ───────────────────────────────────────────────────────────

execFileSync('node', [path.join(ROOT, 'scripts/new-post.mjs'), briefPath], { stdio: 'inherit' })

// ── Advance the queue ──────────────────────────────────────────────────

topics.queue = topics.queue.filter((t) => t.slug !== next.slug)
topics.used.unshift({ ...next, publishedOn: new Date().toISOString().slice(0, 10), title: brief.title })
fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2) + '\n')

if (topics.queue.length <= 10) {
  console.log(`\nNOTICE  only ${topics.queue.length} topics left in the queue. Refill content/topics.json.`)
}

// Hand the slug and title back to the workflow.
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `slug=${next.slug}\ntitle=${brief.title.replace(/\n/g, ' ')}\nremaining=${topics.queue.length}\n`)
}

console.log(`\nDone: ${brief.title}`)
