# Quick Start: Set Yourself as Admin

## Fastest Method (Recommended)

### Step 1: Run the Script
```bash
npx ts-node scripts/set-admin.ts your@email.com
```

### Step 2: Update Your Login (if already logged in)
1. Open browser DevTools (F12)
2. Go to **Application** tab → **Local Storage**
3. Find `captiopro_user` key
4. Edit the JSON and add: `"isAdmin": true`
5. Refresh the page

### Step 3: Access Admin Panel
Navigate to: `https://your-site.netlify.app/admin`

Or click on your profile → **Admin Panel**

---

## Alternative: Using Prisma Studio

```bash
# Open Prisma Studio
npx prisma studio

# 1. Navigate to User model
# 2. Find your user by email
# 3. Set isAdmin checkbox to true
# 4. Click Save
```

Then refresh your browser or re-login.

---

## What You'll See

✅ **Admin Panel Link** in user dropdown (only visible to admins)  
✅ **Analytics Dashboard** with real-time stats  
✅ **User Growth Chart** (last 7 days)  
✅ **Recent Users** list with plan badges  
✅ **Content Distribution** analytics  
✅ **Quick Actions** for navigation  

---

## Security

⚠️ Only set `isAdmin = true` for yourself or trusted team members.

Admin users have access to:
- All user data
- Platform analytics
- System settings
- Content management

---

## Need Help?

Check `ADMIN_SETUP.md` for detailed instructions and troubleshooting.
