"use client";

import { Phone, Calendar, MapPin, Star, ChevronRight } from "lucide-react";
import { clinic } from "../lib/data";
import { useReveal } from "../lib/useReveal";

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mesh pt-10 pb-16 sm:pt-14 lg:pt-20 lg:pb-24"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-200/40 blur-3xl"
      />

      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-800 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              Open now · Walk-ins welcome
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-6xl">
              Compassionate care,{" "}
              <span className="text-gradient-brand">close to home</span>.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 text-pretty">
              Lucin Medical Centre is a trusted outpatient clinic on Kasarani
              Mwiki Road — offering general consultations, on-site lab &
              pharmacy, maternal &amp; child health and minor procedures, all
              under one roof.
            </p>

            {/* CTA row */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-ink-800 transition-all hover:border-brand-300 hover:text-brand-700"
              >
                <Phone className="h-5 w-5" />
                {clinic.phone}
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent-400 text-accent-400"
                    />
                  ))}
                </div>
                <span className="font-semibold text-ink-800">4.9</span>
                <span className="text-ink-500">· 380+ reviews</span>
              </div>
              <span className="hidden h-4 w-px bg-ink-200 sm:block" />
              <div className="flex items-center gap-1.5 text-ink-600">
                <MapPin className="h-4 w-4 text-brand-600" />
                <span>Kasarani, Nairobi</span>
              </div>
            </div>
          </div>

          {/* Right: image collage */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main image */}
              <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-900/15 ring-1 ring-white/40 lg:ml-auto lg:mr-0">
                <img
                  src="/images/hero.jpg"
                  alt="A friendly nurse welcoming a patient at Lucin Medical Centre"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
              </div>

              {/* Floating stat card — top */}
              <div className="absolute -left-3 top-6 hidden animate-float-soft rounded-2xl border border-ink-100 bg-white/95 p-4 shadow-xl backdrop-blur sm:block lg:-left-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Heart />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">Patients cared for</p>
                    <p className="font-display text-lg font-bold text-ink-900">
                      12,000+
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat card — bottom */}
              <div
                className="absolute -bottom-5 right-2 hidden animate-float-soft rounded-2xl border border-ink-100 bg-white/95 p-4 shadow-xl backdrop-blur sm:block lg:right-4"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">Open today</p>
                    <p className="font-display text-sm font-bold text-ink-900">
                      7:30 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-3xl border border-ink-100 bg-white/70 p-6 backdrop-blur sm:grid-cols-4 sm:gap-6 lg:mt-20 lg:p-8">
          {clinic.stats.map((s) => (
            <div
              key={s.label}
              className="text-center sm:text-left"
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900 lg:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Heart() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      <path d="M3.22 12h4M16.78 12h4M12 3.22v4M12 16.78v4" opacity="0.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
