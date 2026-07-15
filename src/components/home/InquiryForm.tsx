"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BaseImage as Image } from "@/components/ui/BaseImage";
import { MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FadeImage, Reveal, Section } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

const fieldClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-paper outline-none placeholder:text-paper/35 transition-all duration-400 focus:border-champagne focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(155,53,48,0.22)]";

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

  const formFields = (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="block text-sm">
        <span className="mb-2 block text-paper/60">{t.inquiry.name}</span>
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>
      <label className="block text-sm">
        <span className="mb-2 block text-paper/60">{t.inquiry.phone}</span>
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={fieldClass}
        />
      </label>
      <label className="block text-sm sm:col-span-2">
        <span className="mb-2 block text-paper/60">{t.inquiry.email}</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      <label className="block text-sm sm:col-span-2">
        <span className="mb-2 block text-paper/60">{t.inquiry.service}</span>
        <select name="service" required className={fieldClass} defaultValue="">
          <option value="" disabled className="bg-deep text-paper">
            {locale === "es" ? "Seleccionar" : "Select"}
          </option>
          {t.inquiry.serviceOptions.map((option) => (
            <option key={option} value={option} className="bg-deep text-paper">
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm sm:col-span-2">
        <span className="mb-2 block text-paper/60">{t.inquiry.message}</span>
        <textarea name="message" required rows={4} className={fieldClass} />
      </label>
    </div>
  );

  if (compact) {
    return (
      <Reveal direction="up">
        <motion.form
          onSubmit={onSubmit}
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8"
          noValidate
          whileHover={
            reduce
              ? undefined
              : {
                  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                  borderColor: "rgba(155,53,48,0.4)",
                }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne-light">
              {t.inquiry.eyebrow}
            </p>
            <h3 className="font-display mt-3 text-3xl text-paper md:text-4xl">
              {t.inquiry.formTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/60">
              {t.inquiry.body}
            </p>
          </div>
          {formFields}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit" variant="light">
              {t.inquiry.submit}
            </Button>
            {sent ? (
              <p className="text-sm text-champagne-light" role="status">
                {t.inquiry.success}
              </p>
            ) : null}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-paper/45">
            {t.inquiry.note}
          </p>
        </motion.form>
      </Reveal>
    );
  }

  return (
    <Section
      id="inquiry"
      className="relative overflow-x-hidden bg-deep py-16 text-paper sm:py-24 md:py-32"
    >
      <div className="gradient-deep absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-champagne-light">
            {t.inquiry.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-[2rem] leading-tight sm:text-4xl md:text-5xl">
            {t.inquiry.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/70 sm:text-base md:text-lg">
            {t.inquiry.body}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Visit / hours panel */}
          <Reveal direction="left">
            <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]">
              <FadeImage>
                <div className="relative h-56 overflow-hidden md:h-64">
                  <Image
                    src="/images/services/blowdry.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                </div>
              </FadeImage>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-champagne-light">
                  {t.contactPage.hours}
                </h3>
                <ul className="mt-4 space-y-0">
                  {hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex justify-between gap-4 border-b border-white/8 py-3 text-sm last:border-0"
                    >
                      <span className="text-paper/65">{row.day}</span>
                      <span
                        className={
                          row.time === "Closed" || row.time === "Cerrado"
                            ? "text-paper/35"
                            : "font-medium text-champagne-light"
                        }
                      >
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3 border-t border-white/10 pt-6">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-3 text-sm text-paper/80 transition hover:text-champagne-light"
                  >
                    <Phone size={16} className="text-champagne" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.maps.listing}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-paper/80 transition hover:text-champagne-light"
                  >
                    <MapPin size={16} className="mt-0.5 shrink-0 text-champagne" />
                    <span>{siteConfig.address.full}</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form panel — same surface language */}
          <Reveal direction="right" delay={0.06}>
            <form
              onSubmit={onSubmit}
              className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 md:p-8"
              noValidate
            >
              <h3 className="font-display text-3xl md:text-4xl">
                {t.inquiry.formTitle}
              </h3>
              <p className="mt-2 text-sm text-paper/55">
                {locale === "es"
                  ? "Cuéntanos qué necesitas y te contactaremos pronto."
                  : "Tell us what you need and we’ll get back to you soon."}
              </p>

              <div className="mt-8 flex-1">{formFields}</div>

              <div className="mt-8">
                <Button type="submit" variant="wine" className="w-full sm:w-auto">
                  {t.inquiry.submit}
                </Button>
                {sent ? (
                  <p className="mt-3 text-sm text-champagne-light" role="status">
                    {t.inquiry.success}
                  </p>
                ) : null}
                <p className="mt-4 text-xs leading-relaxed text-paper/45">
                  {t.inquiry.note}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
