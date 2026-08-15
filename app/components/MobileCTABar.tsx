"use client";

import { useEffect, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import { clinic } from "../lib/data";

/**
 * Sticky bottom action bar shown on mobile only.
 * Appears after the user scrolls past the hero, giving them quick
 * access to call or book from anywhere on the page.
 */
export default function MobileCTABar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after ~70vh scrolled (past most of the hero)
      setShow(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300 ease-out`}
      aria-hidden={!show}
    >
      <div className="mx-auto max-w-md p-3">
        <div className="flex items-center gap-2 rounded-2xl border border-ink-200 bg-white/95 p-2 shadow-2xl shadow-ink-900/20 backdrop-blur">
          <a
            href={clinic.phoneHref}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-ink-200 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href="#contact"
            className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-xl bg-brand-600 text-sm font-semibold text-white shadow-md shadow-brand-600/30 transition-colors hover:bg-brand-700"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
