'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BRAND } from '@/lib/constants'
import { authService } from '@/lib/auth'
import { ArrowRight, Eye, EyeOff, Shield, Zap, Users } from '@/components/Icons'
import { ButtonLoader } from '@/components/SkeletonLoader'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed')
        return
      }

      setSuccess(true)
      
      // Save auth state using our auth service
      authService.login({
        id: data.user.id || '1',
        name: data.user.name || 'User',
        email: data.user.email,
        avatar: data.user.name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || 'U',
        plan: data.user.plan || 'Professional'
      }, data.token)
      
      // Dispatch event to update navbar
      window.dispatchEvent(new Event('authChange'))
      
      // Redirect to dashboard after 1 second
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 bg-white">
      {/* Background gradient mesh matching homepage */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="gradient-mesh absolute inset-0"></div>
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#4A4FFF]/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float-smooth" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/15 via-[#4A4FFF]/10 to-transparent rounded-full blur-3xl animate-float-smooth" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left side - Features */}
        <div className="hidden lg:block">
          <Link href="/" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-[#764ba2] font-bold mb-8 transition-colors">
            ← Back to {BRAND.name}
          </Link>
          <h2 className="text-5xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            Welcome back to the future of content
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join thousands of creators using AI to transform their content strategy
          </p>

          <div className="space-y-6">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Generate content in seconds with AI' },
              { icon: Shield, title: 'Secure & Private', desc: 'Your data is encrypted and protected' },
              { icon: Users, title: '10,000+ Users', desc: 'Trusted by content creators worldwide' },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 glass rounded-2xl hover:shadow-premium transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center flex-shrink-0">
                  <feature.icon size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0E0E11] mb-1 text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full">
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-premium-lg border border-white/20 backdrop-blur-xl">
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0E0E11] mb-2 sm:mb-3 tracking-tight">Sign In</h1>
                <p className="text-gray-600 text-base sm:text-lg">Continue your creative journey</p>
              </div>

              {error && (
                <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm font-medium flex items-center gap-2">
                  <span className="text-base sm:text-lg">⚠️</span> {error}
                </div>
              )}

              {success && (
                <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-xs sm:text-sm font-medium flex items-center gap-2">
                  <span className="text-base sm:text-lg">✓</span> Login successful! Redirecting...
                </div>
              )}

              <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 glass rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] placeholder-gray-400 font-medium text-sm sm:text-base"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 glass rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] placeholder-gray-400 font-medium pr-12 text-sm sm:text-base"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#4A4FFF] transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 text-xs sm:text-sm">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#4A4FFF] cursor-pointer" disabled={isLoading} />
                    <span className="text-gray-700 font-medium group-hover:text-[#4A4FFF] transition-colors">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-[#4A4FFF] hover:text-[#764ba2] font-bold transition-colors">Forgot password?</Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-premium w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#4A4FFF] via-[#5B5FFF] to-[#764ba2] text-white font-bold rounded-xl sm:rounded-2xl shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg mt-6 sm:mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <ButtonLoader />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-3 sm:px-4 bg-white/80 backdrop-blur-sm text-gray-600 font-semibold rounded-full">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <button className="px-4 sm:px-6 py-3 sm:py-4 glass rounded-xl sm:rounded-2xl hover:bg-white/60 transition-all font-bold text-gray-900 hover:scale-105 duration-300 shadow-md flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span className="text-lg sm:text-xl">G</span> Google
                </button>
                <button className="px-4 sm:px-6 py-3 sm:py-4 glass rounded-xl sm:rounded-2xl hover:bg-white/60 transition-all font-bold text-gray-900 hover:scale-105 duration-300 shadow-md flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span className="text-lg sm:text-xl">⚡</span> GitHub
                </button>
              </div>

              <div className="text-center pt-3 sm:pt-4 border-t border-gray-200">
                <p className="text-gray-600 font-medium text-sm sm:text-base">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-[#4A4FFF] hover:text-[#764ba2] font-bold transition-colors">
                    Sign up for free
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <p className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 lg:hidden">
            <Link href="/" className="text-[#4A4FFF] hover:text-[#764ba2] font-bold transition-colors">
              ← Back to {BRAND.name}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
