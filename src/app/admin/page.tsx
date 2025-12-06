'use client'

import { useState } from 'react'
import { BRAND } from '@/lib/constants'
import { Users, FileText, Shield, TrendingUp, Settings, CheckCircle, Star } from '@/components/Icons'
import Badge from '@/components/Badge'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="gradient-mesh absolute inset-0"></div>
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#4A4FFF]/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float-smooth" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/15 via-[#4A4FFF]/10 to-transparent rounded-full blur-3xl animate-float-smooth" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <Badge variant="purple" className="mb-4 inline-flex items-center gap-2">
            <Shield size={14} />
            Admin Panel
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4FFF] to-purple-600">{BRAND.name}</span> Administration
          </h1>
          <p className="text-xl text-gray-600 font-medium">Manage your platform and users</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex gap-6 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'users', label: 'Users' },
              { id: 'content', label: 'Content' },
              { id: 'settings', label: 'Settings' }
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
            { icon: Users, label: 'Total Users', value: '0', subtext: '+0 this week', color: 'from-blue-500 to-cyan-500' },
            { icon: FileText, label: 'Content Generated', value: '0', subtext: '+0 today', color: 'from-purple-500 to-pink-500' },
            { icon: TrendingUp, label: 'Active Today', value: '0', subtext: '0% increase', color: 'from-orange-500 to-red-500' },
            { icon: Shield, label: 'System Status', value: 'Online', subtext: '99.9% uptime', color: 'from-green-500 to-teal-500' }
          ].map((stat, i) => (
            <div key={i} className="card-premium p-6 rounded-2xl glass hover:shadow-premium transition-all duration-300">
              <div className={'w-12 h-12 rounded-xl bg-gradient-to-br ' + stat.color + ' flex items-center justify-center mb-4'}>
                <stat.icon size={24} color="white" />
              </div>
              <div className="text-3xl font-bold text-[#0E0E11] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.subtext}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* User Management */}
          <div className="card-premium p-8 rounded-3xl glass">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users size={24} color="white" />
              </div>
              <h2 className="text-xl font-bold text-[#0E0E11]">User Management</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11] flex items-center justify-between">
                <span>View All Users</span>
                <span className="text-sm text-gray-500">0</span>
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11] flex items-center justify-between">
                <span>Manage Subscriptions</span>
                <Star size={18} className="text-yellow-500" />
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11]">
                User Analytics
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11]">
                Export User Data
              </button>
            </div>
          </div>

          {/* Content Management */}
          <div className="card-premium p-8 rounded-3xl glass">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <FileText size={24} color="white" />
              </div>
              <h2 className="text-xl font-bold text-[#0E0E11]">Content</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11] flex items-center justify-between">
                <span>All Content</span>
                <span className="text-sm text-gray-500">0</span>
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11]">
                Flagged Content
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11]">
                Usage Statistics
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11]">
                Content Reports
              </button>
            </div>
          </div>

          {/* System Settings */}
          <div className="card-premium p-8 rounded-3xl glass">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Settings size={24} color="white" />
              </div>
              <h2 className="text-xl font-bold text-[#0E0E11]">System</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11]">
                Platform Settings
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11]">
                API Management
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11] flex items-center justify-between">
                <span>Security</span>
                <Shield size={18} className="text-green-500" />
              </button>
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all font-semibold text-[#0E0E11]">
                Backup & Recovery
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity & Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-premium p-8 rounded-3xl glass">
            <h3 className="text-xl font-bold text-[#0E0E11] mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4A4FFF] mt-2"></div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#0E0E11] mb-1">System Activity #{item}</div>
                      <div className="text-xs text-gray-500">Just now</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center py-6 text-gray-500 text-sm">
                No recent activity
              </div>
            </div>
          </div>

          <div className="card-premium p-8 rounded-3xl glass">
            <h3 className="text-xl font-bold text-[#0E0E11] mb-6">System Alerts</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-green-900 mb-1">All Systems Operational</div>
                  <div className="text-xs text-green-700">Everything is running smoothly</div>
                </div>
              </div>
              <div className="text-center py-6 text-gray-500 text-sm">
                No alerts at this time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
