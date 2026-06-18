"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollScale } from "@/components/motion/Parallax";
import { IMG } from "@/lib/site";

export function LifestyleFeature() {
  return (
    <section className="section-pad bg-background">
      <div className="page-container">
        <ScrollScale>
          <div className="overflow-hidden rounded-2xl lg:rounded-3xl">
            <Image
              src={`${IMG}/homepage/banner/makewell-b5.webp`}
              alt="Makewell machine installation"
              width={1400}
              height={600}
              className="h-[45vh] min-h-[280px] w-full object-cover"
            />
          </div>
        </ScrollScale>
        <FadeIn className="mt-12 max-w-2xl lg:mt-16">
          <p className="label-caps mb-4">Built to perform</p>
          <h2 className="heading-display-md text-foreground">
            For factories that demand more
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Custom-designed hydraulic presses for plywood, laminates, rubber
            sheets, fiberglass, metal doors, and more — delivered with timely
            service and uncompromising quality.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
