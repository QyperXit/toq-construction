import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TOQ Construction | General Contracting Excellence",
  description: "Premier construction management and general contracting services for hospitality, commercial, and residential developments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased selection:bg-slate-900 selection:text-white bg-slate-50 text-slate-600`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
