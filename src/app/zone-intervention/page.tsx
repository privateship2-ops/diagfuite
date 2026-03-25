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
    "DiagFuite intervient à Toulouse, Blagnac, Colomiers, Tournefeuille, Muret et dans toute la grande couronne toulousaine. Intervention sous 48h.",
  alternates: { canonical: "https://diagfuite.fr/zone-intervention" },
  openGraph: {
    title: "Zone d'intervention : Toulouse et grande couronne",
    description: "Détection de fuite non destructive dans toute l'agglomération toulousaine. Intervention 48h.",
    url: "https://diagfuite.fr/zone-intervention",
  },
};

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
              DiagFuite intervient dans toute l'agglomération toulousaine en moins de 48h ouvrées. Zone de couverture : 40 km autour de Toulouse.
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                <p className="mt-6 text-sm text-brand-text/60">
                  Vous ne trouvez pas votre commune ? Contactez-nous directement — nous intervenons dans un rayon de 40 km autour de Toulouse et pouvons nous déplacer au-delà sur demande.
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
                        <p className="font-semibold text-sm text-brand-dark">Délai d'intervention</p>
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

      <CTASection />
    </>
  );
}
