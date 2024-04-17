import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import CategoryMenu from "@/components/navbar/category-menu";

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
    images: {
      url: "/sportcast_logo.jpg",
      width: 800,
      height: 600,
    },
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
      <body className={`${inter.className} `}>
        <NavBar />
        <CategoryMenu />
        <main className="w-full md:w-[80%] lg:w-[800px]  mx-auto min-h-svh overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
