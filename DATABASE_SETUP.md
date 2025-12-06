# 🗄️ Database Setup Guide

## Current Setup: SQLite (Development)

Your app currently uses **SQLite** which is great for development but **NOT recommended for production**.

### Why SQLite is Limited for Production:
- ❌ Single file - no concurrent writes
- ❌ No built-in replication or backups
- ❌ Limited scalability
- ❌ Not suitable for multiple server instances
- ❌ Data loss risk if file corrupts

---

## ✅ Recommended Production Database: PostgreSQL

PostgreSQL is the best choice for production SaaS applications:
- ✅ Reliable and battle-tested
- ✅ ACID compliant with strong data integrity
- ✅ Excellent performance at scale
- ✅ Built-in replication and backups
- ✅ Supports concurrent connections
- ✅ Free hosting options available

---

## 🚀 Quick Start: Production Database Options

### Option 1: Vercel Postgres (Easiest - Recommended)

**Free tier includes:**
- 256 MB storage
- 60 hours compute time/month
- Perfect for getting started

**Steps:**
1. Deploy your app to Vercel
2. Go to your project dashboard
3. Click "Storage" → "Create Database"
4. Select "Postgres"
5. Vercel automatically sets `DATABASE_URL` environment variable
6. Run migrations:
```bash
npx prisma migrate deploy
```

**Pricing:**
- Free: $0/month (256 MB)
- Pro: $20/month (512 MB)

---

### Option 2: Neon (Serverless Postgres)

**Why Neon:**
- Generous free tier (3 GB storage)
- Serverless - auto-scales to zero
- Branch databases for dev/staging
- Excellent for SaaS apps

**Steps:**
1. Go to [neon.tech](https://neon.tech)
2. Sign up with GitHub
3. Create new project → Get connection string
4. Update your `.env` or hosting platform:
```bash
DATABASE_URL="postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require"
```
5. Run migrations:
```bash
npx prisma migrate deploy
npx prisma generate
```

**Pricing:**
- Free: $0/month (3 GB, 10 projects)
- Pro: $19/month (unlimited projects)

---

### Option 3: Supabase (Postgres + Auth + Storage)

**Why Supabase:**
- Free PostgreSQL database (500 MB)
- Built-in authentication
- Real-time subscriptions
- File storage included
- Great dashboard

**Steps:**
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database → Connection String
4. Copy the connection string:
```bash
DATABASE_URL="postgresql://postgres:password@db.xxx.supabase.co:5432/postgres"
```
5. Run migrations:
```bash
npx prisma migrate deploy
```

**Pricing:**
- Free: $0/month (500 MB, 2 projects)
- Pro: $25/month (8 GB, unlimited projects)

---

### Option 4: Railway

**Why Railway:**
- $5 free credit monthly
- Easy PostgreSQL setup
- Great developer experience
- One-click deploy

**Steps:**
1. Go to [railway.app](https://railway.app)
2. Create new project → Add PostgreSQL
3. Copy `DATABASE_URL` from variables
4. Add to your hosting platform
5. Run migrations

**Pricing:**
- $5 free credit/month
- Pay as you go: ~$10/month for small apps

---

### Option 5: AWS RDS (Enterprise)

**For serious production apps:**
- Highly scalable
- Multi-region support
- Automated backups
- More expensive but enterprise-grade

**Quick Setup:**
1. Go to AWS RDS Console
2. Create PostgreSQL database
3. Choose instance size (db.t3.micro for free tier)
4. Get connection string
5. Update `DATABASE_URL`

**Pricing:**
- Free tier: 750 hours/month (12 months)
- After: ~$15-50/month depending on size

---

## 🔄 Migration Guide: SQLite → PostgreSQL

### Step 1: Update Prisma Schema

Your current schema works with PostgreSQL! But let's optimize it:

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"  // Changed from "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())  // UUID instead of Int for production
  email     String   @unique
  password  String
  name      String?
  role      String   @default("user")      // New: user roles
  plan      String   @default("free")      // New: pricing plan
  credits   Int      @default(100)         // New: AI credits
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([email])
  @@index([createdAt])
}
```

### Step 2: Create Production Database

Choose one of the options above (Neon recommended for ease of use).

### Step 3: Update Environment Variable

```bash
# Development (.env.local)
DATABASE_URL="file:./dev.db"

# Production (hosting platform environment variables)
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
```

### Step 4: Run Migrations

```bash
# Generate Prisma client
npx prisma generate

# Create migration
npx prisma migrate dev --name production_setup

