import { ExtractionStrategiesVisualization } from "./extraction-strategies-visualization"

export default function ExtractionStrategies() {
	return (
		<section className="bg-[var(--slate-1)] text-[var(--slate-12)] py-16 md:py-24 border-t border-[var(--slate-3)]">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-light mb-12">MEV Extraction Strategies</h2>

				<div className="relative border border-[var(--slate-3)]">
					<div className="grid lg:grid-cols-[1fr,auto]">
						{/* Panel 01 */}
						<div className="p-8 relative">
							<span className="absolute top-4 right-4 text-[var(--slate-7)] text-sm">01</span>
							<div className="h-full flex items-center justify-center">
								<ExtractionStrategiesVisualization />
							</div>
						</div>

						{/* Panel 02 and 03 */}
						<div className="relative p-8 border-l border-[var(--slate-3)] lg:w-[400px]">
							<span className="absolute top-4 right-4 text-[var(--slate-7)] text-sm">02</span>
							<div className="space-y-6 text-[var(--slate-11)]">
								<p>MEV strategies (α, β, γ, δ, ε) each for different market conditions and use cases</p>
							</div>
							<div className="relative mt-8 border border-[var(--slate-3)] p-8">
								<span className="absolute top-4 right-4 text-[var(--slate-7)] text-sm">03</span>
								<div className="space-y-6 text-[var(--slate-11)]">
									<p>
										Our MEV extraction strategies are designed to maximize value while maintaining market integrity.
										They adapt to changing market conditions and regulatory requirements, ensuring sustainable and
										ethical value extraction.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
