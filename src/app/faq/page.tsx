import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur la recherche de fuite à Toulouse",
  description:
    "Toutes les réponses à vos questions : prix, assurance, convention IRSI, locataire vs propriétaire, délai d'intervention, rapport expertise.",
  alternates: { canonical: "https://diagfuite.fr/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumb items={[{ label: "FAQ" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Questions fréquentes — Recherche de fuite à Toulouse
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Toutes les réponses aux questions que nos clients nous posent le plus souvent.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />

          <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-6 text-center">
            <p className="text-brand-text/70 text-sm mb-4">
              Vous n&apos;avez pas trouvé la réponse à votre question ?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm"
              >
                Nous contacter directement
              </Link>
              <Link
                href="/assurance"
                className="inline-flex items-center justify-center border border-brand-dark text-brand-dark font-medium px-6 py-2.5 rounded-xl hover:bg-brand-dark hover:text-white transition-colors text-sm"
              >
                Comprendre la prise en charge assurance
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-brand-text/50">
            Voir aussi :{" "}
            <Link href="/tarifs" className="text-brand-blue hover:underline">nos tarifs</Link>
            {" · "}
            <Link href="/blog" className="text-brand-blue hover:underline">notre blog</Link>
            {" · "}
            <Link href="/prestations" className="text-brand-blue hover:underline">nos prestations</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
