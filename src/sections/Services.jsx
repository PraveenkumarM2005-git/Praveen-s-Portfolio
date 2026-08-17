import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Services = () => {
  return (
    <section className="py-16 md:py-24 w-full bg-graphite border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-ivory mb-5 md:mb-6">
            BUILD SOMETHING <span className="text-coral">USEFUL.</span>
          </h2>
          <p className="text-stone text-base md:text-xl leading-relaxed">
            Need a modern web application, real-time platform, dashboard or full-stack product experience? 
            Let's discuss what you are building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
          {portfolioData.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 md:p-12 border border-border-soft bg-obsidian/50 hover:border-lime/50 transition-colors duration-300 rounded-sm group"
            >
              <div className="flex items-center justify-between mb-5 md:mb-6">
                <span className="text-lime font-mono text-sm tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                <div className="h-px bg-border-soft flex-1 ml-6 group-hover:bg-lime/30 transition-colors"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ivory mb-3 md:mb-4 tracking-wide group-hover:text-lime transition-colors">
                {service.title}
              </h3>
              <p className="text-stone text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
