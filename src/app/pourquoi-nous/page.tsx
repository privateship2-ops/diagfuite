import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { Shield, BadgeCheck, Clock, FileText, Star, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Pourquoi choisir DiagFuite pour votre recherche de fuite ?",
  description:
    "DiagFuite : agréé AXA, MAAF, GMF, Allianz, MMA. 100% non destructif. Rapport expertise fourni. Intervention 48h à Toulouse. Devis gratuit.",
  alternates: { canonical: "https://diagfuite.fr/pourquoi-nous" },
};

const reasons = [
  {
    icon: Shield,
    title: "100% non destructif",
    description: "Nous ne cassons rien. Nos technologies avancées permettent de localiser toute fuite sans démolir vos murs, sols ou plafonds. Votre logement reste intact.",
  },
  {
    icon: BadgeCheck,
    title: "Agréé par toutes les assurances",
    description: "DiagFuite est officiellement agréé par AXA, MAAF, GMF, Allianz et MMA. Notre rapport d'expertise est accepté sans réserve par tous les assureurs.",
  },
  {
    icon: Clock,
    title: "Intervention sous 48h",
    description: "Nous planifions votre intervention sous 48 heures ouvrées. Pour les urgences, nous mettons tout en œuvre pour intervenir le jour même ou le lendemain.",
  },
  {
    icon: FileText,
    title: "Rapport expertise inclus",
    description: "Chaque intervention se conclut par un rapport d'expertise complet avec photos, localisation précise et recommandations. Indispensable pour votre assurance.",
  },
  {
    icon: Star,
    title: "Techniciens certifiés",
    description: "Nos techniciens sont formés et certifiés sur toutes les technologies que nous employons : thermographie, acoustique, gaz traceur, caméra endoscopique.",
  },
  {
    icon: Users,
    title: "Partenaire des professionnels",
    description: "Assureurs, syndics, collectivités : nous travaillons quotidiennement avec les professionnels de l'immobilier et de l'assurance qui nous font confiance.",
  },
];

const certifications = ["AXA", "MAAF", "GMF", "Allianz", "MMA", "Matmut", "SMABTP", "Generali"];

export default function PourquoiNousPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Pourquoi nous" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Pourquoi choisir DiagFuite pour votre recherche de fuite ?
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Parce que vous méritez un service expert, transparent et reconnu par vos assureurs. Voici pourquoi nos clients nous font confiance.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <FadeIn key={reason.title} delay={index * 0.08}>
                  <div className="bg-brand-bg rounded-xl p-6 border border-gray-100 h-full">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="size-6 text-brand-blue" />
                    </div>
                    <h2 className="font-bold text-brand-dark mb-2">{reason.title}</h2>
                    <p className="text-sm text-brand-text/70 leading-relaxed">{reason.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Certifications */}
          <FadeIn>
            <div className="bg-brand-bg rounded-2xl border border-gray-100 p-8 text-center">
              <h2 className="text-xl font-bold text-brand-dark mb-3">
                Agréé par les principales compagnies d'assurance
              </h2>
              <p className="text-sm text-brand-text/60 mb-6">
                Notre rapport d'expertise est reconnu et accepté par tous ces assureurs
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="bg-white border border-gray-200 text-brand-dark font-bold text-sm px-4 py-2 rounded-xl shadow-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Image + testimonial */}
          <FadeIn delay={0.1}>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Équipe DiagFuite, experts en détection de fuite Toulouse"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                  Notre engagement : votre tranquillité d'esprit
                </h2>
                <p className="text-brand-text/70 leading-relaxed mb-4">
                  Depuis notre création, DiagFuite accompagne particuliers, syndics et assureurs à Toulouse et sa grande couronne. Notre priorité : localiser votre fuite avec précision, sans causer de dégâts supplémentaires, et vous fournir les documents nécessaires pour votre prise en charge.
                </p>
                <p className="text-brand-text/70 leading-relaxed mb-6">
                  Nos techniciens sont formés en continu sur les dernières technologies de détection. Nous investissons dans du matériel de pointe pour vous offrir le meilleur service possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/temoignages"
                    className="inline-flex items-center justify-center border-2 border-brand-dark text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-dark hover:text-white transition-colors text-sm"
                  >
                    Lire les témoignages clients
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                  >
                    Demander un devis gratuit à Toulouse
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
