# 🗄️ Database Quick Reference

## Current Setup
- **Development:** SQLite (`dev.db`)
- **Production:** Need to migrate to PostgreSQL

## 🚨 Important
**SQLite is NOT suitable for production!**
- ❌ No concurrent writes
- ❌ Single server only
- ❌ Data loss risk
- ✅ Perfect for development

---

## ✅ Recommended: Neon PostgreSQL (FREE)

### Why Neon?
- ✅ **FREE 3 GB** (enough for 10,000+ users)
- ✅ Serverless (auto-scales to zero)
- ✅ 5-minute setup
- ✅ No credit card for free tier
- ✅ Built-in backups

### Setup Steps (5 minutes)

1. **Create Neon Account**
   ```
   Go to: https://neon.tech
   Sign up with GitHub
   ```

2. **Create Database**
   ```
   - Click "Create Project"
   - Choose region (closest to users)
   - Copy connection string
   ```

3. **Update Environment Variable**
   ```bash
   # In your hosting platform (Vercel, Railway, etc.)
   DATABASE_URL="postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/db?sslmode=require"
   ```

4. **Run Migrations**
   ```bash
   npx prisma migrate deploy
   ```

5. **Done!** Your production database is ready 🎉

---

## 📊 Database Commands

### Essential Commands
```bash
# Generate Prisma client (after schema changes)
npm run db:generate

# Run migrations (deploy to production)
npm run db:migrate

# Seed database with demo data
npm run db:seed

# Open database GUI
npm run db:studio

# Full setup (recommended for first time)
npm run db:setup
```

### Useful Prisma Commands
```bash
# Create new migration (development)
npx prisma migrate dev --name your_migration_name

# Reset database (development only - deletes all data!)
npx prisma migrate reset

# Pull schema from existing database
npx prisma db pull

# Push schema without migrations (quick prototyping)
npx prisma db push

# Format schema file
npx prisma format

# Validate schema
npx prisma validate
```

---

## 🔄 Migration Path

### Current (Development)
```
SQLite → dev.db file
✅ Fast, simple
❌ Not production-ready
```

### Production (Recommended)
```
PostgreSQL → Neon/Vercel/Supabase
✅ Scalable, reliable
✅ Concurrent connections
✅ Built-in backups
```

---

## 🌐 Production Database Options

| Provider | Free Tier | Best For | Setup Time |
|----------|-----------|----------|------------|
| **Neon** | 3 GB | Most apps | 5 min ⭐ |
| Vercel Postgres | 256 MB | Vercel users | 2 min |
| Supabase | 500 MB | Full stack | 5 min |
| Railway | $5 credit | Quick start | 3 min |
| AWS RDS | 12 months | Enterprise | 15 min |

---

## 📝 Demo Accounts (After Seeding)

```
Admin Account:
  Email: admin@captiopro.com
  Password: Admin@123
  Plan: Enterprise (unlimited)

Premium Account:
  Email: premium@captiopro.com
  Password: Demo@123
  Plan: Professional (10K credits)

Free Account:
  Email: user@captiopro.com
  Password: Demo@123
  Plan: Free (100 credits)
```

---

## 🆘 Troubleshooting

### Error: Can't connect to database
```bash
# Check if DATABASE_URL is set
echo $DATABASE_URL

# Test connection
npx prisma db pull
```

### Error: Migration failed
```bash
# Reset and re-migrate (dev only!)
npx prisma migrate reset
npx prisma migrate dev
```

### Error: Prisma client not generated
```bash
npx prisma generate
```

### Error: SSL connection required
```bash
# Add to your DATABASE_URL:
?sslmode=require
```

---

## 🔐 Security Checklist

- [ ] Use PostgreSQL in production (not SQLite)
- [ ] DATABASE_URL is in environment variables (not in code)
- [ ] SSL enabled (`?sslmode=require`)
- [ ] Different databases for dev/staging/prod
- [ ] Automated backups enabled
- [ ] Connection pooling configured
- [ ] No database credentials in git

---

## 📈 Scaling Plan

### 0-1K users
- **Database:** Neon Free (3 GB)
- **Cost:** $0/month

### 1K-10K users
- **Database:** Neon Pro (10 GB)
- **Cost:** $19/month

### 10K-100K users
- **Database:** Neon Scale (50 GB)
- **Cost:** $69/month

### 100K+ users
- **Database:** AWS RDS Multi-AZ
- **Cost:** $200+/month

---

## 🎯 Action Items

**Before Deploying:**
1. [ ] Create Neon account
2. [ ] Get PostgreSQL connection string
3. [ ] Add DATABASE_URL to hosting platform
4. [ ] Run `npx prisma migrate deploy`
5. [ ] Test login/signup flow
6. [ ] Set up database backups

**Recommended:** Start with Neon free tier. Upgrade when needed.

---

## 📚 Learn More

- [Neon Documentation](https://neon.tech/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [DATABASE_SETUP.md](./DATABASE_SETUP.md) - Full guide

---

**Questions?** Check DATABASE_SETUP.md for detailed instructions!
