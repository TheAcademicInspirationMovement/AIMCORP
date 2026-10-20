import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Women’s health literacy",
};

const topics = [
  "HPV vaccination and cancer prevention",
  "Cervical and breast cancer screening",
  "Maternal health and postpartum mental health",
  "Menstrual and reproductive health",
  "Menopause and midlife health",
  "Communication guides for parents, teachers, clinicians, and caregivers",
];

export default function WomensHealthPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation"
        title="Talking women’s health with AIMCORP"
        lede="One of AIMCORP’s missions is expanding access to healthcare literacy, particularly for women’s health."
        image="/images/classroom-wide.jpg"
        imageAlt="Students during an AIMCORP program"
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-lg leading-8">
          AIMCORP has organized community impact initiatives to empower,
          educate, and promote literacy in youth worldwide, and to accelerate
          social-impact startup work. This page is a short introduction to the
          women’s health literacy toolkit published on the previous site.
        </p>
        <p className="mt-5 rounded-xl border border-line bg-paper px-4 py-3 text-sm leading-6 text-muted">
          This is guidance, not diagnostic criteria. Always consult a healthcare
          provider with any concerns.
        </p>
        <h2 className="font-display mt-10 text-3xl">Toolkit topics</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-muted">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
        <p className="mt-8 leading-7 text-muted">
          The original WordPress article is a long research-backed guide. We
          kept the framing and topics here, not the full medical text, so the
          new site stays maintainable. We can restore a fuller version later if
          you want it edited as a living resource.
        </p>
      </section>
    </>
  );
}
