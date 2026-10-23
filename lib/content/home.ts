/** Homepage copy. Draft text — edit here, not in the components. */
export const home = {
  hero: {
    headline: "Imagining the future of social action.",
    supporting:
      "AIMCORP works hand-in-hand with mission-driven organizations to strengthen capacity through technology, engineering, research, and innovation.",
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
    body: "We’re a nonprofit built on engaging with the community and building for the community—for the community, by the community. We accelerate participatory design with the technology and innovation usually kept behind the closed doors of industry, and look for new ways to solve complex problems.",

    /** The areas our work concentrates on. */
    focalPoints: [
      "Education",
      "Outreach",
      "Public health",
      "Sustainability",
      "Youth development",
    ],
    /**
     * How we work, not what we have achieved. No statistics, partner counts
     * or track-record figures belong in this section.
     */
    capabilities: [
      {
        title: "Start with the community",
        body: "The people closest to a problem shape the work from the beginning, not at the end.",
        icon: "community" as const,
      },
      {
        title: "Design together, openly",
        body: "We put the methods and tools normally kept inside industry in the hands of the people designing with us.",
        icon: "participatory" as const,
      },
      {
        title: "Find another way through",
        body: "Complex problems rarely yield to conventional approaches, so we look for methods that have not been tried here yet.",
        icon: "methods" as const,
      },
    ],
  },

  initiatives: {
    heading: "Our initiatives",
    supporting: "Explore the work we’re building.",
  },

  collaboration: {
    heading: "Build with AIMCORP.",
    body: "We collaborate with mission-driven organizations to identify needs, develop practical tools, and strengthen the capacity to deliver social impact.",
    cta: { label: "Explore collaboration", href: "/services" },
  },

  closing: {
    heading: "Let’s build something useful.",
    body: "Have a challenge, an idea, or an organization that could use a technical partner?",
    cta: { label: "Collaborate with us", href: "/services" },
  },
};
