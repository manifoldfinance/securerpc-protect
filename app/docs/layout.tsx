import { DocsNav } from "./docs-nav"

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex-grow container mx-auto px-4 py-12">
			<div className="flex flex-col md:flex-row gap-8">
				<aside className="w-full md:w-64 shrink-0">
					<DocsNav />
				</aside>
				<main className="flex-grow">{children}</main>
			</div>
		</div>
	)
}
