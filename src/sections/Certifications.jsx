import React from 'react'
import { motion } from 'framer-motion'
import { Award, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

const Certifications = () => {
  return (
    <section className="py-16 md:py-24 w-full bg-obsidian border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-12 md:gap-16">
        
        {/* Certifications */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-ivory flex items-center gap-3 md:gap-4">
              <Award className="text-coral flex-shrink-0" size={28} />
              CERTIFICATIONS
            </h2>
          </motion.div>
          
          <div className="space-y-5 md:space-y-6">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <CheckCircle2 className="text-lime mt-1 flex-shrink-0" size={18} />
                <p className="text-stone text-base md:text-lg font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-ivory flex items-center gap-3 md:gap-4">
              <Award className="text-coral flex-shrink-0" size={28} />
              ACHIEVEMENTS
            </h2>
          </motion.div>

          <div className="space-y-5 md:space-y-6">
            {portfolioData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 md:p-6 bg-graphite border border-border-soft rounded-sm"
              >
                <p className="text-ivory text-sm md:text-base leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Certifications
