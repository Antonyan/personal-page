'use client'

import { motion } from 'framer-motion'

const impactSections = [
  {
    id: 'ai-transformation',
    title: 'AI Transformation Across 12 Companies',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-500',
    description: 'Led enterprise-wide AI implementation programs across twelve organizations with varied cultures, delivery models, and maturity levels—from early-stage startups to global enterprises.',
    details: 'Developed adaptable frameworks integrating AI into product and engineering workflows, accelerating delivery while aligning with each company\'s operational constraints.',
  },
  {
    id: 'cross-domain',
    title: 'Cross-Domain Measurable AI Impact',
    icon: '📊',
    color: 'from-purple-500 to-pink-500',
    description: 'Delivered quantifiable improvements throughout the software lifecycle:',
    metrics: [
      { label: 'UI Engineering', value: 'Agentic AI + MCP Server accelerated component creation by 8×' },
      { label: 'Product Discovery', value: 'AI-assisted prototyping shortened value-stream mapping by 15%' },
      { label: 'Backend Delivery', value: 'Automated task execution reduced development time 22–80%' },
      { label: 'Design', value: 'AI-integrated Figma workflows increased design efficiency > 40%' },
      { label: 'Analytics', value: 'Self-service AI insights cut reporting cycles from weeks to minutes' },
    ],
  },
  {
    id: 'production-ai',
    title: 'AI in Production: From Experiment to Value',
    icon: '⚡',
    color: 'from-green-500 to-emerald-500',
    description: 'Implemented production-grade AI systems with direct business outcomes:',
    outcomes: [
      { title: 'CNN-based Profile Validation', impact: 'Reduced registration time from 1 hour to minutes' },
      { title: 'RAG-based AI Support Assistant', impact: 'Saved ≈ 3.9 FTE annually through automation and faster resolution' },
    ],
  },
  {
    id: 'leadership',
    title: 'End-to-End Engineering Leadership',
    icon: '🎯',
    color: 'from-orange-500 to-red-500',
    description: 'Extensive experience across product- and service-oriented organizations.',
    achievements: [
      'Scaled engineering teams from 6 to 40+',
      'Delivered 30+ enterprise-scale solutions',
      'Architected systems for brands including Volvo, Nike, Panini, and Oracle',
    ],
    summary: 'Combines enterprise-level rigor with startup agility to drive transformation in both high-velocity and regulated environments.',
  },
]

export default function ImpactDashboard() {
  return (
    <section id="impact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Measurable <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real transformation with quantifiable results across organizations, technologies, and teams.
          </p>
        </motion.div>

        <div className="space-y-12">
          {impactSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 w-2 h-full rounded-l-2xl bg-gradient-to-b ${section.color}`} />

                {/* Header */}
                <div className="flex items-start gap-4 mb-6 ml-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-3xl flex-shrink-0`}
                  >
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Content based on section type */}
                <div className="ml-4">
                  {section.details && (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {section.details}
                    </p>
                  )}

                  {section.metrics && (
                    <ul className="space-y-3 mt-4">
                      {section.metrics.map((metric, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          <div>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {metric.label}:
                            </span>{' '}
                            <span className="text-gray-600 dark:text-gray-400">{metric.value}</span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {section.outcomes && (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {section.outcomes.map((outcome, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                        >
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {outcome.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{outcome.impact}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {section.achievements && (
                    <div className="mt-4">
                      <ul className="space-y-2 mb-4">
                        {section.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                          >
                            <span className="text-blue-500 flex-shrink-0">▸</span>
                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                      {section.summary && (
                        <p className="text-gray-600 dark:text-gray-400 italic border-l-4 border-blue-500 pl-4 py-2">
                          {section.summary}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Decorative gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '12', label: 'Companies Transformed', icon: '🏢' },
            { value: '30+', label: 'Enterprise Solutions', icon: '🏗️' },
            { value: '6→40+', label: 'Team Scaling', icon: '👥' },
            { value: '8×', label: 'Peak AI Acceleration', icon: '⚡' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
