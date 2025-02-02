"use client"

import { useState, useEffect } from "react"
import { Drawer } from "vaul"
import { Button } from "@/components/ui/button"
import { AlertCircle, Check } from "lucide-react"

declare global {
  interface Window {
    ethereum: any
  }
}

const CHAIN_ID = "0x1" // Ethereum Mainnet
const NETWORK_PARAMS = {
  chainId: CHAIN_ID,
  chainName: "Ethereum Mainnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://mainnet.infura.io/v3/YOUR-PROJECT-ID"],
  blockExplorerUrls: ["https://etherscan.io"],
}

export function SettingsDrawer() {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false)
  const [account, setAccount] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    checkMetaMaskConnection()
  }, [])

  const checkMetaMaskConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" })
        if (accounts.length > 0) {
          setIsMetaMaskConnected(true)
          setAccount(accounts[0])
        } else {
          setIsMetaMaskConnected(false)
          setAccount(null)
        }
      } catch (err) {
        console.error("Error checking MetaMask connection:", err)
        setError("Failed to check MetaMask connection")
      }
    } else {
      setError("MetaMask is not installed")
    }
  }

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        checkMetaMaskConnection()
        setSuccess("Successfully connected to MetaMask")
      } catch (err) {
        console.error("Error connecting to MetaMask:", err)
        setError("Failed to connect to MetaMask")
      }
    } else {
      setError("MetaMask is not installed")
    }
  }

  const disconnectMetaMask = () => {
    setIsMetaMaskConnected(false)
    setAccount(null)
    setSuccess("Successfully disconnected from MetaMask")
  }

  const addNetworkToMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [NETWORK_PARAMS],
        })
        setSuccess("Network successfully added to MetaMask")
      } catch (err) {
        console.error("Error adding network to MetaMask:", err)
        setError("Failed to add network to MetaMask")
      }
    } else {
      setError("MetaMask is not installed")
    }
  }

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline">Wallet Settings</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Description id="wallet-settings-drawer-description" className="sr-only">
          Manage your MetaMask wallet connection and network settings.
        </Drawer.Description>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="bg-[#1C1C1C] flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0"
          aria-describedby="wallet-settings-drawer-description"
        >
          <div className="p-4 bg-[#141414] rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-700 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4 text-2xl text-white">Wallet Settings</Drawer.Title>
              <div className="space-y-6">
                {isMetaMaskConnected ? (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400">Connected Account:</p>
                    <p className="text-sm font-mono bg-gray-800 p-2 rounded">{account}</p>
                    <Button className="w-full" onClick={disconnectMetaMask}>
                      Disconnect MetaMask
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full" onClick={connectMetaMask}>
                    Connect MetaMask
                  </Button>
                )}
                <Button className="w-full" onClick={addNetworkToMetaMask}>
                  Add Network to MetaMask
                </Button>
                {error && (
                  <div className="flex items-center space-x-2 text-red-500">
                    <AlertCircle size={16} />
                    <p className="text-sm">{error}</p>
                  </div>
                )}
                {success && (
                  <div className="flex items-center space-x-2 text-green-500">
                    <Check size={16} />
                    <p className="text-sm">{success}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

