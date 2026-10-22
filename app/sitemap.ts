import type { MetadataRoute } from "next";
import { initiatives } from "@/lib/content/initiatives";
import { programs, programHref } from "@/lib/programs";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const current = ["", ...initiatives.map((i) => i.href), "/services", "/archive"];

  const archived = [
    "/about",
    "/impact",
    "/impact/bidadi",
    "/impact/vijetha",
    "/philanthropy",
    ...programs.map((program) => programHref(program)),
    "/join",
    "/contact",
    "/donate",
    "/stories/womens-health",
  ];

  return [...current, ...archived].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
