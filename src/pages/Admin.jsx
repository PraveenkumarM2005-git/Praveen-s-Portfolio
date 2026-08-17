import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Inbox } from 'lucide-react'
import { supabase } from '../lib/supabase'

const Admin = () => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [inquiries, setInquiries] = useState([])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
      if (session) fetchInquiries()
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) fetchInquiries()
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!session) return

    // Realtime subscription
    const channel = supabase
      .channel('public:contact_inquiries')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'contact_inquiries' },
        (payload) => {
          setInquiries((current) => [payload.new, ...current])
        }
      )
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'contact_inquiries' },
        (payload) => {
          setInquiries((current) =>
            current.map((item) => (item.id === payload.new.id ? payload.new : item))
          )
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [session])

  const fetchInquiries = async () => {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!error && data) {
      setInquiries(data)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setAuthError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setAuthError(error.message)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setInquiries([])
  }

  const updateStatus = async (id, newStatus) => {
    await supabase
      .from('contact_inquiries')
      .update({ status: newStatus })
      .eq('id', id)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <Loader2 className="text-lime animate-spin" size={32} />
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-graphite p-8 rounded-sm border border-border-soft"
        >
          <h1 className="text-2xl font-bold text-ivory mb-6 text-center">ADMIN PORTAL</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            {authError && <div className="p-3 bg-coral/10 text-coral border border-coral/20 rounded-sm text-sm">{authError}</div>}
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-stone mb-2">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-obsidian border border-border-soft text-ivory px-4 py-3 rounded-sm focus:border-lime outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-stone mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-obsidian border border-border-soft text-ivory px-4 py-3 rounded-sm focus:border-lime outline-none"
                required
              />
            </div>
            <button type="submit" className="w-full bg-coral hover:bg-lime text-obsidian font-bold tracking-widest text-sm py-4 rounded-sm transition-colors mt-6">
              SIGN IN
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  // Dashboard View
  const stats = {
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'new').length,
    contacted: inquiries.filter(i => i.status === 'contacted').length,
    completed: inquiries.filter(i => i.status === 'completed').length,
  }

  return (
    <div className="min-h-screen bg-obsidian">
      <nav className="border-b border-border-soft bg-graphite py-4 px-6 md:px-12 flex justify-between items-center">
        <h1 className="font-bold tracking-widest text-ivory text-lg">PORTFOLIO ADMIN</h1>
        <button onClick={handleSignOut} className="text-stone hover:text-coral text-sm font-medium tracking-widest transition-colors">
          SIGN OUT
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-graphite p-6 border border-border-soft rounded-sm">
            <p className="text-stone text-xs tracking-widest uppercase mb-2">Total Inquiries</p>
            <p className="text-3xl font-bold text-ivory">{stats.total}</p>
          </div>
          <div className="bg-graphite p-6 border border-border-soft rounded-sm border-b-2 border-b-lime">
            <p className="text-stone text-xs tracking-widest uppercase mb-2">New</p>
            <p className="text-3xl font-bold text-ivory">{stats.new}</p>
          </div>
          <div className="bg-graphite p-6 border border-border-soft rounded-sm">
            <p className="text-stone text-xs tracking-widest uppercase mb-2">Contacted</p>
            <p className="text-3xl font-bold text-ivory">{stats.contacted}</p>
          </div>
          <div className="bg-graphite p-6 border border-border-soft rounded-sm">
            <p className="text-stone text-xs tracking-widest uppercase mb-2">Completed</p>
            <p className="text-3xl font-bold text-ivory">{stats.completed}</p>
          </div>
        </div>

        {inquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-stone">
            <Inbox size={48} className="mb-4 opacity-50" />
            <p className="text-lg">No inquiries yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {inquiries.map((inquiry) => (
              <div key={inquiry.id} className="bg-graphite p-6 md:p-8 border border-border-soft rounded-sm flex flex-col md:flex-row gap-8 justify-between items-start">
                <div className="w-full md:w-3/4 space-y-4">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="text-xl font-bold text-ivory">{inquiry.name}</h3>
                    <a href={`mailto:${inquiry.email}`} className="text-stone hover:text-coral transition-colors">
                      {inquiry.email}
                    </a>
                    {inquiry.company && (
                      <span className="px-2 py-1 bg-obsidian text-stone text-xs rounded-sm border border-border-soft">
                        {inquiry.company}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-lime text-xs tracking-widest uppercase font-semibold">Project Type: </span>
                    <span className="text-ivory">{inquiry.project_type}</span>
                  </div>
                  <div className="bg-obsidian p-4 border border-border-soft rounded-sm text-stone text-sm leading-relaxed whitespace-pre-wrap">
                    {inquiry.message}
                  </div>
                  <div className="text-xs text-stone/50">
                    Received: {new Date(inquiry.created_at).toLocaleString()}
                  </div>
                </div>
                
                <div className="w-full md:w-1/4 flex flex-col gap-2">
                  <span className="text-stone text-xs tracking-widest uppercase mb-1">Status</span>
                  <select 
                    value={inquiry.status}
                    onChange={(e) => updateStatus(inquiry.id, e.target.value)}
                    className="w-full bg-obsidian border border-border-soft text-ivory px-3 py-2 rounded-sm focus:border-lime outline-none text-sm appearance-none"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Admin
