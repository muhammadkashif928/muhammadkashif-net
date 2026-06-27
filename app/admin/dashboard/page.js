'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const COVER_LETTER_URL = encodeURI('/cover-letter-editor (final) (2).html')

export default function AdminDashboard() {
  const router    = useRouter()
  const [user, setUser]           = useState('')
  const [loggingOut, setLoggingOut] = useState(false)
  const [iframeKey, setIframeKey]   = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    fetch('/api/admin/auth')
      .then(r => r.json())
      .then(d => {
        if (d.authenticated) setUser(d.username)
        else router.replace('/admin/login')
      })
      .catch(() => router.replace('/admin/login'))
  }, [router])

  const handleLogout = async () => {
    setLoggingOut(true)
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.replace('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col" style={{ fontFamily: "'Space Mono', monospace" }}>

      {/* ── Top Bar ── */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 border-[#f5f5f0]/10 bg-[#0a0a0a] shrink-0 z-10">
        <div className="flex items-center gap-4">
          <div>
            <p className="font-mono text-[8px] tracking-[0.3em] text-[#e8e800]/60">▶ ADMIN DASHBOARD</p>
            <p className="font-bebas text-lg sm:text-xl tracking-widest text-[#f5f5f0] leading-tight">MUHAMMADKASHIF.NET</p>
          </div>
          {user && (
            <div className="hidden sm:flex items-center gap-2 border border-[#f5f5f0]/10 px-3 py-1.5">
              <div className="w-2 h-2 rounded-full bg-[#e8e800]" />
              <span className="font-mono text-[9px] text-[#f5f5f0]/50 tracking-widest">{user.toUpperCase()}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIframeKey(k => k + 1)}
            title="Reload editor"
            className="font-mono text-[9px] tracking-widest text-[#f5f5f0]/40 hover:text-[#f5f5f0] border border-[#f5f5f0]/10 hover:border-[#f5f5f0]/30 px-3 py-2 transition-all"
          >
            ↻ RELOAD
          </button>
          <button
            onClick={() => setFullscreen(f => !f)}
            title="Toggle fullscreen"
            className="font-mono text-[9px] tracking-widest text-[#f5f5f0]/40 hover:text-[#f5f5f0] border border-[#f5f5f0]/10 hover:border-[#f5f5f0]/30 px-3 py-2 transition-all hidden sm:block"
          >
            {fullscreen ? '⊠ EXIT FULL' : '⊞ FULLSCREEN'}
          </button>
          <a
            href="/"
            className="font-mono text-[9px] tracking-widest text-[#f5f5f0]/40 hover:text-[#f5f5f0] border border-[#f5f5f0]/10 hover:border-[#f5f5f0]/30 px-3 py-2 transition-all"
          >
            ← SITE
          </a>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="font-mono text-[9px] tracking-widest text-[#0a0a0a] bg-[#e8e800] border border-[#e8e800] hover:bg-white hover:border-white disabled:opacity-50 px-3 py-2 transition-all"
          >
            {loggingOut ? 'SIGNING OUT…' : 'SIGN OUT'}
          </button>
        </div>
      </header>

      {/* ── Nav tabs (expandable for future tools) ── */}
      <div className="flex items-center gap-0 border-b border-[#f5f5f0]/8 bg-[#0d0d0d] px-4 sm:px-6 shrink-0">
        <div className="flex items-center gap-2 border-b-2 border-[#e8e800] px-4 py-2.5">
          <span className="font-mono text-[9px] tracking-widest text-[#e8e800]">✎ COVER LETTER EDITOR</span>
        </div>
        <div className="ml-auto flex items-center gap-3 pr-2">
          <span className="font-mono text-[8px] text-[#f5f5f0]/20 tracking-widest hidden sm:block">
            EDIT → DOWNLOAD AS PDF VIA PRINT
          </span>
        </div>
      </div>

      {/* ── Cover Letter Editor (iframe) ── */}
      <div className={`flex-1 relative ${fullscreen ? 'fixed inset-0 z-50 mt-0' : ''}`}>
        {fullscreen && (
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-3 right-3 z-10 font-mono text-[9px] tracking-widest text-[#f5f5f0]/60 hover:text-[#e8e800] bg-[#0a0a0a]/80 border border-[#f5f5f0]/20 hover:border-[#e8e800] px-3 py-2 transition-all"
          >
            ✕ EXIT FULLSCREEN
          </button>
        )}
        <iframe
          key={iframeKey}
          src={COVER_LETTER_URL}
          title="Cover Letter Editor"
          className="w-full h-full border-0"
          style={{ height: fullscreen ? '100vh' : 'calc(100vh - 96px)' }}
          allow="print"
        />
      </div>
    </div>
  )
}
