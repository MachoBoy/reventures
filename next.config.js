/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['maps.googleapis.com', 'cmsreventures.local'],
  },
};

module.exports = nextConfig;
