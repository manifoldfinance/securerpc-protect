export default function InstallationPage() {
	return (
		<div className="max-w-3xl">
			<h1 className="text-4xl font-bold mb-6">Installing SecureRPC</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
				<p className="mb-4">Before you begin, ensure you have the following installed:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Node.js (version 14 or later)</li>
					<li>npm or yarn</li>
				</ul>
			</section>
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Installation Steps</h2>
				<pre className="bg-gray-800 p-4 rounded-md overflow-x-auto mt-2">
					<code className="text-sm text-white">
						{`interface AddToMetaMaskProps {
		name: string
		chainId: string
		token: string
		rpcs: string[]
		be: string[]
	}

	const AddToMetaMask: React.FC<AddToMetaMaskProps> = ({ name, chainId, token, rpcs, be }) => {
		const handleAddToMetaMask = () => {
			// @ts-ignore
			if (typeof window !== 'undefined' && !window.ethereum?.request) {
				return alert(
					"Have you installed MetaMask yet? If not, please do so.\\n\\nComputer: Once it is installed, you will be able to add the network to your MetaMask.\\n\\nPhone: Open the website through your MetaMask Browser to add the network.",
				)
			}
			const startTime = Date.now()
			// @ts-ignore
			window.ethereum
				.request({
					method: "wallet_addEthereumChain",
					params: [
						{
							chainId: chainId,
							chainName: name,
							nativeCurrency: {
								name: token,
								symbol: token,
								decimals: 18,
							},
							rpcUrls: rpcs,
							blockExplorerUrls: be,
						},
					],
				})
				.then((response) => {
					const isAutomatedResponse = Date.now() - startTime < 100
					if (response === null && isAutomatedResponse) alert(\`The \${name} RPC is already added.\`)
				})
		}
		return (
			<Button
				onClick={handleAddToMetaMask}
				className="flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
			>
				<span className="flex items-center">
					<span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
					<span className="text-sm text-white">Add to MetaMask</span>
				</span>
			</Button>
		)
	}

	interface AddSecureRPCToMetaMaskProps {
		rpcs: string[]
	}

	export const AddSecureRPCToMetaMask: React.FC<AddSecureRPCToMetaMaskProps> = ({ rpcs }) => {
		return (
			<AddToMetaMask name="SecureRPC Ethereum" chainId="0x1" token="ETH" rpcs={rpcs} be={["https://blockscout.com"]} />
		)
	}`}
					</code>
				</pre>
			</section>
			<section>
				<h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
				<p className="mb-4">
					Now that you have SecureRPC installed, you can proceed to the{" "}
					<a href="/docs/configuration" className="text-blue-400 hover:underline">
						Configuration
					</a>{" "}
					guide to set up your project, or jump right into the{" "}
					<a href="/docs/quick-start" className="text-blue-400 hover:underline">
						Quick Start
					</a>{" "}
					guide to begin building.
				</p>
			</section>
		</div>
	)
}
