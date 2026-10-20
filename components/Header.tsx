"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/images/mark-small.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <Image
            src="/images/logo-crop.png"
            alt="AIMCORP"
            width={160}
            height={24}
            className="hidden h-6 w-auto sm:block"
            priority
          />
          <span className="font-display text-xl tracking-tight text-navy sm:hidden">
            AIMCORP
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-navy/80 hover:text-clay"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="rounded-full bg-clay px-4 py-2 text-sm font-semibold text-white hover:bg-clay-dark"
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="mt-1 w-fit rounded-full bg-clay px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Donate
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
