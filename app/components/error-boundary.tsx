"use client"

import React, { type ErrorInfo, type ReactNode } from "react"

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
	error: Error | null
	errorInfo: ErrorInfo | null
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false, error: null, errorInfo: null }
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error, errorInfo: null }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo)
		this.setState({ error, errorInfo })
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
					<div className="text-center">
						<h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
						<p className="text-xl mb-8">
							We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem
							persists.
						</p>
						{this.state.error && (
							<div className="mb-4 text-left">
								<h2 className="text-2xl font-bold mb-2">Error Details:</h2>
								<pre className="bg-gray-800 p-4 rounded overflow-auto">{this.state.error.toString()}</pre>
							</div>
						)}
						<button
							type="button"
							onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						>
							Try Again
						</button>
					</div>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
