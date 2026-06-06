/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // put here
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
