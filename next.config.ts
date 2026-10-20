import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/programs", destination: "/impact", permanent: false },
      { source: "/join-us", destination: "/join", permanent: false },
      {
        source: "/bidadi-primary-school-outreach",
        destination: "/impact/bidadi",
        permanent: false,
      },
      {
        source: "/vijetha-special-school-outreach",
        destination: "/impact/vijetha",
        permanent: false,
      },
      { source: "/venmo", destination: "/donate", permanent: false },
      { source: "/coaching-donation", destination: "/donate", permanent: false },
      {
        source: "/aimcorp-x-womens-health",
        destination: "/stories/womens-health",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
