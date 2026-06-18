"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { FadeIn } from "./motion/FadeIn";

export function FeaturedProductsStrip({ products }: { products: Product[] }) {
  return (
    <div className="w-full min-w-0">
      <div className="scroll-contain no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1">
        {products.map((product, i) => (
          <FadeIn
            key={product.slug}
            delay={i * 0.05}
            direction="none"
            className="w-[78vw] max-w-[300px] shrink-0 snap-center"
          >
            <ProductCard product={product} variant="strip" />
          </FadeIn>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center text-sm text-muted sm:text-left">
          Swipe to preview · {products.length} featured of our full range
        </p>
        <Link href="/products" className="btn-primary justify-center py-3.5 text-sm">
          View all machines
        </Link>
      </div>
    </div>
  );
}
