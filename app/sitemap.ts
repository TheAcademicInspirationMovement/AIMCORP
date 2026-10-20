import type { MetadataRoute } from "next";
import { programs, programHref } from "@/lib/programs";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const programPaths = programs.map((p) => programHref(p));
  const paths = [
    "",
    "/about",
    "/impact",
    "/impact/bidadi",
    "/impact/vijetha",
    "/programs",
    ...programPaths,
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
