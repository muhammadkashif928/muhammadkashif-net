'use client'
import { useEffect } from 'react'
import { captureAttribution } from '@/lib/attribution'

/**
 * Renders nothing. Records first-touch attribution once per session so the
 * contact form can report where a lead actually came from.
 */
export default function AttributionTracker() {
  useEffect(() => { captureAttribution() }, [])
  return null
}
