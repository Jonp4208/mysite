/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use server-side rendering
  output: 'standalone',
  // Disable PWA for now
  env: {
    DISABLE_PWA: 'true'
  },
  // Disable static generation of 404 page
  experimental: {
    disableStaticNotFound: true
  }
};

module.exports = nextConfig;
