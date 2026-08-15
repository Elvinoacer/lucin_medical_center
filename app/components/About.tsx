"use client";

import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "../lib/data";
import Icon from "./Icon";
import Reveal from "./Reveal";

const milestones = [
  {
    year: "2017",
    title: "Opened our doors",
    text: "Lucin Medical Centre was founded to bring accessible outpatient care to the Kasarani community.",
  },
  {
    year: "2020",
    title: "On-site lab launched",
    text: "We added a full diagnostics laboratory so families could get answers in hours, not days.",
  },
  {
    year: "2023",
    title: "Maternal & child health unit",
    text: "Dedicated antenatal, immunization and postnatal services for mothers and little ones.",
  },
  {
    year: "Today",
    title: "Trusted by 12,000+ patients",
    text: "A modern clinic built around the patient — open seven days a week on Mwiki Road.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: story + image */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image side */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink-900/15">
                <img
                  src="/images/about.jpg"
                  alt="A doctor consulting a patient at Lucin Medical Centre"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
              </div>
              {/* Floating "since 2017" badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-white p-5 text-center shadow-xl ring-1 ring-ink-100 sm:left-auto sm:right-4 sm:translate-x-0">
                <p className="font-display text-3xl font-extrabold text-brand-700">
                  Since 2017
                </p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-ink-500">
                  Serving Kasarani
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <Reveal className="lg:col-span-7" delay={120}>
            <span className="inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-700">
              About Lucin
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
              A neighbourhood clinic built around{" "}
              <span className="text-gradient-brand">you</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
              Lucin Medical Centre was founded on a simple belief: that great
              healthcare should be friendly, fast, and easy to reach. Tucked
              along Kasarani Mwiki Road, we've spent years caring for the
              families of Kasarani — from a child's first immunization to
              chronic disease management for seniors.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-600 text-pretty">
              Our team blends experienced clinicians with on-site diagnostics
              and pharmacy, so you spend less time running across town and more
              time getting better. Walk in, book ahead, or hop on a telehealth
              call — however you reach us, you'll be treated like a person, not
              a number.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Walk-ins and same-day appointments",
                "On-site lab with same-day results",
                "Affordable, transparent pricing",
                "Open evenings, weekends and holidays",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-ink-100 bg-cream/60 p-3.5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
                  <span className="text-sm font-medium text-ink-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal className="mt-20 lg:mt-28">
          <div className="rounded-3xl border border-ink-100 bg-cream/50 p-7 sm:p-9 lg:p-12">
            <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
              Our journey so far
            </h3>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative">
                  {/* Connector line */}
                  {i < milestones.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-2 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-brand-300 to-transparent lg:block"
                    />
                  )}
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                    <span className="relative z-10 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white shadow-md shadow-brand-600/30">
                      {i + 1}
                    </span>
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-brand-700">
                      {m.year}
                    </span>
                  </div>
                  <h4 className="mt-3 font-semibold text-ink-900">
                    {m.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Why choose us grid */}
        <div className="mt-20 lg:mt-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-800">
              Why Lucin
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
              Six reasons families trust us
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
              We've reimagined what a neighbourhood clinic can be — modern,
              caring, and relentlessly patient-first.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200/50 transition-transform group-hover:scale-105">
                    <Icon name={w.icon} className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <h3 className="font-display text-base font-bold text-ink-900">
                    {w.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-600 text-pretty">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
