/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use both app and pages directories
  useFileSystemPublicRoutes: true,
};

module.exports = nextConfig;
