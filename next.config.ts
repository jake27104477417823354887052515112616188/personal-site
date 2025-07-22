import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-site' : '', // Use basePath only in production
  typescript: {
    ignoreBuildErrors: true, 
  },
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;