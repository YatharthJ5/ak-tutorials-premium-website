# A.K. Tutorials: Premium Website Concept

A demonstration redesign for **A.K. Tutorials**, built with Next.js 14 (App Router), TypeScript, Tailwind CSS 3, Framer Motion and Lucide icons.

> **Demo status:** No real institute facts are included. Every unknown detail is a bracketed placeholder such as `[Institute Phone Number]` and is displayed on the site with a "to be confirmed" marker. There are no invented results, testimonials, credentials or addresses.

## Requirements
Node.js 18.18 or newer (tested on Node 22), npm 9+. No API keys, no paid services.

## Run it
```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
npm run lint         # ESLint
npm run typecheck    # TypeScript
```

## Pages
`/` Home, `/courses`, `/about`, `/results`, `/contact` (plus `sitemap.xml`, `robots.txt`, Open Graph image, 404 page).

## Customising (everything lives in `data/`)
| File | What to edit |
|---|---|
| `data/institute.ts` | Name, tagline, phone, WhatsApp, email, address, hours, map embed URL, social links, announcement text, CTA text, trust-strip facts |
| `data/courses.ts` | All courses. Set `confirmed: true` to remove the "Details to be confirmed" badge |
| `data/faculty.ts` | Faculty names, roles, bios. Add photos to `public/images/` and set `image` |
| `data/testimonials.ts` | Only add genuine, consented quotes; set `isSample: false` |
| `data/results.ts` | Verified achievements only. The empty list shows an honest notice |
| `data/content.ts` | Teaching approach, learning journey, values, FAQs |

**Contact links are generated automatically.** Once `phone` and `whatsapp` no longer start with `[`, every Call/WhatsApp button becomes a real `tel:` / `wa.me` link. WhatsApp numbers: digits with country code, e.g. `919876543210`.

**Colours and fonts:** `tailwind.config.ts` (ink navy, paper warm white, amber). Fonts are bundled via Fontsource (Fraunces and Public Sans), so there are no external font requests.

**Domain:** copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` so the sitemap and Open Graph URLs are correct.

## Enquiry form: honest demo mode
The form validates client-side (name, phone, course, message length). With no backend configured it **does not send or store anything**, and tells the user so. After validation it offers a prefilled **WhatsApp** message once a WhatsApp number is configured. To receive submissions, add a server action or API route (email service, Google Sheets, CRM) that handles the form values.

## Design notes
- Motif: ruled notebook paper with an amber margin line; headline "Learning that shows its working."
- The hero uses an illustrative worked example, clearly labelled as not a real student's work.
- No stock photos are bundled, so there is no licensing risk. Add real photographs of the institute to `public/images/` and render them with `next/image`.
- Animations use Framer Motion and respect `prefers-reduced-motion` (global `MotionConfig` plus a CSS fallback).
- Accessibility: skip link, visible focus, semantic landmarks, labelled form fields with `aria-invalid`/`aria-describedby`, `aria-expanded` accordion, 44px+ touch targets.

## Structure
```
app/            routes, layout, sitemap, robots, icon, OG image, 404
components/     layout/ sections/ ui/ forms/
data/           all editable content
public/images/  place real images here
```

## What was tested
Type check, ESLint and the production build pass. Chromium (Playwright) checks: no horizontal overflow at 320, 390, 820, 1366 and 1920 px on all five routes, no console errors, mobile menu, course filter, course-to-form preselection, form validation and success state, FAQ accordion, internal links, reduced-motion rendering.

Not tested: real devices, Safari/Firefox, screen readers, Lighthouse scores.
