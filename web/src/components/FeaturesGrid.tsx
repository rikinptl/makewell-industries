"use client";

import { features } from "@/lib/site";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";

export function FeaturesGrid() {
  return (
    <section className="section-pad bg-surface">
      <div className="page-container">
        <FadeIn className="text-center">
          <p className="label-caps mb-4">Why Makewell</p>
          <h2 className="heading-display-md text-foreground">Engineered to perform</h2>
        </FadeIn>
        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="h-full rounded-2xl border border-border bg-background p-8 transition-shadow duration-500 hover:shadow-lg">
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
