# Hamza Salih — Portfolio & Technology Services

Premium personal portfolio and freelance technology services website built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Lucide**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en` or `/ar`).

### Languages

The site is bilingual:

- English: `/en`
- Arabic (RTL): `/ar`

Use the **English / العربية** switcher in the navbar. UI strings live in `src/i18n/ui.ts`. Page content is localized in `src/content/*` via `getX(locale)` helpers.

```bash
npm run build
npm start
```

## What you must customize first

### 1. Professional portrait

1. Add your photo as `public/images/hamza-salih.jpg` (recommended: clear head-and-shoulders crop).
2. In `src/content/profile.ts`, set:

```ts
portrait: {
  src: "/images/hamza-salih.jpg",
  alt: "Professional portrait of Hamza Salih",
},
```

### 2. CV PDF

Replace the placeholder file:

- `public/cv/Hamza-Salih-CV.pdf`

The **Download CV** button already points to this path.

### 3. Experience, education, and achievements

Do **not** leave invented details live. Search for `[EDIT]` and update:

| Content | File |
| --- | --- |
| Profile, about, education, availability | `src/content/profile.ts` |
| Work history | `src/content/experience.ts` |
| Skills | `src/content/skills.ts` |
| Projects / case studies | `src/content/projects.ts` |
| Services (enable/disable) | `src/content/services.ts` |
| Testimonials | `src/content/testimonials.ts` |
| Blog posts | `src/content/blog.ts` |
| Site SEO / nav | `src/content/site.ts` |

### 4. Contact form email delivery

The form validates and posts to `/api/contact`. Without `RESEND_API_KEY`, submissions return a clear setup message (they do **not** pretend to succeed).

1. Create a free account at [resend.com](https://resend.com).
2. Copy `.env.example` to `.env.local` (or extend your existing file).
3. Set:

```env
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=hamzasalihksa7@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. For production, verify your domain in Resend and use a from-address on that domain.

WhatsApp (`https://wa.me/966507931628`) and email links work without Resend.

### 5. Testimonials

Kept hidden until real quotes exist. In `src/content/testimonials.ts`:

- Add permissioned testimonials
- Set each item `enabled: true`
- Set `testimonialsConfig.showSection = true`

### 6. Optional services

In `src/content/services.ts`, set `enabled: true` on optional offerings (API integrations, maintenance, security hardening, consulting) when you want them public.

## Project structure

```
src/
  app/                 # Routes (App Router)
  components/          # UI, layout, sections, forms
  content/             # Editable site content (primary CMS)
  lib/                 # Utilities & icons
public/
  images/              # Portrait, OG, project thumbnails
  cv/                  # Downloadable CV PDF
```

## Adding a project

1. Add a thumbnail under `public/images/projects/`.
2. Copy the template comment at the bottom of `src/content/projects.ts`.
3. Fill case-study fields honestly; omit confidential client details.

## Deployment (Vercel)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Add environment variables from `.env.example`.
4. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
5. Deploy.

Other Node hosts work with `npm run build` + `npm start`.

## Brand notes

- Colors: dark navy / charcoal + cyan accent (`src/app/globals.css`)
- Fonts: Plus Jakarta Sans + Manrope
- Logo: typographic **HS** monogram in the navbar/footer

## Arabic / future features

Content modules are structured so you can later add:

- `ar` locale routes
- Maintenance packages
- Inquiry tracking backend
- More blog categories

No Arabic UI is shipped yet; keep strings in content files to ease translation.
