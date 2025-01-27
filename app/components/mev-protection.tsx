"use client"

export function MevProtection() {
	return (
		<div className="flex flex-col md:flex-row items-center gap-12">
			{/* Text Content */}
			<div className="md:w-1/2 space-y-6">
				<h2 className="text-3xl font-bold">MEV-Protected RPC Infrastructure</h2>
				<div className="space-y-4">
					<h3 className="text-2xl font-bold">Secure Transactions, Enhanced Performance</h3>
					<p className="text-gray-400 text-lg">
						Our MEV-protected RPC infrastructure ensures your transactions are shielded from front-running and other
						malicious activities. Experience faster, more secure Ethereum interactions.
					</p>
				</div>
			</div>

			{/* Network Diagram */}
			<div className="md:w-1/2">
				<div className="aspect-square max-w-lg mx-auto p-8 bg-black/20 rounded-2xl border border-white/5">
					<img
						src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/relay-protec-routing-TameT2WyUK72Or3UjtmcXASzYcWKdH.svg"
						alt="MEV Protection Routing Diagram"
						className="w-full h-full object-contain"
						style={{
							filter: "drop-shadow(0 0 2px rgba(49, 196, 185, 0.2))",
						}}
					/>
				</div>
			</div>
		</div>
	)
}
