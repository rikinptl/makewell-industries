import { QuoteForm } from "./QuoteForm";
import { FadeIn } from "@/components/motion/FadeIn";

export function InquiryWidget() {
  return (
    <section id="quote" className="section-pad bg-surface">
      <div className="page-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="label-caps mb-4">Get in touch</p>
            <h2 className="heading-display-md text-foreground">
              Pricing in 12 hours
            </h2>
            <p className="mt-6 max-w-md text-muted leading-relaxed">
              Share your requirements and our engineering team will respond with
              a tailored quote for your factory.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} direction="left">
            <QuoteForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
