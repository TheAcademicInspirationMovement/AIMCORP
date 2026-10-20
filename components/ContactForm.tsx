"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Website message");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1 text-sm font-medium">
        Name
        <input
          required
          name="name"
          className="rounded-md border border-line bg-paper px-3 py-2.5 text-base font-normal"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Email
        <input
          required
          type="email"
          name="email"
          className="rounded-md border border-line bg-paper px-3 py-2.5 text-base font-normal"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Subject
        <input
          name="subject"
          defaultValue="AIMCORP website"
          className="rounded-md border border-line bg-paper px-3 py-2.5 text-base font-normal"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Message
        <textarea
          required
          name="message"
          rows={6}
          className="rounded-md border border-line bg-paper px-3 py-2.5 text-base font-normal"
        />
      </label>
      <button
        type="submit"
        className="w-fit rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay-dark"
      >
        Open email to send
      </button>
      {sent ? (
        <p className="text-sm text-muted">
          Your mail app should open with this message addressed to {site.contactEmail}.
          Update that address in <code>NEXT_PUBLIC_CONTACT_EMAIL</code> if needed.
        </p>
      ) : (
        <p className="text-sm text-muted">
          This form opens your email app. No account or server is required to host it on Vercel.
        </p>
      )}
    </form>
  );
}
