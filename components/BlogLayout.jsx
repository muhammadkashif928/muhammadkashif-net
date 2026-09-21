'use client'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import CommentSection from '@/components/CommentSection'
import { servicePresentation } from '@/data/service-presentation'
import ProjectCTA from '@/components/ProjectCTA'

export default function BlogLayout({ children, title, category, date, image, imageAlt, imageCaption, service, tags, slug }) {
  const postDetails = blogPosts.find(post => post.slug === slug)
  const caption = imageCaption || postDetails?.imageCaption
  const serviceDetail = servicePresentation[service || postDetails?.service]
  const articleRef = useRef(null)
  const [contents, setContents] = useState([])
  useEffect(() => {
    const headings = Array.from(articleRef.current?.querySelectorAll('h2') || [])
    setContents(headings.map((heading, index) => {
      if (!heading.id) heading.id = `section-${index + 1}`
      return { id: heading.id, title: heading.textContent }
    }))
  }, [slug])
  const relatedPosts = blogPosts.filter(post => post.slug !== slug).sort((a,b) => Number(b.category === category) - Number(a.category === category)).slice(0,3)
  return <><Navbar /><main id="main-content" className="interior-page article-page">
    <header className="article-header"><div className="studio-wrap"><Link className="page-breadcrumb" href="/blog/">← Resource library</Link><p className="studio-eyebrow">{category}</p><h1>{title}</h1><div className="article-byline"><img src="/images/kashif-portrait-ivory-v1.webp" alt="" width="40" height="40" /><span><Link href="/about/">Muhammad Kashif</Link> <small>{date}</small></span></div>
      {image && <figure><img className="article-cover" src={image} alt={imageAlt || title} width="1600" height="900" fetchPriority="high" />{caption && <figcaption className="fine-print">{caption}</figcaption>}</figure>}
    </div></header>
    <div className="studio-wrap article-grid"><div><article ref={articleRef} className="prose-custom">{children}</article><CommentSection postSlug={slug} /></div><aside className="article-sidebar">
      {contents.length > 0 && <nav className="sidebar-card" aria-label="In this article"><h2>In this guide</h2>{contents.map(item => <a key={item.id} href={`#${item.id}`}>{item.title}</a>)}</nav>}
      <div className="sidebar-card"><h2>Make it work for your product.</h2><p>Get design support for your listing, A+ Content or brand store.</p><Link className="studio-button" href={serviceDetail ? `/services/${service || postDetails.service}/` : "/services/"}>{serviceDetail ? serviceDetail.title : "Explore services"} ↗</Link></div>
      {tags?.length > 0 && <div className="article-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
    </aside></div>
    <section className="interior-section"><div className="studio-wrap"><p className="studio-eyebrow">KEEP EXPLORING</p><h2 className="studio-heading">More for your next move.</h2><div className="article-related">{relatedPosts.map(post => <Link key={post.slug} href={`/${post.slug}/`}><img src={post.image} alt={post.imageAlt || post.title} width="640" height="400" loading="lazy" /><h3>{post.title}</h3><span>Read the guide ↗</span></Link>)}</div></div></section><ProjectCTA />
  </main><Footer /></>
}
