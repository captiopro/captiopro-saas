'use client'

import { CheckCircle, X, Zap } from './Icons'
import Badge from './Badge'

const COMPARISON_DATA = [
  {
    feature: 'Purpose-built for content creation',
    captiopro: true,
    chatgpt: false,
    copyai: true
  },
  {
    feature: '8 specialized AI tools',
    captiopro: true,
    chatgpt: false,
    copyai: false
  },
  {
    feature: 'Unlimited generations',
    captiopro: true,
    chatgpt: 'Limited',
    copyai: 'Limited'
  },
  {
    feature: 'Free forever plan',
    captiopro: true,
    chatgpt: true,
    copyai: false
  },
  {
    feature: 'No character limits',
    captiopro: true,
    chatgpt: 'Varies',
    copyai: false
  },
  {
    feature: 'Multi-platform optimization',
    captiopro: true,
    chatgpt: false,
    copyai: true
  },
  {
    feature: 'SEO-optimized content',
    captiopro: true,
    chatgpt: false,
    copyai: true
  },
  {
    feature: 'One-click copy & export',
    captiopro: true,
    chatgpt: false,
    copyai: true
  },
  {
    feature: 'Brand voice training',
    captiopro: true,
    chatgpt: false,
    copyai: false
  },
  {
    feature: 'Starting price',
    captiopro: 'Free',
    chatgpt: 'Free',
    copyai: '$49/mo'
  }
]

export function Comparison() {
  return (
    <section aria-label="Comparison" className="py-24 px-4 bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA] relative overflow-hidden">
      <div className="gradient-mesh absolute inset-0 opacity-30"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="purple" className="mb-6 inline-flex items-center gap-2 shadow-lg">
            <Zap size={14} />
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4FFF] to-purple-600">Compare</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
            See why creators choose Captiopro over generic AI tools
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass rounded-3xl overflow-hidden shadow-premium">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-[#4A4FFF]/10 to-purple-500/10 border-b-2 border-gray-200">
            <div className="col-span-1"></div>
            <div className="text-center">
              <div className="font-bold text-[#4A4FFF] text-lg mb-1">Captiopro</div>
              <Badge variant="primary" size="sm">Recommended</Badge>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-700 text-lg">ChatGPT</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-700 text-lg">Copy.ai</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {COMPARISON_DATA.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 gap-4 p-4 md:p-6 hover:bg-gray-50/50 transition-colors"
              >
                <div className="col-span-1 flex items-center">
                  <span className="text-sm md:text-base font-semibold text-gray-700">
                    {row.feature}
                  </span>
                </div>
                
                <div className="flex items-center justify-center">
                  {typeof row.captiopro === 'boolean' ? (
                    row.captiopro ? (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4A4FFF] to-purple-600 flex items-center justify-center">
                        <CheckCircle size={20} color="white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <X size={20} color="#9CA3AF" />
                      </div>
                    )
                  ) : (
                    <span className="text-sm font-bold text-[#4A4FFF]">{row.captiopro}</span>
                  )}
                </div>
                
                <div className="flex items-center justify-center">
                  {typeof row.chatgpt === 'boolean' ? (
                    row.chatgpt ? (
                      <CheckCircle size={20} color="#10B981" />
                    ) : (
                      <X size={20} color="#9CA3AF" />
                    )
                  ) : (
                    <span className="text-sm font-medium text-gray-600">{row.chatgpt}</span>
                  )}
                </div>
                
                <div className="flex items-center justify-center">
                  {typeof row.copyai === 'boolean' ? (
                    row.copyai ? (
                      <CheckCircle size={20} color="#10B981" />
                    ) : (
                      <X size={20} color="#9CA3AF" />
                    )
                  ) : (
                    <span className="text-sm font-medium text-gray-600">{row.copyai}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/signup"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#4A4FFF] via-[#5B5FFF] to-[#2E30B0] text-white font-bold rounded-2xl shadow-premium-lg hover:shadow-premium hover:scale-105 transition-all duration-300 text-lg"
          >
            Start with Captiopro Free
            <CheckCircle size={22} />
          </a>
          <p className="text-sm text-gray-600 mt-4 font-medium">
            No credit card required • Upgrade anytime
          </p>
        </div>
      </div>
    </section>
  )
}
