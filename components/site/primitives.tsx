import Link from "next/link";
import type { ReactNode } from "react";

/** Inner measure for page content, inside the page canvas gutters. */
export function Container({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`w-full px-5 sm:px-8 lg:px-14 ${className}`}>
      {children}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "quiet";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.9375rem] font-semibold tracking-[-0.01em] transition-colors duration-200";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-fg text-[#101620] hover:bg-white",
  secondary:
    "border border-edge-strong text-fg hover:border-fg/55 hover:bg-white/5",
  quiet: "text-accent hover:text-fg",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/**
 * Image slot. Plain <img> on purpose: the art files in /public/art are meant
 * to be swapped for approved assets by changing a single path in /lib/content.
 */
export function Art({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

/** A visible editorial placeholder, used where approved copy is missing. */
export function ContentPlaceholder({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`rounded-xl border border-dashed border-edge-strong bg-white/[0.02] px-4 py-3 text-[0.9375rem] leading-relaxed text-fg-muted ${className}`}
    >
      <span className="mr-2 align-middle text-[0.6875rem] font-semibold tracking-[0.16em] text-accent uppercase">
        Pending
      </span>
      {children}
    </p>
  );
}

/** Compact inline variant for cards, where a dashed box would be too heavy. */
export function InlinePlaceholder({ children }: { children: ReactNode }) {
  return (
    <span className="text-fg-muted/85 italic">{children}</span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-accent uppercase">
      {children}
    </p>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
    >
      <path
        d="M4.5 10h11M11 5.5 15.5 10 11 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
