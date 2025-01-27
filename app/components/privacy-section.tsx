"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

type PrivacyDataRow = {
	dataType: string
	whenCollected: string
	connectedToUser: string
	whoCollects: string
	whyCollected: string
	retentionBySecureRPC: string
}

const privacyData: PrivacyDataRow[] = [
	{
		dataType: "Name",
		whenCollected: "Not collected",
		connectedToUser: "N/A",
		whoCollects: "N/A",
		whyCollected: "N/A",
		retentionBySecureRPC: "N/A",
	},
	{
		dataType: "Street address",
		whenCollected: "Not collected",
		connectedToUser: "N/A",
		whoCollects: "N/A",
		whyCollected: "N/A",
		retentionBySecureRPC: "N/A",
	},
]

export function PrivacySection() {
	return (
		<div className="space-y-8">
			<h2 className="text-3xl font-bold">Privacy and Censorship</h2>

			{/* Transaction Inclusion Delay */}
			<div className="bg-white/5 rounded-lg p-6 space-y-4">
				<div className="flex items-center gap-4">
					<div className="text-[#31C4B9] font-semibold">50ms</div>
					<div className="flex-grow h-2 bg-white/10 rounded-full">
						<div className="w-[15%] h-full bg-[#31C4B9] rounded-full" />
					</div>
				</div>
				<div className="text-sm text-gray-400">Transaction Inclusion Delay</div>
			</div>

			{/* Privacy Table */}
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="border-b border-white/10">
							<th className="text-left py-4 px-4 font-medium text-gray-400">Data type</th>
							<th className="text-left py-4 px-4 font-medium text-gray-400">When collected</th>
							<th className="text-left py-4 px-4 font-medium text-gray-400">Connected to user addresses?</th>
							<th className="text-left py-4 px-4 font-medium text-gray-400">Who collects</th>
							<th className="text-left py-4 px-4 font-medium text-gray-400">Why is it collected and how it is used</th>
							<th className="text-left py-4 px-4 font-medium text-gray-400">Retention by SecureRPC</th>
						</tr>
					</thead>
					<tbody>
						{privacyData.map((row) => (
							<tr key={row.dataType} className="border-b border-white/10">
								<td className="py-4 px-4">{row.dataType}</td>
								<td className="py-4 px-4 text-gray-400">{row.whenCollected}</td>
								<td className="py-4 px-4 text-gray-400">{row.connectedToUser}</td>
								<td className="py-4 px-4 text-gray-400">{row.whoCollects}</td>
								<td className="py-4 px-4 text-gray-400">{row.whyCollected}</td>
								<td className="py-4 px-4 text-gray-400">{row.retentionBySecureRPC}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<p className="text-gray-400">
				SecureRPC is committed to protecting user privacy and preventing censorship. The above table illustrates our
				data collection and retention policies.
			</p>

			<Link href="/about" className="inline-flex items-center text-[#31C4B9] hover:underline">
				Learn more about our privacy practices
				<ArrowRight className="ml-2 h-4 w-4" />
			</Link>
		</div>
	)
}
