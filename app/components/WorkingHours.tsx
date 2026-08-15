"use client";

import { useEffect, useState } from "react";
import { Clock, AlertCircle } from "lucide-react";
import { clinic } from "../lib/data";
import Reveal from "./Reveal";

function getTodayIndex(): number {
  const day = new Date().getDay(); // 0 = Sunday
  if (day === 0) return 2; // Sunday & holidays
  if (day === 6) return 1; // Saturday
  return 0; // Mon–Fri
}

export default function WorkingHours() {
  const [todayIdx, setTodayIdx] = useState<number>(-1);

  useEffect(() => {
    setTodayIdx(getTodayIndex());
  }, []);

  return (
    <section
      id="hours"
      className="relative scroll-mt-20 bg-gradient-to-b from-cream to-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <Reveal>
            <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-800">
              Opening hours
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl">
              Open seven days a week
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
              We keep long hours so you don't have to choose between your
              health and your day. Walk in any time during opening hours, or
              call ahead to skip the wait.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-accent-200 bg-accent-50 p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-accent-600" />
              <p className="text-sm leading-relaxed text-accent-800">
                <strong className="font-semibold">Emergency note:</strong>{" "}
                {clinic.emergencyNote}
              </p>
            </div>
          </Reveal>

          {/* Right: hours card */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-xl shadow-ink-900/5">
              <div className="flex items-center gap-3 bg-gradient-to-r from-brand-700 to-brand-800 p-6 text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold">Clinic hours</p>
                  <p className="text-xs text-brand-100">
                    Walk-ins welcome · No appointment needed
                  </p>
                </div>
              </div>

              <ul className="divide-y divide-ink-100">
                {clinic.hours.map((h, i) => {
                  const isToday = i === todayIdx;
                  return (
                    <li
                      key={h.day}
                      className={`flex items-center justify-between gap-4 px-6 py-4 transition-colors ${
                        isToday ? "bg-brand-50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
                          </span>
                        )}
                        <span
                          className={`text-sm font-semibold ${
                            isToday ? "text-brand-900" : "text-ink-800"
                          }`}
                        >
                          {h.day}
                        </span>
                        {isToday && (
                          <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            Today
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          isToday ? "text-brand-800" : "text-ink-600"
                        }`}
                      >
                        {h.time}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-ink-100 bg-cream/50 p-5">
                <p className="text-center text-xs text-ink-500">
                  Public holidays may have reduced hours. Please call ahead.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
