/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/bookit',
    CLOUDINARY_CLOUD_NAME: 'dc5ejola9',
    CLOUDINARY_API_KEY: '237396269585666',
    CLOUDINARY_API_SECRET: 'hlF8uCX_FrLU1MbcGyXJNazEwf8'
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
