import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
//import { Footer } from "../components/footer"

type ChangelogEntry = {
	version: string
	date: string
	changes: string[]
}

const changelogEntries: ChangelogEntry[] = [
	{
		version: "0.12.0",
		date: "2023-07-15",
		changes: [
			"Added support for multiple networks in a single project",
			"Improved error handling and reporting",
			"Enhanced performance for large-scale indexing operations",
			"Updated documentation with new examples and best practices",
		],
	},
	{
		version: "0.11.2",
		date: "2023-06-30",
		changes: [
			"Fixed a bug in the GraphQL schema generation",
			"Improved stability of real-time subscriptions",
			"Added new CLI commands for easier project management",
		],
	},
	{
		version: "0.11.1",
		date: "2023-06-15",
		changes: [
			"Patched security vulnerability in dependency",
			"Optimized database queries for faster data retrieval",
			"Added support for custom GraphQL resolvers",
		],
	},
	{
		version: "0.11.0",
		date: "2023-06-01",
		changes: [
			"Introduced new plugin system for extending SecureRPC's functionality",
			"Revamped the configuration file structure for better organization",
			"Added support for TypeScript 5.0",
			"Improved documentation and added more code examples",
		],
	},
]

export default function ChangelogPage() {
	return (
		<div className="min-h-screen bg-[#141414] text-white flex flex-col">
			<main className="flex-grow">
				<section className="container mx-auto px-6 py-12 md:py-24">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">Changelog</h1>
					<p className="text-xl text-gray-400 mb-12">
						Stay up to date with the latest improvements and updates to SecureRPC.
					</p>

					<div className="space-y-12">
						{changelogEntries.map((entry) => (
							<div key={entry.version} className="border-b border-white/10 pb-8 last:border-b-0">
								<h2 className="text-2xl font-semibold mb-2">
									Version {entry.version} <span className="text-gray-400 text-lg">- {entry.date}</span>
								</h2>
								<ul className="list-disc pl-6 space-y-2">
									{entry.changes.map((change, changeIndex) => (
										<li key={`${entry.version}-${changeIndex}`} className="text-gray-300">
											{change}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="mt-12">
						<Button asChild>
							<Link href="/docs">Explore Documentation</Link>
						</Button>
					</div>
				</section>
			</main>
		</div>
	)
}
