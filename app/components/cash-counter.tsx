"use client"

import { useEffect, useState } from "react"

const LOCAL_STORAGE_KEY = "state_storage_key"

export function CashCounter() {
  const [cash, setCash] = useState(0)
  const [transactions, setTransactions] = useState(0)

  useEffect(() => {
    // Load initial state from localStorage
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedState) {
      const { cash: savedCash, transactions: savedTransactions } = JSON.parse(savedState)
      setCash(savedCash)
      setTransactions(savedTransactions)
    }

    const interval = setInterval(() => {
      setTransactions((prevTransactions) => {
        const newTransactions = prevTransactions + 1
        setCash((prevCash) => {
          const increment = Math.floor(Math.random() * 347) + 2 // TODO: Query Backend Stats Endpoint
          const newCash = prevCash + increment

          // Save state to localStorage
          localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify({
              cash: newCash,
              transactions: newTransactions,
            }),
          )

          return newCash
        })
        return newTransactions
      })
    }, 12000) // Increment every 12 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#31C4B9]/10 rounded-lg p-8 text-center w-full max-w-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 w-full">
          <h2 className="text-[#31C4B9] text-xl md:text-2xl font-semibold mb-3">Cash Earned</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            ${cash.toLocaleString()}
          </p>
        </div>
        <div className="flex-1 w-full">
          <h2 className="text-[#31C4B9] text-xl md:text-2xl font-semibold mb-3">
            Transactions Protected
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {transactions.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}
