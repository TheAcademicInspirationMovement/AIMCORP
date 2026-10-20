import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Every contribution is tax deductible"
        lede="AIMCORP is a 501(c)(3) nonprofit supported in part by the community. Gifts fund education outreach and social-impact work."
        image="/images/supplies.jpg"
        imageAlt="Students with school supplies from an AIMCORP visit"
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
        <article className="rounded-2xl border border-line bg-paper p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-clay uppercase">
            PayPal
          </p>
          <h2 className="font-display mt-2 text-3xl">Donate online</h2>
          <p className="mt-3 leading-7 text-muted">
            Use our PayPal.me link. You can give with a PayPal balance or a card.
          </p>
          <a
            href={site.paypal}
            className="mt-6 inline-flex rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay-dark"
          >
            Donate with PayPal
          </a>
        </article>
        <article className="rounded-2xl border border-line bg-paper p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-clay uppercase">
            Venmo
          </p>
          <h2 className="font-display mt-2 text-3xl">Scan to give</h2>
          <p className="mt-3 leading-7 text-muted">
            Open Venmo and scan the QR code from the existing AIMCORP donation
            account.
          </p>
          <div className="relative mx-auto mt-6 aspect-[9/16] w-48 overflow-hidden rounded-xl border border-line bg-white">
            <Image
              src="/images/venmo-qr.png"
              alt="Venmo QR code for AIMCORP donations"
              fill
              className="object-contain p-2"
              sizes="192px"
            />
          </div>
        </article>
      </section>
    </>
  );
}
