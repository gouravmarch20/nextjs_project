import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  fontLoaders: [], // 👈 prevents automatic Geist/Inter injection
  ignoreDuringBuilds: true, // 🚨 disables lint errors in build

  /* config options here */
};

export default nextConfig;
