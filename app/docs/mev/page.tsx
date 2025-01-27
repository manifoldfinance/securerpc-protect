import { MevTable } from "@/app/components/mev-table";
import React from "react";

const MEVActivitiesPage: React.FC = () => {
	return (
		<div className="flex-grow">
			<section className="relative overflow-hidden">
				<div className="relative z-20">
					<div className="container mx-auto px-6 py-32">
						<h1 className="text-4xl md:text-5xl font-bold mb-8">
							MEV Activities
						</h1>
						<p className="text-lg text-gray-400 mb-12">
							Explore the various MEV activities that exist on the blockchain.
						</p>
						<div className="mb-24">
							<MevTable />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default MEVActivitiesPage;
