import { ScrollArea } from "@/components/ui/scroll-area"

interface ConsoleProps {
  result: string | null
  error: string | null
}

export function Console({ result, error }: ConsoleProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden h-full">
      <div className="bg-white/10 px-4 py-2">
        <span className="text-sm font-medium text-gray-400">Console Output</span>
      </div>
      <ScrollArea className="h-[400px] p-4">
        <pre className="text-sm">
          <code className={error ? "text-red-400" : "text-green-400"}>
            {error || result || "No data to display. Try querying the API."}
          </code>
        </pre>
      </ScrollArea>
    </div>
  )
}
