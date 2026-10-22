import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join us",
};

const roles = [
  {
    title: "Grant writer",
    body: "Strong writing and communication skills. Previous grant writing or nonprofit administration experience is preferred but not required. Send a cover letter and resume through the contact page.",
  },
  {
    title: "Business administration intern",
    body: "Part-time volunteer internship for high school or college students. Work includes grant writing, project management, foundational research, and administrative upkeep. Applicants submit a resume, a letter of intent, and optionally a writing sample.",
  },
  {
    title: "Community volunteer",
    body: "Help with outreach, events, and communications. Tell us how you would like to contribute and we will follow up.",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Join the movement"
        lede="AIMCORP is volunteer-powered. Write, organize, fundraise, or bring a skill we have not thought to ask for yet."
        image="/images/classroom-wide.jpg"
        imageAlt="Students in class during an AIMCORP visit"
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <article key={role.title} className="rounded-2xl border border-line bg-paper p-6">
              <h2 className="font-display text-2xl">{role.title}</h2>
              <p className="mt-3 leading-7 text-muted">{role.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-navy px-6 py-10 text-cream sm:px-10">
          <h2 className="font-display text-3xl">How to apply</h2>
          <p className="mt-3 max-w-2xl leading-7 text-cream/80">
            Email a resume and a short note about the role you want to{" "}
            <a className="underline" href={`mailto:${site.contactEmail}`}>
              {site.contactEmail}
            </a>
            , or use the contact form.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay-dark"
            >
              Contact us
            </Link>
            <Link
              href="/donate"
              className="rounded-full border border-cream/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
            >
              Support financially
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
