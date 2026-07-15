"use client";

import Image from "next/image";
import {
  FadeImage,
  Reveal,
  Section,
  Stagger,
  StaggerItem,
} from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <Section className="relative overflow-hidden py-24 md:py-32">
      <div className="gradient-atmosphere absolute inset-0 -z-10" />
      <div className="texture-grain absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal direction="left">
          <FadeImage>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-champagne/10" />
              <div className="overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/services/hair-styling.jpg"
                  alt="Moon Hair Studio styling result"
                  width={900}
                  height={1100}
                  quality={90}
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="mx-auto h-72 w-full max-w-md object-cover object-center md:h-80"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 max-w-[14rem] rounded-2xl bg-deep/95 p-5 text-paper shadow-xl md:right-6">
                <p className="font-display text-3xl text-champagne-light">4.4★</p>
                <p className="mt-1 text-sm text-paper/70">89 Google reviews</p>
              </div>
            </div>
          </FadeImage>
        </Reveal>

        <div>
          <Reveal direction="right">
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              body={t.about.body}
            />
          </Reveal>
          <Stagger className="mt-8 grid gap-4">
            {t.about.points.map((point) => (
              <StaggerItem key={point} direction="left">
                <div className="flex items-start gap-3 border-l border-champagne/50 pl-4">
                  <p className="text-sm leading-relaxed text-ink-soft md:text-base">
                    {point}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
