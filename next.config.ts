import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["./prisma/adapter-neon", "./lib/generated/prisma"],
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
        protocol: "https",
      },
      {
        hostname: "mockmind-api.uifaces.co",
      },
      { hostname: "picsum.photos" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
