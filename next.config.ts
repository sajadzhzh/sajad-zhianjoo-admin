import type { NextConfig } from "next";

const nextConfig: NextConfig = {
allowedDevOrigins: ['192.168.1.8'],
experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
