/**
 * ---------------------------------------------------------------------------
 * INITIATIVES — EDITORIAL CONTENT SLOTS
 * ---------------------------------------------------------------------------
 * Only the initiative NAMES are confirmed. Every other field below is an
 * approval slot: fill it with copy that has been signed off, and the matching
 * section appears on the site. Leave a field as `null` (or an empty array) and
 * the site either hides the section or renders a visible editorial placeholder
 * instead of inventing material.
 *
 * To publish approved content:
 *   purpose      -> one sentence, shown under the name on the initiative page
 *   cardSummary  -> one short line, shown on the homepage card
 *   status       -> optional stage note shown beside the name
 *   tagline      -> optional brand tagline shown under the name
 *   challenge    -> paragraphs describing the problem being addressed
 *   building     -> paragraphs describing what is being built
 *   audience     -> paragraphs describing who it is for
 *   video        -> set youtubeId once the video is published
 *   channels     -> set each href to a real account URL; never invent one
 *   resources    -> real, working links only
 *   image        -> replace `art` or add a real project image (see public/art)
 * ---------------------------------------------------------------------------
 */

export type InitiativeSlug =
  | "loka"
  | "oona"
  | "stem-lab"
  | "sdoh-transformation";

export type ResourceLink = {
  label: string;
  href: string;
  description?: string;
};

/**
 * A video slot. The layout is in place before the video is; set `youtubeId`
 * once the video is published and the embed replaces the placeholder.
 */
export type VideoSlot = {
  /** YouTube video id, e.g. the "abc123" in youtu.be/abc123. */
  youtubeId: string | null;
  /** Used as the iframe title, so it must describe the video. */
  title: string;
  /** Shown in place of the player while youtubeId is null. */
  pendingNote: string;
};

/** A channel the initiative publishes on. */
export type Channel = {
  platform: string;
  /** Null until a real account URL is supplied — never invent one. */
  href: string | null;
};

/** Sections an initiative can opt out of entirely. */
export type InitiativeSection = "challenge" | "building" | "audience";

export type ImageSlot = {
  /** Swap this path for an approved asset; the layout does not change. */
  src: string;
  alt: string;
};

export type Initiative = {
  slug: InitiativeSlug;
  name: string;
  href: string;
  /** Approved one-sentence purpose. */
  purpose: string | null;
  /** Approved one-line card description. */
  cardSummary: string | null;
  /** Optional stage note, e.g. "Phase 0". Hidden when null. */
  status: string | null;
  /** Optional brand tagline shown under the name. Hidden when null. */
  tagline: string | null;
  /** Abstract placeholder artwork — replace with an approved project image. */
  art: ImageSlot;
  /** Optional project image for the initiative page; hidden when null. */
  image: ImageSlot | null;
  challenge: string[] | null;
  building: string[] | null;
  audience: string[] | null;
  /** Sections this initiative does not use; no placeholder is shown for them. */
  hiddenSections: InitiativeSection[];
  /** Optional video slot, shown after the challenge. Hidden when null. */
  video: VideoSlot | null;
  /** Channels to link out to. Hidden when empty. */
  channels: Channel[];
  resources: ResourceLink[];
  /** Per-initiative accent, kept inside the blue family and deliberately quiet. */
  accent: string;
};

