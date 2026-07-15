"use client";

import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Lock,
  Check,
} from "lucide-react";
import { BaseImage as Image } from "@/components/ui/BaseImage";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FadeImage, Reveal, Section, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import {
  addMonths,
  buildCalendarDays,
  formatDisplayDate,
  getDayStatus,
  getTimeSlots,
  isPastDay,
  isSalonClosed,
  monthLabel,
  sameDay,
  startOfMonth,
  type DayStatus,
} from "@/data/booking";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const weekdayKeys = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

function statusDot(status: DayStatus) {
  if (status === "available") return "bg-emerald-400";
  if (status === "partial") return "bg-amber-400";
  if (status === "full") return "bg-rose-400";
  return "bg-white/20";
}

export function BookingSection() {
  const { t, locale } = useLanguage();
  const bookable = services;

  const [serviceId, setServiceId] = useState("");
  const [month, setMonth] = useState(() => startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedService = services.find((s) => s.id === serviceId) ?? null;
  const slots = selectedDate ? getTimeSlots(selectedDate) : [];
  const cells = buildCalendarDays(month);

  function pickDate(day: Date) {
    const status = getDayStatus(day);
    if (status === "closed" || status === "full" || isPastDay(day)) return;
    setSelectedDate(day);
    setSelectedTime(null);
    setError(null);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedService) {
      setError(t.booking.needService);
      return;
    }
    if (!selectedDate) {
      setError(t.booking.needDate);
      return;
    }
    if (!selectedTime) {
      setError(t.booking.needTime);
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const notes = String(data.get("notes") || "");

    const body = [
      `Booking request — Moon Hair Studio`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${selectedService.name.en} (from $${selectedService.priceFrom})`,
      `Date: ${formatDisplayDate(selectedDate, "en")}`,
      `Time: ${selectedTime}`,
      "",
      notes,
    ].join("\n");

    if (siteConfig.email) {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `Appointment: ${selectedService.name.en}`,
      )}&body=${encodeURIComponent(body)}`;
    }

    setSent(true);
    setError(null);
    form.reset();
  }

  const fieldClass =
    "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-paper outline-none placeholder:text-paper/35 transition-all duration-400 focus:border-champagne focus:bg-white/[0.07]";

  return (
    <Section id="booking" className="relative overflow-hidden bg-deep py-24 text-paper md:py-32">
      <div className="gradient-deep absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-champagne-light">
            {t.booking.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl lg:text-6xl">
            {t.booking.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/70 md:text-lg">
            {t.booking.body}
          </p>
          <p className="mt-3 text-sm text-paper/50">{t.booking.hoursNote}</p>
        </Reveal>

        {/* Stats */}
        <Reveal className="mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-3 gap-4 rounded-[1.5rem] border border-white/10 px-4 py-8 md:px-10">
            {[
              { value: "5,000+", label: t.booking.stats.clients },
              { value: "15+", label: t.booking.stats.years },
              { value: String(siteConfig.rating.count), label: t.booking.stats.reviews },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl text-champagne-light md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-paper/55 md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Service picker — cards + explicit select */}
        <div className="mt-14">
          <h3 className="mb-6 text-center text-xs font-medium uppercase tracking-[0.28em] text-champagne-light">
            {t.booking.selectService}
          </h3>

          <Reveal className="mx-auto mb-8 max-w-xl">
            <label className="block text-sm">
              <span className="mb-2 block text-center text-paper/60">
                {t.booking.selectService}
              </span>
              <select
                value={serviceId}
                onChange={(e) => {
                  setServiceId(e.target.value);
                  setError(null);
                }}
                className="w-full rounded-full border border-white/15 bg-deep px-5 py-3.5 text-sm text-paper outline-none transition focus:border-champagne"
                required
              >
                <option value="" disabled className="bg-deep text-paper">
                  {locale === "es"
                    ? "Selecciona un servicio"
                    : "Choose a service"}
                </option>
                {services.map((service) => (
                  <option
                    key={service.id}
                    value={service.id}
                    className="bg-deep text-paper"
                  >
                    {service.name[locale]} — {t.booking.from} $
                    {service.priceFrom}
                  </option>
                ))}
              </select>
            </label>
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bookable.map((service) => {
              const active = service.id === serviceId;
              return (
                <StaggerItem key={service.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setServiceId(service.id);
                      setError(null);
                      document
                        .getElementById("booking-details")
                        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }}
                    className={cn(
                      "group w-full overflow-hidden rounded-[1.5rem] border text-left transition-all duration-400",
                      active
                        ? "border-champagne shadow-[0_0_0_1px_rgba(155,53,48,0.5)]"
                        : "border-white/10 hover:border-white/25",
                    )}
                  >
                    <FadeImage>
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.imageAlt[locale]}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={85}
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/20 to-transparent" />
                      </div>
                    </FadeImage>
                    <div className="bg-deep/90 p-5">
                      <h4 className="font-display text-2xl text-champagne-light">
                        {service.name[locale]}
                      </h4>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-paper/65">
                        {service.description[locale]}
                      </p>
                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-champagne">
                            {t.booking.from}
                          </p>
                          <p className="font-display text-3xl text-champagne-light">
                            ${service.priceFrom}
                          </p>
                        </div>
                        <p className="inline-flex items-center gap-1.5 text-xs text-paper/55">
                          <Clock size={13} />
                          {service.duration[locale]}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "mt-4 inline-flex rounded-full border px-4 py-1.5 text-xs uppercase tracking-wider",
                          active
                            ? "border-champagne bg-champagne/20 text-champagne-light"
                            : "border-white/20 text-paper/80",
                        )}
                      >
                        {active ? t.booking.selected : t.booking.bookNow}
                      </span>
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        {/* Calendar + times */}
        <Reveal className="mt-14">
          <h3 className="mb-6 text-center text-xs font-medium uppercase tracking-[0.28em] text-champagne-light">
            {t.booking.selectDateTime}
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Calendar */}
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
              <div className="flex items-center justify-between bg-gradient-to-r from-champagne to-mocha px-5 py-4">
                <button
                  type="button"
                  aria-label="Previous month"
                  className="rounded-full bg-paper/15 p-2 text-paper transition hover:bg-paper/25"
                  onClick={() => setMonth((m) => addMonths(m, -1))}
                >
                  <ChevronLeft size={18} />
                </button>
                <p className="font-display text-xl capitalize text-paper md:text-2xl">
                  {monthLabel(month, locale)}
                </p>
                <button
                  type="button"
                  aria-label="Next month"
                  className="rounded-full bg-paper/15 p-2 text-paper transition hover:bg-paper/25"
                  onClick={() => setMonth((m) => addMonths(m, 1))}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="p-5">
                <div className="mb-3 grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-wider text-champagne-light/80">
                  {weekdayKeys.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {cells.map((day, i) => {
                    if (!day) return <span key={`e-${i}`} />;
                    const status = getDayStatus(day);
                    const disabled =
                      status === "closed" ||
                      status === "full" ||
                      isPastDay(day) ||
                      isSalonClosed(day);
                    const selected =
                      selectedDate && sameDay(day, selectedDate);
                    return (
                      <button
                        key={day.toISOString()}
                        type="button"
                        disabled={disabled}
                        onClick={() => pickDate(day)}
                        className={cn(
                          "relative flex aspect-square flex-col items-center justify-center rounded-xl text-sm transition",
                          selected
                            ? "bg-champagne text-paper shadow-[0_0_20px_rgba(155,53,48,0.45)]"
                            : disabled
                              ? "cursor-not-allowed text-paper/25"
                              : "text-paper/85 hover:bg-white/10",
                        )}
                      >
                        {day.getDate()}
                        {!disabled || status === "full" ? (
                          <span
                            className={cn(
                              "mt-0.5 h-1.5 w-1.5 rounded-full",
                              selected ? "bg-paper" : statusDot(status),
                            )}
                          />
                        ) : null}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.18em] text-paper/55">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {t.booking.available}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    {t.booking.partial}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    {t.booking.full}
                  </span>
                </div>
              </div>
            </div>

            {/* Time slots */}
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-lg bg-champagne/25 p-2 text-champagne-light">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="font-display text-xl text-paper">
                      {t.booking.selectTime}
                    </p>
                    <p className="text-sm text-paper/55">
                      {selectedDate
                        ? formatDisplayDate(selectedDate, locale)
                        : "—"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-2">
                {!selectedDate ? (
                  <p className="sm:col-span-2 text-sm text-paper/45">
                    {t.booking.needDate}
                  </p>
                ) : slots.length === 0 ? (
                  <p className="sm:col-span-2 text-sm text-paper/45">
                    {t.booking.closed}
                  </p>
                ) : (
                  slots.map((slot) => {
                    const booked = slot.status === "booked";
                    const selected = selectedTime === slot.time;
                    return (
                      <button
                        key={slot.time}
                        type="button"
                        disabled={booked}
                        onClick={() => {
                          setSelectedTime(slot.time);
                          setError(null);
                        }}
                        className={cn(
                          "relative flex min-h-[5.5rem] flex-col items-center justify-center rounded-xl border px-3 py-3 text-center transition",
                          booked
                            ? "cursor-not-allowed border-white/5 bg-paper/90 text-ink/45"
                            : selected
                              ? "border-champagne bg-champagne/25 text-paper"
                              : "border-white/10 bg-white/[0.03] text-paper/85 hover:border-champagne/50",
                        )}
                      >
                        <Clock
                          size={14}
                          className={cn(
                            "mb-1.5",
                            booked ? "text-ink/35" : "text-champagne-light",
                          )}
                        />
                        {booked ? (
                          <span className="text-xs leading-snug line-through">
                            {slot.time}
                            {slot.label ? ` · ${slot.label}` : ""}
                          </span>
                        ) : (
                          <span className="text-sm font-medium">
                            {slot.time}
                            <span className="mt-1 block text-[10px] uppercase tracking-wider opacity-70">
                              {t.booking.available}
                            </span>
                          </span>
                        )}
                        <span className="mt-2">
                          {booked ? (
                            <Lock size={14} className="text-ink/40" />
                          ) : (
                            <Check
                              size={14}
                              className={
                                selected ? "text-champagne-light" : "text-paper/35"
                              }
                            />
                          )}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              <div className="flex flex-wrap gap-4 border-t border-white/10 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-paper/50">
                <span>{t.booking.available}</span>
                <span>{t.booking.booked}</span>
                <span>{t.booking.selected}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Details + submit */}
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <form
            id="booking-details"
            onSubmit={onSubmit}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 md:p-8"
            noValidate
          >
            <h3 className="font-display text-2xl text-paper md:text-3xl">
              {t.booking.yourDetails}
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm sm:col-span-2">
                <span className="mb-2 block text-paper/60">
                  {t.booking.selectService} *
                </span>
                <select
                  name="service"
                  value={serviceId}
                  required
                  onChange={(e) => {
                    setServiceId(e.target.value);
                    setError(null);
                  }}
                  className={fieldClass}
                >
                  <option value="" disabled className="bg-deep text-paper">
                    {locale === "es"
                      ? "Selecciona un servicio"
                      : "Choose a service"}
                  </option>
                  {services.map((service) => (
                    <option
                      key={service.id}
                      value={service.id}
                      className="bg-deep text-paper"
                    >
                      {service.name[locale]} — {t.booking.from} $
                      {service.priceFrom} · {service.duration[locale]}
                    </option>
                  ))}
                </select>
              </label>

              {selectedService ? (
                <p className="sm:col-span-2 text-sm text-champagne-light">
                  {selectedService.name[locale]} · {t.booking.from} $
                  {selectedService.priceFrom}
                  {selectedDate && selectedTime
                    ? ` · ${formatDisplayDate(selectedDate, locale)} · ${selectedTime}`
                    : ""}
                </p>
              ) : null}

              <label className="block text-sm sm:col-span-1">
                <span className="mb-2 block text-paper/60">{t.booking.name}</span>
                <input name="name" required autoComplete="name" className={fieldClass} />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-paper/60">{t.booking.phone}</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-2 block text-paper/60">{t.booking.email}</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-2 block text-paper/60">{t.booking.notes}</span>
                <textarea name="notes" rows={3} className={fieldClass} />
              </label>
            </div>

            {error ? (
              <p className="mt-4 text-sm text-rose-300" role="alert">
                {error}
              </p>
            ) : null}
            {sent ? (
              <p className="mt-4 text-sm text-champagne-light" role="status">
                {t.booking.success}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" variant="wine">
                {t.booking.submit}
              </Button>
              <a
                href={siteConfig.phoneHref}
                className="text-sm text-paper/60 transition hover:text-champagne-light"
              >
                {siteConfig.phone}
              </a>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-paper/45">
              {t.booking.note}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
