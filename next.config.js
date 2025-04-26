/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use server-side rendering
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Disable PWA for now
  env: {
    DISABLE_PWA: 'true'
  }
};

module.exports = nextConfig;
