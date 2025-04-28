import type { NextConfig } from 'next';
import type { Configuration as WebpackConfig } from 'webpack';

const nextConfig: NextConfig = {
  webpack: (config: WebpackConfig): WebpackConfig => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
