
/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        basePath: "/ak-tutorials-premium-website",
        assetPrefix: "/ak-tutorials-premium-website/",
      }
    : {}),
};

export default nextConfig;
