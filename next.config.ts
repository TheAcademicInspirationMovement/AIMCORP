import type { NextConfig } from "next";
import path from "path";
import { programs, programHref } from "./lib/programs";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    const legacyProgramRedirects = programs.flatMap((program) =>
      (program.legacySlugs ?? []).map((legacy) => ({
        source: `/${legacy}`,
        destination: programHref(program),
        permanent: false,
      })),
    );

    return [
      ...legacyProgramRedirects,
      { source: "/join-us", destination: "/join", permanent: false },
      { source: "/venmo", destination: "/donate", permanent: false },
      {
        source: "/aimcorp-x-womens-health",
        destination: "/stories/womens-health",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
