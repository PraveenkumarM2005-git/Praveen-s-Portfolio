import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 w-full bg-graphite relative border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-12 md:gap-16 justify-between">
        
        {/* Left: About Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-3/5"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-ivory mb-6 md:mb-8">
            ABOUT
          </h2>
          <div className="text-stone text-base md:text-lg leading-relaxed space-y-5 md:space-y-6">
            <p>
              I am a Full Stack Developer focused on building scalable, responsive, and real-time web applications. 
              My expertise lies in crafting robust backend business logic and interactive user interfaces using the MERN stack, 
              Supabase, and modern JavaScript frameworks.
            </p>
            <p>
              I have hands-on experience designing relational and non-relational databases, architecting secure REST APIs, 
              and implementing JWT authentication mechanisms. Passionate about leveraging software development best practices, 
              I also integrate AI-driven workflows to optimize application performance and scale.
            </p>
          </div>
        </motion.div>

        {/* Right: Info Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-2/5 flex flex-col justify-center"
        >
          <div className="grid grid-cols-2 gap-6 md:gap-8 border-t border-border-soft pt-6 md:pt-8">
            <div>
              <p className="text-xs text-lime tracking-widest font-semibold uppercase mb-2">LOCATION</p>
              <p className="text-ivory font-medium text-sm md:text-base">{portfolioData.location}</p>
            </div>
            <div>
              <p className="text-xs text-lime tracking-widest font-semibold uppercase mb-2">EDUCATION</p>
              <p className="text-ivory font-medium text-sm md:text-base">{portfolioData.education.degree}</p>
            </div>
            <div>
              <p className="text-xs text-lime tracking-widest font-semibold uppercase mb-2">CGPA</p>
              <p className="text-ivory font-medium text-sm md:text-base">{portfolioData.education.cgpa}</p>
            </div>
            <div>
              <p className="text-xs text-lime tracking-widest font-semibold uppercase mb-2">GRADUATION</p>
              <p className="text-ivory font-medium text-sm md:text-base">{portfolioData.education.graduationYear}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
