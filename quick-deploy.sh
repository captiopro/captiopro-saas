#!/bin/bash
# Quick Deploy Script for Captiopro SaaS

echo "🚀 Captiopro - Quick Deploy to Vercel"
echo "======================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized"
    exit 1
fi

echo "✅ Git repository ready"
echo ""

# Check if remote is set
if ! git remote -v | grep -q origin; then
    echo "⚠️  No GitHub remote found"
    echo ""
    echo "Please follow these steps:"
    echo ""
    echo "1. Go to: https://github.com/new"
    echo "2. Create repository: 'captiopro-saas'"
    echo "3. Keep it Private (recommended)"
    echo "4. DO NOT initialize with README"
    echo "5. Click 'Create repository'"
    echo ""
    echo "6. Then run these commands:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/captiopro-saas.git"
    echo "   git push -u origin main"
    echo ""
else
    echo "✅ GitHub remote configured"
    git remote -v
    echo ""
    
    # Push to GitHub
    echo "📤 Pushing to GitHub..."
    if git push origin main; then
        echo "✅ Code pushed successfully!"
        echo ""
    else
        echo "⚠️  Push failed. You may need to set upstream:"
        echo "   git push -u origin main"
        echo ""
    fi
fi

echo "🌐 Next Steps:"
echo "=============="
echo ""
echo "1. Go to: https://vercel.com"
echo "2. Click 'Add New Project'"
echo "3. Import your repository"
echo ""
echo "4. Add Environment Variable:"
echo "   Name: DATABASE_URL"
echo "   Value: (copy from .env file)"
echo ""
echo "5. Click 'Deploy'"
echo ""
echo "🎉 Your app will be live in ~2 minutes!"
echo ""
echo "📚 Full guide: See DEPLOY_NOW.md"
