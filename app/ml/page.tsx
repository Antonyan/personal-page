import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Applied ML and AI Safety Work | Artem Antonenko',
  description:
    'CTO of Skillbourg. LLM extraction, learning-to-rank, LLM-generated labels, counterfactual bias testing and prompt-injection robustness. Co-author of ResumeParsingBench (PRICAI 2026).',
  alternates: { canonical: '/ml' },
  openGraph: {
    title: 'Applied ML and AI Safety Work | Artem Antonenko',
    description:
      'LLM extraction, learning-to-rank, counterfactual bias testing and prompt-injection robustness in a production AI recruiting platform.',
    url: 'https://www.artem-antonenko.com/ml',
    type: 'profile',
    images: ['/og-image.jpg'],
  },
}

type Project = {
  title: string
  tag: string
  what: string
  results: string[]
  lessons: string[]
}

const projects: Project[] = [
  {
    title: 'Candidate ranking with learning-to-rank',
    tag: 'Ranking · Evaluation',
    what:
      'Hybrid retrieval in Vespa over five channels, fused with weighted reciprocal rank fusion, then reordered by a LambdaMART model in LightGBM. Learning-to-rank has served production traffic since August 2026; the fusion ranking is now only the fallback path.',
    results: [
      'Offline, second generation: nDCG@10 0.80 against 0.70 for the fusion baseline (+0.102), better on 20 of 26 jobs, Wilcoxon p = 0.0008.',
      'MRR rose from 0.51 to 0.65: the best candidate lands at position 1 much more often.',
    ],
    lessons: [
      'Rebuilding the corpus after a parser change moved the baseline by a third of the whole gain. We never compare metrics across corpus generations.',
      'A two-model ensemble scored 0.8025 against 0.8020 for a single LightGBM (σ = 0.004). The difference is noise, so the single model is the fallback.',
      'The evaluation covers 26 IT jobs. It is evidence of a ranking improvement, not a forecast of production lift.',
    ],
  },
  {
    title: 'Fine-tuning and serving an open model for CV extraction',
    tag: 'Fine-tuning · Inference',
    what:
      'An experiment to replace a commercial API with a self-hosted model for CV extraction into a strict JSON schema with closed enums and Pydantic validation. Data: 408 human-reviewed and 396 model-labelled CVs, seed-fixed splits and an out-of-distribution holdout.',
    results: [
      'LoRA SFT of Qwen2.5-VL-7B with ms-swift on a SageMaker training job, vision tower frozen: schema-valid output on 33 of 35 completed test CVs against 9 of 49 for the base model. 15 fine-tune runs hit proxy timeouts, not model errors.',
      'GPTQ 4-bit quantization of the language layers, vision tower kept in BF16: 15.6 GB down to 6.9 GB, served with vLLM on one 24 GB A10G.',
      'Constrained JSON-schema decoding with Qwen3-235B on Cerebras, no fine-tuning: 49 of 50 schema-valid at 1.35 s median per CV.',
    ],
    lessons: [
      'Constrained decoding beat the fine-tune on validity and latency, but GPT-5.4 still scored higher on content (0.89 mean). Production stays on the commercial API for now.',
      'After stub CVs started to validate, the mean score fell from 0.86 to 0.81 while the median held at 0.86. The median is the honest number.',
      'The input mattered as much as the model: switching PDF text extraction from pypdf to PyMuPDF raised the GPT-5.4 score from 0.880 to 0.891 and recovered 8 more CVs.',
    ],
  },
  {
    title: 'LLM-generated relevance labels',
    tag: 'Scalable oversight',
    what:
      'The ranker trains on 2,600 graded job-candidate pairs (0 to 3). Half are negative controls: unrelated or adjacent roles. An LLM panel with three roles and pairwise comparisons assigns the grades. No human graded these pairs.',
    results: [
      '1,300 pairs come from retrieved pools (50 per job). 1,300 are negative controls: 1,144 unrelated and 156 adjacent roles.',
      'Grades are holistic per pair, not per job requirement.',
    ],
    lessons: [
      'Agreement between the LLM panel and human recruiters has not been measured yet. Until it is, the ranker learns the judgment of the panel, not of the recruiter.',
      'Negative controls give a check that does not depend on the labeller: a ranker that puts unrelated candidates near the top is wrong whatever the labels say.',
    ],
  },
  {
    title: 'Counterfactual bias testing',
    tag: 'Fairness · Regulatory sandbox',
    what:
      'Hiring is a high-risk use case under the EU AI Act. Inside the CNPD regulatory sandbox, we built 72 synthetic CV twins with identical professional content (6 profiles × sex × 3 age groups × EU or non-EU origin) and ranked them against 3 jobs.',
    results: [
      'Origin: no effect. Age: an early signal did not replicate.',
      'Sex: a small effect in favour of male names (Δ +0.002, p = 0.0001), up to 32 positions in the tail. The cause was the LLM parser, which read the name of the candidate.',
      'Fix: blank the name before parsing. The effect fell to Δ +0.0004, p = 0.17 on one replica.',
    ],
    lessons: [
      'The bias entered at extraction, before any ranking model. Testing only the ranker would have missed it.',
      'The test ran on the first ranking model. A second replica on the current model is scheduled for the quarterly run.',
    ],
  },
  {
    title: 'AI-led voice interviews',
    tag: 'Real-time LLM systems',
    what:
      'AI-led skill-confirmation interviews, with an LLM judge that scores the answers.',
    results: [
      'Latency decomposition: a turn takes about 4.4 s, and 3.8 s of that is the end-of-speech detector, not the model.',
      'Within-session speaker-consistency check with ECAPA-TDNN speaker embeddings. Only the similarity score is kept, never the embedding.',
    ],
    lessons: [
      'A faster judge model looked equivalent on average but scored some answer classes worse. Judge swaps need per-class evaluation, not one aggregate number.',
    ],
  },
  {
    title: 'Agents on a shared codebase',
    tag: 'Agent permissions',
    what:
      'An internal system that runs up to 10 headless Claude agents in parallel across a multi-repository codebase: Java and Python services, Kubernetes, Vespa, Kafka.',
    results: [
      'A guard hook blocks merges and any access to production. A lock serialises access to the shared test environment.',
      'Agents work on branches. People decide what merges.',
    ],
    lessons: [
      'The design choice: agents get a full development environment but no path to merge or deploy. Human review is the only gate to production.',
    ],
  },
]

