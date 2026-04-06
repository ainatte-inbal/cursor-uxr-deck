/** @type {import('next').NextConfig} */
// Intuit GHE Pages: https://github.intuit.com/pages/ainbal/<repo>/
// Override for public github.io: PAGES_BASE_PATH=/cursor-uxr-deck npm run build
// Local dev: no basePath so http://localhost:3000 works.
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd
  ? process.env.PAGES_BASE_PATH || '/pages/ainbal/cursor-uxr-deck'
  : ''
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
}

module.exports = nextConfig
