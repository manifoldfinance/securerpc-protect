"use client"

import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"

export default function GettingStartedPage() {
	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text)
	}
	return (
		<div className="max-w-3xl">
			<h1 className="text-4xl font-bold mb-6">Getting Started with SecureRPC</h1>
			<p className="mb-8">This guide is intended for Node Operators/Validators who want to join the SecureRPC relay.</p>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
				<table className="table-auto w-full mb-4">
					<thead>
						<tr>
							<th className="px-4 py-2">Network</th>
							<th className="px-4 py-2">JSON RPC</th>
							<th className="px-4 py-2">ENR RPC</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border px-4 py-2">Homestead</td>
							<td className="border px-4 py-2">
								<a
									href="https://mainnet-relay.securerpc.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:underline"
								>
									https://mainnet-relay.securerpc.com/
								</a>
							</td>
							<td className="border px-4 py-2 flex items-center">
								<a
									href="https://0x98650451ba02064f7b000f5768cf0cf4d4e492317d82871bdc87ef841a0743f69f0f1eea11168503240ac35d101c9135@mainnet-relay.securerpc.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:underline"
								>
									0x98650451ba02064f7b000f5768cf0cf4d4e492317d82871bdc87ef841a0743f69f0f1eea11168503240ac35d101c9135@mainnet-relay.securerpc.com/
								</a>
								<Button
									size="sm"
									variant="ghost"
									className="ml-2"
									onClick={() =>
										handleCopy(
											"0x98650451ba02064f7b000f5768cf0cf4d4e492317d82871bdc87ef841a0743f69f0f1eea11168503240ac35d101c9135@mainnet-relay.securerpc.com/",
										)
									}
								>
									Copy
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
				<p className="mb-4">
					<strong>Status Mainnet:</strong>{" "}
					<a
						href="https://mainnet-relay.securerpc.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-400 hover:underline"
					>
						https://mainnet-relay.securerpc.com/
					</a>
				</p>
				<p className="mb-4">
					<strong>How mainnet validators can join our relay:</strong>
				</p>
				<pre className="bg-gray-800 p-4 rounded-md overflow-x-auto flex items-center">
					<code className="text-sm text-white">
						https://0x98650451ba02064f7b000f5768cf0cf4d4e492317d82871bdc87ef841a0743f69f0f1eea11168503240ac35d101c9135@mainnet-relay.securerpc.com/
					</code>
					<Button
						size="sm"
						variant="ghost"
						className="ml-2"
						onClick={() =>
							handleCopy(
								"https://0x98650451ba02064f7b000f5768cf0cf4d4e492317d82871bdc87ef841a0743f69f0f1eea11168503240ac35d101c9135@mainnet-relay.securerpc.com/",
							)
						}
					>
						Copy
					</Button>
				</pre>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Relay Pubkey</h2>
				<pre className="bg-gray-800 p-4 rounded-md overflow-x-auto flex items-center">
					<code className="text-sm text-white">
						0x98650451ba02064f7b000f5768cf0cf4d4e492317d82871bdc87ef841a0743f69f0f1eea11168503240ac35d101c9135
					</code>
					<Button
						size="sm"
						variant="ghost"
						className="ml-2"
						onClick={() =>
							handleCopy(
								"0x98650451ba02064f7b000f5768cf0cf4d4e492317d82871bdc87ef841a0743f69f0f1eea11168503240ac35d101c9135",
							)
						}
					>
						Copy
					</Button>
				</pre>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">What is SecureRPC?</h2>
				<p className="mb-4">
					SecureRPC is an open-source backend framework for building robust, performant, and maintainable crypto apps.
					It allows you to rapidly build an API for any EVM smart contract.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Key Features</h2>
				<ul className="list-disc list-inside mb-4">
					<li>Fast Indexing: SecureRPC offers lightning-fast indexing capabilities.</li>
					<li>MEV-Safe: Built with MEV protection for enhanced user experience.</li>
					<li>Flexible: Easily adaptable to various blockchain projects.</li>
					<li>Stable API: SecureRPC provides a stable API with minimal latency.</li>
					<li>Real-time Updates: Supports real-time subscriptions for live data updates.</li>
				</ul>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
				<p>To begin using SecureRPC, you can:</p>
				<ul className="list-disc list-inside mb-4">
					<li>
						Follow our{" "}
						<Link href="/docs/quick-start" className="text-blue-400 hover:underline">
							Quick Start Guide
						</Link>{" "}
						for a rapid setup.
					</li>
					<li>
						Check out the detailed{" "}
						<Link href="/docs/installation" className="text-blue-400 hover:underline">
							Installation
						</Link>{" "}
						guide for a more comprehensive setup.
					</li>
					<li>
						Learn about{" "}
						<Link href="/docs/configuration" className="text-blue-400 hover:underline">
							Configuration
						</Link>{" "}
						options to customize SecureRPC for your needs.
					</li>
					<li>
						Explore the{" "}
						<Link href="/docs/api-reference" className="text-blue-400 hover:underline">
							API Reference
						</Link>{" "}
						for in-depth information on SecureRPC's capabilities.
					</li>
				</ul>
				<p>Happy building with SecureRPC!</p>
			</section>
		</div>
	)
}
