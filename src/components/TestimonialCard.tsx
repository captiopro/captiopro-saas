'use client'

import { Star } from './Icons'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  text: string
  delay?: number
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  avatar, 
  rating, 
  text,
  delay = 0 
}: TestimonialCardProps) {
  return (
    <div 
      className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#4A4FFF] hover:shadow-xl hover:shadow-[#4A4FFF]/10 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} color="#F59E0B" fill="#F59E0B" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-700 leading-relaxed mb-6">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A4FFF] to-[#2E30B0] flex items-center justify-center text-white font-bold text-sm">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role} • {company}</p>
        </div>
      </div>
    </div>
  )
}
