import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllChangelogs, getChangelogBySlug } from "../changelog-data"

export async function generateStaticParams() {
	const changelogs = getAllChangelogs()
	return changelogs.map((changelog) => ({
		slug: changelog.slug,
	}))
}

export default async function ChangelogPost({ params }: { params: { slug: string } }) {
	const post = getChangelogBySlug(params.slug)

	if (!post) {
		notFound()
	}

	return (
		<div className="container mx-auto px-6 max-w-4xl py-16">
			<div className="mb-16">
				<div className="flex flex-wrap items-center gap-4 mb-2">
					<time className="text-xl font-semibold">{post.date}</time>
					<div className="flex gap-2">
						<Badge variant="outline" className="text-[#31C4B9] border-[#31C4B9]/30">
							{post.status}
						</Badge>
						{post.tags.map((tag) => (
							<Badge key={tag} variant="secondary">
								{tag}
							</Badge>
						))}
					</div>
				</div>
				<div className="text-sm text-gray-400 mb-2">
					{post.version} {post.type}
				</div>
				<h1 className="text-4xl font-bold mb-8">{post.title}</h1>
				<ul className="space-y-3 text-gray-300">
					{post.changes.map((change, index) => (
						<li key={index} className="flex items-baseline">
							<div className="w-1.5 h-1.5 rounded-full bg-[#31C4B9] mr-3 mt-2" />
							<span>{change}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
				{post.previousRelease && (
					<Button variant="outline" className="justify-start text-left" asChild>
						<Link href={`/changelog/${post.previousRelease.slug}`} className="space-y-1">
							<div className="text-sm text-gray-400">Previous release</div>
							<div>{post.previousRelease.date}</div>
							<div className="text-sm text-gray-400">
								{post.previousRelease.version} {post.previousRelease.type} {post.previousRelease.status}
							</div>
						</Link>
					</Button>
				)}
				{post.nextRelease && (
					<Button variant="outline" className="justify-end text-right ml-auto" asChild>
						<Link href={`/changelog/${post.nextRelease.slug}`} className="space-y-1">
							<div className="text-sm text-gray-400">Next release</div>
							<div>{post.nextRelease.date}</div>
							<div className="text-sm text-gray-400">
								{post.nextRelease.version} {post.nextRelease.type} {post.nextRelease.status}
							</div>
						</Link>
					</Button>
				)}
			</div>
		</div>
	)
}
