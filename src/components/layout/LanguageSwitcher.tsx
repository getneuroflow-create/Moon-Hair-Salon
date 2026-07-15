"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "inline-flex items-center rounded-full border border-current/20 p-1 text-xs tracking-wider",
        className,
      )}
      role="group"
      aria-label={t.nav.language}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      {(["en", "es"] as const).map((code) => {
        const active = locale === code;
        return (
          <motion.button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            whileTap={reduce ? undefined : { scale: 0.92 }}
            className={cn(
              "relative rounded-full px-3 py-1.5 uppercase",
              active ? "text-ink" : "text-current/60 hover:text-current",
            )}
          >
            {active ? (
              <motion.span
                layoutId={reduce ? undefined : "lang-pill"}
                className="absolute inset-0 rounded-full bg-champagne-light/90"
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              />
            ) : null}
            <motion.span
              className="relative z-10"
              animate={active && !reduce ? { scale: [1, 1.08, 1] } : { scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              {code === "en" ? "EN" : "ES"}
            </motion.span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
