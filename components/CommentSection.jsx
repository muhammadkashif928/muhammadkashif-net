'use client'

import { useState, useEffect, useCallback } from 'react'

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return ''
  }
}

function genCaptcha() {
  const a = Math.floor(Math.random() * 12) + 1
  const b = Math.floor(Math.random() * 12) + 1
  return { a, b }
}

export default function CommentSection({ postSlug }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [captcha, setCaptcha] = useState({ a: 4, b: 7 })
  const [captchaInput, setCaptchaInput] = useState('')

  const refreshCaptcha = useCallback(() => {
    setCaptcha(genCaptcha())
    setCaptchaInput('')
  }, [])

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments?slug=${encodeURIComponent(postSlug)}`)
      if (res.ok) {
        const data = await res.json()
        setComments(data.comments || [])
      }
    } catch {
      // DB not configured — silently skip
    } finally {
      setLoading(false)
    }
  }, [postSlug])

  useEffect(() => {
    setCaptcha(genCaptcha())
    fetchComments()
  }, [fetchComments])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')

    if (!name.trim()) { setFormError('Please enter your name.'); return }
    if (!message.trim()) { setFormError('Please enter a comment.'); return }
    if (message.trim().length < 10) { setFormError('Comment must be at least 10 characters.'); return }

    if (parseInt(captchaInput, 10) !== captcha.a + captcha.b) {
      setFormError(`Incorrect answer. ${captcha.a} + ${captcha.b} = ?`)
      refreshCaptcha()
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postSlug, name: name.trim(), email: email.trim() || null, message: message.trim() }),
      })

      if (!res.ok) throw new Error('submit failed')

      // Optimistic: add to local list
      setComments(prev => [...prev, {
        name: name.trim(),
        message: message.trim(),
        created_at: new Date().toISOString(),
      }])
      setName(''); setEmail(''); setMessage('')
      setSubmitted(true)
      refreshCaptcha()
      setTimeout(() => setSubmitted(false), 6000)
    } catch {
      setFormError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mt-16 border-t-2 border-[#0a0a0a] pt-12">

      {/* Heading */}
      <div className="mb-8">
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#0a0a0a]/40 mb-1">▶ DISCUSSION</p>
        <h2 className="font-bebas text-[clamp(1.8rem,4vw,2.5rem)] text-[#0a0a0a] leading-tight">
          COMMENTS {comments.length > 0 && <span className="text-[#0a0a0a]/30">({comments.length})</span>}
        </h2>
      </div>

      {/* Existing comments */}
      {loading ? (
        <p className="font-mono text-xs text-[#0a0a0a]/40 mb-8">Loading comments…</p>
      ) : comments.length === 0 ? (
        <div className="border-2 border-[#0a0a0a]/15 border-dashed p-6 text-center mb-10">
          <p className="font-mono text-xs text-[#0a0a0a]/40">No comments yet. Be the first to share your thoughts.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mb-10">
          {comments.map((c, i) => (
            <div key={i} className="border-2 border-[#0a0a0a] p-5 bg-white" style={{ boxShadow: '3px 3px 0 #0a0a0a' }}>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0a0a0a] flex items-center justify-center shrink-0">
                    <span className="font-bebas text-sm text-[#e8e800] leading-none">
                      {c.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-bebas text-base tracking-wide text-[#0a0a0a]">{c.name}</span>
                </div>
                <span className="font-mono text-[9px] text-[#0a0a0a]/30">{formatDate(c.created_at)}</span>
              </div>
              <p className="font-mono text-xs text-[#0a0a0a]/65 leading-relaxed pl-11">{c.message}</p>
            </div>
          ))}
        </div>
      )}

      {/* Comment form */}
      <div className="border-2 border-[#0a0a0a] bg-[#f5f5f0]" style={{ boxShadow: '5px 5px 0 #0a0a0a' }}>
        <div className="bg-[#0a0a0a] px-5 py-3 flex items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#e8e800]">▶ LEAVE A COMMENT</span>
        </div>

        {submitted ? (
          <div className="p-6 text-center">
            <p className="font-bebas text-xl tracking-wide text-[#0a0a0a] mb-1">COMMENT SUBMITTED!</p>
            <p className="font-mono text-xs text-[#0a0a0a]/60">Thank you for joining the discussion.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4" noValidate>
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[9px] tracking-widest text-[#0a0a0a]/50 block mb-1.5">
                  NAME <span className="text-[#0a0a0a]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  maxLength={80}
                  required
                  className="w-full font-mono text-xs text-[#0a0a0a] bg-white border-2 border-[#0a0a0a] px-3 py-2.5 placeholder:text-[#0a0a0a]/30 focus:outline-none focus:border-[#e8e800] transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[9px] tracking-widest text-[#0a0a0a]/50 block mb-1.5">
                  EMAIL <span className="text-[#0a0a0a]/30">(optional, not published)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  maxLength={120}
                  className="w-full font-mono text-xs text-[#0a0a0a] bg-white border-2 border-[#0a0a0a] px-3 py-2.5 placeholder:text-[#0a0a0a]/30 focus:outline-none focus:border-[#e8e800] transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="font-mono text-[9px] tracking-widest text-[#0a0a0a]/50 block mb-1.5">
                COMMENT <span className="text-[#0a0a0a]">*</span>
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Share your thoughts, questions, or feedback…"
                rows={4}
                maxLength={1200}
                required
                className="w-full font-mono text-xs text-[#0a0a0a] bg-white border-2 border-[#0a0a0a] px-3 py-2.5 placeholder:text-[#0a0a0a]/30 focus:outline-none focus:border-[#e8e800] transition-colors resize-none"
              />
              <p className="font-mono text-[8px] text-[#0a0a0a]/30 mt-1 text-right">{message.length}/1200</p>
            </div>

            {/* Math CAPTCHA */}
            <div className="border-2 border-[#0a0a0a] p-4 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className="shrink-0">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#0a0a0a]/40 block mb-1">CAPTCHA — PROVE YOU'RE HUMAN</span>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#0a0a0a] px-4 py-2 flex items-center gap-1.5">
                        <span className="font-bebas text-2xl text-[#e8e800] tracking-wider">{captcha.a}</span>
                        <span className="font-bebas text-2xl text-[#f5f5f0]">+</span>
                        <span className="font-bebas text-2xl text-[#e8e800] tracking-wider">{captcha.b}</span>
                        <span className="font-bebas text-2xl text-[#f5f5f0]">=</span>
                        <span className="font-bebas text-2xl text-[#f5f5f0]">?</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={captchaInput}
                    onChange={e => setCaptchaInput(e.target.value)}
                    placeholder="Answer"
                    min={0}
                    max={99}
                    required
                    className="w-24 font-bebas text-xl text-[#0a0a0a] bg-[#f5f5f0] border-2 border-[#0a0a0a] px-3 py-2 text-center placeholder:text-[#0a0a0a]/30 focus:outline-none focus:border-[#e8e800] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    title="Get a new question"
                    className="font-mono text-[9px] tracking-widest text-[#0a0a0a]/50 border border-[#0a0a0a]/20 px-2 py-1.5 hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-all"
                  >
                    ↻ NEW
                  </button>
                </div>
              </div>
            </div>

            {/* Error */}
            {formError && (
              <div className="border-2 border-red-500 bg-red-50 px-4 py-2.5">
                <p className="font-mono text-[10px] text-red-700">{formError}</p>
              </div>
            )}

            {/* Submit */}
            <div className="flex items-center justify-between gap-4 pt-1">
              <p className="font-mono text-[9px] text-[#0a0a0a]/30 leading-relaxed max-w-xs">
                Your email is never published. Comments are reviewed before display.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="shrink-0 font-bebas text-sm tracking-widest px-6 py-3 bg-[#0a0a0a] text-[#e8e800] border-2 border-[#0a0a0a] hover:bg-[#e8e800] hover:text-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {submitting ? 'POSTING…' : 'POST COMMENT →'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
