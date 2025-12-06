# Admin Panel Setup Guide

## Overview
The admin panel is now live with comprehensive analytics, user management, and system monitoring features. Only users with `isAdmin = true` can access the admin panel at `/admin`.

## Features
- ✅ **Admin-Only Access**: Non-admin users are automatically redirected to dashboard
- 📊 **Analytics Dashboard**: Real-time stats, user growth charts, content distribution
- 👥 **User Management**: View recent users, manage subscriptions
- 📈 **Visual Graphs**: Interactive bar charts showing user growth over 7 days
- 💰 **Revenue Tracking**: Monthly revenue and growth metrics
- ⚡ **Quick Actions**: Fast navigation to key admin functions

## Setting Yourself as Admin

### Method 1: Using the Script (Recommended)
```bash
# Run the set-admin script with your email
npx ts-node scripts/set-admin.ts your@email.com
```

Example:
```bash
npx ts-node scripts/set-admin.ts sendiw@example.com
```

### Method 2: Using Prisma Studio
```bash
# Open Prisma Studio
npx prisma studio

# Navigate to User model
# Find your user by email
# Set isAdmin = true
# Save changes
```

### Method 3: Direct Database Query (PostgreSQL)
```sql
-- Connect to your Neon database and run:
UPDATE "User" 
SET "isAdmin" = true 
WHERE email = 'your@email.com';
```

### Method 4: Update via code
1. Create a temporary API route:
```typescript
// src/app/api/admin/set-admin/route.ts
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { email, secret } = await request.json()
  
  // Add a secret key for security
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const user = await prisma.user.update({
    where: { email },
    data: { isAdmin: true }
  })
  
  return NextResponse.json({ success: true, user })
}
```

2. Add `ADMIN_SECRET=your-secret-key` to your `.env` file
3. Call the API endpoint
4. Delete the route after use for security

## Accessing the Admin Panel

1. **Login** with your account
2. **Set isAdmin flag** using one of the methods above
3. **Update localStorage** (only if already logged in):
   - Open browser DevTools (F12)
   - Go to Application > Local Storage
   - Find `captiopro_user` key
   - Edit the JSON and add `"isAdmin": true`
   - Refresh the page
4. **Navigate to** `/admin` or click Admin in the dropdown menu

## Admin Panel Pages

### Overview Tab
- Total Users, Active Users, Content Generated, Monthly Revenue
- Interactive 7-day user growth chart
- Recent users list with plan badges
- Content distribution analytics
- Quick action buttons

### Users Tab
- User management features (coming soon)

### Content Tab
- Content management features (coming soon)

### Settings Tab
- System settings (coming soon)

## Security Notes

⚠️ **Important**:
- Only set isAdmin = true for trusted users
- The admin panel has full access to user data and system settings
- Always keep admin access restricted
- Never commit admin credentials to Git
- Use environment variables for sensitive data

## Troubleshooting

### Can't access admin panel after setting isAdmin?
1. Check if `isAdmin` is true in the database:
   ```bash
   npx prisma studio
   ```
2. Clear localStorage and login again
3. Make sure you're using the same email address

### "Access Denied" message?
- Verify your account has `isAdmin = true` in the database
- Clear browser cache and cookies
- Re-login to refresh authentication state

### Database migration issues?
```bash
# Reset and remigrate if needed
npx prisma migrate reset
npx prisma migrate dev
npx prisma generate
```

## Next Steps

Now that you have admin access, you can:
1. ✅ Monitor user growth and engagement
2. ✅ Track content generation metrics
3. ✅ View revenue and plan distribution
4. ✅ Manage users and subscriptions
5. ✅ Export data for analysis

Enjoy your new admin powers! 🚀
