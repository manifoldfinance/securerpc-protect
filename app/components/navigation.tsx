"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"

const tabs = [
	{ name: "Home", href: "/" },
	{ name: "Docs", href: "/docs" },
	{ name: "Solutions", href: "/solutions" },
	{ name: "Blog", href: "/blog" },
	{ name: "Comparison", href: "/comparison" },
]

export function Navigation() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const [hoverStyle, setHoverStyle] = useState({})
	const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
	const tabRefs = useRef<(HTMLDivElement | null)[]>([])
	const pathname = usePathname()

	useEffect(() => {
		if (hoveredIndex !== null) {
			const hoveredElement = tabRefs.current[hoveredIndex]
			if (hoveredElement) {
				const { offsetLeft, offsetWidth } = hoveredElement
				setHoverStyle({
					left: `${offsetLeft}px`,
					width: `${offsetWidth}px`,
				})
			}
		}
	}, [hoveredIndex])

	useEffect(() => {
		const activeIndex = tabs.findIndex((tab) => tab.href === pathname)
		if (activeIndex !== -1) {
			const activeElement = tabRefs.current[activeIndex]
			if (activeElement) {
				const { offsetLeft, offsetWidth } = activeElement
				setActiveStyle({
					left: `${offsetLeft}px`,
					width: `${offsetWidth}px`,
				})
			}
		}
	}, [pathname])

	return (
		<Card className="w-full border-none shadow-none bg-transparent">
			<CardContent className="p-0">
				<div className="relative">
					{/* Hover Highlight */}
					<div
						className="absolute h-[30px] transition-all duration-300 ease-out bg-white/10 rounded-[6px] flex items-center"
						style={{
							...hoverStyle,
							opacity: hoveredIndex !== null ? 1 : 0,
						}}
					/>

					{/* Active Indicator */}
					<div
						className="absolute bottom-[-6px] h-[2px] bg-[#31C4B9] transition-all duration-300 ease-out"
						style={activeStyle}
					/>

					{/* Tabs */}
					<div className="relative flex space-x-[6px] items-center">
						{tabs.map((tab, index) => (
							<div
								key={index}
								ref={(el: HTMLDivElement | null) => {
									if (el) tabRefs.current[index] = el
								}}
								className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
									pathname === tab.href ? "text-white" : "text-gray-400"
								}`}
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
							>
								<Link
									href={tab.href || ""}
									className="text-sm font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full"
								>
									{tab.name}
								</Link>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
