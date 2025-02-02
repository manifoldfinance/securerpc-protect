export interface Release {
	slug: string
	date: string
	version: string
	type: "desktop" | "mobile" | "api"
	title: string
	changes: string[]
	status: "public" | "beta" | "alpha"
	tags: string[]
	previousRelease?: {
		slug: string
		date: string
		version: string
		type: string
		status: string
	}
	nextRelease?: {
		slug: string
		date: string
		version: string
		type: string
		status: string
	}
}

const changelogs: Release[] = [
	{
		slug: "v1-8-4-desktop",
		date: "January 31, 2025",
		version: "1.8.4",
		type: "desktop",
		title: "No longer broken",
		status: "public",
		tags: ["bug-fixes", "performance", "ui"],
		changes: [
			"Fixed bug where pressing Enter inside a blockquote would not continue the blockquote onto the next line.",
			"Fixed bug where Canvas preview image would sometimes fail to display.",
			"Fixed bug causing some plugins to not focus the correct tab when they open a file.",
			"Improved overall application performance with better memory management.",
			"Updated dependencies to latest versions for security improvements.",
		],
	},
	{
		slug: "v1-8-mobile",
		date: "January 30, 2025",
		version: "1.8",
		type: "mobile",
		title: "Mobile improvements",
		status: "public",
		tags: ["mobile", "feature", "ux"],
		changes: [
			"Added support for mobile notifications",
			"Improved touch response on mobile devices",
			"Fixed various UI issues on smaller screens",
			"Added new gesture controls for navigation",
			"Implemented offline support for mobile users",
		],
	},
	{
		slug: "v1-8-3-api",
		date: "January 29, 2025",
		version: "1.8.3",
		type: "api",
		title: "API Performance Boost",
		status: "beta",
		tags: ["api", "performance", "security"],
		changes: [
			"Increased API response time by 50%",
			"Added new endpoints for analytics",
			"Implemented rate limiting for better security",
			"Updated API documentation with new examples",
			"Added support for WebSocket connections",
		],
	},
]

export function getAllChangelogs(): Release[] {
	return changelogs.map((changelog, index) => ({
		...changelog,
		previousRelease: changelogs[index + 1]
			? {
					slug: changelogs[index + 1].slug,
					date: changelogs[index + 1].date,
					version: changelogs[index + 1].version,
					type: changelogs[index + 1].type,
					status: changelogs[index + 1].status,
				}
			: undefined,
		nextRelease: changelogs[index - 1]
			? {
					slug: changelogs[index - 1].slug,
					date: changelogs[index - 1].date,
					version: changelogs[index - 1].version,
					type: changelogs[index - 1].type,
					status: changelogs[index - 1].status,
				}
			: undefined,
	}))
}

export function getChangelogBySlug(slug: string): Release | undefined {
	const changelogs = getAllChangelogs()
	return changelogs.find((changelog) => changelog.slug === slug)
}
