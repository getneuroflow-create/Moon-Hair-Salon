"use client";

import { Star } from "lucide-react";
import { ReviewCta } from "@/components/home/ReviewCta";
import { ReviewsSlider } from "@/components/home/ReviewsSlider";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/Micro";
import { Reveal, Section, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";

export function ReviewsPageContent() {
  const { t, locale } = useLanguage();

  return (
    <div className="bg-deep text-paper">
      <Section className="mx-auto max-w-7xl px-5 pb-8 pt-28 md:px-8 md:pt-36">
        <Reveal>
          <SectionHeading
            title={t.reviewsPage.title}
            body={t.reviewsPage.subtitle}
            align="center"
            tone="dark"
            className="mx-auto"
          />
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-lg">
          <SpotlightCard className="rounded-[1.5rem] border border-paper/10 bg-paper/[0.04] px-6 py-5">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <p className="font-display text-4xl text-paper">
                  {siteConfig.rating.value}
                </p>
                <div
                  className="mt-1 flex justify-center gap-0.5 text-champagne"
                  aria-hidden
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={
                        i < Math.round(siteConfig.rating.value)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>
                <p className="mt-1 text-xs text-paper/50">{t.common.ratingLabel}</p>
              </div>
              <div className="h-12 w-px bg-paper/15" />
              <div className="text-center">
                <p className="font-display text-4xl text-paper">
                  {siteConfig.rating.count}
                </p>
                <p className="mt-1 text-xs text-paper/50">
                  {t.common.reviewsCount}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal className="mt-14">
          <h3 className="text-center text-xs uppercase tracking-[0.28em] text-champagne-light">
            {t.reviewsPage.highlightsTitle}
          </h3>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">
            {t.reviewsPage.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-paper/12 bg-paper/[0.04] px-4 py-2 text-sm text-paper/70 transition-all duration-400 hover:-translate-y-0.5 hover:border-champagne/50 hover:text-paper"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <ReviewsSlider />

      <Section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <Reveal>
          <h3 className="mb-8 text-center font-display text-3xl text-paper md:text-4xl">
            {locale === "es" ? "Más reseñas de Google" : "More Google reviews"}
          </h3>
        </Reveal>

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem key={review.id}>
              <SpotlightCard className="h-full rounded-[1.5rem] border border-paper/10 bg-paper/[0.04] p-6">
                <div className="flex gap-1 text-champagne" aria-hidden>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-paper/70">
                  “{review.quote[locale]}”
                </p>
                <p className="mt-5 text-sm font-medium text-paper">
                  {review.author}
                </p>
                <p className="text-xs text-champagne">{review.theme[locale]}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 text-center">
          <Button
            href={siteConfig.maps.review}
            external
            variant="secondary"
            className="!border-paper/25 !text-paper hover:!border-champagne hover:!text-champagne"
          >
            {t.common.leaveReview}
          </Button>
        </Reveal>
      </Section>

      <ReviewCta />
    </div>
  );
}
