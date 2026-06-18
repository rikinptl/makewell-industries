"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { categories, getProductsByCategory, type CategorySlug } from "@/lib/products";
import { company } from "@/lib/site";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Application", href: "/applications" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategorySlug>(categories[0].slug);

  const activeProducts = getProductsByCategory(activeCategory);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-header border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="hidden border-b border-border/60 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-8 py-2.5 text-xs tracking-wide text-muted">
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="hover:text-foreground">
            {company.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt={company.name}
            width={130}
            height={32}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Product
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {productOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-full pt-3"
                >
                  <div className="flex min-w-[640px] overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
                    <div className="w-64 border-r border-border bg-stone/50 p-2">
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/${cat.slug}`}
                          onMouseEnter={() => setActiveCategory(cat.slug)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                            activeCategory === cat.slug
                              ? "bg-surface text-foreground shadow-sm"
                              : "text-muted hover:bg-surface/80 hover:text-foreground"
                          }`}
                        >
                          {cat.name}
                          <span className="text-muted">›</span>
                        </Link>
                      ))}
                      <Link
                        href="/products"
                        className="mt-1 block rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-surface/80"
                      >
                        View all products
                      </Link>
                    </div>
                    <div className="max-h-96 w-96 overflow-y-auto p-2">
                      {activeProducts.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="block rounded-xl px-4 py-2.5 text-sm text-muted transition-colors hover:bg-stone hover:text-foreground"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {mainLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#quote"
            className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Get Quote
          </Link>
          <button
            type="button"
            onClick={() => {
              setMobileOpen((open) => {
                if (open) setMobileProductsOpen(false);
                return !open;
              });
            }}
            className="rounded-lg p-2 lg:hidden"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-surface lg:hidden"
          >
            <nav className="max-h-[70vh] overflow-y-auto px-4 py-4">
              <Link
                href="/contact#quote"
                onClick={closeMobileMenu}
                className="btn-primary mb-4 w-full py-3.5 text-center text-sm"
              >
                Get Quote
              </Link>

              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-stone"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-stone"
              >
                About us
              </Link>

              <div className="rounded-xl">
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-stone"
                  aria-expanded={mobileProductsOpen}
                >
                  Products
                  <svg
                    className={`h-4 w-4 text-muted transition-transform duration-200 ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-0.5 pb-2 pl-2">
                        <Link
                          href="/products"
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light/50"
                        >
                          View all products
                        </Link>
                        {categories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/${cat.slug}`}
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-4 py-2.5 text-sm text-muted hover:bg-stone hover:text-foreground"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {mainLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-stone"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
