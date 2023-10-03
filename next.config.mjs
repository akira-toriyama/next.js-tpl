import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: true,
  },
};

export default config;
