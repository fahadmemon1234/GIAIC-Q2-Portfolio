/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's image CDN domain
  },
};

export default nextConfig;
