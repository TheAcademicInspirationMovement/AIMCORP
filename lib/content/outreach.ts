import { programCategories, programHref, programs } from "@/lib/programs";
import type { ProgramCategory } from "@/lib/programs";

/**
 * ---------------------------------------------------------------------------
 * OUTREACH
 * ---------------------------------------------------------------------------
 * A history page. Everything listed here comes from the existing program
 * records in lib/programs.ts and the photographs already in /public/images —
 * no activity, outcome or figure is written from anywhere else.
 * ---------------------------------------------------------------------------
 */

export const outreach = {
  heading: "Outreach",
  lede: "Working directly with students, schools and communities.",

  history: [
    "AIMCORP began as The Academic Inspiration Movement, a volunteer effort to get educational resources and technology to students who did not have them. Between 2019 and 2024 that took two forms: teaching, and equipping.",
    "The teaching was seasonal. Free, interactive courses for students of all ages ran over summer, fall, winter and spring, held virtually in group classes over Google Meet, taught by volunteers. The equipping was physical. Computers, tablets and digital slates were collected and distributed to students without devices at home, and school supplies and STEM enrichment went to partner schools in Karnataka, India — Bidadi Primary School and Vijetha Special School.",
    "Fundraising ran alongside both: a computer drive, a community volleyball event, and donations that sustained the coaching programs and COVID-19 relief.",
    "We are still engaging with schools, and this work shapes what AIMCORP builds now.",
  ],

  /** Real photographs from the programs above. */
  gallery: [
    {
      src: "/images/bidadi-group.jpg",
      alt: "Students and volunteers gathered together at Bidadi Primary School",
    },
    {
      src: "/images/vijetha-students.jpg",
      alt: "Students at Vijetha Special School",
    },
    {
      src: "/images/classroom.jpg",
      alt: "A classroom during a school outreach visit",
    },
    {
      src: "/images/supplies.jpg",
      alt: "School supplies and devices gathered for distribution",
    },
  ],

  /** Order the categories appear in on the page. */
  categoryOrder: ["outreach", "seasonal", "fundraiser"] as ProgramCategory[],

  closing:
    "Pages documenting earlier seasons are kept online for reference.",
};

export type OutreachGroup = {
  category: ProgramCategory;
  label: string;
  description: string;
  entries: {
    title: string;
    year: string;
    summary: string;
    href: string;
    image: string;
  }[];
};

export function outreachGroups(): OutreachGroup[] {
  return outreach.categoryOrder.map((category) => ({
    category,
    label: programCategories[category].label,
    description: programCategories[category].description,
    entries: programs
      .filter((program) => program.category === category)
      .map((program) => ({
        title: program.title,
        year: program.year,
        summary: program.summary,
        href: programHref(program),
        image: program.image,
      })),
  }));
}
