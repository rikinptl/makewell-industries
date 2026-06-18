"use client";

import { testimonials } from "@/lib/site";
import { FadeIn } from "@/components/motion/FadeIn";

export function Testimonials() {
  return (
    <section className="section-pad overflow-x-clip bg-background">
      <div className="page-container">
        <FadeIn>
          <p className="label-caps mb-4">Testimonials</p>
          <h2 className="heading-display-md text-foreground">What clients say</h2>
        </FadeIn>
        <div className="scroll-contain no-scrollbar mt-12 flex gap-4 pb-2 sm:gap-5">
          {testimonials.map((item, i) => (
            <FadeIn
              key={item.name}
              delay={i * 0.08}
              direction="none"
              className="w-[85vw] max-w-[340px] flex-shrink-0 sm:w-[320px] lg:w-[380px]"
            >
              <article className={`h-full rounded-2xl border border-border p-6 sm:p-8 ${item.bg}`}>
                <p className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-5 sm:mt-8 sm:pt-6">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted">{item.location}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
