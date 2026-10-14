'use client'

import { useState } from 'react'

const CARD_URL = 'https://www.artem-antonenko.com/card'

export default function ShareButtons() {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(CARD_URL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this link:', CARD_URL)
    }
  }

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Artem Antonenko, CTO of Skillbourg',
          text: 'Applied AI & Platform Architecture · NLP · AI Transformation at Scale',
          url: CARD_URL,
        })
      } catch {
        // User closed the share sheet
      }
    } else {
      copyLink()
    }
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={copyLink}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10"
      >
        {copied ? '✓ Link copied' : 'Copy link'}
      </button>
      <button
        type="button"
        onClick={share}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10"
      >
        Share card
      </button>
    </div>
  )
}
