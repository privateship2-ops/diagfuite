import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/sections/FadeIn";
import { CheckCircle, Info, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Prix recherche de fuite Toulouse — Devis gratuit | DiagFuite",
  description:
    "Tarifs détection fuite non destructive Toulouse : 150–450 € HT. Prise en charge assurance, convention IRSI, devis gratuit sous 24h. Intervention 48h.",
  alternates: { canonical: "https://diagfuite.fr/tarifs" },
  openGraph: {
    title: "Prix recherche de fuite Toulouse — Devis gratuit | DiagFuite",
    description: "Tarifs transparents de détection de fuite non destructive à Toulouse. Prise en charge assurance possible.",
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
    includes: ["Thermographie et/ou acoustique", "Localisation précise", "Rapport d'expertise inclus"],
  },
  {
    label: "Canalisation encastrée",
    description: "Fuite sur canalisation dans les murs ou sous dalle béton",
    priceMin: 250,
    priceMax: 380,
    duration: "2h – 3h",
    popular: false,
    includes: ["Corrélation acoustique", "Gaz traceur si nécessaire", "Rapport d'expertise inclus"],
  },
  {
    label: "Canalisation enterrée",
    description: "Fuite sur réseau enterré (jardin, parking, voirie privée)",
    priceMin: 300,
    priceMax: 450,
    duration: "2h30 – 4h",
    popular: false,
    includes: ["Corrélation acoustique haute précision", "Localisation sans fouille", "Rapport d'expertise inclus"],
  },
  {
    label: "Copropriété / Immeuble",
    description: "Sinistre en immeuble collectif, colonnes montantes, parties communes",
    priceMin: 300,
    priceMax: 500,
    duration: "3h – 5h",
    popular: false,
    includes: ["Multi-techniques combinées", "Plan des colonnes inclus", "Rapport d'expertise inclus"],
  },
  {
    label: "Thermographie seule",
    description: "Inspection thermique d'une surface (toiture, terrasse, façade)",
    priceMin: 150,
    priceMax: 250,
    duration: "1h – 2h",
    popular: false,
    includes: ["Caméra thermique haute résolution", "Cartographie thermique", "Thermogrammes dans le rapport"],
  },
  {
    label: "Inspection par caméra",
    description: "Endoscopie des canalisations intérieures ou réseau enterré",
    priceMin: 200,
    priceMax: 380,
    duration: "1h30 – 3h",
    popular: false,
    includes: ["Caméra HD intérieur canalisation", "Vidéo + captures d'écran", "Rapport d'expertise inclus"],
  },
];

