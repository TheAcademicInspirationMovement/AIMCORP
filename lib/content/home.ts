/** Homepage copy. Draft text — edit here, not in the components. */
export const home = {
  hero: {
    headline: "Building the future of technology for social action.",
    supporting:
      "AIMCorp develops public-interest initiatives and works alongside mission-driven organizations to strengthen their capacity through technology, engineering, design, and innovation.",
    primaryCta: { label: "Explore our initiatives", href: "#initiatives" },
    secondaryCta: { label: "Collaborate with us", href: "/services" },
    /** Replace with an approved photograph or illustration when available. */
    art: {
      src: "/art/hero.svg",
      alt: "",
    },
  },

  explanation: {
    heading: "Social purpose. Practical tools.",
    body: "We bring technical and creative approaches to public-interest challenges—developing our own initiatives and collaborating with organizations to build useful, sustainable solutions.",
    /**
     * Positioning themes, not verified impact claims. No statistics, partner
     * counts or track-record figures belong in this section.
     */
    capabilities: [
      {
        title: "Public-interest initiatives",
        body: "We develop our own projects in areas where useful tools are missing.",
        icon: "initiatives" as const,
      },
      {
        title: "Technology and engineering",
        body: "We design and build software with the people who will rely on it.",
        icon: "engineering" as const,
      },
      {
        title: "Organizational capacity building",
        body: "We help teams adopt, run and sustain what gets built.",
        icon: "capacity" as const,
      },
    ],
  },

  initiatives: {
    heading: "Our initiatives",
    supporting: "Explore the work we’re building.",
  },

  collaboration: {
    heading: "Build with AIMCorp.",
    body: "We collaborate with mission-driven organizations to identify needs, develop practical tools, and strengthen the capacity to deliver social impact.",
    cta: { label: "Explore collaboration", href: "/services" },
  },

  closing: {
    heading: "Let’s build something useful.",
    body: "Have a challenge, an idea, or an organization that could use a technical partner?",
    cta: { label: "Collaborate with us", href: "/services" },
  },
};
