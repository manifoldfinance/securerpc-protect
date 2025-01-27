import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
	return (
		<section className="bg-white/5 py-16">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-8 md:mb-0 md:mr-8 max-w-2xl">
						<h2 className="text-3xl font-bold mb-4">
							Ready to experience enterprise-grade JSON-RPC?
						</h2>
						<p className="text-lg text-gray-400">
							Get started with SecureRPC today and unlock the full potential of
							your blockchain infrastructure with advanced privacy features and
							MEV protection.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							asChild
							variant="outline"
							className="bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white border-none rounded-full px-6 h-12"
						>
							<Link href="/contact" className="flex items-center gap-2">
								Request Information
								<ArrowRight className="w-4 h-4" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
