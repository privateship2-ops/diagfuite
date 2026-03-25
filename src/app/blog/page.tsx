import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog-posts";
import { Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog DiagFuite — Conseils, assurance et techniques de détection de fuite",
  description:
    "Articles et guides sur la détection de fuite, la convention IRSI, les dégâts des eaux, les responsabilités locataires/propriétaires. Conseils d'experts.",
  alternates: { canonical: "https://diagfuite.fr/blog" },
};

const categories = ["Tous", "Assurance", "Conseils", "Réglementation", "Techniques"];

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Blog DiagFuite — Conseils & guides
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Tout savoir sur la détection de fuite, l'assurance dégât des eaux et vos droits. Articles rédigés par nos experts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <span
                key={cat}
                className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 text-brand-text/70 whitespace-nowrap cursor-default hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <Tag className="size-3.5" />
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 lg:py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.07}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
