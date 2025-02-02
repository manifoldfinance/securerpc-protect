import { Badge } from "@/components/ui/badge"
import { Rss, MessageSquare, Twitter, Radio, Share2 } from "lucide-react"
import Link from "next/link"
import { getAllBlogPosts, type BlogPost } from "./blog-data"

const socialLinks = [
  { name: "RSS", icon: Rss, href: "/rss", color: "text-orange-400" },
  { name: "Discord", icon: MessageSquare, href: "/discord", color: "text-indigo-400" },
  { name: "Twitter", icon: Twitter, href: "/twitter", color: "text-blue-400" },
  { name: "Bluesky", icon: Radio, href: "/bluesky", color: "text-sky-400" },
  { name: "Mastodon", icon: Share2, href: "/mastodon", color: "text-purple-400" },
]

function BlogPostEntry({ post }: { post: BlogPost }) {
  return (
    <div className="mb-16">
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-4 mb-2">
          <time className="text-xl font-semibold">{post.date}</time>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-400 mb-2">By {post.author}</div>
        <Link href={`/blog/${post.slug}`} className="group">
          <h2 className="text-2xl font-bold group-hover:text-[#31C4B9] transition-colors">{post.title}</h2>
        </Link>
      </div>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="text-[#31C4B9] hover:underline">
        Read more...
      </Link>
    </div>
  )
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-[#141414] py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-400 mb-8">Stay updated with the latest news and insights from SecureRPC.</p>
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`${link.color} hover:opacity-80 transition-opacity`}>
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mb-16">
          {posts.map((post) => (
            <BlogPostEntry key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

