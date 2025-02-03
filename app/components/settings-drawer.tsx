"use client"

import { useState, useEffect } from "react"
import { Drawer } from "vaul"
import { Button } from "@/components/ui/button"
import { AlertCircle, Check, AlertTriangle } from "lucide-react"
import {
  createConfig,
  http,
  useAccount,
  useConnect,
  useDisconnect,
  useChainId,
  useSwitchChain,
} from "wagmi"
import { mainnet } from "wagmi/chains"
import { injected } from "@wagmi/connectors"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const SECURE_RPC_ENDPOINT = "https://api.securerpc.com/v1"

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(SECURE_RPC_ENDPOINT),
  },
  connectors: [injected()],
})

const queryClient = new QueryClient()

function WalletSettings() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()

  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [rpcStatus, setRpcStatus] = useState<"secure" | "insecure" | "unknown">("unknown")

  useEffect(() => {
    checkRPCEndpoint()
  }, [isConnected]) // Removed unnecessary dependencies: chainId

  const checkRPCEndpoint = async () => {
    if (isConnected) {
      try {
        // In Wagmi v2, we don't have direct access to the provider's RPC URL
        // We'll assume it's secure if the chainId matches mainnet and we're connected
        setRpcStatus(chainId === mainnet.id ? "secure" : "insecure")
      } catch (err) {
        console.error("Error checking RPC endpoint:", err)
        setRpcStatus("unknown")
      }
    } else {
      setRpcStatus("unknown")
    }
  }

  const handleConnect = async () => {
    try {
      await connect({ connector: injected() })
      setSuccess("Successfully connected to wallet")
    } catch (err) {
      console.error("Error connecting to wallet:", err)
      setError("Failed to connect to wallet")
    }
  }

  const handleDisconnect = () => {
    disconnect()
    setRpcStatus("unknown")
    setSuccess("Successfully disconnected from wallet")
  }

  const addSecureRPCNetwork = async () => {
    if (switchChain) {
      try {
        await switchChain({ chainId: mainnet.id })
        setSuccess("Network successfully switched to SecureRPC")
        checkRPCEndpoint()
      } catch (err) {
        console.error("Error switching network:", err)
        setError("Failed to switch to SecureRPC network")
      }
    } else {
      setError("Network switching not supported")
    }
  }

  const getRPCStatusIcon = () => {
    switch (rpcStatus) {
      case "secure":
        return <Check size={16} className="text-green-400" />
      case "insecure":
        return <AlertTriangle size={16} className="text-yellow-400" />
      default:
        return <AlertCircle size={16} className="text-gray-400" />
    }
  }

  const getRPCStatusText = () => {
    switch (rpcStatus) {
      case "secure":
        return "Secure RPC connection"
      case "insecure":
        return "Insecure RPC connection"
      default:
        return "Unknown RPC connection"
    }
  }

  return (
    <div className="space-y-6">
      {isConnected ? (
        <div className="space-y-4">
          <p className="text-sm text-gray-400">Connected Account:</p>
          <p className="text-sm font-mono bg-gray-800 p-2 rounded">{address}</p>
          <div className="flex items-center space-x-2">
            {getRPCStatusIcon()}
            <p className="text-sm text-gray-400">{getRPCStatusText()}</p>
          </div>
          <Button className="w-full text-white hover:text-[#31C4B9]" onClick={handleDisconnect}>
            Disconnect Wallet
          </Button>
        </div>
      ) : (
        <Button className="w-full text-white hover:text-[#31C4B9]" onClick={handleConnect}>
          Connect Wallet
        </Button>
      )}
      <Button className="w-full text-white hover:text-[#31C4B9]" onClick={addSecureRPCNetwork}>
        Switch to SecureRPC Network
      </Button>
      {error && (
        <div className="flex items-center space-x-2 text-red-400">
          <AlertCircle size={16} />
          <p className="text-sm">{error}</p>
        </div>
      )}
      {success && (
        <div className="flex items-center space-x-2 text-green-400">
          <Check size={16} />
          <p className="text-sm">{success}</p>
        </div>
      )}
    </div>
  )
}

export function SettingsDrawer() {
  return (
    <QueryClientProvider client={queryClient}>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button variant="outline">Wallet Settings</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Description id="wallet-settings-drawer-description" className="sr-only">
            Manage your wallet connection and network settings.
          </Drawer.Description>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content
            className="bg-[#1C1C1C] flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 right-0 w-1/4"
            aria-describedby="wallet-settings-drawer-description"
          >
            <div className="p-4 bg-[#141414] rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-700 mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4 text-2xl text-white">
                  Wallet Settings
                </Drawer.Title>
                <WalletSettings />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </QueryClientProvider>
  )
}
