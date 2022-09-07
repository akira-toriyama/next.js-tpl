/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
  compiler: {
    reactRemoveProperties: true,
    styledComponents: true,
  },
};
