"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScrollScale } from "@/components/motion/Parallax";
import { IMG } from "@/lib/site";

export function LifestyleFeature() {
  return (
    <section className="section-pad bg-background">
      <div className="page-container">
        <div className="hidden md:block">
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
        </div>
        <FadeIn className="max-w-2xl md:mt-12 lg:mt-16">
          <p className="label-caps mb-4">Built to perform</p>
          <h2 className="heading-display-md text-foreground">
            For factories that demand more
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Custom-designed hydraulic presses for plywood, laminates, rubber
            sheets, fiberglass, metal doors, and more — delivered with timely
            service and uncompromising quality.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8 md:hidden">
            {[
              { value: "30+", label: "Years" },
              { value: "500+", label: "Clients" },
              { value: "17", label: "Machines" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-brand">{stat.value}</p>
                <p className="mt-1 text-[0.65rem] font-semibold tracking-wide text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
