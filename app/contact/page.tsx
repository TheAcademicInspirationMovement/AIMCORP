import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Hello"
        title="Contact AIMCORP"
        lede="Partnerships, volunteering, press, or a question about a program — we would like to hear from you."
        image="/images/classroom.jpg"
        imageAlt="Students during an AIMCORP classroom visit"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">Send a message</h2>
          <p className="mt-3 mb-8 leading-7 text-muted">
            Direct email:{" "}
            <a className="font-semibold text-blue" href={`mailto:${site.contactEmail}`}>
              {site.contactEmail}
            </a>
          </p>
          <ContactForm />
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-paper p-6">
          <h2 className="font-display text-2xl">Other ways to help</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <li>
              Donate via{" "}
              <a className="font-semibold text-blue" href={site.paypal}>
                PayPal
              </a>
            </li>
            <li>
              Donate via{" "}
              <a className="font-semibold text-blue" href="/donate">
                Venmo
              </a>
            </li>
            <li>
              Open roles live on the{" "}
              <a className="font-semibold text-blue" href="/join">
                Join us
              </a>{" "}
              page
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
}
