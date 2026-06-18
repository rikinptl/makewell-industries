"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useIsMobile";
import { IMG } from "@/lib/site";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const enableMotion = !isMobile && !reducedMotion;

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", enableMotion ? "15%" : "0%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, enableMotion ? 1.04 : 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, enableMotion ? 0 : 1]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, enableMotion ? -40 : 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] overflow-x-clip hero-mesh pt-24 pb-8 lg:pt-32"
    >
      <div className="page-container px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity: textOpacity, y: textY }} className="text-center">
          <FadeIn delay={0.1}>
            <p className="label-caps mb-6">Since 1993 · Ahmedabad</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="heading-display mx-auto max-w-5xl text-foreground">
              <span className="block">Pressing for</span>
              <span className="block">every factory,</span>
              <span className="block text-brand">every industry</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Precision hydraulic presses and woodworking machinery — engineered
              with uncompromising quality for modern manufacturing.
            </p>
          </FadeIn>
          <FadeIn delay={0.45} className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link href="/contact#quote" className="btn-primary px-8 py-4 text-sm sm:text-base">
              Get a quote
            </Link>
            <Link href="/products" className="btn-ghost justify-center py-3 text-sm sm:text-base">
              Explore products
              <span>→</span>
            </Link>
          </FadeIn>
        </motion.div>

        <div className="relative mx-auto mt-10 w-full max-w-5xl overflow-hidden sm:mt-20">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative w-full overflow-hidden rounded-xl bg-charcoal sm:rounded-3xl"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent sm:from-charcoal/40" />
            <div className="relative aspect-[2.4/1] w-full sm:hidden">
              <Image
                src={`${IMG}/homepage/banner/makewell-b1.webp`}
                alt="Makewell hydraulic press machine"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <Image
              src={`${IMG}/homepage/banner/makewell-b1.webp`}
              alt="Makewell hydraulic press machine"
              width={1400}
              height={788}
              className="hidden h-auto w-full max-w-full object-cover sm:block"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 h-0.5 w-full max-w-xs origin-center bg-gradient-to-r from-transparent via-brand to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
