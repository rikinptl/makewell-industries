"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { categories } from "@/lib/products";

const categoryLabels: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c.slug, c.name])
);

export function ProductCard({
  product,
  variant = "default",
}: {
  product: Product;
  variant?: "default" | "strip";
}) {
  const categoryLabel =
    product.categories.map((slug) => categoryLabels[slug]).find(Boolean) ?? "Product";

  const isStrip = variant === "strip";

  return (
    <motion.div
      className="min-w-0 w-full max-w-full"
      whileHover={isStrip ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group block w-full max-w-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:border-brand/30 hover:shadow-[0_12px_40px_rgba(4,89,165,0.1)]"
      >
        <div
          className={`relative w-full overflow-hidden bg-stone ${
            isStrip ? "aspect-[5/3]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={product.cardImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="border-t border-border bg-surface p-4 sm:p-5">
          <p className="truncate text-[0.65rem] font-semibold tracking-wide text-muted uppercase">
            {categoryLabel}
          </p>
          <h3 className="mt-1.5 text-sm font-semibold leading-snug break-words text-foreground sm:text-base">
            {product.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
