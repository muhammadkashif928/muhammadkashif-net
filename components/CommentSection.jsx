'use client'
// Article comments. Talks to /api/comments: GET ?slug= lists them, POST takes exactly
// { postSlug, name, email|null, message } (the API rejects any other keys).
// Styled with the .lx design (styles/lumora-site.css, .cmt-*).
import { useState, useEffect, useCallback } from 'react'

const MAX = 1200

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
    if (name.trim().length < 2) { setFormError('Please enter your name.'); return }
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
      setComments(prev => [...prev, { name: name.trim(), message: message.trim(), created_at: new Date().toISOString() }])
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
    <section className="cmt" aria-labelledby="cmt-title">
      <p className="eyebrow">Discussion</p>
      <h2 id="cmt-title" className="cmt__title">Comments{comments.length > 0 && <span> ({comments.length})</span>}</h2>

      {loading ? (
        <p className="cmt__empty">Loading comments…</p>
      ) : comments.length === 0 ? (
        <p className="cmt__empty">No comments yet. Be the first to share your thoughts.</p>
      ) : (
        <ul className="cmt__list">
          {comments.map((c, i) => (
            <li key={i} className="cmt__item">
              <span className="review__av" aria-hidden="true">{c.name.charAt(0).toUpperCase()}</span>
              <div>
                <p className="cmt__who"><strong>{c.name}</strong><time dateTime={c.created_at}>{formatDate(c.created_at)}</time></p>
                <p className="cmt__msg">{c.message}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="cmt__form">
        <p className="modal__kick">Leave a comment</p>
        {submitted ? (
          <div className="cmt__done" role="status">
            <strong>Comment posted.</strong>
            <span>Thank you for joining the discussion.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mform" noValidate>
            <div className="cmt__row">
              <label><span>Name *</span><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" maxLength={80} required autoComplete="name" /></label>
              <label><span>Email (optional, not published)</span><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" maxLength={160} autoComplete="email" /></label>
            </div>
            <label>
              <span>Comment *</span>
              <textarea value={message} onChange={e => setMessage(e.target.value.slice(0, MAX))} rows={5} placeholder="Share a question or what worked for you…" required />
              <small className="cmt__count">{message.length}/{MAX}</small>
            </label>
            <div className="cmt__row cmt__row--end">
              <label className="cmt__captcha">
                <span>Quick check: what is {captcha.a} + {captcha.b}?</span>
                <span className="cmt__captcha-in">
                  <input type="text" inputMode="numeric" value={captchaInput} onChange={e => setCaptchaInput(e.target.value.replace(/[^0-9]/g, ''))} placeholder="Answer" maxLength={2} />
                  <button type="button" onClick={refreshCaptcha} aria-label="New question">↻</button>
                </span>
              </label>
              <button type="submit" className="pill pill--dark" disabled={submitting}><span className="pill__in">{submitting ? 'Posting…' : 'Post comment'}</span></button>
            </div>
            {formError && <p className="cmt__error" role="alert">{formError}</p>}
          </form>
        )}
      </div>
    </section>
  )
}
