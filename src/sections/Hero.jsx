import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative z-10 py-12 md:py-0">
        
        {/* Right Side: Portrait — shown first on mobile */}
        <div className="w-full md:w-[48%] relative flex justify-center md:justify-end order-first md:order-last">
          {/* Subtle glowing accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-lime/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
          <div className="absolute top-1/3 right-1/4 w-56 md:w-72 h-56 md:h-72 bg-coral/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative z-10 w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]"
          >
            {/* The portrait */}
            <div className="relative overflow-hidden w-full aspect-[4/5] md:aspect-[3/4] flex items-end">
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-obsidian/40 via-transparent to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-transparent z-10 pointer-events-none"></div>
              <img
                src="/portrait.jpg"
                alt="Praveen Kumar M"
                className="w-full h-full object-cover object-top opacity-90 filter contrast-[1.05]"
              />
            </div>
            <div className="absolute inset-0 border border-coral/10 z-20 pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Left Side: Copy */}
        <div className="w-full md:w-1/2 flex flex-col items-start order-last md:order-first">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-xs md:text-sm text-lime tracking-[0.2em] font-semibold mb-4 md:mb-6 uppercase"
          >
            {portfolioData.role} / Chennai
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-ivory leading-[1.1] mb-4 md:mb-6"
          >
            BUILDING DIGITAL PRODUCTS<br />
            THAT FEEL <span className="text-coral">ALIVE.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-stone text-base md:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed"
          >
            I build responsive, real-time web applications using modern full-stack technologies like React, Node.js, and Supabase.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href="#work"
              className="px-8 py-4 bg-coral text-obsidian font-semibold text-sm tracking-widest rounded-sm hover:bg-lime transition-colors text-center"
            >
              VIEW MY WORK
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-border-soft text-ivory font-semibold text-sm tracking-widest rounded-sm hover:border-coral transition-colors text-center"
            >
              LET'S WORK TOGETHER
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
