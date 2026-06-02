import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ParkLanes — Real-Time Smart Parking Infrastructure",
  description: "Find parking spaces faster, simplify parking check-ins with dynamic QR verification, and optimize city-wide parking operations.",
  keywords: ["smart parking", "parking management", "QR parking checkin", "occupancy tracking", "traffic reduction", "urban mobility"],
  authors: [{ name: "ParkLanes Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#07111F] text-white">
        {children}
      </body>
    </html>
  );
}