const faqTarifs = [
  {
    q: "La recherche de fuite est-elle prise en charge par mon assurance ?",
    a: "Dans la plupart des cas, oui. Votre contrat d'assurance habitation inclut généralement une garantie qui couvre les frais de recherche de fuite dans le cadre d'un sinistre dégât des eaux. Déclarez le sinistre à votre assureur dans les 5 jours ouvrés suivant la découverte, puis demandez-leur confirmation de la prise en charge avant notre intervention. Notre rapport d'expertise est reconnu par AXA, MAAF, GMF, Allianz, MMA, Groupama et tous les assureurs membres de la convention IRSI.",
  },
  {
    q: "Qu'est-ce que la convention IRSI et comment m'aide-t-elle ?",
    a: "La convention IRSI simplifie le règlement des sinistres dégât des eaux entre voisins pour les dommages inférieurs à 5 000 € HT. Votre propre assureur gère tout et vous indemnise directement, sans que vous ayez à vous battre contre l'assureur de votre voisin. C'est un mécanisme avantageux pour les victimes de sinistres.",
  },
  {
    q: "Y a-t-il des frais de déplacement supplémentaires ?",
    a: "Non, nos tarifs incluent le déplacement à Toulouse et dans toute la grande couronne (rayon 40 km). Pour les communes plus éloignées, des frais kilométriques peuvent s'appliquer. Demandez votre devis gratuit pour avoir un tarif précis.",
  },
  {
    q: "La TVA est-elle récupérable sur une recherche de fuite ?",
    a: "Pour les particuliers, non. Pour les entreprises et collectivités assujetties à la TVA, elle est déductible. La TVA applicable est de 10% pour les interventions dans des logements de plus de 2 ans (travaux d'entretien) et de 20% dans les autres cas. Si votre assurance prend en charge l'intervention, elle rembourse généralement TTC.",
  },
  {
    q: "Qui paie la recherche de fuite, moi ou mon voisin ?",
    a: "C'est l'assurance du responsable de la fuite qui prend en charge les frais. Notre rapport d'expertise détermine précisément l'origine, ce qui identifie le responsable. C'est généralement la personne qui commande l'intervention qui avance les frais, puis se fait rembourser par son assurance.",
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
              Prix recherche de fuite à Toulouse — Devis gratuit sous 24h
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Tarifs transparents, sans surprise. Prise en charge par les assurances dans la majorité des cas.
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
                Les <strong>tarifs de détection de fuite</strong> ci-dessous sont des fourchettes indicatives HT. Chaque intervention est unique et un devis précis vous est fourni gratuitement sous 24h. Dans la plupart des cas, ces frais sont <strong>pris en charge par votre assurance habitation</strong> via la{" "}
                <Link href="/assurance" className="text-brand-blue hover:underline font-medium">convention IRSI</Link>.
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
                  {t.includes.map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs text-brand-text/60">
                      <CheckCircle className="size-3.5 text-brand-blue" />
                      {item}
                    </div>
                  ))}
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

          {/* Ce qui est inclus */}
          <FadeIn delay={0.2}>
            <div className="mt-12 bg-brand-bg rounded-2xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-brand-dark mb-4">Ce qui est inclus dans chaque intervention</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Déplacement à Toulouse et grande couronne (40 km)",
                  "Diagnostic préliminaire téléphonique gratuit",
                  "Utilisation de l'ensemble du matériel nécessaire",
                  "Technicien certifié et expérimenté",
                  "Rapport d'expertise complet avec photos annotées",
                  "Transmission du rapport par email le jour même",
                  "Assistance pour votre dossier assurance",
                  "Garantie de localisation précise au centimètre",
                  "Conseils sur les travaux de réparation à effectuer",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-brand-text/70">
                    <CheckCircle className="size-4 text-brand-blue shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Prise en charge assurance */}
          <FadeIn delay={0.3}>
            <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
              <h2 className="font-bold text-green-800 mb-3">
                Prise en charge par votre assurance habitation
              </h2>
              <p className="text-sm text-green-700 leading-relaxed mb-4">
                Dans la grande majorité des cas, les frais de{" "}
                <strong>recherche de fuite à Toulouse</strong> sont intégralement pris en charge par l&apos;assurance habitation dans le cadre d&apos;un sinistre dégât des eaux. La convention IRSI encadre cette prise en charge pour les sinistres jusqu&apos;à 5 000 € HT. Votre propre assureur gère le dossier et vous rembourse directement.
              </p>
              <p className="text-sm text-green-700 leading-relaxed mb-4">
                <strong>Démarches à suivre :</strong> (1) Déclarez le sinistre à votre assurance dans les 5 jours ouvrés. (2) Demandez leur accord pour réaliser une recherche de fuite non destructive. (3) Faites intervenir DiagFuite. (4) Transmettez notre rapport à votre assureur pour déclencher le remboursement.
              </p>
              <Link href="/assurance" className="underline font-medium text-green-800 text-sm">
                En savoir plus sur la prise en charge assurance et la convention IRSI →
              </Link>
            </div>
          </FadeIn>

          {/* Exemple de devis */}
          <FadeIn delay={0.35}>
            <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Exemples de devis concrets</h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    title: "Appartement T3 à Toulouse — Tache d'humidité plafond cuisine",
                    context: "Locataire signale une tache brune au plafond de la cuisine depuis 3 semaines. Le voisin du dessus ne constate rien d'anormal.",
                    intervention: "Thermographie infrarouge du plafond + corrélation acoustique sur la dalle",
                    duration: "2h",
                    price: "220 € HT",
                    result: "Fuite localisée sur joint de baignoire défectueux chez le voisin. Rapport remis le soir même. Prise en charge assurance obtenue.",
                  },
                  {
                    title: "Maison individuelle à Tournefeuille — Compteur qui tourne sans raison",
                    context: "Propriétaire constate que son compteur tourne même avec toutes les arrivées d'eau fermées. Aucune fuite visible.",
                    intervention: "Gaz traceur injecté dans le réseau enterré du jardin + corrélation acoustique",
                    duration: "3h",
                    price: "380 € HT",
                    result: "Fuite localisée sur canalisation enterrée à 1,5 m de profondeur, sous la terrasse. Tranchée de 40×40 cm suffisante pour la réparation.",
                  },
                  {
                    title: "Immeuble collectif à Blagnac — Fuite dans colonne montante",
                    context: "Syndic signale des traces d'humidité dans deux appartements sur la même colonne. Origine incertaine.",
                    intervention: "Corrélation acoustique sur colonne + thermographie des logements concernés",
                    duration: "4h",
                    price: "420 € HT",
                    result: "Joint défectueux sur raccord de colonne au 3e étage. Rapport avec plan précis remis au syndic. Travaux ciblés réalisés en 1h par le plombier.",
                  },
                ].map((example) => (
                  <div key={example.title} className="border border-gray-100 rounded-xl p-5">
                    <h3 className="font-bold text-brand-dark mb-2">{example.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-brand-text/50 uppercase text-xs font-semibold mb-1">Situation</p>
                        <p className="text-brand-text/70">{example.context}</p>
                      </div>
                      <div>
                        <p className="text-brand-text/50 uppercase text-xs font-semibold mb-1">Intervention</p>
                        <p className="text-brand-text/70">{example.intervention}</p>
                      </div>
                      <div>
                        <p className="text-brand-text/50 uppercase text-xs font-semibold mb-1">Durée / Prix HT</p>
                        <p className="text-brand-text/70 font-semibold">{example.duration} — {example.price}</p>
                      </div>
                      <div>
                        <p className="text-brand-text/50 uppercase text-xs font-semibold mb-1">Résultat</p>
                        <p className="text-brand-text/70">{example.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Tarifs */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-8 text-center">
              Questions fréquentes sur nos tarifs de recherche de fuite
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
              D&apos;autres questions ?{" "}
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
              Demander votre devis gratuit de recherche de fuite
            </h2>
            <p className="text-center text-brand-text/60 text-sm mb-8">
              Réponse sous 24h — Sans engagement — Prise en charge assurance possible
            </p>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
