'use client'

import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'blue' | 'purple' | 'pink'
}

export default function GradientText({
  children,
  className = '',
  variant = 'default',
}: GradientTextProps) {
  const variantClasses = {
    default: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent',
    blue: 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent',
    purple: 'bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent',
    pink: 'bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent',
  }

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
