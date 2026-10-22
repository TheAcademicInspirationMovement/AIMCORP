import Link from "next/link";
import { CapabilityIcon } from "@/components/site/CapabilityIcon";
import { InitiativeCard } from "@/components/site/InitiativeCard";
import {
  ArrowIcon,
  Art,
  ButtonLink,
  Container,
  Eyebrow,
} from "@/components/site/primitives";
import { home } from "@/lib/content/home";
import { initiatives } from "@/lib/content/initiatives";
import { featuredCollaborationAreas } from "@/lib/content/services";

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero ------------------------------------------------------- */}
      <Container className="pt-2 pb-6 sm:pb-10">
        <section className="relative isolate flex min-h-[520px] overflow-hidden rounded-[1.75rem] sm:min-h-[600px] sm:rounded-[2rem] lg:min-h-[640px]">
          <div className="absolute inset-0 -z-10">
            <Art
              src={home.hero.art.src}
              alt={home.hero.art.alt}
              priority
            />
          </div>
          <div
            className="absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(105deg, rgba(9,13,19,0.9) 0%, rgba(9,13,19,0.7) 40%, rgba(9,13,19,0.22) 100%)",
            }}
          />

          <div className="flex w-full flex-col justify-end gap-7 p-7 sm:p-12 lg:p-16">
            <div className="max-w-[46rem]">
              <h1 className="text-[clamp(2.1rem,5.6vw,4.25rem)] leading-[1.04] font-extrabold tracking-[-0.035em] text-balance text-fg">
                {home.hero.headline}
              </h1>
              <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-fg-muted sm:text-[1.0625rem]">
                {home.hero.supporting}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href={home.hero.primaryCta.href}>
                {home.hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={home.hero.secondaryCta.href} variant="secondary">
                {home.hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </section>
      </Container>

      {/* 2 — Organisational explanation + capability panels -------------- */}
      <Container className="reveal py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="lg:pt-2">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.12] font-bold tracking-[-0.03em] text-balance text-fg">
              {home.explanation.heading}
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-fg-muted">
              {home.explanation.body}
            </p>
          </div>

          <ul className="flex flex-col gap-3.5">
            {home.explanation.capabilities.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-[1.25rem] border border-edge bg-panel p-5 transition-colors duration-300 hover:border-edge-strong sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <CapabilityIcon name={item.icon} />
                </span>
                <div>
                  <h3 className="text-[1.0625rem] font-bold tracking-[-0.01em] text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* 3 — Current initiatives ----------------------------------------- */}
      <Container className="reveal scroll-mt-8" id="initiatives">
        <section className="rounded-[1.75rem] bg-panel p-6 sm:rounded-[2rem] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <h2 className="text-[clamp(1.6rem,2.8vw,2.125rem)] font-bold tracking-[-0.03em] text-fg">
              {home.initiatives.heading}
            </h2>
            <p className="max-w-[38ch] text-[0.9375rem] leading-relaxed text-fg-muted sm:text-right">
              {home.initiatives.supporting}
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {initiatives.map((initiative) => (
              <li key={initiative.slug} className="flex">
                <InitiativeCard initiative={initiative} />
              </li>
            ))}
          </ul>
        </section>
      </Container>

      {/* 4 — Collaboration / services ------------------------------------ */}
      <Container className="reveal py-16 sm:py-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col justify-between gap-10 rounded-[1.5rem] border border-edge bg-panel p-7 sm:p-9">
            <div>
              <Eyebrow>Collaboration</Eyebrow>
              <h2 className="mt-4 text-[clamp(1.6rem,2.8vw,2.125rem)] leading-[1.14] font-bold tracking-[-0.03em] text-balance text-fg">
                {home.collaboration.heading}
              </h2>
              <p className="mt-4 max-w-[42ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                {home.collaboration.body}
              </p>
            </div>
            <ButtonLink
              href={home.collaboration.cta.href}
              variant="secondary"
              className="w-fit"
            >
              {home.collaboration.cta.label}
              <ArrowIcon />
            </ButtonLink>
          </div>

          {featuredCollaborationAreas.map((area) => (
            <Link
              key={area.title}
              href="/services"
              className="group relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.5rem] border border-edge p-6 transition-colors duration-300 hover:border-edge-strong"
            >
              <div className="absolute inset-0 -z-10">
                {/* Decorative inside a link: the card is titled below. */}
                <Art
                  src={area.art!.src}
                  alt=""
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div
                className="absolute inset-0 -z-10"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to top, rgba(9,13,19,0.9) 10%, rgba(9,13,19,0.25) 70%)",
                }}
              />
              <h3 className="text-[1.0625rem] leading-snug font-bold tracking-[-0.01em] text-balance text-fg">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {area.body}
              </p>
            </Link>
          ))}
        </div>
      </Container>

      {/* 5 — Closing invitation ------------------------------------------ */}
      <Container className="reveal">
        <section className="flex flex-col items-center gap-6 rounded-[1.75rem] border border-edge px-6 py-20 text-center sm:rounded-[2rem] sm:py-28">
          <h2 className="max-w-[20ch] text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] font-bold tracking-[-0.03em] text-balance text-fg">
            {home.closing.heading}
          </h2>
          <p className="max-w-[48ch] text-[1.0625rem] leading-relaxed text-fg-muted">
            {home.closing.body}
          </p>
          <ButtonLink href={home.closing.cta.href} className="mt-2">
            {home.closing.cta.label}
          </ButtonLink>
        </section>
      </Container>
    </>
  );
}