const toolkit = [
  {
    title: 'Ranking and retrieval',
    items: 'LambdaMART in LightGBM and XGBoost, nDCG@k, MRR, permutation feature importance, hybrid retrieval in Vespa, embeddings, reciprocal rank fusion.',
  },
  {
    title: 'LLM systems',
    items: 'Structured extraction with schema validation, constrained decoding, prompt-injection evaluation, LLM-as-judge, LLM labelling with pairwise comparison, per-step model routing, cost and latency per document.',
  },
  {
    title: 'Training and inference',
    items: 'LoRA SFT with ms-swift, GPTQ quantization with llmcompressor, vLLM, SageMaker training jobs and endpoints, RunPod, MLX on Apple silicon.',
  },
  {
    title: 'Evaluation and statistics',
    items: 'Frozen test splits with out-of-distribution holdouts, paired significance tests, multiple seeds, negative controls, counterfactual twins, replication, train/serve skew checks.',
  },
  {
    title: 'Speech and vision',
    items: 'ECAPA-TDNN speaker embeddings, end-of-speech detection and turn latency, FaceNet and ResNet for image moderation.',
  },
  {
    title: 'Engineering around models',
    items: 'Python, Java, Kubernetes, AWS, Azure OpenAI, Langfuse tracing, model cards, Claude Code and multi-agent orchestration.',
  },
]

