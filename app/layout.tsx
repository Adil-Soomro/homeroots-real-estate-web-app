import type { Metadata } from "next";
import { Allura, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/LayoutComponents/Navbar";
import Footer from "@/components/LayoutComponents/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HomeRoots – Find Your Perfect Home",
  description:
    "HomeRoots helps you discover the perfect place to live, buy, or rent. Explore verified properties with ease and find where you truly belong.",
  keywords: [
    "real estate",
    "buy home",
    "rent property",
    "homes for sale",
    "apartments",
    "property listings",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
