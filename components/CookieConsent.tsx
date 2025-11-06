'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent')
    if (!hasAccepted) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 md:flex md:items-center md:justify-between">
            <div className="flex-1 mb-4 md:mb-0 md:mr-6">
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                This website uses cookies to enhance your browsing experience and analyze site traffic.
                By clicking "Accept", you consent to our use of cookies.{' '}
                <a
                  href="/privacy"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={acceptCookies}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow whitespace-nowrap"
              >
                Accept Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
