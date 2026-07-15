"use client";

import { BaseImage as Image } from "@/components/ui/BaseImage";
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
      <div className="texture-grain absolute inset-0 -z-10 opacity-50" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal direction="left">
          <FadeImage>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-mocha/10" />
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/services/hair-styling.jpg"
                  alt="Moon Hair Studio styling result"
                  width={900}
                  height={1100}
                  quality={90}
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="mx-auto h-80 w-full max-w-md object-cover object-center md:h-[26rem]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 left-4 rounded-2xl bg-wine px-5 py-4 text-paper shadow-xl md:left-8">
                <p className="font-display text-3xl">4.4★</p>
                <p className="mt-0.5 text-sm text-paper/80">89 Google reviews</p>
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
          <Stagger className="mt-8 grid gap-3">
            {t.about.points.map((point) => (
              <StaggerItem key={point} direction="left">
                <div className="rounded-2xl border border-ink/8 bg-paper/80 px-5 py-4 transition-colors duration-400 hover:border-wine/30">
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
