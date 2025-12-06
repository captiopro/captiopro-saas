'use client'

import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { Twitter, Linkedin, Instagram } from './Icons'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', href: '/#features' },
      { name: 'Tools', href: '/#tools' },
    ],
    company: [
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <Logo />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              {BRAND.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://twitter.com/captiopro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#4A4FFF] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} color="white" />
              </a>
              <a
                href="https://linkedin.com/company/captiopro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#4A4FFF] flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} color="white" />
              </a>
              <a
                href="https://instagram.com/captiopro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#4A4FFF] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} color="white" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              &copy; {currentYear} {BRAND.name}. All rights reserved.
            </p>
            <p className="text-gray-400">
              Made with <span className="text-red-500">❤️</span> for content creators worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
