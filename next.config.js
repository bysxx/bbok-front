/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  reactStrictMode: false,
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
