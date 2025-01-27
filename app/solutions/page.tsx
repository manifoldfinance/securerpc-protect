import Link from "next/link";
import { Github } from "lucide-react";
import { SiteSearch } from "../components/site-search";
import { ProcessGraphics } from "../components/process-graphics";
import ExtractionStrategies from "../components/strat";

export default function SolutionsPage() {
	return (
		<main className="flex-grow container mx-auto px-6 py-12">
			<h1 className="text-4xl font-bold mb-8">Solutions</h1>

			{/* Process Overview Section */}
			<section className="mb-24">
				<h2 className="text-3xl font-bold mb-8">Our Process</h2>
				<div className="space-y-12">
					<ProcessGraphics />
					<div className="grid md:grid-cols-3 gap-8 text-center">
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Precise Positioning</h3>
							<p className="text-gray-400">
								Strategic transaction placement ensures optimal execution within
								the block
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Path Optimization</h3>
							<p className="text-gray-400">
								Advanced routing algorithms find the most efficient transaction
								paths
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Timing Control</h3>
							<p className="text-gray-400">
								Precise execution timing maximizes transaction success rates
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="mb-24">
				<h2 className="text-3xl font-bold mb-8">How It Works</h2>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-lg text-gray-400">
							SecureRPC uses advanced transaction ordering and protection
							mechanisms to ensure your transactions are processed securely and
							efficiently.
						</p>
						<div className="space-y-4">
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">
									α - Standard Transaction Flow
								</h3>
								<p className="text-gray-400">
									Shows the baseline transaction ordering where transactions are
									processed sequentially without protection.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">
									β - Pre-validation Protection
								</h3>
								<p className="text-gray-400">
									Introduces protected transaction slots (Ta) with validation
									checks before processing.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">
									γ - Optimized Batch Processing
								</h3>
								<p className="text-gray-400">
									Implements batched transaction processing with protected slots
									for better efficiency.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">
									δ - Enhanced Protection Layer
								</h3>
								<p className="text-gray-400">
									Adds an additional layer of protection while maintaining
									efficient processing order.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">
									ε - Advanced MEV Protection
								</h3>
								<p className="text-gray-400">
									Implements our full MEV protection suite with multiple secure
									transaction slots.
								</p>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="bg-black/40 rounded-lg p-8 border border-white/10">
							<img
								src="/tx_ordering_diagram.png"
								alt="Transaction Ordering Diagram"
								className="w-full h-auto"
							/>
						</div>
						<div className="absolute -inset-4 bg-[#31C4B9]/5 rounded-lg -z-10 blur-xl" />
					</div>
				</div>
			</section>
			{/**  
			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4">
					Enterprise RPC Infrastructure
				</h2>
				<p className="mb-4">
					Our enterprise-grade RPC infrastructure provides high-performance,
					secure access to Ethereum and other EVM-compatible networks. Designed
					for businesses that require reliable and scalable blockchain
					connectivity.
				</p>
				<Link href="/contact" className="text-blue-400 hover:underline">
					Learn more about our Enterprise solutions
				</Link>
			</section>
			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4">MEV Protection</h2>
				<p className="mb-4">
					Protect your transactions from front-running and other MEV-related
					attacks with our advanced MEV protection solution. Ensure fair
					execution and minimize value extraction from your transactions.
				</p>
				<Link href="/mev-protection" className="text-blue-400 hover:underline">
					Explore our MEV Protection features
				</Link>
			</section>
			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4">
					Custom Blockchain Development
				</h2>
				<p className="mb-4">
					Our team of experienced blockchain developers can help you build
					custom solutions tailored to your specific needs. From smart contract
					development to full-scale dApp creation, we've got you covered.
				</p>
				<Link
					href="/custom-development"
					className="text-blue-400 hover:underline"
				>
					Discover our Custom Development services
				</Link>
			</section>
			<section>
				<h2 className="text-2xl font-semibold mb-4">
					Consulting and Integration
				</h2>
				<p className="mb-4">
					Need help integrating blockchain technology into your existing
					systems? Our consulting team can guide you through the process,
					ensuring a smooth transition and optimal use of blockchain
					capabilities.
				</p>
				<Link href="/consulting" className="text-blue-400 hover:underline">
					Learn about our Consulting services
				</Link>
			</section>
			*/}
		</main>
	);
}