const earlier = [
  'Led AI adoption across 12 companies and 500+ engineers, BAs, POs and designers at Byborg Enterprises: tool evaluation, enablement and productivity measurement. 8x ROI on the AI engineering program.',
  'Face and object recognition for profile moderation (FaceNet, ResNet): 60–70% less manual review.',
  'Text-to-SQL agent over the analytics warehouse: 40% less ad-hoc work for the BI team.',
  'RAG assistants for internal knowledge and customer support.',
  'ML forecasting of team load and velocity for delivery planning across 20+ parallel projects.',
]

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-8 shadow-sm">
      {children}
    </div>
  )
}

export default function MLPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      <Navigation />

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
            Applied ML and AI safety
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Evaluation and safety work on a{' '}
            <span className="gradient-text">production LLM system</span>
          </h1>
          <div className="space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
            <p>
              I am CTO of Skillbourg, an AI recruiting platform built by RMT Labs in
              Luxembourg. I lead its ML stack: LLM extraction of CVs, retrieval and learning-to-rank,
              LLM-generated training labels, bias testing and AI-led voice interviews.
            </p>
            <p>
              Hiring is a high-risk use case under the EU AI Act, so most of this work is evaluation:
              does the metric measure what the decision needs, does the system treat comparable people
              the same way, and what happens when an adversary writes the input. Below are the
              results, with their limits.
            </p>
          </div>
        </div>
      </section>

      {/* Publication */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Publication</h2>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
              PRICAI 2026 · Accepted
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              ResumeParsingBench: Importance-Weighted Evaluation of LLMs for Resume Information
              Extraction
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              S. Bettaieb, H. Messoussi, Y. Guo (Luxembourg Institute of Science and Technology),{' '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">A. Antonenko</span>{' '}
              (RMT Labs)
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 -mt-3">
              My role: industry co-author. I advised on the study, ran practical measurements and
              gave feedback on how to improve the benchmark.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span>
                  5,480 CVs from 1,000 anonymised profiles: four templates plus scanned and
                  prompt-injected PDFs. 13 LLMs from 0.5B to 120B dense and one 685B MoE model, 14
                  configurations, three pipelines (text extraction, OCR, direct PDF).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span>
                  IW-F1 weights each field by its importance to recruiters. 7 of 14 models change rank
                  compared with macro-F1. Small models (≤3B) score 0.79–0.89 F1 on hobbies but as low
                  as 0.25 on degree, and macro-F1 averages that gap away.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span>
                  Hidden instructions in the PDF: extraction accuracy did not predict robustness. Two
                  of the stronger extractors followed the injected instructions in over 74% of attacks
                  on the work-experience section.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span>
                  Hallucinated entries stay at or below 2.0% for every model, with no consistent
                  trend by model size.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Production ML */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Production ML at Skillbourg</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Each project lists what we measured and what the measurement does not show.
          </p>
          <div className="space-y-6">
            {projects.map((p) => (
              <Card key={p.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  {p.tag}
                </p>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-5">{p.what}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Results
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {p.results.map((r) => (
                        <li key={r} className="flex gap-2">
                          <span className="text-blue-600 dark:text-blue-400">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Limits and lessons
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {p.lessons.map((l) => (
                        <li key={l} className="flex gap-2">
                          <span className="text-purple-600 dark:text-purple-400">•</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">ML toolkit in practice</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Methods and tools I have used on the projects above, not only read about.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {toolkit.map((t) => (
              <Card key={t.title}>
                <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t.items}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earlier work + background */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3">
            <Card>
              <h2 className="text-xl font-semibold mb-4">Applied AI before Skillbourg</h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                {earlier.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <h2 className="text-xl font-semibold mb-4">Background</h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>20+ years in software engineering, from C++ CAD extensions to leading 100+ engineers.</li>
                <li>MSc, Aircraft Engineering, National Aerospace University (Ukraine).</li>
                <li>AI Strategy, MIT Sloan Executive Education, 2025.</li>
                <li>Agentic AI, DeepLearning.AI, 2025.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="pb-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4">
          <a
            href="mailto:antonenko.artem@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/artem-antonenko-al/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/Artem_Antonenko_Executive_CV.pdf"
            download
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Download CV
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
