import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">AIMCORP</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-cream/75">
            {site.legalName} is a 501(c)(3) nonprofit. Contributions are tax
            deductible to the extent allowed by law.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-cream/50 uppercase">
            Explore
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-cream/85 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/philanthropy" className="text-sm text-cream/85 hover:text-white">
              Philanthropy
            </Link>
            <Link href="/donate" className="text-sm text-cream/85 hover:text-white">
              Donate
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-cream/50 uppercase">
            Support
          </p>
          <p className="mt-3 text-sm leading-6 text-cream/75">
            Questions or partnership ideas:{" "}
            <a className="underline decoration-cream/40 underline-offset-4" href={`mailto:${site.contactEmail}`}>
              {site.contactEmail}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
