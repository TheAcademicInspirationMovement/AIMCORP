import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bidadi Primary School Outreach",
};

export default function BidadiPage() {
  return (
    <>
      <PageHero
        eyebrow="Karnataka, India"
        title="Bidadi Primary School STEM outreach"
        image="/images/classroom.jpg"
        imageAlt="Students at Bidadi Primary School during an AIMCORP visit"
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-lg leading-8">
          The AIM team visited a primary school in Bidadi, Karnataka, India,
          where we were able to conduct a STEM enrichment outreach, as well as
          provide each student with a set of school utensils for their daily
          academic use.
        </p>
        <p className="mt-5 leading-8 text-muted">
          It made us very happy to be able to make such a big difference in the
          lives of so many deserving young children.
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 sm:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/classroom-wide.jpg"
            alt="Classroom of students sitting on the floor"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/supplies.jpg"
            alt="Students with school supplies"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl sm:col-span-2">
          <Image
            src="/images/bidadi-group.jpg"
            alt="Group photo from the Bidadi outreach visit"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
      </section>
    </>
  );
}
