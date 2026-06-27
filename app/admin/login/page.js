'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function LoginForm() {
  const router        = useRouter()
  const searchParams  = useSearchParams()
  const from          = searchParams.get('from') || '/admin/dashboard'

  const [username, setUsername]   = useState('')
  const [password, setPassword]   = useState('')
  const [showPass, setShowPass]   = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')
  const [attempts, setAttempts]   = useState(0)
  const [locked, setLocked]       = useState(false)
  const [lockTimer, setLockTimer] = useState(0)

  // Lock out after 5 failed attempts for 2 minutes
  useEffect(() => {
    if (attempts >= 5) {
      setLocked(true)
      setLockTimer(120)
      const interval = setInterval(() => {
        setLockTimer(t => {
          if (t <= 1) { clearInterval(interval); setLocked(false); setAttempts(0); return 0 }
          return t - 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [attempts])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (locked) return
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password }),
      })

      if (res.ok) {
        router.replace(from)
      } else {
        const data = await res.json()
        setAttempts(a => a + 1)
        setError(data.error || 'Invalid credentials')
        setPassword('')
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#f5f5f0 1px, transparent 1px), linear-gradient(90deg, #f5f5f0 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Logo / title */}
        <div className="text-center mb-10">
          <p className="font-mono text-[9px] tracking-[0.4em] text-[#e8e800]/60 mb-3">▶ RESTRICTED ACCESS</p>
          <h1 className="font-bebas text-[clamp(2.5rem,8vw,3.5rem)] leading-none text-[#f5f5f0]">
            ADMIN<br />
            <span style={{ WebkitTextStroke: '1.5px #f5f5f0', color: 'transparent' }}>PORTAL</span>
          </h1>
          <p className="font-mono text-[10px] text-[#f5f5f0]/25 mt-3 tracking-widest">MUHAMMADKASHIF.NET</p>
        </div>

        {/* Card */}
        <div className="border-2 border-[#f5f5f0]/10 bg-[#111] p-8" style={{ boxShadow: '0 0 40px rgba(0,0,0,0.6)' }}>

          {/* Lockout warning */}
          {locked && (
            <div className="border border-red-500/40 bg-red-500/10 p-4 mb-6 text-center">
              <p className="font-mono text-[10px] text-red-400 tracking-widest">
                TOO MANY ATTEMPTS — LOCKED FOR {lockTimer}s
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
            {/* Username */}
            <div>
              <label className="font-mono text-[9px] tracking-[0.25em] text-[#f5f5f0]/40 block mb-2">
                USERNAME
              </label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
                required
                disabled={locked || loading}
                className="w-full bg-[#0a0a0a] border-2 border-[#f5f5f0]/10 text-[#f5f5f0] font-mono text-sm px-4 py-3 focus:outline-none focus:border-[#e8e800] transition-colors disabled:opacity-40 tracking-wider"
                placeholder="Enter username"
              />
            </div>

            {/* Password */}
            <div>
              <label className="font-mono text-[9px] tracking-[0.25em] text-[#f5f5f0]/40 block mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  disabled={locked || loading}
                  className="w-full bg-[#0a0a0a] border-2 border-[#f5f5f0]/10 text-[#f5f5f0] font-mono text-sm px-4 py-3 pr-12 focus:outline-none focus:border-[#e8e800] transition-colors disabled:opacity-40 tracking-wider"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(s => !s)}
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[9px] text-[#f5f5f0]/30 hover:text-[#f5f5f0]/70 transition-colors"
                >
                  {showPass ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            {/* Attempts indicator */}
            {attempts > 0 && attempts < 5 && (
              <p className="font-mono text-[9px] text-orange-400/70 tracking-widest text-center">
                {5 - attempts} ATTEMPT{5 - attempts !== 1 ? 'S' : ''} REMAINING BEFORE LOCKOUT
              </p>
            )}

            {/* Error */}
            {error && !locked && (
              <div className="border border-red-500/30 bg-red-500/10 px-4 py-2.5">
                <p className="font-mono text-[10px] text-red-400 tracking-widest">{error.toUpperCase()}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || locked || !username || !password}
              className="w-full font-bebas text-base tracking-[0.15em] py-4 bg-[#e8e800] text-[#0a0a0a] border-2 border-[#e8e800] hover:bg-white hover:border-white disabled:opacity-30 disabled:cursor-not-allowed transition-all mt-2"
            >
              {loading ? 'VERIFYING…' : locked ? `LOCKED (${lockTimer}s)` : 'SIGN IN →'}
            </button>
          </form>
        </div>

        {/* Footer note */}
        <p className="font-mono text-[8px] text-[#f5f5f0]/15 text-center mt-6 tracking-widest leading-relaxed">
          UNAUTHORIZED ACCESS IS PROHIBITED.<br />
          ALL ATTEMPTS ARE LOGGED.
        </p>

        <div className="text-center mt-4">
          <a href="/" className="font-mono text-[9px] text-[#f5f5f0]/25 hover:text-[#f5f5f0]/50 tracking-widest transition-colors">
            ← BACK TO SITE
          </a>
        </div>
      </div>
    </div>
  )
}

export default function AdminLogin() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
      <LoginForm />
    </Suspense>
  )
}
