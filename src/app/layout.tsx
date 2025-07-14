import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import Header from "./components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini-Commerce",
  description: "A tiny e-commerce shop prototype with cart, checkout and product browsing.",
  keywords: [
    "e-commerce",
    "next.js",
    "react",
    "zustand",
    "react-query",
    "tailwind",
    "mini-commerce",
    "shopping cart",
    "frontend assessment",
    "stackbuld",
  ],
  metadataBase: new URL("https://stackbuld-accessment.vercel.app"),
  openGraph: {
    title: "Mini-Commerce",
    description: "A sleek React + Next.js e-commerce prototype built with modern tools.",
    url: "https://stackbuld-accessment.vercel.app/",
    siteName: "Mini-Commerce",
    images: [
      {
        url: "/stackbuld-accessment.jpeg", 
        width: 1200,
        height: 630,
        alt: "Mini-Commerce - Shop Prototype"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini-Commerce",
    description: "A slick, modern e-commerce prototype with cart and checkout.",
    creator: "@Chinwe_script", 
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/favicon.ico"
  },
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <QueryProvider>
          <Header />
          <div className="min-h-screen flex flex-col items-center">
            <main className="flex-1 w-full px-5 py-8 max-w-6xl">{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
