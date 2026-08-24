"use client";

import { useEffect, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import { clinic } from "../lib/data";

export default function MobileCTABar() {
  const [show, setShow] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const form = document.getElementById("appointment-form");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { rootMargin: "-72px 0px -20% 0px", threshold: 0.05 },
    );

    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const visible = show && !formVisible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300 ease-out`}
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-md px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <div className="flex items-center gap-2 rounded-2xl border border-ink-200 bg-white/95 p-2 shadow-2xl shadow-ink-900/20 backdrop-blur">
          <a
            href={clinic.phoneHref}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-ink-200 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href="#appointment-form"
            className="flex h-12 flex-[1.35] items-center justify-center gap-2 rounded-xl bg-brand-600 px-2 text-sm font-semibold text-white shadow-md shadow-brand-600/30 transition-colors hover:bg-brand-700"
          >
            <Calendar className="h-4 w-4" />
            Book appointment
          </a>
        </div>
      </div>
    </div>
  );
}
