import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { Droplets, Flame, Scan, Camera, AudioWaveform, FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestations de détection de fuite non destructive — Toulouse",
  description:
    "Détection fuites d'eau et gaz, thermographie infrarouge, endoscopie, corrélation acoustique à Toulouse. Rapport expertise fourni. Devis gratuit.",
  alternates: { canonical: "https://diagfuite.fr/prestations" },
  openGraph: {
    title: "Prestations de détection de fuite non destructive — Toulouse",
    description: "Toutes nos techniques de détection non destructive à Toulouse. Rapport expertise inclus.",
    url: "https://diagfuite.fr/prestations",
    images: [{ url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Détection de fuites non destructive",
  provider: {
    "@type": "LocalBusiness",
    name: "DiagFuite",
    address: { "@type": "PostalAddress", addressLocality: "Toulouse", addressCountry: "FR" },
  },
  areaServed: "Toulouse",
  description: "Détection de fuites d'eau et de gaz non destructive à Toulouse. Thermographie infrarouge, corrélation acoustique, caméra endoscopique.",
};

const prestations = [
  {
    id: "detection-fuites-eau",
    icon: Droplets,
    title: "Détection de fuites d'eau",
    description:
      "Notre prestation phare : localisation précise des fuites d'eau dans vos canalisations sans démolition. Nous intervenons sur tous types de fuites : canalisations encastrées, sous dalles, enterrées, planchers chauffants.",
    points: [
      "Localisation au centimètre près",
      "Sans casser ni percer",
      "Rapport d'expertise fourni",
      "Pris en charge par l'assurance",
    ],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    imageAlt: "Détection fuite eau non destructive Toulouse",
  },
  {
    id: "detection-fuites-gaz",
    icon: Flame,
    title: "Détection de fuites de gaz",
    description:
      "Inspection et localisation des fuites de gaz avec détecteur électronique homologué. Intervention rapide pour votre sécurité. Nous détectons les fuites sur les installations intérieures et extérieures.",
    points: [
      "Détecteur certifié homologué",
      "Intervention en urgence possible",
      "Rapport de conformité",
      "Recommandations de mise en sécurité",
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    imageAlt: "Détection fuite gaz Toulouse intervention",
  },
  {
    id: "thermographie-infrarouge",
    icon: Scan,
    title: "Thermographie infrarouge",
    description:
      "La caméra thermique détecte les anomalies de température liées aux infiltrations d'eau derrière les murs et plafonds. Idéale pour les sinistres d'origine inconnue et la détection d'humidité cachée.",
    points: [
      "Caméra thermique haute résolution",
      "Détection d'humidité cachée",
      "Aucune perforation des parois",
      "Cartographie des zones humides",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    imageAlt: "Thermographie infrarouge detection fuite Toulouse",
  },
  {
    id: "endoscopie-camera",
    icon: Camera,
    title: "Endoscopie / Inspection par caméra",
    description:
      "La caméra endoscopique est introduite directement dans vos canalisations pour en visualiser l'état interne. Fissures, corrosions, obstructions, racines : tout est identifiable sans destruction.",
    points: [
      "Caméra haute définition",
      "Images et vidéos enregistrées",
      "Rapport avec captures d'écran",
      "Canalisations de 40 à 300 mm",
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    imageAlt: "Inspection canalisation caméra endoscopique Toulouse",
  },
  {
    id: "correlation-acoustique",
    icon: AudioWaveform,
    title: "Corrélation acoustique",
    description:
      "Technique de pointe pour localiser les fuites sur canalisations enterrées ou encastrées. Deux capteurs acoustiques détectent le bruit de la fuite et un logiciel calcule sa position exacte.",
    points: [
      "Précision au centimètre",
      "Canalisations enterrées et encastrées",
      "Sans excavation préalable",
      "Idéal pour réseaux d'eau enterrés",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    imageAlt: "Corrélation acoustique détection fuite canalisation enterrée",
  },
  {
    id: "rapport-expertise",
    icon: FileText,
    title: "Rapport d'expertise",
    description:
      "Chaque intervention donne lieu à un rapport d'expertise complet reconnu par toutes les compagnies d'assurance. Ce document détaille l'origine, la localisation exacte et les travaux préconisés.",
    points: [
      "Reconnu par AXA, MAAF, GMF, Allianz, MMA",
      "Photos annotées incluses",
      "Localisation précise avec plan",
      "Remis le jour même",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    imageAlt: "Rapport expertise détection fuite assurance Toulouse",
  },
];

export default function PrestationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Breadcrumb items={[{ label: "Prestations" }]} />

      {/* Header */}
      <section className="bg-brand-dark py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Nos prestations de détection de fuite non destructive à Toulouse
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-6">
              Technologies avancées, zéro destruction, rapport d'expertise reconnu par les assurances.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/tarifs" className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                Voir nos tarifs de recherche de fuite
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Demander un devis gratuit
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          {prestations.map((p, index) => {
            const Icon = p.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={p.id} id={p.id}>
                <FadeIn>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                          <Icon className="size-6 text-brand-blue" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark">{p.title}</h2>
                      </div>
                      <p className="text-brand-text/70 leading-relaxed mb-5">{p.description}</p>
                      <ul className="flex flex-col gap-2 mb-6">
                        {p.points.map((point) => (
                          <li key={point} className="flex items-center gap-2 text-sm text-brand-text/80">
                            <CheckCircle className="size-4 text-brand-blue shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                        Demander un devis gratuit pour cette prestation
                      </Link>
                    </div>
                    <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                      <Image src={p.image} alt={p.imageAlt} fill className="object-cover" />
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-brand-bg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-text/70 text-sm">
            Voir aussi :{" "}
            <Link href="/tarifs" className="text-brand-blue hover:underline">nos tarifs de recherche de fuite</Link>
            {" · "}
            <Link href="/assurance" className="text-brand-blue hover:underline">prise en charge assurance</Link>
            {" · "}
            <Link href="/processus" className="text-brand-blue hover:underline">notre processus d'intervention</Link>
            {" · "}
            <Link href="/contact" className="text-brand-blue hover:underline">nous contacter</Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
