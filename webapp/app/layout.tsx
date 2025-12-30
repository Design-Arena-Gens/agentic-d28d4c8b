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
  title: "Electromagnetic Metasurface Intelligence",
  description:
    "Exploring Xidian University's multifunctional electromagnetic surface that unifies radar energy harvesting and 6G-ready communications.",
  metadataBase: new URL("https://agentic-d28d4c8b.vercel.app"),
  openGraph: {
    title: "Electromagnetic Metasurface Intelligence",
    description:
      "Discover how reconfigurable intelligent surfaces convert radar waves into power while enabling stealth-era communications.",
    url: "https://agentic-d28d4c8b.vercel.app",
    siteName: "RIS Energy Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electromagnetic Metasurface Intelligence",
    description:
      "Briefing on Xidian University's multifunctional electromagnetic surface for defense and 6G communications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
