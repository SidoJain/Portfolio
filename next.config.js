/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
	images: {
		unoptimized: true,
	},
    compress: true,
};

module.exports = withBundleAnalyzer(nextConfig)