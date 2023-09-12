const { withKumaUI } = require("@kuma-ui/next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TODO やめる
  pageExtensions: ["page.tsx"],
  compiler: {
    reactRemoveProperties: true,
  },
};

module.exports = withKumaUI(nextConfig);
