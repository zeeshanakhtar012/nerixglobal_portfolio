import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SoftMat Dev | Building Scalable, High-Performance Solutions",
  description: "A professional software company specializing in mobile apps, SaaS platforms, and scalable systems that drive real business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#020617]`}>
        {children}
      </body>
    </html>
  );
}
