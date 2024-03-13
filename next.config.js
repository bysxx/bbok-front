/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['k.kakaocdn.net'],
  },
  eslint: {
    dirs: ['.'],
  },
  reactStrictMode: false,
  compiler: {
    removeConsole: false,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
