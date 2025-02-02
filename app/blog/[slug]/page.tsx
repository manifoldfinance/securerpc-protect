import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { getBlogPostBySlug, getAllBlogPosts } from "../blog-data"
//import { MDXRemote } from "next-mdx-remote/rsc"
import { MDXRemote } from "remote-mdx/rsc"

export async function generateStaticParams() {
	const posts = getAllBlogPosts()
	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
	const post = getBlogPostBySlug(params.slug)

	if (!post) {
		notFound()
	}

	return (
		<div className="container mx-auto px-6 max-w-4xl py-16">
			<article className="prose prose-invert prose-lg max-w-none">
				<div className="mb-8">
					<div className="flex flex-wrap items-center gap-4 mb-2">
						<time className="text-xl font-semibold">{post.date}</time>
						<div className="flex gap-2">
							{post.tags.map((tag) => (
								<Badge key={tag} variant="secondary">
									{tag}
								</Badge>
							))}
						</div>
					</div>
					<h1 className="text-4xl font-bold mb-4">{post.title}</h1>
					<p className="text-xl text-gray-400">By {post.author}</p>
				</div>
				<MDXRemote source={post.content} />
			</article>
		</div>
	)
}
