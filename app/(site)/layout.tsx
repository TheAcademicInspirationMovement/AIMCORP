import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-base">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#101620]"
      >
        Skip to content
      </a>

      {/* The inset page canvas: a composed surface, not an edge-to-edge app. */}
      <div className="mx-auto w-full max-w-[1280px] bg-surface sm:my-6 sm:rounded-[2.25rem] lg:my-8">
        <SiteHeader />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
