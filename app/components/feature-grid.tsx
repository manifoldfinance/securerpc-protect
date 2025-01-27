import { Clock, Server, Shield, Zap } from "lucide-react"

export function FeatureGrid() {
	return (
		<div className="container mx-auto px-4 py-24">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<FeatureCard
					icon={<Shield className="w-6 h-6" />}
					title="MEV Protection"
					description="Shield your transactions from front-running and other malicious activities."
				/>
				<FeatureCard
					icon={<Zap className="w-6 h-6" />}
					title="High Performance"
					description="Experience lightning-fast response times and high throughput for your Ethereum interactions."
				/>
				<FeatureCard
					icon={<Clock className="w-6 h-6" />}
					title="99.99% Uptime"
					description="Rely on our robust infrastructure for uninterrupted access to the Ethereum network."
				/>
				<FeatureCard
					icon={<Server className="w-6 h-6" />}
					title="Global Infrastructure"
					description="Benefit from our globally distributed network of nodes for low-latency access worldwide."
				/>
			</div>
		</div>
	)
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
	return (
		<div className="p-8 rounded-lg bg-white/5 border border-white/10">
			<div className="w-12 h-12 rounded-lg bg-[#31C4B9]/10 flex items-center justify-center text-[#31C4B9] mb-4">
				{icon}
			</div>
			<h3 className="text-lg font-semibold mb-2">{title}</h3>
			<p className="text-gray-400 text-sm">{description}</p>
		</div>
	)
}
