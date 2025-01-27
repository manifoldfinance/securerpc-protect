import type { Metadata } from "next"

interface MetadataProps {
	title: string
	description: string
	keywords: string[]
	ogImage?: string
	ogType?:
		| "website"
		| "article"
		| "book"
		| "profile"
		| "music.song"
		| "music.album"
		| "music.playlist"
		| "music.radio_station"
		| "video.movie"
		| "video.episode"
		| "video.tv_show"
		| "video.other"
}

export function generateMetadata({
	title,
	description,
	keywords,
	ogImage = "https://securerpc.com/og-image.png",
	ogType = "website",
}: MetadataProps): Metadata {
	return {
		title,
		description,
		keywords: keywords.join(", "),
		openGraph: {
			title,
			description,
			type: ogType,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	}
}
