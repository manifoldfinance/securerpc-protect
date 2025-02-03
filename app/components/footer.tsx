"use client"

"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Twitter, Github, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-white/10 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo, Status Badges, and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-lg font-semibold">
                ❄️ 💊
              </Link>
            </div>
            <div className="flex space-x-2">
              <Badge
                className="bg-green-900/50 text-green-400 hover:bg-green-900/50"
                variant="secondary"
              >
                API: Operational
              </Badge>
              <Badge
                className="bg-blue-900/50 text-blue-400 hover:bg-blue-900/50"
                variant="secondary"
              >
                Relay Protect: Online
              </Badge>
            </div>
            <p className="text-sm text-gray-400">Manifold Finance, Inc. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://twitter.com/foldfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="https://t.me/manifoldfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Send className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="https://github.com/manifoldfinacne/securerpc-protect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
