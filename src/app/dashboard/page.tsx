'use client'

import { useState, useEffect } from 'react'
import { BRAND, TOOLS } from '@/lib/constants'
import { IconRenderer } from '@/components/IconRenderer'
import { Sparkles, TrendingUp, Clock, FileText, Star, Download, Settings as SettingsIcon } from '@/components/Icons'
import Badge from '@/components/Badge'
import Link from 'next/link'
import { DashboardSkeleton } from '@/components/SkeletonLoader'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)

  // Simulate initial data load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <DashboardSkeleton />
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="gradient-mesh absolute inset-0"></div>
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#4A4FFF]/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float-smooth" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/15 via-[#4A4FFF]/10 to-transparent rounded-full blur-3xl animate-float-smooth" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <Badge variant="primary" className="mb-4 inline-flex items-center gap-2">
                <Sparkles size={14} />
                Dashboard
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4FFF] to-purple-600">{BRAND.name}</span>
              </h1>
              <p className="text-xl text-gray-600 font-medium">Start creating amazing content with AI</p>
            </div>
            <Link href="/account">
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#4A4FFF] hover:text-[#4A4FFF] transition-all flex items-center gap-2">
                <SettingsIcon size={20} />
                Account Settings
              </button>
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex gap-6 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'tools', label: 'AI Tools' },
              { id: 'history', label: 'History' },
              { id: 'favorites', label: 'Favorites' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id 
                    ? 'text-[#4A4FFF] border-b-2 border-[#4A4FFF]' 
                    : 'text-gray-600 hover:text-[#4A4FFF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: FileText, label: 'Content Created', value: '0', color: 'from-blue-500 to-cyan-500' },
            { icon: TrendingUp, label: 'This Month', value: '0', color: 'from-purple-500 to-pink-500' },
            { icon: Clock, label: 'Time Saved', value: '0h', color: 'from-orange-500 to-red-500' },
            { icon: Sparkles, label: 'Tools Used', value: '0/8', color: 'from-green-500 to-teal-500' }
          ].map((stat, i) => (
            <div key={i} className="card-premium p-6 rounded-2xl glass hover:shadow-premium transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon size={24} color="white" />
              </div>
              <div className="text-3xl font-bold text-[#0E0E11] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0E0E11] mb-6">Your AI Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOOLS.map((tool) => (
              <button
                key={tool.id}
                className="card-premium group p-6 rounded-2xl glass hover:bg-white hover:shadow-premium transition-all duration-300 text-left relative"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star size={18} color="#4A4FFF" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4A4FFF]/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <IconRenderer 
                    name={tool.iconName as any} 
                    size={24} 
                    color={tool.color} 
                  />
                </div>
                <h3 className="text-base font-bold text-[#0E0E11] mb-2 group-hover:text-[#4A4FFF] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                <div className="text-xs text-gray-500">Used 0 times</div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card-premium p-8 rounded-3xl glass">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#0E0E11]">Recent Content</h3>
              <button className="text-sm text-[#4A4FFF] font-semibold hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#0E0E11] mb-1">Content Title #{item}</div>
                      <div className="text-xs text-gray-500">2 hours ago • Social Caption</div>
                    </div>
                    <Download size={16} className="text-gray-400 hover:text-[#4A4FFF] transition-colors" />
                  </div>
                </div>
              ))}
            </div>
            {activeTab === 'overview' && (
              <div className="text-center py-8 text-gray-500 text-sm">
                No content created yet. Start using AI tools above!
              </div>
            )}
          </div>

          <div className="card-premium p-8 rounded-3xl glass">
            <h3 className="text-xl font-bold text-[#0E0E11] mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full p-4 text-left bg-gradient-to-r from-[#4A4FFF] to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-between group">
                <span>Generate Caption</span>
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
              <button className="w-full p-4 text-left border-2 border-[#4A4FFF] text-[#4A4FFF] rounded-xl font-semibold hover:bg-[#4A4FFF]/5 transition-all flex items-center justify-between">
                <span>Create Blog Post</span>
                <FileText size={20} />
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#4A4FFF] hover:text-[#4A4FFF] transition-all flex items-center justify-between">
                <span>View History</span>
                <Clock size={20} />
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#4A4FFF] hover:text-[#4A4FFF] transition-all flex items-center justify-between">
                <span>My Favorites</span>
                <Star size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="card-premium p-6 rounded-2xl glass bg-gradient-to-r from-[#4A4FFF]/5 to-purple-500/5 border-2 border-[#4A4FFF]/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#4A4FFF] to-purple-600 flex items-center justify-center flex-shrink-0">
              <Sparkles size={20} color="white" />
            </div>
            <div>
              <h4 className="font-bold text-[#0E0E11] mb-1">Pro Tip</h4>
              <p className="text-sm text-gray-600">Save your favorite prompts and outputs to quickly access them later. Click the star icon on any tool to add it to favorites!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
