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
  title: "Vibecoding Amsterdam — Feb 6, 2025",
  description:
    "A free afternoon of building software with AI at the Embassy of the Free Mind. No coding experience required.",
  openGraph: {
    title: "Vibecoding Amsterdam — Feb 6, 2025",
    description:
      "A free afternoon of building software with AI at the Embassy of the Free Mind. No coding experience required.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibecoding Amsterdam — Feb 6, 2025",
    description:
      "A free afternoon of building software with AI at the Embassy of the Free Mind.",
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
