import type { Transition, Variants } from "framer-motion";

export const easeLuxury = [0.22, 1, 0.36, 1] as const;

export const softTransition: Transition = {
  duration: 0.65,
  ease: easeLuxury,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
  mass: 0.85,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeLuxury },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeLuxury },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeLuxury },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: easeLuxury },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: easeLuxury },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeLuxury },
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeLuxury,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeLuxury },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.35, ease: easeLuxury },
  },
};

export const reducedMotionTransition: Transition = {
  duration: 0.01,
};
