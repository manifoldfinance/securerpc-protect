import { notFound } from "next/navigation"

// Simulating a database or API call
async function fetchBlogPost(slug: string): Promise<{ title: string; content: string } | null> {
	// In a real application, this would be an API call or database query
	const posts = {
		"introducing-SecureRPC": {
			title: "Introducing SecureRPC",
			content: "SecureRPC is a new way to interact with blockchain data...",
		},
		"privacy-features": {
			title: "New Privacy Features",
			content: "We're excited to announce new privacy features...",
		},
	}

	// Simulating network delay
	await new Promise((resolve) => setTimeout(resolve, 100))

	return posts[slug] || null
}

export async function generateStaticParams() {
	// This replaces getStaticPaths in the App Router
	return [{ slug: "introducing-SecureRPC" }, { slug: "privacy-features" }]
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
	const post = await fetchBlogPost(params.slug)

	if (!post) {
		notFound()
	}

	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-6">{post.title}</h1>
			<div className="prose prose-invert">{post.content}</div>
		</div>
	)
}
