'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const roles = [
  'Engineering & AI Transformation Executive',
  'Head of Engineering | Product & Org Scale',
  'AI-Enabled Delivery & Engineering Leadership',
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6 order-2 md:order-1"
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Building High-Performing Engineering Teams and Products, Powered by{' '}
            <span className="gradient-text">Practical AI Adoption</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-16 md:h-20"
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="font-semibold text-blue-600 dark:text-blue-400"
              >
                {roles[currentRole]}
              </motion.span>
            </p>
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Leading enterprise AI transformation across 500+ professionals (300+ engineers, BAs, POs, designers) and 12 companies.
            Delivering 8x ROI, 60-70% workload reduction, and measurable business impact
            through strategic AI implementation and technical excellence.
          </motion.p>

          {/* CTA Buttons - UX Hierarchy: Primary (filled) drives main business objective, Secondary (outlined) offers low-commitment exploration */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Primary CTA: LinkedIn connection - Main business objective for conversation initiation */}
            <motion.a
              href="https://www.linkedin.com/in/artem-antonenko-al/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Let&apos;s Connect
            </motion.a>
            {/* Secondary CTA: Case studies - Low-commitment option for users not ready to engage directly */}
            <motion.a
              href="#case-studies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              View Case Studies
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div>
              <div className="text-2xl md:text-3xl font-bold gradient-text">500+</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Professionals Led</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold gradient-text">8x</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">ROI Delivered</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold gradient-text">70%</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Workload Reduction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Professional Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-start order-1 md:order-2 md:items-center -mt-8 md:mt-0"
        >
          <div className="relative">
            {/* Animated background glow - reduced opacity on mobile */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-3xl md:opacity-100"
            />

            {/* Photo container with gradient border - desaturated on mobile */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-[240px] h-[290px] sm:w-[300px] sm:h-[370px] md:w-[450px] md:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400/70 via-purple-400/70 to-pink-400/70 md:from-blue-500 md:via-purple-500 md:to-pink-500 p-1"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-900">
                <Image
                  src="/images/profile.jpg"
                  alt="Artem Antonenko - AI-Driven Engineering Leader"
                  width={450}
                  height={550}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating accent elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 blur-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
