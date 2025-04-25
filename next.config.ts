import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Configure Turbopack
    resolveAlias: {
      // Add any necessary aliases here
    },
  },
};

// Only apply PWA in production to avoid Turbopack conflicts
const config = process.env.NODE_ENV === 'production'
  ? withPWA({
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: false,
    })(nextConfig)
  : nextConfig;

export default config;
