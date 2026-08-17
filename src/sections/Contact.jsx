import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ArrowRight, Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setErrorMsg('')
    
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: data.name,
            email: data.email,
            company: data.company,
            project_type: data.project_type,
            message: data.message
          }
        ])

      if (error) throw error

      setIsSubmitting(false)
      setIsSuccess(true)
      reset()
      
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMsg('Something went wrong while sending your message. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 w-full bg-obsidian border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between">
        
        {/* Left: Contact Info */}
        <div className="w-full lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-5 md:mb-6">
              LET'S TALK
            </h2>
            <p className="text-stone text-base md:text-lg leading-relaxed mb-8 md:mb-12">
              Interested in working together or have a project in mind? Fill out the form and I'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-5 md:space-y-6">
              <div>
                <p className="text-lime text-xs font-bold tracking-widest uppercase mb-1">EMAIL</p>
                <a href="mailto:praveenkumarmohan592005@gmail.com" className="text-ivory hover:text-coral transition-colors text-sm md:text-lg break-all">
                  praveenkumarmohan592005@gmail.com
                </a>
              </div>
              <div>
                <p className="text-lime text-xs font-bold tracking-widest uppercase mb-1">LOCATION</p>
                <p className="text-ivory text-base md:text-lg">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-graphite p-6 sm:p-8 md:p-10 border border-border-soft rounded-sm"
          >
            {isSuccess ? (
              <div className="h-full min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-lime/10 flex items-center justify-center rounded-full mb-6">
                  <ArrowRight className="text-lime" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-ivory mb-2">Message received.</h3>
                <p className="text-stone text-lg">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                {errorMsg && (
                  <div className="p-4 bg-coral/10 border border-coral text-coral rounded-sm text-sm">
                    {errorMsg}
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-stone mb-2">Name *</label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full bg-obsidian border ${errors.name ? 'border-coral' : 'border-border-soft'} text-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors`}
                    />
                    {errors.name && <p className="text-coral text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-stone mb-2">Email *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                      })}
                      className={`w-full bg-obsidian border ${errors.email ? 'border-coral' : 'border-border-soft'} text-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors`}
                    />
                    {errors.email && <p className="text-coral text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold tracking-widest uppercase text-stone mb-2">Company (Optional)</label>
                    <input
                      id="company"
                      type="text"
                      {...register('company')}
                      className="w-full bg-obsidian border border-border-soft text-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="project_type" className="block text-xs font-semibold tracking-widest uppercase text-stone mb-2">Project Type *</label>
                    <select
                      id="project_type"
                      {...register('project_type', { required: 'Please select a project type' })}
                      className={`w-full bg-obsidian border ${errors.project_type ? 'border-coral' : 'border-border-soft'} text-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors appearance-none`}
                    >
                      <option value="">Select an option</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Real-Time Application">Real-Time Application</option>
                      <option value="API Development">API Development</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.project_type && <p className="text-coral text-xs mt-1">{errors.project_type.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-stone mb-2">Message *</label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                    className={`w-full bg-obsidian border ${errors.message ? 'border-coral' : 'border-border-soft'} text-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-coral text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-coral hover:bg-lime text-obsidian font-bold tracking-widest text-sm py-4 rounded-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    'SEND INQUIRY'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
