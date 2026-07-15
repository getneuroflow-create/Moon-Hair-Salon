"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const reduce = useReducedMotion();

  const content = (
    <>
      {eyebrow ? (
        <motion.p
          variants={reduce ? undefined : fadeUp}
          className={cn(
            "mb-3 text-xs uppercase tracking-[0.28em]",
            tone === "dark" ? "text-champagne-light" : "text-champagne",
          )}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={reduce ? undefined : fadeUp}
        className={cn(
          "font-display text-3xl leading-tight md:text-5xl",
          tone === "dark" ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </motion.h2>
      {body ? (
        <motion.p
          variants={reduce ? undefined : fadeUp}
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            tone === "dark" ? "text-paper/70" : "text-ink-soft",
          )}
        >
          {body}
        </motion.p>
      ) : null}
    </>
  );

  if (reduce) {
    return (
      <div
        className={cn(
          "max-w-2xl",
          align === "center" && "mx-auto text-center",
          className,
        )}
      >
        {content}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {content}
    </motion.div>
  );
}
