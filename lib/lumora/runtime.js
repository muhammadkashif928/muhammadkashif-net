// Behaviour for the Lumora-design pages: intro loader, Lenis smooth scroll, text and
// block reveals, menu overlay, contact modal + form, live Kuching clock, hero card
// carousel, stat count-up and the hero's cursor "liquid reveal".
//
// startLumora(root) wires everything up for the page inside `root` (the .lx wrapper)
// and returns a cleanup function, so LxShell can tear it down when the route changes.
import Lenis from 'lenis'
import { getAttribution } from '@/lib/attribution'
import { gaEvent } from '@/lib/gtag'

const TIME_ZONE = 'Asia/Kuching'
const INTRO_KEY = 'mk-intro-seen' // the loader plays once per browser session, not on every page
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))
const normPath = p => {
  const path = (p || '/').split(/[?#]/)[0]
  return path.endsWith('/') ? path : `${path}/`
}
const session = {
  get(k) { try { return sessionStorage.getItem(k) } catch { return null } },
  set(k, v) { try { sessionStorage.setItem(k, v) } catch { /* storage blocked: the loader just plays again */ } },
}

export function startLumora(root) {
  if (!root) return () => {}
  const $ = s => root.querySelector(s)
  const $$ = s => [...root.querySelectorAll(s)]
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const ac = new AbortController()
  const on = (target, type, fn, opts = {}) => target.addEventListener(type, fn, { ...opts, signal: ac.signal })
  const timers = new Set()
  const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn() }, ms); timers.add(id); return id }
  const cleanups = []
  let alive = true

  /* ---------- Adaptive grid (scale-up above 1920px) ---------- */
  const htmlStyle = document.documentElement.style
  function applyAdaptiveGrid() {
    const FONT_BASE = 16, baseWidth = 1920, coef = 0.6666
    const widthReduction = ((baseWidth - window.innerWidth) / baseWidth) * 100
    const size = FONT_BASE - (FONT_BASE * (widthReduction * coef)) / 100
    if (size > FONT_BASE) htmlStyle.fontSize = `${size}px`
    else htmlStyle.removeProperty('font-size')
  }
  applyAdaptiveGrid()
  on(window, 'resize', applyAdaptiveGrid)
  cleanups.push(() => htmlStyle.removeProperty('font-size'))

  /* ---------- Lenis ---------- */
  const lenis = new Lenis({ smoothWheel: true })
  let rafId = requestAnimationFrame(function raf(t) { lenis.raf(t); rafId = requestAnimationFrame(raf) })
  cleanups.push(() => { cancelAnimationFrame(rafId); lenis.destroy() })

  function stopScroll() {
    lenis.stop()
    htmlStyle.position = 'relative'; htmlStyle.overflow = 'hidden'; htmlStyle.height = '100%'
  }
  function startScroll() {
    lenis.start()
    htmlStyle.removeProperty('position'); htmlStyle.removeProperty('overflow'); htmlStyle.removeProperty('height')
  }
  cleanups.push(startScroll)
  // Other .lx components (the image lightbox) pause smooth scrolling through this.
  window.__lx = { stopScroll, startScroll }
  cleanups.push(() => { if (window.__lx?.stopScroll === stopScroll) delete window.__lx })
  function scrollToId(id, immediate = false) {
    const el = document.getElementById(id)
    if (!el) return false
    later(() => {
      const top = el.getBoundingClientRect().top + window.pageYOffset
      lenis.scrollTo(top, immediate ? { immediate: true } : { duration: 1.2 })
    }, 50)
    return true
  }

  /* ---------- Intro ready gate ---------- */
  let ready = false
  const readyQueue = []
  const onReady = fn => (ready ? fn() : readyQueue.push(fn))
  const markReady = () => { if (!alive) return; ready = true; readyQueue.splice(0).forEach(fn => fn()) }

  /* ---------- Page loader ---------- */
  ;(function loader() {
    const el = $('#lx-loader')
    // setTimeout, not requestAnimationFrame: rAF never fires in a background tab
    if (!el) { later(markReady, 0); return }
    if (session.get(INTRO_KEY)) { el.hidden = true; later(markReady, 0); return }
    session.set(INTRO_KEY, '1')
    el.hidden = false
    const fill = $('#lx-loader-fill'), count = $('#lx-loader-count')
    stopScroll()
    const FILL_MS = 1300
    const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    const t0 = performance.now()
    let loaderRaf = requestAnimationFrame(function step(now) {
      const t = Math.min((now - t0) / FILL_MS, 1)
      const p = Math.round(ease(t) * 100)
      fill.style.width = `${p}%`
      count.textContent = String(p).padStart(3, '0')
      if (t < 1) loaderRaf = requestAnimationFrame(step)
      else later(exit, 60)
    })
    // If the tab is in the background the animation stalls; never leave the page covered.
    later(() => { if (!el.classList.contains('exit')) exit() }, FILL_MS + 1500)
    cleanups.push(() => cancelAnimationFrame(loaderRaf))
    function exit() {
      if (el.classList.contains('exit')) return
      el.classList.add('exit')
      later(() => { startScroll(); el.hidden = true; markReady() }, reduce ? 0 : 800)
    }
  })()

  /* ---------- Current page in the navigation ---------- */
  const PAGE = normPath(location.pathname)
  $$('[data-nav-page]').forEach(a => {
    const target = normPath(a.dataset.navPage)
    const current = target === '/' ? PAGE === '/' : PAGE.startsWith(target)
    if (current) a.setAttribute('aria-current', 'page')
    else a.removeAttribute('aria-current')
  })

  /* ---------- Text reveals ---------- */
  function playLines(el) {
    const delay = +el.dataset.delay || 0, stagger = +el.dataset.stagger || 0
    const orig = el.innerHTML
    let lines
    if (el.dataset.lines) lines = el.dataset.lines.split('|')
    else {
      const words = el.textContent.trim().split(/\s+/)
      el.innerHTML = words.map(w => `<span class="mw">${esc(w)}</span>`).join(' ')
      lines = []; let top = null
      ;[...el.children].forEach(s => {
        if (s.offsetTop !== top) { lines.push([]); top = s.offsetTop }
        lines[lines.length - 1].push(s.textContent)
      })
      lines = lines.map(l => l.join(' '))
    }
    el.innerHTML = lines.map((l, i) =>
      `<span class="ln"><span class="li" style="transition-delay:${delay + i * stagger}ms">${esc(l)}</span></span>`).join('')
    el.classList.add('split')
    void el.offsetHeight
    requestAnimationFrame(() => el.classList.add('go'))
    // restore natural wrapping once the reveal has finished
    later(() => { el.innerHTML = orig }, reduce ? 0 : delay + (lines.length - 1) * stagger + 1000)
  }

  function splitWords(el) {
    if (el.dataset.split) return
    el.dataset.split = '1'
    let i = 0
    const walk = node => {
      ;[...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment()
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return
            if (/^\s+$/.test(part)) { frag.append(' '); return }
            const s = document.createElement('span')
            s.className = 'w'; s.style.setProperty('--i', i++); s.textContent = part
            frag.append(s)
          })
          n.replaceWith(frag)
        } else if (n.nodeType === 1) walk(n)
      })
    }
    walk(el)
  }
  $$('.words').forEach(splitWords)

  let io
  function initReveals() {
    if (!alive) return
    $$('.rv[data-gate]').forEach(el => el.classList.add('in'))
    $$('.lines[data-gate]').forEach(playLines)
    io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target
        io.unobserve(el)
        if (el.classList.contains('lines')) playLines(el)
        else if (el.classList.contains('words')) el.classList.add('go')
        else el.classList.add('in')
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
    $$('.rv:not([data-gate]), .lines:not([data-gate]), .words').forEach(el => io.observe(el))
  }
  cleanups.push(() => io?.disconnect())
  onReady(() => (document.fonts ? document.fonts.ready : Promise.resolve()).then(initReveals))

  // Arriving with a #section in the address scrolls there once the page is ready.
  onReady(() => {
    const id = decodeURIComponent(location.hash.slice(1))
    if (id && id !== 'main-content') later(() => scrollToId(id, true), 120)
  })

  /* ---------- Live clock (Kuching time) ---------- */
  const partsFmt = new Intl.DateTimeFormat('en-GB', { timeZone: TIME_ZONE, hour: 'numeric', minute: '2-digit', hourCycle: 'h23', day: 'numeric', month: 'numeric', year: 'numeric' })
  function tickClock() {
    const p = Object.fromEntries(partsFmt.formatToParts(new Date()).map(x => [x.type, x.value]))
    const H = +p.hour, h = H % 12 || 12
    const time = `${h}:${p.minute}${H < 12 ? 'am' : 'pm'}`
    const date = `${+p.day} ${MONTHS[+p.month - 1]}, ${p.year}`
    $$('[data-clock-time]').forEach(n => { n.textContent = time })
    $$('[data-clock-date]').forEach(n => { n.textContent = date })
    $$('[data-nav-clock]').forEach(n => { n.textContent = `Kuching time — ${time}` })
  }
  tickClock()
  const clockId = setInterval(tickClock, 1000)
  cleanups.push(() => clearInterval(clockId))

  /* ---------- Hero card carousel ---------- */
  const cItems = $$('.hcard__item'), cDots = $$('.hcard__dots span'), cIcons = $$('.hcard__ic')
  let ci = 0
  function stepCard(step) {
    if (!cItems.length) return
    const n = cItems.length, next = (ci + step + n) % n, d = step > 0 ? 1 : -1
    const from = cItems[ci], to = cItems[next]
    ci = next
    to.style.transition = 'none'
    to.style.transform = `translateY(${14 * d}px)`; to.style.opacity = '0'
    void to.offsetHeight
    to.style.transition = ''
    // Every other caption goes (also covers fast repeated clicks); the reflow above
    // lets the incoming one transition from its start position without waiting a frame.
    cItems.forEach(item => {
      if (item === to) return
      item.classList.remove('is-active')
      item.style.transform = `translateY(${-14 * d}px)`; item.style.opacity = '0'
    })
    to.classList.add('is-active')
    to.style.transform = 'translateY(0)'; to.style.opacity = '1'
    cDots.forEach((x, i) => x.classList.toggle('is-active', i === ci))
    cIcons.forEach((x, i) => x.classList.toggle('is-active', i === ci))
  }
  const cardRow = $('.hcard__row')
  if (cardRow) on(cardRow, 'keydown', e => {
    if (e.target !== e.currentTarget) return
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); stepCard(1) }
  })

  /* ---------- Nav overlay ---------- */
  const navm = $('#lx-navm')
  let navOpen = false, navTimer
  function openNav() {
    if (navOpen || !navm) return
    navOpen = true; clearTimeout(navTimer)
    navm.hidden = false; void navm.offsetHeight
    navm.classList.add('open')
    stopScroll()
    later(() => $('.navm__close')?.focus({ preventScroll: true }), 50)
  }
  function closeNav() {
    if (!navOpen) return
    navOpen = false
    navm.classList.remove('open')
    startScroll()
    navTimer = later(() => { navm.hidden = true }, reduce ? 0 : 500)
  }

  /* ---------- Request modal ---------- */
  const modal = $('#lx-modal')
  let modalOpen = false, modalTimer, lastFocus
  function openModal(service) {
    if (modalOpen || !modal) return
    modalOpen = true; clearTimeout(modalTimer)
    lastFocus = document.activeElement
    const message = modal.querySelector('textarea[name=message]')
    if (service && message && !message.value.trim()) message.value = `Service: ${service}\n\n`
    modal.classList.remove('closing')
    modal.hidden = false; void modal.offsetHeight
    modal.classList.add('open')
    stopScroll()
    later(() => modal.querySelector('input')?.focus({ preventScroll: true }), 120)
  }
  function closeModal() {
    if (!modalOpen) return
    modalOpen = false
    modal.classList.remove('open')
    modal.classList.add('closing')
    startScroll()
    modalTimer = later(() => {
      modal.hidden = true; modal.classList.remove('closing')
      resetForm(modal.querySelector('form'))
      modal.classList.remove('is-success', 'is-error')
    }, reduce ? 0 : 450)
    lastFocus?.focus?.({ preventScroll: true })
  }
  if (modal) on(modal, 'click', e => { if (e.target === modal) closeModal() })

  /* ---------- Enquiry forms (modal + contact page) → /api/contact ---------- */
  function resetForm(form) {
    if (!form) return
    form.reset()
    const label = form.querySelector('[data-submit-label]')
    if (label) label.textContent = label.dataset.idle || 'Send request'
    const btn = form.querySelector('[type=submit]')
    if (btn) btn.disabled = false
  }
  $$('form[data-contact-form]').forEach(form => {
    const host = form.closest('[data-form-host]')
    const label = form.querySelector('[data-submit-label]')
    const errorEl = host?.querySelector('.mform__error')
    if (label) label.dataset.idle = label.textContent
    on(form, 'submit', async e => {
      e.preventDefault()
      const fields = new FormData(form)
      const btn = form.querySelector('[type=submit]')
      btn.disabled = true
      if (label) label.textContent = 'Sending…'
      host?.classList.remove('is-error')
      const fail = msg => {
        if (!alive) return
        btn.disabled = false
        if (label) label.textContent = label.dataset.idle
        if (errorEl) errorEl.textContent = msg
        host?.classList.add('is-error')
      }
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: fields.get('name'),
            email: fields.get('email'),
            message: fields.get('message'),
            honeypot: fields.get('website'), // hidden field; bots fill it in
            ...getAttribution(),             // first-touch source, session-scoped
          }),
        })
        const data = await res.json()
        if (!data.success) { fail(data.error || 'Something went wrong. Please try again.'); return }
        gaEvent('contact_submit', { location: form.dataset.contactForm || 'lumora_form' })
        if (!alive) return
        host?.classList.add('is-success')
        resetForm(form)
      } catch {
        fail('Network error. Please email me directly at info@muhammadkashif.net')
      }
    })
  })
  $$('[data-action="form-again"]').forEach(btn => on(btn, 'click', () => {
    const host = btn.closest('[data-form-host]')
    host?.classList.remove('is-success', 'is-error')
  }))

  on(window, 'keydown', e => {
    if (e.key !== 'Escape') return
    if (modalOpen) closeModal()
    else if (navOpen) closeNav()
  })

  /* ---------- Click routing ---------- */
  function go(target, service) {
    if (target === 'contact') openModal(service)
    else if (target === 'top') lenis.scrollTo(0, { duration: 1.2 })
    else scrollToId(target)
  }
  // A link to a section of the page we're already on scrolls smoothly instead of reloading.
  function samePageTarget(a) {
    if (a.target === '_blank' || a.hasAttribute('download')) return null
    const href = a.getAttribute('href') || ''
    if (!href || /^(mailto:|tel:)/i.test(href)) return null
    const url = new URL(href, location.href)
    if (url.origin !== location.origin || normPath(url.pathname) !== PAGE) return null
    const id = url.hash ? decodeURIComponent(url.hash.slice(1)) : 'top'
    return id === 'main-content' ? null : id
  }
  on(root, 'click', e => {
    const goEl = e.target.closest('[data-go]')
    if (goEl) {
      e.preventDefault()
      const target = goEl.dataset.go, service = goEl.dataset.service
      if (navOpen) { closeNav(); later(() => go(target, service), target === 'contact' ? 0 : 60) }
      else go(target, service)
      return
    }
    const act = e.target.closest('[data-action]')
    if (act) {
      const a = act.dataset.action
      if (a === 'nav-open') openNav()
      else if (a === 'nav-close') closeNav()
      else if (a === 'modal-close') closeModal()
      else if (a === 'card-next') stepCard(1)
      else if (a === 'card-prev') stepCard(-1)
      return
    }
    const link = e.target.closest('a[href]')
    if (!link || e.metaKey || e.ctrlKey || e.shiftKey) return
    const target = samePageTarget(link)
    if (target === null) return
    e.preventDefault()
    if (navOpen) { closeNav(); later(() => go(target), 60) }
    else go(target)
  })

  /* ---------- Stats count-up (top bottom → center center) ---------- */
  const statEls = $$('.stat').map(li => {
    const num = li.querySelector('[data-count]')
    return { li, num, value: +num.dataset.count, dec: +num.dataset.decimals || 0, shown: null }
  })
  function updateStats() {
    const vh = innerHeight
    statEls.forEach(s => {
      const r = s.li.getBoundingClientRect()
      const p = Math.min(Math.max((vh - r.top) / (vh / 2 + r.height / 2), 0), 1)
      const v = s.dec ? (p * s.value).toFixed(s.dec) : String(Math.round(p * s.value))
      if (v !== s.shown) { s.shown = v; s.num.textContent = v }
    })
  }
  if (statEls.length) {
    let lastStat = 0, statPending = false
    on(window, 'scroll', () => {
      const now = performance.now()
      if (now - lastStat >= 30) { lastStat = now; updateStats() }
      else if (!statPending) {
        statPending = true
        later(() => { statPending = false; lastStat = performance.now(); updateStats() }, 30)
      }
    }, { passive: true })
    on(window, 'resize', updateStats)
    updateStats()
  }

  /* ---------- LiquidReveal ----------
     The base photo is the <img> inside #liquid; data-reveal names the aligned image painted under the cursor. */
  ;(function liquidReveal() {
    const box = $('#liquid')
    if (!box) return
    const canvas = box.querySelector('canvas')
    if (reduce || !box.dataset.reveal || !canvas) { if (canvas) canvas.style.display = 'none'; return }
    const BRUSH = 143, DECAY = 0.016, FADE_FRAMES = 120
    const ctx = canvas.getContext('2d')
    const cover = document.createElement('canvas'), cctx = cover.getContext('2d')
    const brush = document.createElement('canvas'), bctx = brush.getContext('2d')
    let dpr = 1, W = 0, H = 0, radius = BRUSH, diam = 0
    let loaded = false, last = null, idle = FADE_FRAMES + 1, running = false, tickId = 0
    const points = []

    const img = new Image()
    img.decoding = 'async'
    img.onload = () => { loaded = true; buildCover() }
    img.src = box.dataset.reveal

    function measure() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = box.getBoundingClientRect()
      W = Math.max(1, Math.round(r.width * dpr))
      H = Math.max(1, Math.round(r.height * dpr))
      canvas.width = W; canvas.height = H
      canvas.style.width = `${r.width}px`; canvas.style.height = `${r.height}px`
      radius = BRUSH * dpr
      diam = Math.ceil(radius * 2)
      brush.width = brush.height = diam
      buildCover()
    }
    function buildCover() {
      if (!loaded || !W) return
      cover.width = W; cover.height = H
      const s = Math.max(W / img.naturalWidth, H / img.naturalHeight)
      const dw = img.naturalWidth * s, dh = img.naturalHeight * s
      cctx.clearRect(0, 0, W, H)
      cctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh)
      // Optional colour grade for the revealed layer (data-reveal-tint): the photo keeps its
      // light and shade but takes on the tint, like the warm reveal in the original design.
      const tint = box.dataset.revealTint
      if (tint) {
        const strength = Math.min(Math.max(parseFloat(box.dataset.revealTintStrength) || 0.85, 0), 1)
        cctx.save()
        cctx.globalCompositeOperation = 'color'
        cctx.globalAlpha = strength
        cctx.fillStyle = tint
        cctx.fillRect(0, 0, W, H)
        cctx.globalCompositeOperation = 'soft-light'
        cctx.globalAlpha = strength * 0.5
        cctx.fillRect(0, 0, W, H)
        cctx.restore()
      }
    }
    function stamp(x, y) {
      const c = diam / 2
      bctx.globalCompositeOperation = 'source-over'
      bctx.clearRect(0, 0, diam, diam)
      const g = bctx.createRadialGradient(c, c, 0, c, c, c)
      g.addColorStop(0, 'rgba(255,255,255,1)')
      g.addColorStop(0.55, 'rgba(255,255,255,.82)')
      g.addColorStop(1, 'rgba(255,255,255,0)')
      bctx.fillStyle = g
      bctx.fillRect(0, 0, diam, diam)
      bctx.globalCompositeOperation = 'source-in'
      bctx.drawImage(cover, x - c, y - c, diam, diam, 0, 0, diam, diam)
      ctx.globalCompositeOperation = 'source-over'
      ctx.drawImage(brush, x - c, y - c)
    }
    function tick() {
      const drawing = points.length > 0
      if (drawing) idle = 0; else idle++
      if (idle > FADE_FRAMES) { running = false; return }
      const fade = drawing ? DECAY : Math.min(DECAY + idle * 0.004, 0.5)
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = `rgba(0,0,0,${fade})`
      ctx.fillRect(0, 0, W, H)
      if (drawing) {
        if (loaded) for (const p of points) stamp(p[0], p[1])
        points.length = 0
      }
      if (idle === FADE_FRAMES) { ctx.globalCompositeOperation = 'source-over'; ctx.clearRect(0, 0, W, H) }
      tickId = requestAnimationFrame(tick)
    }
    on(window, 'pointermove', e => {
      const r = box.getBoundingClientRect()
      const x = (e.clientX - r.left) * dpr, y = (e.clientY - r.top) * dpr
      if (x < -radius || y < -radius || x > W + radius || y > H + radius) { last = null; return }
      if (last) {
        const dx = x - last[0], dy = y - last[1], dist = Math.hypot(dx, dy)
        const step = Math.max(radius * 0.3, 1)
        const n = Math.min(Math.ceil(dist / step), 60)
        for (let i = 1; i <= n; i++) points.push([last[0] + dx * i / n, last[1] + dy * i / n])
      } else points.push([x, y])
      last = [x, y]
      if (!running) { running = true; idle = 0; tickId = requestAnimationFrame(tick) }
    }, { passive: true })

    const ro = new ResizeObserver(measure)
    ro.observe(box)
    measure()
    cleanups.push(() => { ro.disconnect(); cancelAnimationFrame(tickId) })
  })()

  return () => {
    alive = false
    ac.abort()
    timers.forEach(clearTimeout)
    timers.clear()
    cleanups.reverse().forEach(fn => { try { fn() } catch { /* already torn down */ } })
  }
}
