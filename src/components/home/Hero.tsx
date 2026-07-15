"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.35]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-deep text-paper"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/brand/logo.png"
          aria-hidden
          initial={reduce ? false : { scale: 1.08, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <source src={siteConfig.media.introVideo} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(14,12,10,0.55)_100%)]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24"
      >
        <motion.p
          className="mb-4 text-xs uppercase tracking-[0.35em] text-champagne-light"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Metuchen, New Jersey
        </motion.p>

        <motion.h1
          className="font-display max-w-3xl text-5xl leading-[1.05] md:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <span className="block text-champagne-light">{t.hero.brand}</span>
          <span className="mt-3 block text-[0.72em] text-paper/95">{t.hero.headline}</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.hero.subhead}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
        >
          <Button href={siteConfig.phoneHref} variant="light">
            <Phone size={16} />
            {t.hero.ctaPrimary}
          </Button>
          <Button href="/services" variant="secondary" className="!border-paper/30 !text-paper hover:!border-champagne hover:!text-champagne">
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>

        <motion.p
          className="mt-8 text-sm tracking-wide text-paper/55"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          {t.hero.trust}
        </motion.p>
      </motion.div>
    </section>
  );
}
