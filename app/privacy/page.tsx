import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Artem Antonenko',
  description: 'Privacy Policy for Artem Antonenko\'s professional portfolio website',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: November 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This website, operated by Artem Antonenko, presents professional information about engineering leadership,
              AI transformation, and related case studies. This Privacy Policy explains how personal data is collected,
              used, and protected when you interact with the site. Processing complies with the EU General Data Protection
              Regulation (GDPR) and applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Data Controller</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Name:</strong> Artem Antonenko
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:antonenko.artem@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  antonenko.artem@gmail.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Location:</strong> European Union
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Data Collected</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  <strong>Contact data:</strong> name, email address, and message content submitted via contact forms
                  or scheduling tools.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  <strong>Technical data:</strong> IP address, device and browser type, operating system, pages visited,
                  timestamps.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  <strong>Cookies/trackers:</strong> essential cookies for site functionality; optional analytics cookies
                  if enabled.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Sensitive personal data is neither requested nor processed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Purposes and Legal Bases</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Respond to inquiries and scheduling
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Legal basis:</strong> GDPR Art. 6(1)(a) consent, and Art. 6(1)(f) legitimate interests in
                  communicating with prospective clients/recruiters.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Site analytics and improvement
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Legal basis:</strong> Art. 6(1)(f) legitimate interests in understanding and improving
                  site performance.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Security and abuse prevention
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Legal basis:</strong> Art. 6(1)(f) legitimate interests in safeguarding the service.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  <strong>Contact submissions:</strong> retained only as long as necessary to handle the request and
                  any reasonable follow-up, typically up to 12 months.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  <strong>Analytics data:</strong> aggregated and/or anonymized where possible.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Sharing</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              No sale of personal data. Limited sharing with service providers strictly to operate the site (for example,
              hosting, email, analytics), subject to appropriate data processing terms. These providers are not permitted
              to use the data for their own marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. International Transfers</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If tools or processors outside the EU/EEA are used, transfers rely on appropriate safeguards such as
              Standard Contractual Clauses (SCCs).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Under GDPR you may request:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>access, rectification, or erasure of your data;</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>restriction or objection to processing;</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>data portability;</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>withdrawal of consent at any time, without affecting prior processing;</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>complaint to your supervisory authority.</span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              To exercise these rights, email{' '}
              <a href="mailto:antonenko.artem@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                antonenko.artem@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Essential cookies enable core functionality. Non-essential cookies (for example, analytics) are used only
              with consent where required. You can manage cookies through your browser settings or any on-site consent banner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Security</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Reasonable technical and organizational measures are applied, including HTTPS/TLS, access controls, and
              secure hosting, to protect data against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Updates</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This policy may be updated to reflect legal, technical, or business changes. The latest version will be
              published here with an updated effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              For any privacy questions or requests, contact:{' '}
              <a href="mailto:antonenko.artem@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                antonenko.artem@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Back to Top */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
