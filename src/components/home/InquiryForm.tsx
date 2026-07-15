"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal, Section } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

const fieldClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-paper outline-none placeholder:text-paper/35 transition-all duration-400 focus:border-champagne focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(166,135,86,0.22)]";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const { t, locale } = useLanguage();
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const hours = siteConfig.hours[locale];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    if (siteConfig.email) {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `Inquiry: ${service || "Moon Hair Studio"}`,
      )}&body=${encodeURIComponent(body)}`;
    }

    setSent(true);
    form.reset();
  }

  const inner = (
    <>
      {!compact ? (
        <>
          <div className="gradient-deep absolute inset-0 -z-10" />
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
            <div className="absolute right-[12%] top-10 h-64 w-64 rounded-full bg-champagne/15 blur-3xl" />
          </div>
        </>
      ) : null}

      <div className={compact ? "" : "mx-auto max-w-7xl px-5 md:px-8"}>
        <div className={compact ? "" : "grid gap-12 lg:grid-cols-2 lg:gap-16"}>
          {!compact ? (
            <Reveal direction="left">
              <SectionHeading
                eyebrow={t.inquiry.eyebrow}
                title={t.inquiry.title}
                body={t.inquiry.body}
                tone="dark"
              />
              <div className="mt-8 space-y-3 text-sm text-paper/65">
                <p>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-paper transition-colors hover:text-champagne"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
                <p>{siteConfig.address.full}</p>
              </div>

              <div className="mt-10">
                <h3 className="text-xs uppercase tracking-[0.28em] text-champagne-light">
                  {t.contactPage.hours}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-paper/70">
                  {hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex justify-between gap-4 border-b border-white/8 py-2"
                    >
                      <span>{row.day}</span>
                      <span
                        className={
                          row.time === "Closed" || row.time === "Cerrado"
                            ? "text-paper/40"
                            : "text-champagne-light"
                        }
                      >
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}

          <Reveal direction={compact ? "up" : "right"} delay={compact ? 0 : 0.08}>
            <motion.form
              onSubmit={onSubmit}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8"
              noValidate
              whileHover={
                reduce
                  ? undefined
                  : {
                      boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                      borderColor: "rgba(166,135,86,0.35)",
                    }
              }
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block text-paper/60">
                    {t.inquiry.name}
                  </span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-paper/60">
                    {t.inquiry.phone}
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="mb-2 block text-paper/60">
                    {t.inquiry.email}
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="mb-2 block text-paper/60">
                    {t.inquiry.service}
                  </span>
                  <select
                    name="service"
                    required
                    className={fieldClass}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-deep text-paper">
                      {locale === "es" ? "Seleccionar" : "Select"}
                    </option>
                    {t.inquiry.serviceOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-deep text-paper"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="mb-2 block text-paper/60">
                    {t.inquiry.message}
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className={fieldClass}
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" variant="light">
                  {t.inquiry.submit}
                </Button>
                {sent ? (
                  <p className="text-sm text-champagne" role="status">
                    {t.inquiry.success}
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-paper/45">
                {t.inquiry.note}
              </p>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </>
  );

  if (compact) {
    return <div>{inner}</div>;
  }

  return (
    <Section
      id="inquiry"
      className="relative overflow-hidden bg-deep py-24 text-paper md:py-32"
    >
      {inner}
    </Section>
  );
}
