"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/assets";

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.06]);

  const videoSrc = withBasePath(siteConfig.media.introVideo);
  const posterSrc = withBasePath("/images/loader/salon-interior.jpg");

  // iOS / GitHub Pages: muted + playsInline still sometimes need an explicit play()
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          // Autoplay blocked — keep poster visible; retry on first gesture
        });
      }
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    const unlock = () => tryPlay();
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("click", unlock, { once: true });

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("click", unlock);
    };
  }, [videoSrc]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-mocha text-paper"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* Fallback image if video hasn't painted yet */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${posterSrc})` }}
          aria-hidden
        />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          aria-hidden
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Keep atmosphere, but let the footage read */}
        <div className="absolute inset-0 bg-gradient-to-r from-mocha/75 via-mocha/35 to-mocha/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/45 to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-5 sm:pb-20 sm:pt-36 md:px-8 md:pb-28"
      >
        <motion.p
          className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-champagne-light"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          Metuchen, New Jersey
        </motion.p>

        <motion.h1
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.22 }}
        >
          <span className="font-display block text-5xl leading-[0.95] text-paper md:text-7xl lg:text-[5.5rem]">
            {t.hero.brand}
          </span>
          <span className="mt-5 block max-w-xl text-lg font-medium leading-snug text-paper/90 md:text-2xl">
            {t.hero.headline}
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.38 }}
        >
          {t.hero.subhead}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.52 }}
        >
          <Button href={siteConfig.phoneHref} variant="wine">
            <Phone size={16} />
            {t.hero.ctaPrimary}
          </Button>
          <Button
            href="/#booking"
            variant="secondary"
            className="!border-paper/35 !text-paper hover:!border-paper hover:!bg-paper/10 hover:!text-paper"
          >
            {t.booking.submit}
          </Button>
        </motion.div>

        <motion.p
          className="mt-10 text-sm tracking-wide text-paper/55"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {t.hero.trust}
        </motion.p>
      </motion.div>
    </section>
  );
}
