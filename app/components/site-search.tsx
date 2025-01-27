"use client";

import * as React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command-menu";
import { Search } from "lucide-react";

const pages = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Documentation",
		href: "/docs",
	},
	{
		title: "API Reference",
		href: "/docs/api-reference",
	},
	{
		title: "Comparison",
		href: "/comparison",
	},
	{
		title: "Changelog",
		href: "/changelog",
	},
	{
		title: "About",
		href: "/about",
	},
];

function SearchWithParams() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = (value: string) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set("query", value);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<CommandInput
			placeholder="Type a command or search..."
			onValueChange={handleSearch}
			defaultValue={searchParams.get("query")?.toString()}
		/>
	);
}

export function SiteSearch() {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const runCommand = React.useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<>
			<Button
				variant="outline"
				className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
				onClick={() => setOpen(true)}
			>
				<Search className="h-4 w-4 xl:mr-2" aria-hidden="true" />
				<span className="hidden xl:inline-flex">Search...</span>
				<span className="sr-only">Search documentation</span>
				<kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
					<span className="text-xs">⌘</span>K
				</kbd>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<React.Suspense fallback={<div>Loading...</div>}>
					<SearchWithParams />
				</React.Suspense>
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Pages">
						{pages.map((page) => (
							<CommandItem
								key={page.href}
								value={page.title}
								onSelect={() => {
									runCommand(() => router.push(page.href));
								}}
							>
								{page.title}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
