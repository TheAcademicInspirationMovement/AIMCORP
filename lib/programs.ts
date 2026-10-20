export type ProgramCategory = "outreach" | "seasonal" | "fundraiser";

export type Program = {
  slug: string;
  title: string;
  year: string;
  category: ProgramCategory;
  summary: string;
  paragraphs: string[];
  image: string;
  /** If set, detail page lives here instead of /philanthropy/[slug] */
  href?: string;
  legacySlugs?: string[];
};

export const programCategories: Record<
  ProgramCategory,
  { label: string; description: string }
> = {
  seasonal: {
    label: "Seasonal programs",
    description: "Virtual enrichment courses for students, run by AIMCORP volunteers.",
  },
  outreach: {
    label: "Community outreach",
    description: "Hands-on partnerships with schools and communities worldwide.",
  },
  fundraiser: {
    label: "Fundraisers & drives",
    description: "Campaigns that connected donations to education and relief.",
  },
};

export const programs: Program[] = [
  {
    slug: "winter-2022",
    title: "Winter Programs 2022",
    year: "2022",
    category: "seasonal",
    summary:
      "Free interactive educational programs for students of all ages, held virtually beginning January 29, 2022.",
    paragraphs: [
      "The Academic Inspiration Movement hosted a free series of interactive educational programs for students of all ages in the winter of 2022, beginning January 29th.",
      "Courses were conducted virtually via Google Meet in a group class format. Registrations remained open through the first week of classes, with encouragement to register early for the best experience.",
      "This archive preserves the program season for families and volunteers who participated. Live course registration is no longer active on this site.",
    ],
    image: "/images/classroom-wide.jpg",
    legacySlugs: ["winter-programs-2022", "winter-registration-2022"],
  },
  {
    slug: "winter-2021",
    title: "Winter Programs 2021",
    year: "2021",
    category: "seasonal",
    summary:
      "Virtual winter enrichment courses for students of all ages during the 2021 season.",
    paragraphs: [
      "AIMCORP hosted a series of interactive educational programs for students of all ages in the winter of 2021.",
      "Courses were conducted virtually via Google Meet in a group class format, with descriptions and age ranges published for each offering.",
    ],
    image: "/images/classroom.jpg",
    legacySlugs: ["winter-programs", "winter-programs-registrations"],
  },
  {
    slug: "fall-2021",
    title: "Fall Programs 2021",
    year: "2021",
    category: "seasonal",
    summary:
      "Fall 2021 virtual programs; donations supported educational devices for deserving youth.",
    paragraphs: [
      "The Academic Inspiration Movement hosted interactive educational programs for students of all ages in fall 2021.",
      "Courses were conducted virtually via Google Meet. Donation proceeds supported providing deserving youth with educational devices to supplement their learning.",
    ],
    image: "/images/supplies.jpg",
    legacySlugs: ["fall-programs", "fall-2021-registrations"],
  },
  {
    slug: "summer-2020",
    title: "Summer Programs 2020",
    year: "2020",
    category: "seasonal",
    summary:
      "Interactive online educational programs for students of all ages, run over six weeks.",
    paragraphs: [
      "The AIM team hosted a series of interactive educational programs for students of all ages during summer 2020.",
      "All programs were conducted online for a duration of six weeks, spanning topics from math and science to technology and enrichment.",
    ],
    image: "/images/classroom-wide.jpg",
    legacySlugs: ["summer-programs", "summer-programs-2"],
  },
  {
    slug: "spring-math-2020",
    title: "Spring Math Coaching 2020",
    year: "2020",
    category: "seasonal",
    summary:
      "Online math coaching for enrichment, paired with a COVID-19 relief fundraising effort.",
    paragraphs: [
      "The AIM team conducted online math coaching sessions to support students in mathematical enrichment, with a curriculum designed to help learners go above and beyond in their classrooms.",
      "As a pilot program, the team was proud to make a difference for COVID-19 relief worldwide while serving students virtually.",
    ],
    image: "/images/vijetha-students.jpg",
    legacySlugs: ["spring-math-coaching"],
  },
  {
    slug: "bidadi-outreach",
    title: "Bidadi Primary School Outreach",
    year: "2020",
    category: "outreach",
    summary:
      "STEM enrichment and school supplies for students in Bidadi, Karnataka, India.",
    paragraphs: [
      "The AIM team visited a primary school in Bidadi, Karnataka, India, where we conducted STEM enrichment outreach and provided each student with school utensils for daily academic use.",
      "It made us very happy to make a meaningful difference in the lives of so many deserving young children.",
    ],
    image: "/images/classroom.jpg",
    href: "/impact/bidadi",
    legacySlugs: ["bidadi-primary-school-outreach"],
  },
  {
    slug: "vijetha-outreach",
    title: "Vijetha Special School Outreach",
    year: "2020",
    category: "outreach",
    summary:
      "Fundraising, awareness, and partnership with a residential school in Karnataka, India.",
    paragraphs: [
      "Vijetha Special School is a residential education center for specially abled children in Karnataka, India.",
      "AIM partnered with the Triangle Tuluvere Chavadi of Raleigh, NC, to raise funds and awareness. The team visited the school and supported staff in adopting Google tools for their work.",
    ],
    image: "/images/vijetha.jpg",
    href: "/impact/vijetha",
    legacySlugs: ["vijetha-special-school-outreach"],
  },
  {
    slug: "educational-tablet-outreach",
    title: "Educational Tablet Outreach",
    year: "2021",
    category: "outreach",
    summary:
      "Providing tablets and digital access to supplement learning for underserved students.",
    paragraphs: [
      "AIMCORP’s educational tablet outreach focused on putting devices in the hands of students who needed them for virtual learning and everyday coursework.",
      "This initiative complemented seasonal programs and donation campaigns during the shift to online education.",
    ],
    image: "/images/supplies.jpg",
    legacySlugs: ["educational-tablet-outreach"],
  },
  {
    slug: "digital-slate-outreach",
    title: "Digital Slate Outreach",
    year: "2021",
    category: "outreach",
    summary:
      "Digital writing tools for students without reliable classroom supplies.",
    paragraphs: [
      "The digital slate outreach provided low-cost digital writing surfaces so students could practice and learn without depending on paper-only resources.",
      "The program reflected AIMCORP’s emphasis on practical, equitable access to education technology.",
    ],
    image: "/images/classroom.jpg",
    legacySlugs: ["digital-slate-outreach"],
  },
  {
    slug: "computer-drive",
    title: "AIMCORP Computer Drive",
    year: "2021",
    category: "fundraiser",
    summary:
      "Collecting and distributing computers for students who lacked devices at home.",
    paragraphs: [
      "The AIMCORP Computer Drive rallied community donations of hardware and funds to place computers with scholars who needed them for school.",
      "Volunteers coordinated intake, refurbishment where possible, and delivery to families identified through AIMCORP programs.",
    ],
    image: "/images/bidadi-group.jpg",
    legacySlugs: ["aimcorp-computer-drive", "about-computer-drive", "computer-drive-scholar-application"],
  },
  {
    slug: "volleyball-cancer-fundraiser",
    title: "Volleyball Cancer Fundraiser",
    year: "2021",
    category: "fundraiser",
    summary:
      "Community volleyball event raising funds for cancer-related causes.",
    paragraphs: [
      "AIMCORP volunteers organized a volleyball fundraiser that brought together families and supporters to contribute to cancer relief efforts.",
      "Events like this helped the organization combine community building with philanthropy beyond the classroom.",
    ],
    image: "/images/classroom-wide.jpg",
    legacySlugs: ["volleyball-cancer-fundraiser"],
  },
  {
    slug: "coaching-donation",
    title: "Coaching Donation",
    year: "2020",
    category: "fundraiser",
    summary:
      "Supporter donations that sustained coaching programs and relief efforts.",
    paragraphs: [
      "Community donations through PayPal and Venmo helped fund AIMCORP coaching initiatives and related outreach.",
      "You can still support the movement today on our donate page.",
    ],
    image: "/images/venmo-qr.png",
    href: "/donate",
    legacySlugs: ["coaching-donation"],
  },
];

