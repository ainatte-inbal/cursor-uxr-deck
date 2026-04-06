/** @type {import('next').NextConfig} */
// GitHub Pages needs a subpath; local `next dev` should use "/" so http://localhost:3000 works.
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/cursor-uxr-deck' : ''
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
}

module.exports = nextConfig
