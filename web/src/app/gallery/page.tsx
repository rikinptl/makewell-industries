import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { galleryImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of Makewell Industries machines and installations.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Gallery"
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section className="section-pad bg-white">
        <div className="page-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={src}
                  alt={`Makewell installation ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
