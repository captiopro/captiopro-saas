'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BRAND } from '@/lib/constants'
import { authService } from '@/lib/auth'
import { ArrowRight, Eye, EyeOff, CheckCircle, Sparkles, Target } from '@/components/Icons'
import { ButtonLoader } from '@/components/SkeletonLoader'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!agreedToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Signup failed')
        return
      }

      setSuccess(true)
      
      // Save auth state using our auth service
      authService.login({
        id: data.user.id || '1',
        name: data.user.name || formData.name,
        email: data.user.email || formData.email,
        avatar: formData.name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U',
        plan: data.user.plan || 'Free'
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
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-white">
      {/* Background gradient mesh matching homepage */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="gradient-mesh absolute inset-0"></div>
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#4A4FFF]/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float-smooth" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/15 via-[#4A4FFF]/10 to-transparent rounded-full blur-3xl animate-float-smooth" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Benefits */}
        <div className="hidden lg:block">
          <Link href="/" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-[#764ba2] font-bold mb-8 transition-colors">
            ← Back to {BRAND.name}
          </Link>
          <h2 className="text-5xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            Start creating amazing content today
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join 10,000+ creators and transform your content strategy with AI
          </p>

          <div className="space-y-6">
            {[
              { icon: CheckCircle, title: 'Free to Start', desc: 'No credit card required. Start creating immediately' },
              { icon: Sparkles, title: 'AI-Powered Tools', desc: 'Generate captions, titles, and descriptions in seconds' },
              { icon: Target, title: 'Proven Results', desc: 'Average 300% increase in engagement' },
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-6 glass rounded-2xl hover:shadow-premium transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A4FFF] to-[#764ba2] flex items-center justify-center flex-shrink-0">
                  <benefit.icon size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0E0E11] mb-1 text-lg">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 glass rounded-2xl border-2 border-[#4A4FFF]/20">
            <p className="text-sm text-gray-600 font-medium">
              ✨ <strong className="text-[#0E0E11]">Special Offer:</strong> Get 50 free AI generations when you sign up today
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full">
          <div className="glass rounded-3xl p-10 shadow-premium-lg border border-white/20 backdrop-blur-xl">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-extrabold text-[#0E0E11] mb-3 tracking-tight">Create Account</h1>
                <p className="text-gray-600 text-lg">Start your free trial now</p>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2">
                  <span className="text-lg">⚠️</span> {error}
                </div>
              )}

              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium flex items-center gap-2">
                  <span className="text-lg">✓</span> Account created! Redirecting...
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] placeholder-gray-400 font-medium"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] placeholder-gray-400 font-medium"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0E0E11] mb-2 tracking-wide">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-5 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A4FFF] transition-all text-[#0E0E11] placeholder-gray-400 font-medium pr-12"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#4A4FFF] transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 font-medium">Must be at least 8 characters</p>
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#4A4FFF] cursor-pointer" 
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    disabled={isLoading}
                  />
                  <span className="text-sm text-gray-700 font-medium group-hover:text-[#4A4FFF] transition-colors">
                    I agree to {BRAND.name}'s{' '}
                    <Link href="/terms" className="text-[#4A4FFF] hover:underline">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="text-[#4A4FFF] hover:underline">Privacy Policy</Link>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-premium w-full px-8 py-4 bg-gradient-to-r from-[#4A4FFF] via-[#5B5FFF] to-[#764ba2] text-white font-bold rounded-2xl shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <ButtonLoader />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/80 backdrop-blur-sm text-gray-600 font-semibold rounded-full">Or sign up with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="px-6 py-4 glass rounded-2xl hover:bg-white/60 transition-all font-bold text-gray-900 hover:scale-105 duration-300 shadow-md flex items-center justify-center gap-2">
                  <span className="text-xl">G</span> Google
                </button>
                <button className="px-6 py-4 glass rounded-2xl hover:bg-white/60 transition-all font-bold text-gray-900 hover:scale-105 duration-300 shadow-md flex items-center justify-center gap-2">
                  <span className="text-xl">⚡</span> GitHub
                </button>
              </div>

              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-600 font-medium">
                  Already have an account?{' '}
                  <Link href="/login" className="text-[#4A4FFF] hover:text-[#764ba2] font-bold transition-colors">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <p className="text-center mt-6 text-sm text-gray-500 lg:hidden">
            <Link href="/" className="text-[#4A4FFF] hover:text-[#764ba2] font-bold transition-colors">
              ← Back to {BRAND.name}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
