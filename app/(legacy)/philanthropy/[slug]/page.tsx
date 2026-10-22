import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ProgramDetail } from "@/components/ProgramDetail";
import { getProgramBySlug, programs, programHref } from "@/lib/programs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programs
    .filter((p) => !p.href)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Program" };
  return {
    title: program.title,
    description: program.summary,
  };
}

export default async function PhilanthropyProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();
  if (program.href) redirect(program.href);

  return <ProgramDetail program={program} />;
}
