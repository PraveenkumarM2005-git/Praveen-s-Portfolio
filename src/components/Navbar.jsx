import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'STACK', href: '#stack' },
  { name: 'CONTACT', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/90 backdrop-blur-md border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        <a href="#" className="font-bold tracking-widest text-ivory text-lg hover:text-coral transition-colors">
          {portfolioData.name.toUpperCase()}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider text-stone">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-ivory transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-coral text-obsidian font-semibold text-sm tracking-wide hover:bg-lime transition-colors rounded-sm"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ivory p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-graphite border-b border-border-soft md:hidden flex flex-col px-6 py-8 gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium tracking-wider text-ivory hover:text-coral transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center px-6 py-3 bg-coral text-obsidian font-semibold text-sm tracking-wide rounded-sm"
            >
              LET'S TALK
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
