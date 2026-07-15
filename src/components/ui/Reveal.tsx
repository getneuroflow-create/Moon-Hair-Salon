"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import {
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  sectionReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

const directionVariants = {
  up: fadeUp,
  down: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  fade: fadeIn,
  scale: scaleIn,
} as const;

/** Mobile Safari often fails stricter amounts on tall sections — keep this soft. */
const softViewport = {
  once: true,
  amount: 0.05 as const,
  margin: "0px 0px -8% 0px" as const,
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.05,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={directionVariants[direction]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
} & Omit<
  HTMLMotionProps<"section">,
  "children" | "initial" | "whileInView" | "variants"
>;

export function Section({
  children,
  className,
  id,
  delay = 0,
  ...rest
}: SectionProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section id={id} className={className} {...(rest as object)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={softViewport}
      variants={sectionReveal}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

export function Stagger({
  children,
  className,
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={softViewport}
      variants={fast ? staggerFast : staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={directionVariants[direction]}
      whileHover={{
        y: -3,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.2, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={softViewport}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
