import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force dynamic rendering for all pages to ensure meta tags are always fresh
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
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
