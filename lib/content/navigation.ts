/**
 * Centralised navigation. Every destination here must resolve to a real route.
 * Archive deliberately lives in the footer only, never in the primary menu.
 */
export type NavItem = { href: string; label: string };

export const primaryNav: NavItem[] = [
  { href: "/loka", label: "Loka" },
  { href: "/oona", label: "Oona" },
  { href: "/astria", label: "Astria" },
  { href: "/stem-lab", label: "STEM Lab" },
  { href: "/sdoh-transformation", label: "SDoH" },
  { href: "/outreach", label: "Outreach" },
  { href: "/services", label: "Services" },
];

const nonInitiative = new Set(["/services", "/outreach"]);

export const footerInitiatives: NavItem[] = primaryNav.filter(
  (item) => !nonInitiative.has(item.href),
);

export const footerOrganisation: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/", label: "Home" },
];

export const archiveLink: NavItem = { href: "/archive", label: "Archive" };
