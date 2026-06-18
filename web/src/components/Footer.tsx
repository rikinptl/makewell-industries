import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/lib/products";
import { company } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
        aria-hidden
      />
      <div className="border-b border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="page-container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Image
            src="https://makewellindustries.co.in/assets/images/homepage/logo/Makewell-white.svg"
            alt={company.name}
            width={150}
            height={38}
          />
          <div className="text-center sm:text-right">
            <p className="text-xs tracking-widest text-white/40 uppercase">For enquiries</p>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-xl font-semibold text-white"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="page-container px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase">Quick links</h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Gallery", href: "/gallery" },
                { label: "Application", href: "/applications" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              {categories[0].name}
            </h4>
            <ul className="mt-5 space-y-3">
              {products
                .filter((p) => p.categories.includes(categories[0].slug))
                .map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {p.shortName}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              {categories[1].name}
            </h4>
            <ul className="mt-5 space-y-3">
              {products
                .filter((p) => p.categories.includes(categories[1].slug))
                .map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {p.shortName}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>{company.address}</li>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} {company.legalName}
        </div>
      </div>
    </footer>
  );
}
