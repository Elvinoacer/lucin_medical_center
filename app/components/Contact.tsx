"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Navigation,
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
    // In production this would POST to an API route or service.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 bg-ink-950 py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-mesh opacity-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[min(80%,720px)] -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-300 ring-1 ring-white/15">
            Get in touch
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Book your visit
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-300 text-pretty">
            Send us a booking request and our front desk will confirm your
            appointment within the hour during opening hours. Walk-ins are
            always welcome too.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-7">
          {/* Contact info card */}
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
              <div>
                <h3 className="font-display text-xl font-bold">
                  Reach us directly
                </h3>
                <p className="mt-1.5 text-sm text-ink-300">
                  {clinic.address.full}
                </p>
              </div>

              <div className="grid gap-3">
                <ContactRow
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value={clinic.phone}
                  href={clinic.phoneHref}
                />
                <ContactRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={clinic.email}
                  href={clinic.emailHref}
                />
                <ContactRow
                  icon={<MessageCircle className="h-5 w-5" />}
                  label="WhatsApp"
                  value={clinic.whatsapp}
                  href={clinic.whatsappHref}
                />
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                  Nearby landmarks
                </p>
                <ul className="mt-3 space-y-2">
                  {clinic.landmarks.map((l) => (
                    <li
                      key={l}
                      className="flex items-start gap-2.5 text-sm text-ink-300"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-400" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={clinic.maps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
            </div>
          </Reveal>

          {/* Form card */}
          <Reveal className="lg:col-span-7" delay={160}>
            <div className="rounded-3xl bg-white p-6 text-ink-900 shadow-2xl sm:p-8">
              {submitted ? (
                <div
                  ref={ref}
                  className={`flex min-h-[440px] flex-col items-center justify-center text-center transition-all duration-700 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">
                    Request received
                  </h3>
                  <p className="mt-2 max-w-sm text-ink-600">
                    Asante sana! Our front desk will call you back within the
                    hour to confirm your appointment. For anything urgent,
                    please call{" "}
                    <a
                      href={clinic.phoneHref}
                      className="font-semibold text-brand-700 underline-offset-2 hover:underline"
                    >
                      {clinic.phone}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 hover:border-brand-300 hover:text-brand-700"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      Appointment request
                    </h3>
                    <p className="mt-1 text-sm text-ink-500">
                      Fields marked with{" "}
                      <span className="text-accent-600">*</span> are required.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      required
                      name="name"
                      placeholder="e.g. Jane Wanjiru"
                    />
                    <Field
                      label="Phone number"
                      required
                      type="tel"
                      name="phone"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                    />
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="service"
                        className="text-sm font-semibold text-ink-800"
                      >
                        Service needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        className="h-11 rounded-xl border border-ink-200 bg-cream/50 px-3.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Preferred date"
                      type="date"
                      name="date"
                    />
                    <Field
                      label="Preferred time"
                      type="time"
                      name="time"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-ink-800"
                    >
                      Tell us a bit more (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Briefly describe your symptoms or what you need…"
                      className="rounded-xl border border-ink-200 bg-cream/50 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30"
                  >
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    Send appointment request
                  </button>

                  <p className="text-center text-xs text-ink-500">
                    By submitting, you agree to be contacted by Lucin Medical
                    Centre regarding your request.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="mt-6 lg:mt-7">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between gap-4 bg-white/[0.04] px-6 py-4 backdrop-blur sm:px-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{clinic.address.full}</p>
                  <p className="text-xs text-ink-300">
                    Lat {clinic.maps.lat}°, Long {clinic.maps.lng}°
                  </p>
                </div>
              </div>
              <a
                href={clinic.maps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden flex-none rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:inline-flex"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="relative aspect-[16/9] w-full bg-ink-900 sm:aspect-[21/9]">
              <iframe
                title="Map showing Lucin Medical Centre location in Kasarani, Nairobi"
                src={clinic.maps.embed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-brand-400/40 hover:bg-white/[0.06]"
    >
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-600/15 text-brand-300 ring-1 ring-brand-400/20">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
          {label}
        </p>
        <p className="truncate text-sm font-semibold text-white">{value}</p>
      </div>
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-ink-800"
      >
        {label}
        {required && <span className="text-accent-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-ink-200 bg-cream/50 px-3.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}
