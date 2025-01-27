export default function DocsPage() {
	return (
		<div className="max-w-3xl">
			<h1 className="text-4xl font-bold mb-6">Getting Started with SecureRPC</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Welcome to SecureRPC</h2>
				<p className="mb-4">This guide will help you get started with using SecureRPC in your projects.</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
				<p className="mb-4">
					For a rapid introduction to SecureRPC, check out our{" "}
					<a href="/docs/quick-start" className="text-blue-400 hover:underline">
						Quick Start Guide
					</a>
					. This guide will walk you through setting up a basic SecureRPC project and accessing your API endpoint in
					just a few minutes.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">What is SecureRPC?</h2>
				<p className="mb-4">
					SecureRPC is a RPC Infrastructure Provider and a MEV Relay. A relay has several responsibilities: - APIs for
					proposers (builder-spec), block builders and data transparency - Handling validator registrations and block
					proposals in a scalable manner - Block escrow, data availability, redundancy - Simulate and verify blocks sent
					by block-builders, rate-limit if necessary - correct amount of fees paid to most recent feeRecipient of
					validator - correct block attributes and transactions within the gasLimit requested by the validator
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Key Features</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						<strong>High Performance</strong>: SecureRPC offers high-throughput and low-latency RPC capabilities.
					</li>
					<li>
						<strong>Censorship Resistance</strong>: No Transaction filtering or censorship, by default.
					</li>
					<li>
						<strong>Flexible and Extensible</strong>: Easily adaptable to various RPC needs and integrations.
					</li>
					<li>
						<strong>Easy to Use</strong>: Simple and intuitive API for seamless integration into your projects.
					</li>
					<li>
						<strong>Reliable and Scalable</strong>: Designed for reliability and scalability to handle high loads.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
				<p className="mb-4">To begin using SecureRPC, you can just use `https://api.securerpc.com/v1` - or:</p>
				<ol className="list-decimal pl-6 space-y-2">
					<li>
						Follow our{" "}
						<a href="/docs/quick-start" className="text-blue-400 hover:underline">
							Quick Start Guide
						</a>{" "}
						for a rapid setup.
					</li>
					<li>
						Check out the detailed{" "}
						<a href="/docs/installation" className="text-blue-400 hover:underline">
							Installation
						</a>{" "}
						guide for a more comprehensive setup.
					</li>
					<li>
						Learn about{" "}
						<a href="/docs/configuration" className="text-blue-400 hover:underline">
							Configuration
						</a>{" "}
						options to customize SecureRPC for your needs.
					</li>
					<li>
						Explore the{" "}
						<a href="/docs/api-reference" className="text-blue-400 hover:underline">
							API Reference
						</a>{" "}
						for in-depth information on SecureRPC's capabilities.
					</li>
				</ol>
			</section>

			<p className="mt-8 text-lg">Happy building with SecureRPC!</p>
		</div>
	)
}
