import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import type { Program } from "@/lib/programs";

type ProgramDetailProps = {
  program: Program;
};

export function ProgramDetail({ program }: ProgramDetailProps) {
  const isExternalPath = Boolean(program.href);

  return (
    <>
      <PageHero
        eyebrow={`${program.year} · Philanthropy`}
        title={program.title}
        lede={program.summary}
        image={program.image}
        imageAlt=""
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        {program.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-5 first:mt-0 leading-8 text-ink/90">
            {paragraph}
          </p>
        ))}
        {program.slug === "coaching-donation" ? (
          <Link
            href="/donate"
            className="mt-8 inline-flex rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay-dark"
          >
            Donate today
          </Link>
        ) : null}
        <p className="mt-10 text-sm text-muted">
          <Link href="/philanthropy" className="font-semibold text-blue hover:text-clay">
            ← Philanthropy programs
          </Link>
        </p>
        {isExternalPath && program.href !== "/donate" ? (
          <p className="mt-2 text-sm text-muted">
            This story has a dedicated photo gallery at{" "}
            <Link href={program.href!} className="font-semibold text-blue">
              {program.href}
            </Link>
            .
          </p>
        ) : null}
      </section>
    </>
  );
}
