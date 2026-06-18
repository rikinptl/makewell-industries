"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const ease = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.9,
  direction = "up",
  amount,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-40px" });
  const isMobile = useIsMobile();

  const move = amount ?? (isMobile ? 20 : 36);

  const offset = {
    up: { y: move },
    down: { y: -move },
    left: { x: isMobile ? 0 : move },
    right: { x: isMobile ? 0 : -move },
    none: {},
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration, delay, ease }}
      className={`min-w-0 max-w-full ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={`min-w-0 w-full max-w-full ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease },
    },
  };

  return (
    <motion.div variants={item} className={`min-w-0 ${className ?? ""}`}>
      {children}
    </motion.div>
  );
}
