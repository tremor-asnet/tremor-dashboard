/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demos.creative-tim.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
