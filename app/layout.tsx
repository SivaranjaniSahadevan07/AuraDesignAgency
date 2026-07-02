import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA // Premium Creative & Digital Design Agency",
  description: "We design and build bespoke digital experiences, brand identities, and high-performance web applications for forward-thinking startups and enterprises.",
  keywords: ["Design Agency", "UI/UX Design", "Web Development", "Brand Identity", "Digital Experience"],
  authors: [{ name: "AURA Agency" }],
  openGraph: {
    title: "AURA // Premium Creative & Digital Design Agency",
    description: "We design and build bespoke digital experiences, brand identities, and high-performance web applications.",
    url: "https://aura-agency.com",
    siteName: "AURA Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA // Premium Creative & Digital Design Agency",
    description: "We design and build bespoke digital experiences, brand identities, and high-performance web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-[#F8FAFC] text-[#111827] antialiased selection:bg-blue-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
