import { ComparisonTable } from "../components/comparison-table"

export default function ComparisonPage() {
	return (
		<div className="flex-grow">
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-[#31C4B9]/20 via-transparent to-transparent z-0" />
				<div className="relative z-20">
					<div className="container mx-auto px-6 py-32">
						<h1 className="text-4xl md:text-5xl font-bold mb-8">Feature Comparison</h1>
						<p className="text-lg text-gray-400 mb-12">
							Compare SecureRPC's features with other solutions to see why we're the best choice for your project.
						</p>
						<div className="mb-24">
							<ComparisonTable />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
