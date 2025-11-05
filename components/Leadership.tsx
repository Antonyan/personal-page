'use client'

import { motion } from 'framer-motion'

const leadershipPrinciples = [
  {
    title: 'Shuhari Framework',
    description: 'Progressive mentorship model: Shu (follow), Ha (adapt), Ri (transcend)',
    impact: 'Developed 15 autonomous engineers capable of independent decision-making',
    icon: '🎯',
  },
  {
    title: 'Feature Responsible Model',
    description: 'Empowering engineers with end-to-end ownership of features',
    impact: 'Increased delivery predictability from 50% to 87%',
    icon: '🚀',
  },
  {
    title: 'ADRs & Documentation',
    description: 'Architecture Decision Records for transparent, reversible decisions',
    impact: 'Created knowledge base for 300+ engineers across 12 companies',
    icon: '📚',
  },
  {
    title: 'Metrics-Driven Transformation',
    description: 'Quantifying impact and ROI at every stage of transformation',
    impact: '8x ROI on AI implementation with measurable KPIs',
    icon: '📊',
  },
]

const testimonials = [
  {
    quote: 'Artem transformed our engineering organization, implementing AI tools that delivered 8x ROI while maintaining team morale and autonomy.',
    author: 'Engineering Director',
    company: 'Enterprise Tech Company',
    role: 'Leadership Impact',
  },
  {
    quote: 'The Fractal Architecture migration was executed flawlessly. Delivery predictability improved from 50% to 87% over 2 years.',
    author: 'CTO',
    company: 'SaaS Platform',
    role: 'Technical Excellence',
  },
  {
    quote: 'His mentorship approach using the Shuhari framework created truly autonomous engineers. Best investment in our team development.',
    author: 'VP of Engineering',
    company: 'Startup',
    role: 'Team Development',
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
            Building high-performing teams through empowerment, mentorship, and measurable outcomes
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
            What <span className="gradient-text">Leaders Say</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
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
              href="mailto:antonenko.artem@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
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
            <motion.a
              href="https://calendly.com/antonenko-artem/interview"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule a Call
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
