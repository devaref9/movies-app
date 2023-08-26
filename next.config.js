/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif"],
    domains: ["m.media-amazon.com", "moviesapi.ir"],
    deviceSizes: [640, 768, 1024, 1080, 1280],
  },
};

module.exports = nextConfig;
