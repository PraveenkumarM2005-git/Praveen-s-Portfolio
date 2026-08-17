import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 w-full bg-graphite border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-ivory mb-4">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-0">
          {/* Desktop: horizontal timeline line */}
          <div className="hidden md:block relative">
            <div className="absolute top-[11px] left-0 h-[1px] w-full bg-border-soft z-0"></div>
            <div className="flex flex-row gap-8">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative z-10 w-1/2 flex flex-col"
                >
                  {/* Timeline Dot */}
                  <div className="w-[24px] h-[24px] bg-graphite border-4 border-coral rounded-full mb-8"></div>
                  <p className="text-lime text-xs font-bold tracking-widest uppercase mb-4">
                    {exp.duration}
                  </p>
                  <h3 className="text-2xl font-bold text-ivory mb-1">
                    {exp.company}
                  </h3>
                  <h4 className="text-stone text-lg font-medium mb-4">
                    {exp.role} &mdash; {exp.location}
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-stone/90 text-base leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:bg-border-soft before:rounded-full">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative">
            <div className="absolute top-0 left-[11px] h-full w-[1px] bg-border-soft z-0"></div>
            <div className="flex flex-col gap-12">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative z-10 flex flex-col pl-10"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-[24px] h-[24px] bg-graphite border-4 border-coral rounded-full"></div>
                  <p className="text-lime text-xs font-bold tracking-widest uppercase mb-3 pt-1">
                    {exp.duration}
                  </p>
                  <h3 className="text-xl font-bold text-ivory mb-1">
                    {exp.company}
                  </h3>
                  <h4 className="text-stone text-base font-medium mb-4">
                    {exp.role} &mdash; {exp.location}
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-stone/90 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-[5px] before:h-[5px] before:bg-border-soft before:rounded-full">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
