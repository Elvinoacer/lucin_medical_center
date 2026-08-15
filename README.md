# Lucin Medical Centre — Website

A modern, mobile-first website for **Lucin Medical Centre**, an outpatient
clinic on Kasarani Mwiki Road, Nairobi, Kenya.

Built with **Next.js 16** (App Router), **React 19**, **TypeScript**,
**Tailwind CSS v4**, and **lucide-react**.

## What's inside

A single-page marketing site composed of focused section components:

```
app/
├── layout.tsx                  Root layout, fonts, metadata, Header + Footer
├── page.tsx                    Homepage — composes all sections
├── globals.css                 Tailwind v4 design system (brand palette, motion)
├── components/
│   ├── Header.tsx              Sticky header with mobile drawer menu
│   ├── Hero.tsx                Hero with CTA + floating stat cards + stats bar
│   ├── Services.tsx             6 service cards + CTA strip
│   ├── About.tsx               Story, timeline, "Why choose us" grid
│   ├── Doctors.tsx             4 doctor cards
│   ├── WorkingHours.tsx        Hours card with "today" highlight
│   ├── Testimonials.tsx        4 patient reviews + rating summary
│   ├── Contact.tsx             Booking form + contact card + Google Maps embed
│   ├── Footer.tsx              Brand, links, services, contact, social
│   ├── MobileCTABar.tsx        Sticky bottom Call/Book bar (mobile only)
│   ├── Reveal.tsx              Reveal-on-scroll wrapper (IntersectionObserver)
│   ├── Icon.tsx                Centralised lucide icon mapper
│   └── ClinicDataContext.tsx   Provides clinic info to client components
└── lib/
    ├── data.ts                 Single source of truth (services, doctors, hours, …)
    └── useReveal.ts            IntersectionObserver hook
```

## Design system

| Token        | Value                                                  |
| ------------ | ------------------------------------------------------ |
| Primary      | Teal — `#0d9488` (brand-600) → `#0f766e` (brand-700)  |
| Accent       | Amber — `#f59e0b` (accent-500)                          |
| Background   | Warm cream — `#fafaf7`                                 |
| Text         | Slate — `#0f172a` (ink-900)                            |
| Body font    | Geist Sans                                             |
| Display font | Geist Sans (bold, tracking-tight)                      |

Animations respect `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Editing content

All clinic information lives in `app/lib/data.ts` — update the phone number,
email, hours, services, doctors and testimonials there and the changes will
propagate across the site.
