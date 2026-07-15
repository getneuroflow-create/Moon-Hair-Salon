"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

const SESSION_KEY = "moon-preloader-seen";

export function ScissorsPreloader({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"cut" | "brand" | "out">("cut");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen === "1" || reduce) {
      setVisible(false);
      onComplete();
      return;
    }

    const brandTimer = window.setTimeout(() => setPhase("brand"), 1800);
    const outTimer = window.setTimeout(() => setPhase("out"), 2800);
    const doneTimer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(false);
      onComplete();
    }, 3400);

    return () => {
      window.clearTimeout(brandTimer);
      window.clearTimeout(outTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onComplete, reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-deep text-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          aria-live="polite"
          aria-busy="true"
          role="status"
        >
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-champagne/20 blur-3xl" />
          </div>

          <div className="relative flex w-full max-w-md flex-col items-center px-6">
            <div className="relative h-40 w-72">
              {/* Hair strands */}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <motion.span
                  key={i}
                  className="absolute top-0 w-[2px] origin-top rounded-full bg-gradient-to-b from-champagne-light to-champagne/40"
                  style={{
                    left: `${18 + i * 10}%`,
                    height: `${70 + (i % 3) * 10}%`,
                  }}
                  initial={{ scaleY: 1, opacity: 0.9 }}
                  animate={
                    phase === "cut"
                      ? { scaleY: 1, opacity: 0.9 }
                      : {
                          scaleY: [1, 0.45],
                          y: [0, 18],
                          opacity: [0.9, 0],
                        }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.9 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}

              {/* Scissors */}
              <motion.svg
                viewBox="0 0 120 60"
                className="absolute left-1/2 top-1/2 h-16 w-32 -translate-x-1/2 -translate-y-1/2 text-paper"
                initial={{ x: -90, opacity: 0 }}
                animate={{ x: 20, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden
              >
                <motion.g
                  animate={{ rotate: [12, -8, 12, -4, 0] }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{ originX: "40px", originY: "30px" }}
                >
                  <circle cx="18" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="18" cy="42" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <path
                    d="M24 22 L55 30 L100 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 38 L55 30 L100 42"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="55" cy="30" r="3" fill="currentColor" />
                </motion.g>
              </motion.svg>
            </div>

            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={
                phase === "brand" || phase === "out"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 12 }
              }
              transition={{ duration: 0.55 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${siteConfig.media.logo}?v=4`}
                alt={siteConfig.name}
                className="mx-auto h-14 w-auto object-contain"
              />
              <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-champagne-light/80">
                {t.preloader.label}
              </p>
            </motion.div>

            <motion.div
              className="mt-8 h-px w-40 overflow-hidden bg-paper/15"
              aria-hidden
            >
              <motion.div
                className="h-full bg-champagne"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
