'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BRAND, TOOLS, FEATURES, PRICING_PLANS, TESTIMONIALS, TRUST_BADGES, STATS } from '@/lib/constants'
import { GradientText, GlowEffect, NeumorphicButton, CountUpAnimation, TestimonialCard, Badge, AnimatedCard, TryItNow, UseCases, Comparison, TrustSignals, HowItWorks } from '@/components'
import { IconRenderer } from '@/components/IconRenderer'
import { ArrowRight, CheckCircle, Star, Play, Zap, Shield, Award, Target } from '@/components/Icons'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const authStatus = localStorage.getItem('captiopro_auth')
    setIsLoggedIn(authStatus === 'true')
  }, [])

  return (
    <div className="bg-white">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">Skip to content</a>

      <main id="main-content" className="relative">
        {/* Hero Section */}
        <section aria-label="Hero" className="relative overflow-hidden pt-20 pb-32 px-4 bg-[#0A0A0F]">
        {/* ULTRA PREMIUM Background - Multiple Advanced Layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
          {/* Base gradient mesh - Deep space feel */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#1a1a3e_0%,#0a0a0f_50%),radial-gradient(ellipse_at_bottom_right,#16162a_0%,#0a0a0f_50%)]" />
          
          {/* Large morphing gradient blobs - Apple/Stripe style */}
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] -translate-x-1/2 -translate-y-1/2">
            {/* Purple morphing blob */}
            <div className="absolute inset-0 bg-gradient-radial from-[#4A4FFF]/60 via-purple-600/40 to-transparent blur-[140px] animate-aurora animate-morph" />
            
            {/* Cyan morphing blob */}
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/50 via-blue-500/35 to-transparent blur-[140px] animate-aurora-2 animate-morph" style={{ animationDelay: '3s' }} />
            
            {/* Pink/Magenta morphing blob */}
            <div className="absolute inset-0 bg-gradient-radial from-pink-500/45 via-purple-500/30 to-transparent blur-[120px] animate-aurora-3 animate-morph" style={{ animationDelay: '6s' }} />
          </div>
          
          {/* Animated particle system - Fixed positions to avoid hydration issues */}
          <div className="absolute inset-0">
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '10%', top: '20%', animationDelay: '0s', animationDuration: '8s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '25%', top: '60%', animationDelay: '1s', animationDuration: '7s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '40%', top: '35%', animationDelay: '2s', animationDuration: '9s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '55%', top: '75%', animationDelay: '0.5s', animationDuration: '6.5s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '70%', top: '45%', animationDelay: '1.5s', animationDuration: '8.5s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '85%', top: '15%', animationDelay: '3s', animationDuration: '7.5s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '15%', top: '80%', animationDelay: '2.5s', animationDuration: '9.5s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '30%', top: '10%', animationDelay: '4s', animationDuration: '6s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '45%', top: '90%', animationDelay: '1.2s', animationDuration: '8.2s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '60%', top: '25%', animationDelay: '3.5s', animationDuration: '7.8s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '75%', top: '65%', animationDelay: '0.8s', animationDuration: '9.2s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '90%', top: '50%', animationDelay: '2.2s', animationDuration: '6.8s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '20%', top: '40%', animationDelay: '4.5s', animationDuration: '8.8s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '35%', top: '70%', animationDelay: '1.8s', animationDuration: '7.2s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '50%', top: '5%', animationDelay: '3.2s', animationDuration: '9.8s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '65%', top: '85%', animationDelay: '0.3s', animationDuration: '6.3s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '80%', top: '30%', animationDelay: '2.8s', animationDuration: '8.3s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '5%', top: '55%', animationDelay: '4.2s', animationDuration: '7.7s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '95%', top: '78%', animationDelay: '1.3s', animationDuration: '9.3s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-particle-float" style={{ left: '12%', top: '95%', animationDelay: '3.8s', animationDuration: '6.5s' }} />
          </div>
          
          {/* Premium floating geometric shapes with glow */}
          <div className="absolute top-[15%] left-[10%] w-32 h-32 border-2 border-purple-500/40 rounded-2xl rotate-12 animate-float-shapes backdrop-blur-sm bg-purple-500/5 animate-glow-border" />
          <div className="absolute top-[60%] right-[15%] w-24 h-24 border-2 border-cyan-500/40 rounded-full animate-float-shapes-reverse backdrop-blur-sm bg-cyan-500/5 animate-glow-border" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-[20%] left-[20%] w-20 h-20 border-2 border-pink-500/40 rounded-lg rotate-45 animate-float-shapes backdrop-blur-sm bg-pink-500/5 animate-glow-border" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[40%] right-[8%] w-16 h-16 border-2 border-blue-500/40 animate-float-shapes-reverse backdrop-blur-sm bg-blue-500/5 animate-glow-border" style={{ animationDelay: '1.5s', borderRadius: '30%' }} />
          <div className="absolute top-[25%] left-[40%] w-12 h-12 border-2 border-purple-500/40 rounded-xl rotate-12 animate-float-shapes backdrop-blur-sm bg-purple-500/5" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-[35%] right-[30%] w-14 h-14 border-2 border-cyan-500/40 rounded-full animate-float-shapes-reverse backdrop-blur-sm bg-cyan-500/5" style={{ animationDelay: '2.5s' }} />
          
          {/* Large pulsing glow orbs for depth */}
          <div className="absolute top-[25%] right-[25%] w-80 h-80 bg-[#4A4FFF]/40 rounded-full animate-pulse-glow" />
          <div className="absolute bottom-[30%] left-[30%] w-64 h-64 bg-cyan-500/35 rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-[50%] left-[15%] w-56 h-56 bg-pink-500/30 rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }} />
          
          {/* Animated grid overlay - Matrix style */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4A4FFF12_1px,transparent_1px),linear-gradient(to_bottom,#4A4FFF12_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" style={{ animationDuration: '4s' }} />
          
          {/* Radial spotlight with color - Multi-layered */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(74,79,255,0.4),rgba(139,92,246,0.2)_40%,transparent_70%)]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.3),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.25),transparent_60%)]" />
          
          {/* Noise texture for film grain effect */}
          <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] mix-blend-overlay" />
          
          {/* Spotlight beam effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-white/20 via-purple-500/20 to-transparent blur-sm" />
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-white/10 via-cyan-500/10 to-transparent blur-sm" style={{ animationDelay: '2s' }} />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-white/10 via-pink-500/10 to-transparent blur-sm" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-slide-up">
            {/* Premium Trust Badges with Enhanced Animation */}
            <div className="inline-flex items-center gap-3 mb-8 flex-wrap justify-center">
              {TRUST_BADGES.slice(0, 3).map((badge, index) => (
                <div 
                  key={badge.name} 
                  className="glass flex items-center gap-2 px-5 py-2.5 rounded-full shadow-premium hover:scale-105 hover:shadow-premium-lg transition-all duration-300 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} color="#F59E0B" fill="#F59E0B" className="group-hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-800">{badge.rating} on {badge.name}</span>
                </div>
              ))}
            </div>
            
            {/* Enhanced Headline with Animated Gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 md:mb-8 leading-[1.15] tracking-tight px-4">
              <span className="text-white">Create Amazing Content</span>
              <br />
              <span className="text-white">with </span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x relative">
                AI Power
                <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 -z-10" />
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium px-4">
              {BRAND.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in-delayed mb-6 px-4">
              <Link href={isLoggedIn ? "/dashboard" : "/signup"} className="w-full sm:w-auto group">
                <button className="relative w-full sm:w-auto btn-premium px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#5B4FFF] via-[#7C3AED] to-[#DB2777] text-white font-bold rounded-2xl shadow-[0_20px_50px_rgba(91,79,255,0.4)] hover:shadow-[0_20px_70px_rgba(91,79,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg overflow-hidden">
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">{isLoggedIn ? "Go to Dashboard" : "Start Free - No Credit Card"}</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="w-full sm:w-auto backdrop-blur-xl bg-white/10 px-8 md:px-10 py-4 md:py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:border-white/40 hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg text-base md:text-lg group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Play size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300 font-medium px-4 flex-wrap">
              <span className="flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/10 px-3 sm:px-4 py-2 rounded-full hover:bg-white/20 hover:border-white/20 transition-all duration-300 group whitespace-nowrap">
                <CheckCircle size={14} className="text-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="group-hover:text-white transition-colors text-xs sm:text-sm">Join 50,000+ creators</span>
              </span>
              <span className="flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/10 px-3 sm:px-4 py-2 rounded-full hover:bg-white/20 hover:border-white/20 transition-all duration-300 group whitespace-nowrap">
                <CheckCircle size={14} className="text-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="group-hover:text-white transition-colors text-xs sm:text-sm">Free forever plan</span>
              </span>
            </div>
          </div>

          {/* Sticky CTA for Mobile */}
          <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-[#0A0A0F]/98 backdrop-blur-md border-t border-white/10 md:hidden animate-slide-up safe-area-bottom">
            <Link href={isLoggedIn ? "/dashboard" : "/signup"} className="block">
              <button className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#5B4FFF] via-[#7C3AED] to-[#DB2777] text-white font-bold rounded-xl shadow-[0_20px_50px_rgba(91,79,255,0.4)] hover:shadow-[0_20px_70px_rgba(91,79,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                {isLoggedIn ? "Go to Dashboard" : "Start Free Now"}
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          {/* Premium Live Stats with 3D Hover Effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-4 lg:gap-6 mt-16 md:mt-20 max-w-5xl mx-auto px-4">
            {[
              { number: 50000, label: 'Active Users', suffix: '+', gradient: 'from-cyan-400 to-blue-500', glow: 'rgba(6, 182, 212, 0.3)' },
              { number: 5, label: 'Million Content Created', suffix: 'M+', gradient: 'from-purple-400 to-pink-500', glow: 'rgba(168, 85, 247, 0.3)' },
              { number: 98, label: 'Satisfaction Rate', suffix: '%', gradient: 'from-orange-400 to-red-500', glow: 'rgba(251, 146, 60, 0.3)' },
              { number: 100, label: 'Hours Saved', suffix: 'K+', gradient: 'from-green-400 to-teal-500', glow: 'rgba(34, 197, 94, 0.3)' },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="text-center p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-xl bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-500 animate-scale-in group cursor-pointer hover:-translate-y-2 relative overflow-hidden"
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  transform: 'perspective(1000px)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ background: stat.glow }} />
                <div className={`relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <CountUpAnimation end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="relative z-10 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-300 group-hover:text-white font-semibold mt-1 md:mt-2 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Tools Section */}
        <section aria-label="Tools" className="py-16 sm:py-20 md:py-24 px-4 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge variant="primary" className="mb-4 sm:mb-6 inline-flex items-center gap-2 shadow-lg text-xs sm:text-sm">
              <Target size={14} />
              AI-Powered Tools
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0E0E11] mb-4 sm:mb-6 tracking-tight px-4">
              8 Powerful AI Tools
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium px-4">Everything you need for content creation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TOOLS.map((tool, i) => (
              <div
                key={tool.id}
                className="card-premium group p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass hover:bg-white hover:shadow-premium transition-all duration-500 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#4A4FFF]/10 to-purple-500/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                  <IconRenderer 
                    name={tool.iconName as any} 
                    size={24} 
                    color={tool.color} 
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0E0E11] mb-2 sm:mb-2.5 group-hover:text-[#4A4FFF] transition-colors">{tool.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* Try It Now Section - Interactive Demo */}
        <TryItNow />

        {/* Use Cases Section */}
        <UseCases />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Social Proof Bar */}
        <section aria-label="Social proof" className="py-8 px-4 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 text-sm font-semibold mb-4">TRUSTED BY LEADING BRANDS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechFlow', 'BrandBoost', 'StyleHub', 'ContentKing', 'SocialPro', 'MarketMind'].map((brand) => (
              <div key={brand} className="text-2xl font-bold text-gray-400">{brand}</div>
            ))}
          </div>
        </div>
      </section>

        {/* Features Section */}
        <section id="features" aria-label="Features" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA] relative overflow-hidden">
        <div className="gradient-mesh absolute inset-0 opacity-50"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge variant="primary" className="mb-4 sm:mb-6 inline-flex items-center gap-2 shadow-lg text-xs sm:text-sm">
              <Zap size={14} />
              Powerful Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0E0E11] mb-4 sm:mb-6 tracking-tight px-4">
              Everything You Need to <GradientText>Create</GradientText>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium px-4">Industry-leading features designed for creators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {FEATURES.map((feature, i) => (
              <GlowEffect key={feature.title} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="card-premium p-6 sm:p-8 md:p-10 glass hover:bg-white rounded-2xl sm:rounded-3xl h-full transition-all duration-500 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#4A4FFF] via-[#5B5FFF] to-[#764ba2] flex items-center justify-center mb-4 sm:mb-6 shadow-premium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconRenderer 
                      name={feature.iconName as any} 
                      size={28} 
                      color="white" 
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E11] mb-3 sm:mb-4 group-hover:text-[#4A4FFF] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
              </GlowEffect>
            ))}
          </div>
        </div>
      </section>

        {/* Trust Signals Section */}
        <TrustSignals />

        {/* Testimonials Section */}
        <section aria-label="Testimonials" className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="success" className="mb-3 sm:mb-4 inline-flex items-center gap-2 text-xs sm:text-sm">
              <Award size={14} />
              Customer Love
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E0E11] mb-3 sm:mb-4 px-4">
              Loved by <GradientText>50,000+</GradientText> Creators
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                text={testimonial.text}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

        {/* Comparison Section */}
        <Comparison />

        {/* Pricing Section */}
        <section aria-label="Pricing" className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#F5F7FA] to-white pb-24 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="purple" className="mb-3 sm:mb-4 inline-flex items-center gap-2 text-xs sm:text-sm">
              <Target size={14} />
              Pricing Plans
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E0E11] mb-3 sm:mb-4 px-4">
              Start Free, Scale as You <GradientText>Grow</GradientText>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">No credit card required • Cancel anytime</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRICING_PLANS.map((plan, i) => (
              <AnimatedCard
                key={plan.id}
                delay={i * 100}
                className={`
                  relative overflow-hidden
                  ${plan.featured ? 'border-[#4A4FFF] bg-gradient-to-br from-[#4A4FFF]/5 to-[#2E30B0]/5 ring-2 ring-[#4A4FFF]/20 md:scale-105 shadow-xl' : ''}
                `}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-[#4A4FFF] to-[#2E30B0] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      POPULAR
                    </div>
                  </div>
                )}
                
                {plan.id === 'free' && (
                  <div className="absolute top-0 right-0">
                    <Badge variant="success" size="sm" className="m-2">FREE</Badge>
                  </div>
                )}
                
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E11] mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{plan.description}</p>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-[#0E0E11]">${plan.price}</span>
                    <span className="text-gray-600 text-sm">/mo</span>
                  </div>
                  {plan.id === 'free' && (
                    <p className="text-xs text-gray-500 mt-1">No credit card required</p>
                  )}
                </div>

                <Link href={isLoggedIn ? "/dashboard" : "/signup"} className="w-full block mb-4 sm:mb-6">
                  <button
                    className={`w-full py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base ${
                      plan.featured
                        ? 'bg-gradient-to-r from-[#4A4FFF] to-[#2E30B0] text-white hover:shadow-lg hover:shadow-[#4A4FFF]/40 transform hover:-translate-y-0.5'
                        : 'border-2 border-[#4A4FFF] text-[#4A4FFF] hover:bg-[#4A4FFF]/5'
                    }`}
                  >
                    {isLoggedIn ? "Go to Dashboard" : (plan.id === 'free' ? 'Start Free' : 'Get Started')}
                  </button>
                </Link>

                <div className="border-t border-gray-200 pt-4 sm:pt-6 space-y-2 sm:space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#4A4FFF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-[#4A4FFF] font-semibold hover:gap-3 transition-all text-sm sm:text-base">
              Compare all features <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section aria-label="Call to action" className="relative py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-r from-[#0E0E11] to-[#1a1a1f] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#4A4FFF]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4A4FFF]/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-slide-up px-4">
            Ready to 10X Your Content?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 animate-fade-in-delayed px-4">
            Join 50,000+ creators already using {BRAND.name}. Start for free, no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
            <Link href={isLoggedIn ? "/dashboard" : "/signup"} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#0E0E11] font-bold rounded-xl hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group text-base sm:text-lg">
                {isLoggedIn ? "Go to Dashboard" : "Start Free Now"}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            {!isLoggedIn && (
              <Link href="/pricing" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-base sm:text-lg">
                  View All Plans
                </button>
              </Link>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm px-4">
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        </section>
      </main>

    </div>
  )
}
