"use client";

import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Navigation,
  Phone,
  Send,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { clinic } from "../lib/data";
import Reveal from "./Reveal";
import { useReveal } from "../lib/useReveal";

const services = [
  "General Consultation",
  "Diagnostics & Lab",
  "Maternal & Child Health",
  "Pharmacy",
  "Minor Procedures",
  "Telehealth Follow-up",
  "Other / not sure",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-ink-950 py-14 text-white sm:py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-mesh opacity-10" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[min(80%,720px)] -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-300 ring-1 ring-white/15">
            Book a visit
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:mt-4 sm:text-4xl lg:text-5xl">
            A few details, then we take it from there.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-300 sm:mt-4 sm:text-lg">
            Tell us how to reach you and what you need. Our front desk will confirm the right next step.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:mt-12 lg:grid-cols-12 lg:gap-7">
          <Reveal className="order-2 lg:order-1 lg:col-span-5" delay={80}>
            <div className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-7">
              <div>
                <h3 className="font-display text-xl font-bold">Reach us directly</h3>
                <p className="mt-1.5 text-sm text-ink-300">{clinic.address.full}</p>
              </div>

              <div className="grid gap-3">
                <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone" value={clinic.phone} href={clinic.phoneHref} />
                <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value={clinic.email} href={clinic.emailHref} />
                <ContactRow icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value={clinic.whatsapp} href={clinic.whatsappHref} />
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-300">Nearby landmarks</p>
                <ul className="mt-3 space-y-2">
                  {clinic.landmarks.map((l) => (
                    <li key={l} className="flex items-start gap-2.5 text-sm text-ink-300">
                      <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-400" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={clinic.maps.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
            </div>
          </Reveal>

          <Reveal className="order-1 scroll-mt-24 lg:order-2 lg:col-span-7" delay={160}>
            <div id="appointment-form" className="relative overflow-hidden rounded-[1.75rem] bg-white text-ink-900 shadow-2xl ring-1 ring-white/10 sm:rounded-3xl">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-accent-400" />

              {submitted ? (
                <div ref={ref} className={`flex min-h-[400px] flex-col items-center justify-center p-6 text-center transition-all duration-700 sm:p-8 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700"><CheckCircle2 className="h-9 w-9" /></div>
                  <h3 className="mt-5 font-display text-2xl font-bold">Request received</h3>
                  <p className="mt-2 max-w-sm text-ink-600">Asante sana! Our front desk will call you back within the hour during opening hours to confirm your appointment.</p>
                  <a href={clinic.phoneHref} className="mt-4 font-semibold text-brand-700 hover:underline">Need help now? Call {clinic.phone}</a>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 hover:border-brand-300 hover:text-brand-700">Send another request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-4 sm:p-7">
                  <div className="rounded-2xl bg-cream/70 px-4 py-4 sm:px-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/20"><CalendarDays className="h-5 w-5" /></span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-xl font-bold sm:text-2xl">Appointment request</h3>
                          <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-700">About 2 min</span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-ink-600">Start with your details. You can leave anything optional blank.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <FormField icon={<UserRound className="h-4 w-4" />} label="Full name" required name="name" placeholder="e.g. Jane Wanjiru" />
                    <FormField icon={<Phone className="h-4 w-4" />} label="Phone number" required type="tel" name="phone" placeholder="+254 7XX XXX XXX" />
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <FormField icon={<Mail className="h-4 w-4" />} label="Email" type="email" name="email" placeholder="jane@example.com" />
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-sm font-semibold text-ink-800">Service needed</label>
                      <div className="relative">
                        <Stethoscope className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-600" />
                        <select id="service" name="service" defaultValue="" className="h-12 w-full appearance-none rounded-xl border border-ink-200 bg-cream/40 pl-10 pr-10 text-sm text-ink-900 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100">
                          <option value="" disabled>Select a service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-ink-100 pt-5">
                    <div className="mb-3 flex items-center gap-2 text-sm font-bold text-ink-800"><CalendarDays className="h-4 w-4 text-brand-600" /> When would work best?</div>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                      <FormField icon={<CalendarDays className="h-4 w-4" />} label="Preferred date" type="date" name="date" />
                      <FormField icon={<Clock className="h-4 w-4" />} label="Preferred time" type="time" name="time" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="text-sm font-semibold text-ink-800">Anything else we should know? <span className="font-normal text-ink-400">Optional</span></label>
                    <div className="relative mt-1.5">
                      <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-brand-600" />
                      <textarea id="message" name="message" rows={3} placeholder="Briefly tell us what you need help with…" className="w-full resize-y rounded-xl border border-ink-200 bg-cream/40 py-3 pl-10 pr-3.5 text-sm text-ink-900 outline-none transition-all placeholder:text-ink-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100" />
                    </div>
                  </div>

                  <button type="submit" className="group mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl">
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    Send my appointment request
                  </button>
                  <p className="mt-3 text-center text-xs leading-relaxed text-ink-500">We’ll only use these details to respond to your appointment request.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-5 lg:mt-7">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between gap-4 bg-white/[0.04] px-5 py-4 backdrop-blur sm:px-7">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-600 text-white"><MapPin className="h-5 w-5" /></span>
                <div className="min-w-0"><p className="truncate font-semibold">{clinic.address.full}</p><p className="text-xs text-ink-300">Lat {clinic.maps.lat}°, Long {clinic.maps.lng}°</p></div>
              </div>
              <a href={clinic.maps.link} target="_blank" rel="noopener noreferrer" className="hidden flex-none rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:inline-flex">Open in Google Maps</a>
            </div>
            <div className="relative aspect-[16/9] w-full bg-ink-900 sm:aspect-[21/9]"><iframe title="Map showing Lucin Medical Centre location in Kasarani, Nairobi" src={clinic.maps.embed} className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return <a href={href} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-brand-400/40 hover:bg-white/[0.06]"><span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-600/15 text-brand-300 ring-1 ring-brand-400/20">{icon}</span><div className="min-w-0"><p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p><p className="truncate text-sm font-semibold text-white">{value}</p></div></a>;
}

function FormField({ icon, label, name, type = "text", placeholder, required }: { icon: React.ReactNode; label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return <div className="flex flex-col gap-1.5"><label htmlFor={name} className="text-sm font-semibold text-ink-800">{label}{required && <span className="text-accent-600"> *</span>}</label><div className="relative"><span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-600">{icon}</span><input id={name} name={name} type={type} required={required} placeholder={placeholder} className="h-12 w-full rounded-xl border border-ink-200 bg-cream/40 py-2 pl-10 pr-3.5 text-sm text-ink-900 outline-none transition-all placeholder:text-ink-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100" /></div></div>;
}
