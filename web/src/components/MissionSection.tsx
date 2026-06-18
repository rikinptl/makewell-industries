"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useIsMobile";
import { IMG } from "@/lib/site";

export function MissionSection() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();
  const enableMotion = !isMobile && !reducedMotion;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, enableMotion ? -40 : 0]);

  return (
    <section ref={ref} id="about" className="section-pad overflow-x-clip bg-stone">
      <div className="page-container">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <FadeIn>
              <p className="label-caps mb-6">Our purpose</p>
              <h2 className="heading-display-md text-foreground">
                Meet pressing without compromise
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Our mission: to see a Makewell machine powering every woodworking
                factory — in every city, every state, across our nation.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="mt-10 space-y-5 border-l border-border pl-6">
                {[
                  "Ethics — We do what's right, always.",
                  "Transparency — Clear communication at every level.",
                  "Responsibility — Owning our commitments with integrity.",
                ].map((value) => (
                  <p key={value} className="text-sm leading-relaxed text-muted">
                    {value}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction={isMobile ? "up" : "left"}>
            <div className="min-w-0 overflow-hidden rounded-2xl lg:rounded-3xl">
              <motion.div style={{ y: imageY }}>
                <Image
                  src={`${IMG}/about/about-us.webp`}
                  alt="Makewell Industries factory"
                  width={700}
                  height={500}
                  className="h-auto w-full max-w-full object-cover"
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
