import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Stack from '../sections/Stack'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Certifications from '../sections/Certifications'
import Services from '../sections/Services'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Certifications />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
