import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PragyaFlow | Business-Critical Software Systems",
  description:
    "PragyaFlow builds custom SaaS platforms, web apps, mobile apps, financial reconciliation automation, and financial report automation for business-critical workflows.",
  keywords: [
    "custom SaaS development",
    "web app development",
    "mobile app development",
    "financial reconciliation automation",
    "financial report automation",
    "business workflow automation",
  ],
  openGraph: {
    title: "PragyaFlow | Business-Critical Software Systems",
    description:
      "Custom SaaS, apps, and finance automation built around real business workflows.",
    type: "website",
    url: "https://pragyaflow.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "PragyaFlow | Business-Critical Software Systems",
    description:
      "Custom SaaS, apps, and finance automation built around real business workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
