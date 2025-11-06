import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://artem-antonenko.vercel.app'),
  title: 'Artem Antonenko - AI-Driven Engineering Leader',
  description: 'Transforming Engineering Teams Through AI Innovation & Technical Excellence. 8x ROI on AI implementations, 300+ engineers led, proven track record in enterprise AI transformation.',
  keywords: ['AI Leadership', 'Engineering Leadership', 'AI Transformation', 'Machine Learning', 'Tech Lead', 'CTO'],
  authors: [{ name: 'Artem Antonenko' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Artem Antonenko - Engineering & AI Transformation Executive',
    description: 'Building High-Performing Engineering Teams and Products, Powered by Practical AI Adoption. Leading 500+ professionals across 12 companies with 8x ROI and 70% workload reduction.',
    type: 'website',
    locale: 'en_US',
    url: 'https://artem-antonenko.vercel.app',
    siteName: 'Artem Antonenko - Engineering Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Artem Antonenko - Engineering & AI Transformation Executive',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artem Antonenko - Engineering & AI Transformation Executive',
    description: 'Building High-Performing Engineering Teams with Practical AI Adoption. 500+ professionals led, 8x ROI, 70% workload reduction.',
    images: ['/og-image.svg'],
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
