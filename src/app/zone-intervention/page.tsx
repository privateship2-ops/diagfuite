import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { cities } from "@/data/cities";
import { MapPin, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Recherche de fuite Toulouse et grande couronne | DiagFuite",
  description:
    "DiagFuite intervient à Toulouse, Blagnac, Colomiers, Tournefeuille, Muret et dans toute la grande couronne. Recherche fuite eau sous 48h dans le 31.",
  alternates: { canonical: "https://diagfuite.fr/zone-intervention" },
  openGraph: {
    title: "Zone d'intervention : recherche fuite Toulouse et 31",
    description: "Détection de fuite non destructive dans toute l'agglomération toulousaine. Intervention 48h.",
    url: "https://diagfuite.fr/zone-intervention",
  },
};

const cityContent = [
  {
    name: "Toulouse",
    postalCode: "31000",
    content: `DiagFuite est votre spécialiste en <strong>recherche de fuite Toulouse</strong>. Nous intervenons dans tous les quartiers de la Ville Rose : Centre historique, Capitole, Saint-Cyprien, Les Carmes, Compans-Caffarelli, Minimes, Rangueil, Lardenne, Côte Pavée et bien d'autres. Avec une intervention sous 48h garantie, nous localisons vos fuites d'eau ou de gaz avec précision grâce à nos équipements de thermographie infrarouge et corrélation acoustique. Rapport d'expertise inclus, reconnu par toutes les assurances.`,
  },
  {
    name: "Blagnac",
    postalCode: "31700",
    content: `La <strong>recherche de fuite Blagnac</strong> est l'une de nos zones d'intervention prioritaires. Ville dynamique de la première couronne toulousaine, Blagnac concentre un important parc résidentiel récent et des copropriétés dont les réseaux de plomberie nécessitent parfois une expertise professionnelle. DiagFuite intervient à Blagnac sous 48h pour localiser toute fuite, qu'elle soit sur canalisation intérieure, dans les murs ou enterrée sous le jardin. Devis gratuit, rapport expertise inclus.`,
  },
  {
    name: "Colomiers",
    postalCode: "31770",
    content: `Pour la <strong>détection de fuite Colomiers</strong>, DiagFuite mobilise ses techniciens certifiés dans cette commune de l'ouest toulousain. Colomiers, avec son tissu pavillonnaire dense et ses nombreux immeubles collectifs, présente régulièrement des problématiques de fuites sur canalisations enterrées, infiltrations de toiture terrasse et sinistres dégât des eaux en copropriété. Nous intervenons sous 48h, avec notre matériel de corrélation acoustique et de thermographie, pour une localisation précise sans aucune démolition.`,
  },
  {
    name: "Tournefeuille",
    postalCode: "31170",
    content: `DiagFuite assure la <strong>recherche de fuite Tournefeuille</strong> dans cette grande commune résidentielle de la banlieue ouest de Toulouse. Maisons individuelles avec jardins, pavillons des années 70-80, copropriétés récentes : nous traitons tous types de sinistres. Les fuites sur canalisations enterrées dans les jardins sont fréquentes sur ces propriétés. Notre corrélateur acoustique permet de les localiser sans fouille préalable. Intervention sous 48h, devis gratuit.`,
  },
  {
    name: "Muret",
    postalCode: "31600",
    content: `Sous-préfecture du département, Muret bénéficie de notre service de <strong>détection de fuite Muret</strong> dans un rayon de 30 km de Toulouse. Nous intervenons aussi bien sur les maisons individuelles que sur les immeubles collectifs de cette ville en pleine expansion. Notre équipe se déplace sous 48h pour réaliser votre recherche de fuite non destructive, quelle que soit la nature du problème : fuite sur canalisation encastrée, plancher chauffant, réseau enterré ou infiltration de toiture.`,
  },
  {
    name: "Ramonville-Saint-Agne",
    postalCode: "31520",
    content: `La <strong>recherche de fuite Ramonville</strong> fait partie de nos zones d'intervention habituelles dans la couronne sud de Toulouse. Ville desservie par le métro, Ramonville-Saint-Agne présente un parc immobilier diversifié comprenant de nombreuses copropriétés des années 70-90 dont les réseaux hydrauliques vieillissants peuvent générer des fuites difficiles à localiser. Nos techniciens interviennent sous 48h avec le matériel adapté pour un diagnostic précis.`,
  },
  {
    name: "Balma",
    postalCode: "31130",
    content: `Pour votre <strong>détection de fuite Balma</strong>, DiagFuite est à votre service dans cette commune résidentielle de la couronne est de Toulouse. Balma accueille de nombreuses maisons individuelles et lotissements récents. Les fuites sur planchers chauffants et canalisations encastrées sont courantes dans les constructions des années 2000. Notre thermographie infrarouge est particulièrement adaptée pour ce type de sinistre. Intervention sous 48h, rapport assurance inclus.`,
  },
  {
    name: "L'Union",
    postalCode: "31240",
    content: `DiagFuite intervient pour la <strong>recherche de fuite L'Union</strong> dans cette commune du nord-est toulousain. Ville résidentielle mixant habitat pavillonnaire et immeubles collectifs, L'Union voit régulièrement des sinistres dégât des eaux dans les copropriétés. Notre expertise en corrélation acoustique et thermographie nous permet de localiser avec précision les fuites les plus complexes. Délai d'intervention : 48h. Rapport d'expertise reconnu par toutes les assurances.`,
  },
  {
    name: "Launaguet",
    postalCode: "31140",
    content: `La <strong>détection de fuite Launaguet</strong> est assurée par DiagFuite dans cette commune au nord de Toulouse. Launaguet compte de nombreuses maisons individuelles avec réseau extérieur enterré, source de fuites souvent non visibles. Notre corrélateur acoustique Sewerin, l'un des plus précis du marché, localise ces fuites enterrées au centimètre près, sans fouille exploratoire. Intervention sous 48h, devis gratuit, prise en charge assurance possible.`,
  },
  {
    name: "Portet-sur-Garonne",
    postalCode: "31120",
    content: `Pour la <strong>recherche de fuite Portet-sur-Garonne</strong>, DiagFuite intervient dans ce nœud commercial et résidentiel au sud de Toulouse. Portet accueille à la fois des zones pavillonnaires denses et des ensembles collectifs récents. Qu'il s'agisse d'une fuite sur canalisation intérieure, d'une infiltration de toiture terrasse ou d'un réseau enterré suspect, nos techniciens se déplacent sous 48h avec l'ensemble du matériel nécessaire pour un diagnostic complet.`,
  },
  {
    name: "Cugnaux",
    postalCode: "31270",
    content: `DiagFuite assure la <strong>détection de fuite Cugnaux</strong> dans cette commune de la couronne sud-ouest de Toulouse. Cugnaux dispose d'un parc immobilier mixte avec de nombreux pavillons individuels construits dans les années 80-90, dont les installations de plomberie peuvent présenter des signes de vieillissement. Notre expertise en thermographie infrarouge et en corrélation acoustique permet de détecter et localiser avec précision toute fuite, même sur réseaux anciens. Intervention sous 48h.`,
  },
];

