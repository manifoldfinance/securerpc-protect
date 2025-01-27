import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { Footer } from "../components/footer";
import { SiteSearch } from "../components/site-search";

type ChangelogEntry = {
	version: string;
	date: string;
	changes: string[];
};

const changelogEntries: ChangelogEntry[] = [
	{
		version: "0.1.0",
		date: "2025-01-15",
		changes: [
			"Launched new website",
			"Improved error handling and reporting",
			"Enhanced performance for large-scale submission operations",
			"Updated documentation with new examples and best practices",
		],
	},
];

export default function ChangelogPage() {
	return (
		<>
			<main className="flex-grow">
				<section className="container mx-auto px-6 py-12 md:py-24">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">Changelog</h1>
					<p className="text-xl text-gray-400 mb-12">
						Stay up to date with the latest improvements and updates to
						SecureRPC.
					</p>

					<div className="space-y-12">
						{changelogEntries.map((entry) => (
							<div
								key={entry.version}
								className="border-b border-white/10 pb-8 last:border-b-0"
							>
								<h2 className="text-2xl font-semibold mb-2">
									Version {entry.version}{" "}
									<span className="text-gray-400 text-lg">- {entry.date}</span>
								</h2>
								<ul className="list-disc pl-6 space-y-2">
									{entry.changes.map((change, changeIndex) => (
										<li
											key={`${entry.version}-${changeIndex}`}
											className="text-gray-300"
										>
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
		</>
	);
}
