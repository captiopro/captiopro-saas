'use client'

import { Users, Briefcase, ShoppingBag, TrendingUp } from './Icons'
import Badge from './Badge'

const USE_CASES = [
  {
    id: 'creators',
    title: 'Content Creators',
    icon: 'Users',
    description: 'YouTubers, bloggers, and influencers creating engaging content daily',
    benefits: ['Save 10+ hours per week', 'Consistent posting schedule', 'Multi-platform content'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'agencies',
    title: 'Marketing Agencies',
    icon: 'Briefcase',
    description: 'Agencies managing multiple clients and campaigns simultaneously',
    benefits: ['Scale client deliverables', 'Faster turnaround times', 'Professional quality'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Businesses',
    icon: 'ShoppingBag',
    description: 'Online stores needing compelling product descriptions and ads',
    benefits: ['Boost conversion rates', 'SEO-optimized content', 'Consistent brand voice'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'social',
    title: 'Social Media Managers',
    icon: 'TrendingUp',
    description: 'Professionals managing social presence across multiple platforms',
    benefits: ['Engagement-focused copy', 'Platform-specific content', 'Trend-ready posts'],
    color: 'from-green-500 to-teal-500'
  }
]

const iconMap = {
  Users,
  Briefcase,
  ShoppingBag,
  TrendingUp
}

export function UseCases() {
  return (
    <section aria-label="Use cases" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge variant="primary" className="mb-6 inline-flex items-center gap-2 shadow-lg">
            <Users size={14} />
            Who We Serve
          </Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4FFF] to-purple-600">Every Creator</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
            No matter your industry, Captiopro helps you create better content faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {USE_CASES.map((useCase, i) => {
            const Icon = iconMap[useCase.icon as keyof typeof iconMap]
            return (
              <div
                key={useCase.id}
                className="group card-premium p-8 md:p-10 rounded-3xl glass hover:bg-white hover:shadow-premium transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon size={32} color="white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0E0E11] mb-3 group-hover:text-[#4A4FFF] transition-colors">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.color}`}></div>
                      <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Industries Served', value: '15+' },
            { label: 'Average Time Saved', value: '12h/week' },
            { label: 'Content Created Daily', value: '50K+' },
            { label: 'Client Satisfaction', value: '98%' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 glass rounded-2xl">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4A4FFF] to-purple-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
