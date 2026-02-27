import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/review",
        destination: "https://share.google/esXI9ROTuNtZg4H5K",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
