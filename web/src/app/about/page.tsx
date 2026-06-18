import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Makewell Industries — hydraulic press manufacturer in Ahmedabad since 1993.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About us"
        crumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />
      <section className="section-pad bg-white">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-foreground">Makewell Industries</h2>
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Founded in 1993 in Ahmedabad, Gujarat, Makewell Industries is a
                leading manufacturer of all kinds of Hydraulic Presses, including
                Hydraulic Presses for Plywood, Laminates, Rubber Sheets, Recycled
                Plastic Waste Sheets, Fiberglass, Flush Doors, Metal Doors, Fire
                Doors, Cold Press Machines, and more.
              </p>
              <p>
                With over three decades of industry experience, we are committed
                to delivering cutting-edge machinery that meets the highest
                standards of durability, efficiency, and performance. Our
                products are renowned for their robust construction, premium
                quality, and competitive pricing.
              </p>
              <p>
                At Makewell Industries, timely delivery and customer satisfaction
                are at the core of everything we do. Our ability to understand
                client requirements and deliver tailor-made solutions has helped
                us establish a strong and ever-growing customer base.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={`${IMG}/about/about-us.webp`}
                alt="Makewell Industries"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-3">
            <div className="rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold text-foreground">Vision</h3>
              <p className="mt-4 text-muted leading-relaxed">
                To become a leading force in engineering and project management,
                delivering exceptional results that exceed client expectations.
              </p>
            </div>
            <div className="rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold text-foreground">Mission</h3>
              <p className="mt-4 text-muted leading-relaxed">
                &ldquo;To see a Makewell machine powering every woodworking
                factory—in every city, every state, across our nation.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold text-foreground">Core Values</h3>
              <ul className="mt-4 space-y-2 text-muted">
                <li>• Ethics — We do what&apos;s right, always.</li>
                <li>• Transparency — Clear communication at every level.</li>
                <li>• Responsibility — Owning our commitments with integrity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
