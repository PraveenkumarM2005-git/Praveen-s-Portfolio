import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const StackCategory = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="border-t border-border-soft pt-6"
  >
    <h3 className="text-lime text-xs sm:text-sm tracking-widest font-semibold uppercase mb-3 md:mb-4">
      {title}
    </h3>
    <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2">
      {items.map((item, index) => (
        <span key={index} className="text-ivory text-base md:text-xl font-medium tracking-wide">
          {item}
        </span>
      ))}
    </div>
  </motion.div>
)

const Stack = () => {
  return (
    <section id="stack" className="py-16 md:py-24 w-full bg-obsidian">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-10 md:gap-16">
        
        <div className="w-full md:w-1/3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-ivory md:sticky md:top-32"
          >
            TECHNICAL<br/>CAPABILITY
          </motion.h2>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-8 md:gap-12">
          <StackCategory title="Languages" items={portfolioData.skills.languages} delay={0.1} />
          <StackCategory title="Frontend" items={portfolioData.skills.frontend} delay={0.2} />
          <StackCategory title="Backend" items={portfolioData.skills.backend} delay={0.3} />
          <StackCategory title="Databases & Cloud Storage" items={portfolioData.skills.databases} delay={0.4} />
          <StackCategory title="DevOps & Tools" items={portfolioData.skills.devops} delay={0.5} />
          <StackCategory title="Core Concepts" items={portfolioData.skills.coreConcepts} delay={0.6} />
        </div>

      </div>
    </section>
  )
}

export default Stack
