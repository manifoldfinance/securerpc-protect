export default function APIReferencePage() {
	return (
		<div className="max-w-3xl">
			<h1 className="text-4xl font-bold mb-6">API Reference</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Overview</h2>
				<p className="mb-4">
					This API reference provides detailed information about the SecureRPC
					API, including available methods, parameters, and response formats.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">
							/graphql
						</code>{" "}
						- GraphQL API endpoint
					</li>
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">
							/health
						</code>{" "}
						- Health check endpoint
					</li>
					<li>
						<code className="bg-gray-800 px-2 py-1 rounded text-sm">
							/metrics
						</code>{" "}
						- Metrics endpoint
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">GraphQL API</h2>
				<p className="mb-4">
					The main API endpoint is a GraphQL API. You can use this to query your
					indexed data.
				</p>
				<h3 className="text-xl font-semibold mb-2">Example Query</h3>
				<pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
					<code className="text-sm text-white">
						{`query {
  transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
    id
    from
    to
    value
    timestamp
  }
}`}
					</code>
				</pre>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
				<p className="mb-4">
					Errors are returned in the standard GraphQL error format. Each error
					object contains a message field and optional locations and extensions
					fields.
				</p>
			</section>
		</div>
	);
}
