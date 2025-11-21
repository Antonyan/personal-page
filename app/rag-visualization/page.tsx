'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import RagPipeline from '@/components/rag/RagPipeline'
import RagControls from '@/components/rag/RagControls'

export default function RagVisualizationPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)
  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStep(0)
  }
  const handleStepForward = () => {
    if (currentStep < 6) setCurrentStep(prev => prev + 1)
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Artem Antonenko
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-cyan-400 font-semibold">RAG Pipeline</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Production RAG Pipeline
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Interactive visualization of Retrieval-Augmented Generation architecture.
              Watch how data flows through each component in real-time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <RagControls
        isPlaying={isPlaying}
        speed={speed}
        currentStep={currentStep}
        onPlay={handlePlay}
        onPause={handlePause}
        onReset={handleReset}
        onStepForward={handleStepForward}
        onSpeedChange={setSpeed}
      />

      {/* Pipeline Visualization */}
      <div className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <RagPipeline
            isPlaying={isPlaying}
            speed={speed}
            currentStep={currentStep}
            onStepChange={setCurrentStep}
            selectedModule={selectedModule}
            onModuleSelect={setSelectedModule}
          />
        </div>
      </div>

      {/* Detail Panel */}
      {selectedModule && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 p-6 max-h-[40vh] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-cyan-400">{selectedModule}</h3>
              <button
                onClick={() => setSelectedModule(null)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ModuleDetails module={selectedModule} />
          </div>
        </motion.div>
      )}
    </main>
  )
}

function ModuleDetails({ module }: { module: string }) {
  const details: Record<string, { description: string; params: string[]; code: string }> = {
    'Query Input': {
      description: 'The entry point where user queries are received and preprocessed. Handles tokenization and initial query embedding generation.',
      params: ['embedding_model: text-embedding-3-small', 'max_tokens: 512', 'normalize: true'],
      code: `query_embedding = embedding_model.encode(
  query_text,
  normalize_embeddings=True
)`
    },
    'Query Processing': {
      description: 'Expands and rewrites queries to improve retrieval. Includes HyDE (Hypothetical Document Embeddings) for better semantic matching.',
      params: ['expansion_model: gpt-4o-mini', 'num_expansions: 3', 'hyde_enabled: true'],
      code: `expanded_queries = query_expander.expand(
  original_query,
  num_variations=3
)
hyde_doc = generate_hypothetical_answer(query)`
    },
    'Sparse Search': {
      description: 'BM25-based keyword search that finds documents with matching terms. Effective for exact matches and rare terms.',
      params: ['k1: 1.5', 'b: 0.75', 'top_k: 50'],
      code: `sparse_results = bm25_index.search(
  query_tokens,
  top_k=50
)`
    },
    'Dense Search': {
      description: 'Vector similarity search using embeddings. Finds semantically similar documents even without keyword overlap.',
      params: ['index_type: HNSW', 'ef_search: 128', 'top_k: 50', 'metric: cosine'],
      code: `dense_results = vector_db.search(
  query_embedding,
  top_k=50,
  ef=128
)`
    },
    'Fusion': {
      description: 'Combines sparse and dense results using Reciprocal Rank Fusion (RRF). Balances keyword relevance with semantic similarity.',
      params: ['k: 60', 'alpha: 0.5', 'output_k: 30'],
      code: `fused_scores = {}
for rank, doc in enumerate(sparse_results):
    fused_scores[doc] += alpha / (k + rank)
for rank, doc in enumerate(dense_results):
    fused_scores[doc] += (1-alpha) / (k + rank)`
    },
    'Reranker': {
      description: 'Cross-encoder model that scores query-document pairs for precise relevance ranking. More accurate but slower than bi-encoders.',
      params: ['model: cross-encoder/ms-marco-MiniLM-L-12-v2', 'top_k: 5'],
      code: `reranked = cross_encoder.rank(
  query,
  candidates,
  top_k=5
)`
    },
    'Context Assembly': {
      description: 'Assembles retrieved chunks into a prompt template. Manages token budget and handles context window limits.',
      params: ['max_context_tokens: 4000', 'chunk_separator: "\\n\\n"', 'include_metadata: true'],
      code: `context = "\\n\\n".join([
  f"[{i+1}] {chunk.text}"
  for i, chunk in enumerate(top_chunks)
])
prompt = template.format(context=context, query=query)`
    },
    'Generation': {
      description: 'LLM generates the final response based on retrieved context. Uses low temperature for factual accuracy.',
      params: ['model: gpt-4o', 'temperature: 0.1', 'max_tokens: 1000', 'stream: true'],
      code: `response = llm.generate(
  prompt,
  temperature=0.1,
  max_tokens=1000
)`
    },
  }

  const detail = details[module] || {
    description: 'Module details not available.',
    params: [],
    code: ''
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div>
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Description</h4>
        <p className="text-gray-300">{detail.description}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Parameters</h4>
        <ul className="space-y-1">
          {detail.params.map((param, i) => (
            <li key={i} className="text-sm font-mono text-purple-400">{param}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Code</h4>
        <pre className="text-sm font-mono text-green-400 bg-gray-800 p-3 rounded-lg overflow-x-auto">
          {detail.code}
        </pre>
      </div>
    </div>
  )
}
