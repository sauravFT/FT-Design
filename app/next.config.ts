import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a minimal, self-contained server build (.next/standalone) for containerized
  // deploys to Cloud Run. server.js honors PORT/HOSTNAME at runtime.
  output: "standalone",
};

export default nextConfig;
