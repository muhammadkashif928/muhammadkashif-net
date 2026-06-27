'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { portfolioProjects } from '@/data/portfolio'
import { blogPosts } from '@/data/blog'

const COVER_LETTER_URL = encodeURI('/cover-letter-editor (final) (2).html')

const NAV = [
  { id: 'overview',     icon: '▣',  label: 'Overview' },
  { id: 'cover-letter', icon: '✎',  label: 'Cover Letter' },
  { id: 'portfolio',    icon: '◈',  label: 'Portfolio' },
  { id: 'blog',         icon: '✦',  label: 'Blog Posts' },
  { id: 'comments',     icon: '◎',  label: 'Comments' },
]

// ── Section: Overview ──────────────────────────────────────────────────────
function Overview({ user, onNav }) {
  const [commentCount, setCommentCount] = useState('—')

  useEffect(() => {
    fetch('/api/admin/comments?limit=1')
      .then(r => r.json())
      .then(d => setCommentCount(d.total ?? d.comments?.length ?? '—'))
      .catch(() => setCommentCount('—'))
  }, [])

  const stats = [
    { label: 'Portfolio Projects', value: portfolioProjects.length, action: () => onNav('portfolio'), color: '#e8e800' },
    { label: 'Blog Articles',      value: blogPosts.length,         action: () => onNav('blog'),      color: '#e8e800' },
    { label: 'Total Comments',     value: commentCount,             action: () => onNav('comments'),  color: '#e8e800' },
  ]

  const quickActions = [
    { label: 'Edit Cover Letter', desc: 'Open the cover letter editor', icon: '✎', action: () => onNav('cover-letter') },
    { label: 'View Portfolio',    desc: 'See all portfolio projects',    icon: '◈', href: '/my-portfolio/' },
    { label: 'View Blog',         desc: 'Read all published articles',   icon: '✦', href: '/blog/' },
    { label: 'Visit Live Site',   desc: 'Open muhammadkashif.net',       icon: '↗', href: '/' },
  ]

  return (
    <div className="p-6 sm:p-8 max-w-5xl">
      {/* Welcome */}
      <div className="mb-8">
        <p className="font-mono text-[9px] tracking-[0.3em] text-[#e8e800]/60 mb-1">▶ WELCOME BACK</p>
        <h1 className="font-bebas text-[clamp(2rem,5vw,3.5rem)] leading-none text-[#f5f5f0]">
          GOOD {new Date().getHours() < 12 ? 'MORNING' : new Date().getHours() < 18 ? 'AFTERNOON' : 'EVENING'},<br />
          {user.toUpperCase()}
        </h1>
        <p className="font-mono text-xs text-[#f5f5f0]/35 mt-2 tracking-widest">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
        {stats.map(s => (
          <button
            key={s.label}
            onClick={s.action}
            className="border-2 border-[#f5f5f0]/10 bg-[#111] p-4 sm:p-6 text-left hover:border-[#e8e800]/40 transition-all group"
          >
            <p className="font-bebas text-3xl sm:text-4xl leading-none text-[#e8e800] group-hover:text-white transition-colors">
              {s.value}
            </p>
            <p className="font-mono text-[8px] sm:text-[9px] text-[#f5f5f0]/40 tracking-widest mt-2 uppercase">{s.label}</p>
          </button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <p className="font-mono text-[9px] tracking-[0.3em] text-[#f5f5f0]/30 mb-4">QUICK ACTIONS</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {quickActions.map(a => (
            a.href ? (
              <a key={a.label} href={a.href} target={a.href.startsWith('/') ? undefined : '_blank'} rel="noopener noreferrer"
                className="flex items-center gap-4 border-2 border-[#f5f5f0]/10 bg-[#111] p-4 hover:border-[#e8e800]/30 transition-all group">
                <span className="font-bebas text-2xl text-[#e8e800]/60 group-hover:text-[#e8e800] transition-colors w-8 text-center">{a.icon}</span>
                <div>
                  <p className="font-bebas text-base tracking-widest text-[#f5f5f0] leading-tight">{a.label}</p>
                  <p className="font-mono text-[9px] text-[#f5f5f0]/35">{a.desc}</p>
                </div>
                <span className="ml-auto text-[#f5f5f0]/20 group-hover:text-[#e8e800] text-lg transition-colors">→</span>
              </a>
            ) : (
              <button key={a.label} onClick={a.action}
                className="flex items-center gap-4 border-2 border-[#f5f5f0]/10 bg-[#111] p-4 hover:border-[#e8e800]/30 transition-all group text-left">
                <span className="font-bebas text-2xl text-[#e8e800]/60 group-hover:text-[#e8e800] transition-colors w-8 text-center">{a.icon}</span>
                <div>
                  <p className="font-bebas text-base tracking-widest text-[#f5f5f0] leading-tight">{a.label}</p>
                  <p className="font-mono text-[9px] text-[#f5f5f0]/35">{a.desc}</p>
                </div>
                <span className="ml-auto text-[#f5f5f0]/20 group-hover:text-[#e8e800] text-lg transition-colors">→</span>
              </button>
            )
          ))}
        </div>
      </div>

      {/* Site info */}
      <div className="border border-[#f5f5f0]/8 p-5 bg-[#0d0d0d]">
        <p className="font-mono text-[9px] tracking-[0.3em] text-[#f5f5f0]/30 mb-3">SITE INFO</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            ['Domain', 'muhammadkashif.net'],
            ['Platform', 'Next.js + Vercel'],
            ['Database', 'Neon PostgreSQL'],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-[8px] text-[#f5f5f0]/25 tracking-widest">{k}</p>
              <p className="font-mono text-[10px] text-[#f5f5f0]/60 mt-0.5">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Section: Cover Letter ──────────────────────────────────────────────────
function CoverLetter() {
  const [iframeKey, setIframeKey] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    if (!fullscreen) return
    const handler = (e) => { if (e.key === 'Escape') setFullscreen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [fullscreen])

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-[#f5f5f0]/8 bg-[#0d0d0d] shrink-0">
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#e8e800]/60">▶ COVER LETTER EDITOR</p>
          <p className="font-mono text-[10px] text-[#f5f5f0]/30 mt-0.5">Edit fields on the left · Preview updates live · Download via Print</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIframeKey(k => k + 1)}
            className="font-mono text-[9px] tracking-widest text-[#f5f5f0]/40 hover:text-[#f5f5f0] border border-[#f5f5f0]/10 hover:border-[#f5f5f0]/30 px-3 py-2 transition-all">
            ↻ RELOAD
          </button>
          <button onClick={() => setFullscreen(true)}
            className="font-mono text-[9px] tracking-widest text-[#f5f5f0]/40 hover:text-[#e8e800] border border-[#f5f5f0]/10 hover:border-[#e8e800] px-3 py-2 transition-all">
            ⊞ FULLSCREEN
          </button>
        </div>
      </div>

      {/* Iframe */}
      <div className="flex-1">
        <iframe key={iframeKey} src={COVER_LETTER_URL} title="Cover Letter Editor"
          className="w-full border-0" style={{ height: 'calc(100vh - 130px)' }} allow="print" />
      </div>

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]">
          <button onClick={() => setFullscreen(false)}
            className="absolute top-3 right-3 z-10 font-mono text-[9px] tracking-widest text-[#f5f5f0]/60 hover:text-[#e8e800] bg-[#0a0a0a]/90 border border-[#f5f5f0]/20 hover:border-[#e8e800] px-3 py-2 transition-all">
            ✕ EXIT (ESC)
          </button>
          <iframe key={iframeKey + 100} src={COVER_LETTER_URL} title="Cover Letter Editor"
            className="w-full h-full border-0" allow="print" />
        </div>
      )}
    </div>
  )
}

// ── Section: Portfolio ─────────────────────────────────────────────────────
function Portfolio() {
  return (
    <div className="p-6 sm:p-8 max-w-5xl">
      <div className="mb-6">
        <p className="font-mono text-[9px] tracking-[0.3em] text-[#e8e800]/60 mb-1">▶ PORTFOLIO MANAGEMENT</p>
        <h2 className="font-bebas text-3xl text-[#f5f5f0]">ALL PROJECTS ({portfolioProjects.length})</h2>
        <p className="font-mono text-[9px] text-[#f5f5f0]/30 mt-1">Ordered newest → oldest. Top 3 appear on homepage automatically.</p>
      </div>

      <div className="flex flex-col gap-0 border-t border-[#f5f5f0]/10">
        {portfolioProjects.map((p, i) => (
          <div key={p.slug} className="flex items-center gap-4 border-b border-[#f5f5f0]/8 py-4 group">
            {/* Rank */}
            <span className="font-mono text-[10px] text-[#f5f5f0]/20 w-6 shrink-0 text-right">
              {String(i + 1).padStart(2, '0')}
            </span>
            {/* Thumbnail */}
            <div className="w-14 h-14 shrink-0 overflow-hidden border border-[#f5f5f0]/10 bg-[#111]">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-mono text-[8px] tracking-widest px-1.5 py-0.5 bg-[#e8e800]/10 text-[#e8e800]/70 border border-[#e8e800]/20">
                  {p.tag}
                </span>
                {i < 3 && (
                  <span className="font-mono text-[8px] tracking-widest px-1.5 py-0.5 bg-green-500/10 text-green-400/80 border border-green-500/20">
                    ON HOMEPAGE
                  </span>
                )}
              </div>
              <p className="font-bebas text-sm tracking-widest text-[#f5f5f0] truncate">{p.title}</p>
              <p className="font-mono text-[9px] text-[#f5f5f0]/30">{p.date} · {p.software.join(', ')}</p>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <a href={`/blackdsn-portfolio/${p.slug}/`} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[9px] tracking-widest text-[#f5f5f0]/30 hover:text-[#e8e800] border border-[#f5f5f0]/10 hover:border-[#e8e800] px-3 py-1.5 transition-all">
                VIEW →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border border-[#f5f5f0]/8 p-4 bg-[#0d0d0d]">
        <p className="font-mono text-[9px] text-[#f5f5f0]/30 leading-relaxed">
          💡 To change which 3 projects appear on the homepage, reorder the array in <code className="text-[#e8e800]/60">data/portfolio.js</code>.
          Projects at positions 1–3 always appear on the homepage.
        </p>
      </div>
    </div>
  )
}

// ── Section: Blog ──────────────────────────────────────────────────────────
function Blog() {
  const categories = [...new Set(blogPosts.map(p => p.category))]

  return (
    <div className="p-6 sm:p-8 max-w-5xl">
      <div className="mb-6">
        <p className="font-mono text-[9px] tracking-[0.3em] text-[#e8e800]/60 mb-1">▶ BLOG MANAGEMENT</p>
        <h2 className="font-bebas text-3xl text-[#f5f5f0]">ALL ARTICLES ({blogPosts.length})</h2>
        <p className="font-mono text-[9px] text-[#f5f5f0]/30 mt-1">{categories.length} categories · Newest first</p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <span key={cat} className="font-mono text-[8px] tracking-widest px-2.5 py-1 border border-[#f5f5f0]/15 text-[#f5f5f0]/40">
            {cat}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-0 border-t border-[#f5f5f0]/10">
        {[...blogPosts].reverse().map((post, i) => (
          <div key={post.slug} className="flex items-start gap-4 border-b border-[#f5f5f0]/8 py-4">
            <span className="font-mono text-[10px] text-[#f5f5f0]/20 w-6 shrink-0 text-right mt-0.5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[8px] tracking-widest px-1.5 py-0.5 bg-[#f5f5f0]/5 text-[#f5f5f0]/40 border border-[#f5f5f0]/10">
                  {post.category}
                </span>
                <span className="font-mono text-[8px] text-[#f5f5f0]/20">{post.date}</span>
              </div>
              <p className="font-bebas text-sm sm:text-base tracking-widest text-[#f5f5f0] leading-tight mb-1 truncate">
                {post.title}
              </p>
              <p className="font-mono text-[9px] text-[#f5f5f0]/30 leading-relaxed line-clamp-2">{post.excerpt}</p>
              {post.tags && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="font-mono text-[7px] tracking-widest px-1.5 py-0.5 bg-[#e8e800]/5 text-[#e8e800]/40 border border-[#e8e800]/10">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <a href={`/${post.slug}/`} target="_blank" rel="noopener noreferrer"
              className="shrink-0 font-mono text-[9px] tracking-widest text-[#f5f5f0]/30 hover:text-[#e8e800] border border-[#f5f5f0]/10 hover:border-[#e8e800] px-3 py-1.5 transition-all mt-0.5">
              READ →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Section: Comments ──────────────────────────────────────────────────────
function Comments() {
  const [comments, setComments] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/comments')
      if (!res.ok) throw new Error('failed')
      const data = await res.json()
      setComments(data.comments || [])
    } catch {
      setError('Could not load comments. Database may not be connected.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  function formatDate(iso) {
    try { return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) }
    catch { return iso }
  }

  return (
    <div className="p-6 sm:p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#e8e800]/60 mb-1">▶ COMMENT MANAGEMENT</p>
          <h2 className="font-bebas text-3xl text-[#f5f5f0]">
            ALL COMMENTS {!loading && `(${comments.length})`}
          </h2>
        </div>
        <button onClick={load}
          className="font-mono text-[9px] tracking-widest text-[#f5f5f0]/40 hover:text-[#f5f5f0] border border-[#f5f5f0]/10 hover:border-[#f5f5f0]/30 px-3 py-2 transition-all">
          ↻ REFRESH
        </button>
      </div>

      {loading ? (
        <div className="flex items-center gap-3 py-12">
          <div className="w-2 h-2 rounded-full bg-[#e8e800] animate-pulse" />
          <p className="font-mono text-xs text-[#f5f5f0]/40 tracking-widest">LOADING COMMENTS…</p>
        </div>
      ) : error ? (
        <div className="border border-red-500/20 bg-red-500/5 p-4">
          <p className="font-mono text-[10px] text-red-400">{error}</p>
        </div>
      ) : comments.length === 0 ? (
        <div className="border-2 border-dashed border-[#f5f5f0]/10 p-12 text-center">
          <p className="font-bebas text-3xl text-[#f5f5f0]/20 mb-2">NO COMMENTS YET</p>
          <p className="font-mono text-xs text-[#f5f5f0]/25">Comments submitted via blog posts will appear here.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {comments.map((c, i) => (
            <div key={c.id || i} className="border-2 border-[#f5f5f0]/10 bg-[#111] p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#e8e800]/10 border border-[#e8e800]/20 flex items-center justify-center shrink-0">
                    <span className="font-bebas text-sm text-[#e8e800]">{c.name?.charAt(0)?.toUpperCase()}</span>
                  </div>
                  <div>
                    <p className="font-bebas text-base tracking-wide text-[#f5f5f0] leading-tight">{c.name}</p>
                    {c.email && <p className="font-mono text-[9px] text-[#f5f5f0]/30">{c.email}</p>}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-[8px] text-[#f5f5f0]/25">{formatDate(c.created_at)}</p>
                  <a href={`/${c.post_slug}/`} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[8px] text-[#e8e800]/50 hover:text-[#e8e800] transition-colors">
                    {c.post_slug} →
                  </a>
                </div>
              </div>
              <p className="font-mono text-[10px] text-[#f5f5f0]/55 leading-relaxed pl-11 border-l border-[#f5f5f0]/10 ml-4">
                {c.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Dashboard ─────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser]           = useState('')
  const [active, setActive]       = useState('overview')
  const [loggingOut, setLoggingOut] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    fetch('/api/admin/auth')
      .then(r => r.json())
      .then(d => { if (d.authenticated) setUser(d.username); else router.replace('/admin/login') })
      .catch(() => router.replace('/admin/login'))
  }, [router])

  const handleLogout = async () => {
    setLoggingOut(true)
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.replace('/admin/login')
  }

  const navigate = (id) => {
    setActive(id)
    setSidebarOpen(false)
  }

  const activeNav = NAV.find(n => n.id === active)

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col" style={{ fontFamily: "'Space Mono', monospace" }}>

      {/* ── Top Bar ── */}
      <header className="flex items-center justify-between px-4 sm:px-6 h-14 border-b-2 border-[#f5f5f0]/10 bg-[#0a0a0a] shrink-0 z-20 sticky top-0">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button onClick={() => setSidebarOpen(s => !s)}
            className="lg:hidden font-mono text-[#f5f5f0]/50 hover:text-[#f5f5f0] text-lg w-9 h-9 flex items-center justify-center border border-[#f5f5f0]/10 transition-colors">
            {sidebarOpen ? '✕' : '☰'}
          </button>
          <div>
            <p className="font-bebas text-base sm:text-lg tracking-widest text-[#f5f5f0] leading-none">
              MK<span className="text-[#e8e800]">.</span> ADMIN
            </p>
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#f5f5f0]/25 hidden sm:block">MUHAMMADKASHIF.NET</p>
          </div>
          {/* Breadcrumb */}
          <div className="hidden sm:flex items-center gap-2 ml-2 pl-3 border-l border-[#f5f5f0]/10">
            <span className="font-mono text-[9px] text-[#e8e800]/60">{activeNav?.icon}</span>
            <span className="font-mono text-[9px] text-[#f5f5f0]/40 tracking-widest">{activeNav?.label?.toUpperCase()}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {user && (
            <div className="hidden sm:flex items-center gap-2 border border-[#f5f5f0]/10 px-3 py-1.5 mr-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#e8e800] animate-pulse" />
              <span className="font-mono text-[9px] text-[#f5f5f0]/40 tracking-widest">{user}</span>
            </div>
          )}
          <a href="/" className="font-mono text-[9px] tracking-widest text-[#f5f5f0]/35 hover:text-[#f5f5f0] border border-[#f5f5f0]/10 hover:border-[#f5f5f0]/30 px-3 py-1.5 transition-all">
            ← SITE
          </a>
          <button onClick={handleLogout} disabled={loggingOut}
            className="font-mono text-[9px] tracking-widest text-[#0a0a0a] bg-[#e8e800] hover:bg-white disabled:opacity-40 px-3 py-1.5 transition-all">
            {loggingOut ? '…' : 'SIGN OUT'}
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">

        {/* ── Sidebar ── */}
        <>
          {/* Mobile overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-10 bg-[#0a0a0a]/80 lg:hidden" onClick={() => setSidebarOpen(false)} />
          )}

          <aside className={`
            fixed lg:static inset-y-0 left-0 z-20
            w-56 bg-[#0d0d0d] border-r-2 border-[#f5f5f0]/10
            flex flex-col shrink-0
            transition-transform duration-200 lg:translate-x-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `} style={{ top: '56px', height: 'calc(100vh - 56px)' }}>

            {/* Nav items */}
            <nav className="flex-1 py-4 overflow-y-auto">
              <p className="font-mono text-[7px] tracking-[0.35em] text-[#f5f5f0]/20 px-5 mb-3">MAIN MENU</p>
              {NAV.map(item => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-all group border-l-2 ${
                    active === item.id
                      ? 'bg-[#e8e800]/8 border-[#e8e800] text-[#e8e800]'
                      : 'border-transparent text-[#f5f5f0]/40 hover:text-[#f5f5f0]/80 hover:bg-[#f5f5f0]/3'
                  }`}
                >
                  <span className={`text-base w-5 text-center ${active === item.id ? 'text-[#e8e800]' : 'text-[#f5f5f0]/25 group-hover:text-[#f5f5f0]/50'}`}>
                    {item.icon}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase">
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>

            {/* Sidebar footer */}
            <div className="p-4 border-t border-[#f5f5f0]/8">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#e8e800]/10 border border-[#e8e800]/20 flex items-center justify-center shrink-0">
                  <span className="font-bebas text-xs text-[#e8e800]">MK</span>
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] text-[#f5f5f0]/50 truncate">{user}</p>
                  <p className="font-mono text-[7px] text-[#f5f5f0]/20">Admin</p>
                </div>
              </div>
            </div>
          </aside>
        </>

        {/* ── Main Content ── */}
        <main className="flex-1 overflow-y-auto min-h-0 bg-[#0a0a0a]" style={{ height: 'calc(100vh - 56px)' }}>
          {active === 'overview'     && <Overview user={user} onNav={navigate} />}
          {active === 'cover-letter' && <CoverLetter />}
          {active === 'portfolio'    && <Portfolio />}
          {active === 'blog'         && <Blog />}
          {active === 'comments'     && <Comments />}
        </main>
      </div>
    </div>
  )
}
