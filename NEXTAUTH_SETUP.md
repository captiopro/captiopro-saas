# NextAuth.js Implementation Guide

## ✅ What's Been Completed

### 1. **Dependencies Installed**
- `next-auth@latest` - Authentication framework for Next.js
- `bcryptjs` - Password hashing library
- `@next-auth/prisma-adapter` - Prisma adapter for NextAuth
- `@types/bcryptjs` - TypeScript types

### 2. **Database Schema Updated**
Added NextAuth required models:
- `Account` - For OAuth providers (future use)
- `Session` - Stores active user sessions
- `VerificationToken` - For email verification (future use)
- Updated `User` model with:
  - `plan` field (Free, Starter, Professional, Enterprise)
  - `emailVerified` field
  - `image` field
  - Relations to accounts and sessions

### 3. **NextAuth Configuration Created**
- **File**: `src/lib/auth-config.ts`
- **Provider**: Credentials (email/password)
- **Session Strategy**: JWT (no database sessions)
- **Features**:
  - Password verification with bcrypt
  - Custom JWT callbacks with user data (id, plan, isAdmin)
  - Custom session callbacks
  - Error handling
  - Redirects to `/login`

### 4. **API Routes**
- **NextAuth Route**: `/api/auth/[...nextauth]`
  - Handles: sign-in, sign-out, session, providers, callback
- **Existing Routes**:
  - `/api/auth/signup` - Already has bcrypt hashing ✅
  - `/api/auth/login` - Ready to integrate

### 5. **Client-Side Setup**
- `AuthProvider` component created
- Wrapped entire app in `SessionProvider`
- Ready for `useSession()` hook usage

### 6. **Environment Variables**
Added to `.env`:
```env
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-change-this-in-production-minimum-32-characters"
```

---

## 🚧 What Still Needs to Be Done

### **CRITICAL - Required for NextAuth to Work**

#### 1. **Generate Real NEXTAUTH_SECRET**
```bash
openssl rand -base64 32
```
Replace the placeholder in `.env` with the generated secret.

For Netlify deployment, add to environment variables:
```
NEXTAUTH_URL=https://your-site.netlify.app
NEXTAUTH_SECRET=<generated-secret>
```

#### 2. **Update Login Page to Use NextAuth**
Current login uses custom API. Need to update to:
```typescript
import { signIn } from 'next-auth/react'

const result = await signIn('credentials', {
  email,
  password,
  redirect: false,
})

if (result?.error) {
  // Handle error
} else {
  router.push('/dashboard')
}
```

#### 3. **Update Signup Flow**
After successful signup, automatically sign in:
```typescript
// After creating user in /api/auth/signup
await signIn('credentials', { email, password, redirect: false })
```

#### 4. **Update Navbar to Use Session**
Replace localStorage logic with:
```typescript
import { useSession, signOut } from 'next-auth/react'

const { data: session, status } = useSession()
const user = session?.user

// For logout:
signOut({ callbackUrl: '/login' })
```

#### 5. **Update Protected Pages**
Replace localStorage checks with:

**Client-side**:
```typescript
import { useSession } from 'next-auth/react'

const { data: session, status } = useSession({
  required: true,
  onUnauthenticated() {
    router.push('/login')
  }
})

// Check admin
if (session?.user?.isAdmin) { ... }
```

**Server-side** (recommended for sensitive pages):
```typescript
import { getSession } from '@/lib/session'

const session = await getSession()
if (!session) redirect('/login')
if (!session.user?.isAdmin) redirect('/dashboard')
```

#### 6. **Remove Old Auth Service**
Delete or deprecate `src/lib/auth.ts` (localStorage-based)

---

## 📋 Step-by-Step Migration Plan

### **Phase 1: Environment Setup** (5 minutes)
1. Generate NEXTAUTH_SECRET
2. Update `.env` file
3. Add to Netlify environment variables

