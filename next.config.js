/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "firebasestorage.googleapis.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
