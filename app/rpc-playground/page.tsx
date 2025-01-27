import { Button } from "@/components/ui/button";
import Link from "next/link";
import { APIEndpoint } from "../components/api-endpoint";
import { BenchmarksTable } from "../components/benchmarks-table";
import { CashCounter } from "../components/cash-counter";
import { FeatureGrid } from "../components/feature-grid";
import { RPCPlayground } from "./rpc-playground";

export const metadata = {
	title: "RPC Playground",
	description:
		"Experiment with various JSON-RPC methods and query our API endpoint.",
};

export default function RPCPlaygroundPage() {
	return (
		<div className="min-h-screen bg-[#141414] text-white flex flex-col">
			<main className="flex-grow">
				{/* Hero Section */}
				<section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
					<div className="absolute inset-0 bg-gradient-to-br from-[#31C4B9]/20 via-transparent to-transparent z-0" />
					<div className="relative z-20 min-h-[calc(100vh-4rem)] flex items-center">
						<div className="container mx-auto px-6 py-24">
							<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
								<div className="max-w-2xl">
									<h1 className="text-4xl md:text-5xl font-bold mb-6">
										RPC Playground
									</h1>
									<p className="text-lg text-gray-400 mb-8">
										Experiment with various JSON-RPC methods and query our API
										endpoint. Select a method, provide parameters if required,
										and see the results in real-time.
									</p>
									<div className="flex flex-wrap gap-4">
										<Button className="bg-[#31C4B9] hover:bg-[#31C4B9]/90 text-black">
											Get started
										</Button>
										<Button
											variant="outline"
											className="border-white/10 hover:bg-white/5"
										>
											Learn More
										</Button>
									</div>
								</div>
								<div className="w-full lg:w-auto">
									<CashCounter />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* RPC Playground Section */}
				<section className="container mx-auto px-6 py-24">
					<h2 className="text-3xl font-bold mb-8">RPC Playground</h2>
					<RPCPlayground />
				</section>

				{/* API Endpoint Section */}
				<section className="container mx-auto px-6 py-24">
					<h2 className="text-3xl font-bold mb-8">API Endpoint</h2>
					<APIEndpoint />
				</section>

				{/* Features Grid */}
				<section className="container mx-auto px-6 mb-24">
					<h2 className="text-3xl font-bold mb-8">Features</h2>
					<FeatureGrid />
				</section>

				{/* Benchmarks Section */}
				<section className="container mx-auto px-6 py-24">
					<h2 className="text-3xl font-bold mb-8">Benchmarks</h2>
					<BenchmarksTable />
					<div className="mt-4 text-sm text-gray-400">
						See more
						<Link href="#" className="text-[#31C4B9] hover:underline ml-2">
							Run it yourself →
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
