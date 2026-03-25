import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Accueil", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://diagfuite.fr${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 sm:px-6 lg:px-8 bg-brand-bg border-b border-gray-100">
        <ol className="max-w-7xl mx-auto flex items-center gap-1 flex-wrap text-sm text-brand-text/60">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="size-3.5 shrink-0" />}
              {item.href && index < allItems.length - 1 ? (
                <Link href={item.href} className="hover:text-brand-blue transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={index === allItems.length - 1 ? "text-brand-text font-medium" : ""}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
