import { Button } from "@/components/ui/button"
import Link from "next/link"
// Disabled
//import { APIEndpoint } from "./components/api-endpoint";
import { BenchmarksTable } from "./components/benchmarks-table"
import { CashCounter } from "./components/cash-counter"
import { FeatureGrid } from "./components/feature-grid"
import { MevProtection } from "./components/mev-protection"
import { PrivacySection } from "./components/privacy-section"
import type { Metadata } from "next"
import { generateMetadata } from "./components/metadata"
import { AddSecureRPCToMetaMask } from "./components/add_metamask"

export const metadata: Metadata = {
	title: "SecureRPC | Secure Ethereum RPC Infrastructure",
	description:
		"SecureRPC offers high-performance, MEV-protected RPC infrastructure for Ethereum developers and applications. Experience secure and efficient blockchain interactions.",
	keywords: ["SecureRPC", "Ethereum", "RPC", "MEV Protection", "Blockchain Infrastructure", "Web3 Development"],
	openGraph: {
		title: "SecureRPC",
		description: "Connect to Opportunities",
		url: "https://securerpc.com",
		siteName: "SecureRPC",
		images: [
			{
				url: "https://securerpc.com/og-image.png", // Must be an absolute URL
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		title: "SecureRPC",
		description: "Connect to Opportunities",
		// site: 'https://securerpc.com',
		creator: "@foldfinance",
	},
}
export default function Page() {
	return (
		<main className="flex-grow">
			{/* Hero Section */}
			<section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
				<div className="absolute inset-0 bg-gradient-to-br from-[#31C4B9]/20 via-transparent to-transparent z-0" />
				<div className="relative z-20 min-h-[calc(100vh-4rem)] flex items-center">
					<div className="container mx-auto px-6 py-24">
						<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
							<div className="max-w-2xl">
								<p className="text-[#31C4B9] text-sm font-medium mb-4">Manifold Finance</p>
								<h1 className="text-4xl md:text-5xl font-bold mb-6">
									Protect your trades <br />
									Get up to 100% cash back
								</h1>
								<p className="text-lg text-gray-400 mb-8">
									100% Protection, unlike MEV Share or MEV Blocker. Works with any wallet and dapp, including MetaMask.
								</p>
								<div className="flex flex-wrap gap-4">
									<Link
										href="/docs/getting-started"
										className="bg-[#31C4B9] hover:bg-[#31C4B9]/90 text-white font-semibold px-6 py-3 rounded-lg"
									>
										<Button className="bg-[#31C4B9] hover:bg-[#31C4B9]/90 text-white font-semibold">Get started</Button>
									</Link>
									<Link href="/comparison">
										<Button
											variant="outline"
											className="border-white/10 hover:bg-white/5 text-white hover:text-[#31C4B9]"
										>
											Why SecureRPC?
										</Button>
									</Link>
									<AddSecureRPCToMetaMask rpcs={["https://api.securerpc.com/v1"]} />
								</div>
								{/** 	  <Button variant="ghost" className="mt-4 text-white hover:text-white hover:bg-white/5">
					Join Telegram
				  </Button>
				  */}
							</div>
							<div className="w-full lg:w-auto">
								<CashCounter />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* MEV Protection Section */}
			<section className="container mx-auto px-6 py-24">
				<MevProtection />
			</section>

			{/* SecureRPC Features */}
			<section className="container mx-auto px-6 mb-24">
				<h2 className="text-3xl font-bold mb-8">SecureRPC Features</h2>
				<FeatureGrid />
			</section>

			{/* API Endpoint Section 
			<section className="container mx-auto px-6 py-12 mb-24">
				<h2 className="text-3xl font-bold mb-8">RPC Endpoint</h2>
				<APIEndpoint />
			</section>
			*/}
			{/* Benchmarks Section */}
			<section className="container mx-auto px-6 py-24">
				<h2 className="text-3xl font-bold mb-8">SecureRPC vs Traditional RPC</h2>
				<BenchmarksTable />
			</section>

			{/* Privacy Section */}
			<section className="container mx-auto px-6 py-24">
				<PrivacySection />
			</section>
		</main>
	)
}
