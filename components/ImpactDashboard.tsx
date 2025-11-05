'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const metrics = [
  {
    value: 87,
    suffix: '%',
    label: 'Delivery Predictability',
    description: 'Improved from 50% via Fractal Architecture & Feature Ownership',
    color: 'from-green-500 to-emerald-500',
  },
  {
    value: 8,
    suffix: 'x',
    label: 'ROI on AI Tools',
    description: 'Enterprise-wide AI coding implementation',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Projects as Solution Architect',
    description: 'Enterprise solutions across multiple domains',
    color: 'from-purple-500 to-pink-500',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Department Leadership',
    description: 'Software Engineers, AQA, QA, DevOps, ML Engineers',
    color: 'from-orange-500 to-red-500',
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function ImpactDashboard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('impact')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

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
            Numbers that matter. Real transformation with quantifiable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon/Visual element */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} mb-6 flex items-center justify-center`}
                >
                  <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-lg" />
                </div>

                {/* Number */}
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {isVisible ? (
                    <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                  ) : (
                    `0${metric.suffix}`
                  )}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-24 h-24 opacity-5 dark:opacity-10">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: '🏗️',
              title: 'Software Architecture',
              description: '50M daily users application design, extension, and maintenance',
            },
            {
              icon: '🚀',
              title: 'Delivery Excellence',
              description: 'Built process allowing high responsibility from engineers and ability to deliver 4x more projects in parallel',
            },
            {
              icon: '👥',
              title: 'People Development',
              description: 'Professional coach, growing 5 Engineering Leads and 3 Engineering Managers',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
