import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/buy',
        destination: '/personal#buy',
        permanent: false,
      },
      {
        source: '/sell',
        destination: '/personal#sell',
        permanent: false,
      },
      {
        source: '/convert',
        destination: '/personal#convert',
        permanent: false,
      },
      {
        source: '/card',
        destination: '/cards',
        permanent: false,
      },
      {
        source: '/waitlist',
        destination: '/personal#card',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
