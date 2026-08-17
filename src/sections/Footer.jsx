import React from 'react'
import { portfolioData } from '../data/portfolio'

const Footer = () => {
  return (
    <footer className="w-full bg-obsidian py-10 md:py-12 border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-ivory tracking-widest mb-2">
            {portfolioData.name.toUpperCase()}
          </h2>
          <p className="text-lime text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4">
            {portfolioData.role}
          </p>
          <p className="text-stone text-sm max-w-sm">
            Building thoughtful, scalable and real-time digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-5 md:gap-6">
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone hover:text-coral transition-colors text-sm font-medium tracking-wider uppercase">
              LinkedIn
            </a>
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-stone hover:text-coral transition-colors text-sm font-medium tracking-wider uppercase">
              GitHub
            </a>
            <a href={`mailto:${portfolioData.email}`} className="text-stone hover:text-coral transition-colors text-sm font-medium tracking-wider uppercase">
              Email
            </a>
          </div>
          <p className="text-stone/50 text-xs">
            &copy; 2026 {portfolioData.name}
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
