/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the export output for now as it's not compatible with Sanity Studio integration
  // output: 'export',
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
    unoptimized: true,
  },
  // Add transpilePackages for Sanity Studio
  transpilePackages: ['sanity'],
};

module.exports = nextConfig;