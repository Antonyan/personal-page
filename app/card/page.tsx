import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import ShareButtons from './ShareButtons'

export const metadata: Metadata = {
  title: 'Artem Antonenko – CTO of Skillbourg.com',
  description:
    'Applied AI & Platform Architecture · NLP · AI Transformation at Scale · Responsible AI. Save my contact, connect on LinkedIn, or book a call.',
  alternates: { canonical: '/card' },
  openGraph: {
    title: 'Artem Antonenko – CTO of Skillbourg.com',
    description: 'Applied AI & Platform Architecture · NLP · AI Transformation at Scale · Responsible AI',
    type: 'profile',
    url: 'https://www.artem-antonenko.com/card',
    images: [{ url: '/images/card-avatar.jpg', width: 600, height: 600, alt: 'Artem Antonenko' }],
  },
  twitter: {
    card: 'summary',
    title: 'Artem Antonenko – CTO of Skillbourg.com',
    description: 'Applied AI & Platform Architecture · NLP · AI Transformation at Scale · Responsible AI',
    images: ['/images/card-avatar.jpg'],
  },
  robots: { index: false, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#070a14',
}

const LINKEDIN_URL = 'https://www.linkedin.com/in/artem-antonenko-al/'
const WHATSAPP_URL = `https://wa.me/352661367192?text=${encodeURIComponent('Hi Artem, nice to meet you! ')}`
const EMAIL_URL = `mailto:antonenko.artem@gmail.com?subject=${encodeURIComponent('Nice to meet you')}`

const focusAreas = [
  'Applied AI & Platform Architecture',
  'NLP',
  'AI Transformation at Scale',
  'Responsible AI',
]

const stats = [
  { value: '18+', label: 'years building engineering orgs' },
  { value: '500+', label: 'engineers led through AI adoption' },
  { value: '12', label: 'companies transformed' },
  { value: '50M+', label: 'daily users on systems I ran' },
]

const helpWith = [
  {
    title: 'Applied AI & NLP in production',
    text: 'Matching and ranking, RAG, agentic workflows. From prototype to a system with SLAs and metrics.',
  },
  {
    title: 'AI transformation at scale',
    text: 'Adoption programs, governance and enablement across many teams, with ROI you can measure.',
  },
  {
    title: 'Platform architecture & team scaling',
    text: 'Distributed systems on AWS/Azure. Grew teams from 6 to 100+ engineers without losing delivery speed.',
  },
  {
    title: 'Responsible AI',
    text: 'Explainable, fair decisions, EU hosting and GDPR by design. AI that people and regulators can trust.',
  },
]

const contacts = [
  { label: 'WhatsApp', detail: '+352 661 367 192', href: WHATSAPP_URL, icon: 'whatsapp', external: true },
  { label: 'Telegram', detail: '@maggadda', href: 'https://t.me/maggadda', icon: 'telegram', external: true },
  { label: 'Book a 30-min call', detail: 'Calendly', href: 'https://calendly.com/antonenko-artem/interview', icon: 'calendar', external: true },
  { label: 'Email', detail: 'antonenko.artem@gmail.com', href: EMAIL_URL, icon: 'email', external: false },
  { label: 'Call', detail: '+352 661 367 192', href: 'tel:+352661367192', icon: 'phone', external: false },
  { label: 'Download CV', detail: 'PDF', href: '/Artem_Antonenko_Executive_CV.pdf', icon: 'document', external: false, download: true },
  { label: 'Full portfolio', detail: 'artem-antonenko.com', href: '/', icon: 'globe', external: false },
]

export default function CardPage() {
  return (
    <main className="min-h-screen bg-[#070a14] text-gray-100 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.12),transparent_50%)]">
      <div className="mx-auto flex w-full max-w-[440px] flex-col gap-5 px-4 pb-20 pt-8">
        {/* Identity */}
        <section className="flex flex-col items-center text-center">
          <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[3px] shadow-[0_0_40px_rgba(99,102,241,0.35)]">
            <Image
              src="/images/card-avatar.jpg"
              alt="Artem Antonenko"
              width={128}
              height={128}
              priority
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight">Artem Antonenko</h1>
          <p className="mt-1 text-lg font-semibold">
            CTO of{' '}
            <a
              href="https://skillbourg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Skillbourg.com
            </a>
          </p>
          <p className="mt-1 text-sm text-gray-400">🇱🇺 Luxembourg · EU citizen · open to global work</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-gray-300">
            I turn AI from demos into production systems and from pilots into company-wide results.
            18 years of engineering leadership, now building an AI hiring platform where every match is
            explainable and fair.
          </p>
        </section>

        {/* Primary actions */}
        <section className="flex flex-col gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/40 transition-transform active:scale-[0.98]"
          >
            <Icon name="linkedin" className="h-5 w-5" />
            Connect on LinkedIn
          </a>
          <a
            href="/artem-antonenko.vcf"
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
          >
            <Icon name="contact" className="h-5 w-5" />
            Save contact to phone
          </a>
          <p className="text-center text-xs text-gray-500">Opens directly in iOS and Android Contacts</p>
        </section>

        {/* Proof */}
        <section className="grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div key={stat.value} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-gray-400">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Now building */}
        <a
          href="https://skillbourg.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-purple-400/25 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-5 transition-colors hover:border-purple-400/50"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-300">Now building</div>
          <div className="mt-2 text-lg font-semibold">Skillbourg.com →</div>
          <p className="mt-1 text-sm leading-relaxed text-gray-300">
            AI-powered fair hiring platform for Europe. NLP matching scores every candidate-job pair on hard
            skills, soft skills, eligibility and budget fit, and explains why. EU hosted, data never sold.
          </p>
        </a>

        {/* Where I can help */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Where I can help</h2>
          <ul className="mt-3 flex flex-col gap-4">
            {helpWith.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                <div>
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <div className="mt-0.5 text-sm leading-relaxed text-gray-400">{item.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Direct contacts */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              download={contact.download ? true : undefined}
              className={`flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/5 ${
                index > 0 ? 'border-t border-white/5' : ''
              }`}
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/5 text-blue-300">
                <Icon name={contact.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-white">{contact.label}</span>
                <span className="block truncate text-xs text-gray-400">{contact.detail}</span>
              </span>
              <span className="text-gray-500">›</span>
            </a>
          ))}
        </section>

        {/* Scan to connect */}
        <section className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Scan to connect</h2>
          <div className="rounded-2xl bg-white p-3">
            <Image src="/images/card-qr.svg" alt="QR code for artem-antonenko.com/card" width={200} height={200} unoptimized />
          </div>
          <p className="text-center text-xs text-gray-500">Point a phone camera at the code. Turn screen brightness up for a faster scan.</p>
          <div className="w-full">
            <ShareButtons />
          </div>
        </section>
      </div>
    </main>
  )
}

function Icon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'linkedin':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'telegram':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )
    case 'email':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case 'phone':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    case 'calendar':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'document':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    case 'globe':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    case 'contact':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    default:
      return null
  }
}
