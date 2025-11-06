'use client'

import { motion } from 'framer-motion'

const leadershipPrinciples = [
  {
    title: 'Empower Through Structure and Autonomy',
    description: 'I believe that clarity and autonomy are not opposites — they amplify each other. By creating clear frameworks (e.g., Feature Responsible, Technical Responsible, Genie RBA), I empower engineers to own delivery end-to-end while removing micromanagement.',
    impact: 'Structure creates freedom.',
    icon: '🎯',
  },
  {
    title: 'Lead with Data, Learn with Reflection',
    description: 'Effective leadership is both analytical and introspective. I rely on data — delivery metrics, team feedback, and measurable outcomes — but balance it with reflective learning practices like retrospectives and issue logs.',
    impact: 'Every iteration is an opportunity to learn, not just to deliver.',
    icon: '📊',
  },
  {
    title: 'Grow People Before Processes',
    description: 'High-performing teams come from growing individuals first. I focus on personalized development (using GROW and SCARF models), helping engineers overcome imposter syndrome, build confidence, and evolve into leaders.',
    impact: 'When people grow, delivery excellence follows naturally.',
    icon: '🌱',
  },
  {
    title: 'Build Resilience Through Continuous Improvement',
    description: 'Sustainable success depends on adaptability. I cultivate a culture where feedback loops, automation (RBA), and post-mortems are part of daily practice — making teams resilient, self-correcting, and ready for change rather than reactive to it.',
    impact: 'Continuous improvement builds lasting resilience.',
    icon: '🔄',
  },
]

const testimonials = [
  {
    quote: 'Artem leads with clarity and data. He ensures his teams are not just aligned on what needs to be done, but also why it matters. He has an exceptional ability to break down complex tasks, explain technical concepts clearly, and keep everyone focused on impact. What sets Artem apart is his eagerness to learn and adopt. He\'s also a remarkable people leader with direct communication, and what truly impressed me is how open he is to feedback and how fast he acts on it.',
    author: 'Mihai Popescu-Anghel',
    company: 'Lead IT Project Manager',
    role: 'Worked together 6 years',
  },
  {
    quote: 'From an engineer\'s perspective, Artem consistently stood out as a manager who combined clear strategic vision with strong technical grounding. He created an environment where engineering decisions were well-aligned with business goals while still leaving space for individual ownership and innovation. What I appreciated most was his ability to mentor across levels—from developers to engineering managers—and to drive organizational improvements that had tangible positive impact on day-to-day engineering work.',
    author: 'Ilya Pokamestov',
    company: 'Solution Architect | Technical Lead',
    role: 'Reported directly to Artem',
  },
  {
    quote: 'Artem is a unique profile with his deep knowledge of software development, engineering management, architecture and discipline. He\'s passionate about deliveries, bringing new ideas on board and improving procedures and systems. I like that he\'s raising red flags on time before a problem turns to crisis. He protective about his team and has very close and positive communication with them. Artem is always high motivated, result oriented, continuously improving leader.',
    author: 'Serhan Kiymaz',
    company: 'CTO @ Governance.com',
    role: 'Managed Artem directly',
  },
]

const blogPosts = [
  {
    title: 'Brain-Based Management: The Power of Checkbox',
    excerpt: 'How simple checkboxes tap into brain psychology to boost productivity and team performance',
    date: 'Medium',
    readTime: '8 min',
    category: 'Management',
    url: 'https://medium.com/@artemantonenko/brain-based-management-the-power-of-checkbox-3964bcf77919',
  },
  {
    title: 'Brain-Based Management: Meaningful Retrospective',
    excerpt: "Where's your issue log? Building effective retrospectives through structured problem tracking",
    date: 'Medium',
    readTime: '7 min',
    category: 'Agile',
    url: 'https://medium.com/@artemantonenko/brain-based-management-meaningful-retrospective-or-wheres-your-issue-log-38ecd2c8dfdf',
  },
  {
    title: 'Why Team Metrics Fail: The Unseen Power of Individual Contributions',
    excerpt: 'Understanding the critical role of individual contributions in tech team performance',
    date: 'Medium',
    readTime: '9 min',
    category: 'Metrics',
    url: 'https://medium.com/@artemantonenko/why-team-metrics-fail-the-unseen-power-of-individual-contributions-in-tech-1b3932596913',
  },
  {
    title: 'AI Transformation Without Illusions: People, Processes, and Real Results',
    excerpt: 'Practical experience implementing AI in large enterprise for 500+ professionals (Article in Ukrainian)',
    date: 'DOU',
    readTime: '12 min',
    category: 'AI Transformation',
    url: 'https://dou.ua/forums/topic/55914/',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building high-performing teams through empowerment, coaching, mentorship, and measurable outcomes
          </p>
        </motion.div>

        {/* Leadership Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {leadershipPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mb-4">{principle.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{principle.description}</p>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {principle.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            What <span className="gradient-text">Colleagues Say</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">"</div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.company}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                    {testimonial.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="https://www.linkedin.com/in/artem-antonenko-al/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Read more recommendations on LinkedIn
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Blog/Thought Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Thought Leadership</span> & Insights
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer block"
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime} read</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Engineering Team?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how AI and technical excellence can drive measurable impact for your organization
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://calendly.com/antonenko-artem/interview"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Schedule a Call
            </motion.a>
            <motion.a
              href="mailto:antonenko.artem@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Send Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/artem-antonenko-al/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              LinkedIn Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
