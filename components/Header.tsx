"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav, philanthropyNav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [philanthropyOpen, setPhilanthropyOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/mark-small.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
            priority
          />
          <span className="font-display text-[1.35rem] leading-none tracking-tight text-navy">
            AIMCORP
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.slice(0, 1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-navy/80 hover:text-clay"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/about"
            className="text-sm font-semibold tracking-wide text-navy/80 hover:text-clay"
          >
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setPhilanthropyOpen(true)}
            onMouseLeave={() => setPhilanthropyOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold tracking-wide text-navy/80 hover:text-clay"
              aria-expanded={philanthropyOpen}
            >
              Philanthropy
              <span className="text-xs" aria-hidden>▾</span>
            </button>
            {philanthropyOpen ? (
              <div className="absolute top-full left-0 z-50 mt-2 w-72 max-h-[70vh] overflow-y-auto rounded-xl border border-line bg-paper py-2 shadow-lg">
                {philanthropyNav.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-navy/90 hover:bg-cream hover:text-clay"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {nav.slice(2).map((item) => (
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
            <Link href="/" className="text-base font-semibold text-navy" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-base font-semibold text-navy" onClick={() => setOpen(false)}>
              About
            </Link>
            <p className="text-xs font-semibold tracking-wide text-muted uppercase">Philanthropy</p>
            {philanthropyNav.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="text-sm font-medium text-navy/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {nav.slice(2).map((item) => (
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
