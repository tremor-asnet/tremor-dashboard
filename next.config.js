/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "demos.creative-tim.com",
      },
    ],
  },
};

module.exports = nextConfig;
