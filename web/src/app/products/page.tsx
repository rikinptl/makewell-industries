import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductFilterGrid } from "@/components/ProductFilterGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse all Makewell Industries hydraulic hot press and woodworking machines.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        title="Product"
        crumbs={[{ label: "Home", href: "/" }, { label: "Product" }]}
      />
      <section className="section-pad bg-white">
        <div className="page-container">
          <ProductFilterGrid products={products} />
        </div>
      </section>
    </main>
  );
}
