import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Empowering innovation, amplifying impact"
        lede="AIMCORP began with educational resources and technology for under-resourced students and communities. We are building on that philanthropic heritage."
        image="/images/classroom-wide.jpg"
        imageAlt="Students seated together during an AIMCORP classroom visit"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <div className="prose-like max-w-2xl">
          <p className="text-lg leading-8 text-ink/90">
            At AIMCORP (Applied Innovation Movement), we are driven by the belief
            that innovation is the cornerstone of social change. Our journey
            began with the seeds of philanthropy—educational resources and
            technology for underprivileged students and communities around the
            globe.
          </p>
          <p className="mt-5 leading-8 text-muted">
            As a 501(c)(3) nonprofit, we have kindled the flames of knowledge and
            opened doors of opportunity for those in need. Today, we seek to
            amplify our impact at the intersection of innovation and high-impact
            philanthropy as a dynamic startup innovation engine.
          </p>
          <h2 className="font-display mt-10 text-3xl">Innovation for the greater good</h2>
          <p className="mt-4 leading-8 text-muted">
            We are building an inclusive space that cultivates innovators. We
            hope to build transformative solutions, and cultivate tomorrow’s
            change makers.
          </p>
          <h2 className="font-display mt-10 text-3xl">Join the movement</h2>
          <p className="mt-4 leading-8 text-muted">
            We invite you to be part of this journey. Together, we can turn the
            gears of change and create a legacy of lasting impact.
          </p>
          <Link
            href="/join"
            className="mt-6 inline-flex rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay-dark"
          >
            Get involved
          </Link>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-paper p-6">
          <div className="relative mb-5 aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/bidadi-group.jpg"
              alt="Bidadi Primary School outreach visit"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
          <p className="text-xs font-semibold tracking-[0.18em] text-clay uppercase">
            At a glance
          </p>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
            <li>501(c)(3) nonprofit</li>
            <li>STEM outreach in Karnataka, India</li>
            <li>Community programs and literacy initiatives</li>
            <li>Social-impact innovation projects</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
