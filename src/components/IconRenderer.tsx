'use client'

import * as Icons from './Icons'

interface IconRendererProps {
  name: keyof typeof Icons
  size?: number
  color?: string
  className?: string
}

export const IconRenderer = ({ name, size = 24, color = 'currentColor', className = '' }: IconRendererProps) => {
  const Icon = Icons[name]
  
  if (!Icon) {
    console.warn(`Icon "${name}" not found in Icons library`)
    return null
  }
  
  return <Icon size={size} color={color} className={className} />
}
