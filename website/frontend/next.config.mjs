/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Skip Node.js version check when using Bun
  experimental: {
    skipNodeCheck: true,
    // Enable Bun for minification and other tasks
    useBun: true
  }
};

export default nextConfig;