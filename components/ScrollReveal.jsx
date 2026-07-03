'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Reveals <section> elements as they scroll into view. Classes are only
// added by JS, so content stays fully visible for crawlers and no-JS users.
export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const sections = document.querySelectorAll('main section')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    )

    sections.forEach((s) => {
      // Skip anything already on screen so above-the-fold content never flashes
      if (s.getBoundingClientRect().top < window.innerHeight * 0.92) return
      s.classList.add('reveal-init')
      observer.observe(s)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
