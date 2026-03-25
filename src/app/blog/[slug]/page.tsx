import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { BlogCard } from "@/components/blog/BlogCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { blogPosts, getBlogPost, getRelatedBlogPosts } from "@/data/blog-posts";
import { Clock, Calendar, Tag, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://diagfuite.fr/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://diagfuite.fr/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedBlogPosts(post.relatedPosts);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    author: {
      "@type": "Organization",
      name: "DiagFuite",
      url: "https://diagfuite.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "DiagFuite",
      url: "https://diagfuite.fr",
    },
    mainEntityOfPage: `https://diagfuite.fr/blog/${post.slug}`,
  };

  const faqSchema = post.faqItems
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-brand-dark py-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 to-brand-dark/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-blue/20 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full border border-brand-blue/30 flex items-center gap-1">
              <Tag className="size-3" />
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">{post.h1}</h1>
          <p className="text-white/70 text-lg mb-5">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readingTime} min de lecture
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article */}
            <article className="lg:col-span-3">
              {/* Featured image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* FAQ section in article */}
              {post.faqItems && post.faqItems.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <h2 className="text-xl font-bold text-brand-dark mb-5">
                    Questions fréquentes sur ce sujet
                  </h2>
                  <FaqAccordion items={post.faqItems} />
                </div>
              )}

              {/* Related pages links */}
              {post.relatedPages.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-brand-dark/60 uppercase tracking-wide mb-3">
                    Pages associées
                  </h3>
                  <div className="flex flex-col gap-2">
                    {post.relatedPages.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-brand-blue hover:underline"
                      >
                        <ArrowRight className="size-3.5 shrink-0" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 flex flex-col gap-5">
                {/* CTA box */}
                <div className="bg-brand-dark text-white rounded-2xl p-6">
                  <h3 className="font-bold mb-2">Vous avez une fuite ?</h3>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">
                    DiagFuite intervient sous 48h à Toulouse et grande couronne. Devis gratuit.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-2.5 px-4 rounded-xl transition-colors text-sm"
                  >
                    Devis gratuit
                  </Link>
                  <a
                    href="tel:+33614468777"
                    className="block text-center mt-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Ou appelez le 06 14 46 87 77
                  </a>
                </div>

                {/* Tarifs box */}
                <div className="bg-brand-bg border border-gray-100 rounded-2xl p-6">
                  <h3 className="font-bold text-brand-dark mb-2">Nos tarifs</h3>
                  <p className="text-sm text-brand-text/60 mb-3">
                    À partir de <strong className="text-brand-dark">150€ HT</strong> pour une recherche de fuite.
                  </p>
                  <Link
                    href="/tarifs"
                    className="text-sm text-brand-blue font-medium hover:underline"
                  >
                    Voir les tarifs de recherche de fuite →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-brand-bg border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-8">Articles connexes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((relPost) => (
                <BlogCard key={relPost.slug} post={relPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
