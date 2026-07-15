"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import {
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/** Subtle magnetic pull toward the cursor */
export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex", className)}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/** Soft spotlight that follows the cursor on cards */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(166,135,86,0.14), transparent 45%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <motion.div
      className={cn("group/spot relative overflow-hidden", className)}
      onMouseMove={onMove}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      {!reduce ? (
        <motion.div
          className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
          style={{ background }}
          aria-hidden
        />
      ) : null}
      <div className="relative z-[2]">{children}</div>
    </motion.div>
  );
}

/** Icon circle with press + spin-on-hover feel */
export function IconButton({
  children,
  className,
  href,
  label,
  external,
  onClick,
  expanded,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  label: string;
  external?: boolean;
  onClick?: () => void;
  expanded?: boolean;
}) {
  const reduce = useReducedMotion();
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border border-current/20 p-2.5",
    className,
  );

  const motionProps = {
    whileHover: reduce
      ? undefined
      : { y: -2, scale: 1.06, rotate: -4 },
    whileTap: reduce ? undefined : { scale: 0.92 },
    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
  };

  if (href) {
    return (
      <Magnetic>
        <motion.a
          href={href}
          aria-label={label}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...motionProps}
        >
          {children}
        </motion.a>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <motion.button
        type="button"
        aria-label={label}
        aria-expanded={expanded}
        className={classes}
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </motion.button>
    </Magnetic>
  );
}

/** Pressable scale for chips / tabs */
export function Pressable({
  children,
  className,
  active,
  onClick,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
} & HTMLMotionProps<"button">) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      className={className}
      onClick={onClick}
      whileHover={reduce ? undefined : { y: -1, scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      animate={
        active && !reduce
          ? { scale: 1.02 }
          : { scale: 1 }
      }
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
