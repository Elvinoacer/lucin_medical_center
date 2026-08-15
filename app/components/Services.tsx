"use client";

import { ChevronRight } from "lucide-react";
import { services } from "../lib/data";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 bg-cream py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-800">
            What we offer
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Comprehensive outpatient care,{" "}
            <span className="text-gradient-brand">all in one place</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
            From a quick GP consult to lab work, maternal &amp; child health
            and pharmacy — every service your family needs is right here on
            Mwiki Road, Kasarani.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
                {/* Decorative gradient corner */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-100 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/50 transition-transform duration-300 group-hover:scale-105">
                  <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600 text-pretty">
                  {s.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm font-medium text-ink-700"
                    >
                      <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                >
                  Enquire
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <Reveal className="mt-12 lg:mt-16">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-800 p-7 text-center sm:flex-row sm:text-left lg:p-9">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Not sure which service you need?
              </h3>
              <p className="mt-1.5 text-brand-100">
                Call our front desk — we'll guide you to the right clinician.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex flex-none items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-brand-800 shadow-lg transition-all hover:bg-brand-50 hover:shadow-xl"
            >
              Talk to us
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
