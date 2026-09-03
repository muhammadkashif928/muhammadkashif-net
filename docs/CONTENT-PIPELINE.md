# Content pipeline

One post a day, written and published automatically by
`.github/workflows/daily-post.yml`. It runs on GitHub's infrastructure at
08:00 UTC — no laptop, no local shell, nothing that has to be online.

## How a post gets made

1. `scripts/generate-post.mjs` takes the first topic in `content/topics.json`
   that is not already published.
2. It sends this document, plus an existing post as a voice reference, plus
   every published title, to the model, which researches the topic and returns
   a brief.
3. `scripts/new-post.mjs` validates that brief and generates
   `app/<slug>/page.js` and the `data/blog.js` entry. The sitemap, the blog
   index, the article schema and the FAQ schema all read from `data/blog.js`,
   so nothing else needs editing.
4. The topic moves from `queue` to `used`, the workflow commits to `main`,
   Vercel deploys, and the new URL is submitted to IndexNow.
5. When the queue empties, the workflow opens an issue instead of publishing
   filler. **Refill `content/topics.json` before that happens** — it is the
   thing that keeps daily output from turning into thirty ways of saying the
   same thing.

To write one by hand, do the same thing: write the JSON brief, run
`node scripts/new-post.mjs drafts/<slug>.json`.

## Topics

Each queue entry is a commissioning brief, not a title. `angle` is the reason
the post deserves to exist — what it says that the pages currently ranking do
not. A topic without a real angle produces a post that adds nothing, and a
site full of those ranks worse than a site without them.

When refilling the queue, a topic qualifies only if all four hold:



A topic earns a post only if all four are true:

- **Nobody here has covered it.** Check every `slug` in `data/blog.js` first.
  A near-duplicate of an existing post is worse than no post — the two
  compete for the same query and both lose.
- **A US buyer would actually search it.** Not "interesting to designers".
  The reader is a private-label brand owner or Amazon manager, not a peer.
- **It sits in or next to the niche** — leather care, shoe care, footwear,
  and the Amazon listing craft around them. Generic Amazon advice is written
  better elsewhere by people with more traffic.
- **We can say something the top results don't.** If the ranking pages
  already answer it well and we would only be rephrasing, skip it and say so.

## House style

Match the existing posts — read `app/amazon-listing-audit-checklist/page.js`
before writing, it is the reference.

- **Second person, addressed to the seller.** "Your main image is competing
  against a screen full of rivals", not "sellers should consider".
- **Mechanism, not assertion.** Do not say an image converts better. Say what
  it does to the shopper and why that changes the decision. Every claim
  should survive the question "how do you know".
- **Concrete over abstract.** Real slot counts, real image sequences, real
  mistakes you have seen in leather and shoe-care listings.
- **No hype.** No "in today's competitive marketplace", no "game-changer",
  no "unlock". No opening that restates the title.
- **American English** — optimization, recognizable, color.
- **Never invent** a statistic, a client result, an Amazon policy detail or a
  date. If a number would help and we do not have one, write the sentence
  without it. Amazon's requirements change; describe what is stable and avoid
  quoting thresholds that may have moved.
- **Do not pitch.** No "contact me" in the body. The layout handles that.
  The conclusion restates the mechanism and stops.

## Shape

- 1,000-1,400 words of body. Under 900 the script warns you.
- 4-7 `h2` sections. Each one answers a question the previous section raises.
- Bullets only where the content is genuinely a list — a checklist, an image
  stack, a set of failure modes. Prose is the default.
- 3-4 FAQs. These become FAQ schema, so write real questions a buyer would
  type, and answer each in two or three sentences that stand alone.
- The conclusion is a paragraph, not a summary of the headings.

## Images

Covers are generated, not made by hand. `post.image` is `/api/cover/<slug>`,
served by `app/api/cover/[slug]/route.js` — a typographic cover built from the
post title in the site's own black / acid-yellow / Bebas system, rendered on
Vercel and cached permanently. Nothing to design, nothing to upload, and every
post looks deliberate.

To give a post a real photograph instead, set `image` to a normal path in
`public/` and the cover route is bypassed.

## Reviewing after the fact

Posts go live without review, so the review happens afterwards. The Monday
brief reports what was published. Read the week's posts then, and if one is
weak, delete `app/<slug>/` and its `data/blog.js` entry — the URL 404s and the
sitemap drops it on the next deploy.

Watch for the two failure modes that matter: posts that overlap each other
(two pages competing for one query, and both losing), and posts that assert
something about Amazon's rules that nobody verified. The model is instructed
not to invent thresholds, but it is worth spot-checking.

## The trade being made

The niche is narrow. There are perhaps 40-60 genuinely distinct, useful posts
in it beyond the ones already written, and daily publishing works through that
in about two months. After that the queue has to be refilled with topics that
are actually new, or the site starts producing rephrasings that cannibalise
each other in search and match the pattern search engines classify as scaled
content abuse.

The site is also the primary evidence a $3,000 client uses to judge the work.
That is the real cost of a thin post, and it is why the queue matters more
than the schedule: the workflow will publish whatever is in it.
