import type { Metadata } from "next";
import type { Initiative } from "@/lib/content/initiatives";
import { initiativePlaceholders } from "@/lib/content/initiatives";
import {
  ArrowIcon,
  Art,
  ButtonLink,
  Container,
  ContentPlaceholder,
  Eyebrow,
} from "./primitives";

/**
 * Reusable shell for every initiative page.
 *
 * Sections with approved copy render normally; sections still awaiting copy
 * render a visible editorial placeholder. Genuinely optional slots — the
 * project image and the resources list — are hidden entirely when empty
 * rather than padded with invented material.
 */

export function initiativeMetadata(initiative: Initiative): Metadata {
  return {
    title: initiative.name,
    description:
      initiative.purpose ??
      `${initiative.name} is an AIMCORP initiative. Published details are pending approval.`,
  };
}

function Section({
  heading,
  paragraphs,
  placeholder,
}: {
  heading: string;
  paragraphs: string[] | null;
  placeholder: string;
}) {
  return (
    <section className="reveal border-t border-edge pt-8">
      <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-fg">
        {heading}
      </h2>
      <div className="mt-4 max-w-[62ch]">
        {paragraphs && paragraphs.length > 0 ? (
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[1.0625rem] leading-relaxed text-fg-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <ContentPlaceholder>{placeholder}</ContentPlaceholder>
        )}
      </div>
    </section>
  );
}

export function InitiativePage({ initiative }: { initiative: Initiative }) {
  const hasResources = initiative.resources.length > 0;

  return (
    <>
      <Container className="pt-2 pb-6 sm:pb-10">
        <section className="relative isolate flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[1.75rem] p-7 sm:min-h-[420px] sm:rounded-[2rem] sm:p-12">
          <div className="absolute inset-0 -z-10">
            <Art
              src={initiative.art.src}
              alt={initiative.art.alt}
              priority
            />
          </div>
          <div
            className="absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(100deg, rgba(9,13,19,0.9) 0%, rgba(9,13,19,0.72) 45%, rgba(9,13,19,0.4) 100%)",
            }}
          />
          <Eyebrow>Initiative</Eyebrow>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.06] font-extrabold tracking-[-0.035em] text-fg">
            {initiative.name}
          </h1>
          {/* Optional stage note — hidden when the initiative has none. */}
          {initiative.status ? (
            <p className="mt-4 w-fit rounded-full border border-edge-strong px-3.5 py-1.5 text-[0.8125rem] font-medium text-fg-muted">
              {initiative.status}
            </p>
          ) : null}
          <div className="mt-5 max-w-[52ch]">
            {initiative.purpose ? (
              <p className="text-[1.0625rem] leading-relaxed text-fg-muted">
                {initiative.purpose}
              </p>
            ) : (
              <ContentPlaceholder>
                {initiativePlaceholders.purpose}
              </ContentPlaceholder>
            )}
          </div>
        </section>
      </Container>

      <Container className="pb-16 sm:pb-24">
        {/* Optional project image — hidden until an approved asset exists. */}
        {initiative.image ? (
          <div className="reveal mb-14 overflow-hidden rounded-[1.5rem] border border-edge">
            <div className="aspect-[16/9] w-full">
              <Art src={initiative.image.src} alt={initiative.image.alt} />
            </div>
          </div>
        ) : null}

        <div className="flex flex-col gap-12">
          <Section
            heading="The challenge"
            paragraphs={initiative.challenge}
            placeholder={initiativePlaceholders.challenge}
          />
          <Section
            heading="What we’re building"
            paragraphs={initiative.building}
            placeholder={initiativePlaceholders.building}
          />
          <Section
            heading="Intended audience"
            paragraphs={initiative.audience}
            placeholder={initiativePlaceholders.audience}
          />

          {/* Optional — hidden entirely when no real links are supplied. */}
          {hasResources ? (
            <section className="reveal border-t border-edge pt-8">
              <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-fg">
                Resources and updates
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {initiative.resources.map((resource) => (
                  <li key={resource.href}>
                    <a
                      href={resource.href}
                      className="group flex items-start justify-between gap-4 rounded-[1.25rem] border border-edge bg-surface-2 p-5 transition-colors duration-300 hover:border-edge-strong"
                    >
                      <span>
                        <span className="block font-semibold text-fg">
                          {resource.label}
                        </span>
                        {resource.description ? (
                          <span className="mt-1 block text-sm leading-relaxed text-fg-muted">
                            {resource.description}
                          </span>
                        ) : null}
                      </span>
                      <ArrowIcon className="mt-1 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <section className="reveal mt-16 flex flex-col items-start gap-5 rounded-[1.5rem] bg-panel p-7 sm:mt-20 sm:p-10">
          <h2 className="max-w-[22ch] text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] font-bold tracking-[-0.03em] text-balance text-fg">
            Working on something related?
          </h2>
          <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-fg-muted">
            We collaborate with mission-driven organizations on public-interest
            technology.
          </p>
          <ButtonLink href="/services">Collaborate with us</ButtonLink>
        </section>
      </Container>
    </>
  );
}
