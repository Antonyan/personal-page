'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const techStack = {
  'AI & Machine Learning': [
    { name: 'Agentic AI (Reflection, Multi-Agents)', level: 83, projects: ['n8n', 'LangChain'] },
    { name: 'RAG', level: 80, projects: ['Weaviate', 'Chroma'] },
    { name: 'Prompt Engineering', level: 89, projects: ['GPT-4', 'Claude', 'Context Optimization'] },
    { name: 'MCP, A2A', level: 90, projects: ['MCP Servers', 'Agent-to-Agent Communication'] },
  ],
  'Architecture & Systems': [
    { name: 'Solution Architecture', level: 92, projects: ['50M Users', 'System Design', 'ADR', 'DDD'] },
    { name: 'Microservices', level: 88, projects: ['60+ Microservices', 'Event-Driven', 'Service Mesh', 'GraphQL', 'Security', 'Observability'] },
    { name: 'Infrastructure & DevOps', level: 73, projects: ['AWS', 'Docker', 'Kubernetes', 'Helm', 'Jenkins', 'GitLab CI', 'CircleCI', 'Trunk-based Dev', 'ELK Stack', 'Grafana', 'Performance Tuning'] },
    { name: 'Data & Messaging', level: 65, projects: ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL', 'Kafka', 'RabbitMQ', 'ETL', 'Real-time Streaming'] },
  ],
  'Backend & Infrastructure': [
    { name: 'Programming & Development', level: 89, projects: ['Java', 'PHP', 'Python', 'C++', 'JavaScript'] },
    { name: 'Frameworks', level: 86, projects: ['Symfony', 'Spring Boot', 'Laravel', 'Phalcon', 'FastAPI', 'React'] },
    { name: 'Application Architecture', level: 90, projects: ['Layered Architecture', 'CQRS', 'Hexagonal Architecture', 'Event-Driven', 'Modular', 'Microservices'] },
    { name: 'Database Design', level: 88, projects: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Redshift'] },
  ],
  'Leadership & Process': [
    { name: 'People Management', level: 93, projects: ['Team Scaling', 'Cross-functional Leadership', 'Stakeholder Management', 'Talent Management', 'Coaching'] },
    { name: 'Processes', level: 92, projects: ['Agile Transformation', 'Delivery Culture Building', 'Performance Management', 'Architecture Governance', 'Budget Ownership'] },
    { name: 'Technical Strategy', level: 92, projects: ['Tech Debt Management', 'Digital and AI Transformation', 'AI Strategy', 'Technical Roadmap'] },
    { name: 'Security & Compliance Oversight', level: 87, projects: ['OWASP', 'GDPR'] },
  ],
}

export default function TechnicalDNA() {
  const [selectedCategory, setSelectedCategory] = useState('AI & Machine Learning')

  return (
    <section id="technical" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">DNA</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Deep expertise across the full stack, from AI/ML to enterprise architecture
          </p>
        </motion.div>

        {/* Tech Stack Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(techStack).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills in selected category */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {techStack[selectedCategory as keyof typeof techStack].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                  />
                </div>

                {/* Projects */}
                <div className="flex flex-wrap gap-2">
                  {skill.projects.map((project) => (
                    <span
                      key={project}
                      className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-400 rounded-full text-sm"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools & Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              // Programming Languages
              'Java',
              'PHP',
              'Python',
              'C++',
              'JavaScript',
              'TypeScript',
              // Frameworks
              'Symfony',
              'Spring Boot',
              'Laravel',
              'Phalcon',
              'FastAPI',
              'React',
              'Angular',
              // Infrastructure & Cloud
              'AWS',
              'Azure',
              'DigitalOcean',
              'Docker',
              'Kubernetes',
              'Helm',
              'Jenkins',
              'GitLab CI',
              'CircleCI',
              // Data & Databases
              'MongoDB',
              'MySQL',
              'Redis',
              'PostgreSQL',
              'Redshift',
              'Kafka',
              'RabbitMQ',
              // AI Tools
              'Windsurf',
              'Cursor',
              'Claude Code',
              'GitHub Copilot',
              'GPT-4',
              'Weaviate',
              'Chroma',
              'n8n',
              'LangChain',
              // Monitoring & DevOps
              'ELK Stack',
              'Grafana',
              'Git',
              // Architecture & Patterns
              'Microservices',
              'DDD',
              'REST APIs',
              'GraphQL',
              'CQRS',
              // Quality & Testing
              'TDD',
              'ATDD',
              'BDD',
              // Compliance & Security
              'OWASP',
              'GDPR',
              // Methodologies
              'ACSPO',
              'Agile',
              'Trunk-based Dev',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all cursor-default font-semibold"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
