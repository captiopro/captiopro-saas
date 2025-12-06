import { BRAND } from '@/lib/constants'

export const WelcomeEmail = (userName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #0E0E11; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #4A4FFF 0%, #6366F1 100%); color: white; padding: 40px; text-align: center; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 32px; }
    .content { background: #F5F7FA; padding: 40px; border-radius: 0 0 12px 12px; }
    .btn { display: inline-block; background: linear-gradient(135deg, #4A4FFF 0%, #6366F1 100%); color: white; padding: 12px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 20px; }
    .footer { text-align: center; color: #6B7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #E5E7EB; padding-top: 20px; }
    .badge { display: inline-block; background: white; color: #4A4FFF; padding: 8px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin: 10px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div style="font-size: 40px; margin-bottom: 10px;">✨</div>
      <h1>Welcome to ${BRAND.name}!</h1>
    </div>
    <div class="content">
      <p>Hi ${userName},</p>
      <p>We're thrilled to have you on board! You now have access to ${BRAND.name} - the AI-powered content generation suite for creators.</p>
      
      <h2 style="color: #0E0E11; margin-top: 30px;">What You Can Do:</h2>
      <ul>
        <li>📱 Generate engaging social media captions</li>
        <li>🎬 Create compelling YouTube titles & descriptions</li>
        <li>✨ Brainstorm TikTok video ideas</li>
        <li>📝 Write professional blog posts</li>
        <li>📦 Craft product descriptions</li>
        <li>🔍 Generate SEO keywords</li>
        <li>📢 Write ad copy & marketing content</li>
        <li>✍️ Professional copywriting</li>
      </ul>

      <p>Your free trial includes 100 AI generations. Start creating now:</p>
      <a href="https://${BRAND.domain}/dashboard" class="btn">Go to Dashboard</a>

      <p style="margin-top: 40px; color: #6B7280; font-size: 14px;">Questions? Reply to this email or visit our <a href="https://${BRAND.domain}/help" style="color: #4A4FFF; text-decoration: none;">help center</a>.</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.</p>
      <p>${BRAND.domain} | ${BRAND.email}</p>
    </div>
  </div>
</body>
</html>
`

export const PasswordResetEmail = (userName: string, resetLink: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #0E0E11; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #4A4FFF 0%, #6366F1 100%); color: white; padding: 40px; text-align: center; border-radius: 12px 12px 0 0; }
    .content { background: #F5F7FA; padding: 40px; border-radius: 0 0 12px 12px; }
    .btn { display: inline-block; background: linear-gradient(135deg, #4A4FFF 0%, #6366F1 100%); color: white; padding: 12px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 20px; }
    .warning { background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; border-radius: 4px; margin: 20px 0; }
    .footer { text-align: center; color: #6B7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #E5E7EB; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div style="font-size: 40px; margin-bottom: 10px;">🔐</div>
      <h1>Password Reset Request</h1>
    </div>
    <div class="content">
      <p>Hi ${userName},</p>
      <p>We received a request to reset your password. If you didn't make this request, you can ignore this email.</p>

      <p>To reset your password, click the button below. This link expires in 24 hours:</p>
      <a href="${resetLink}" class="btn">Reset Password</a>

      <div class="warning">
        <strong>🔒 Security Tip:</strong> Never share this link with anyone. ${BRAND.name} will never ask for your password via email.
      </div>

      <p style="margin-top: 40px; color: #6B7280; font-size: 14px;">Or copy and paste this link in your browser:</p>
      <p style="word-break: break-all; color: #4A4FFF; font-size: 12px;">${resetLink}</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.</p>
      <p>${BRAND.domain} | ${BRAND.email}</p>
    </div>
  </div>
</body>
</html>
`

export const BillingEmail = (userName: string, amount: number, planName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #0E0E11; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #4A4FFF 0%, #6366F1 100%); color: white; padding: 40px; text-align: center; border-radius: 12px 12px 0 0; }
    .content { background: #F5F7FA; padding: 40px; border-radius: 0 0 12px 12px; }
    .invoice { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .invoice-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #E5E7EB; }
    .invoice-row.total { border-bottom: 2px solid #0E0E11; font-weight: 600; font-size: 16px; }
    .btn { display: inline-block; background: linear-gradient(135deg, #4A4FFF 0%, #6366F1 100%); color: white; padding: 12px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 20px; }
    .footer { text-align: center; color: #6B7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #E5E7EB; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div style="font-size: 40px; margin-bottom: 10px;">💳</div>
      <h1>Payment Received</h1>
    </div>
    <div class="content">
      <p>Hi ${userName},</p>
      <p>Thank you for your payment! Your subscription is active and you have full access to ${BRAND.name}.</p>

      <div class="invoice">
        <h3 style="margin-top: 0;">Invoice Details</h3>
        <div class="invoice-row">
          <span>${planName} Plan</span>
          <span>$${amount}</span>
        </div>
        <div class="invoice-row">
          <span>Renewal Date</span>
          <span>${new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString()}</span>
        </div>
        <div class="invoice-row total">
          <span>Total</span>
          <span>$${amount}</span>
        </div>
      </div>

      <p>You can manage your subscription and view your billing history anytime:</p>
      <a href="https://${BRAND.domain}/account/billing" class="btn">View Billing</a>

      <p style="margin-top: 40px; color: #6B7280; font-size: 14px;">Need help? Contact us at ${BRAND.email}</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.</p>
      <p>${BRAND.domain} | ${BRAND.email}</p>
    </div>
  </div>
</body>
</html>
`

export const MarketingEmail = (userName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #0E0E11; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #4A4FFF 0%, #6366F1 100%); color: white; padding: 40px; text-align: center; border-radius: 12px 12px 0 0; }
    .content { background: #F5F7FA; padding: 40px; border-radius: 0 0 12px 12px; }
    .feature { background: white; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #4A4FFF; }
    .feature strong { color: #4A4FFF; }
    .btn { display: inline-block; background: linear-gradient(135deg, #4A4FFF 0%, #6366F1 100%); color: white; padding: 12px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 20px; }
    .footer { text-align: center; color: #6B7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #E5E7EB; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div style="font-size: 40px; margin-bottom: 10px;">🚀</div>
      <h1>New ${BRAND.name} Features!</h1>
    </div>
    <div class="content">
      <p>Hi ${userName},</p>
      <p>We're excited to share new features that will help you create content faster than ever!</p>

      <div class="feature">
        <strong>✨ AI Content Calendar</strong>
        <p>Plan your entire month of content in minutes with our new AI-powered content calendar.</p>
      </div>

      <div class="feature">
        <strong>📊 Analytics Dashboard</strong>
        <p>Track your content performance and get insights to improve your strategy.</p>
      </div>

      <div class="feature">
        <strong>🔗 Social Media Integration</strong>
        <p>Connect directly to Instagram, Twitter, and TikTok to publish content instantly.</p>
      </div>

      <p>Ready to explore? Check out all new features:</p>
      <a href="https://${BRAND.domain}/dashboard" class="btn">See What's New</a>

      <p style="margin-top: 40px; color: #6B7280; font-size: 14px;">You're receiving this because you're a valued ${BRAND.name} member. You can <a href="https://${BRAND.domain}/account/preferences" style="color: #4A4FFF;">manage your email preferences</a>.</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.</p>
      <p>${BRAND.domain} | ${BRAND.email}</p>
    </div>
  </div>
</body>
</html>
`
