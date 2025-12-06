'use client'

import { MessageCircle, Sparkles, Copy, ArrowRight, Zap } from './Icons'
import Badge from './Badge'

const STEPS = [
  {
    number: 1,
    icon: 'MessageCircle',
    title: 'Choose Your Tool',
    description: 'Select from 8 AI-powered tools designed for different content needs',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: 2,
    icon: 'Sparkles',
    title: 'AI Creates Magic',
    description: 'Our AI instantly generates high-quality, engaging content in seconds',
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: 3,
    icon: 'Copy',
    title: 'Copy & Publish',
    description: 'One-click copy, minor edits if needed, and publish across all platforms',
    color: 'from-orange-500 to-red-500'
  }
]

const iconMap = {
  MessageCircle,
  Sparkles,
  Copy
}

export function HowItWorks() {
  return (
    <section aria-label="How it works" className="py-24 px-4 bg-gradient-to-br from-[#0E0E11] to-[#1a1a1f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A4FFF]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge variant="primary" className="mb-6 inline-flex items-center gap-2 shadow-lg bg-white/10 backdrop-blur-sm">
            <Sparkles size={14} />
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Create Content in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4FFF] to-purple-400">3 Easy Steps</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto">
            From idea to published content in under a minute
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {STEPS.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap]
            return (
              <div key={i} className="relative">
                {/* Connection Arrow (desktop only) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-3 z-20">
                    <ArrowRight size={28} color="#4A4FFF" className="animate-pulse" />
                  </div>
                )}

                <div
                  className="relative glass-dark p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group animate-slide-up h-full"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#4A4FFF] to-purple-600 flex items-center justify-center shadow-premium">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mt-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon size={32} color="white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#4A4FFF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Time Save Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 glass-dark rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
              <Zap size={24} color="white" />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400 font-semibold">Average Time</div>
              <div className="text-2xl font-bold text-white">
                Under <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4FFF] to-purple-400">60 Seconds</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/signup"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0E0E11] font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 text-lg"
          >
            Start Creating Now
            <ArrowRight size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}
