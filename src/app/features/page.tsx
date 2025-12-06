'use client'

import Link from 'next/link'
import { GradientText } from '@/components'
import { BRAND } from '@/lib/constants'
import { 
  Sparkles, 
  MessageCircle, 
  FileText, 
  Video, 
  Package, 
  Search, 
  ArrowRight, 
  CheckCircle,
  Target,
  Zap,
  TrendingUp
} from '@/components/Icons'

export default function FeaturesPage() {
  const tools = [
    {
      id: 1,
      name: 'Social Media Captions',
      description: 'Create engaging, platform-optimized captions for Instagram, Facebook, Twitter, and LinkedIn that drive engagement.',
      icon: MessageCircle,
      color: 'from-[#4A4FFF] to-[#764ba2]',
      benefits: ['Increased engagement', 'Brand voice consistency', 'Time-saving automation', 'Emoji integration'],
      useCases: ['Instagram posts', 'Twitter threads', 'Facebook updates', 'LinkedIn content']
    },
    {
      id: 2,
      name: 'Blog Content Writer',
      description: 'Generate high-quality, SEO-optimized blog posts and articles that rank on Google and engage readers.',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      benefits: ['SEO optimization', 'Plagiarism-free content', 'Multiple formats', 'Research integration'],
      useCases: ['Blog posts', 'Articles', 'Guides', 'Tutorials']
    },
    {
      id: 3,
      name: 'Video Scripts',
      description: 'Write compelling video scripts for YouTube, TikTok, and Instagram Reels that keep viewers watching.',
      icon: Video,
      color: 'from-red-500 to-orange-500',
      benefits: ['Hook optimization', 'Structure templates', 'Timing guidance', 'CTA integration'],
      useCases: ['YouTube videos', 'TikTok content', 'Instagram Reels', 'Video ads']
    },
    {
      id: 4,
      name: 'Product Descriptions',
      description: 'Craft persuasive product descriptions that highlight benefits and convert browsers into buyers.',
      icon: Package,
      color: 'from-green-500 to-teal-500',
      benefits: ['Conversion-focused', 'Feature highlighting', 'Emotional appeal', 'A/B testing ready'],
      useCases: ['E-commerce stores', 'Marketplaces', 'Catalogs', 'Landing pages']
    },
    {
      id: 5,
      name: 'SEO Keywords',
      description: 'Discover high-traffic, low-competition keywords to dominate search results and drive organic traffic.',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Competition analysis', 'Search volume data', 'Long-tail suggestions', 'Trend tracking'],
      useCases: ['Content planning', 'PPC campaigns', 'SEO strategy', 'Market research']
    },
    {
      id: 6,
      name: 'Email Marketing',
      description: 'Write high-converting email campaigns with subject lines that get opened and content that drives clicks.',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Open rate optimization', 'Personalization', 'Sequence templates', 'A/B variants'],
      useCases: ['Newsletters', 'Product launches', 'Promotions', 'Drip campaigns']
    },
    {
      id: 7,
      name: 'Ad Copy Generator',
      description: 'Create attention-grabbing ad copy for Google, Facebook, and Instagram that maximizes ROI.',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      benefits: ['Platform optimization', 'CTR improvement', 'Budget efficiency', 'Multiple variants'],
      useCases: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Display campaigns']
    },
    {
      id: 8,
      name: 'Content Improver',
      description: 'Enhance existing content with better readability, SEO, and engagement metrics in seconds.',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
      benefits: ['Readability boost', 'SEO enhancement', 'Engagement tips', 'Format optimization'],
      useCases: ['Content updates', 'Performance improvement', 'Republishing', 'Content audits']
    }
  ]

  const stats = [
    { label: 'AI Tools', value: '8', icon: Sparkles },
    { label: 'Languages', value: '50+', icon: MessageCircle },
    { label: 'Accuracy Rate', value: '99%', icon: CheckCircle },
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
            <span className="text-sm font-bold text-[#0E0E11]">Powerful AI Tools</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            Everything You Need to <GradientText>Create Amazing Content</GradientText>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            8 powerful AI tools designed to help you create high-quality content faster than ever before
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, i) => (
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

      {/* Tools Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <article
                key={tool.id}
                className="glass rounded-3xl overflow-hidden hover:shadow-premium hover:scale-105 transition-all duration-300 group"
              >
                {/* Icon Header */}
                <div className="h-48 bg-gradient-to-br from-[#4A4FFF]/10 to-purple-500/5 flex items-center justify-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                    <tool.icon size={32} color="white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#0E0E11] mb-3 group-hover:text-[#4A4FFF] transition-colors">
                    {tool.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {tool.benefits.map((benefit, i) => (
                        <span key={i} className="text-xs font-bold text-[#4A4FFF] bg-[#4A4FFF]/10 px-3 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Perfect For</h4>
                    <div className="space-y-2">
                      {tool.useCases.map((useCase, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span className="text-sm text-gray-600 font-medium">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/signup">
                    <button className={`w-full px-4 py-3 bg-gradient-to-r ${tool.color} text-white font-bold rounded-xl hover:shadow-premium transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}>
                      Try Now <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#4A4FFF]/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center shadow-premium-lg">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center mx-auto mb-6">
              <Sparkles size={32} color="white" />
            </div>
            
            <h2 className="text-4xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start with our free plan and get access to all 8 AI tools today
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
