"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades content up the first time it scrolls into view. */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Children appear one after the other. Pair with `StaggerItem`. */
export function Stagger({
  children,
  className,
  gap = 0.06,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  as?: "div" | "ul" | "ol";
}) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
  style?: CSSProperties;
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 10 },
        shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
      }}
    >
      {children}
    </Component>
  );
}

/** Thin bar at the top of the window tracking how far down the page you are. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
    />
  );
}
