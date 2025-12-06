'use client'

import Link from 'next/link'
import { Check, Zap, Sparkles, ArrowRight, Shield, Star, Users } from '@/components/Icons'
import { GradientText } from '@/components'
import { BRAND, PRICING_PLANS } from '@/lib/constants'

export default function PricingPage() {
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
      <section className="py-20 px-4 text-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#4A4FFF]/10 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-indigo-500/10 to-[#4A4FFF]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Zap size={20} className="text-[#4A4FFF]" />
            <span className="text-sm font-bold text-[#0E0E11]">Simple, Transparent Pricing</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            Choose Your <GradientText>Perfect Plan</GradientText>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Start free, upgrade when you need more power. All paid plans come with a 14-day money-back guarantee.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { label: 'Active Users', value: '50K+', icon: Users },
              { label: 'Trust Score', value: '4.9/5', icon: Star },
              { label: 'Money Back', value: '14 Days', icon: Shield },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl text-center hover:shadow-premium transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} color="white" />
                </div>
                <div className="text-3xl font-extrabold text-[#0E0E11] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative glass rounded-3xl p-6 transition-all duration-300 hover:scale-105 ${
                  plan.featured ? 'ring-2 ring-[#4A4FFF] hover:shadow-premium' : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white text-xs font-bold rounded-full shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center mb-4 shadow-lg">
                  <Sparkles size={24} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#0E0E11] mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4A4FFF] to-[#764ba2]">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 font-medium mb-2">/mo</span>
                  </div>
                </div>

                <Link href={`/signup?plan=${plan.id}`} className="block mb-6">
                  <button className={`w-full py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-premium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2]`}>
                    {plan.price === 0 ? 'Get Started Free' : 'Upgrade Now'}
                    <ArrowRight size={18} />
                  </button>
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={10} className="text-white" />
                      </div>
                      <span className="text-xs text-gray-700 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#4A4FFF]/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 md:p-8 hover:shadow-premium transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#0E0E11] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center shadow-premium-lg">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center mx-auto mb-6">
              <Sparkles size={32} color="white" />
            </div>
            
            <h2 className="text-4xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
              Ready to Transform Your Content?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 50,000+ creators using AI to create amazing content in seconds
            </p>
            
            <Link href="/signup">
              <button className="px-10 py-5 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold text-lg rounded-2xl hover:shadow-premium transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                Start Free Today
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="text-center py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-[#764ba2] font-bold transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
