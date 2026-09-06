# Content pipeline

**Read this first.** For a while this document described
`.github/workflows/daily-post.yml` — a GitHub Action that wrote and published
a post every morning. That workflow was never committed. It did not exist,
the scheduled writer had been switched off in favour of it, and nothing was
publishing. This file now describes what actually runs.

## What actually runs

A scheduled Claude task, **"Blog post — muhammadkashif.net (daily)"**, fires
every day at 09:00 Kuching. It writes the
post itself, on the Max subscription, and pushes a `content/<slug>` branch.
There is no API key anywhere in this pipeline and nothing is metered per post.

`.github/workflows/publish-content.yml` then publishes it **automatically**.
No human reviews a post before it goes live. That was a deliberate decision,
and what stands in place of the review is `scripts/guard-post.mjs`.

The guard cannot tell whether a post is any good — that is the thing the human
click was actually for, and it is gone. What it can do is catch the failure
that costs the most: a confident invented number going out under Muhammad's
name in front of buyers paying $2,800. It holds a post that contains a
percentage, a multiplier, a dollar figure or a quantified claim that is not on
the allowlist of Amazon's own published image rules; anything that reads like
a client result; a word count outside 700-2200; a missing or duplicated
`data/blog.js` entry; or a hero image that does not resolve.

A held post is **not** discarded. The branch stays exactly where it is and an
issue opens naming the reason. Fix the branch and push again, or merge it by
hand if the guard is wrong.

`scripts/generate-post.mjs` is the metered fallback. It needs
`ANTHROPIC_API_KEY` and is not used in normal operation.

`scripts/new-post.mjs` does the mechanical work, and both routes go through
it: give it a validated JSON brief and it generates `app/<slug>/page.js` and
the `data/blog.js` entry. The sitemap, the blog index, the article schema and
the FAQ schema all read from `data/blog.js`, so nothing else needs editing.

`.github/workflows/indexnow.yml` fires on any push that touches
`data/blog.js` and submits the new URL to IndexNow.

## Cadence, and what actually limits it

Daily, at Muhammad's instruction. `0 1 * * *`.

Daily is the schedule, not the output. The task does not work through a fixed
queue — it researches a fresh topic each morning and applies four tests: no
existing post covers it or anything close; a US brand owner would genuinely
search it; it sits in or beside the niche; and we can say something the
ranking pages do not. If nothing passes, it publishes nothing and reports why.

That matters here because the niche is small. Keyword research found all
thirteen target terms drawing under 100 US searches a month, seven with no
data at all. The supply of genuinely distinct, defensible topics is finite and
gets smaller with every post published, because test one compares against
everything already on the site. So expect a run of posts and then increasingly
frequent days where the task declines. **That is the design working, not a
fault.** A day with no post costs nothing; a thin near-duplicate splits your
own ranking against yourself and stays up forever.

`content/topics.json` still holds commissioning briefs and is still worth
refilling — it is a useful place to record a topic worth writing — but the
scheduled task does not read it. `scripts/generate-post.mjs`, the metered
fallback, is what consumes the queue.

To change the cadence, edit the schedule on the scheduled task. Twice a month
is `0 1 1,15 * *`; weekly Tuesdays is `0 1 * * 2`.

## Writing one by hand

Write the JSON brief, then `node scripts/new-post.mjs drafts/<slug>.json`.

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
