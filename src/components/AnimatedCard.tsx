'use client'

import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export default function AnimatedCard({ children, className = '', delay = 0, hover = true }: AnimatedCardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-gray-200 bg-white p-6 
        animate-slide-up
        ${hover ? 'hover:border-[#4A4FFF] hover:shadow-xl hover:shadow-[#4A4FFF]/10 hover:-translate-y-1' : ''}
        transition-all duration-300
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
