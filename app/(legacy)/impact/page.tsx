import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Impact",
};

const programs = [
  {
    href: "/impact/bidadi",
    image: "/images/classroom.jpg",
    title: "Bidadi Primary School Outreach",
    location: "Karnataka, India",
    body: "STEM enrichment visits and school utensils for daily academic use.",
  },
  {
    href: "/impact/vijetha",
    image: "/images/vijetha-2.jpg",
    title: "Vijetha Special School Outreach",
    location: "Karnataka, India",
    body: "Fundraising, awareness, and support for a residential school for specially abled children.",
  },
  {
    href: "/stories/womens-health",
    image: "/images/vijetha-students.jpg",
    title: "Women’s Health Literacy",
    location: "Community toolkit",
    body: "Expanding access to healthcare information with a research-backed overview for families and educators.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Philanthropy"
        title="Programs that put education in reach"
        lede="AIMCORP’s first chapter was hands-on outreach: classrooms, supplies, and partnership with schools that needed both resources and advocates."
        image="/images/supplies.jpg"
        imageAlt="Children holding school supplies after an AIMCORP outreach visit"
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8">
          {programs.map((program) => (
            <Link
              key={program.href}
              href={program.href}
              className="group grid overflow-hidden rounded-2xl border border-line bg-paper md:grid-cols-[280px_1fr]"
            >
              <div className="relative min-h-[200px]">
                <Image
                  src={program.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="280px"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-clay uppercase">
                  {program.location}
                </p>
                <h2 className="font-display mt-2 text-2xl sm:text-3xl">
                  {program.title}
                </h2>
                <p className="mt-3 max-w-xl leading-7 text-muted">{program.body}</p>
                <p className="mt-4 text-sm font-semibold text-blue">Read the story →</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-6 text-muted">
          Browse the full archive of seasonal programs, outreach, and fundraisers
          on the{" "}
          <Link href="/philanthropy" className="font-semibold text-blue">
            philanthropy archive
          </Link>
          .
        </p>
      </section>
    </>
  );
}
