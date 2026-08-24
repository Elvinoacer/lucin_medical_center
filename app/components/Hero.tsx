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
    detail: "Answers",
    image: "/images/doctor-2.jpg",
    className: "care-piece--two",
  },
  {
    icon: Pill,
    label: "Treat",
    detail: "Care",
    image: "/images/doctor-3.jpg",
    className: "care-piece--three",
  },
  {
    icon: HeartPulse,
    label: "Continue",
    detail: "Support",
    image: "/images/hero.jpg",
    className: "care-piece--four",
  },
];

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mesh py-8 sm:py-12 lg:py-20"
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
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-800 shadow-sm backdrop-blur lg:hidden">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
          </span>
          Open now · Walk-ins welcome
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Copy comes second on mobile so the visitor sees the story before a wall of text. */}
          <div className="order-2 lg:order-1 lg:col-span-5 xl:col-span-5">
            <div className="hidden lg:inline-flex lg:items-center lg:gap-2 lg:rounded-full lg:border lg:border-brand-200 lg:bg-white/80 lg:px-3.5 lg:py-1.5 lg:text-xs lg:font-semibold lg:text-brand-800 lg:shadow-sm lg:backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              Open now · Walk-ins welcome
            </div>

            <div className="mt-2 flex items-center gap-3 lg:mt-7">
              <span className="h-px w-8 bg-brand-400" />
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-700 sm:text-xs">
                One connected care journey
              </p>
            </div>

            <h1 className="mt-3 max-w-xl font-display text-[2.55rem] font-extrabold leading-[0.98] tracking-tight text-ink-900 text-balance sm:text-5xl lg:mt-4 lg:text-[3.55rem]">
              Good health is not one piece. {" "}
              <span className="text-gradient-brand">It is the whole picture.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600 sm:mt-5 sm:text-lg">
              One conversation can lead to clearer answers, the right treatment,
              and care that stays connected.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-7">
              <a
                href="#contact"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl"
              >
                <Calendar className="h-5 w-5" />
                Book an appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={clinic.phoneHref}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-ink-200 bg-white/80 px-6 py-3.5 text-base font-semibold text-ink-800 backdrop-blur transition-all hover:border-brand-300 hover:text-brand-700"
              >
                <Phone className="h-5 w-5" />
                Call us
              </a>
            </div>

            <div className="mt-7 hidden grid-cols-2 gap-3 border-t border-ink-100 pt-6 sm:grid lg:mt-9 lg:max-w-md">
              <div>
                <p className="font-display text-2xl font-extrabold text-ink-900">One place</p>
                <p className="mt-1 text-sm text-ink-500">for essential outpatient care</p>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-ink-900">Your next step</p>
                <p className="mt-1 text-sm text-ink-500">starts with a conversation</p>
              </div>
            </div>
          </div>

          {/* The visual story leads on mobile instead of being buried below the copy. */}
          <div className="order-1 lg:order-2 lg:col-span-7 xl:col-span-7">
            <div className="relative mx-auto max-w-2xl py-1 lg:ml-auto lg:mr-0 lg:py-2">
              <div className="absolute left-1/2 top-1/2 z-0 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/60 blur-3xl sm:h-48 sm:w-48" />

              <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-5">
                {careSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.label}
                      className={`care-piece group relative min-h-[7.75rem] overflow-hidden border border-white/70 shadow-lg shadow-ink-900/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[16rem] ${step.className}`}
                      style={{ animationDelay: `${index * 120}ms` }}
                    >
                      <img
                        src={step.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                        <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-lg backdrop-blur sm:mb-3 sm:h-10 sm:w-10">
                          <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                        </div>
                        <p className="text-sm font-bold text-white sm:text-xl">{step.label}</p>
                        <p className="hidden text-sm text-white/75 sm:block">{step.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-white bg-brand-600 text-center text-white shadow-2xl shadow-brand-700/30 sm:h-36 sm:w-36 sm:border-[6px]">
                <HeartPulse className="h-4 w-4 sm:h-7 sm:w-7" />
                <span className="mt-1 text-[7px] font-bold uppercase leading-tight tracking-[0.1em] sm:text-xs sm:tracking-[0.14em]">
                  Your care,<br />connected
                </span>
              </div>

              <div className="relative z-20 mx-auto mt-2 w-fit max-w-full rounded-full border border-brand-100 bg-white/95 px-3 py-1.5 text-center text-[10px] font-semibold text-ink-600 shadow-lg backdrop-blur sm:mt-3 sm:px-4 sm:py-2 sm:text-sm">
                <span className="hidden sm:inline">Follow the pieces: </span>
                <span className="text-brand-700">Talk → Find → Treat → Continue</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-ink-100 pt-8 sm:grid-cols-4 lg:mt-16">
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
        .care-piece--one { border-radius: 1.5rem 0.75rem 0.75rem 0.75rem; }
        .care-piece--two { border-radius: 0.75rem 1.5rem 0.75rem 0.75rem; }
        .care-piece--three { border-radius: 0.75rem 0.75rem 0.75rem 1.5rem; }
        .care-piece--four { border-radius: 0.75rem 0.75rem 1.5rem 0.75rem; }
        @media (min-width: 640px) {
          .care-piece--one { border-radius: 2rem 1rem 1rem 1rem; }
          .care-piece--two { border-radius: 1rem 2rem 1rem 1rem; }
          .care-piece--three { border-radius: 1rem 1rem 1rem 2rem; }
          .care-piece--four { border-radius: 1rem 1rem 2rem 1rem; }
        }
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
