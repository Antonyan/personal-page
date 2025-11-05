'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Profile Validation System',
    challenge: 'Manual review of 10,000+ daily profile pictures causing operational bottleneck',
    solution: 'Built Computer Vision system using FaceNet, ResNet, and CNN for automated validation',
    impact: [
      '60-70% workload reduction',
      '3.88 FTE saved annually',
      'Real-time automated validation',
      'Scalable to 100K+ daily validations',
    ],
    tech: ['Python', 'FaceNet', 'ResNet', 'CNN', 'Computer Vision'],
    category: 'AI/ML',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Text-to-SQL AI Agent for Business Intelligence',
    challenge: 'Non-technical stakeholders waiting 1 week for custom SQL queries',
    solution: 'Developed Text-to-SQL agent using GPT-4, Weaviate, and RAG architecture',
    impact: [
      'Query time: 1 week → minutes',
      'Self-service BI for non-technical users',
      'RAG-enhanced accuracy',
      'Natural language to SQL conversion',
    ],
    tech: ['Python', 'GPT-4', 'Weaviate', 'RAG', 'DuckDB', 'WrenAI'],
    category: 'AI/ML',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Enterprise AI Coding Tools Implementation',
    challenge: 'Transform 300+ engineers across 12 companies with AI-assisted development',
    solution: 'Strategic rollout of AI coding tools with training, best practices, and ROI tracking',
    impact: [
      '8x ROI on implementation',
      '22% of engineers saving 2-3 hours daily',
      '300+ engineers onboarded',
      'Measurable productivity gains',
    ],
    tech: ['AI Coding Tools', 'Change Management', 'Training Programs', 'Analytics'],
    category: 'Leadership',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Fractal Architecture Migration',
    challenge: 'Legacy monolith limiting scalability and team autonomy',
    solution: 'Designed and led migration to Fractal Architecture using Bubble Approach',
    impact: [
      'Delivery predictability: 50% → 87%',
      '15 autonomous engineers',
      '2-year migration successfully completed',
      'Zero-downtime deployment',
    ],
    tech: ['Fractal Architecture', 'PHP', 'MySQL', 'Microservices', 'Docker'],
    category: 'Architecture',
    color: 'from-orange-500 to-red-500',
  },
]

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(0)

  return (
    <section id="case-studies" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Case Studies</span> & Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world transformations with measurable business impact
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['All', 'AI/ML', 'Leadership', 'Architecture'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Case studies grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedStudy(index)}
              className="cursor-pointer group"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${study.color} text-white`}
                  >
                    {study.category}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 pr-24 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                        Impact
                      </h4>
                      <ul className="space-y-2">
                        {study.impact.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover arrow */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="absolute bottom-8 right-8 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
