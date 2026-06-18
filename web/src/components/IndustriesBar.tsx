"use client";

import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { industries } from "@/lib/site";

export function IndustriesBar() {
  return (
    <section id="industries" className="border-y border-border section-pad bg-stone">
      <div className="page-container">
        <FadeIn className="text-center">
          <p className="label-caps mb-4">Applications</p>
          <h2 className="heading-display-sm text-foreground">Industries we serve</h2>
        </FadeIn>
        <Stagger className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border bg-surface shadow-sm sm:h-24 sm:w-24">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-semibold tracking-wide text-foreground uppercase sm:text-sm">
                  {industry.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
