#!/bin/bash
# Database Migration Script for Production
# Run this when deploying to production with PostgreSQL

echo "🚀 Captiopro Database Setup"
echo "=============================="
echo ""

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ ERROR: DATABASE_URL environment variable is not set"
    echo ""
    echo "Please set your production database URL:"
    echo "export DATABASE_URL='postgresql://user:password@host:5432/database'"
    exit 1
fi

echo "✅ DATABASE_URL is set"
echo ""

# Check if it's PostgreSQL
if [[ $DATABASE_URL == postgresql://* ]] || [[ $DATABASE_URL == postgres://* ]]; then
    echo "✅ PostgreSQL database detected"
else
    echo "⚠️  WARNING: Not a PostgreSQL database"
    echo "   Current: $DATABASE_URL"
    echo ""
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔄 Generating Prisma Client..."
npx prisma generate

echo ""
echo "📊 Running database migrations..."
npx prisma migrate deploy

echo ""
echo "✅ Database setup complete!"
echo ""
echo "Optional: Seed database with demo data?"
read -p "Run database seed? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌱 Seeding database..."
    npx prisma db seed
    echo ""
    echo "✅ Database seeded with demo accounts"
    echo ""
    echo "📝 Demo Login Credentials:"
    echo "  Admin: admin@captiopro.com / Admin@123"
    echo "  Premium: premium@captiopro.com / Demo@123"
    echo "  Free: user@captiopro.com / Demo@123"
fi

echo ""
echo "🎉 All done! Your database is ready."
echo ""
echo "Next steps:"
echo "1. Run 'npm run build' to build for production"
echo "2. Run 'npm start' to start the server"
echo "3. Test your app at http://localhost:3000"
