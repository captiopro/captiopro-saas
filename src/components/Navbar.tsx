'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { BRAND, NAVIGATION, COLORS } from '@/lib/constants'
import { authService, User } from '@/lib/auth'
import { Menu, X, User as UserIcon, Settings, LogOut, CreditCard, Bell, Zap } from './Icons'
import Logo from './Logo'

// ChevronDown icon component
const ChevronDown = ({ size = 24, color = 'currentColor', className = '' }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Check authentication status from localStorage
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = authService.isAuthenticated()
      const currentUser = authService.getCurrentUser()
      
      setIsLoggedIn(authenticated)
      setUser(currentUser)
    }

    // Check on mount
    checkAuth()

    // Listen for storage changes (when user logs in/out in another tab)
    window.addEventListener('storage', checkAuth)
    
    // Custom event for same-tab updates
    window.addEventListener('authChange', checkAuth)

    return () => {
      window.removeEventListener('storage', checkAuth)
      window.removeEventListener('authChange', checkAuth)
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 50)

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  const handleLogout = () => {
    // Clear auth data
    authService.logout()
    setIsUserMenuOpen(false)
    setIsLoggedIn(false)
    setUser(null)
    
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new Event('authChange'))
    
    // Redirect to login
    window.location.href = '/login'
  }

  return (
    <nav 
      className={`fixed top-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 z-50 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center cursor-pointer"
          >
            <Logo size={42} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAVIGATION.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-semibold text-sm tracking-wide group animate-fade-in transition-all duration-300 ${
                    isActive ? 'text-[#5B4FFF]' : 'text-gray-700 hover:text-[#5B4FFF]'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-[#5B4FFF] to-[#DB2777] rounded-full animate-pulse" />
                  )}
                  {/* Hover underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                  {/* Subtle glow on hover */}
                  <span className="absolute inset-0 blur-xl bg-[#4A4FFF]/0 group-hover:bg-[#4A4FFF]/10 transition-all duration-300 -z-10" />
                </Link>
              )
            })}
          </div>

          {/* Auth Buttons or User Menu */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn && user ? (
              /* User Dropdown Menu */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-3 px-4 py-2.5 glass border border-gray-200/50 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4A4FFF] to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_20px_rgba(74,79,255,0.3)]">
                    {user.avatar}
                  </div>
                  <div className="text-left hidden lg:block">
                    <div className="text-sm font-bold text-[#0E0E11] group-hover:text-[#4A4FFF] transition-colors">
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{user.plan} Plan</div>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-600 group-hover:text-[#4A4FFF] transition-all duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-premium overflow-hidden animate-fade-in">
                    {/* User Info Header */}
                    <div className="p-4 border-b border-gray-200/50 bg-gradient-to-br from-[#4A4FFF]/5 to-purple-500/5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A4FFF] to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(74,79,255,0.5)]">
                          {user.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-[#0E0E11]">{user.name}</div>
                          <div className="text-sm text-gray-600 font-medium">{user.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#4A4FFF]/10 to-purple-500/10 border border-[#4A4FFF]/20 rounded-lg">
                        <Zap size={14} className="text-[#4A4FFF]" />
                        <span className="text-xs font-bold text-[#4A4FFF]">{user.plan} Plan</span>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <Link
                        href="/dashboard"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Zap size={18} className="text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-[#0E0E11] group-hover:text-[#4A4FFF]">Dashboard</div>
                          <div className="text-xs text-gray-600">View your workspace</div>
                        </div>
                      </Link>

                      <Link
                        href="/account"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Settings size={18} className="text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-[#0E0E11] group-hover:text-purple-600">Account Settings</div>
                          <div className="text-xs text-gray-600">Manage your account</div>
                        </div>
                      </Link>

                      <Link
                        href="/account?tab=billing"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CreditCard size={18} className="text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-[#0E0E11] group-hover:text-green-600">Billing & Plans</div>
                          <div className="text-xs text-gray-600">Manage subscription</div>
                        </div>
                      </Link>

                      <Link
                        href="/account?tab=notifications"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Bell size={18} className="text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-[#0E0E11] group-hover:text-orange-600">Notifications</div>
                          <div className="text-xs text-gray-600">Manage preferences</div>
                        </div>
                      </Link>
                    </div>

                    {/* Logout Button */}
                    <div className="p-2 border-t border-gray-200/50">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <LogOut size={18} className="text-red-600" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-sm font-bold text-red-600 group-hover:text-red-700">Sign Out</div>
                          <div className="text-xs text-gray-600">Come back soon!</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Login/Signup Buttons */
              <>
                <Link
                  href="/login"
                  className="px-6 py-2.5 text-gray-700 font-semibold text-sm hover:text-[#4A4FFF] hover:bg-gray-50 rounded-xl transition-all duration-300"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="btn-premium px-6 py-2.5 bg-gradient-to-r from-[#5B4FFF] via-[#7C3AED] to-[#DB2777] text-white font-bold text-sm rounded-xl shadow-[0_10px_30px_rgba(91,79,255,0.3)] hover:shadow-[0_10px_40px_rgba(91,79,255,0.5)] hover:scale-105 transition-all duration-300"
                >
                  Get Started Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} color="#0E0E11" />
            ) : (
              <Menu size={24} color="#0E0E11" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200 animate-slide-down bg-white/95">
            <div className="flex flex-col gap-2 pt-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:text-[#4A4FFF] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-gray-200 my-2 pt-2">
                {isLoggedIn && user ? (
                  /* Mobile User Menu */
                  <>
                    <div className="px-4 py-3 mb-2 glass border border-gray-200/50 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A4FFF] to-purple-600 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(74,79,255,0.3)]">
                          {user.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-[#0E0E11] text-sm">{user.name}</div>
                          <div className="text-xs text-gray-600">{user.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-[#4A4FFF]/10 to-purple-500/10 border border-[#4A4FFF]/20 rounded-lg">
                        <Zap size={12} className="text-[#4A4FFF]" />
                        <span className="text-xs font-bold text-[#4A4FFF]">{user.plan} Plan</span>
                      </div>
                    </div>

                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#4A4FFF] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <Zap size={18} />
                      Dashboard
                    </Link>
                    <Link
                      href="/account"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#4A4FFF] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <Settings size={18} />
                      Account Settings
                    </Link>
                    <Link
                      href="/account?tab=billing"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#4A4FFF] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <CreditCard size={18} />
                      Billing & Plans
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 font-medium text-sm"
                    >
                      <LogOut size={18} />
                      Sign Out
                    </button>
                  </>
                ) : (
                  /* Mobile Login/Signup Buttons */
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/login"
                      className="px-4 py-2 text-gray-700 font-medium text-sm hover:text-[#4A4FFF] hover:bg-gray-50 rounded-lg transition-all duration-300 text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Log In
                    </Link>
                    <Link
                      href="/signup"
                      className="px-4 py-2 bg-gradient-to-r from-[#5B4FFF] via-[#7C3AED] to-[#DB2777] text-white font-semibold text-sm rounded-lg shadow-[0_10px_30px_rgba(91,79,255,0.3)] hover:shadow-[0_10px_40px_rgba(91,79,255,0.5)] transition-all duration-300 text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
