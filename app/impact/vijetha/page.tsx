import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Vijetha Special School Outreach",
};

export default function VijethaPage() {
  return (
    <>
      <PageHero
        eyebrow="Karnataka, India"
        title="Vijetha Special School outreach, fundraising, and awareness"
        image="/images/vijetha.jpg"
        imageAlt="Exterior of Vijetha Special School"
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-lg leading-8">
          Vijetha Special School is a residential education center for specially
          abled children in Karnataka, India. AIM partnered with the Triangle
          Tuluvere Chavadi of Raleigh, NC, to accumulate funds and raise
          awareness for this cause.
        </p>
        <p className="mt-5 leading-8 text-muted">
          We visited the school and were able to see firsthand the amazing,
          tireless work that the Vijetha staff puts forth toward the betterment
          of these children’s lives. The team also helped staff adopt Google
          products as part of the outreach.
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src="/images/vijetha-2.jpg"
            alt="Vijetha Special School campus"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src="/images/vijetha-students.jpg"
            alt="Students at Vijetha Special School"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </section>
    </>
  );
}
