"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Console } from "./console"

const RPC_METHODS = [
  { value: "eth_blockNumber", label: "eth_blockNumber", params: [] },
  {
    value: "eth_getBalance",
    label: "eth_getBalance",
    params: ["address", "block identifier"],
  },
  {
    value: "eth_getTransactionCount",
    label: "eth_getTransactionCount",
    params: ["address", "block identifier"],
  },
  {
    value: "eth_getBlockByNumber",
    label: "eth_getBlockByNumber",
    params: ["block number", "show transaction details"],
  },
  {
    value: "eth_getTransactionByHash",
    label: "eth_getTransactionByHash",
    params: ["transaction hash"],
  },
]

export function RPCPlayground() {
  const [selectedMethod, setSelectedMethod] = useState(RPC_METHODS[0])
  const [params, setParams] = useState<string[]>([])
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleMethodChange = (value: string) => {
    const method = RPC_METHODS.find((m) => m.value === value)
    if (method) {
      setSelectedMethod(method)
      setParams(new Array(method.params.length).fill(""))
    }
  }

  const handleParamChange = (index: number, value: string) => {
    const newParams = [...params]
    newParams[index] = value
    setParams(newParams)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch("https://api.securerpc.com/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: selectedMethod.value,
          params: params.map((param) => param.trim()).filter((param) => param !== ""),
        }),
      })

      const data = await response.json()

      if (data.error) {
        setError(JSON.stringify(data.error, null, 2))
      } else {
        setResult(JSON.stringify(data.result, null, 2))
      }
    } catch (err) {
      setError(`Failed to fetch: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/5 border border-white/10 rounded-lg p-6">
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="method" className="text-sm font-medium text-gray-400">
              RPC Method
            </Label>
            <Select onValueChange={handleMethodChange} value={selectedMethod.value}>
              <SelectTrigger id="method" className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select a method" />
              </SelectTrigger>
              <SelectContent className="bg-[#1f1f1f] border-white/10">
                {RPC_METHODS.map((method) => (
                  <SelectItem key={method.value} value={method.value} className="text-white">
                    {method.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedMethod.params.map((param) => (
            <div key={param}>
              <Label htmlFor={`param-${param}`} className="text-sm font-medium text-gray-400">
                {param}
              </Label>
              <Input
                id={`param-${param}`}
                value={params[selectedMethod.params.indexOf(param)] || ""}
                onChange={(e) =>
                  handleParamChange(selectedMethod.params.indexOf(param), e.target.value)
                }
                placeholder={`Enter ${param}`}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
          ))}
          <Button
            type="submit"
            disabled={loading}
            className="bg-[#31C4B9] hover:bg-[#31C4B9]/90 text-black w-full"
          >
            {loading ? "Querying..." : "Query API"}
          </Button>
        </form>
      </div>
      <Console result={result} error={error} />
    </div>
  )
}
