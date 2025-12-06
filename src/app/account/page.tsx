'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { BRAND } from '@/lib/constants'
import { Settings, User, CreditCard, Bell, Shield, Key, LogOut, Edit, Save, Eye, EyeOff, Trash2, Download, CheckCircle } from '@/components/Icons'
import { authService, User as UserType } from '@/lib/auth'

export default function AccountPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [user, setUser] = useState<UserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication and load user data
  useEffect(() => {
    const checkAuth = () => {
      if (!authService.isAuthenticated()) {
        router.push('/login')
        return
      }
      
      const currentUser = authService.getCurrentUser()
      setUser(currentUser)
      
      if (currentUser) {
        setFormData({
          name: currentUser.name || 'User',
          email: currentUser.email || '',
          company: 'Acme Inc',
          phone: '+1 (555) 123-4567',
        })
      }
      
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  const [formData, setFormData] = useState({
    name: 'User',
    email: 'user@example.com',
    company: 'Acme Inc',
    phone: '+1 (555) 123-4567',
  })

  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  })

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    productNews: false,
    weeklyDigest: true,
    marketingEmails: false,
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'password', label: 'Password', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'api', label: 'API Keys', icon: Key },
  ]

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSaving(false)
    setIsEditing(false)
    setSuccessMessage('Changes saved successfully!')
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const handlePasswordChange = async () => {
    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSaving(false)
    setPasswordData({ current: '', new: '', confirm: '' })
    setSuccessMessage('Password updated successfully!')
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#4A4FFF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="glass border-b border-gray-200 sticky top-16 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-[#0E0E11] tracking-tight">Account Settings</h1>
              <p className="text-gray-600 mt-1">Manage your account preferences and settings • {user?.plan || 'Free'} Plan</p>
            </div>
            <Link href="/dashboard" className="px-4 py-2 glass rounded-xl hover:bg-white/60 transition-all font-bold text-[#0E0E11] flex items-center gap-2">
              ← Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium flex items-center gap-2">
            <CheckCircle size={20} />
            {successMessage}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass rounded-3xl p-4 space-y-2 sticky top-32">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all flex items-center gap-3 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white shadow-premium'
                      : 'text-gray-700 hover:bg-white/60'
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={() => {
                    authService.logout()
                    window.dispatchEvent(new Event('authChange'))
                    router.push('/login')
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl font-bold text-red-600 hover:bg-red-50 transition-all flex items-center gap-3"
                >
                  <LogOut size={20} />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <>
                <div className="glass rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-extrabold text-[#0E0E11] tracking-tight">Profile Information</h2>
                    {!isEditing ? (
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 glass rounded-xl hover:bg-white/60 transition-all font-bold text-[#0E0E11] flex items-center gap-2"
                      >
                        <Edit size={18} />
                        Edit
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 glass rounded-xl hover:bg-white/60 transition-all font-bold text-gray-700"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={handleSave}
                          disabled={isSaving}
                          className="px-4 py-2 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold rounded-xl shadow-premium hover:shadow-premium-lg transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                          {isSaving ? 'Saving...' : (
                            <>
                              <Save size={18} />
                              Save
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-6 pb-6 border-b border-gray-200">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center text-white text-4xl font-bold">
                        {formData.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-[#0E0E11] text-xl">{formData.name}</h3>
                        <p className="text-gray-600 mb-2">{formData.email}</p>
                        {isEditing && (
                          <button className="text-[#4A4FFF] hover:underline font-bold text-sm">
                            Change photo
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={!isEditing}
                          className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={!isEditing}
                          className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          disabled={!isEditing}
                          placeholder="Your Company"
                          className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] font-medium placeholder-gray-400 disabled:opacity-60 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          disabled={!isEditing}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] font-medium placeholder-gray-400 disabled:opacity-60 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Member Since', value: 'Jan 2025', icon: User },
                    { label: 'Content Generated', value: '1,234', icon: Edit },
                    { label: 'Account Status', value: 'Active', icon: CheckCircle },
                  ].map((stat, i) => (
                    <div key={i} className="glass rounded-2xl p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${i === 0 ? 'from-blue-500 to-cyan-500' : i === 1 ? 'from-purple-500 to-pink-500' : 'from-green-500 to-teal-500'} flex items-center justify-center mb-4`}>
                        <stat.icon size={24} color="white" />
                      </div>
                      <div className="text-3xl font-extrabold text-[#0E0E11] mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Password Tab */}
            {activeTab === 'password' && (
              <div className="glass rounded-3xl p-8">
                <h2 className="text-2xl font-extrabold text-[#0E0E11] mb-2 tracking-tight">Change Password</h2>
                <p className="text-gray-600 mb-6">Ensure your account is using a long, random password to stay secure</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        value={passwordData.current}
                        onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                        placeholder="Enter current password"
                        className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] font-medium placeholder-gray-400 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#4A4FFF] transition-colors"
                      >
                        {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        value={passwordData.new}
                        onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                        placeholder="Enter new password"
                        className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] font-medium placeholder-gray-400 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#4A4FFF] transition-colors"
                      >
                        {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-medium">Must be at least 8 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.confirm}
                      onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                      placeholder="Confirm new password"
                      className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] font-medium placeholder-gray-400"
                    />
                  </div>

                  <button
                    onClick={handlePasswordChange}
                    disabled={isSaving}
                    className="px-8 py-4 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold rounded-2xl shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSaving ? 'Updating...' : 'Update Password'}
                  </button>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <>
                <div className="glass rounded-3xl p-8">
                  <h2 className="text-2xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">Current Subscription</h2>
                  <div className="flex items-center justify-between p-6 bg-gradient-to-br from-[#4A4FFF]/10 to-purple-500/5 rounded-2xl mb-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#0E0E11] mb-1">Professional Plan</h3>
                      <p className="text-gray-600 font-medium">10,000 AI generations per month</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-extrabold text-[#0E0E11]">$79<span className="text-xl text-gray-600">/mo</span></div>
                      <p className="text-sm text-gray-600 font-medium">Billed monthly</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-4 border-b border-gray-200">
                      <div>
                        <p className="font-bold text-[#0E0E11]">Next Billing Date</p>
                        <p className="text-gray-600 font-medium">February 4, 2025</p>
                      </div>
                      <button className="px-4 py-2 glass rounded-xl hover:bg-white/60 transition-all font-bold text-[#0E0E11]">
                        Update
                      </button>
                    </div>
                    <div className="flex justify-between items-center py-4">
                      <div>
                        <p className="font-bold text-[#0E0E11]">Payment Method</p>
                        <p className="text-gray-600 font-medium">•••• •••• •••• 4242</p>
                      </div>
                      <button className="px-4 py-2 glass rounded-xl hover:bg-white/60 transition-all font-bold text-[#0E0E11]">
                        Update
                      </button>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-3xl p-6 border-2 border-[#4A4FFF]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center flex-shrink-0">
                      <Shield size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-extrabold text-[#0E0E11] mb-2">Upgrade to Enterprise</h3>
                      <p className="text-gray-600 mb-4 font-medium">
                        Get unlimited generations, team collaboration, and priority support
                      </p>
                      <Link href="/#pricing" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-[#764ba2] font-bold transition-colors">
                        View Plans →
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="glass rounded-3xl p-8">
                <h2 className="text-2xl font-extrabold text-[#0E0E11] mb-2 tracking-tight">Notification Preferences</h2>
                <p className="text-gray-600 mb-6">Choose what updates you'd like to receive</p>

                <div className="space-y-4">
                  {Object.entries({
                    emailUpdates: { label: 'Email Updates', desc: 'Receive updates about your content and account' },
                    productNews: { label: 'Product News', desc: 'Get notified about new features and improvements' },
                    weeklyDigest: { label: 'Weekly Digest', desc: 'Weekly summary of your activity and tips' },
                    marketingEmails: { label: 'Marketing Emails', desc: 'Promotional offers and product announcements' },
                  }).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/60 transition-all">
                      <div>
                        <p className="font-bold text-[#0E0E11]">{value.label}</p>
                        <p className="text-sm text-gray-600 font-medium">{value.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[key as keyof typeof notifications]}
                          onChange={(e) => setNotifications({ ...notifications, [key]: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4A4FFF]/20 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#4A4FFF] peer-checked:to-[#764ba2]"></div>
                      </label>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="mt-6 px-8 py-4 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold rounded-2xl shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  {isSaving ? 'Saving...' : 'Save Preferences'}
                </button>
              </div>
            )}

            {/* API Keys Tab */}
            {activeTab === 'api' && (
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#0E0E11] tracking-tight">API Keys</h2>
                    <p className="text-gray-600 mt-1">Manage your API keys for integrations</p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#4A4FFF] to-[#764ba2] text-white font-bold rounded-xl shadow-premium hover:shadow-premium-lg transition-all">
                    + New Key
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Production API Key', created: 'Jan 15, 2025', lastUsed: '2 hours ago' },
                    { name: 'Development Key', created: 'Jan 10, 2025', lastUsed: '1 day ago' },
                  ].map((key, i) => (
                    <div key={i} className="p-6 glass rounded-2xl hover:shadow-premium transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-extrabold text-[#0E0E11]">{key.name}</h3>
                        <button className="text-red-600 hover:text-red-700 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <code className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-sm font-mono">
                          sk_live_••••••••••••••••••••••{i}234
                        </code>
                        <button className="px-4 py-2 glass rounded-xl hover:bg-white/60 transition-all font-bold text-[#0E0E11] text-sm">
                          Copy
                        </button>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-600 font-medium">
                        <span>Created: {key.created}</span>
                        <span>•</span>
                        <span>Last used: {key.lastUsed}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <Shield size={24} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-1">Keep your API keys secure</h4>
                      <p className="text-sm text-yellow-700">Never share your API keys publicly or commit them to version control.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Danger Zone */}
            <div className="glass rounded-3xl p-8 border-2 border-red-200">
              <h2 className="text-2xl font-extrabold text-red-900 mb-2 tracking-tight">Danger Zone</h2>
              <p className="text-red-700 mb-6 font-medium">
                These actions are permanent and cannot be undone. Please proceed with caution.
              </p>
              <div className="space-y-3">
                <button className="w-full px-6 py-4 glass border-2 border-red-300 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all text-left flex items-center justify-between group">
                  <span className="flex items-center gap-3">
                    <Download size={20} />
                    Download My Data
                  </span>
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
                <button className="w-full px-6 py-4 glass border-2 border-red-300 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all text-left flex items-center justify-between group">
                  <span className="flex items-center gap-3">
                    <Trash2 size={20} />
                    Delete Account
                  </span>
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
