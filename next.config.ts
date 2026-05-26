import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable if deploying to a subdirectory
  // basePath: "",
  // Asset prefix for CDN
  // assetPrefix: "",
};

export default nextConfig;
