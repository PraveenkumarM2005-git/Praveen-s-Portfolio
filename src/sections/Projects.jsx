import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col lg:flex-row gap-8 lg:gap-20 items-start lg:items-center py-14 md:py-20 border-b border-border-soft last:border-b-0"
    >
      {/* Project Info */}
      <div className="w-full lg:w-1/2 flex flex-col order-last lg:order-first">
        <div className="flex items-center gap-4 mb-5 md:mb-6">
          <span className="text-lime font-mono text-sm tracking-widest">{project.id}</span>
          <div className="h-px bg-border-soft flex-1 group-hover:bg-coral transition-colors duration-500"></div>
        </div>
        
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ivory mb-2 group-hover:translate-x-2 transition-transform duration-300 ease-out">
          {project.title}
        </h3>
        <p className="text-coral text-sm tracking-widest font-semibold uppercase mb-4 md:mb-6">
          {project.category}
        </p>
        
        <p className="text-stone text-base md:text-lg leading-relaxed mb-7 md:mb-8">
          {project.description}
        </p>

        <div className="mb-7 md:mb-10">
          <p className="text-xs text-ivory tracking-widest uppercase mb-3 opacity-50">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-graphite border border-border-soft text-stone text-sm rounded-sm group-hover:border-stone/30 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5 sm:gap-6 mt-auto flex-wrap">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ivory font-semibold tracking-wider text-sm hover:text-lime transition-colors"
          >
            LIVE DEMO
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone font-medium tracking-wider text-sm hover:text-ivory transition-colors"
            >
              <GithubIcon size={18} />
              GITHUB
            </a>
          )}
        </div>
      </div>

      {/* Project Visual */}
      <a 
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full lg:w-1/2 aspect-video bg-graphite border border-border-soft relative overflow-hidden group-hover:border-coral/30 transition-colors duration-500 rounded-sm cursor-pointer order-first lg:order-last"
      >
        {project.image ? (
          <>
            <img 
              src={project.image} 
              alt={`${project.title} visual`} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-obsidian/50 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0">
              <span className="text-stone/40 font-mono text-sm tracking-widest">VISUAL PLACEHOLDER</span>
            </div>
            <div className="w-full h-full bg-gradient-to-br from-obsidian to-graphite group-hover:scale-105 transition-transform duration-700 ease-out"></div>
          </>
        )}
      </a>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="work" className="py-16 md:py-24 w-full bg-obsidian">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-ivory mb-4">
            SELECTED WORK
          </h2>
          <p className="text-stone text-base md:text-lg max-w-2xl">
            A showcase of full-stack applications built to solve real problems.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
