// @ts-nocheck
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomCursor from "../components/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BPL - Advanced Propulsion Systems",
  description: "Pioneering the future of liquid rocket propulsion systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
