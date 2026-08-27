export const GA_ID = 'G-MVSXD6FDHQ'

// Fire a GA4 event. No-ops when gtag isn't available (SSR, blocked, dev).
export function gaEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}
