import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | Artem Antonenko',
  description: 'Terms of Use for Artem Antonenko\'s professional portfolio website',
}

export default function TermsOfUse() {
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
            Terms of <span className="gradient-text">Use</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: November 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              These Terms of Use ("Terms") govern your access to and use of this website operated by Artem Antonenko
              ("the Site," "we," "our," or "us"). By accessing or using this Site, you agree to be bound by these Terms.
              If you do not agree, please refrain from using the Site.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This Site is provided for informational and professional presentation purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Purpose of the Site</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  The Site showcases professional experience, case studies, and insights related to engineering leadership,
                  AI transformation, and technology management.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  It is intended to inform prospective employers, collaborators, and professional contacts about
                  Artem Antonenko's work and expertise.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              The Site does not provide commercial, consulting, or advisory services directly through its pages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              All materials on this Site—including text, images, design, graphics, code, and downloadable documents—are
              the intellectual property of Artem Antonenko, unless otherwise noted.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">You may:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>
                    View and share the Site's content for personal or professional reference, provided you give proper
                    attribution and do not modify or sell the material.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">You may not:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span>
                    Copy, reproduce, redistribute, or exploit any content for commercial purposes without prior written permission.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span>
                    Use automated tools (such as scrapers or bots) to extract content or data from the Site.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All rights are reserved under applicable copyright and intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The content provided on this Site is for informational purposes only.
              While every effort is made to ensure accuracy and relevance, the information:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>is not guaranteed to be complete or up to date,</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>does not constitute professional, legal, or business advice, and</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>should not be relied upon as such without independent verification.</span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              The Site is provided "as is", without any warranties of any kind, express or implied.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              To the fullest extent permitted by law:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  Artem Antonenko shall not be liable for any direct, indirect, incidental, or consequential damages
                  resulting from your use of the Site or reliance on its content.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>
                  This includes, but is not limited to, loss of data, business interruption, or reputational damage.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              Your sole remedy for dissatisfaction with the Site is to discontinue its use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. External Links</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              This Site may include links to third-party websites (e.g., LinkedIn, Medium, GitHub).
              These links are provided for convenience and do not imply endorsement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We are not responsible for the content, security, or privacy practices of external websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact and Communication</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When you contact Artem Antonenko through email or a contact form, the provided information is handled in
              accordance with the{' '}
              <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </Link>{' '}
              and used solely to respond to your inquiry.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Changes to These Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              These Terms may be updated periodically to reflect operational, legal, or technical changes.
              The updated version will be posted on this page with a revised effective date.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Continued use of the Site after updates constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the European Union and the
              country of residence of Artem Antonenko, without regard to conflict-of-law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              For any questions regarding these Terms, please contact:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:antonenko.artem@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                antonenko.artem@gmail.com
              </a>
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
