"use client";

import {
  ArrowRight,
  Calendar,
  FlaskConical,
  HeartPulse,
  Phone,
  Pill,
  Stethoscope,
} from "lucide-react";
import { clinic } from "../lib/data";
import { useReveal } from "../lib/useReveal";

const careSteps = [
  {
    icon: Stethoscope,
    label: "Talk",
    detail: "Consultation",
    image: "/images/doctor-1.jpg",
    className: "care-piece--one",
  },
  {
    icon: FlaskConical,
    label: "Find",
    detail: "Clearer answers",
    image: "/images/doctor-2.jpg",
    className: "care-piece--two",
  },
  {
    icon: Pill,
    label: "Treat",
    detail: "Care & medicine",
    image: "/images/doctor-3.jpg",
    className: "care-piece--three",
  },
  {
    icon: HeartPulse,
    label: "Continue",
    detail: "Ongoing support",
    image: "/images/hero.jpg",
    className: "care-piece--four",
  },
];

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mesh py-12 sm:py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-brand-200/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-accent-200/35 blur-3xl"
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-4 transition-all duration-700 sm:px-6 lg:px-8 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-800 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              Open now · Walk-ins welcome
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-brand-700">
              One connected care journey
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-[3.55rem]">
              Good health is a puzzle. {" "}
              <span className="text-gradient-brand">We help put the pieces together.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              Start with a conversation. Find clearer answers. Get the care you
              need. At Lucin, the important pieces of your healthcare connect in
              one place.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl"
              >
                <Calendar className="h-5 w-5" />
                Book an appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-ink-800 transition-all hover:border-brand-300 hover:text-brand-700"
              >
                <Phone className="h-5 w-5" />
                Call us
              </a>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3 border-t border-ink-100 pt-6 sm:max-w-md">
              <div>
                <p className="font-display text-2xl font-extrabold text-ink-900">One place</p>
                <p className="mt-1 text-sm text-ink-500">for essential outpatient care</p>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-ink-900">Your next step</p>
                <p className="mt-1 text-sm text-ink-500">starts with a simple conversation</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative mx-auto max-w-2xl py-2 lg:ml-auto lg:mr-0">
              <div className="absolute left-1/2 top-1/2 z-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/50 blur-3xl" />

              <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-5">
                {careSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.label}
                      className={`care-piece group relative min-h-[13rem] overflow-hidden border border-white/70 shadow-xl shadow-ink-900/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[16rem] ${step.className}`}
                      style={{ animationDelay: `${index * 120}ms` }}
                    >
                      <img
                        src={step.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-lg backdrop-blur">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-lg font-bold text-white sm:text-xl">{step.label}</p>
                        <p className="text-sm text-white/75">{step.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[6px] border-white bg-brand-600 text-center text-white shadow-2xl shadow-brand-700/30 sm:h-36 sm:w-36">
                <HeartPulse className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="mt-1 text-[10px] font-bold uppercase leading-tight tracking-[0.14em] sm:text-xs">
                  Your care,<br />connected
                </span>
              </div>

              <div className="relative z-20 mx-auto -mt-1 w-fit rounded-full border border-brand-100 bg-white/95 px-4 py-2 text-center text-xs font-semibold text-ink-600 shadow-lg backdrop-blur sm:text-sm">
                Follow the pieces: <span className="text-brand-700">Talk → Find → Treat → Continue</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-ink-100 pt-8 sm:grid-cols-4 lg:mt-16">
          {clinic.stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .care-piece {
          animation: piece-settle 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .care-piece--one { border-radius: 2rem 1rem 1rem 1rem; }
        .care-piece--two { border-radius: 1rem 2rem 1rem 1rem; }
        .care-piece--three { border-radius: 1rem 1rem 1rem 2rem; }
        .care-piece--four { border-radius: 1rem 1rem 2rem 1rem; }
        @keyframes piece-settle {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .care-piece { animation: none; }
        }
      `}</style>
    </section>
  );
}
