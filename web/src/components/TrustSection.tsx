"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { stats } from "@/lib/site";

export function TrustSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal section-pad">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(4,89,165,0.35),transparent_60%)]"
        aria-hidden
      />
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)]" />
      </motion.div>
      <div className="relative page-container">
        <FadeIn>
          <h2 className="heading-display text-center text-white">
            Trusted by manufacturers across India
          </h2>
        </FadeIn>
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium tracking-widest text-brand-light/80 uppercase">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
