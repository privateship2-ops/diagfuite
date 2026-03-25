import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Avis clients DiagFuite — Toulouse et grande couronne",
  description:
    "Témoignages et avis de nos clients à Toulouse : particuliers, syndics, assureurs. Note globale 5/5. Plus de 200 interventions réalisées.",
  alternates: { canonical: "https://diagfuite.fr/temoignages" },
};

export default function TemoignagesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Témoignages" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Avis clients DiagFuite — Toulouse et grande couronne
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-6 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <span className="text-white/70 text-lg">5/5 — Plus de 200 interventions réalisées</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <FadeIn key={t.id} delay={index * 0.07}>
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col h-full">
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-brand-text/75 leading-relaxed flex-1 italic">
                    &ldquo;{t.content}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/15 flex items-center justify-center text-brand-blue font-bold text-sm shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">{t.name}</p>
                      <p className="text-xs text-brand-text/50">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 text-center flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/prestations"
                className="inline-flex items-center justify-center border-2 border-brand-dark text-brand-dark font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-dark hover:text-white transition-colors"
              >
                Voir nos prestations
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
