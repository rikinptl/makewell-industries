import productsData from "./products-data.json";

export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  categories: string[];
  cardImage: string;
  images: string[];
  specs: ProductSpec[];
};

export const products = productsData as Product[];

export const categories = [
  {
    slug: "hydraulic-hot-press-machine",
    name: "Hydraulic Hot Press Machine",
    description:
      "High-performance hydraulic hot press machines for plywood, laminates, rubber, fiberglass, metal doors, and more.",
  },
  {
    slug: "wood-working-machine",
    name: "Wood Working Machine",
    description:
      "Precision woodworking machinery including CNC routers, panel saws, beam saws, edge banders, and multiboring machines.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categories.includes(categorySlug));
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
