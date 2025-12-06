'use client'

import Link from 'next/link'
import { GradientText } from '@/components'
import { BRAND } from '@/lib/constants'
import { 
  Sparkles, 
  ArrowRight, 
  Target,
  Users,
  Zap,
  Heart,
  TrendingUp,
  Shield,
  Globe,
  Award
} from '@/components/Icons'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push boundaries to bring you the most advanced AI technology for content creation.',
      color: 'from-[#4A4FFF] to-[#764ba2]'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Every feature we build starts with understanding your needs and making your workflow easier.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Quality Matters',
      description: 'We never compromise on quality. Every piece of content generated meets the highest standards.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data is protected with enterprise-grade security. We take your privacy seriously.',
      color: 'from-green-500 to-teal-500'
    }
  ]

  const stats = [
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Content Generated', value: '10M+', icon: Sparkles },
    { label: 'Countries', value: '120+', icon: Globe },
    { label: 'Success Rate', value: '99%', icon: Award }
  ]

  const timeline = [
    {
      year: '2023',
      title: 'The Beginning',
      description: 'Started with a vision to democratize AI-powered content creation for everyone.'
    },
    {
      year: '2024',
      title: 'Rapid Growth',
      description: 'Reached 10,000 users and launched 8 powerful AI tools to help creators worldwide.'
    },
    {
      year: '2025',
      title: 'Going Global',
      description: 'Expanded to 120+ countries with 50K+ active users creating millions of pieces of content.'
    }
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
            <Heart size={20} className="text-[#4A4FFF]" />
            <span className="text-sm font-bold text-[#0E0E11]">Our Story</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            Empowering Creators with <GradientText>AI Technology</GradientText>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're on a mission to help every creator, marketer, and business owner unlock their full potential with AI-powered content creation.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center mx-auto mb-6">
                <Target size={32} color="white" />
              </div>
              <h2 className="text-4xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">Our Mission</h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              At {BRAND.name}, we believe that everyone deserves access to powerful content creation tools. Our mission is to democratize AI technology and make it accessible, affordable, and easy to use for creators of all skill levels.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              We're building more than just tools – we're building a platform that empowers you to create better content faster, grow your audience, and achieve your goals without the complexity and cost of traditional solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#4A4FFF]/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="glass rounded-3xl p-8 hover:shadow-premium hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon size={28} color="white" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0E0E11] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From startup to global platform
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="glass rounded-3xl p-8 hover:shadow-premium transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-extrabold text-white">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold text-[#0E0E11] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
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
              Join Our Growing Community
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of 50,000+ creators who are already transforming their content with AI
            </p>
            
            <Link href="/signup">
              <button className="px-10 py-5 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold text-lg rounded-2xl hover:shadow-premium transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                Start Your Journey
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
