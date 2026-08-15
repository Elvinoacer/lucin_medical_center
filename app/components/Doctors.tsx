"use client";

import { Mail } from "lucide-react";
import { doctors } from "../lib/data";
import Reveal from "./Reveal";

function LinkedInGlyph({ className }: { className?: string }) {
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

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="relative scroll-mt-20 bg-cream py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-800">
            Meet the team
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Caring clinicians who{" "}
            <span className="text-gradient-brand">treat you like family</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
            Our doctors, nurses and clinical officers bring decades of combined
            experience — and a genuine love for the Kasarani community.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-7">
          {doctors.map((d, i) => (
            <Reveal key={d.id} delay={(i % 4) * 70}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/10">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />

                  {/* Role chip */}
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-800 backdrop-blur">
                    {d.role}
                  </span>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-display text-lg font-bold leading-tight">
                      {d.name}
                    </h3>
                    <p className="text-xs text-brand-100">{d.specialty}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-ink-600 text-pretty">
                    {d.bio}
                  </p>

                  <div className="mt-4 flex items-center gap-2 border-t border-ink-100 pt-4">
                    <a
                      href="#contact"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-100 text-ink-700 transition-colors hover:bg-brand-100 hover:text-brand-700"
                      aria-label={`Book with ${d.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-100 text-ink-700 transition-colors hover:bg-brand-100 hover:text-brand-700"
                      aria-label={`${d.name} on LinkedIn`}
                    >
                      <LinkedInGlyph className="h-4 w-4" />
                    </a>
                    <a
                      href="#contact"
                      className="ml-auto text-sm font-semibold text-brand-700 hover:text-brand-900"
                    >
                      Book →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
