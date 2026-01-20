import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // GitHub Pages deployment configuration
  // If deploying to https://username.github.io/repo-name, uncomment and set:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',
  
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
