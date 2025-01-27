import { Github } from "lucide-react"
import Link from "next/link"
import { SiteSearch } from "./site-search"

export function Navigation() {
	return (
		<header className="border-b border-white/10 relative z-10">
			<div className="container mx-auto px-6 h-16 flex items-center justify-between">
				<Link href="/" className="text-xl font-semibold">
					SecureRPC
				</Link>
				<div className="flex items-center gap-6">
					<nav className="hidden md:flex items-center gap-6">
						<Link href="/docs" className="text-sm text-gray-400 hover:text-white transition-colors">
							Documentation
						</Link>
						<Link href="/solutions" className="text-sm text-gray-400 hover:text-white transition-colors">
							Solutions
						</Link>
						<Link href="/comparison" className="text-sm text-gray-400 hover:text-white transition-colors">
							Comparison
						</Link>
						<Link href="/changelog" className="text-sm text-gray-400 hover:text-white transition-colors">
							Changelog
						</Link>
						<Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
							About
						</Link>
					</nav>
					<SiteSearch />
					<div className="flex items-center gap-2">
						<Link
							href="https://github.com/manifoldfinance"
							className="p-2 hover:bg-white/5 rounded-lg transition-colors"
						>
							<Github className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
