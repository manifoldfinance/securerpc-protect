"use client"

import { Button } from "@/components/ui/button"
import { useCallback, useEffect } from "react"

export function SearchButton() {
	const handleClick = useCallback(() => {
		document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))
	}, [])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.metaKey && event.key === "k") {
				event.preventDefault()
				const searchButton = document.querySelector<HTMLButtonElement>('[data-framer-name="Search Container"] button')
				if (searchButton) searchButton.click()
			}
		}

		document.addEventListener("keydown", handleKeyDown)
		return () => document.removeEventListener("keydown", handleKeyDown)
	}, [])

	return (
		<Button onClick={handleClick} variant="outline" className="bg-white/5 text-white hover:bg-white/10">
			<span className="hidden md:inline-flex">Search...</span>
			<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/10 px-1.5 font-mono text-[10px] font-medium text-white/70 opacity-100 ml-2">
				<span className="text-xs">⌘</span>K
			</kbd>
		</Button>
	)
}
