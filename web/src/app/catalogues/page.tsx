import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { catalogues } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catalogues",
  description: "Download Makewell Industries product catalogues.",
};

export default function CataloguesPage() {
  return (
    <main>
      <PageHero
        title="Catalogues"
        crumbs={[{ label: "Home", href: "/" }, { label: "Catalogues" }]}
      />
      <section className="section-pad bg-white">
        <div className="page-container">
          <p className="mb-10 text-lg text-muted">
            Request our product catalogues. Fill in your details to download.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            {catalogues.map((cat) => (
              <div
                key={cat.name}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <div className="relative aspect-[3/4] bg-stone">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="border-t border-border bg-charcoal p-4 text-center">
                  <h3 className="text-sm font-semibold tracking-wide text-white uppercase">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-xl">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
