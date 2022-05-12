// /** @type {import('next').NextConfig} */
// module.exports = {
//   ...require("@bird-studio/js-config").nextConfig,
// };

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
  compiler: {
    reactRemoveProperties: true,
    styledComponents: true,
  },
};
