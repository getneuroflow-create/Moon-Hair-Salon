"use client";

import { motion, useReducedMotion } from "framer-motion";
import { withBasePath } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

type LogoProps = {
  className?: string;
  /** Use dark mark on light backgrounds */
  tone?: "light" | "dark";
  priority?: boolean;
};

export function Logo({ className, tone = "light", priority = false }: LogoProps) {
  const reduce = useReducedMotion();
  const src =
    tone === "dark"
      ? siteConfig.media.logoDark
      : siteConfig.media.logo;

  return (
    <motion.span
      className="inline-flex"
      whileHover={
        reduce
          ? undefined
          : { scale: 1.04, rotate: -1.5 }
      }
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${withBasePath(src)}?v=4`}
        alt={siteConfig.name}
        width={160}
        height={88}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        className={cn("h-10 w-auto object-contain md:h-11", className)}
      />
    </motion.span>
  );
}
