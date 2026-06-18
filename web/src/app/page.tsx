import { Hero } from "@/components/Hero";
import { IndustriesBar } from "@/components/IndustriesBar";
import { InquiryWidget } from "@/components/InquiryWidget";
import { LifestyleFeature } from "@/components/LifestyleFeature";
import { MissionSection } from "@/components/MissionSection";
import { ProductFilterGrid } from "@/components/ProductFilterGrid";
import { Testimonials } from "@/components/Testimonials";
import { TrustSection } from "@/components/TrustSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { FadeIn } from "@/components/motion/FadeIn";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="w-full min-w-0 overflow-x-clip">
      <Hero />
      <section id="products" className="section-pad bg-surface">
        <div className="page-container">
          <FadeIn>
            <p className="label-caps mb-4">Our range</p>
            <h2 className="heading-display-md text-foreground">
              Explore our products
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              All {products.length} machines — hydraulic hot press and woodworking
              solutions engineered in Ahmedabad since 1993.
            </p>
          </FadeIn>
          <div className="mt-12">
            <ProductFilterGrid products={products} />
          </div>
        </div>
      </section>
      <LifestyleFeature />
      <IndustriesBar />
      <TrustSection />
      <Testimonials />
      <MissionSection />
      <FeaturesGrid />
      <InquiryWidget />
    </main>
  );
}
