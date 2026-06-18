import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProductDetailView } from "@/components/ProductDetailView";
import { QuoteForm } from "@/components/QuoteForm";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description || `${product.name} by Makewell Industries`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main>
      <PageHero
        title={product.name}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.shortName },
        ]}
      />
      <ProductDetailView product={product} />
      <section className="section-pad bg-stone">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-display-sm text-center text-foreground">
            Request a quote for this machine
          </h2>
          <div className="mt-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
