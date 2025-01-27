export default function APIReferencePage() {
	return (
		<div className="max-w-3xl">
			<h1 className="text-4xl font-bold mb-6">SecureRPC Relay</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Overview</h2>
				<p className="mb-4">MEV-Boost Relay API specification v1. A relay has several core responsibilities:</p>
				<ul className="list-disc pl-6 space-y-2 mb-4">
					<li>APIs for proposers, block builders and data transparency</li>
					<li>Handling validator registrations and block proposals in a scalable manner</li>
					<li>Block escrow, data availability, redundancy</li>
					<li>Simulate and verify blocks sent by block-builders, rate-limit if necessary</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Data Types</h2>
				<p className="mb-4">
					Reference implementation of data types with correct SSZ encoding and signing routines can be found in the
					go-boost-utils repository.
				</p>
				<h3 className="text-xl font-semibold mb-2">Core Types</h3>
				<ul className="list-disc pl-6 space-y-2">
					<li>ValidatorRegistration</li>
					<li>SignedBuilderBid</li>
					<li>SignedBlindedBeaconBlock</li>
					<li>ExecutionPayload</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">API Endpoints</h2>

				<h3 className="text-xl font-semibold mb-2">Proposer API</h3>
				<ul className="list-disc pl-6 space-y-2 mb-4">
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">POST `/eth/v1/builder/validators`</code>- Register
						validator
					</li>
					<li>
						{/** @ts-ignore */}
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">
							GET `/eth/v1/builder/header/{slot}/{parent_hash}/{pubkey}`
						</code>
						- Get execution payload header
					</li>
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">POST `/eth/v1/builder/blinded_blocks`</code>- Submit
						signed blinded block
					</li>
				</ul>

				<h3 className="text-xl font-semibold mb-2">Builder API</h3>
				<ul className="list-disc pl-6 space-y-2 mb-4">
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">GET `/relay/v1/builder/validators`</code>- Get
						validator registrations
					</li>
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">POST `/relay/v1/builder/blocks`</code>- Submit new
						block
					</li>
				</ul>

				<h3 className="text-xl font-semibold mb-2">Data API</h3>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">
							GET `/relay/v1/data/bidtraces/proposer_payload_delivered`
						</code>
						- Get delivered payload BidTraces
					</li>
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">
							GET `/relay/v1/data/bidtraces/builder_blocks_received`
						</code>
						- Get received builder blocks
					</li>
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">GET `/relay/v1/data/validator_registration`</code>-
						Get validator registration status
					</li>
				</ul>
			</section>
		</div>
	)
}
