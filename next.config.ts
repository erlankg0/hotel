import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.utopiahotels.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
