import ErrorBoundary from "./components/error-boundary"
import { Footer } from "./components/footer"
import { Navigation } from "./components/navigation"
import "./globals.css"
import type { Metadata } from "next"
import { generateMetadata } from "./components/metadata"
import { Analytics } from "@vercel/analytics/react"

// On the initial load, streaming is blocked until generateMetadata has fully resolved, including any content from loading.js.
export const metadata: Metadata = generateMetadata({
	title: "SecureRPC | Secure and Efficient RPC Infrastructure for Ethereum",
	description:
		"SecureRPC provides robust, high-performance, and MEV-protected RPC infrastructure for Ethereum developers and applications.",
	keywords: ["SecureRPC", "Ethereum", "RPC", "Blockchain", "MEV Protection", "Web3"],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />
			</head>
			<body className="min-h-screen bg-[#141414] text-white flex flex-col">
				<Navigation />
				<ErrorBoundary>{children}</ErrorBoundary>
				<Footer />
				<Analytics />
			</body>
		</html>
	)
}