export const initiatives: Initiative[] = [
  {
    slug: "loka",
    name: "Loka",
    href: "/loka",
    /**
     * Written from the Loka mission and program overview plus the brand kit
     * (LOKA_ AIMCORP/). The tagline and accent come from brand-spec.txt v1.0.
     */
    purpose:
      "Loka makes public and global health policy legible and trustworthy for Gen Z, through cinematic, story-driven video built on real evidence.",
    cardSummary: "Brain food for your doomscroll.",
    status: null, // OPTIONAL: e.g. a season or production stage, once confirmed
    tagline: "for the community. by the community.",
    art: {
      src: "/art/initiative-loka.svg",
      alt: "The Loka mark: a gold ring crossed by teal orbits and a small network of nodes",
    },
    image: null, // OPTIONAL: a still or key frame could go here
    challenge: [
      "Gen Z gets much of its health information from the same platforms that spread misinformation. Fighting that is not only a matter of producing content with correct information, but of producing it in a format people choose to watch.",
    ],
    building: null,
    hiddenSections: ["building"], // the trailer takes this slot instead
    video: {
      // Set this to the YouTube id once the trailer is published.
      youtubeId: null,
      title: "Loka \u2014 vaccination season trailer",
      pendingNote: "The vaccination season trailer will play here once it\u2019s published.",
    },
    channels: [
      // Add each real account URL here; the chips stay unlinked until then.
      { platform: "YouTube", href: null },
      { platform: "Instagram", href: null },
      { platform: "TikTok", href: null },
    ],
    audience: [
      "Gen Z \u2014 for youth, by youth. The point is to leave viewers able to speak knowledgeably about the issues that affect them, and to champion healthier futures.",
      "And the organizations working on those issues, who can use the briefs and tools that come out of a season directly.",
    ],
    resources: [], // No public URL yet
    accent: "#e8a94a", // Beacon, from the Loka brand spec
  },
  {
    slug: "oona",
    name: "Oona",
    href: "/oona",
    /**
     * Sourced from the Oona project's own documentation (README.md and
     * src/context.md in the oona repository), not written from scratch.
     * Re-check it against that repository before publishing.
     */
    purpose:
      "Oona is a research technology platform for women\u2019s health, community health and global health research.",
    cardSummary:
      "A connected research environment for women\u2019s, community and global health research.",
    status: "Phase 0 \u2014 concept prototypes, not production software",
    tagline: null,
    art: {
      src: "/art/initiative-oona.svg",
      alt: "Abstract layered wave bands representing the Oona initiative",
    },
    image: null, // OPTIONAL: a screenshot of a real prototype screen could go here
    challenge: [
      "Most research software solves one part of the workflow. Some tools collect surveys, some manage datasets, some analyze quantitative data, some transcribe interviews, some provide dashboards, some manage health information systems.",
      "Research teams end up assembling a fragmented ecosystem across survey platforms, spreadsheets, messaging applications, transcription tools, statistical software, participant trackers, EHRs, DHIS2 and paper workflows \u2014 and the connections between those pieces are held together by people.",
      "That fragmentation is hardest in exactly the settings the research serves: intermittent connectivity, inexpensive mobile devices, multiple languages, sensitive health information, distributed field teams and longitudinal follow-up.",
    ],
    building: [
      "A connected research environment designed around how community and women\u2019s health research actually happens, organised around one lifecycle: design, collect, connect, understand, act.",
      "This phase is deliberately not production software. It is three representations of a single product vision \u2014 five concept prototypes with a shared design system, a technical and product scope document, and a pitch deck \u2014 built in that order.",
      "Nothing sits behind those screens yet: no backend, no database, no messaging provider, no analysis agent. All research data shown is synthetic, and where a screen shows something that does not exist yet, it says so on the screen.",
    ],
    audience: [
      "Research teams working in women\u2019s health, community health and global health, including implementation research, longitudinal population research, mixed-methods research, and field research in low-connectivity environments.",
      "The people who carry that work day to day: field researchers, community health workers, and the multi-institution partnerships that run studies across sites.",
    ],
    hiddenSections: [],
    video: null,
    channels: [],
    resources: [], // No public URL yet \u2014 add prototypes, scope or deck when published
    accent: "#f1a9ab", // the Oona mark's salmon
  },
  {
    slug: "stem-lab",
    name: "STEM Lab",
    href: "/stem-lab",
    purpose: null, // APPROVED COPY REQUIRED
    cardSummary: null, // APPROVED COPY REQUIRED
    status: null, // OPTIONAL
    tagline: null, // OPTIONAL
    art: {
      src: "/art/initiative-stem-lab.svg",
      alt: "Abstract connected node lattice representing the STEM Lab initiative",
    },
    image: null,
    challenge: null,
    building: null,
    audience: null,
    hiddenSections: [],
    video: null,
    channels: [],
    resources: [],
    accent: "#a39cff",
  },
  {
    slug: "sdoh-transformation",
    name: "SDoH Transformation",
    href: "/sdoh-transformation",
    purpose: null, // APPROVED COPY REQUIRED
    cardSummary: null, // APPROVED COPY REQUIRED
    status: null, // OPTIONAL
    tagline: null, // OPTIONAL
    art: {
      src: "/art/initiative-sdoh-transformation.svg",
      alt: "Abstract nested contour shapes representing the SDoH Transformation initiative",
    },
    image: null,
    challenge: null,
    building: null,
    audience: null,
    hiddenSections: [],
    video: null,
    channels: [],
    resources: [],
    accent: "#8cb6dd",
  },
];

export function getInitiative(slug: InitiativeSlug): Initiative {
  const match = initiatives.find((item) => item.slug === slug);
  if (!match) throw new Error(`Unknown initiative: ${slug}`);
  return match;
}

/** Shown wherever approved copy has not been supplied yet. */
export const initiativePlaceholders = {
  card: "Description pending editorial approval.",
  purpose: "A one-sentence purpose for this initiative is awaiting approval.",
  challenge:
    "The challenge this initiative addresses has not been approved for publication yet.",
  building:
    "A description of what is being built has not been approved for publication yet.",
  audience:
    "The intended audience for this initiative has not been confirmed yet.",
};
