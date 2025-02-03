import Link from "next/link"
import { Footer } from "./components/footer"
import ErrorBoundary from "./components/error-boundary"
import "./globals.css"
import type { Metadata } from "next"
import { CommandMenu } from "./components/command-menu"
import { SearchButton } from "./components/search-button"
import { Navigation as MainNav } from "./components/navigation"
import type React from "react" // Import React
import { SettingsDrawer } from "./components/settings-drawer"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  metadataBase: new URL("https://securerpc.com"),
  title: {
    default: "SecureRPC - Enterprise Grade JSON-RPC Infrastructure",
    template: "%s | SecureRPC",
  },
  description:
    "SecureRPC is a bare-metal, fully conformant JSON-RPC/gRPC infrastructure plane that aims to perform well and meet the highest requirements for censorship resistance and privacy.",
  keywords: [
    "SecureRPC",
    "JSON-RPC",
    "gRPC",
    "Ethereum",
    "blockchain",
    "MEV protection",
    "privacy",
  ],
  authors: [{ name: "Manifold Finance" }],
  creator: "Manifold Finance",
  publisher: "SecureRPC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://securerpc.com",
    siteName: "SecureRPC",
    title: "SecureRPC - Enterprise Grade JSON-RPC Infrastructure",
    description:
      "A bare-metal, fully conformant JSON-RPC/gRPC infrastructure plane with advanced privacy and MEV protection features.",
    images: [
      {
        url: "https://securerpc.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SecureRPC - Keeping Ethereum Censorship Free since 2020",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureRPC - Enterprise Grade JSON-RPC Infrastructure",
    description:
      "A bare-metal, fully conformant JSON-RPC/gRPC infrastructure plane with advanced privacy and MEV protection features.",
    images: ["https://securerpc.com/og-image.jpg"],
    creator: "@manifoldfinance",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://securerpc.com/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#141414] text-white flex flex-col">
        <ErrorBoundary>
          <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#141414]">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
              <CommandMenu />
              <Link href="/" className="text-xl font-semibold">
                SecureRPC
              </Link>
              <div className="flex items-center space-x-4">
                <MainNav />
                <SearchButton />
                <SettingsDrawer />
              </div>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <Footer />
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  )
}
