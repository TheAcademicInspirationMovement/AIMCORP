/**
 * AIMCorp wordmark. The mark is drawn in `currentColor` so it stays legible
 * on the dark canvas; swap in an approved SVG asset here if one is supplied.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
      >
        <path
          d="M42.79 17.16A20 20 0 1 1 30.84 5.21"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M35.28 19.9A12 12 0 1 1 28.1 12.72"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M24 24 36.5 8"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="4.6" fill="currentColor" />
      </svg>
      <span className="text-[1.0625rem] font-extrabold tracking-[0.02em]">
        AIMCORP
      </span>
    </span>
  );
}
