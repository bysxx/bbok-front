/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['k.kakaocdn.net', 'bbok-component.s3.ap-northeast-2.amazonaws.com'],
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
