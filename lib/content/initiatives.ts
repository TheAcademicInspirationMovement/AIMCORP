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
    building: [
      "Three-to-five-minute episodes, grouped into seasons around a theme, throughline or question in public and global health policy \u2014 subjects like vaccine acceptance, rural health, epidemics and health in the global south.",
      "Each episode travels in tiers: the full episode, teaser clips, standalone shorts, and supporting media such as infographics, data visualizations and shareable stat cards.",
      "Behind the camera we synthesize real evidence and seek the guidance of researchers and subject-matter experts, so that each season also produces briefs and tools an organization can actually use. Partnerships with NGOs, local health organizations and larger institutions source the primary evidence and take the policy output forward.",
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
