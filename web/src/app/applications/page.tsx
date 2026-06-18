import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Application",
  description: "Industries served by Makewell Industries hydraulic press machines.",
};

export default function ApplicationsPage() {
  return (
    <main>
      <PageHero
        title="Application"
        crumbs={[{ label: "Home", href: "/" }, { label: "Application" }]}
      />
      <section className="section-pad bg-white">
        <div className="page-container">
          <p className="max-w-2xl text-lg text-muted">
            Makewell Industries serves a wide range of manufacturing sectors
            with precision hydraulic presses and woodworking machinery.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.name}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <div className="relative aspect-video">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{industry.name}</h3>
                  <p className="mt-2 text-sm text-muted">
                    Hydraulic press solutions tailored for the {industry.name.toLowerCase()} industry.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
