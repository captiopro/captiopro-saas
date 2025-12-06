'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Check, Zap, Sparkles, ArrowRight, Shield, Star, Users } from '@/components/Icons'
import { GradientText } from '@/components'
import { BRAND, PRICING_PLANS } from '@/lib/constants'
import { authService, User } from '@/lib/auth'

export default function PricingPage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (authService.isAuthenticated()) {
      setUser(authService.getCurrentUser())
    }
  }, [])
  const faqs = [
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes! You can cancel your subscription at any time. No questions asked, no hidden fees.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.',
    },
    {
      question: 'Do you offer refunds?',
      answer: "Yes! We offer a 14-day money-back guarantee. If you're not satisfied, we'll refund you in full.",
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can change your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'What happens when I run out of generations on the free plan?',
      answer: "You'll need to wait until next month for your credits to reset, or upgrade to a paid plan for more generations.",
    },
    {
      question: 'Is there a team/enterprise plan?',
      answer: 'Yes! Our Enterprise plan includes unlimited team collaboration and dedicated support.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 sm:py-20 px-4 text-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#4A4FFF]/10 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-indigo-500/10 to-[#4A4FFF]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass rounded-full mb-4 sm:mb-6">
            <Zap size={18} className="text-[#4A4FFF]" />
            <span className="text-xs sm:text-sm font-bold text-[#0E0E11]">Simple, Transparent Pricing</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0E0E11] mb-4 sm:mb-6 tracking-tight px-4">
            Choose Your <GradientText>Perfect Plan</GradientText>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Start free, upgrade when you need more power. All paid plans come with a 14-day money-back guarantee.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              { label: 'Active Users', value: '50K+', icon: Users },
              { label: 'Trust Score', value: '4.9/5', icon: Star },
              { label: 'Money Back', value: '14 Days', icon: Shield },
            ].map((stat, i) => (
              <div key={i} className="glass p-5 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-premium transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon size={20} color="white" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0E0E11] mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 sm:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRICING_PLANS.map((plan) => {
              const isCurrentPlan = user?.plan === plan.name
              
              return (
              <div
                key={plan.id}
                className={`relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:scale-105 ${
                  plan.featured ? 'ring-2 ring-[#4A4FFF] hover:shadow-premium' : ''
                } ${
                  isCurrentPlan ? 'ring-2 ring-green-500 bg-green-50/50' : ''
                }`}
              >
                {isCurrentPlan && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                      <Check size={14} />
                      Your Current Plan
                    </div>
                  </div>
                )}
                
                {!isCurrentPlan && plan.featured && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white text-xs font-bold rounded-full shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <Sparkles size={20} className="text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0E0E11] mb-2">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{plan.description}</p>

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4A4FFF] to-[#764ba2]">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 font-medium mb-1 sm:mb-2 text-sm">/mo</span>
                  </div>
                </div>

                {user?.plan === plan.name ? (
                  <button 
                    disabled
                    className="w-full py-2.5 sm:py-3 rounded-xl font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 bg-gray-400 cursor-not-allowed text-sm sm:text-base mb-4 sm:mb-6"
                  >
                    <Check size={16} />
                    Current Plan
                  </button>
                ) : (
                  <Link href={user ? `/account?tab=billing&upgrade=${plan.id}` : `/signup?plan=${plan.id}`} className="block mb-4 sm:mb-6">
                    <button className={`w-full py-2.5 sm:py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-premium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-sm sm:text-base`}>
                      {user ? (
                        // If user exists, determine if upgrade or downgrade
                        (() => {
                          const currentPlanIndex = PRICING_PLANS.findIndex(p => p.name === user.plan)
                          const targetPlanIndex = PRICING_PLANS.findIndex(p => p.id === plan.id)
                          if (targetPlanIndex > currentPlanIndex) {
                            return <>Upgrade to {plan.name} <ArrowRight size={16} /></>
                          } else {
                            return <>Switch to {plan.name} <ArrowRight size={16} /></>
                          }
                        })()
                      ) : (
                        plan.price === 0 ? (
                          <>Get Started Free <ArrowRight size={16} /></>
                        ) : (
                          <>Start with {plan.name} <ArrowRight size={16} /></>
                        )
                      )}
                    </button>
                  </Link>
                )}

                <div className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={10} className="text-white" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#4A4FFF]/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E0E11] mb-3 sm:mb-4 tracking-tight px-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-premium transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0E0E11] mb-2 sm:mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-premium-lg">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Sparkles size={28} color="white" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E0E11] mb-3 sm:mb-4 tracking-tight px-4">
              Ready to Transform Your Content?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join 50,000+ creators using AI to create amazing content in seconds
            </p>
            
            <Link href="/signup">
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:shadow-premium transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                Start Free Today
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="text-center py-8 sm:py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-[#764ba2] font-bold transition-colors text-sm sm:text-base">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
