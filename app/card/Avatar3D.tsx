'use client'

import Image from 'next/image'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent } from 'react'

const MAX_POINTER_TILT = 14

export default function Avatar3D() {
  const reduceMotion = useReducedMotion()

  // Pointer tilt on top of the idle sway (desktop hover)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-MAX_POINTER_TILT, MAX_POINTER_TILT]), {
    stiffness: 150,
    damping: 18,
  })
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [MAX_POINTER_TILT, -MAX_POINTER_TILT]), {
    stiffness: 150,
    damping: 18,
  })

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div
      className="relative p-4 [perspective:700px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {/* Soft shadow that stays on the "floor" while the photo moves */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-8 bottom-1 h-6 rounded-full bg-indigo-500/30 blur-xl"
        animate={reduceMotion ? undefined : { scaleX: [1, 0.85, 1], opacity: [0.7, 0.45, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <motion.div
          style={{ transformStyle: 'preserve-3d' }}
          animate={
            reduceMotion
              ? undefined
              : { rotateY: [-8, 8, -8], rotateX: [3, -3, 3], y: [0, -4, 0] }
          }
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="relative rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[3px] shadow-[0_0_40px_rgba(99,102,241,0.35)]"
        >
          <div className="relative overflow-hidden rounded-full">
            <Image
              src="/images/card-avatar.jpg"
              alt="Artem Antonenko"
              width={160}
              height={160}
              priority
              className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
            />
            {/* Light sweep across the photo */}
            {!reduceMotion && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.28)_50%,transparent_65%)]"
                initial={{ x: '-120%' }}
                animate={{ x: ['-120%', '120%'] }}
                transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 5.4, delay: 1.2 }}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
