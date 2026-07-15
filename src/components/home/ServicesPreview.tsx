"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/Micro";
import {
  FadeImage,
  Reveal,
  Section,
  Stagger,
  StaggerItem,
} from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/services";

export function ServicesPreview() {
  const { t, locale } = useLanguage();
  const featured = services.filter((s) => s.featured).slice(0, 8);

  return (
    <Section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow={t.servicesPreview.eyebrow}
              title={t.servicesPreview.title}
              body={t.servicesPreview.body}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Button href="/services" variant="secondary">
              {t.servicesPreview.cta}
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <StaggerItem key={service.id}>
              <Link href="/services" className="group block">
                <SpotlightCard className="overflow-hidden rounded-2xl border border-ink/8 bg-paper transition-shadow duration-500 group-hover:shadow-[0_16px_40px_rgba(26,22,18,0.08)]">
                  <FadeImage>
                    <div className="relative mx-auto h-48 w-full max-w-[280px] overflow-hidden sm:h-52 sm:max-w-none">
                      <Image
                        src={service.image}
                        alt={service.imageAlt[locale]}
                        fill
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 40vw, 240px"
                        quality={90}
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                  </FadeImage>
                  <div className="p-4">
                    <h3 className="font-display text-xl text-ink transition-colors duration-400 group-hover:text-champagne">
                      {service.name[locale]}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-ink-soft">
                      {service.description[locale]}
                    </p>
                    <p className="mt-2.5 text-[10px] uppercase tracking-[0.2em] text-champagne">
                      {service.priceLabel[locale]}
                    </p>
                  </div>
                </SpotlightCard>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
