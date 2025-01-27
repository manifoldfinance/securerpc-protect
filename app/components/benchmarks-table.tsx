export function BenchmarksTable() {
	return (
		<div className="w-full overflow-x-auto p-4">
			<table className="w-full">
				<thead>
					<tr className="border-b border-white/10">
						<th className="text-left py-2 px-4 font-medium text-gray-400" />
						<th className="text-left py-2 px-4 font-medium text-gray-400">Privacy Level</th>
						<th className="text-left py-2 px-4 font-medium text-gray-400">Processing Speed</th>
						<th className="text-left py-2 px-4 font-medium text-gray-400">Revenue Distribution</th>
						<th className="text-left py-2 px-4 font-medium text-gray-400">Leakage</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b border-white/10">
						<td className="py-4 px-4 text-[#31C4B9]">SecureRPC</td>
						<td className="py-4 px-4 text-[#31C4B9]">100%</td>
						<td className="py-4 px-4">Next Block</td>
						<td className="py-4 px-4">Cash Back to User</td>
						<td className="py-4 px-4">None, fully binary</td>
					</tr>
					<tr>
						<td className="py-4 px-4 text-gray-400">Standard RPC</td>
						<td className="py-4 px-4">0%</td>
						<td className="py-4 px-4">~24 Blocks</td>
						<td className="py-4 px-4">Rebates paid to Validator</td>
						<td className="py-4 px-4">Gradual leakage via hints</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
