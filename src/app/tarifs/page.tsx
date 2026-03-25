import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/sections/FadeIn";
import { CheckCircle, Info, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarif recherche de fuite à Toulouse — Devis gratuit | DiagFuite",
  description:
    "Tarifs de recherche de fuite non destructive à Toulouse. Fourchettes de prix, prise en charge assurance, convention IRSI, TVA. Devis gratuit sous 24h.",
  alternates: { canonical: "https://diagfuite.fr/tarifs" },
  openGraph: {
    title: "Tarif recherche de fuite à Toulouse — Devis gratuit",
    description: "Consultez nos tarifs de détection de fuite non destructive à Toulouse. Prise en charge assurance possible.",
    url: "https://diagfuite.fr/tarifs",
  },
};

const tarifs = [
  {
    label: "Appartement / Maison",
    description: "Fuite simple sur installation intérieure (cuisine, salle de bain, WC)",
    priceMin: 150,
    priceMax: 250,
    duration: "1h – 1h30",
    popular: true,
  },
  {
    label: "Canalisation encastrée",
    description: "Fuite sur canalisation dans les murs ou sous dalle béton",
    priceMin: 250,
    priceMax: 380,
    duration: "2h – 3h",
    popular: false,
  },
  {
    label: "Canalisation enterrée",
    description: "Fuite sur réseau enterré (jardin, parking, voirie privée)",
    priceMin: 300,
    priceMax: 450,
    duration: "2h30 – 4h",
    popular: false,
  },
  {
    label: "Copropriété / Immeuble",
    description: "Sinistre en immeuble collectif, colonnes montantes, parties communes",
    priceMin: 300,
    priceMax: 500,
    duration: "3h – 5h",
    popular: false,
  },
  {
    label: "Thermographie seule",
    description: "Inspection thermique d'une surface (toiture, terrasse, façade)",
    priceMin: 150,
    priceMax: 250,
    duration: "1h – 2h",
    popular: false,
  },
];

const faqTarifs = [
  {
    q: "La recherche de fuite est-elle prise en charge par mon assurance ?",
    a: "Dans la plupart des cas, oui. Votre contrat d'assurance habitation inclut souvent une garantie qui couvre les frais de recherche de fuite. Contactez votre assureur avant notre intervention pour vérifier les conditions. Notre rapport est reconnu par AXA, MAAF, GMF, Allianz, MMA et la plupart des assureurs.",
  },
  {
    q: "Qu'est-ce que la convention IRSI et comment m'aide-t-elle ?",
    a: "La convention IRSI simplifie le règlement des sinistres dégât des eaux entre voisins pour les dommages inférieurs à 5 000 €. Votre propre assureur gère tout et vous indemnise directement, sans que vous ayez à vous battre contre l'assureur de votre voisin.",
  },
  {
    q: "La TVA est-elle récupérable sur une recherche de fuite ?",
    a: "Pour les particuliers, non. Pour les entreprises et collectivités assujetties à la TVA, la TVA (20%) est déductible. La TVA appliquée sur nos prestations est de 20% (TVA normale), sauf si l'intervention entre dans le cadre de travaux d'entretien-amélioration dans un logement de plus de 2 ans (10%).",
  },
  {
    q: "Qui paie la recherche de fuite, moi ou mon voisin ?",
    a: "C'est l'assurance du responsable de la fuite qui prend en charge les frais. Notre rapport d'expertise détermine précisément l'origine de la fuite, ce qui permet d'identifier le responsable. En attendant, c'est généralement la personne qui commande l'intervention qui avance les frais, puis se fait rembourser.",
  },
  {
    q: "Y a-t-il des frais de déplacement supplémentaires ?",
    a: "Non, nos tarifs incluent le déplacement à Toulouse et dans toute la grande couronne. Pour les communes plus éloignées, des frais kilométriques peuvent s'appliquer. Demandez votre devis gratuit pour avoir un tarif précis.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Tarifs" }]} />

      {/* Header */}
      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Tarif recherche de fuite à Toulouse — Devis gratuit
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Tarifs transparents, sans surprise. Devis gratuit sous 24h. Prise en charge par les assurances.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tarifs table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-start gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-4 mb-10">
              <Info className="size-5 text-brand-blue shrink-0 mt-0.5" />
              <p className="text-sm text-brand-dark">
                Les tarifs ci-dessous sont des <strong>fourchettes indicatives HT</strong>. Chaque intervention est unique et un devis précis vous est fourni gratuitement avant toute intervention. Dans la plupart des cas, ces frais sont <strong>pris en charge par votre assurance habitation</strong>.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tarifs.map((t, index) => (
              <FadeIn key={t.label} delay={index * 0.08}>
                <div className={`relative rounded-xl border-2 p-5 flex flex-col gap-3 ${t.popular ? "border-brand-orange bg-brand-orange/5" : "border-gray-100 bg-brand-bg"}`}>
                  {t.popular && (
                    <div className="absolute -top-3 left-4">
                      <span className="bg-brand-orange text-white text-xs font-bold px-3 py-0.5 rounded-full">
                        Le plus demandé
                      </span>
                    </div>
                  )}
                  <div>
                    <h2 className="font-bold text-brand-dark text-base">{t.label}</h2>
                    <p className="text-sm text-brand-text/60 mt-1">{t.description}</p>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-brand-dark">{t.priceMin}€</span>
                    <span className="text-brand-text/50 text-sm mb-1">à {t.priceMax}€ HT</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-text/60">
                    <CheckCircle className="size-3.5 text-brand-blue" />
                    Durée estimée : {t.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-text/60">
                    <CheckCircle className="size-3.5 text-brand-blue" />
                    Rapport d'expertise inclus
                  </div>
                  <Link
                    href="/contact"
                    className="mt-2 text-center text-sm font-semibold bg-brand-dark hover:bg-brand-dark/90 text-white py-2 rounded-lg transition-colors"
                  >
                    Devis gratuit
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-10 bg-green-50 border border-green-200 rounded-xl p-6">
              <h2 className="font-bold text-green-800 mb-2">
                Prise en charge par votre assurance
              </h2>
              <p className="text-sm text-green-700 leading-relaxed">
                Dans la grande majorité des cas, les frais de recherche de fuite sont pris en charge par l&apos;assurance habitation. Nous vous aidons à constituer votre dossier sinistre avec notre rapport d&apos;expertise reconnu par AXA, MAAF, GMF, Allianz, MMA et tous les assureurs membres de la convention IRSI.{" "}
                <Link href="/assurance" className="underline font-medium">
                  En savoir plus sur la prise en charge assurance
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Tarifs */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-8 text-center">
              Questions fréquentes sur nos tarifs
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {faqTarifs.map((item, index) => (
              <FadeIn key={index} delay={index * 0.06}>
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="size-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-brand-dark mb-2">{item.q}</h3>
                      <p className="text-sm text-brand-text/70 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="text-center mt-6 text-sm text-brand-text/60">
              D'autres questions ?{" "}
              <Link href="/faq" className="text-brand-blue hover:underline">Consultez notre FAQ complète</Link>
              {" ou "}
              <Link href="/contact" className="text-brand-blue hover:underline">contactez-nous directement</Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Devis form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-2 text-center">
              Demander votre devis gratuit
            </h2>
            <p className="text-center text-brand-text/60 text-sm mb-8">
              Réponse sous 24h — Sans engagement
            </p>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
