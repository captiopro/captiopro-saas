// Simple authentication utilities
// In production, replace with proper auth service (NextAuth, Supabase, etc.)

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  plan: string
  isAdmin?: boolean
}

const AUTH_STORAGE_KEY = 'captiopro_auth'
const USER_STORAGE_KEY = 'captiopro_user'

export const authService = {
  // Save auth state to localStorage
  login: (user: User, token?: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_STORAGE_KEY, 'true')
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
      if (token) {
        localStorage.setItem('captiopro_token', token)
      }
    }
  },

  // Remove auth state from localStorage
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_STORAGE_KEY)
      localStorage.removeItem(USER_STORAGE_KEY)
      localStorage.removeItem('captiopro_token')
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
    }
    return false
  },

  // Get current user from localStorage
  getCurrentUser: (): User | null => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem(USER_STORAGE_KEY)
      if (userStr) {
        try {
          return JSON.parse(userStr)
        } catch (e) {
          return null
        }
      }
    }
    return null
  },

  // Get auth token
  getToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('captiopro_token')
    }
    return null
  }
}
