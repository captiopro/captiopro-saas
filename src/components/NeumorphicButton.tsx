'use client'

import { ReactNode, ButtonHTMLAttributes } from 'react'

interface NeumorphicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function NeumorphicButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: NeumorphicButtonProps) {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 ease-out hover:shadow-lg active:shadow-md'

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-neumorphic hover:shadow-glow',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-neumorphic',
    outline: 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50 shadow-neumorphic',
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
