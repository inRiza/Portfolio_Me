import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during production build
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  // other config options here
};

export default nextConfig;