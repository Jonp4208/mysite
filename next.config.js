/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use static export
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Disable PWA for now
  env: {
    DISABLE_PWA: 'true'
  },
  // Handle redirects
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/',
        permanent: false,
      },
    ];
  }
};

module.exports = nextConfig;
