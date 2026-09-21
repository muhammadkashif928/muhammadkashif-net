#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

export function selectDuePost(queue, now, otherPublicationTimes = []) {
  if (queue.intervalHours !== 24) throw new Error('Queue interval must be 24 hours')
  const pending = queue.posts.find(post => !post.publishedAt)
  if (!pending) return null
  const times = [...queue.posts.map(post => post.publishedAt), ...otherPublicationTimes].filter(Boolean).map(value => {
    const time = Date.parse(value)
    if (!Number.isFinite(time)) throw new Error(`Invalid publication date: ${value}`)
    return time
  })
  const last = Math.max(0, ...times)
  return now.getTime() - last >= 24 * 60 * 60 * 1000 ? pending : null
}

export function publishQueue(root, now = new Date(), checkOnly = false) {
  const queuePath = path.join(root, 'content/publish-queue.json')
  const queue = JSON.parse(fs.readFileSync(queuePath, 'utf8'))
  const blogPath = path.join(root, 'data/blog.js')
  const originalBlog = fs.readFileSync(blogPath, 'utf8')
  const times = [...originalBlog.matchAll(/publishedAt:\s*'([^']+)'/g)].map(match => match[1])
  const post = selectDuePost(queue, now, times)
  if (!post) { console.log('No post due. Queue complete or the 24-hour interval has not elapsed.'); return null }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug)) throw new Error('Invalid queued slug')
  if (checkOnly) { console.log(`Next due: ${post.slug}`); return post.slug }
  const pageDir = path.join(root, 'app', post.slug)
  if (fs.existsSync(pageDir)) throw new Error(`Queued page already exists: ${post.slug}`)
  const run = (script, args) => {
    const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], { cwd: root, stdio: 'inherit', env: { ...process.env, POST_PUBLISHED_AT: now.toISOString() } })
    if (result.status !== 0) throw new Error(`${script} failed`)
  }
  try {
    run('new-post.mjs', [path.join(root, 'content/scheduled', `${post.slug}.json`)])
    run('guard-post.mjs', [`app/${post.slug}/page.js`])
    post.publishedAt = now.toISOString()
    fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2) + '\n')
  } catch (error) {
    fs.writeFileSync(blogPath, originalBlog)
    fs.rmSync(pageDir, { recursive: true, force: true })
    throw error
  }
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `slug=${post.slug}\n`)
  console.log(`Published ${post.slug} at ${post.publishedAt}`)
  return post.slug
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  publishQueue(path.resolve(import.meta.dirname, '..'), new Date(), process.argv.includes('--check'))
}
