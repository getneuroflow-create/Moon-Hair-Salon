"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/Micro";
import { Reveal, Section } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";

export function ReviewsSlider() {
  const { t, locale } = useLanguage();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 6200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const review = reviews[index];

  return (
    <Section className="relative overflow-hidden bg-deep py-24 text-paper md:py-32">
      <div className="gradient-deep absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-champagne/15 blur-3xl" />
        <div className="absolute bottom-0 right-[8%] h-80 w-80 rounded-full bg-blush/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow={t.reviews.eyebrow}
              title={t.reviews.title}
              body={t.reviews.body}
              tone="dark"
            />
          </Reveal>
          <Reveal>
            <Button
              href="/reviews"
              variant="secondary"
              className="!border-paper/25 !text-paper hover:!border-champagne hover:!text-champagne"
            >
              {t.reviews.cta}
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-paper/10 bg-paper/[0.04] p-8 backdrop-blur-sm md:p-12">
            <div
              className="mb-6 flex items-center gap-1 text-champagne"
              aria-hidden
            >
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            <div className="min-h-[12rem] md:min-h-[10rem]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={review.id}
                  initial={reduce ? false : { opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -28 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-display text-2xl leading-snug text-paper md:text-4xl">
                    “{review.quote[locale]}”
                  </p>
                  <footer className="mt-8 text-sm text-paper/60">
                    <span className="font-medium text-paper">
                      {review.author}
                    </span>
                    <span className="mx-2 text-champagne">·</span>
                    {review.theme[locale]}
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {reviews.map((item, i) => (
                <motion.button
                  key={item.id}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  whileHover={reduce ? undefined : { scale: 1.2 }}
                  whileTap={reduce ? undefined : { scale: 0.9 }}
                  animate={{
                    width: i === index ? 32 : 6,
                    backgroundColor:
                      i === index
                        ? "rgba(166,135,86,1)"
                        : "rgba(250,247,242,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className="h-1.5 rounded-full"
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-sm text-paper/50">
                {siteConfig.rating.value}★ · {siteConfig.rating.count}{" "}
                {t.common.reviewsCount}
              </p>
              <div className="flex gap-2 text-paper">
                <IconButton
                  label="Previous review"
                  onClick={() =>
                    setIndex((i) => (i - 1 + reviews.length) % reviews.length)
                  }
                >
                  <ChevronLeft size={18} />
                </IconButton>
                <IconButton
                  label="Next review"
                  onClick={() => setIndex((i) => (i + 1) % reviews.length)}
                >
                  <ChevronRight size={18} />
                </IconButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
