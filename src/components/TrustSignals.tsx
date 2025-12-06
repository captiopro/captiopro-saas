'use client'

import { Shield, Lock, Award, Clock, CheckCircle } from './Icons'

const TRUST_ITEMS = [
  {
    icon: 'Shield',
    title: 'GDPR Compliant',
    description: 'Your data is protected under EU regulations'
  },
  {
    icon: 'Lock',
    title: '256-bit Encryption',
    description: 'Bank-level security for all your content'
  },
  {
    icon: 'Award',
    title: '30-Day Guarantee',
    description: 'Full refund if you\'re not satisfied'
  },
  {
    icon: 'Clock',
    title: '99.9% Uptime',
    description: 'Always available when you need it'
  }
]

const iconMap = {
  Shield,
  Lock,
  Award,
  Clock
}

export function TrustSignals() {
  return (
    <section aria-label="Trust signals" className="py-16 px-4 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <div
                key={i}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#4A4FFF]/10 to-purple-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} color="#4A4FFF" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-[#0E0E11] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-70">
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-sm font-semibold">SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-sm font-semibold">ISO 27001</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-sm font-semibold">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-sm font-semibold">&lt;2hr Response Time</span>
          </div>
        </div>
      </div>
    </section>
  )
}
