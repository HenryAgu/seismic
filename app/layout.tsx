import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "./fonts/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.otf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Ship To Nigeria",
  description: "Reliable international shopping and shipping to Nigeria.",
  openGraph: {
    title: "Ship To Nigeria",
    description:
      "Shop globally and ship securely to Nigeria with real-time tracking.",
    url: "https://seismic-gamma.vercel.app/",
    siteName: "Ship To Nigeria",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Ship To Nigeria – Global Shopping Made Easy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ship To Nigeria",
    description:
      "Shop globally and ship securely to Nigeria with real-time tracking.",
    images: ["/og-image.png"],
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
        className={`${satoshi.className} antialiased container mx-auto bg-background scroll-smooth`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
