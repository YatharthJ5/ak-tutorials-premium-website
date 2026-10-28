
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ak-tutorials-premium-website",
  assetPrefix: "/ak-tutorials-premium-website/",
};

export default nextConfig;
