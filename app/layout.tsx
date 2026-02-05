import "./css/style.css";

import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";

import Header from "@/components/ui/header";
import InputWidget from "@/components/InputWidget";
import ReviewMode from "@/components/ReviewMode";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibecoding Amsterdam \u2014 Feb 6, 2025",
  description:
    "A free afternoon of building software with AI at the Embassy of the Free Mind. No coding experience required.",
  openGraph: {
    title: "Vibecoding Amsterdam \u2014 Feb 6, 2025",
    description:
      "A free afternoon of building software with AI at the Embassy of the Free Mind. No coding experience required.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibecoding Amsterdam \u2014 Feb 6, 2025",
    description:
      "A free afternoon of building software with AI at the Embassy of the Free Mind.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} ${playfair.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
        <InputWidget allowedHosts={["localhost", "vibecodingevents.vercel.app"]} />
        <ReviewMode />
      </body>
    </html>
  );
}
