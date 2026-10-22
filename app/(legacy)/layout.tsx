import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

/**
 * Shell for archived pages carried over from the previous site. They keep
 * their original light theme; the current site lives in the (site) group.
 */
export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="legacy-shell flex min-h-screen flex-col bg-paper text-ink">
      <p className="bg-ink px-5 py-2 text-center text-xs text-cream/85">
        You’re viewing an archived page.{" "}
        <Link href="/" className="font-semibold underline underline-offset-4">
          Go to the current AIMCorp site
        </Link>
      </p>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
