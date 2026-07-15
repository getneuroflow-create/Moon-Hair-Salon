"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

export function ReviewCta() {
  const { t } = useLanguage();

  return (
    <Section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#110e0c_0%,#2a1816_45%,#110e0c_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-50">
        <motion.div
          className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-wine/30 blur-3xl"
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center text-paper md:px-8">
        <Stagger>
          <StaggerItem>
            <div
              className="mb-4 flex justify-center gap-1 text-champagne-light"
              aria-hidden
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xs uppercase tracking-[0.28em] text-champagne-light">
              {t.reviewCta.eyebrow}
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="font-display mt-4 text-3xl md:text-5xl">
              {t.reviewCta.title}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-paper/70 md:text-lg">
              {t.reviewCta.body}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8">
              <Button href={siteConfig.maps.review} external variant="light">
                {t.reviewCta.button}
              </Button>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </Section>
  );
}
