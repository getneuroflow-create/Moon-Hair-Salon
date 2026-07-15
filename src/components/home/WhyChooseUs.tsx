"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export function WhyChooseUs() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <Section className="relative overflow-hidden bg-deep py-24 text-paper md:py-32">
      <div className="gradient-deep absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={t.why.eyebrow}
          title={t.why.title}
          tone="dark"
          align="center"
          className="mx-auto"
        />

        <Stagger className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="group h-full border-t border-champagne/30 pt-6"
                whileHover={reduce ? undefined : { y: -4, borderColor: "rgba(166,135,86,1)" }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
              >
                <p className="text-xs tracking-[0.28em] text-champagne-light/70 transition-colors duration-500 group-hover:text-champagne-light">
                  0{i + 1}
                </p>
                <h3 className="font-display mt-4 text-2xl transition-transform duration-500 group-hover:translate-x-1">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">
                  {item.body}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
