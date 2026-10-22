import Link from "next/link";
import type { Initiative } from "@/lib/content/initiatives";
import { initiativePlaceholders } from "@/lib/content/initiatives";
import { ArrowIcon, Art, InlinePlaceholder } from "./primitives";

export function InitiativeCard({ initiative }: { initiative: Initiative }) {
  return (
    <Link
      href={initiative.href}
      className="group flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-edge bg-surface-2 transition-colors duration-300 hover:border-edge-strong"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Decorative inside a link: the card already names the initiative. */}
        <Art
          src={initiative.art.src}
          alt=""
          className="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Controlled overlay keeps any future photography readable. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,14,20,0.72), rgba(10,14,20,0.08) 55%)",
          }}
        />
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5"
          style={{ backgroundColor: initiative.accent, opacity: 0.5 }}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-[1.0625rem] font-bold tracking-[-0.01em] text-fg">
          {initiative.name}
        </h3>
        <p className="text-sm leading-relaxed text-fg-muted">
          {initiative.cardSummary ?? (
            <InlinePlaceholder>{initiativePlaceholders.card}</InlinePlaceholder>
          )}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-accent">
          Explore
          <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
