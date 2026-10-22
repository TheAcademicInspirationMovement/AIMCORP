/**
 * Centralised navigation. Every destination here must resolve to a real route.
 * Archive deliberately lives in the footer only, never in the primary menu.
 */
export type NavItem = { href: string; label: string };

export const primaryNav: NavItem[] = [
  { href: "/loka", label: "Loka" },
  { href: "/oona", label: "Oona" },
  { href: "/stem-lab", label: "STEM Lab" },
  { href: "/sdoh-transformation", label: "SDoH Transformation" },
  { href: "/services", label: "Services" },
];

export const footerInitiatives: NavItem[] = primaryNav.filter(
  (item) => item.href !== "/services",
);

export const footerOrganisation: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/", label: "Home" },
];

export const archiveLink: NavItem = { href: "/archive", label: "Archive" };
