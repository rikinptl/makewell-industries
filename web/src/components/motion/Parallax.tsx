"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useIsMobile";

export function ScrollScale({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();
  const enableMotion = !isMobile && !reducedMotion;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, enableMotion ? 1 : 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [enableMotion ? 0.6 : 1, 1]);

  return (
    <div ref={ref} className={`w-full max-w-full overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ scale, opacity }} className="w-full max-w-full">
        {children}
      </motion.div>
    </div>
  );
}
