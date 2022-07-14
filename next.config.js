/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['maps.googleapis.com'],
  },
  env: {
    mapKey: 'AIzaSyCPBToDKetpKWLuYCxeLA1G58TdpEhmNC8',
  },
};

module.exports = nextConfig;
