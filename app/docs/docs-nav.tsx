import Link from "next/link";

const docsNavItems = [
	{ title: "Introduction", href: "/docs" },
	{ title: "Getting Started", href: "/docs/getting-started" },
	{ title: "Quick Start", href: "/docs/quick-start" },
	{ title: "API Reference", href: "/docs/api-reference" },
	{ title: "MEV Reference", href: "/docs/mev" },
];

export function DocsNav() {
	return (
		<nav>
			<ul className="space-y-2">
				{docsNavItems.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
