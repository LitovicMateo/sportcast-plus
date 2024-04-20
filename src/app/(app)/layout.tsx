import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import CategoryMenu from "@/components/navbar/category-menu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: process.env.title as string,
    template: `%s | ${process.env.title as string}`,
  },
  description: "Dobrodošli na Sportcast Plus, mjesto na kojem sport prestravlja puno više od onoga što se događa na terenu! ",
  keywords: ["sportcast", "sportcast plus"],
  applicationName: "Sportcast Plus",
  creator: "Mateo Litović",
  openGraph: {
    title: `${process.env.title as string}`,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="6147615245363305" />
      </head>
      <body className={`${inter.className} `}>
        <NavBar />
        <CategoryMenu />
        <main className="w-full md:w-[80%] lg:w-[800px]  mx-auto min-h-svh overflow-hidden">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
