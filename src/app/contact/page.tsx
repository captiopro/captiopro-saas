'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BRAND } from '@/lib/constants'
import { Mail, Globe, Headphones, Send, MapPin, Clock, Twitter, Linkedin, Instagram, CheckCircle } from '@/components/Icons'
import { ButtonLoader } from '@/components/SkeletonLoader'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#4A4FFF]/10 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-indigo-500/10 to-[#4A4FFF]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Headphones size={20} className="text-[#4A4FFF]" />
            <span className="text-sm font-bold text-[#0E0E11]">24/7 Support</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question or feedback? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Mail,
              label: 'Email Us',
              value: BRAND.email,
              href: `mailto:${BRAND.email}`,
              desc: 'Send us an email anytime',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: Globe,
              label: 'Visit Website', 
              value: BRAND.domain,
              href: `https://${BRAND.domain}`,
              desc: 'Explore our platform',
              color: 'from-purple-500 to-pink-500',
            },
            {
              icon: Headphones,
              label: 'Live Support',
              value: '24/7 Available',
              href: '#',
              desc: 'Chat with our team',
              color: 'from-orange-500 to-red-500',
            },
          ].map((contact, i) => (
            <a 
              key={i} 
              href={contact.href} 
              className="glass rounded-3xl p-8 text-center hover:shadow-premium hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <contact.icon size={28} color="white" />
              </div>
              <p className="text-gray-600 text-sm mb-2 font-semibold">{contact.label}</p>
              <p className="font-extrabold text-[#0E0E11] mb-1 text-lg">{contact.value}</p>
              <p className="text-xs text-gray-500 font-medium">{contact.desc}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-10 shadow-premium-lg">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-2 tracking-tight">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you soon</p>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Message sent successfully! We'll be in touch soon.</span>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] placeholder-gray-400 font-medium"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] placeholder-gray-400 font-medium"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] font-medium"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a topic...</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all resize-none text-[#0E0E11] placeholder-gray-400 font-medium"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold rounded-2xl shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <ButtonLoader />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* FAQ Section */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">Quick Answers</h3>
              <div className="space-y-4">
                {[
                  { q: 'What is your response time?', a: 'We typically respond within 24 hours on business days.' },
                  { q: 'Do you offer phone support?', a: 'Currently, we provide support via email and live chat.' },
                  { q: 'Where are you located?', a: 'We operate globally with team members worldwide.' },
                ].map((faq, i) => (
                  <div key={i} className="p-4 bg-white/50 rounded-xl">
                    <p className="font-bold text-[#0E0E11] mb-1 text-sm">{faq.q}</p>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center">
                  <Clock size={24} color="white" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0E0E11] tracking-tight">Support Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
                  { day: 'Sunday', hours: 'Closed (Email support available)' },
                ].map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white/50 rounded-xl">
                    <span className="font-bold text-[#0E0E11] text-sm">{schedule.day}</span>
                    <span className="text-gray-600 text-sm font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">Connect With Us</h3>
              <p className="text-gray-600 mb-6">Follow us on social media for updates and tips</p>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:bg-blue-500' },
                  { icon: Linkedin, name: 'LinkedIn', href: '#', color: 'hover:bg-blue-600' },
                  { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:bg-pink-500' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`w-14 h-14 glass rounded-xl flex items-center justify-center ${social.color} hover:text-white transition-all hover:scale-110`}
                    title={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-[#764ba2] font-bold transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
