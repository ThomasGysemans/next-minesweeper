/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