# Deploy to production
npx prisma migrate deploy
```

### Step 5: Seed Database (Optional)

Create `prisma/seed.ts`:
```typescript
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  await prisma.user.upsert({
    where: { email: 'admin@captiopro.com' },
    update: {},
    create: {
      email: 'admin@captiopro.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
      plan: 'enterprise'
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

Run seed:
```bash
npx prisma db seed
```

---

## 📋 Production Checklist

Before going live:

- [ ] Choose production database (Neon recommended)
- [ ] Update Prisma schema to PostgreSQL
- [ ] Update `DATABASE_URL` in hosting platform
- [ ] Run `npx prisma migrate deploy`
- [ ] Test database connection
- [ ] Set up automated backups
- [ ] Configure connection pooling
- [ ] Add database monitoring
- [ ] Test user signup/login flow
- [ ] Implement error handling for DB failures

---

## 🔐 Security Best Practices

### Connection Pooling

For production, use connection pooling to handle multiple requests:

```bash
# Neon with pooling
DATABASE_URL="postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require&pgbouncer=true"
```

### Environment Variables

**NEVER commit:**
- `.env` files
- `.env.local` files
- Database credentials
- Any connection strings

**Always:**
- Use `.env.example` as template
- Set variables in hosting platform
- Use different databases for dev/staging/prod

### Backup Strategy

**Automated backups:**
- Neon: Automatic daily backups (7 days retention)
- Vercel Postgres: Built-in backups
- Supabase: Daily backups included
- Railway: Automatic snapshots

**Manual backups:**
```bash
# Export database
pg_dump $DATABASE_URL > backup.sql

# Restore database
psql $DATABASE_URL < backup.sql
```

---

## 🧪 Testing Your Database

### Test Connection

```typescript
// lib/prisma/testConnection.ts
import { prisma } from './client'

export async function testDatabaseConnection() {
  try {
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    
    const userCount = await prisma.user.count()
    console.log(`📊 Users in database: ${userCount}`)
    
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  } finally {
    await prisma.$disconnect()
  }
}
```

### Create Test User

```bash
npx prisma studio
# Opens GUI to view and edit database
```

---

## 🚨 Common Issues & Solutions

### Issue: "Can't reach database server"
**Solution:** Check if `DATABASE_URL` is correctly set and database is running

### Issue: "SSL connection required"
**Solution:** Add `?sslmode=require` to your connection string

### Issue: "Too many connections"
**Solution:** Use connection pooling or increase connection limit

### Issue: "Migration failed"
**Solution:** 
```bash
npx prisma migrate reset  # Development only!
npx prisma migrate deploy # Production
```

---

## 📊 Monitoring & Maintenance

### Performance Monitoring

**Add Prisma query logging:**
```typescript
// lib/prisma/client.ts
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
})
```

### Database Metrics to Track

- Query response time
- Connection pool usage
- Storage capacity
- Active connections
- Failed queries

**Recommended tools:**
- Neon Console (built-in metrics)
- Prisma Studio (database GUI)
- DataDog or New Relic (APM)

---

## 💰 Cost Optimization

### Free Tier Strategy (0-1K users)

- **Database:** Neon Free (3 GB)
- **Hosting:** Vercel Free
- **Total:** $0/month ✨

### Starter Tier (1K-10K users)

- **Database:** Neon Pro ($19/month)
- **Hosting:** Vercel Pro ($20/month)
- **Total:** $39/month

### Growth Tier (10K-100K users)

- **Database:** Neon Scale ($69/month)
- **Hosting:** Vercel Team ($100/month)
- **Total:** $169/month

---

## 🎯 Next Steps

1. **Now:** Keep SQLite for local development
2. **Before deploy:** Set up Neon PostgreSQL (free tier)
3. **After launch:** Monitor usage and upgrade as needed
4. **Scale up:** Add read replicas, caching, CDN

---

## 📚 Resources

- [Prisma PostgreSQL Guide](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- [Neon Documentation](https://neon.tech/docs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Supabase Docs](https://supabase.com/docs)

---

## ✅ My Recommendation

**For your SaaS app, I recommend:**

1. **Development:** Keep SQLite (what you have now)
2. **Production:** Use **Neon** (free tier to start)
   - Easy setup (5 minutes)
   - Generous free tier (3 GB)
   - Scales as you grow
   - No credit card required for free tier

**Total cost to get started:** $0 🎉

When you get 1,000+ users, upgrade to Neon Pro ($19/month).

Good luck with your launch! 🚀
