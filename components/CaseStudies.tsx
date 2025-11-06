'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const caseStudies = [
  // AI Category
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
    category: 'AI',
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
    category: 'AI',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Enterprise AI Engineering Enablement Program',
    challenge: 'Transform 300+ engineers across 12 companies with AI-assisted development',
    solution: 'Strategic rollout of AI engineering enablement program with training, best practices, and ROI tracking',
    impact: [
      '8x ROI on implementation',
      '22% of engineers saving 2-3 hours daily',
      '300+ engineers onboarded',
      'Measurable productivity gains',
    ],
    tech: ['AI Engineering Enablement', 'Change Management', 'Training Programs', 'Analytics'],
    category: 'AI',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    title: 'Internal Knowledge Management Chatbot with RAG Architecture',
    challenge: 'Large streaming platform with 100+ features creating information overload for support team, POs, managers, and business analysts',
    solution: 'Implemented RAG architecture with Weaviate vector database, OpenAI embeddings, and GPT-4o for semantic search and natural language responses',
    impact: [
      '25 internal users across support, product, and business teams',
      'Functional PoC delivered in 3 weeks',
      'Instant access to 100+ feature descriptions',
      'Foundation built for external customer-facing deployment',
    ],
    tech: ['RAG Architecture', 'Weaviate', 'OpenAI GPT-4o', 'Text Embeddings', 'Semantic Search'],
    category: 'AI',
    color: 'from-blue-500 to-cyan-500',
  },

  // Leadership/People Category
  {
    id: 5,
    title: 'Emerging Leader Development Program',
    challenge: 'Previous Engineering Lead left the team, leaving a leadership gap and reduced delivery stability. A senior engineer showed potential but struggled with imposter syndrome and lacked management experience.',
    solution: 'Implemented a 6-month GROW-based development plan with mentorship, leadership training, and progressive ownership. Introduced "Feature Responsible" role for leading projects of increasing complexity (S→M→L→XL). Used SCARF model to address imposter-syndrome triggers. Based readiness on delivery metrics and team feedback.',
    impact: [
      'Promoted to Engineering Lead after 6 months',
      'Team engagement +25%, delivery predictability 68%→90%',
      'Escalations reduced 40%, new lead fully autonomous',
      'Framework replicated for 4 future leaders',
    ],
    tech: ['GROW Framework', 'SCARF Model', 'Leadership Development', 'Mentorship', '1-on-1 Coaching'],
    category: 'Leadership',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    title: 'Company-Wide Technical Responsible Framework',
    challenge: 'Delivery delayed by siloed teams and unclear accountability between business and engineering functions across 250+ professionals',
    solution: 'Introduced Technical Responsible (TR) role with single engineer per project accountable for end-to-end technical leadership, IDEF-modeled delivery process, and Jira-Bitbucket integration for visibility',
    impact: [
      'Applied across 250+ professionals organization-wide',
      'Unified technical ownership and eliminated bottlenecks',
      'Improved project transparency and risk management',
      'Empowered engineers with autonomy',
    ],
    tech: ['Technical Responsible Model', 'IDEF Process Modeling', 'Jira-Bitbucket Integration', 'Cross-functional Leadership'],
    category: 'Leadership',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 7,
    title: 'Building Technical Excellence Through Engineering Clubs',
    challenge: 'Engineering teams showed inconsistent technical depth and low motivation to grow beyond delivery tasks',
    solution: 'Introduced Backend and Frontend Clubs (guild-like communities) with tech talks, peer assessments for career progression, and quarterly satisfaction surveys',
    impact: [
      'Increased engineering motivation by 45%',
      'Established sustainable mentorship culture',
      'Improved fairness through peer-driven evaluations',
      'Accelerated growth and cross-team collaboration',
    ],
    tech: ['Engineering Guilds', 'Peer Assessment', 'Tech Talks', 'Satisfaction Surveys'],
    category: 'Leadership',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 8,
    title: 'Engineering Standards & Unified Architecture Framework',
    challenge: 'Within one department of 30 engineers managing ~30 microservices, teams used inconsistent coding, testing, and architectural approaches',
    solution: 'Standardized practices with Fractal Architecture, introduced ADRs for traceability, collaborated with Codeception creator for unified testing, built reusable mock classes',
    impact: [
      'Unified architecture across 30 microservices',
      'Reduced test-writing time by 37%',
      'Improved maintainability through shared language',
      'Lowered technical debt and increased efficiency',
    ],
    tech: ['Fractal Architecture', 'ADR', 'Codeception', 'Testing Standards', 'Mock Utilities'],
    category: 'Leadership',
    color: 'from-green-500 to-emerald-500',
  },

  // Delivery Category
  {
    id: 9,
    title: 'Checkbox-Based Delivery Control System',
    challenge: 'Project delivery outcomes were inconsistent, with delays and postponements caused by forgotten tasks, missed preparation items, and untracked release steps, resulting in variable delivery reliability across teams.',
    solution: 'Implemented a structured milestone-checkbox system inside epics, covering preparation, execution, and post-release phases, enabling feature owners to validate critical actions, eliminate missed steps, and enforce a uniform delivery process.',
    impact: [
      'Improved delivery predictability to 87 percent target adherence',
      'Reduced failure points from overlooked tasks and hand-offs',
      'Standardized delivery practices across all feature owners',
      'Enabled scalable, repeatable execution discipline across parallel projects',
    ],
    tech: ['Delivery Framework', 'Process Standardization', 'Milestone Checkboxes', 'Phase-Gate Control'],
    category: 'Delivery',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 10,
    title: 'Scaling Delivery Through Feature Responsible Engineers',
    challenge: 'All project management and delivery responsibility was centralized in three Engineering Leads, limiting throughput to 5–6 projects at a time',
    solution: 'Introduced Feature Responsible Engineer (FRE) role with senior ICs acting as technical owners, leading delivery squads with weekly coaching on architecture, leadership, and processes',
    impact: [
      'Scaled delivery from 5–6 → 20+ projects in parallel',
      'Coached and developed 15 autonomous FREs',
      'Increased technical leadership depth',
      'Freed Engineering Leads for strategy',
    ],
    tech: ['Feature Responsible Model', 'Technical Leadership', 'Coaching', 'Delivery Management'],
    category: 'Delivery',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 11,
    title: 'Critical Production Incident Resolution',
    challenge: 'Customer support reported loyalty points being calculated incorrectly, causing financial discrepancies and customer complaints. Initial investigation indicated potential database-level inconsistencies affecting live transactions during peak hours.',
    solution: 'Immediately assembled a cross-functional response team including backend engineers, DBAs, and product stakeholders. Within 30 minutes, identified a race condition caused by a missing SELECT FOR UPDATE inside the transaction scope. Coordinated rapid fix, validated with QA in staging, and deployed to production within 4 hours. Conducted a post-mortem introducing improved transactional logging, rollback capability, and proactive alerting to detect anomalies before users are impacted.',
    impact: [
      'Root cause isolated and fixed within 4 hours',
      'Zero financial losses post-resolution',
      'Prevented future race conditions through improved transactional design',
      'Established incident response protocol and alerting system for early detection',
    ],
    tech: ['PostgreSQL', 'Database Locking', 'Incident Management', 'Cross-functional Leadership'],
    category: 'Delivery',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 12,
    title: 'Design System Recoloring Framework',
    challenge: 'Legacy client applications required separate "white-label" builds for each brand. The first recoloring effort took 2 months per brand, creating delivery bottlenecks and inconsistent styling.',
    solution: 'Proposed and implemented a centralized design system with configurable color and font variables. Built unified styling architecture enabling instant theming through configuration. Completed refactor in 3 weeks, reducing future recoloring to 2 weeks per brand. Collaborated with product to balance short-term deadlines with long-term scalability.',
    impact: [
      'Recoloring time reduced 2 months → 2 weeks',
      'Delivered 6 new white-label brands in record time',
      'Enabled consistent cross-brand UX and maintenance efficiency',
      'Created scalable foundation for future branding initiatives',
    ],
    tech: ['Design Systems', 'Theming Architecture', 'CSS Variables', 'White-Label Solutions'],
    category: 'Delivery',
    color: 'from-purple-500 to-pink-500',
  },

  // Processes Category
  {
    id: 13,
    title: 'Issue Log Framework for Iterative Improvement',
    challenge: 'Retrospectives often lacked accuracy because engineers struggled to recall details of issues after delivery cycles. As a result, the same process mistakes were repeated — such as design misalignment with front-end implementation or late-stage blockers — reducing delivery efficiency and learning value.',
    solution: 'Introduced a continuous Issue Log framework to capture problems and actions in real time during feature development. Engineers documented each issue, impact, and resolution step directly in the log throughout the iteration. Used this data during retrospectives to analyze trends objectively instead of relying on memory recall. Derived new team principles and preventive measures based on recurring patterns.',
    impact: [
      'Zero repeatable issues across subsequent sprints',
      'Improved delivery process reliability and learning depth',
      'Retrospectives became fully data-driven and actionable',
      'Established sustainable continuous-improvement culture grounded in neuroscience-based reflection',
    ],
    tech: ['Issue Log Framework', 'Retrospective Practices', 'Continuous Improvement', 'Data-Driven Learning'],
    category: 'Processes',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 14,
    title: 'Genie Project – Robotic Business Automation (RBA)',
    challenge: 'Multiple projects were driven directly by Engineering Managers or Heads of Engineering without dedicated project managers. This led to inconsistent tracking, missed deadlines, and heavy manual coordination across teams.',
    solution: 'Initiated and led the Genie RBA project — a fully automated project-management system built on Camunda BPMN and integrated with Microsoft Teams. Automated end-to-end project workflows from requirement gathering to delivery tracking. Implemented chatbot-driven interactions to request target dates, T-shirt sizing, and escalate delays automatically. Enabled auto-generation of project documentation — including risk matrix, rollout plan, and preparation pages. Integrated Q&A automation, routing questions to the right stakeholders and logging all communication for transparency.',
    impact: [
      'Increased project delivery predictability by 47%',
      'Reduced manual coordination load across engineering teams',
      'Standardized project documentation and communication',
      'Established a scalable, AI-assisted framework for autonomous project management',
    ],
    tech: ['Camunda BPMN', 'Microsoft Teams Integration', 'Chatbot Automation', 'Workflow Automation'],
    category: 'Processes',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 15,
    title: 'Technical Roadmap Alignment Framework',
    challenge: 'Engineers frequently idle between projects, relying on Engineering Leads for ad-hoc tasks, creating delivery delays and leader overload.',
    solution: 'Introduced a company-wide Technical Roadmap, refined bi-weekly with engineers to prioritize technical initiatives. Aligned roadmap with business OKRs to anticipate upcoming product needs and prepare critical systems in advance. Enabled engineers to self-assign tasks directly from a prioritized technical backlog, reducing management dependency.',
    impact: [
      'Reduced technical backlog 35% faster',
      'Improved engineering autonomy and productivity',
      'Freed leaders from task micromanagement',
      'Established sustainable tech-business alignment',
    ],
    tech: ['Strategic Planning', 'OKRs', 'Technology Strategy', 'Technical Backlog Management'],
    category: 'Processes',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 16,
    title: 'Zero-Bug Backlog Initiative',
    challenge: 'Bug backlog exceeded 180 unresolved issues, persisting for years and demotivating engineers to maintain quality.',
    solution: 'Introduced a Zero-Bug Backlog policy, combining an initial bug clean-up sprint with an ongoing rule that all new bugs must be fixed within 1–2 days. Established clear ownership and accountability, integrating bug resolution into sprint planning and developer KPIs. Encouraged preventive measures — higher test coverage, better architecture design, and proactive QA collaboration.',
    impact: [
      'Reduced backlog from 180 → ≤8 active bugs',
      'Significantly improved product stability',
      'Boosted engineering quality culture and accountability',
      'Fostered long-term mindset of preventive coding',
    ],
    tech: ['Quality Management', 'Bug Tracking', 'Test Coverage', 'Engineering Culture'],
    category: 'Processes',
    color: 'from-orange-500 to-red-500',
  },

  // Architecture Category
  {
    id: 17,
    title: 'Fractal Architecture for Scalable Microservices',
    challenge: 'Unclear service boundaries and costly refactoring when deciding whether new logic should live in existing or new microservices.',
    solution: 'Designed and implemented Fractal Architecture — a modular approach enabling self-contained logic blocks to be easily extracted or reattached between services. Minimized inter-module dependencies, using entity-based boundaries for clarity and reusability. Applied architecture to compliance system under tight deadlines, embedding new modules inside existing microservices for rapid delivery, then decoupling later with minimal effort.',
    impact: [
      'Enabled seamless logic extraction with near-zero dependency issues',
      'Reduced refactoring effort and delivery time on compliance project by 2 weeks',
      'Simplified scaling and architectural evolution of microservices',
      'Adopted company-wide as standard pattern for modular design',
    ],
    tech: ['Fractal Architecture', 'Microservices', 'Modular Design', 'Domain-Driven Design'],
    category: 'Architecture',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 18,
    title: 'Event-Driven Architecture for Restaurant Platform',
    challenge: 'Needed flexible architecture for a network of 32 restaurants, where new modules (e.g., loyalty, gamification, notifications) would be added over time — but initial scope was unknown.',
    solution: 'Architected event-driven system using Kafka and an orchestrator with state machine pattern to handle order lifecycle. Each event triggered Kafka topics that could be subscribed to by new microservices without altering the core. Ensured extensibility via orchestration (not pure choreography) for controlled order flow management.',
    impact: [
      'Platform shipped in 4 months',
      'Enabled zero-impact addition of new modules post-launch',
      'Achieved scalable, flexible architecture supporting rapid innovation',
      'Reduced integration complexity and long-term maintenance cost',
    ],
    tech: ['Kafka', 'Event-Driven Architecture', 'State Machine', 'Orchestration Pattern'],
    category: 'Architecture',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 19,
    title: 'Domain-Driven Design Adoption Across Microservices',
    challenge: 'Microservices were inconsistent in structure, naming, and logic organization — engineers struggled to navigate or understand services built by others.',
    solution: 'Introduced Domain-Driven Design (DDD) practices based on Eric Evans\' methodology. Defined bounded contexts before each new service to clarify business scope (e.g., Marketing, Campaigns). Modeled entities and relationships upfront, enabling clear mapping between business domains and technical implementation. Combined DDD with Fractal Architecture for modular consistency and shared understanding across teams.',
    impact: [
      'Unified language between business and engineering',
      'Reduced maintenance complexity and onboarding time',
      'Increased delivery speed through shared structure and clarity',
      'Improved cross-team comprehension of service purpose and data flow',
    ],
    tech: ['Domain-Driven Design', 'Bounded Contexts', 'Entity Modeling', 'Ubiquitous Language'],
    category: 'Architecture',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 20,
    title: 'Standardized Testing Framework Using Codeception',
    challenge: 'Different microservices used inconsistent testing styles and unclear precondition setups, leading to confusion and maintenance overhead.',
    solution: 'Partnered with the creator of Codeception and key backend engineers to design a standardized precondition framework. Defined consistent rules for entity creation, test structure, and precondition management across all services. Built reusable mock objects and libraries to simplify test preparation.',
    impact: [
      'Reduced average test-writing time by 30–40%',
      'Simplified test readability and cross-team collaboration',
      'Improved quality assurance consistency across all microservices',
      'Established shared ownership of testing practices',
    ],
    tech: ['Codeception', 'Testing Standards', 'Mock Objects', 'Test Automation'],
    category: 'Architecture',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [itemsToShow, setItemsToShow] = useState(4)

  const filteredStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.category === selectedCategory)

  const visibleStudies = filteredStudies.slice(0, itemsToShow)
  const hasMore = filteredStudies.length > itemsToShow
  const remainingCount = filteredStudies.length - itemsToShow

  const handleShowMore = () => {
    if (itemsToShow === 4) {
      setItemsToShow(8)
    } else if (itemsToShow === 8) {
      setItemsToShow(filteredStudies.length)
    }
  }

  const handleShowLess = () => {
    setItemsToShow(4)
    // Scroll to case studies section
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Reset to 4 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setItemsToShow(4)
  }

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
          {['All', 'AI', 'Leadership', 'Delivery', 'Architecture', 'Processes'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full transition-colors border ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Case studies grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${index >= itemsToShow ? 'hidden' : ''}`}
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

        {/* Show More / Show Less buttons */}
        {(hasMore || itemsToShow > 4) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            {hasMore ? (
              <button
                onClick={handleShowMore}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-500 transition-all shadow-md hover:shadow-lg"
              >
                {itemsToShow === 4 ? (
                  <>Show 4 More ({remainingCount} remaining)</>
                ) : (
                  <>Show All ({remainingCount} more)</>
                )}
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-500 transition-all shadow-md hover:shadow-lg"
              >
                Show Less
              </button>
            )}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://www.linkedin.com/in/artem-antonenko-al/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}
