import Image from "next/image";

/** AIMCORP wordmark: the supplied mark plus the type. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/images/aimcorp-mark.png"
        alt=""
        width={883}
        height={918}
        className="h-7 w-auto shrink-0"
        priority
      />
      <span className="text-[1.0625rem] font-extrabold tracking-[0.02em]">
        AIMCORP
      </span>
    </span>
  );
}
