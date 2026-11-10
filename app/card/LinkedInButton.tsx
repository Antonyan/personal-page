'use client'

import type { MouseEvent, ReactNode } from 'react'

const HANDLE = 'artem-antonenko-al'
const WEB_URL = `https://www.linkedin.com/in/${HANDLE}/`
const IOS_APP_URL = `linkedin://in/${HANDLE}`
// Chrome on Android opens the LinkedIn app directly; without the app it goes to the fallback URL.
const ANDROID_APP_URL = `intent://www.linkedin.com/in/${HANDLE}/#Intent;scheme=https;package=com.linkedin.android;S.browser_fallback_url=${encodeURIComponent(WEB_URL)};end`

const FALLBACK_DELAY_MS = 1500

export default function LinkedInButton({ className, children }: { className: string; children: ReactNode }) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const ua = navigator.userAgent
    const isAndroid = /Android/i.test(ua)
    // iPadOS reports itself as Macintosh, so check for touch support as well.
    const isIOS = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)

    if (isAndroid) {
      event.preventDefault()
      window.location.href = ANDROID_APP_URL
      return
    }

    if (isIOS) {
      event.preventDefault()
      // If the app opens, the page goes to the background and the web fallback is cancelled.
      const timer = window.setTimeout(() => {
        if (!document.hidden) window.location.href = WEB_URL
      }, FALLBACK_DELAY_MS)
      const cancel = () => {
        window.clearTimeout(timer)
        document.removeEventListener('visibilitychange', cancel)
        window.removeEventListener('pagehide', cancel)
      }
      document.addEventListener('visibilitychange', cancel)
      window.addEventListener('pagehide', cancel)
      window.location.href = IOS_APP_URL
    }
    // Desktop: the regular link opens LinkedIn in a new tab.
  }

  return (
    <a href={WEB_URL} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
      {children}
    </a>
  )
}
