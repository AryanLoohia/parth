/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: [
      "images.unsplash.com",
      "www.youtube.com",
      "store.steampowered.com",
    ],
  },
};

module.exports = nextConfig;
