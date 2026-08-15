"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "../lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-700">
            Patient stories
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Loved by the Kasarani community
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-accent-400 text-accent-400"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-ink-700">
              4.9 average · 380+ reviews
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-7">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={(i % 4) * 70}>
              <figure className="relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-b from-cream/70 to-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5">
                <Quote
                  className="absolute right-4 top-4 h-10 w-10 text-brand-100"
                  aria-hidden="true"
                />
                <div className="relative flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star
                      key={k}
                      className="h-4 w-4 fill-accent-400 text-accent-400"
                    />
                  ))}
                </div>
                <blockquote className="relative mt-4 text-sm leading-relaxed text-ink-700 text-pretty">
                  "{t.text}"
                </blockquote>
                <figcaption className="relative mt-6 flex items-center gap-3 border-t border-ink-100 pt-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-ink-500">{t.location}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
