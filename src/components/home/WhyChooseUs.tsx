"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Crown,
  MessageCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Section, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

const icons = [Sparkles, MessageCircle, TrendingUp, Crown];

export function WhyChooseUs() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <Section className="relative overflow-hidden py-24 text-paper md:py-32">
      <div className="gradient-wine absolute inset-0 -z-10" />
      <div className="texture-grain absolute inset-0 -z-10 opacity-20" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.2fr] lg:gap-16 lg:items-center">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-paper/70">
            {t.why.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            {t.why.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/75 md:text-lg">
            {t.why.body}
          </p>

          <div className="mt-12 flex items-stretch gap-8">
            <div>
              <p className="font-display text-5xl md:text-6xl">
                {siteConfig.rating.value}★
              </p>
              <p className="mt-2 text-sm text-paper/65">
                {t.why.stats.rating}
              </p>
            </div>
            <div className="w-px bg-paper/25" aria-hidden />
            <div>
              <p className="font-display text-5xl md:text-6xl">
                {siteConfig.rating.count}
              </p>
              <p className="mt-2 text-sm text-paper/65">
                {t.why.stats.reviews}
              </p>
            </div>
          </div>
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {t.why.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={item.title}>
                <motion.article
                  className="h-full rounded-2xl border border-paper/15 bg-paper/[0.08] p-5 backdrop-blur-[2px] md:p-6"
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -4, backgroundColor: "rgba(255,255,255,0.14)" }
                  }
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                >
                  <Icon
                    className="mb-4 text-champagne-light"
                    size={22}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    {item.body}
                  </p>
                </motion.article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}
