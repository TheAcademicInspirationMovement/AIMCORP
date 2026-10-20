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

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/impact", label: "Impact" },
  { href: "/join", label: "Join us" },
  { href: "/contact", label: "Contact" },
];
