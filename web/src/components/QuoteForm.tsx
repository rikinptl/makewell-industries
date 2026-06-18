"use client";

import { company } from "@/lib/site";

export function QuoteForm({ id }: { id?: string }) {
  return (
    <form
      id={id}
      className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:rounded-3xl sm:p-8"
      onSubmit={(event) => event.preventDefault()}
    >      <h3 className="text-xl font-semibold text-foreground">Request a quote</h3>
      <p className="mt-2 text-sm text-muted">
        Our experts respond within 12 hours.
      </p>
      <div className="mt-6 space-y-4">
        {["Your name", "Email address", "Phone number", "City"].map((placeholder) => (
          <input
            key={placeholder}
            type={placeholder.includes("Email") ? "email" : placeholder.includes("Phone") ? "tel" : "text"}
            placeholder={placeholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-charcoal"
          />
        ))}
        <textarea
          placeholder="Describe your requirement"
          rows={3}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-charcoal"
        />
        <button type="submit" className="btn-primary w-full py-4 text-sm">
          Send inquiry
        </button>
      </div>
      <p className="mt-4 text-center text-xs text-muted">
        Or call{" "}
        <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="font-semibold text-foreground">
          {company.phone}
        </a>
      </p>
    </form>
  );
}
