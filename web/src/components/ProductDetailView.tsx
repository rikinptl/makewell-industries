"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";

function decodeSpecText(text: string) {
  return text
    .replace(/&ge;/g, "≥")
    .replace(/&le;/g, "≤")
    .replace(/&amp;/g, "&");
}

export function ProductDetailView({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = product.images.length > 0 ? product.images : [product.cardImage];
  const features = product.features ?? [];
  const hasSpecTable = Boolean(product.specTable?.rows.length);
  const hasSpecs = product.specs.length > 0;

  return (
    <section className="section-pad bg-surface">
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
                      i === activeImage ? "border-brand" : "border-border"
                    }`}
                  >
                    <Image src={img} alt="" fill sizes="80px" className="object-cover" />
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
              <p className="mt-6 leading-relaxed text-muted">{product.description}</p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact#quote" className="btn-primary px-6 py-3.5 text-center text-sm sm:px-8">
                Make an Inquiry
              </Link>
              <Link
                href="/catalogues"
                className="btn-ghost justify-center rounded-full border border-border px-6 py-3.5 text-sm sm:px-8"
              >
                Download Catalogue
              </Link>
            </div>
          </div>
        </div>

        {features.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground">Key features</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(hasSpecTable || hasSpecs) && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground">Specifications</h3>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
              {hasSpecTable && product.specTable ? (
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead className="bg-brand text-white">
                    <tr>
                      {product.specTable.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-semibold sm:px-6">
                          {decodeSpecText(header)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.specTable.rows.map((row, i) => (
                      <tr
                        key={`${row[0]}-${i}`}
                        className={i % 2 === 0 ? "bg-stone/60" : "bg-surface"}
                      >
                        {row.map((cell, j) => (
                          <td
                            key={`${cell}-${j}`}
                            className={`px-4 py-3 sm:px-6 ${
                              j === 0 ? "font-semibold text-foreground" : "text-muted"
                            }`}
                          >
                            {decodeSpecText(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full min-w-[280px] text-left text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr
                        key={`${spec.label}-${i}`}
                        className={i % 2 === 0 ? "bg-stone/60" : "bg-surface"}
                      >
                        <td className="px-4 py-3 font-semibold text-foreground sm:px-6 sm:py-4">
                          {decodeSpecText(spec.label)}
                        </td>
                        <td className="px-4 py-3 text-muted sm:px-6 sm:py-4">
                          {decodeSpecText(spec.value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
