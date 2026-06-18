import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "makewellindustries.co.in",
        pathname: "/assets/images/**",
      },
    ],
  },
};

export default nextConfig;
