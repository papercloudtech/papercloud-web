import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // GitHub Pages deployment configuration
  basePath: '/papercloud-web',
  assetPrefix: '/papercloud-web',
  
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
