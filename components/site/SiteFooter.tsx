import Link from "next/link";
import { archiveLink, footerInitiatives } from "@/lib/content/navigation";
import { organisation } from "@/lib/content/organisation";
import { Container } from "./primitives";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-edge sm:mt-32">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Link href="/" className="text-fg" aria-label="AIMCORP — home">
              <Wordmark />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              {organisation.shortDescriptor}
            </p>
          </div>

          <nav aria-labelledby="footer-initiatives">
            <h2
              id="footer-initiatives"
              className="text-[0.6875rem] font-semibold tracking-[0.2em] text-fg-muted/70 uppercase"
            >
              Initiatives
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerInitiatives.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-organisation">
            <h2
              id="footer-organisation"
              className="text-[0.6875rem] font-semibold tracking-[0.2em] text-fg-muted/70 uppercase"
            >
              Organization
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={archiveLink.href}
                  className="text-sm text-fg-muted/70 transition-colors duration-200 hover:text-fg"
                >
                  {archiveLink.label}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-edge pt-6 text-xs text-fg-muted/70">
          © {new Date().getFullYear()} {organisation.name}
        </p>
      </Container>
    </footer>
  );
}