export function programHref(program: Program): string {
  return program.href ?? `/philanthropy/${program.slug}`;
}

/** Every program appears under Philanthropy nav (display order). */
export const philanthropyNavSlugs = [
  "winter-2022",
  "winter-2021",
  "fall-2021",
  "summer-2020",
  "spring-math-2020",
  "bidadi-outreach",
  "vijetha-outreach",
  "coaching-donation",
  "volleyball-cancer-fundraiser",
  "digital-slate-outreach",
  "computer-drive",
  "educational-tablet-outreach",
] as const;

export function philanthropyNavItems() {
  const ordered = philanthropyNavSlugs.map((slug) => {
    const program = programs.find((p) => p.slug === slug);
    if (!program) throw new Error(`Unknown philanthropy nav slug: ${slug}`);
    return { href: programHref(program), label: program.title };
  });
  const missing = programs.filter(
    (p) => !philanthropyNavSlugs.includes(p.slug as (typeof philanthropyNavSlugs)[number]),
  );
  if (missing.length > 0) {
    throw new Error(
      `Programs missing from philanthropy nav: ${missing.map((p) => p.slug).join(", ")}`,
    );
  }
  return ordered;
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(
    (p) => p.slug === slug || p.legacySlugs?.includes(slug),
  );
}

export function programsByCategory(category: ProgramCategory): Program[] {
  return programs.filter((p) => p.category === category);
}
