import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Artem Antonenko - AI-Driven Engineering Leader',
  description: 'Transforming Engineering Teams Through AI Innovation & Technical Excellence. 8x ROI on AI implementations, 300+ engineers led, proven track record in enterprise AI transformation.',
  keywords: ['AI Leadership', 'Engineering Leadership', 'AI Transformation', 'Machine Learning', 'Tech Lead', 'CTO'],
  authors: [{ name: 'Artem Antonenko' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Artem Antonenko - AI-Driven Engineering Leader',
    description: 'Transforming Engineering Teams Through AI Innovation & Technical Excellence',
    type: 'website',
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
