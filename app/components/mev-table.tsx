"use client"

import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  {
    activity: "Swap Backrun Arbitrage",
    description:
      "On the same AMM, the arbitrageur just backruns another trader's Swap action by a Swap action, and earns profits from the pulled-up price.",
  },
  {
    activity: "Liquidity Backrun Arbitrage",
    description:
      "On the same AMM, the arbitrageur backruns another trader's AddLiquidity/RemoveLiquidity action by a Swap action, and earns profits from the pulled-up price.",
  },
  {
    activity: "Liquidity Sandwich Arbitrage",
    description:
      "On the same AMM, the arbitrageur frontruns and backruns another trader's Swap action by AddLiquidity and RemoveLiquidity actions, and earns profits from the trader's exchange fee.",
  },
  {
    activity: "Multi-layered Burger Arbitrage",
    description:
      "On the same AMM, the arbitrageur frontruns and backruns other traders' Swap actions by Swap actions, and earns profits from the pulled-up price.",
  },
  {
    activity: "Liquidity-swap Trade",
    description:
      "On the same AMM, the trader both performs a Swap action, and performs the AddLiquidity or RemoveLiquidity actions. The trader aims to supply, withdraw, or trade assets at the expected prices.",
  },
  {
    activity: "Partial Cyclic Arbitrage",
    description:
      "The arbitrageur performs Swap actions among AMMs to earn profits from the unbalanced prices, and part of the Swap actions can form a loop one by one.",
  },
  {
    activity: "Backrun Cyclic Arbitrage",
    description:
      "The arbitrageur backruns another trader's Swap/AddLiquidity/RemoveLiquidity action, and performs Cyclic Arbitrage to earn profits from the unbalanced prices.",
  },
  {
    activity: "Hybrid Arbitrage",
    description:
      "There are at least two kinds of MEV activities of known MEV activities in a bundle. There exists a transaction contained in all these MEV activities.",
  },
  {
    activity: "Failed Arbitrage",
    description:
      "The arbitrageur suffers the financial loss, when the arbitrageur aims to obtain profits by Sandwich Attack or Cyclic Arbitrage activities.",
  },
  {
    activity: "Non-cyclic Swap Trade",
    description:
      "The trader only performs the non-cyclic Swap actions, and aims to trade on the AMMs at the expected prices.",
  },
  {
    activity: "Rebasing Backrun Arbitrage",
    description:
      "The arbitrageur backruns a Rebasing action by a Swap action, and earns profits from the price differences of the Rebase token.",
  },
  {
    activity: "Airdrop-swap Trade",
    description:
      "The trader first claims the airdrop rewards, then sells the received rewards to an AMM by a Swap action.",
  },
  {
    activity: "Bulk NFT-Minting",
    description:
      "The NFT contract mints NFTs in bulk, and it aims to increase the maintained NFTs at the expected blockchain state.",
  },
  {
    activity: "NFT Reforging",
    description: "The NFT contract reforges an NFT to update the asset represented by the NFT.",
  },
  {
    activity: "Airdrop Claiming",
    description: "The trader only claims and receives airdrop rewards.",
  },
  {
    activity: "NFT-Minting-swap Trade",
    description:
      "The trader first receives an NFT minted by NFT contract, then sells the minted NFT to an AMM by a Swap action.",
  },
  {
    activity: "Loan-powered Arbitrage",
    description:
      "The arbitrageur loans assets from Lending under the over/under-collateral deposit, then uses the loaned assets to conduct MEV activities, e.g., Cyclic Arbitrage.",
  },
]

export type MevActivity = {
  activity: string
  description: string
}

export const columns: ColumnDef<MevActivity>[] = [
  {
    accessorKey: "activity",
    header: "MEV Activity",
    cell: ({ row }) => <div className="font-medium">{row.getValue("activity")}</div>,
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-white hover:text-[#31C4B9]"
        >
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
]

export function MevTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (
    <div className="w-full p-4">
      <div className="flex items-center py-6">
        <Input
          placeholder="Filter activities..."
          value={(table.getColumn("activity")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("activity")?.setFilterValue(event.target.value)}
          className="max-w-sm border-white/10 text-white"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto border-white/10 text-white hover:bg-white/5"
            >
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="border-white/10">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize text-white"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-white py-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-white">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-sm text-gray-400">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border-white/10 text-white hover:bg-white/5"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border-white/10 text-white hover:bg-white/5"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
