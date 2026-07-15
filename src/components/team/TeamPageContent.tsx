"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BaseImage as Image } from "@/components/ui/BaseImage";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/Micro";
import { FadeImage, Reveal, Section } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { teamMembers } from "@/data/team";

export function TeamPageContent() {
  const { t, locale } = useLanguage();
  const reduce = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);

  function scrollBy(dir: -1 | 1) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(340, el.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <Section className="bg-ivory pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.3fr] lg:items-end lg:gap-14">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-wine">
              {t.nav.team}
            </p>
            <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
              {t.teamPage.title}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              {t.teamPage.subtitle}
            </p>
            <p className="mt-3 text-sm text-wine">{t.teamPage.note}</p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={siteConfig.phoneHref} variant="wine" className="w-full sm:w-auto">
                {t.teamPage.cta}
              </Button>
              <div className="flex justify-center gap-2 text-ink sm:justify-start">
                <IconButton label="Previous stylists" onClick={() => scrollBy(-1)}>
                  <ChevronLeft size={18} />
                </IconButton>
                <IconButton label="Next stylists" onClick={() => scrollBy(1)}>
                  <ChevronRight size={18} />
                </IconButton>
              </div>
            </div>
          </Reveal>

          <div
            ref={scroller}
            className="flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {teamMembers.map((member, i) => (
              <motion.article
                key={member.id}
                className="w-[min(78vw,280px)] shrink-0 overflow-hidden rounded-[1.75rem] bg-sand"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                whileHover={reduce ? undefined : { y: -4 }}
              >
                <FadeImage>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name[locale]}
                      fill
                      sizes="280px"
                      quality={90}
                      className="object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                      loading="lazy"
                    />
                    {member.placeholder ? (
                      <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-3 py-1 text-[10px] uppercase tracking-wider text-ink">
                        {t.common.placeholder}
                      </span>
                    ) : null}
                  </div>
                </FadeImage>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink">
                    {member.name[locale]}
                  </h3>
                  <p className="mt-1 text-sm text-wine">{member.role[locale]}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft line-clamp-3">
                    {member.bio[locale]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
