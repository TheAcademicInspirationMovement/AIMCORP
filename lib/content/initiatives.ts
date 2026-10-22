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
    purpose: null, // APPROVED COPY REQUIRED
    cardSummary: null, // APPROVED COPY REQUIRED
    art: {
      src: "/art/initiative-loka.svg",
      alt: "Abstract concentric arcs representing the Loka initiative",
    },
    image: null, // OPTIONAL: add an approved project image to show it here
    challenge: null, // APPROVED COPY REQUIRED
    building: null, // APPROVED COPY REQUIRED
    audience: null, // APPROVED COPY REQUIRED
    resources: [], // OPTIONAL: add real links only
    accent: "#8fb0ff",
  },
  {
    slug: "oona",
    name: "Oona",
    href: "/oona",
    purpose: null, // APPROVED COPY REQUIRED
    cardSummary: null, // APPROVED COPY REQUIRED
    art: {
      src: "/art/initiative-oona.svg",
      alt: "Abstract layered wave bands representing the Oona initiative",
    },
    image: null,
    challenge: null,
    building: null,
    audience: null,
    resources: [],
    accent: "#74d0d6",
  },
  {
    slug: "stem-lab",
    name: "STEM Lab",
    href: "/stem-lab",
    purpose: null, // APPROVED COPY REQUIRED
    cardSummary: null, // APPROVED COPY REQUIRED
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
