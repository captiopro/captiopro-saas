'use client'

import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Mail } from '@/components/Icons'

export default function TermsPage() {
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
              <FileText size={32} color="white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0E0E11] mb-4 tracking-tight">
            Terms of Service
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
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to {BRAND.name}. These Terms of Service ("Terms") govern your access to and use of our AI-powered content creation platform, including any content, functionality, and services offered on or through {BRAND.domain} (the "Service").
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
            </p>
          </div>

          {/* Use of Service */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <CheckCircle size={24} color="white" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0E0E11]">Use of Service</h2>
            </div>
            
            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Eligibility</h3>
            <p className="text-gray-600 mb-3">To use our Service, you must:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Be at least 13 years old (or the age of majority in your jurisdiction)</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Provide accurate and complete registration information</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Account Registration</h3>
            <p className="text-gray-600 mb-3">When you create an account with us, you must:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </div>

          {/* Acceptable Use */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <AlertCircle size={24} color="white" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0E0E11]">Acceptable Use Policy</h2>
            </div>
            
            <p className="text-gray-600 mb-4">You agree NOT to use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Generate harmful, abusive, or offensive content</li>
              <li>Spread misinformation or engage in fraudulent activities</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated scripts or bots without permission</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Collect or harvest data from other users</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>

            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <p className="text-red-700 font-semibold">
                ⚠️ Violation of these terms may result in immediate suspension or termination of your account.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Our Content</h3>
            <p className="text-gray-600 mb-3">
              The Service and its original content (excluding user-generated content), features, and functionality are and will remain the exclusive property of {BRAND.name} and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>

            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Your Content</h3>
            <p className="text-gray-600 mb-3">
              You retain all rights to content you create using our Service. By using our Service, you grant us a limited license to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Store and process your content to provide the Service</li>
              <li>Use aggregated, anonymized data to improve our AI models</li>
              <li>Display your content as necessary to provide the Service</li>
            </ul>
            <p className="text-gray-600 mt-3">
              <strong className="text-[#0E0E11]">We will never sell or share your specific content without your explicit permission.</strong>
            </p>

            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">AI-Generated Content</h3>
            <p className="text-gray-600 mb-3">
              Content generated by our AI tools is provided "as is." You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Reviewing and editing AI-generated content before use</li>
              <li>Ensuring compliance with applicable laws and platform guidelines</li>
              <li>Verifying accuracy and appropriateness of generated content</li>
              <li>Respecting intellectual property rights in your final content</li>
            </ul>
          </div>

          {/* Subscriptions */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Subscriptions and Payments</h2>
            
            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Subscription Plans</h3>
            <p className="text-gray-600 mb-3">
              We offer free and paid subscription plans. Paid subscriptions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Are billed in advance on a monthly or annual basis</li>
              <li>Automatically renew unless cancelled before renewal date</li>
              <li>May be cancelled at any time from your account settings</li>
              <li>Provide access to premium features during the subscription period</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Refunds</h3>
            <p className="text-gray-600">
              We offer a 14-day money-back guarantee for first-time subscribers. After 14 days, payments are non-refundable except as required by law. To request a refund, contact us at {BRAND.email}.
            </p>

            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Price Changes</h3>
            <p className="text-gray-600">
              We may adjust subscription prices with 30 days' advance notice. Price changes will not affect current subscriptions until renewal.
            </p>
          </div>

          {/* Termination */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Termination</h2>
            
            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">By You</h3>
            <p className="text-gray-600 mb-3">
              You may terminate your account at any time by contacting us or using account settings. Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Your access to paid features will cease at the end of the billing period</li>
              <li>Your content may be deleted after 30 days (download before terminating)</li>
              <li>No refunds will be provided for partial subscription periods</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">By Us</h3>
            <p className="text-gray-600 mb-3">
              We may suspend or terminate your account if you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Violate these Terms of Service</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Fail to pay applicable fees</li>
              <li>Abuse or misuse the Service</li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Disclaimers and Limitations</h2>
            
            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Service "As Is"</h3>
            <p className="text-gray-600 mb-3">
              The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Merchantability or fitness for a particular purpose</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Accuracy or reliability of AI-generated content</li>
              <li>Security of data transmission</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0E0E11] mt-6 mb-3">Limitation of Liability</h3>
            <p className="text-gray-600">
              {BRAND.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service, even if we have been advised of the possibility of such damages.
            </p>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
              <p className="text-yellow-800">
                <strong className="text-yellow-900">⚠️ Important:</strong> Some jurisdictions do not allow limitations on implied warranties or liability. In such jurisdictions, our liability is limited to the fullest extent permitted by law.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of material changes by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-3">
              <li>Posting the new Terms on this page</li>
              <li>Updating the "Last updated" date</li>
              <li>Sending email notification to registered users (for significant changes)</li>
            </ul>
            <p className="text-gray-600 mt-3">
              Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="glass rounded-3xl p-8 shadow-lg hover:shadow-premium transition-all duration-300">
            <h2 className="text-3xl font-extrabold text-[#0E0E11] mb-4">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which {BRAND.name} operates, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-600 mt-3">
              Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration, except where prohibited by law.
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
              If you have any questions about these Terms of Service, please contact us:
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
          <Link href="/privacy" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-purple-600 font-bold transition-colors">
            ← Privacy Policy
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-[#4A4FFF] hover:text-purple-600 font-bold transition-colors">
            Back to Home →
          </Link>
        </div>
      </div>
    </div>
  )
}
