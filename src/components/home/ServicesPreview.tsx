"use client";

import { BaseImage as Image } from "@/components/ui/BaseImage";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  FadeImage,
  Reveal,
  Section,
  Stagger,
  StaggerItem,
} from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesPreview() {
  const { t, locale } = useLanguage();
  const featured = services.filter((s) => s.featured).slice(0, 3);

  return (
    <Section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-16">
        <Reveal direction="left">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-wine">
            {t.servicesPreview.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
            {t.servicesPreview.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            {t.servicesPreview.body}
          </p>
          <div className="mt-8">
            <Button href="/services" variant="wine">
              {t.servicesPreview.cta}
            </Button>
          </div>
        </Reveal>

        <Stagger className="flex items-end gap-3 sm:gap-4 md:gap-5">
          {featured.map((service, i) => (
            <StaggerItem
              key={service.id}
              className={cn(
                "min-w-0 flex-1",
                i === 1 ? "pb-0" : "pb-6 md:pb-10",
              )}
            >
              <Link href="/services" className="group block">
                <div
                  className={cn(
                    "relative overflow-hidden rounded-[1.75rem] bg-sand transition-transform duration-500 group-hover:-translate-y-1",
                    i === 1
                      ? "aspect-[3/4.4] sm:aspect-[3/4.6]"
                      : "aspect-[3/3.8] sm:aspect-[3/4]",
                  )}
                >
                  <FadeImage className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.imageAlt[locale]}
                      fill
                      sizes="(max-width: 768px) 33vw, 22vw"
                      quality={90}
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </FadeImage>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-paper px-3 py-1.5 text-[11px] font-semibold tracking-wide text-ink shadow-sm sm:left-4 sm:top-4 sm:text-xs">
                    {service.name[locale]}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
