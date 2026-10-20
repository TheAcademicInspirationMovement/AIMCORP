import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  programCategories,
  programs,
  programHref,
  programsByCategory,
  type ProgramCategory,
} from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs",
  description: "Historical AIMCORP philanthropy programs, outreach, and fundraisers.",
};

const categoryOrder: ProgramCategory[] = ["seasonal", "outreach", "fundraiser"];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Philanthropy"
        title="Our programs"
        lede="A record of seasonal courses, school outreach, and community fundraisers from across AIMCORP’s history."
        image="/images/classroom.jpg"
        imageAlt="Students during an AIMCORP program"
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        {categoryOrder.map((category) => {
          const items = programsByCategory(category);
          const meta = programCategories[category];
          return (
            <div key={category} className="mb-14 last:mb-0">
              <h2 className="font-display text-3xl">{meta.label}</h2>
              <p className="mt-2 max-w-2xl text-muted">{meta.description}</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {items.map((program) => (
                  <li key={program.slug}>
                    <Link
                      href={programHref(program)}
                      className="group flex gap-4 rounded-2xl border border-line bg-paper p-4 hover:border-clay/40"
                    >
                      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={program.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold tracking-wide text-clay uppercase">
                          {program.year}
                        </p>
                        <h3 className="font-display mt-1 text-lg leading-snug group-hover:text-clay">
                          {program.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm leading-5 text-muted">
                          {program.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <p className="mt-12 text-sm text-muted">
          Looking for current ways to help? See{" "}
          <Link href="/impact" className="font-semibold text-blue">featured impact</Link> or{" "}
          <Link href="/donate" className="font-semibold text-blue">donate</Link>.
        </p>
      </section>
    </>
  );
}
