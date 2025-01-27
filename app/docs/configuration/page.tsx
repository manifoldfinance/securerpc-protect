export default function ConfigurationPage() {
	return (
		<div className="max-w-3xl">
			<h1 className="text-4xl font-bold mb-6">Configuration</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Wagmi</h2>
				<p className="mb-4">
					Using <code className="bg-gray-800 px-2 py-1 rounded text-sm">Wagmi</code>, you can just set your RPC URL to:
					`https://api.securerpc.com/v1`
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Basic Configuration</h2>
				<pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
					<code className="text-sm text-white">
						{`import { createConfig } from '@wagmi/core'

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      rpcUrl: process.env.MAINNET_RPC_URL,
    },
  },
  contracts: {
    MyContract: {
      abi: './abis/MyContract.json',
      address: '0x...',
      startBlock: 1_000_000,
    },
  },
})`}
					</code>
				</pre>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Configuration Options</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						<strong>networks</strong>: Define the blockchain networks you want to index.
					</li>
					<li>
						<strong>contracts</strong>: Specify the smart contracts you want to index.
					</li>
					<li>
						<strong>startBlock</strong>: The block number to start indexing from.
					</li>
					<li>
						<strong>endBlock</strong>: (Optional) The block number to stop indexing at.
					</li>
				</ul>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4">Environment Variables</h2>
				<p className="mb-4">
					You can use environment variables in your configuration file. Make sure to create a{" "}
					<code className="bg-gray-800 px-2 py-1 rounded text-sm">.env</code> file in your project root and add your
					variables there.
				</p>
				<pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
					<code className="text-sm text-white">
						{`MAINNET_RELAY_URL=https://mainnet-relay.securerpc.com
HOLESKY_RELAY_URL=https://holesky-relay.infura.io/v3/YOUR-PROJECT-ID`}
					</code>
				</pre>
			</section>
		</div>
	)
}
