'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Tooltip, { ragTerms } from './Tooltip'

interface RagPipelineProps {
  isPlaying: boolean
  speed: number
  currentStep: number
  onStepChange: (step: number) => void
  selectedModule: string | null
  onModuleSelect: (module: string | null) => void
}

export default function RagPipeline({
  isPlaying,
  speed,
  currentStep,
  onStepChange,
  selectedModule,
  onModuleSelect,
}: RagPipelineProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        onStepChange(currentStep < 6 ? currentStep + 1 : 0)
      }, 2000 / speed)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, speed, currentStep, onStepChange])

  return (
    <div className="relative bg-gray-900/30 border border-gray-800 rounded-2xl p-8 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Pipeline Layout */}
      <div className="relative">
        {/* Row 1: Query Input -> Query Processing */}
        <div className="flex items-center justify-center mb-8">
          <PipelineModule
            name="Query Input"
            icon="📝"
            isActive={currentStep >= 0}
            isProcessing={currentStep === 0 && isPlaying}
            isSelected={selectedModule === 'Query Input'}
            onClick={() => onModuleSelect('Query Input')}
            color="cyan"
          />

          <AnimatedConnection
            isActive={currentStep >= 1}
            speed={speed}
            direction="right"
          />

          <PipelineModule
            name="Query Processing"
            icon="⚙️"
            isActive={currentStep >= 1}
            isProcessing={currentStep === 1 && isPlaying}
            isSelected={selectedModule === 'Query Processing'}
            onClick={() => onModuleSelect('Query Processing')}
            color="blue"
            subtitle="HyDE + Expansion"
            tooltipTerm="HyDE"
          />
        </div>

        {/* Connection to Semantic Cache */}
        <div className="flex justify-center mb-4">
          <AnimatedConnection
            isActive={currentStep >= 2}
            speed={speed}
            direction="down"
          />
        </div>

        {/* Semantic Cache Section */}
        <div className="flex items-center justify-center mb-4">
          <PipelineModule
            name="Semantic Cache"
            icon="💾"
            isActive={currentStep >= 2}
            isProcessing={currentStep === 2 && isPlaying}
            isSelected={selectedModule === 'Semantic Cache'}
            onClick={() => onModuleSelect('Semantic Cache')}
            color="indigo"
            subtitle="Query Lookup"
            tooltipTerm="Semantic Cache"
          />
        </div>

        {/* Cache hit/miss branching */}
        <div className="flex justify-center gap-16 mb-4">
          {/* Cache Hit Path - direct to Context Assembly */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-green-400 mb-2">Cache Hit</span>
            <AnimatedConnection
              isActive={currentStep >= 4}
              speed={speed}
              direction="down"
              length="short"
            />
          </div>

          {/* Cache Miss Path - to Hybrid Retrieval */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-yellow-400 mb-2">Cache Miss</span>
            <AnimatedConnection
              isActive={currentStep >= 2}
              speed={speed}
              direction="down"
              length="short"
            />
          </div>
        </div>

        {/* Row 2: Retrieval Section (Parallel branches with metadata filters) */}
        <div className="bg-gray-800/30 rounded-xl p-6 mb-4 border border-gray-700/50">
          <h3 className="text-sm font-semibold text-gray-400 mb-4 text-center">Hybrid Retrieval</h3>

          <div className="flex items-center justify-center gap-3">
            {/* Left side: Two parallel search branches */}
            <div className="flex flex-col gap-3">
              {/* Sparse Search -> Filter */}
              <div className="flex items-center gap-2">
                <PipelineModule
                  name="Sparse Search"
                  icon="🔤"
                  isActive={currentStep >= 2}
                  isProcessing={currentStep === 2 && isPlaying}
                  isSelected={selectedModule === 'Sparse Search'}
                  onClick={() => onModuleSelect('Sparse Search')}
                  color="yellow"
                  subtitle="BM25"
                  size="small"
                  tooltipTerm="BM25"
                />
                <AnimatedConnection
                  isActive={currentStep >= 2}
                  speed={speed}
                  direction="right"
                  length="short"
                />
                <PipelineModule
                  name="Filter"
                  icon="🔽"
                  isActive={currentStep >= 2}
                  isProcessing={currentStep === 2 && isPlaying}
                  isSelected={selectedModule === 'Metadata Filter'}
                  onClick={() => onModuleSelect('Metadata Filter')}
                  color="gray"
                  subtitle="Metadata"
                  size="small"
                  tooltipTerm="Metadata Filter"
                />
              </div>

              {/* Dense Search -> Filter */}
              <div className="flex items-center gap-2">
                <PipelineModule
                  name="Dense Search"
                  icon="🧠"
                  isActive={currentStep >= 2}
                  isProcessing={currentStep === 2 && isPlaying}
                  isSelected={selectedModule === 'Dense Search'}
                  onClick={() => onModuleSelect('Dense Search')}
                  color="green"
                  subtitle="Vector DB"
                  size="small"
                  tooltipTerm="Vector DB"
                />
                <AnimatedConnection
                  isActive={currentStep >= 2}
                  speed={speed}
                  direction="right"
                  length="short"
                />
                <PipelineModule
                  name="Filter"
                  icon="🔽"
                  isActive={currentStep >= 2}
                  isProcessing={currentStep === 2 && isPlaying}
                  isSelected={selectedModule === 'Metadata Filter'}
                  onClick={() => onModuleSelect('Metadata Filter')}
                  color="gray"
                  subtitle="Metadata"
                  size="small"
                  tooltipTerm="Metadata Filter"
                />
              </div>
            </div>

            {/* Connection from both branches to Fusion */}
            <AnimatedConnection
              isActive={currentStep >= 3}
              speed={speed}
              direction="right"
              length="short"
            />

            {/* Fusion - merges results from both branches */}
            <PipelineModule
              name="Fusion"
              icon="🔀"
              isActive={currentStep >= 3}
              isProcessing={currentStep === 3 && isPlaying}
              isSelected={selectedModule === 'Fusion'}
              onClick={() => onModuleSelect('Fusion')}
              color="purple"
              subtitle="RRF"
              size="small"
              tooltipTerm="RRF"
            />

            <AnimatedConnection
              isActive={currentStep >= 3}
              speed={speed}
              direction="right"
              length="short"
            />

            {/* Reranker */}
            <PipelineModule
              name="Reranker"
              icon="📊"
              isActive={currentStep >= 3}
              isProcessing={currentStep === 3 && isPlaying}
              isSelected={selectedModule === 'Reranker'}
              onClick={() => onModuleSelect('Reranker')}
              color="pink"
              subtitle="Cross-Encoder"
              size="small"
              tooltipTerm="Cross-Encoder"
            />
          </div>
        </div>

        {/* Connection to Context Assembly */}
        <div className="flex justify-center mb-4">
          <AnimatedConnection
            isActive={currentStep >= 4}
            speed={speed}
            direction="down"
          />
        </div>

        {/* Row 3: Context Assembly -> Generation -> Response */}
        <div className="flex items-center justify-center">
          <PipelineModule
            name="Context Assembly"
            icon="📋"
            isActive={currentStep >= 4}
            isProcessing={currentStep === 4 && isPlaying}
            isSelected={selectedModule === 'Context Assembly'}
            onClick={() => onModuleSelect('Context Assembly')}
            color="orange"
            subtitle="Prompt Building"
          />

          <AnimatedConnection
            isActive={currentStep >= 5}
            speed={speed}
            direction="right"
          />

          <PipelineModule
            name="Generation"
            icon="🤖"
            isActive={currentStep >= 5}
            isProcessing={currentStep === 5 && isPlaying}
            isSelected={selectedModule === 'Generation'}
            onClick={() => onModuleSelect('Generation')}
            color="cyan"
            subtitle="LLM"
          />

          <AnimatedConnection
            isActive={currentStep >= 6}
            speed={speed}
            direction="right"
          />

          <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
            currentStep >= 6
              ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/50'
              : 'bg-gray-800/50 border-gray-700'
          }`}>
            <div className="text-2xl mb-1">✨</div>
            <div className="text-sm font-semibold text-white">Response</div>
            {currentStep >= 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-cyan-400 mt-1"
              >
                Complete
              </motion.div>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

interface PipelineModuleProps {
  name: string
  icon: string
  isActive: boolean
  isProcessing: boolean
  isSelected: boolean
  onClick: () => void
  color: string
  subtitle?: string
  size?: 'normal' | 'small'
  tooltipTerm?: string
}

function PipelineModule({
  name,
  icon,
  isActive,
  isProcessing,
  isSelected,
  onClick,
  color,
  subtitle,
  size = 'normal',
  tooltipTerm,
}: PipelineModuleProps) {
  const colorClasses: Record<string, string> = {
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/50',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/50',
    green: 'from-green-500/20 to-green-600/20 border-green-500/50',
    yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/50',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/50',
    pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/50',
    orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/50',
    gray: 'from-gray-500/20 to-gray-600/20 border-gray-500/50',
    indigo: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/50',
  }

  const glowClasses: Record<string, string> = {
    cyan: 'shadow-cyan-500/30',
    blue: 'shadow-blue-500/30',
    green: 'shadow-green-500/30',
    yellow: 'shadow-yellow-500/30',
    purple: 'shadow-purple-500/30',
    pink: 'shadow-pink-500/30',
    orange: 'shadow-orange-500/30',
    gray: 'shadow-gray-500/30',
    indigo: 'shadow-indigo-500/30',
  }

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className={`
        relative ${size === 'small' ? 'p-3' : 'p-4'} rounded-xl border-2 transition-all duration-300 cursor-pointer
        ${isActive
          ? `bg-gradient-to-br ${colorClasses[color]}`
          : 'bg-gray-800/50 border-gray-700'
        }
        ${isSelected ? 'ring-2 ring-white/50' : ''}
        ${isProcessing ? `shadow-lg ${glowClasses[color]}` : ''}
      `}
    >
      {/* Processing indicator */}
      {isProcessing && (
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-white/30"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}

      <div className={size === 'small' ? 'text-xl mb-1' : 'text-2xl mb-1'}>{icon}</div>
      <div className={`font-semibold text-white ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
        {name}
      </div>
      {subtitle && (
        <div className={`text-gray-400 ${size === 'small' ? 'text-[10px]' : 'text-xs'} flex items-center justify-center gap-1`}>
          {subtitle}
          {tooltipTerm && ragTerms[tooltipTerm] && (
            <Tooltip term={tooltipTerm} explanation={ragTerms[tooltipTerm]}>
              <span className="sr-only">Learn more about {tooltipTerm}</span>
            </Tooltip>
          )}
        </div>
      )}
    </motion.div>
  )
}

interface AnimatedConnectionProps {
  isActive: boolean
  speed: number
  direction: 'right' | 'down'
  length?: 'short' | 'normal'
}

function AnimatedConnection({ isActive, speed, direction, length = 'normal' }: AnimatedConnectionProps) {
  const isHorizontal = direction === 'right'
  const size = length === 'short' ? 'w-8' : 'w-16'

  return (
    <div className={`relative ${isHorizontal ? `${size} h-1` : 'w-1 h-8'} mx-2 my-2`}>
      {/* Base line */}
      <div className={`absolute inset-0 ${isActive ? 'bg-gray-600' : 'bg-gray-700'} rounded-full`} />

      {/* Animated particle */}
      {isActive && (
        <motion.div
          className="absolute w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)',
            top: isHorizontal ? '50%' : undefined,
            left: isHorizontal ? undefined : '50%',
          }}
          animate={isHorizontal
            ? { left: ['0%', '100%'] }
            : { top: ['0%', '100%'] }
          }
          transition={{
            duration: 1 / speed,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}
    </div>
  )
}
