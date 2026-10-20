export const site = {
  name: "AIMCORP",
  legalName: "Applied Innovation Movement",
  tagline: "Educating and Empowering Deserving Children Worldwide",
  description:
    "AIMCORP is a 501(c)(3) nonprofit catalyzing social-impact innovation through education, philanthropy, and inclusion.",
  url: "https://www.aimcorp.org",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@aimcorp.org",
  paypal: "https://www.paypal.me/aimcorp",
  venmoPath: "/donate",
};

import { programHref, programs } from "@/lib/programs";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join us" },
  { href: "/contact", label: "Contact" },
];

/** Philanthropy dropdown order (matches legacy WordPress menu). */
const philanthropyOrder = [
  "winter-2022",
  "winter-2021",
  "summer-2020",
  "spring-math-2020",
  "bidadi-outreach",
  "vijetha-outreach",
  "coaching-donation",
  "volleyball-cancer-fundraiser",
  "digital-slate-outreach",
  "computer-drive",
  "educational-tablet-outreach",
];

export const philanthropyNav = [
  { href: "/programs", label: "All programs" },
  ...philanthropyOrder.map((slug) => {
    const program = programs.find((p) => p.slug === slug)!;
    return { href: programHref(program), label: program.title };
  }),
];
