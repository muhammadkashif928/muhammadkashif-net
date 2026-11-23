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
        // Reveal at 15% visible — or, for elements taller than the screen
        // (a full-page screenshot), once 15% of the screen is filled by them.
        const seen = e.intersectionRect.height
        if (e.intersectionRatio < 0.15 && seen < Math.min(e.boundingClientRect.height, e.rootBounds?.height || innerHeight) * 0.15) return
        const el = e.target
        io.unobserve(el)
        if (el.classList.contains('lines')) playLines(el)
        else if (el.classList.contains('words')) el.classList.add('go')
        else el.classList.add('in')
      })
    }, { threshold: [0, 0.01, 0.02, 0.05, 0.1, 0.15], rootMargin: '0px 0px -8% 0px' })
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
  let navOpen = false, navTimer, navLastFocus
  const navOpeners = $$('[data-action="nav-open"]')
  const setExpanded = v => navOpeners.forEach(b => b.setAttribute('aria-expanded', String(v)))
  setExpanded(false)
  function openNav() {
    if (navOpen || !navm) return
    navOpen = true; clearTimeout(navTimer)
    navLastFocus = document.activeElement
    navm.hidden = false; void navm.offsetHeight
    navm.classList.add('open')
    setExpanded(true)
    stopScroll()
    later(() => $('.navm__close')?.focus({ preventScroll: true }), 50)
  }
  function closeNav() {
    if (!navOpen) return
    navOpen = false
    navm.classList.remove('open')
    setExpanded(false)
    startScroll()
    navTimer = later(() => { navm.hidden = true }, reduce ? 0 : 500)
    navLastFocus?.focus?.({ preventScroll: true })
  }

  // Keep Tab inside whichever dialog is open (menu or contact pop-up).
  function trapFocus(e, box) {
    const items = [...box.querySelectorAll('a[href], button:not([disabled]), input:not([tabindex="-1"]), textarea, select')]
      .filter(el => el.offsetParent !== null || el === document.activeElement)
    if (!items.length) return
    const first = items[0], last = items[items.length - 1]
    if (!box.contains(document.activeElement)) { e.preventDefault(); first.focus(); return }
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
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
            elapsed: Math.round(performance.now()), // ms on the page; bots submit instantly
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
    if (e.key === 'Tab') {
      if (modalOpen) trapFocus(e, modal)
      else if (navOpen) trapFocus(e, navm)
      return
    }
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

  // Set by liquidReveal so the hero water can draw the reveal layer under its ripples.
  let revealLayer = null

  /* ---------- LiquidReveal ----------
     The base photo is the <img> inside #liquid; data-reveal names the aligned image painted under the cursor. */
  ;(function liquidReveal() {
    const box = $('#liquid')
    if (!box) return
    const canvas = box.querySelector('canvas:not(.water)')
    if (reduce || !box.dataset.reveal || !canvas) { if (canvas) canvas.style.display = 'none'; return }
    revealLayer = { canvas, live: () => running }
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

  /* ---------- Water (components/lx/HeroWater.jsx, case-study cards) ----------
     A small wave simulation on the CPU, drawn through WebGL so whatever sits behind it refracts
     under the cursor. Ported from the Designer Trends hero. It bends the <img> inside the box it
     is attached to; a box without one gets a painted dark backdrop plus its watermark word. */
  function makeWater(canvas, { gray = false, over = null, ambient = 1700 } = {}) {
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, premultipliedAlpha: false })
    if (!gl) return null
    const CELL = 5, DAMPING = 0.975, HEIGHT_SCALE = 36
    const VERT = 'attribute vec2 aPos;varying vec2 vUv;void main(){vUv=aPos*.5+.5;gl_Position=vec4(aPos,0.,1.);}'
    const FRAG = `precision mediump float;
varying vec2 vUv;
uniform sampler2D uArt;
uniform sampler2D uHeight;
uniform sampler2D uOver;
uniform vec2 uTexel;
uniform vec2 uScale;
uniform vec2 uOffset;
uniform vec3 uTint;
uniform vec2 uLight;
uniform float uGray;
uniform float uOverOn;
void main(){
  float l=texture2D(uHeight,vUv-vec2(uTexel.x,0.)).r;
  float r=texture2D(uHeight,vUv+vec2(uTexel.x,0.)).r;
  float d=texture2D(uHeight,vUv-vec2(0.,uTexel.y)).r;
  float u=texture2D(uHeight,vUv+vec2(0.,uTexel.y)).r;
  vec2 grad=vec2(r-l,u-d);
  vec2 uv=clamp(vUv+grad*.15,0.,1.);
  vec3 color=texture2D(uArt,uOffset+uv*uScale).rgb;
  if(uGray>.5){float g=dot(color,vec3(.2126,.7152,.0722));color=vec3((g-.5)*1.04+.5);}
  if(uOverOn>.5){vec4 o=texture2D(uOver,uv);color=mix(color,o.rgb,o.a);}
  color+=uTint*clamp((grad.x-grad.y)*1.5,uLight.x,uLight.y);
  gl_FragColor=vec4(color,1.);
}`
    function compile(type, src) {
      const sh = gl.createShader(type)
      gl.shaderSource(sh, src); gl.compileShader(sh)
      return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null
    }
    const vs = compile(gl.VERTEX_SHADER, VERT), fs = compile(gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()
    if (!vs || !fs) return null
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null
    gl.useProgram(prog)
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, 'aPos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)
    function makeTex(unit) {
      const t = gl.createTexture()
      gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      return t
    }
    const U = name => gl.getUniformLocation(prog, name)
    const artTex = makeTex(0), heightTex = makeTex(1), overTex = makeTex(2)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4))
    gl.uniform1i(U('uArt'), 0); gl.uniform1i(U('uHeight'), 1); gl.uniform1i(U('uOver'), 2)
    const uTexel = U('uTexel'), uScale = U('uScale'), uOffset = U('uOffset'), uOverOn = U('uOverOn')
    const uTint = U('uTint'), uLight = U('uLight'), uGray = U('uGray')
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1)

    let box = null, photo = null, wm = null
    let cssW = 0, cssH = 0, artReady = false, photoSrc = ''
    // No photo: paint the backdrop the water refracts — the same dark gradient and copper glow
    // as the CSS fallback, plus the watermark word so it bends with the waves.
    const art = document.createElement('canvas')
    const ctx = art.getContext('2d')
    function paint() {
      if (!box || photo || !cssW) return
      const s = Math.min(Math.min(window.devicePixelRatio || 1, 1.5), 2048 / cssW, 2048 / cssH)
      art.width = Math.max(2, Math.round(cssW * s)); art.height = Math.max(2, Math.round(cssH * s))
      ctx.setTransform(s, 0, 0, s, 0, 0)
      let g = ctx.createLinearGradient(0, 0, 0, cssH)
      g.addColorStop(0, '#161514'); g.addColorStop(1, '#0a0a0a')
      ctx.fillStyle = g; ctx.fillRect(0, 0, cssW, cssH)
      const glow = (x, y, r, color) => {
        g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0, color); g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g; ctx.fillRect(0, 0, cssW, cssH)
      }
      glow(cssW * 0.85, 0, Math.max(420, cssW * 0.5), 'rgba(207,128,71,.3)')
      glow(0, cssH, Math.max(320, cssW * 0.35), 'rgba(255,255,255,.06)')
      if (wm) {
        const cs = getComputedStyle(wm)
        ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
        ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'
        const text = wm.textContent, m = ctx.measureText(text), size = parseFloat(cs.fontSize)
        const asc = m.fontBoundingBoxAscent || size * 0.9, desc = m.fontBoundingBoxDescent || size * 0.22
        ctx.fillStyle = 'rgba(255,255,255,.1)'
        ctx.fillText(text, wm.offsetLeft + wm.offsetWidth / 2, wm.offsetTop + (wm.offsetHeight - asc - desc) / 2 + asc)
      }
      upload(artTex, 0, gl.RGB, art)
      artReady = true
    }
    function upload(tex, unit, format, source) {
      gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, tex)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
      gl.texImage2D(gl.TEXTURE_2D, 0, format, format, gl.UNSIGNED_BYTE, source)
    }
    // Map the photo like CSS object-fit: cover, honouring its object-position.
    function fitPhoto() {
      const pw = photo.naturalWidth, ph = photo.naturalHeight
      if (!pw || !ph || !cssW) return
      const pos = getComputedStyle(photo).objectPosition.split(' ').map(v => v.endsWith('%') ? parseFloat(v) / 100 : 0.5)
      const scale = Math.max(cssW / pw, cssH / ph)
      const sx = cssW / scale / pw, sy = cssH / scale / ph
      gl.uniform2f(uScale, sx, sy)
      gl.uniform2f(uOffset, (1 - sx) * (pos[0] ?? 0.5), (1 - sy) * (1 - (pos[1] ?? 0.5))) // texture rows run bottom-up
    }

    let W = 0, H = 0, cur = new Float32Array(0), prev = new Float32Array(0), bytes = new Uint8Array(0)
    function resize() {
      if (!box) return
      cssW = box.clientWidth; cssH = box.clientHeight
      if (!cssW || !cssH) return
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(cssW * dpr); canvas.height = Math.round(cssH * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
      W = Math.max(3, Math.ceil(cssW / CELL)); H = Math.max(3, Math.ceil(cssH / CELL))
      cur = new Float32Array(W * H); prev = new Float32Array(W * H); bytes = new Uint8Array(W * H).fill(128)
      gl.uniform2f(uTexel, 1 / W, 1 / H)
      if (photo) fitPhoto(); else paint()
    }
    // Circular drop at grid cell (gx, gy); gy counts from the bottom.
    function drop(gx, gy, radius, strength) {
      const r2 = radius * radius
      for (let y = Math.max(1, gy - radius); y <= Math.min(H - 2, gy + radius); y++) {
        for (let x = Math.max(1, gx - radius); x <= Math.min(W - 2, gx + radius); x++) {
          const d2 = (x - gx) ** 2 + (y - gy) ** 2
          if (d2 <= r2) cur[y * W + x] += strength * (1 - d2 / r2)
        }
      }
    }
    function step() {
      for (let y = 1; y < H - 1; y++) {
        const row = y * W
        for (let x = 1; x < W - 1; x++) {
          const i = row + x
          prev[i] = ((cur[i - 1] + cur[i + 1] + cur[i - W] + cur[i + W]) * 0.5 - prev[i]) * DAMPING
        }
      }
      const swap = cur; cur = prev; prev = swap
      for (let i = 0; i < bytes.length; i++) {
        const v = 128 + cur[i] * HEIGHT_SCALE
        bytes[i] = v < 0 ? 0 : v > 255 ? 255 : v
      }
    }

    let lastX = null, lastY = null
    function move(e) {
      if (!box) return
      const rect = box.getBoundingClientRect()
      const x = (e.clientX - rect.left) / CELL, y = (rect.bottom - e.clientY) / CELL
      if (lastX === null) { lastX = x; lastY = y }
      // Drops along the path, so a fast sweep leaves a continuous trail.
      const steps = Math.min(12, Math.max(1, Math.ceil(Math.hypot(x - lastX, y - lastY) / 2)))
      for (let s = 1; s <= steps; s++) {
        const t = s / steps
        drop(Math.round(lastX + (x - lastX) * t), Math.round(lastY + (y - lastY) * t), 3, 0.9 / steps + 0.25)
      }
      lastX = x; lastY = y
    }
    function leave() { lastX = lastY = null }
    function splash(e) {
      if (!box) return
      const rect = box.getBoundingClientRect()
      drop(Math.round((e.clientX - rect.left) / CELL), Math.round((rect.bottom - e.clientY) / CELL), 6, 3)
    }

    let frame = 0, running = false, shown = false, lastAmbient = 0, onScreen = true, overWasLive = false
    function render(now) {
      frame = requestAnimationFrame(render)
      if (!W || !box) return
      if (photo && photo.complete && photo.naturalWidth && photo.currentSrc !== photoSrc) {
        photoSrc = photo.currentSrc
        upload(artTex, 0, gl.RGB, photo); fitPhoto()
        artReady = true
      }
      if (!artReady) return
      // A 2D layer drawn over the photo (the home hero's copper reveal): while it is painting,
      // pass it through so it ripples with the photo instead of sitting flat on top.
      const layer = over && over()
      if (layer) {
        const live = layer.live()
        if (live || overWasLive) upload(overTex, 2, gl.RGBA, layer.canvas)
        if (live !== overWasLive) gl.uniform1f(uOverOn, live ? 1 : 0)
        overWasLive = live
      }
      // An occasional faint droplet keeps the surface alive, also on touch screens.
      if (ambient && now - lastAmbient > ambient) {
        lastAmbient = now
        drop(1 + Math.floor(Math.random() * (W - 2)), 1 + Math.floor(Math.random() * (H - 2)), 4, 0.8)
      }
      step()
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, heightTex)
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, W, H, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, bytes)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      if (!shown) { shown = true; canvas.style.opacity = '1'; box.classList.add('is-water') }
    }
    function start() { if (!running && !document.hidden && box) { running = true; frame = requestAnimationFrame(render) } }
    function stop() { running = false; cancelAnimationFrame(frame) }

    const seen = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; if (onScreen) start(); else stop() })
    const sized = new ResizeObserver(resize)
    on(document, 'visibilitychange', () => { if (document.hidden) stop(); else if (onScreen) start() })

    function detach() {
      stop(); sized.disconnect(); seen.disconnect()
      canvas.style.opacity = ''
      if (box) box.classList.remove('is-water')
      box = photo = wm = null
      shown = false; lastX = lastY = null
    }
    function attach(next) {
      if (box === next) return
      detach()
      box = next
      photo = box.querySelector('img')
      wm = box.querySelector('.phero__wm')
      artReady = false; photoSrc = ''; onScreen = true; W = 0
      gl.uniform2f(uScale, 1, 1); gl.uniform2f(uOffset, 0, 0)
      gl.uniform1f(uGray, gray && photo ? 1 : 0)
      if (photo) { gl.uniform3f(uTint, 1, 1, 1); gl.uniform2f(uLight, -0.07, 0.3) }
      else { gl.uniform3f(uTint, 1, 0.88, 0.76); gl.uniform2f(uLight, -0.05, 0.24) }
      resize()
      sized.observe(box); seen.observe(box)
      start()
    }
    cleanups.push(() => { detach(); const lose = gl.getExtension('WEBGL_lose_context'); if (lose) lose.loseContext() })
    return { attach, detach, move, leave, splash, paint }
  }

  // Heroes: the home photo (shown black-and-white, with the copper reveal on top) or the dark
  // inner-page backdrop. Pointer movement anywhere over the hero makes waves.
  ;(function heroWater() {
    const canvas = $('.water')
    const box = canvas && canvas.parentElement
    if (!box || reduce) return
    const water = makeWater(canvas, { gray: true, over: () => revealLayer })
    if (!water) return
    const zone = box.closest('.hero') || box
    on(zone, 'pointermove', water.move, { passive: true })
    on(zone, 'pointerleave', water.leave)
    on(zone, 'pointerdown', water.splash, { passive: true })
    water.attach(box)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (alive) water.paint() })
  })()

  // Case-study cards: one shared water surface that moves into whichever card the mouse is over.
  ;(function cardWater() {
    const links = $$('.pcard-link')
    if (!links.length || reduce || !matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let water, canvas
    links.forEach(link => {
      const frame = link.querySelector('.pcard__frame')
      if (!frame) return
      on(link, 'pointerenter', e => {
        if (water === undefined) {
          canvas = document.createElement('canvas')
          canvas.className = 'water'
          canvas.setAttribute('aria-hidden', 'true')
          water = makeWater(canvas, { ambient: 0 })
        }
        if (!water) return
        frame.appendChild(canvas)
        water.attach(frame)
        water.move(e)
      })
      on(link, 'pointermove', e => { if (water) water.move(e) }, { passive: true })
      on(link, 'pointerdown', e => { if (water) water.splash(e) }, { passive: true })
      on(link, 'pointerleave', () => { if (water) water.detach() })
    })
  })()

  return () => {
    alive = false
    ac.abort()
    timers.forEach(clearTimeout)
    timers.clear()
    cleanups.reverse().forEach(fn => { try { fn() } catch { /* already torn down */ } })
  }
}
