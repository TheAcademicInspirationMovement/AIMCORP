import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Philanthropy",
    body: "Community-based initiatives worldwide centered around education and empowerment.",
  },
  {
    title: "Innovation",
    body: "Fostering social-impact startup projects and initiatives that emphasize innovation.",
  },
  {
    title: "Education",
    body: "Improving educational outcomes for STEM, valuing diversity, equity, and inclusion.",
  },
];

const stories = [
  {
    href: "/impact/bidadi",
    image: "/images/classroom.jpg",
    title: "Bidadi Primary School",
    body: "STEM enrichment and school supplies for students in Karnataka, India.",
  },
  {
    href: "/impact/vijetha",
    image: "/images/vijetha.jpg",
    title: "Vijetha Special School",
    body: "Fundraising, awareness, and on-the-ground partnership with a residential school.",
  },
  {
    href: "/stories/womens-health",
    image: "/images/vijetha-students.jpg",
    title: "Women’s health literacy",
    body: "A community toolkit to expand access to healthcare information.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <Image
          src="/images/classroom.jpg"
          alt="Students in a classroom during an AIMCORP outreach visit"
          fill
          priority
          className="object-cover object-[center_28%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 text-white">
          <p className="text-xs font-semibold tracking-[0.24em] text-white/70 uppercase">
            Applied Innovation Movement
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">
            Catalyzing impactful change through innovation
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">
            Making a difference through social-impact innovation, and
            prioritization of diversity, equity, and inclusion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/donate"
              className="rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay-dark"
            >
              Donate to AIMCORP
            </Link>
            <Link
              href="/impact"
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              See our impact
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-clay uppercase">
          Our work
        </p>
        <h2 className="font-display mt-2 max-w-2xl text-3xl sm:text-4xl">
          Education, philanthropy, and innovation in the same movement
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-line bg-paper p-6 shadow-[0_10px_30px_rgba(19,35,59,0.04)]"
            >
              <h3 className="font-display text-2xl">{pillar.title}</h3>
              <p className="mt-3 leading-7 text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-cream/60 uppercase">
              501(c)(3) nonprofit
            </p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              Want to help support the movement?
            </h2>
            <p className="mt-4 leading-7 text-cream/80">
              AIMCORP is supported in part by the community. Any contribution is
              tax deductible and goes toward building a brighter tomorrow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay-dark"
              >
                Donate
              </Link>
              <Link
                href="/join"
                className="rounded-full border border-cream/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
              >
                Volunteer
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/supplies.jpg"
              alt="Students receiving school supplies during an AIMCORP visit"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-clay uppercase">
              Stories
            </p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl">
              Places the work has already begun
            </h2>
          </div>
          <Link href="/impact" className="text-sm font-semibold text-blue hover:text-clay">
            All impact stories →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.href}
              href={story.href}
              className="group overflow-hidden rounded-2xl border border-line bg-paper"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={story.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{story.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{story.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
