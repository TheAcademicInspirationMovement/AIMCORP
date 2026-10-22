# AIMCorp

The AIMCorp website: a nonprofit building public-interest initiatives and
collaborating with mission-driven organizations through technology,
engineering, design, and innovation.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Structure

```
app/
  (site)/      current site — dark theme, shared shell
  (legacy)/    archived pages from the previous site — original light theme
components/site/   components for the current site
lib/content/       all editable copy and navigation
public/art/        abstract placeholder artwork
```

Route groups do not affect URLs, so every archived page keeps the address it
had before.

## Editing content

All copy lives in `lib/content/` — the components read from it, so you should
not need to touch JSX to change text.

| File | What it holds |
| --- | --- |
| `navigation.ts` | Primary menu and footer links |
| `organisation.ts` | Organisation name and mission descriptor |
| `home.ts` | Homepage copy (hero, capabilities, section headings, CTAs) |
| `initiatives.ts` | The four initiatives and their content slots |
| `services.ts` | Draft collaboration categories, process, contact destination |
| `archive.ts` | Archive entries |

### Approval slots

Only the initiative **names** are confirmed. In `lib/content/initiatives.ts`
every other field starts as `null` or an empty array:

- a field with approved copy renders normally;
- a required section without copy renders a visible "Pending" placeholder;
- an optional slot (project image, resources) is hidden entirely.

The same applies to `services.contactDestination`: until a real address or form
URL is approved, the Services page shows a placeholder rather than an invented
email address.

### Replacing artwork

`public/art/` holds hand-drawn abstract SVGs used as image slots. To use a real
asset, drop the file into `public/` and change the single `src` path in
`lib/content/`. Nothing else needs to change — the layout and the overlay that
keeps text readable stay the same.

## Design notes

- Layered dark palette defined as CSS custom properties in `app/globals.css`
  and exposed to Tailwind through `@theme inline`.
- Section reveals use `animation-timeline: view()` only. Content is visible by
  default, so nothing disappears where the feature is unsupported, and the
  animation is skipped entirely under `prefers-reduced-motion: reduce`.
- Archived pages keep their original light theme under `.legacy-shell`.
