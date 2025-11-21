'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface TooltipProps {
  term: string
  explanation: string
  children?: React.ReactNode
}

export default function Tooltip({ term, explanation }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  // Mount check for portal
  useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate position when opening
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()

      setPosition({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2
      })
    }
  }, [isOpen])

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        className="w-5 h-5 rounded-full bg-gray-600 hover:bg-cyan-500 text-[11px] font-bold flex items-center justify-center text-white hover:text-white transition-colors cursor-pointer"
        aria-label={`Learn more about ${term}`}
      >
        ?
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0, y: -10, scale: 0.95, x: '-50%' }}
              animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
              exit={{ opacity: 0, y: -10, scale: 0.95, x: '-50%' }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'fixed',
                top: position.top,
                left: position.left,
              }}
              className="z-[9999] w-72 sm:w-80"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 border border-gray-600 rounded-lg shadow-2xl p-4">
                {/* Arrow pointing up */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[-1px]">
                  <div className="border-8 border-transparent border-b-gray-600" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-1px] border-8 border-transparent border-b-gray-900" />
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-cyan-400">{term}</h4>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white -mt-1 -mr-1 p-1"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{explanation}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}

// Predefined explanations for RAG terms
export const ragTerms: Record<string, string> = {
  'HyDE': 'HyDE (Hypothetical Document Embeddings) is a retrieval method that strengthens semantic search by first asking an LLM to generate a hypothetical answer or document based on the user query. This synthetic passage—richer and more detailed than the original query—is then embedded and used for vector search instead of embedding the query alone. Because the generated text contains domain-specific vocabulary and structure, its embedding captures deeper semantics, leading to better recall and more relevant documents. HyDE is especially effective for short, vague, or layman queries and integrates easily into RAG pipelines before semantic retrieval.',

  'BM25': 'BM25 (Best Matching 25) is a probabilistic ranking function used for keyword-based search. It scores documents based on term frequency (how often query terms appear) and inverse document frequency (how rare those terms are across all documents). BM25 excels at finding exact matches and rare terms, making it complementary to semantic search. Parameters k1 (term saturation) and b (document length normalization) can be tuned for different use cases.',

  'RRF': 'Reciprocal Rank Fusion (RRF) is a method for combining results from multiple search systems. It assigns scores based on the rank position of each result: score = 1/(k + rank), where k is typically 60. RRF is robust because it only uses rank positions, not raw scores, making it effective for fusing results from different retrieval methods like BM25 and vector search without score calibration.',

  'Cross-Encoder': 'A Cross-Encoder is a transformer model that takes both query and document as a single input and outputs a relevance score. Unlike bi-encoders (which embed query and document separately), cross-encoders see both texts together, enabling deeper semantic understanding of their relationship. This makes them more accurate for reranking but slower, so they\'re typically used on a small set of candidates (5-30 documents) after initial retrieval.',

  'Vector DB': 'A Vector Database stores high-dimensional embeddings and enables fast similarity search. It uses specialized index structures like HNSW (Hierarchical Navigable Small World) or IVF (Inverted File) to find nearest neighbors efficiently. Unlike traditional databases that match exact values, vector DBs find semantically similar content by measuring distances (cosine, euclidean) in embedding space.',

  'Metadata Filter': 'A metadata filter restricts retrieved documents based on structured attributes rather than text similarity. Instead of ranking by keywords or embeddings, it applies hard yes/no constraints such as user permissions, document type, tags, date ranges, source system, region, or tenant ID. By filtering before or alongside hybrid retrieval, it ensures only authorized, relevant, and context-appropriate chunks enter the candidate set. This improves precision, reduces noise, and prevents irrelevant or restricted documents from reaching the LLM.',

  'Semantic Cache': 'Semantic caching stores query embeddings alongside their results (retrieved documents and/or generated answers) to avoid redundant computation. When a new query arrives, its embedding is compared against cached queries using similarity search. On a cache hit (similar query found), the system returns cached results instantly, bypassing retrieval and generation. On a cache miss, the full pipeline runs and results are written back to cache. This dramatically reduces latency and API costs for repeated or similar queries while maintaining answer quality.',

  'HNSW': 'HNSW (Hierarchical Navigable Small World) is a graph-based index structure for approximate nearest neighbor search. It builds a multi-layer graph where higher layers have fewer, more distant connections for fast traversal, while lower layers have dense local connections for precision. HNSW offers excellent query speed with high recall, making it popular for production vector search.',

  'Embeddings': 'Embeddings are dense vector representations of text that capture semantic meaning. Modern embedding models (like text-embedding-3, Cohere embed, or open-source alternatives like E5/BGE) convert text into 768-3072 dimensional vectors where similar meanings are close together in vector space. This enables semantic search beyond keyword matching.',

  'Chunking': 'Chunking is the process of splitting documents into smaller pieces for retrieval. Common strategies include fixed-size (e.g., 512 tokens with overlap), semantic (splitting at natural boundaries like paragraphs), or recursive (trying multiple separators). Chunk size affects retrieval precision (smaller = more precise) vs. context richness (larger = more complete answers).',

  'Context Window': 'The context window is the maximum number of tokens an LLM can process in a single request (input + output). Modern models range from 8K to 200K+ tokens. RAG systems must fit retrieved chunks within this limit while leaving room for the response. Larger windows allow more context but increase cost and latency.',

  'Temperature': 'Temperature controls randomness in LLM outputs. Values range from 0 (deterministic, always picks highest probability token) to 2 (very random). For RAG systems requiring factual accuracy, low temperatures (0-0.3) are preferred. Higher temperatures (0.7-1.0) suit creative tasks where variation is desired.',

  'Top-K': 'Top-K limits retrieval or generation to the K highest-scoring results. In retrieval, it controls how many chunks are passed to reranking or generation. In LLM sampling, it restricts token selection to the K most probable tokens. Lower K = more focused/deterministic; higher K = more diverse/exploratory.',
}
