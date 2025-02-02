import { Badge } from "@/components/ui/badge"
import { Rss, MessageSquare, Twitter, Radio, Share2 } from "lucide-react"
import Link from "next/link"
import { getAllChangelogs, type Release } from "./changelog-data"

const socialLinks = [
	{ name: "RSS", icon: Rss, href: "/rss", color: "text-orange-400" },
	{ name: "Discord", icon: MessageSquare, href: "/discord", color: "text-indigo-400" },
	{ name: "Twitter", icon: Twitter, href: "/twitter", color: "text-blue-400" },
	{ name: "Bluesky", icon: Radio, href: "/bluesky", color: "text-sky-400" },
	{ name: "Mastodon", icon: Share2, href: "/mastodon", color: "text-purple-400" },
]

function ReleaseEntry({ release }: { release: Release }) {
	return (
		<div className="mb-16">
			<div className="mb-6">
				<div className="flex flex-wrap items-center gap-4 mb-2">
					<time className="text-xl font-semibold">{release.date}</time>
					<div className="flex flex-wrap gap-2">
						<Badge variant="outline" className="text-[#31C4B9] border-[#31C4B9]/30">
							{release.status}
						</Badge>
						{release.tags.map((tag) => (
							<Badge key={tag} variant="secondary">
								{tag}
							</Badge>
						))}
					</div>
				</div>
				<div className="text-sm text-gray-400 mb-2">
					{release.version} {release.type}
				</div>
				<Link href={`/changelog/${release.slug}`} className="group">
					<h2 className="text-2xl font-bold group-hover:text-[#31C4B9] transition-colors">{release.title}</h2>
				</Link>
			</div>
			<ul className="space-y-3 text-gray-300">
				{release.changes.slice(0, 3).map((change, index) => (
					<li key={index} className="flex items-baseline">
						<div className="w-1.5 h-1.5 rounded-full bg-[#31C4B9] mr-3 mt-2" />
						<span>{change}</span>
					</li>
				))}
				{release.changes.length > 3 && (
					<li>
						<Link href={`/changelog/${release.slug}`} className="text-[#31C4B9] hover:underline ml-4">
							Read more...
						</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

export default function ChangelogPage() {
	const releases = getAllChangelogs()

	return (
		<div className="min-h-screen bg-[#141414] py-16">
			<div className="container mx-auto px-6 max-w-4xl">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-6xl font-bold mb-6">Changelog</h1>
					<p className="text-xl text-gray-400 mb-8">Follow SecureRPC updates and improvements.</p>
					<div className="flex justify-center items-center gap-6">
						{socialLinks.map((link) => (
							<Link key={link.name} href={link.href} className={`${link.color} hover:opacity-80 transition-opacity`}>
								<link.icon className="w-6 h-6" />
								<span className="sr-only">{link.name}</span>
							</Link>
						))}
					</div>
				</div>

				{/* Releases */}
				<div className="mb-16">
					{releases.map((release, index) => (
						<ReleaseEntry key={release.slug} release={release} />
					))}
				</div>
			</div>
		</div>
	)
}
