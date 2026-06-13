import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import type React from "react";
import "./styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer";
import TanstackProvider from "../providers/TanstackProvider";
import CurrencyProvider from "../providers/CurrencyProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const satioshi = localFont({
  src: "./fonts/satoshi.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
});

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const metaDescription =
  "Bluemint is a simple invoice generator for freelancers and small businesses. It is a self hostable web application that can be used to generate invoices and download PDFs";

export const metadata: Metadata = {
  title: "Bluemint",
  description: metaDescription,
  openGraph: {
    title: "Bluemint",
    description: metaDescription,
    url: "https://bluemint.ankitmohanty.in",
    siteName: "Bluemint",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bluemint.ankitmohanty.in/assets/og/og-bg.png",
        width: 1200,
        height: 630,
        alt: "Home page of Bluemint",
      },
    ],
  },

  twitter: {
    title: "Bluemint",
    card: "summary_large_image",
    creator: "@ankitmohanty",
    creatorId: "@ankitmohanty",
    site: "@ankitmohanty",
    siteId: "@ankitmohanty",
    description: metaDescription,
    images: ["https://bluemint.ankitmohanty.in/assets/og/og-bg.png"],
  },
  icons: {
    shortcut: "/assets/logos/bluemint_logo1.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logos/bluemint_logo1.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${manrope.variable} ${satioshi.variable} font-primary antialiased min-h-screen overflow-x-hidden`}
      >
        <TanstackProvider>
          <CurrencyProvider>
            <div className="mx-0 w-full">
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar />
                {children}
                <Footer />
              </ThemeProvider>
            </div>
          </CurrencyProvider>
        </TanstackProvider>
      </body>

      {process.env.GOOGLE_ANALYTICS_ID && process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
