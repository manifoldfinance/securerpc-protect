"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, ExternalLink, HelpCircle, RefreshCw } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

export function APIEndpoint() {
  const [latency, setLatency] = useState<number | null>(null)
  const [status, setStatus] = useState<"operational" | "degraded" | "down" | "unknown">("unknown")
  const [isChecking, setIsChecking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const apiEndpoint = "https://api.securerpc.com/v1"

  const checkApiStatus = useCallback(async () => {
    setIsChecking(true)
    setError(null)
    const start = Date.now()
    try {
      const response = await fetch(apiEndpoint)
      if (response.ok) {
        setStatus("operational")
      } else {
        setStatus("degraded")
      }
    } catch (error) {
      setStatus("down")
      setError("Failed to connect to the API. Please try again later.")
    }
    const end = Date.now()
    setLatency(end - start)
    setIsChecking(false)
  }, [])

  useEffect(() => {
    checkApiStatus()
    const intervalId = setInterval(checkApiStatus, 360) //
    return () => clearInterval(intervalId)
  }, [checkApiStatus])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiEndpoint)
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">RPC Endpoint</h3>
        <Button
          onClick={checkApiStatus}
          variant="outline"
          size="sm"
          disabled={isChecking}
          className="border-white/10 hover:bg-white/5"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isChecking ? "animate-spin" : ""}`} />
          {isChecking ? "Checking..." : "Check Now"}
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Input value={apiEndpoint} readOnly className="bg-black/50 border-white/20 text-white" />
        <Button onClick={copyToClipboard} variant="outline" size="icon">
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Badge
          variant={
            status === "operational"
              ? "default"
              : status === "degraded"
                ? "secondary"
                : status === "down"
                  ? "destructive"
                  : "outline"
          }
          className="bg-opacity-20"
        >
          {status === "operational"
            ? "Operational"
            : status === "degraded"
              ? "Degraded"
              : status === "down"
                ? "Down"
                : "Unknown"}
        </Badge>
        {latency !== null && <span className="text-sm text-gray-400">Latency: {latency}ns</span>}
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div className="flex space-x-4">
        <Button variant="outline" className="border-white/10 hover:bg-white/5">
          <ExternalLink className="mr-2 h-4 w-4" />
          <a href="https://securerpc.com/docs" className="text-blue-400 hover:underline">
            {" "}
            Documentation{" "}
          </a>
        </Button>
        <Button variant="outline" className="border-white/10 hover:bg-white/5">
          <HelpCircle className="mr-2 h-4 w-4" />
          <a href="https://t.me/manifoldfinance" className="text-blue-400 hover:underline">
            {" "}
            Get Support{" "}
          </a>
        </Button>
      </div>
    </div>
  )
}
