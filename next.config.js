/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
  compiler: {
    // https://github.com/vercel/next.js/issues/36651#issuecomment-1126971095
    reactRemoveProperties: process.env.NODE_ENV === "production",
    styledComponents: true,
  },
};
