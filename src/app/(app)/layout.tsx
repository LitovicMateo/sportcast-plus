import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./Layout.module.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";
import { pageConfig } from "@/lib/configs/pageConfig";

// Load Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });
const {pageCreator,pageDescription, pageKeywords, pageName, pageUrl} = pageConfig

export const metadata: Metadata = {
  metadataBase: new URL(pageUrl),
  title: {
    default: process.env.NEXT_PUBLIC_SITE_TITLE || pageName,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_TITLE || pageName}`,
  },
  description: pageDescription,
  keywords: pageKeywords,
  applicationName: pageName,
  creator: pageCreator,
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_TITLE || pageName,
  },
};

// Define viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// Root layout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="6147615245363305" />
      </head>
      <body className={`${inter.className} ${styles.body}`}>
        <Navbar />
        <main className={styles.layout}>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
