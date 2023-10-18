/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ID: "id",
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
