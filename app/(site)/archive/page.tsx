import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowIcon,
  Container,
  ContentPlaceholder,
  Eyebrow,
} from "@/components/site/primitives";
import { archiveEntries } from "@/lib/content/archive";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Older AIMCORP pages that are still published, kept here for reference.",
};

export default function ArchivePage() {
  return (
    <Container className="pt-6 pb-20 sm:pt-10 sm:pb-28">
      <section className="max-w-[46rem]">
        <Eyebrow>Archive</Eyebrow>
        <h1 className="mt-4 text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.07] font-extrabold tracking-[-0.035em] text-balance text-fg">
          Archive
        </h1>
        <p className="mt-6 text-[1.0625rem] leading-relaxed text-fg-muted">
          Older pages from previous versions of this site. They are kept online
          for reference and are not maintained.
        </p>
      </section>

      {archiveEntries.length > 0 ? (
        <ul className="reveal mt-12 flex flex-col gap-2">
          {archiveEntries.map((entry) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                className="group flex items-start justify-between gap-5 rounded-[1.25rem] border border-edge bg-surface-2 p-5 transition-colors duration-300 hover:border-edge-strong sm:p-6"
              >
                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-semibold text-fg">{entry.title}</span>
                    {entry.date ? (
                      <span className="text-xs tracking-[0.1em] text-fg-muted/70 uppercase">
                        {entry.date}
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-fg-muted">
                    {entry.description}
                  </span>
                </span>
                <ArrowIcon className="mt-1 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-12 max-w-[52ch]">
          <ContentPlaceholder>
            There is nothing in the archive yet. Older pages will be listed here
            once they are added.
          </ContentPlaceholder>
        </div>
      )}
    </Container>
  );
}
