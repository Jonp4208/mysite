/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable static generation
  output: 'standalone',
  // Disable 404 page generation
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Disable PWA for now
  env: {
    DISABLE_PWA: 'true'
  }
};

module.exports = nextConfig;
