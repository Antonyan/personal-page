import Hero from '@/components/Hero'
import ImpactDashboard from '@/components/ImpactDashboard'
import CaseStudies from '@/components/CaseStudies'
import TechnicalDNA from '@/components/TechnicalDNA'
import Leadership from '@/components/Leadership'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <Navigation />
      <Hero />
      <ImpactDashboard />
      <CaseStudies />
      <TechnicalDNA />
      <Leadership />
      <Footer />
    </main>
  )
}
