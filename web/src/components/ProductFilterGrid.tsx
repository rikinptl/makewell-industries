"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { categories, getFeaturedProducts } from "@/lib/products";
import { FeaturedProductsStrip } from "./FeaturedProductsStrip";
import { ProductGrid } from "./ProductCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { useIsMobile } from "@/hooks/useIsMobile";

type Filter = "all" | string;

export function ProductFilterGrid({
  products,
  variant = "catalog",
}: {
  products: Product[];
  /** Homepage: swipeable featured picks on mobile. Catalog: full list everywhere. */
  variant?: "featured" | "catalog";
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const isMobile = useIsMobile();
  const featured = getFeaturedProducts();

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.categories.includes(filter));

  if (variant === "featured" && isMobile) {
    return <FeaturedProductsStrip products={featured} />;
  }

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-clip">
      <FadeIn>
        <div className="flex flex-wrap gap-2">
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")} label="All" />
          {categories.map((cat) => (
            <FilterButton
              key={cat.slug}
              active={filter === cat.slug}
              onClick={() => setFilter(cat.slug)}
              label={cat.name}
            />
          ))}
        </div>
      </FadeIn>
      <div className="mt-10 w-full min-w-0">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-300 sm:text-sm ${
        active
          ? "bg-brand text-white shadow-[0_4px_14px_rgba(4,89,165,0.25)]"
          : "border border-border bg-surface text-muted hover:border-brand/20 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
