"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { clinic, navLinks } from "../lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-ink-200/60 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Lucin Medical Centre — home"><Logo /><div className="flex flex-col leading-none"><span className="font-display text-base font-bold tracking-tight text-ink-900 sm:text-lg">Lucin</span><span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-700">Medical Centre</span></div></a>

        <nav className="hidden items-center gap-1 lg:flex">{navLinks.map((l) => <a key={l.href} href={l.href} className="relative rounded-full px-3.5 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-brand-700">{l.label}</a>)}</nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={clinic.phoneHref} className="flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-ink-800 transition-all hover:border-brand-300 hover:text-brand-700"><Phone className="h-4 w-4" /><span>Call us</span></a>
          <a href="#appointment-form" className="group flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition-all hover:bg-brand-700 hover:shadow-md hover:shadow-brand-600/30"><Calendar className="h-4 w-4" /><span>Book Appointment</span></a>
        </div>

        <button type="button" onClick={() => setOpen(true)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700 lg:hidden" aria-label="Open menu" aria-expanded={open}><Menu className="h-5 w-5" /></button>
      </div>

      <div className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div className={`absolute inset-0 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
        <div className={`absolute right-0 top-0 flex h-full w-[min(86%,360px)] flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4"><div className="flex items-center gap-2.5"><Logo /><div className="flex flex-col leading-none"><span className="font-display text-base font-bold text-ink-900">Lucin</span><span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-700">Medical Centre</span></div></div><button type="button" onClick={() => setOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-ink-100" aria-label="Close menu"><X className="h-5 w-5" /></button></div>
          <nav className="flex flex-col gap-1 px-4 py-4">{navLinks.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-700">{l.label}</a>)}</nav>
          <div className="mt-auto space-y-3 border-t border-ink-200 p-5"><a href={clinic.phoneHref} className="flex w-full items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-800"><Phone className="h-4 w-4" />{clinic.phone}</a><a href="#appointment-form" onClick={() => setOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/30"><Calendar className="h-4 w-4" />Book Appointment</a><p className="pt-1 text-center text-xs text-ink-500">{clinic.address.line1} · {clinic.address.line2}</p></div>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-md shadow-brand-600/30"><svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 7v10M7 12h10" /><path d="M5 4.5h14a1 1 0 0 1 1 1v3.5c0 4.5-4 7.5-8 9.5-4-2-8-5-8-9.5V5.5a1 1 0 0 1 1-1z" opacity="0.18" fill="currentColor" stroke="none" /></svg></span>;
}
