import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/impact",
    "/impact/bidadi",
    "/impact/vijetha",
    "/join",
    "/contact",
    "/donate",
    "/stories/womens-health",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
