"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";

export function ProductDetailView({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = product.images.length > 0 ? product.images : [product.cardImage];

  return (
    <section className="section-pad bg-white">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-stone">
              <Image
                src={images[activeImage]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                      className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 ${
                      i === activeImage ? "border-charcoal" : "border-border"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
              {product.name}
            </h2>
            {product.description && (
              <p className="mt-6 leading-relaxed text-muted">
                {product.description}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact#quote" className="btn-primary px-6 py-3.5 text-center text-sm sm:px-8">
                Make an Inquiry
              </Link>
              <Link
                href="/catalogues"
                className="btn-ghost justify-center border border-border rounded-full px-6 py-3.5 text-sm sm:px-8"
              >
                Download Catalogue
              </Link>
            </div>
          </div>
        </div>

        {product.specs.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground">Specifications</h3>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[280px] text-left text-sm">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr
                      key={`${spec.label}-${i}`}
                      className={i % 2 === 0 ? "bg-stone/60" : "bg-surface"}
                    >
                      <td className="px-4 py-3 font-semibold text-foreground sm:px-6 sm:py-4">
                        {spec.label}
                      </td>
                      <td className="px-4 py-3 text-muted sm:px-6 sm:py-4">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
