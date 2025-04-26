/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use server-side rendering instead of static export
  output: 'standalone',
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
