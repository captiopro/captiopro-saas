'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { BRAND } from '@/lib/constants'
import { GradientText } from '@/components'
import { Smartphone, Video, Sparkles, ShoppingBag, Search, BookOpen, Calendar, Clock, ArrowRight } from '@/components/Icons'
import { BlogCardSkeleton } from '@/components/SkeletonLoader'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(true)

  // Simulate blog posts loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [selectedCategory]) // Reload when category changes

  const categories = ['All', 'Social Media', 'AI & Tech', 'Video Marketing', 'E-Commerce', 'SEO']

  const posts = [
    {
      id: 1,
      title: '10 Tips for Writing Viral Social Media Captions',
      excerpt: 'Learn the best practices for creating engaging social media content that drives engagement and followers.',
      date: 'January 2, 2025',
      readTime: '5 min read',
      category: 'Social Media',
      icon: Smartphone,
      author: 'Sarah Johnson',
      views: '2.4K',
    },
    {
      id: 2,
      title: 'How AI is Transforming Content Creation',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way creators produce content at scale.',
      date: 'December 28, 2024',
      readTime: '8 min read',
      category: 'AI & Tech',
      icon: Sparkles,
      author: 'Mike Chen',
      views: '3.1K',
    },
    {
      id: 3,
      title: 'The Ultimate Guide to YouTube SEO',
      excerpt: 'Master YouTube\'s algorithm and learn how to optimize your titles, descriptions, and tags for maximum visibility.',
      date: 'December 22, 2024',
      readTime: '10 min read',
      category: 'Video Marketing',
      icon: Video,
      author: 'Alex Rivera',
      views: '5.2K',
    },
    {
      id: 4,
      title: 'TikTok Content Strategy for Beginners',
      excerpt: 'Start your TikTok journey with proven strategies for growing your audience and getting viral.',
      date: 'December 15, 2024',
      readTime: '7 min read',
      category: 'Social Media',
      icon: Sparkles,
      author: 'Emma Davis',
      views: '4.8K',
    },
    {
      id: 5,
      title: 'Writing Product Descriptions That Convert',
      excerpt: 'Learn copywriting techniques to write product descriptions that drive sales and customer satisfaction.',
      date: 'December 8, 2024',
      readTime: '6 min read',
      category: 'E-Commerce',
      icon: ShoppingBag,
      author: 'Chris Martinez',
      views: '1.9K',
    },
    {
      id: 6,
      title: 'SEO Keywords: Complete Research Guide',
      excerpt: 'Master keyword research to understand what your audience is searching for and how to rank.',
      date: 'December 1, 2024',
      readTime: '9 min read',
      category: 'SEO',
      icon: Search,
      author: 'Lisa Wong',
      views: '3.7K',
    },
  ]

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

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
            <BookOpen size={20} className="text-[#4A4FFF]" />
            <span className="text-sm font-bold text-[#0E0E11]">Content Creation Blog</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            {BRAND.name} <GradientText>Blog</GradientText>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Expert insights, proven strategies, and the latest trends in AI-powered content creation
          </p>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white shadow-premium'
                    : 'glass text-gray-700 hover:bg-white/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { label: 'Articles Published', value: '150+', icon: BookOpen },
              { label: 'Expert Authors', value: '12', icon: Sparkles },
              { label: 'Monthly Readers', value: '50K+', icon: Search },
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Show skeleton cards while loading
              Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))
            ) : (
              // Show actual blog posts
              filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="glass rounded-3xl overflow-hidden hover:shadow-premium hover:scale-105 transition-all duration-300 group"
                >
                  {/* Image Header */}
                  <div className="h-48 bg-gradient-to-br from-[#4A4FFF]/10 to-purple-500/5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center">
                      <post.icon size={32} color="white" />
                    </div>
                  </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#4A4FFF] bg-[#4A4FFF]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{post.views} views</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0E0E11] mb-3 line-clamp-2 group-hover:text-[#4A4FFF] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span className="font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} />
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold rounded-xl hover:shadow-premium transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                    Read Article <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#4A4FFF]/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center shadow-premium-lg">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center mx-auto mb-6">
              <Sparkles size={32} color="white" />
            </div>
            
            <h2 className="text-4xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
              Never Miss an Update
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get weekly insights, AI tips, and exclusive content delivered straight to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] placeholder-gray-400 font-medium"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold rounded-2xl hover:shadow-premium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={20} />
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 font-medium">Join 10,000+ subscribers. Unsubscribe anytime.</p>
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
