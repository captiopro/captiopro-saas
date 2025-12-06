import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        captiopro: {
          dark: '#0E0E11',
          primary: '#0E0E11',
          accent: '#4A4FFF',
          background: '#F5F7FA',
          border: '#E5E7EB',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-subtle': 'radial-gradient(circle at center, rgba(74, 79, 255, 0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'neumorphic': '0 8px 32px -8px rgba(0, 0, 0, 0.1), -2px -2px 8px rgba(255, 255, 255, 0.8)',
        'neumorphic-dark': '0 8px 32px -8px rgba(0, 0, 0, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.1)',
        'glow': '0 0 20px rgba(74, 79, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(74, 79, 255, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 0.5s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-delayed': 'fade-in 0.6s ease-out 0.3s both',
        'scale-in': 'scale-in 0.5s ease-out',
        'blur-in': 'blur-in 0.8s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(74, 79, 255, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(74, 79, 255, 0.5)' },
        },
        'slide-in': {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up': {
          from: { transform: 'translateY(40px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        'blur-in': {
          from: { filter: 'blur(10px)', opacity: '0' },
          to: { filter: 'blur(0)', opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: 'calc(200% + 1px) 0' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
