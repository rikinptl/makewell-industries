import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

type Crumb = { label: string; href?: string };

export function PageHero({
  title,
  crumbs,
}: {
  title: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="border-b border-border bg-charcoal section-pad">
      <div className="page-container">
        <FadeIn>
          <p className="label-caps mb-4">Makewell Industries</p>
          <h1 className="heading-display-sm text-white">{title}</h1>
          <nav className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
            {crumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </FadeIn>
      </div>
    </section>
  );
}
