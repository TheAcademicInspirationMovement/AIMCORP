# AIMCORP

Public website for the Applied Innovation Movement, rebuilt from the WordPress site as a small Next.js app.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` Home
- `/about`
- `/impact` plus Bidadi and Vijetha stories
- `/join`
- `/contact`
- `/donate` (PayPal + Venmo QR from the existing site)
- `/stories/womens-health` (short version of the 2026 toolkit)

LearnPress courses and old event/checkout pages were intentionally left out.

## Contact email

Set `NEXT_PUBLIC_CONTACT_EMAIL` if `info@aimcorp.org` is not the right inbox.

## Deploy on Vercel (Hobby / free)

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Leave the defaults (Next.js is detected).
4. Add `NEXT_PUBLIC_CONTACT_EMAIL` in project environment variables if needed.
5. After you are happy with the preview, point `aimcorp.org` to Vercel and keep WordPress offline or redirected.
