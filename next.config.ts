import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pseudoregalia-archipelago-logic-viewer",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
