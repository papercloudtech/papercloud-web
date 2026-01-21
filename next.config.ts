import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  
  // GitHub Pages deployment configuration (only in production)
  ...(isProd && {
    basePath: '/papercloud-web',
    assetPrefix: '/papercloud-web',
  }),
  
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
