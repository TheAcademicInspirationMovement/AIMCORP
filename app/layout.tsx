import type { Metadata } from "next";
import { Fraunces, Manrope, Source_Sans_3 } from "next/font/google";
import { organisation } from "@/lib/content/organisation";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// Retained for the archived pages, which keep their original type stack.
const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${organisation.name} — ${site.tagline}`,
    template: `%s — ${organisation.name}`,
  },
  description: organisation.descriptor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${body.variable} ${display.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
