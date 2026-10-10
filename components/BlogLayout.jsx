'use client'
// Layout for every blog article (app/<slug>/page.js). The props are part of the blog
// bot's contract — scripts/new-post.mjs writes pages that pass exactly these — so keep
// the signature stable. JSON-LD and metadata stay in each page (BlogStructuredData).
import { useEffect, useRef, useState } from 'react'
import LxShell from '@/components/lx/LxShell'
import { Icon, Pill } from '@/components/lx/Icons'
import { blogPosts } from '@/data/blog'
import CommentSection from '@/components/CommentSection'
import { servicePresentation } from '@/data/service-presentation'

export default function BlogLayout({ children, title, category, date, image, imageAlt, imageCaption, service, tags, slug }) {
  const postDetails = blogPosts.find(post => post.slug === slug)
  const caption = imageCaption || postDetails?.imageCaption
  const serviceSlug = service || postDetails?.service
  const serviceDetail = servicePresentation[serviceSlug]
  const articleRef = useRef(null)
  const [contents, setContents] = useState([])
  const [active, setActive] = useState('')
  const [minutes, setMinutes] = useState(null)

  // Table of contents from the article's h2s (ids are added if missing), and the
  // section currently on screen.
  useEffect(() => {
    const article = articleRef.current
    if (!article) return
    const headings = Array.from(article.querySelectorAll('h2'))
    setContents(headings.map((heading, index) => {
      if (!heading.id) heading.id = `section-${index + 1}`
      return { id: heading.id, title: heading.textContent }
    }))
    const words = (article.textContent || '').trim().split(/\s+/).length
    setMinutes(Math.max(1, Math.round(words / 220)))
    // The current section is the last heading that has scrolled past the top third.
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.3
      let current = ''
      for (const h of headings) { if (h.getBoundingClientRect().top <= line) current = h.id; else break }
      setActive(current)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
  }, [slug])

  const relatedPosts = blogPosts
    .filter(post => post.slug !== slug)
    .sort((a, b) => Number(b.category === category) - Number(a.category === category))
    .slice(0, 3)

  return (
    <LxShell>
      <main id="main-content">
        <section className="ahero">
          <div className="shell ahero__in">
            <nav className="phero__crumbs rv" data-gate="" style={{ '--ry': '10px', '--rd': '200ms' }} aria-label="Breadcrumb">
              <a href="/">Home</a><span aria-hidden="true">/</span><a href="/blog/">Blog</a><span aria-hidden="true">/</span><span>{category}</span>
            </nav>
            <h1 className="ahero__h1 lines" data-gate="" data-delay="250" data-stagger="90">{title}</h1>
            <div className="byline rv" data-gate="" style={{ '--ry': '10px', '--rd': '550ms' }}>
              <img src="/images/kashif-portrait-ivory-v1.webp" alt="" width="44" height="44" />
              <span>
                <a href="/about/">Muhammad Kashif</a>
                <small>{date}{minutes ? ` · ${minutes} min read` : ''}</small>
              </span>
            </div>
          </div>
        </section>

        {image && (
          <div className="shell">
            <figure className="acover rv" data-gate="" style={{ '--ry': '20px', '--rd': '400ms' }}>
              <img src={image} alt={imageAlt || title} width="1600" height="900" fetchPriority="high" />
              {caption && <figcaption>{caption}</figcaption>}
            </figure>
          </div>
        )}

        <div className="shell agrid">
          <div className="agrid__main">
            <article ref={articleRef} className="prose">{children}</article>
            <CommentSection postSlug={slug} />
          </div>
          <aside className="agrid__side">
            {contents.length > 0 && (
              <nav className="aside-card toc" aria-label="In this article">
                <p className="eyebrow">In this guide</p>
                <ol>
                  {contents.map(item => (
                    <li key={item.id}><a href={`#${item.id}`} className={active === item.id ? 'is-active' : undefined}>{item.title}</a></li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="aside-card aside-card--dark">
              <p className="eyebrow eyebrow--light">Need it for your product?</p>
              <h2>Make it work for your listing.</h2>
              <p>Design support for your main images, A+ Content or brand store.</p>
              <Pill variant="light" arrow="up-right" href={serviceDetail ? `/services/${serviceSlug}/` : '/services/'}>{serviceDetail ? serviceDetail.title : 'Explore services'}</Pill>
            </div>
            {tags?.length > 0 && <div className="chips">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
          </aside>
        </div>

        <section className="section">
          <div className="shell section__in section__in--tight">
            <div className="sec-head sec-head--split">
              <div>
                <div className="rv" style={{ '--ry': '10px' }}><span className="eyebrow">Keep exploring</span></div>
                <h2 className="sec-h2 lines" data-delay="120" style={{ marginTop: '1.25rem' }}>More for your next move.</h2>
              </div>
              <div className="rv" style={{ '--ry': '12px', '--rd': '150ms' }}><Pill variant="outline" href="/blog/">All articles</Pill></div>
            </div>
            <ul className="atiles">
              {relatedPosts.map((post, i) => (
                <li key={post.slug} className="rv" style={{ '--rd': `${i * 90}ms` }}>
                  <a className="atile" href={`/${post.slug}/`}>
                    <div className="atile__img"><img src={post.image} alt={post.imageAlt || post.title} width="640" height="400" loading="lazy" /></div>
                    <div className="atile__body">
                      <div className="atile__meta"><span>{post.category}</span><span>{post.date}</span></div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="atile__foot"><span>Read the guide</span><span className="atile__badge"><Icon name="arrow-ur" /></span></div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </LxShell>
  )
}
