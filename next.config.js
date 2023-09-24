/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: true,
  },
  experimental: {
    serverActions: true,
  },
};
