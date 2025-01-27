import { Github, Send, Twitter } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const footerLinks = [
	{ name: "Home", href: "/" },
	{ name: "Docs", href: "/docs" },
	{ name: "Solutions", href: "/solutions" },
	{ name: "Changelog", href: "/changelog" },
	{ name: "About", href: "/about" },
	//	{ name: "Impressum", href: "/impressum" },
	{ name: "Security", href: "/security" },
]

const socialLinks = [
	{ icon: Github, href: "https://github.com/manifoldfinance" },
	{ icon: Twitter, href: "https://twitter.com/foldfinance" },
	{ icon: Send, href: "https://t.me/manifoldfinance" },
]

export function Footer() {
	return (
		<footer className="relative bg-[#141414] border-t border-white/5">
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-[#31C4B9]/5 to-transparent pointer-events-none" />

			<div className="relative container mx-auto px-6 py-16">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
					{/* Navigation Links */}
					<nav className="grid grid-cols-2 sm:flex sm:items-center gap-x-8 gap-y-4">
						{footerLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-sm text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-0.5"
							>
								{link.name}
							</Link>
						))}
					</nav>

					{/* Right Section */}
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
						{/* Social Links */}
						<div className="flex items-center gap-4">
							{socialLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
								>
									<link.icon size={20} />
								</Link>
							))}
						</div>

						{/* System Status */}
						{/*		<div className="flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10">
							<span className="flex items-center">
								<span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
								<span className="text-sm text-gray-400">
									All systems operational
								</span>
							</span>
						</div>
					</div>
				</div> */}
						<div className="flex items-center gap-3">
							<Badge className="bg-green-900/50 text-green-400 hover:bg-green-900/50" variant="secondary">
								API: Operational
							</Badge>
							<Badge className="bg-yellow-900/50 text-yellow-400 hover:bg-yellow-900/50" variant="secondary">
								Warrant Canary: Active
							</Badge>
						</div>

						{/* Copyright */}
						<div className="mt-12 pt-6 border-t border-white/5">
							<div className="text-sm text-gray-500 hover:text-gray-400 transition-colors duration-200">
								&copy; {new Date().getFullYear()} SecureRPC, Manifold Finance Inc. All rights reserved.
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
