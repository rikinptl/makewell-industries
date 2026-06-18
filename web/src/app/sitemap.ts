import type { MetadataRoute } from "next";
import { categories, getAllProductSlugs } from "@/lib/products";
import { getSiteUrl } from "@/lib/site-url";

const staticPaths = [
  "",
  "/about",
  "/products",
  "/applications",
  "/gallery",
  "/catalogues",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticRoutes = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${base}/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const productRoutes = getAllProductSlugs().map((slug) => ({
    url: `${base}/products/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
