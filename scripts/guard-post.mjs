#!/usr/bin/env node
/**
 * Publish guard.
 *
 * The blog now publishes with no human in the loop, so this stands where the
 * merge review used to. It cannot judge whether a post is any good — that was
 * the thing the human click was actually for, and it is gone. What it can do
 * is catch the specific failure that costs the most: a confident, invented
 * number going out under Muhammad's name in front of buyers paying $2,800.
 *
 * A post that trips any check is NOT published. The branch stays, and the
 * workflow opens an issue naming the reason. Nothing is silently dropped.
 *
 *   node scripts/guard-post.mjs app/<slug>/page.js
 *
 * Exit 0 = safe to publish. Exit 1 = hold for a human.
 */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const files = process.argv.slice(2)
const problems = []
const notes = []

if (files.length === 0) {
  console.error('guard: no post file given')
  process.exit(1)
}
if (files.length > 1) {
  problems.push(`${files.length} post files changed in one branch — expected exactly one`)
}

const file = files[0]
if (!fs.existsSync(file)) {
  console.error(`guard: ${file} does not exist`)
  process.exit(1)
}

const source = fs.readFileSync(file, 'utf8')
const slug = path.basename(path.dirname(file))

// ── Prose only. JSX tags, imports and prop names are not the writing. ──
const prose = source
  .replace(/^import[\s\S]*?\n\n/, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\{[^{}]*\}/g, ' ')
  .replace(/&[a-z]+;/g, ' ')

// ── 1. Numeric claims ────────────────────────────────────────────────
// Every one of these is a promise about the world that a reader may act on,
// and the model has no way to have verified most of them. Percentages,
// multipliers, money, and the "Amazon requires N" shape of sentence.
const CLAIM_PATTERNS = [
  { re: /\b\d+(?:\.\d+)?\s?%/g, what: 'a percentage' },
  { re: /\b\d+(?:\.\d+)?\s?x\b/gi, what: 'a multiplier (e.g. "3x")' },
  { re: /\$\s?\d/g, what: 'a dollar figure' },
  { re: /\b(?:at least|more than|over|under|up to|as much as|as many as)\s+\d+/gi, what: 'a quantified claim' },
  { re: /\b\d+\s?(?:percent|times more|times as)\b/gi, what: 'a quantified comparison' },
]

// Amazon's own published image rules are stable, checkable, and genuinely
// useful in this niche, so they are allowed by exact phrase. Anything else
// numeric holds the post.
const ALLOWED = [
  /85\s?%\s+of\s+the\s+frame/i,      // main image fill requirement
  /1[,.]?600\s?(?:px|pixels)/i,      // long side for zoom
  /500\s?(?:px|pixels)/i,            // minimum long side
  /10\s?(?:mb|megabytes)/i,          // file size ceiling
]

for (const { re, what } of CLAIM_PATTERNS) {
  for (const m of prose.matchAll(re)) {
    const hit = m[0].trim()
    const around = prose.slice(Math.max(0, m.index - 90), m.index + 90).replace(/\s+/g, ' ').trim()
    if (ALLOWED.some((a) => a.test(around))) { notes.push(`allowed: "${hit}"`); continue }
    problems.push(`Unverifiable ${what}: "${hit}"\n      …${around}…`)
  }
}

// ── 2. Client results must never appear outside the case study ───────
if (/\b(?:traffic|sales|conversion|ctr|clicks?)\b[^.]{0,60}\b(?:up|rose|increased|grew|jumped|improved)\b/i.test(prose)) {
  problems.push('Reads like a client result. Those belong in the case study, attributed, not in a post.')
}

// ── 3. Length ────────────────────────────────────────────────────────
const words = prose.split(/\s+/).filter((w) => /[a-z]/i.test(w)).length
if (words < 700) problems.push(`Only ~${words} words of prose — too thin to publish`)
if (words > 2200) problems.push(`~${words} words — longer than the house style allows, likely padded`)

// ── 3b. It has to look like a designer wrote it ──────────────────────
// A listing designer publishing walls of unbroken text argues against the
// service being sold. These are cheap to satisfy and the absence is glaring.
const figures = (source.match(/<PostFigure/g) || []).length
if (figures === 0) problems.push('No figures. A design blog with no visuals undercuts the thing it is selling.')

const internal = new Set([...source.matchAll(/href="\/([a-z0-9-]+)\/"/g)].map((m) => m[1]))
internal.delete(slug)
if (internal.size < 2) {
  problems.push(`Only ${internal.size} internal link(s). Orphan posts do not rank and do not move readers to the work.`)
}

// ── 4. The entry has to actually exist and be unique ─────────────────
const blog = fs.readFileSync('data/blog.js', 'utf8')
const slugCount = [...blog.matchAll(new RegExp(`slug:\\s*['"\`]${slug}['"\`]`, 'g'))].length
if (slugCount === 0) problems.push(`No entry for "${slug}" in data/blog.js`)
if (slugCount > 1) problems.push(`"${slug}" appears ${slugCount} times in data/blog.js`)

// ── 5. The hero image has to be a real file ──────────────────────────
const imageMatch = blog.match(new RegExp(`slug:\\s*['"\`]${slug}['"\`][\\s\\S]{0,900}?image:\\s*['"\`]([^'"\`]+)['"\`]`))
if (imageMatch) {
  const src = imageMatch[1]
  // Covers generated at the edge have no file on disk; they are a route.
  if (src.startsWith('/api/cover/')) {
    const covered = src.replace('/api/cover/', '').replace(/\/$/, '')
    if (covered !== slug) problems.push(`Generated cover points at "${covered}", not "${slug}"`)
  } else if (!fs.existsSync(path.join('public', src.replace(/^\//, '')))) {
    problems.push(`Hero image not found on disk: ${src}`)
  }
} else {
  problems.push(`Could not read the hero image path for "${slug}"`)
}

// ── Verdict ──────────────────────────────────────────────────────────
console.log(`guard: ${slug} — ~${words} words`)
for (const n of notes) console.log(`  ${n}`)

if (problems.length) {
  console.log(`\nHOLD — ${problems.length} issue(s), not publishing:\n`)
  for (const p of problems) console.log(`  • ${p}\n`)
  process.exit(1)
}

console.log('\nOK — safe to publish.')
process.exit(0)
