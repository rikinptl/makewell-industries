import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Makewell Industries for quotes and enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="section-pad bg-white">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Need support? Talk with our team
              </h2>
              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="font-semibold text-foreground">Corporate Office</h3>
                  <p className="mt-2 text-muted">{company.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Contact Number</h3>
                  <ul className="mt-2 space-y-1">
                    {company.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-foreground underline-offset-4 hover:underline"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Send Mail</h3>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-foreground underline-offset-4 hover:underline"
                      >
                        {company.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${company.emailSecondary}`}
                        className="text-foreground underline-offset-4 hover:underline"
                      >
                        {company.emailSecondary}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-stone"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div id="quote">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
