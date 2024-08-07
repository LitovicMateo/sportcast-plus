import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "./wordpress.css";
import NavBar from "@/components/navbar/navbar";
import CategoryMenu from "@/components/navbar/category-menu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";

// Load Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

// Define metadata for the site
export const metadata: Metadata = {
  metadataBase: new URL("https://sportcast.plus"),
  title: {
    default: process.env.NEXT_PUBLIC_SITE_TITLE || "Sportcast Plus",
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_TITLE || "Sportcast Plus"}`,
  },
  description:
    "Dobrodošli na Sportcast Plus, mjesto na kojem sport predstavlja puno više od onoga što se događa na terenu!",
  keywords: ["sportcast", "sportcast plus"],
  applicationName: "Sportcast Plus",
  creator: "Mateo Litović",
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_TITLE || "Sportcast Plus",
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
      <body className={`${inter.className} flex flex-col justify-start`}>
        {/* <NavBar /> */}
        <Navbar />
        {/* <CategoryMenu /> */}
        <main className="h-fit min-h-[100svh] md:pt-6">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
