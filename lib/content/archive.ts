import { programHref, programs } from "@/lib/programs";

/**
 * ---------------------------------------------------------------------------
 * ARCHIVE
 * ---------------------------------------------------------------------------
 * A plain list of older pages that still exist on this site. Entries are only
 * ever added for pages that are genuinely published — nothing here is written
 * from memory or reconstructed. Remove every entry and the page falls back to
 * an empty state.
 * ---------------------------------------------------------------------------
 */

export type ArchiveEntry = {
  title: string;
  description: string;
  href: string;
  /** Optional period label, omitted when unknown. */
  date?: string;
};

/** Older standalone pages carried over from previous versions of this site. */
const pages: ArchiveEntry[] = [
  {
    title: "About AIMCORP",
    description:
      "The organizational overview published on the previous version of this site.",
    href: "/about",
  },
  {
    title: "Philanthropy",
    description:
      "Index of past programs, outreach and fundraising activity.",
    href: "/philanthropy",
  },
  {
    title: "Impact",
    description: "Earlier write-ups of school outreach work.",
    href: "/impact",
  },
  {
    title: "Join us",
    description: "The previous volunteer and membership page.",
    href: "/join",
  },
  {
    title: "Contact",
    description: "The previous contact page.",
    href: "/contact",
  },
  {
    title: "Donate",
    description: "The previous donation page.",
    href: "/donate",
  },
  {
    title: "AIMCORP x Women’s Health",
    description:
      "A story page about the women’s health literacy toolkit published on the previous site.",
    href: "/stories/womens-health",
  },
];

/** Program pages, generated from the existing program records. */
const programEntries: ArchiveEntry[] = programs.map((program) => ({
  title: program.title,
  description: program.summary,
  href: programHref(program),
  date: program.year,
}));

/** One entry per URL: a few program records point at a page already listed. */
function dedupeByHref(entries: ArchiveEntry[]): ArchiveEntry[] {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.href)) return false;
    seen.add(entry.href);
    return true;
  });
}

export const archiveEntries: ArchiveEntry[] = dedupeByHref([
  ...pages,
  ...programEntries,
]);
