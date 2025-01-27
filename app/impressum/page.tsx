import { Github } from "lucide-react"
import Link from "next/link"
import { SiteSearch } from "../components/site-search"

export default function ImpressumPage() {
	return (
		<>
			<main className="flex-grow container mx-auto px-6 py-12">
				<h1 className="text-4xl font-bold mb-8">Impressum</h1>
				<section className="mb-8">
					<h2 className="text-2xl font-semibold mb-4">Company Information</h2>
					<p className="mb-2">SecureRPC GmbH</p>
					<p className="mb-2">Blockchain Allee 42</p>
					<p className="mb-2">10115 Berlin</p>
					<p className="mb-2">Germany</p>
				</section>
				<section className="mb-8">
					<h2 className="text-2xl font-semibold mb-4">Contact</h2>
					<p className="mb-2">Email: contact@securerpc.com</p>
					<p className="mb-2">Phone: +49 30 1234567</p>
				</section>
				<section className="mb-8">
					<h2 className="text-2xl font-semibold mb-4">Legal Representatives</h2>
					<p className="mb-2">CEO: Jane Doe</p>
					<p className="mb-2">CTO: John Smith</p>
				</section>
				<section>
					<h2 className="text-2xl font-semibold mb-4">Register Information</h2>
					<p className="mb-2">Registered at: Amtsgericht Berlin-Charlottenburg</p>
					<p className="mb-2">Registration Number: HRB 123456</p>
					<p className="mb-2">VAT ID: DE123456789</p>
				</section>
			</main>
		</>
	)
}
