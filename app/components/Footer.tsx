"use client";

import type { ReactElement } from "react";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { clinic, navLinks, services } from "../lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 7v10M7 12h10" />
                </svg>
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-tight text-white">
                  Lucin
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-300">
                  Medical Centre
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400 text-pretty">
              {clinic.description}
            </p>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-300 transition-colors hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-400 transition-colors hover:text-brand-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-ink-400 transition-colors hover:text-brand-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Reach us
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-400" />
                <span className="text-ink-400">{clinic.address.full}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 flex-none text-brand-400" />
                <a
                  href={clinic.phoneHref}
                  className="text-ink-400 transition-colors hover:text-brand-300"
                >
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 flex-none text-brand-400" />
                <a
                  href={clinic.emailHref}
                  className="text-ink-400 transition-colors hover:text-brand-300"
                >
                  {clinic.email}
                </a>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-ink-500 transition-colors hover:text-brand-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-ink-500 transition-colors hover:text-brand-300"
            >
              Terms of Service
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-300 transition-colors hover:border-brand-400/40 hover:text-brand-300"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Inline brand SVGs (lucide-react removed brand icons) ---------- */

type SvgProps = { className?: string };

const socialLinks: { label: string; href: string; Icon: (p: SvgProps) => ReactElement }[] = [
  {
    label: "Facebook",
    href: clinic.social.facebook,
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: clinic.social.instagram,
    Icon: InstagramIcon,
  },
  {
    label: "X",
    href: clinic.social.twitter,
    Icon: XIcon,
  },
  {
    label: "LinkedIn",
    href: clinic.social.linkedin,
    Icon: LinkedInIcon,
  },
];

function FacebookIcon({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.55C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
