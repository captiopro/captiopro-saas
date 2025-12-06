'use client'

interface LogoProps {
  size?: number
  className?: string
  variant?: 'full' | 'icon' | 'text'
}

export default function Logo({ size = 40, className = '', variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Modern abstract "C" design */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4FFF" />
            <stop offset="100%" stopColor="#2E30B0" />
          </linearGradient>
        </defs>
        
        {/* Outer ring */}
        <path
          d="M20 4C11.163 4 4 11.163 4 20C4 28.837 11.163 36 20 36C24.418 36 28.418 34.209 31.314 31.314"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Inner accent */}
        <circle cx="20" cy="20" r="8" fill="url(#logoGradient)" opacity="0.3" />
        
        {/* Dot accent */}
        <circle cx="32" cy="20" r="3" fill="#4A4FFF" />
      </svg>
    )
  }

  if (variant === 'text') {
    return (
      <span className={`font-bold text-[#0E0E11] ${className}`} style={{ fontSize: size / 2 }}>
        Captiopro
      </span>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4FFF" />
            <stop offset="100%" stopColor="#2E30B0" />
          </linearGradient>
        </defs>
        <path
          d="M20 4C11.163 4 4 11.163 4 20C4 28.837 11.163 36 20 36C24.418 36 28.418 34.209 31.314 31.314"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="20" cy="20" r="8" fill="url(#logoGradient)" opacity="0.3" />
        <circle cx="32" cy="20" r="3" fill="#4A4FFF" />
      </svg>
      <span className="font-bold text-[#0E0E11] hidden sm:inline bg-gradient-to-r from-[#0E0E11] to-[#4A4FFF] bg-clip-text text-transparent" style={{ fontSize: size / 2.5 }}>
        Captiopro
      </span>
    </div>
  )
}
