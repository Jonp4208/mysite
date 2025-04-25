/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable static generation of 404 page
  experimental: {
    missingSuspenseWithCSRBailout: true
  }
};

module.exports = nextConfig;
