/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.dummyjson.com" },
      { hostname: "dummyjson.com" },
    ],
  },
};

export default nextConfig;
