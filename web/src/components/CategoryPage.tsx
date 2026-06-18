import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductCard";
import { QuoteForm } from "@/components/QuoteForm";
import {
  getCategoryBySlug,
  getProductsByCategory,
  type CategorySlug,
} from "@/lib/products";

export function CategoryPage({ slug }: { slug: CategorySlug }) {
  const category = getCategoryBySlug(slug)!;
  const categoryProducts = getProductsByCategory(slug);

  return (
    <main>
      <PageHero
        title={category.name}
        crumbs={[
          { label: "Home", href: "/" },
          { label: category.name },
        ]}
      />
      <section className="section-pad bg-white">
        <div className="page-container">
          <p className="mb-8 max-w-2xl text-base text-muted sm:mb-10 sm:text-lg">{category.description}</p>
          <ProductGrid products={categoryProducts} />
        </div>
      </section>
      <section className="section-pad bg-stone">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-display-sm text-center text-foreground">
            Have a question or need a quote?
          </h2>
          <div className="mt-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
