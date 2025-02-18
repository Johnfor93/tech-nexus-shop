import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.takeshape.io',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  module:['midtrans-client'],
};

export default nextConfig;
