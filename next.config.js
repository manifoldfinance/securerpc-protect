/** @type {import('next').NextConfig} */
const nextConfig = {
//	transpilePackages: ['next-mdx-remote'],
	poweredByHeader: false,
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		ignoreDuringBuilds: false,
	},
	typescript: {
		ignoreBuildErrors: false,
	},
}

module.exports = nextConfig
