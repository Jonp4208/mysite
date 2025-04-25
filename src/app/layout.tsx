import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Calhoun Web Creations | Premium Web Design Services in Georgia",
  description: "Award-winning web design services in Calhoun, Georgia. We create beautiful, conversion-focused websites that help local businesses grow online.",
  keywords: "web design Calhoun, website development Georgia, Calhoun web designer, responsive web design, SEO web design, local business websites, Calhoun GA",
  authors: [{ name: "Calhoun Web Creations" }],
  creator: "Calhoun Web Creations",
  publisher: "Calhoun Web Creations",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://www.calhounwebcreations.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Calhoun Web Creations | Premium Web Design Services in Georgia",
    description: "Award-winning web design services in Calhoun, Georgia. We create beautiful, conversion-focused websites that help local businesses grow online.",
    url: 'https://www.calhounwebcreations.com',
    siteName: 'Calhoun Web Creations',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calhoun Web Creations',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Calhoun Web Creations | Premium Web Design Services",
    description: "Award-winning web design services in Calhoun, Georgia. Beautiful, conversion-focused websites for local businesses.",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Analytics from '@/components/analytics/Analytics';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Calhoun" />
        <meta name="geo.position" content="34.5025;-84.9513" />
        <meta name="ICBM" content="34.5025, -84.9513" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <Analytics />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
