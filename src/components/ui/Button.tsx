"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";
import { Magnetic } from "@/components/ui/Micro";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "wine";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-paper hover:bg-wine hover:text-paper shadow-[0_12px_32px_rgba(23,19,18,0.14)]",
  wine: "bg-wine text-paper hover:bg-wine-deep shadow-[0_12px_32px_rgba(155,53,48,0.35)]",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-wine hover:text-wine",
  ghost: "bg-transparent text-ink hover:text-wine",
  light:
    "bg-paper text-ink hover:bg-wine hover:text-paper shadow-[0_12px_32px_rgba(0,0,0,0.18)]",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: ComponentProps<"button">["type"];
  onClick?: () => void;
  external?: boolean;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  external,
  ariaLabel,
}: Props) {
  const reduce = useReducedMotion();
  const classes = cn(
    "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide",
    variants[variant],
    className,
  );

  const content = (
    <>
      {!reduce ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
        />
      ) : null}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  const motionProps = {
    whileHover: reduce
      ? undefined
      : {
          y: -3,
          scale: 1.03,
          transition: { type: "spring" as const, stiffness: 400, damping: 22 },
        },
    whileTap: reduce
      ? undefined
      : { scale: 0.96, transition: { duration: 0.12 } },
  };

  if (href) {
    if (external) {
      return (
        <Magnetic strength={0.18}>
          <motion.a
            href={href}
            className={classes}
            aria-label={ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            {...motionProps}
          >
            {content}
          </motion.a>
        </Magnetic>
      );
    }
    return (
      <Magnetic strength={0.18}>
        <motion.div {...motionProps} className="inline-flex">
          <Link href={href} className={classes} aria-label={ariaLabel}>
            {content}
          </Link>
        </motion.div>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.18}>
      <motion.button
        type={type}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {content}
      </motion.button>
    </Magnetic>
  );
}
