import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { selectDuePost, publishQueue } from './publish-queued.mjs'
const at = new Date('2026-09-22T01:00:00Z')
const queue = { intervalHours: 24, posts: [{ slug: 'one', publishedAt: at.toISOString() }, { slug: 'two', publishedAt: null }] }
test('publication boundary and retries never release early', () => {
  assert.equal(selectDuePost(queue, new Date(+at + 86400000 - 1)), null)
  assert.equal(selectDuePost(queue, new Date(+at + 86400000)).slug, 'two')
  assert.equal(selectDuePost(queue, new Date(+at + 86400000), [new Date(+at + 3600000).toISOString()]), null)
  assert.equal(selectDuePost({intervalHours:24,posts:[]}, at), null)
})
test('five-post campaign publishes once per day; failures roll back', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'kashif-queue-'))
  try {
    for (const dir of ['scripts', 'data', 'content', 'public/images/blog']) fs.cpSync(path.resolve(dir), path.join(root,dir), {recursive:true})
    fs.mkdirSync(path.join(root, 'app'))
    const initial = new Date('2027-01-01T01:00:00Z')
    const expected = JSON.parse(fs.readFileSync(path.join(root,'content/publish-queue.json'))).posts.map(p=>p.slug)
    // Reset only the isolated fixture so this test also works after real releases.
    fs.writeFileSync(path.join(root, 'content/publish-queue.json'), JSON.stringify({intervalHours:24,posts:expected.map(slug=>({slug,publishedAt:null}))}))
    let fixtureBlog = fs.readFileSync(path.join(root,'data/blog.js'),'utf8')
    for (const slug of expected) fixtureBlog = fixtureBlog.replace(new RegExp(`  \\{\\n    slug: '${slug}',[\\s\\S]*?\\n  \\},\\n`), '')
    fs.writeFileSync(path.join(root,'data/blog.js'),fixtureBlog)
    // Failed asset validation must leave the index and queue untouched.
    const image = path.join(root, 'public/images/blog', `${expected[0]}.webp`)
    const imageBytes = fs.readFileSync(image)
    const before = fs.readFileSync(path.join(root,'data/blog.js'),'utf8')
    fs.unlinkSync(image)
    assert.throws(()=>publishQueue(root, initial), /guard-post/)
    assert.equal(fs.readFileSync(path.join(root,'data/blog.js'),'utf8'),before)
    assert.equal(fs.existsSync(path.join(root,'app',expected[0])),false)
    fs.writeFileSync(image,imageBytes)
    for(let i=0;i<5;i++) {
      const when=new Date(+initial+i*86400000)
      assert.equal(publishQueue(root,when),expected[i])
      assert.equal(publishQueue(root,when),null)
      assert.equal(publishQueue(root,new Date(+when+86399999)),null)
    }
    assert.equal(publishQueue(root,new Date(+initial+20*86400000)),null)
    const published=JSON.parse(fs.readFileSync(path.join(root,'content/publish-queue.json'))).posts
    assert.equal(published.filter(p=>p.publishedAt).length,5)
  } finally {fs.rmSync(root,{recursive:true,force:true})}
})
