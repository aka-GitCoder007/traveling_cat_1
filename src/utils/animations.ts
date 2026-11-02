import type { Variants, TargetAndTransition } from 'framer-motion';

export const customEase = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: custom * 0.1,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const heroWordReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3 + i * 0.12,
    },
  }),
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const buttonHover: TargetAndTransition = {
  scale: 1.02,
  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
};

export const buttonTap: TargetAndTransition = {
  scale: 0.98,
};

export const cardHover: TargetAndTransition = {
  y: -6,
  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
};
