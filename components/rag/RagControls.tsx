'use client'

import { motion } from 'framer-motion'

interface RagControlsProps {
  isPlaying: boolean
  speed: number
  currentStep: number
  onPlay: () => void
  onPause: () => void
  onReset: () => void
  onStepForward: () => void
  onSpeedChange: (speed: number) => void
}

export default function RagControls({
  isPlaying,
  speed,
  currentStep,
  onPlay,
  onPause,
  onReset,
  onStepForward,
  onSpeedChange,
}: RagControlsProps) {
  const steps = [
    'Query Input',
    'Query Processing',
    'Retrieval',
    'Fusion & Rerank',
    'Context Assembly',
    'Generation',
    'Response',
  ]

  return (
    <div className="px-4 pb-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Playback Controls */}
            <div className="flex items-center space-x-2">
              {/* Play/Pause */}
              <button
                onClick={isPlaying ? onPause : onPlay}
                className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-colors"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Reset */}
              <button
                onClick={onReset}
                className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>

              {/* Step Forward */}
              <button
                onClick={onStepForward}
                disabled={currentStep >= 6}
                className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>

            {/* Speed Control */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-400">Speed:</span>
              <div className="flex space-x-1">
                {[0.5, 1, 2].map((s) => (
                  <button
                    key={s}
                    onClick={() => onSpeedChange(s)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      speed === s
                        ? 'bg-cyan-500/30 text-cyan-400'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-400">Step:</span>
              <div className="flex items-center space-x-1">
                {steps.map((step, i) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i <= currentStep ? 'bg-cyan-400' : 'bg-gray-700'
                    }`}
                    title={step}
                  />
                ))}
              </div>
              <span className="text-sm text-cyan-400 font-mono">
                {steps[currentStep] || 'Ready'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
