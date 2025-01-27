"use client";

import { useEffect, useRef } from "react";

export function ProcessGraphics() {
	const gridRef = useRef<SVGSVGElement>(null);
	const curveRef = useRef<SVGSVGElement>(null);
	const circleRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		// Add subtle animations when the component mounts
		const elements = [gridRef, curveRef, circleRef];
		for (const ref of elements) {
			if (ref.current) {
				ref.current.style.opacity = "0";
				ref.current.style.transform = "translateY(20px)";
				setTimeout(() => {
					if (ref.current) {
						ref.current.style.opacity = "1";
						ref.current.style.transform = "translateY(0)";
					}
				}, 300);
			}
		}
	}, []);
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
			{/* Grid Graphic */}
			<div className="relative w-32 h-32">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: Process Call to Action */}
				<svg
					ref={gridRef}
					viewBox="0 0 100 100"
					className="w-full h-full transition-all duration-500"
				>
					<g
						stroke="currentColor"
						className="text-[#31C4B9]/40"
						strokeWidth="2"
						fill="none"
					>
						<rect x="10" y="10" width="80" height="80" rx="4" />
						<line x1="10" y1="40" x2="90" y2="40" />
						<line x1="10" y1="60" x2="90" y2="60" />
						<line x1="40" y1="10" x2="40" y2="90" />
						<line x1="60" y1="10" x2="60" y2="90" />
					</g>
					<circle cx="50" cy="50" r="8" className="fill-[#31C4B9]" />
				</svg>
			</div>

			{/* Curve Graphic */}

			<div className="relative w-32 h-32">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: Process Call to Action */}
				<svg
					ref={curveRef}
					viewBox="0 0 100 100"
					className="w-full h-full transition-all duration-500"
				>
					<path
						d="M10 70 Q 50 10 90 50"
						stroke="currentColor"
						className="text-[#31C4B9]/40"
						strokeWidth="2"
						fill="none"
					/>
					<circle cx="10" cy="70" r="4" className="fill-[#31C4B9]" />
					<circle cx="50" cy="30" r="4" className="fill-[#31C4B9]" />
					<circle cx="90" cy="50" r="4" className="fill-[#31C4B9]" />
				</svg>
			</div>

			{/* Circle Progress Graphic */}
			<div className="relative w-32 h-32">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: Process Call to Action */}
				<svg
					ref={circleRef}
					viewBox="0 0 100 100"
					className="w-full h-full transition-all duration-500"
				>
					<circle
						cx="50"
						cy="50"
						r="40"
						stroke="currentColor"
						className="text-[#31C4B9]/20"
						strokeWidth="2"
						strokeDasharray="4 4"
						fill="none"
					/>
					<path
						d="M 50 50 m -40 0 a 40 40 0 0 1 80 0"
						stroke="#31C4B9"
						strokeWidth="2"
						fill="none"
					/>
					<circle cx="50" cy="10" r="4" className="fill-[#31C4B9]/40" />
					<circle cx="90" cy="50" r="4" className="fill-[#31C4B9]" />
				</svg>
			</div>
		</div>
	);
}
