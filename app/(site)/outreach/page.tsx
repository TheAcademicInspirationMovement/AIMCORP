import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowIcon,
  Art,
  Container,
  Eyebrow,
} from "@/components/site/primitives";
import { outreach, outreachGroups } from "@/lib/content/outreach";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "The programs AIMCORP ran between 2020 and 2022: free virtual courses, school outreach, and device drives.",
};

export default function OutreachPage() {
  const groups = outreachGroups();

  return (
    <>
      {/* Hero ------------------------------------------------------------ */}
      <Container className="pt-2 pb-6 sm:pb-10">
        <section className="relative isolate flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[1.75rem] p-7 sm:min-h-[420px] sm:rounded-[2rem] sm:p-12">
          <div className="absolute inset-0 -z-10">
            <Art src="/images/bidadi-group.jpg" alt="" priority />
          </div>
          <div
            className="absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(100deg, rgba(9,13,19,0.92) 0%, rgba(9,13,19,0.78) 45%, rgba(9,13,19,0.5) 100%)",
            }}
          />
          <Eyebrow>History</Eyebrow>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.06] font-extrabold tracking-[-0.035em] text-fg">
            {outreach.heading}
          </h1>
          <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-fg-muted">
            {outreach.lede}
          </p>
        </section>
      </Container>

      <Container className="pb-16 sm:pb-24">
        {/* What it was -------------------------------------------------- */}
        <section className="reveal">
          <div className="flex max-w-[62ch] flex-col gap-4">
            {outreach.history.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[1.0625rem] leading-relaxed text-fg-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Photographs --------------------------------------------------- */}
        <section className="reveal mt-14">
          <ul className="grid gap-4 sm:grid-cols-2">
            {outreach.gallery.map((photo) => (
              <li
                key={photo.src}
                className="overflow-hidden rounded-[1.25rem] border border-edge"
              >
                <div className="aspect-[4/3] w-full">
                  <Art src={photo.src} alt={photo.alt} />
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* The programs -------------------------------------------------- */}
        <div className="mt-16 flex flex-col gap-12 sm:mt-20">
          {groups.map((group) => (
            <section key={group.category} className="reveal border-t border-edge pt-8">
              <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-fg">
                {group.label}
              </h2>
              <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                {group.description}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.entries.map((entry) => (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      className="group flex h-full items-start justify-between gap-4 rounded-[1.25rem] border border-edge bg-surface-2 p-5 transition-colors duration-300 hover:border-edge-strong"
                    >
                      <span>
                        <span className="flex flex-wrap items-baseline gap-x-3">
                          <span className="font-semibold text-fg">
                            {entry.title}
                          </span>
                          <span className="text-xs tracking-[0.1em] text-fg-muted/70 uppercase">
                            {entry.year}
                          </span>
                        </span>
                        <span className="mt-1.5 block text-sm leading-relaxed text-fg-muted">
                          {entry.summary}
                        </span>
                      </span>
                      <ArrowIcon className="mt-1 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Archive ------------------------------------------------------- */}
        <section className="reveal mt-16 flex flex-col items-start gap-5 rounded-[1.5rem] bg-panel p-7 sm:mt-20 sm:p-10">
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] font-bold tracking-[-0.03em] text-fg">
            The archive
          </h2>
          <p className="max-w-[56ch] text-[0.9375rem] leading-relaxed text-fg-muted">
            {outreach.closing}
          </p>
          <Link
            href="/archive"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-200 hover:text-fg"
          >
            Browse the archive
            <ArrowIcon />
          </Link>
        </section>
      </Container>
    </>
  );
}
