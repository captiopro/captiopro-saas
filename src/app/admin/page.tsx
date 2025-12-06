'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { BRAND } from '@/lib/constants'
import { Users, FileText, Shield, TrendingUp, Settings, CheckCircle, Star, CreditCard, BarChart, Download } from '@/components/Icons'
import Badge from '@/components/Badge'
import { authService, User } from '@/lib/auth'

export default function AdminPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  // Check admin authentication
  useEffect(() => {
    const checkAuth = () => {
      if (!authService.isAuthenticated()) {
        router.push('/login')
        return
      }
      
      const currentUser = authService.getCurrentUser()
      
      // Check if user is admin
      if (!currentUser?.isAdmin) {
        router.push('/dashboard')
        return
      }
      
      setUser(currentUser)
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4A4FFF]"></div>
      </div>
    )
  }

  // Mock data - replace with real API calls
  const stats = {
    totalUsers: 1247,
    activeUsers: 892,
    totalContent: 15673,
    monthlyRevenue: 24580,
    growthRate: 23.5,
  }

  const recentUsers = [
    { name: 'John Doe', email: 'john@example.com', plan: 'Premium', joinedDays: 2 },
    { name: 'Jane Smith', email: 'jane@example.com', plan: 'Free', joinedDays: 5 },
    { name: 'Mike Johnson', email: 'mike@example.com', plan: 'Pro', joinedDays: 7 },
    { name: 'Sarah Wilson', email: 'sarah@example.com', plan: 'Premium', joinedDays: 14 },
  ]

  const contentStats = [
    { type: 'Captions', count: 5432, percentage: 35 },
    { type: 'Hashtags', count: 3891, percentage: 25 },
    { type: 'Bio', count: 2876, percentage: 18 },
    { type: 'Story Ideas', count: 3474, percentage: 22 },
  ]

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

        {/* Overview Tab - Stats Cards */}
        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="card-premium p-6 rounded-2xl glass hover:shadow-premium transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Users size={24} color="white" />
                  </div>
                  <Badge variant="primary">+12%</Badge>
                </div>
                <div className="text-3xl font-bold text-[#0E0E11] mb-1">{stats.totalUsers.toLocaleString()}</div>
                <div className="text-sm text-gray-600 font-semibold">Total Users</div>
              </div>

              <div className="card-premium p-6 rounded-2xl glass hover:shadow-premium transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <CheckCircle size={24} color="white" />
                  </div>
                  <Badge variant="success">Live</Badge>
                </div>
                <div className="text-3xl font-bold text-[#0E0E11] mb-1">{stats.activeUsers.toLocaleString()}</div>
                <div className="text-sm text-gray-600 font-semibold">Active Users</div>
              </div>

              <div className="card-premium p-6 rounded-2xl glass hover:shadow-premium transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <FileText size={24} color="white" />
                  </div>
                  <Badge variant="purple">+8%</Badge>
                </div>
                <div className="text-3xl font-bold text-[#0E0E11] mb-1">{stats.totalContent.toLocaleString()}</div>
                <div className="text-sm text-gray-600 font-semibold">Content Generated</div>
              </div>

              <div className="card-premium p-6 rounded-2xl glass hover:shadow-premium transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <CreditCard size={24} color="white" />
                  </div>
                  <Badge variant="primary">+{stats.growthRate}%</Badge>
                </div>
                <div className="text-3xl font-bold text-[#0E0E11] mb-1">${stats.monthlyRevenue.toLocaleString()}</div>
                <div className="text-sm text-gray-600 font-semibold">Monthly Revenue</div>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="card-premium p-8 rounded-3xl glass mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0E0E11] mb-2">User Growth</h2>
                  <p className="text-gray-600">Last 7 days overview</p>
                </div>
                <button className="px-4 py-2 border-2 border-gray-300 rounded-xl font-semibold hover:border-[#4A4FFF] transition-all flex items-center gap-2">
                  <Download size={18} />
                  Export
                </button>
              </div>
              
              {/* Simple Bar Chart */}
              <div className="flex items-end justify-between gap-4 h-64">
                {[42, 55, 48, 62, 58, 71, 85].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gradient-to-t from-[#4A4FFF] to-purple-500 rounded-t-lg hover:opacity-80 transition-opacity relative group" 
                         style={{ height: `${value}%` }}>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0E0E11] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        {Math.round(stats.totalUsers * value / 100)}
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Recent Users */}
              <div className="card-premium p-8 rounded-3xl glass">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#0E0E11]">Recent Users</h2>
                  <Badge variant="primary">{recentUsers.length} new</Badge>
                </div>
                <div className="space-y-4">
                  {recentUsers.map((usr, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A4FFF] to-purple-600 flex items-center justify-center text-white font-bold">
                          {usr.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-[#0E0E11]">{usr.name}</div>
                          <div className="text-sm text-gray-500">{usr.email}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={usr.plan === 'Premium' ? 'primary' : usr.plan === 'Pro' ? 'purple' : 'info'}>
                          {usr.plan}
                        </Badge>
                        <div className="text-xs text-gray-500 mt-1">{usr.joinedDays}d ago</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Stats */}
              <div className="card-premium p-8 rounded-3xl glass">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#0E0E11]">Content Distribution</h2>
                  <BarChart size={24} className="text-[#4A4FFF]" />
                </div>
                <div className="space-y-6">
                  {contentStats.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-[#0E0E11]">{item.type}</span>
                        <span className="text-sm text-gray-600">{item.count.toLocaleString()} ({item.percentage}%)</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#4A4FFF] to-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-premium p-8 rounded-3xl glass">
              <h2 className="text-2xl font-bold text-[#0E0E11] mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button onClick={() => setActiveTab('users')} className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all text-center group">
                  <Users size={32} className="mx-auto mb-3 text-[#4A4FFF] group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-[#0E0E11]">Manage Users</div>
                </button>
                <button onClick={() => setActiveTab('content')} className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all text-center group">
                  <FileText size={32} className="mx-auto mb-3 text-[#4A4FFF] group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-[#0E0E11]">View Content</div>
                </button>
                <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all text-center group">
                  <BarChart size={32} className="mx-auto mb-3 text-[#4A4FFF] group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-[#0E0E11]">Analytics</div>
                </button>
                <button onClick={() => setActiveTab('settings')} className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#4A4FFF] hover:bg-[#4A4FFF]/5 transition-all text-center group">
                  <Settings size={32} className="mx-auto mb-3 text-[#4A4FFF] group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-[#0E0E11]">Settings</div>
                </button>
              </div>
            </div>
          </>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="card-premium p-8 rounded-3xl glass">
            <h2 className="text-2xl font-bold text-[#0E0E11] mb-6">User Management</h2>
            <p className="text-gray-600">User management features coming soon...</p>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="card-premium p-8 rounded-3xl glass">
            <h2 className="text-2xl font-bold text-[#0E0E11] mb-6">Content Management</h2>
            <p className="text-gray-600">Content management features coming soon...</p>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="card-premium p-8 rounded-3xl glass">
            <h2 className="text-2xl font-bold text-[#0E0E11] mb-6">System Settings</h2>
            <p className="text-gray-600">System settings coming soon...</p>
          </div>
        )}

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
