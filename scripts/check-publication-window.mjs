import fs from 'node:fs'
const dates = [...fs.readFileSync('data/blog.js', 'utf8').matchAll(/publishedAt:\s*'([^']+)'/g)].map(match => Date.parse(match[1]))
if (dates.some(date => !Number.isFinite(date)) || Date.now() - Math.max(0, ...dates) < 86400000) {
  console.error('Publication held: another article was published within 24 hours, or its timestamp is invalid. Retry this branch later.')
  process.exit(1)
}
