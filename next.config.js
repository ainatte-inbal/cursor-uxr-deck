/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cursor-uxr-deck',
  assetPrefix: '/cursor-uxr-deck/',
}

module.exports = nextConfig
