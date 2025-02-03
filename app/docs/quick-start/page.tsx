import { APIEndpoint } from "@/app/components/api-endpoint"

export default function QuickStartPage() {
  const QuickStart = () => {
    const relayPubkey =
      "0x98650451ba02064f7b000f5768cf0cf4d4e492317d82871bdc87ef841a0743f69f0f1eea11168503240ac35d101c9135"

    const networkData = {
      network: "homestead",
      jsonRpc: "mainnet-relay.securerpc.com/",
      enrRpc: `${relayPubkey}@mainnet-relay.securerpc.com/`,
    }
    return (
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Quick Start Guide</h1>

        <section className="mb-8">
          <h2>Quick Start</h2>

          <table>
            <thead>
              <tr>
                <th>network</th>
                <th>json_rpc</th>
                <th>enr_rpc</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{networkData.network}</td>
                <td>{networkData.jsonRpc}</td>
                <td>{networkData.enrRpc}</td>
              </tr>
            </tbody>
          </table>

          <h3>Status Mainnet</h3>
          <a href="https://mainnet-relay.securerpc.com/">https://mainnet-relay.securerpc.com/</a>

          <h3>How mainnet validators can join our relay</h3>
          <code className="bash-command">https://{networkData.enrRpc}</code>

          <h2>Relay Pubkey</h2>
          <code>{relayPubkey}</code>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Configuration</h2>
          <p className="mb-4">
            Example: <code className="bg-gray-800 px-2 py-1 rounded text-sm">Wagmi</code>
          </p>
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
      </div>
    )
  }
}
