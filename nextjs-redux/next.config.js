/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/bookit'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/bookit/image/upload/**',
      },
    ],
    domains: [
      "res.cloudinary.com"
    ],
  },
}

module.exports = nextConfig
