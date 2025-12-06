'use client'

import { ReactNode, CSSProperties } from 'react'

interface GlowEffectProps {
  children: ReactNode
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
  style?: CSSProperties
}

export default function GlowEffect({
  children,
  className = '',
  intensity = 'medium',
  style,
}: GlowEffectProps) {
  const intensityClasses = {
    subtle: 'shadow-glow',
    medium: 'shadow-glow-lg',
    strong: 'shadow-glow-lg animate-glow-pulse',
  }

  return (
    <div className={`${intensityClasses[intensity]} rounded-xl ${className}`} style={style}>
      {children}
    </div>
  )
}
