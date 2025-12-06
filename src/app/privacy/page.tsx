'use client'

import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { ArrowLeft, Shield, Lock, Eye, Mail } from '@/components/Icons'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#4A4FFF]/10 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-indigo-500/10 to-[#4A4FFF]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-purple-600 transition-colors mb-8 font-bold">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A4FFF] to-purple-600 flex items-center justify-center shadow-premium">
              <Shield size={32} color="white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last updated: December 6, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              At {BRAND.name}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered content creation platform.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By using {BRAND.name}, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>

          {/* Information Collection */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A4FFF] to-purple-600 flex items-center justify-center">
                <Eye size={24} color="white" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0E0E11]">Information We Collect</h2>
            </div>
            
            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-3">When you register for an account, we collect:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Email address</li>
              <li>Username and password</li>
              <li>Profile information (optional)</li>
              <li>Payment information (processed securely by third-party providers)</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Usage Data</h3>
            <p className="text-gray-600 mb-3">We automatically collect certain information about your device and how you interact with our service:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and features used</li>
              <li>Time and date of visits</li>
              <li>Referring website addresses</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Content Data</h3>
            <p className="text-gray-600">
              We collect and process the content you create, generate, or upload to our platform to provide and improve our services.
            </p>
          </div>

          {/* How We Use Information */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Process your transactions and manage your account</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and provide customer service</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Lock size={24} color="white" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0E0E11]">Data Security</h2>
            </div>
            <p className="text-gray-600 mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong className="text-[#0E0E11]">Encryption:</strong> All data transmission is encrypted using SSL/TLS</li>
              <li><strong className="text-[#0E0E11]">Secure Storage:</strong> Data is stored on secure servers with restricted access</li>
              <li><strong className="text-[#0E0E11]">Access Controls:</strong> Strict internal policies limit data access to authorized personnel</li>
              <li><strong className="text-[#0E0E11]">Regular Audits:</strong> We conduct regular security assessments</li>
              <li><strong className="text-[#0E0E11]">Data Backup:</strong> Regular backups ensure data recovery capabilities</li>
            </ul>
            <p className="text-gray-600 mt-4">
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </div>

          {/* Data Sharing */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong className="text-[#0E0E11]">Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, analytics, hosting)</li>
              <li><strong className="text-[#0E0E11]">Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong className="text-[#0E0E11]">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong className="text-[#0E0E11]">With Your Consent:</strong> When you explicitly agree to share your information</li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong className="text-[#0E0E11]">Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-[#0E0E11]">Correction:</strong> Update or correct inaccurate information</li>
              <li><strong className="text-[#0E0E11]">Deletion:</strong> Request deletion of your personal data</li>
              <li><strong className="text-[#0E0E11]">Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong className="text-[#0E0E11]">Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong className="text-[#0E0E11]">Restriction:</strong> Request restriction of processing your data</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, please contact us at <a href={`mailto:${BRAND.email}`} className="text-[#4A4FFF] hover:text-purple-600 underline font-bold">{BRAND.email}</a>
            </p>
          </div>

          {/* Contact */}
          <div className="glass rounded-3xl p-8 shadow-premium-lg bg-gradient-to-br from-[#4A4FFF]/5 to-purple-500/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A4FFF] to-purple-600 flex items-center justify-center">
                <Mail size={24} color="white" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0E0E11]">Contact Us</h2>
            </div>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong className="text-[#0E0E11]">Email:</strong> <a href={`mailto:${BRAND.email}`} className="text-[#4A4FFF] hover:text-purple-600 underline font-bold">{BRAND.email}</a></p>
              <p><strong className="text-[#0E0E11]">Website:</strong> <a href={`https://${BRAND.domain}`} className="text-[#4A4FFF] hover:text-purple-600 underline font-bold">{BRAND.domain}</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="text-center py-12">
        <div className="flex justify-center gap-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-purple-600 font-bold transition-colors">
            ← Back to Home
          </Link>
          <Link href="/terms" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-purple-600 font-bold transition-colors">
            Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  )
}
