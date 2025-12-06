import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { BRAND } from "@/lib/constants";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: `${BRAND.name} - ${BRAND.tagline}`,
  description: BRAND.description,
  keywords: [
    "AI content generation",
    "social media captions",
    "YouTube titles",
    "TikTok ideas",
    "blog writing",
    "product descriptions",
    "SEO keywords",
    "marketing content",
    "copywriting",
  ],
  authors: [{ name: BRAND.name, url: `https://${BRAND.domain}` }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.description,
    creator: "@captiopro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0E0E11" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased relative">
        <AuthProvider>
          <Navbar />

          {/* Global premium background applied site-wide (homepage-like) */}
          <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
            <div className="gradient-mesh absolute inset-0 opacity-50"></div>
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#4A4FFF]/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float-smooth" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/15 via-[#4A4FFF]/10 to-transparent rounded-full blur-3xl animate-float-smooth" style={{ animationDelay: '2s' }} />
          </div>

          <main className="min-h-screen pt-16 relative z-10">
            {children}
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
