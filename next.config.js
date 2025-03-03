/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  // Add transpilePackages for Sanity Studio
  transpilePackages: ['sanity'],
};

module.exports = nextConfig;