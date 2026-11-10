import type { Metadata } from 'next'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.artem-antonenko.com'),
  title: 'Artem Antonenko | AI-native CTO, Skillbourg | LLM extraction and ranking',
  description: 'CTO of Skillbourg. LLM extraction, learning-to-rank and bias testing in production. Software dark factories: autonomous development with AI agents. Co-author of ResumeParsingBench (PRICAI 2026). 20 years in engineering leadership.',
  keywords: [
    'AI-native CTO',
    'CTO',
    'Applied ML',
    'LLM extraction',
    'Learning to rank',
    'LLM evaluation',
    'Bias testing',
    'Software dark factory',
    'AI agents',
    'AI Transformation',
    'Engineering Leadership'
  ],
  authors: [{ name: 'Artem Antonenko' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Artem Antonenko | AI-native CTO, Skillbourg | LLM extraction and ranking',
    description: 'CTO of Skillbourg. LLM extraction, learning-to-rank and bias testing in production. Software dark factories: autonomous development with AI agents. Co-author of ResumeParsingBench (PRICAI 2026). 20 years in engineering leadership.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.artem-antonenko.com',
    siteName: 'Artem Antonenko',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 800,
        alt: 'Artem Antonenko | AI-native CTO, Skillbourg | LLM extraction and ranking',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artem Antonenko | AI-native CTO, Skillbourg | LLM extraction and ranking',
    description: 'CTO of Skillbourg. LLM extraction, learning-to-rank and bias testing in production. Software dark factories: autonomous development with AI agents. Co-author of ResumeParsingBench (PRICAI 2026). 20 years in engineering leadership.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-987878755"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-987878755');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
