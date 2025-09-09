'use client'

import { useEffect } from 'react'

async function logEvent(event: string) {
  try {
    await fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event })
    })
  } catch (err) {
    console.error('Failed to log footer event', err)
  }
}

export default function FooterAnalytics() {
  useEffect(() => {
    const email = document.getElementById('footer-email')
    const phone = document.getElementById('footer-phone')

    const handleEmail = () => logEvent('footer_email_click')
    const handlePhone = () => logEvent('footer_phone_click')

    email?.addEventListener('click', handleEmail)
    phone?.addEventListener('click', handlePhone)

    return () => {
      email?.removeEventListener('click', handleEmail)
      phone?.removeEventListener('click', handlePhone)
    }
  }, [])

  return null
}
