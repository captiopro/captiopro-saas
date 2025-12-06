// Captiopro Brand Constants
export const BRAND = {
  name: 'Captiopro',
  tagline: 'AI Tools for Content Creators',
  domain: 'captiopro.com',
  email: 'hello@captiopro.com',
  description: 'Captiopro is an AI-powered content generation suite for social media captions, YouTube titles, TikTok ideas, blogs, copywriting, product descriptions, SEO keywords, and marketing content.',
} as const;

export const COLORS = {
  primary: '#0E0E11', // Deep black
  accent: '#4A4FFF', // Royal blue
  background: '#F5F7FA', // Light gray
  white: '#FFFFFF',
  text: {
    primary: '#0E0E11',
    secondary: '#6B7280',
    light: '#9CA3AF',
  },
  border: '#E5E7EB',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
} as const;

export const TOOLS = [
  {
    id: 'social-captions',
    name: 'Social Captions',
    description: 'Generate engaging captions for Instagram, TikTok, and other social platforms',
    iconName: 'MessageCircle',
    color: '#FF6B9D',
  },
  {
    id: 'youtube-titles',
    name: 'YouTube Titles',
    description: 'Create compelling titles and descriptions for YouTube videos',
    iconName: 'Play',
    color: '#FF0000',
  },
  {
    id: 'tiktok-ideas',
    name: 'TikTok Ideas',
    description: 'Generate trending TikTok video concepts and scripts',
    iconName: 'Sparkles',
    color: '#000000',
  },
  {
    id: 'blogs',
    name: 'Blog Writing',
    description: 'Write full blog posts and articles with AI assistance',
    iconName: 'FileText',
    color: '#6366F1',
  },
  {
    id: 'product-descriptions',
    name: 'Product Descriptions',
    description: 'Create persuasive product descriptions for e-commerce',
    iconName: 'Package',
    color: '#8B5CF6',
  },
  {
    id: 'seo-keywords',
    name: 'SEO Keywords',
    description: 'Generate SEO-optimized keywords and meta descriptions',
    iconName: 'Search',
    color: '#3B82F6',
  },
  {
    id: 'ads',
    name: 'Ads & Marketing',
    description: 'Write compelling ad copy for Google, Facebook, and more',
    iconName: 'Megaphone',
    color: '#F59E0B',
  },
  {
    id: 'copywriting',
    name: 'Copywriting',
    description: 'Professional copywriting for sales pages, emails, and more',
    iconName: 'PenTool',
    color: '#EC4899',
  },
] as const;

export const PRICING_PLANS = [
  {
    id: 'free' as const,
    name: 'Free',
    price: 0,
    description: 'Try before you buy',
    featured: false,
    features: [
      '10 AI generations per month',
      'Access to 3 content tools',
      'Basic templates',
      'Community support',
      'Captiopro watermark',
    ],
    limitations: [
      'Limited to 10 generations/month',
      'Access to Social Captions, Blog Writing, and YouTube Titles only',
      'Captiopro branding on outputs',
    ],
  },
  {
    id: 'starter' as const,
    name: 'Starter',
    price: 29,
    description: 'Perfect for getting started',
    featured: false,
    features: [
      '100 AI generations per month',
      'All 8 content tools',
      'Basic templates',
      'Email support',
      'No watermark',
      'Export to multiple formats',
    ],
  },
  {
    id: 'professional' as const,
    name: 'Professional',
    price: 79,
    description: 'Most popular for creators',
    featured: true,
    features: [
      'Unlimited AI generations',
      'All 8 content tools',
      'Advanced templates',
      'Priority support',
      'Content calendar',
      'API access',
      'Team collaboration (up to 5)',
      'Advanced analytics',
    ],
  },
  {
    id: 'enterprise' as const,
    name: 'Enterprise',
    price: 299,
    description: 'For teams and agencies',
    featured: false,
    features: [
      'Unlimited AI generations',
      'All 8 content tools',
      'Custom templates',
      '24/7 priority support',
      'Content calendar',
      'API access',
      'Unlimited team collaboration',
      'Custom integrations',
      'White-label options',
      'Dedicated account manager',
    ],
  },
] as const;

export const FEATURES = [
  {
    title: 'AI-Powered Generation',
    description: 'Advanced AI models create high-quality content instantly',
    iconName: 'Zap',
  },
  {
    title: 'Multiple Content Types',
    description: 'Generate captions, titles, descriptions, blogs, and more',
    iconName: 'Layers',
  },
  {
    title: 'SEO Optimized',
    description: 'All content is optimized for search engines',
    iconName: 'TrendingUp',
  },
  {
    title: 'Template Library',
    description: 'Hundreds of templates for every content type',
    iconName: 'Layout',
  },
  {
    title: 'Team Collaboration',
    description: 'Work together with your team in real-time',
    iconName: 'Users',
  },
  {
    title: 'API Integration',
    description: 'Integrate Captiopro into your existing workflows',
    iconName: 'Code',
  },
] as const;

export const NAVIGATION = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Content Creator',
    company: '@sarahcreates',
    avatar: 'SJ',
    rating: 5,
    text: 'Captiopro has completely transformed my content creation workflow. I can now generate weeks worth of content in just hours!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'TechFlow Inc.',
    avatar: 'MC',
    rating: 5,
    text: 'The AI-generated content is incredibly high quality. Our engagement rates have increased by 150% since we started using Captiopro.',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Social Media Manager',
    company: 'BrandBoost',
    avatar: 'ER',
    rating: 5,
    text: 'Best investment for our agency. The time we save allows us to focus on strategy rather than content production.',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'YouTuber',
    company: '500K Subscribers',
    avatar: 'DP',
    rating: 5,
    text: 'The YouTube title and description generator is a game-changer. My click-through rates have never been better!',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'E-commerce Owner',
    company: 'StyleHub',
    avatar: 'LA',
    rating: 5,
    text: 'Product descriptions that actually convert! Our sales increased by 40% after implementing Captiopro-generated content.',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Blogger',
    company: 'TechInsights',
    avatar: 'JW',
    rating: 5,
    text: 'I can now publish 3x more content without sacrificing quality. Captiopro is an essential tool for any serious blogger.',
  },
] as const;

export const TRUST_BADGES = [
  { name: 'G2', rating: 4.8, reviews: '500+' },
  { name: 'Product Hunt', rating: 4.9, reviews: '1000+' },
  { name: 'Trustpilot', rating: 4.7, reviews: '750+' },
  { name: 'Capterra', rating: 4.8, reviews: '600+' },
] as const;

export const CLIENTS = [
  'TechFlow', 'BrandBoost', 'StyleHub', 'ContentKing', 'SocialPro', 'MarketMind',
] as const;

export const STATS = {
  users: '50,000+',
  contentGenerated: '5M+',
  timesSaved: '100K+ hours',
  satisfaction: '98%',
} as const;

export const FAQ_ITEMS = [
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What AI model does Captiopro use?',
    answer: 'We use state-of-the-art language models including GPT-4 and Claude to ensure the highest quality content generation.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a completely free plan with 10 generations per month. No credit card required.',
  },
  {
    question: 'Can I use the content for commercial purposes?',
    answer: 'Absolutely! All content generated with Captiopro is yours to use however you like, including commercial purposes.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 14-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.',
  },
  {
    question: 'How does the API access work?',
    answer: 'Professional and Enterprise plans include API access with comprehensive documentation. Integrate Captiopro into your applications seamlessly.',
  },
] as const;