### **Phase 2: Login/Signup Pages** (30 minutes)
1. Update `src/app/login/page.tsx`
   - Import `signIn` from next-auth/react
   - Replace fetch call with `signIn()`
   - Handle errors properly
   
2. Update `src/app/signup/page.tsx`
   - Keep existing signup API
   - Auto-login after signup with `signIn()`

3. Remove `/api/auth/login/route.ts` (no longer needed)

### **Phase 3: Navbar & Session** (20 minutes)
1. Update `src/components/Navbar.tsx`
   - Replace `authService` with `useSession()`
   - Replace logout with `signOut()`
   - Update user data access

### **Phase 4: Protected Routes** (30 minutes)
1. Dashboard (`src/app/dashboard/page.tsx`)
2. Account (`src/app/account/page.tsx`)
3. Admin (`src/app/admin/page.tsx`)
4. Any other protected pages

### **Phase 5: Testing** (30 minutes)
1. Test signup flow
2. Test login flow
3. Test logout
4. Test protected route redirects
5. Test admin-only access
6. Test session persistence (refresh page)

### **Phase 6: Cleanup** (15 minutes)
1. Remove `src/lib/auth.ts` (old service)
2. Remove localStorage references
3. Update imports across codebase
4. Remove `/api/auth/login/route.ts`

---

## 🔒 Security Benefits

### What You Get with NextAuth:
- ✅ **Server-side session validation**
- ✅ **Secure JWT tokens** (not stored in localStorage)
- ✅ **CSRF protection**
- ✅ **Secure HTTP-only cookies**
- ✅ **Session encryption**
- ✅ **Built-in security best practices**
- ✅ **Automatic token refresh**
- ✅ **XSS protection** (no localStorage exposure)

### What Was Wrong Before:
- ❌ Client-side only (localStorage can be manipulated)
- ❌ No real token verification
- ❌ Anyone could edit localStorage and "login"
- ❌ No session expiration
- ❌ Vulnerable to XSS attacks

---

## 🎯 Quick Start Commands

### Test Your Setup
```bash
# Start dev server
npm run dev

# Test login
curl -X POST http://localhost:3000/api/auth/signin/credentials \
  -H "Content-Type: application/json" \
  -d '{"email":"your@email.com","password":"yourpassword"}'
```

### Generate Secret
```bash
openssl rand -base64 32
```

### Check Database
```bash
npx prisma studio
```

---

## 📚 Useful NextAuth Hooks & Functions

### Client-Side
```typescript
import { useSession, signIn, signOut } from 'next-auth/react'

// Get session
const { data: session, status } = useSession()
// status: 'loading' | 'authenticated' | 'unauthenticated'

// Sign in
await signIn('credentials', { email, password, redirect: false })

// Sign out
await signOut({ callbackUrl: '/login' })
```

### Server-Side
```typescript
import { getSession, getCurrentUser } from '@/lib/session'

// Get full session
const session = await getSession()

// Get just the user
const user = await getCurrentUser()
```

---

## 🐛 Troubleshooting

### Issue: "NEXTAUTH_SECRET missing"
**Solution**: Add to `.env` and restart dev server

### Issue: "Callback URL mismatch"
**Solution**: Check NEXTAUTH_URL matches your domain

### Issue: "Session not persisting"
**Solution**: Check browser cookies, clear cache

### Issue: "Prisma error"
**Solution**: Run `npx prisma generate` and `npx prisma db push`

---

## 🚀 Next Steps After NextAuth

Once authentication is working:
1. Implement OAuth providers (Google, GitHub)
2. Add email verification
3. Add password reset flow
4. Add "Remember me" functionality
5. Add two-factor authentication (2FA)

---

## 📖 Resources

- [NextAuth.js Docs](https://next-auth.js.org/)
- [Prisma Adapter](https://next-auth.js.org/adapters/prisma)
- [JWT Strategy](https://next-auth.js.org/configuration/options#session)
- [Credentials Provider](https://next-auth.js.org/providers/credentials)

---

**Status**: ✅ Core setup complete, ready for integration!
