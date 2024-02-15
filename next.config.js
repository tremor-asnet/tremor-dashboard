/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demos.creative-tim.com",
        port: "",
      },
    ],
    domains: ["i.ibb.co"],
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },
});
