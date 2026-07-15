"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/Micro";
import { FadeImage, Reveal, Section, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { teamMembers } from "@/data/team";

export function TeamPageContent() {
  const { t, locale } = useLanguage();

  return (
    <Section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            title={t.teamPage.title}
            body={t.teamPage.subtitle}
            align="center"
            className="mx-auto"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-champagne">
            {t.teamPage.note}
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <StaggerItem key={member.id}>
              <SpotlightCard className="group overflow-hidden rounded-[1.75rem] border border-ink/8 bg-paper">
                <FadeImage>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name[locale]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
                    {member.placeholder ? (
                      <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[10px] uppercase tracking-wider text-ink">
                        {t.common.placeholder}
                      </span>
                    ) : null}
                  </div>
                </FadeImage>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink">
                    {member.name[locale]}
                  </h3>
                  <p className="mt-1 text-sm text-champagne">{member.role[locale]}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-soft">
                    {member.specialty[locale]}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {member.bio[locale]}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 text-center">
          <Button href={siteConfig.phoneHref}>{t.teamPage.cta}</Button>
        </Reveal>
      </div>
    </Section>
  );
}