export default function ZoneInterventionPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Zone d'intervention" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Recherche de fuite Toulouse et grande couronne
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              DiagFuite intervient dans toute l&apos;agglomération toulousaine en moins de 48h ouvrées. Zone de couverture : 40 km autour de Toulouse (département 31).
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* City grid */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">
                  Villes et communes desservies
                </h2>
              </FadeIn>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {cities.map((city, index) => (
                  <FadeIn key={city.slug} delay={index * 0.04}>
                    <div className="bg-brand-bg border border-gray-100 rounded-xl p-4 flex items-start gap-2 hover:border-brand-blue/30 hover:shadow-sm transition-all">
                      <MapPin className="size-4 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-brand-dark text-sm">{city.name}</p>
                        <p className="text-xs text-brand-text/50">{city.postalCode}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.3}>
                <p className="text-sm text-brand-text/60 mb-2">
                  Vous ne trouvez pas votre commune ? Contactez-nous — nous intervenons dans un rayon de 40 km autour de Toulouse et pouvons nous déplacer au-delà sur demande.
                </p>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div>
              <FadeIn delay={0.1}>
                <div className="bg-brand-bg rounded-2xl border border-gray-100 p-6 sticky top-24">
                  <h2 className="font-bold text-brand-dark mb-5">
                    Intervention rapide
                  </h2>
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Clock className="size-5 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-brand-dark">Délai d&apos;intervention</p>
                        <p className="text-xs text-brand-text/60 mt-0.5">Sous 48h ouvrées à Toulouse et grande couronne</p>
                      </div>
                    </div>
                    {[
                      "Lundi – Vendredi : 8h à 18h",
                      "Samedi : 9h à 13h",
                      "Urgences sur devis",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-brand-text/70">
                        <CheckCircle className="size-4 text-brand-blue shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="block text-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-4 py-3 rounded-xl transition-colors text-sm"
                  >
                    Demander un devis gratuit
                  </Link>
                  <Link
                    href="/prestations"
                    className="block text-center mt-3 text-sm font-medium text-brand-blue hover:underline"
                  >
                    Voir nos prestations
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* City sections */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-2 text-center">
              DiagFuite dans votre commune
            </h2>
            <p className="text-sm text-brand-text/60 text-center mb-10 max-w-xl mx-auto">
              Retrouvez ci-dessous notre présence détaillée dans les principales villes de l&apos;agglomération toulousaine.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityContent.map((city, index) => (
              <FadeIn key={city.name} delay={index * 0.06}>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="size-4 text-brand-blue shrink-0" />
                    <h3 className="font-bold text-brand-dark">{city.name}</h3>
                    <span className="text-xs text-brand-text/50 ml-auto">{city.postalCode}</span>
                  </div>
                  <p
                    className="text-sm text-brand-text/70 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: city.content }}
                  />
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-orange hover:underline"
                  >
                    Devis gratuit à {city.name} →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
