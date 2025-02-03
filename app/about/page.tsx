import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
// import { Footer } from "../components/footer" //Removed as per update 2
import { SiteSearch } from "../components/site-search"

export default function AboutPage() {
  return (
    <>
      <main className="flex-grow container mx-auto px-6 py-12 md:py-24 lg:py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About SecureRPC</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl">
          SecureRPC is an open-source RPC infrastructure designed to revolutionize how developers
          interact with Ethereum. Our mission is to provide secure, efficient, and MEV-protected
          access to the Ethereum network.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-400">
              We envision a world where secure and efficient access to Ethereum is readily available
              to all developers. SecureRPC aims to bridge the gap between traditional web
              development and the complexities of interacting with the Ethereum network.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-400">
              SecureRPC is built by a team of passionate developers and blockchain enthusiasts. With
              backgrounds in both traditional tech and crypto, we bring a unique perspective to
              solving the challenges of Ethereum development.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-400 mb-8">
          <li>Secure and reliable connection to Ethereum nodes</li>
          <li>Protection against MEV (Maximal Extractable Value) attacks</li>
          <li>High performance and low latency</li>
          <li>Easy integration with existing development workflows</li>
          <li>Support for various Ethereum clients</li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" asChild>
            <Link href="https://securerpc.com/docs">Documentation →</Link>
          </Button>
        </div>
      </main>
    </>
  )
}
