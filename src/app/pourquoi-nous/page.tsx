import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { Shield, BadgeCheck, Clock, FileText, Star, Users, Wrench, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Pourquoi choisir DiagFuite — Expert fuite eau Toulouse agréé",
  description:
    "DiagFuite : entreprise recherche fuite agréée AXA, MAAF, GMF, Allianz, MMA. Certifications, matériel pro, engagements qualité. Expert fuite eau Toulouse.",
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
    description: "Nos techniciens sont formés et certifiés sur toutes les technologies employées : thermographie, acoustique, gaz traceur, caméra endoscopique.",
  },
  {
    icon: Users,
    title: "Partenaire des professionnels",
    description: "Assureurs, syndics, collectivités : nous travaillons quotidiennement avec les professionnels de l'immobilier et de l'assurance.",
  },
];

const certifications = ["AXA", "MAAF", "GMF", "Allianz", "MMA", "Groupama", "Matmut", "SMABTP", "Generali"];

const materiel = [
  {
    name: "Caméra thermique FLIR",
    description: "Caméra infrarouge haute résolution pour la détection des infiltrations et zones humides cachées. Sensibilité thermique <0,05°C.",
    use: "Thermographie infrarouge",
  },
  {
    name: "Corrélateur acoustique Sewerin",
    description: "Corrélateur numérique de précision pour localiser les fuites sur canalisations enterrées ou encastrées. Précision ±10 cm.",
    use: "Corrélation acoustique",
  },
  {
    name: "Détecteur de gaz traceur",
    description: "Détecteur électronique homologué pour la localisation de fuites par injection de gaz inerte (azote + 5% H²). Sensibilité au ppm.",
    use: "Gaz traceur",
  },
  {
    name: "Caméra endoscopique HD",
    description: "Caméra haute définition sur câble flexible pour l'inspection interne des canalisations de 40 à 300 mm de diamètre.",
    use: "Endoscopie",
  },
  {
    name: "Hygromètre et humidimètre",
    description: "Mesure précise des taux d'humidité dans les matériaux (béton, bois, plâtre) pour cartographier les zones d'infiltration.",
    use: "Mesures hygrométriques",
  },
  {
    name: "Logiciel de rapport expert",
    description: "Logiciel professionnel de rédaction et mise en forme du rapport d'expertise avec intégration des photos, mesures et plans.",
    use: "Documentation",
  },
];

const engagements = [
  "Devis gratuit sous 24h sans engagement",
  "Tarifs transparents communiqués avant intervention",
  "Intervention soignée sans dégât supplémentaire",
  "Rapport d'expertise remis le jour même",
  "Accompagnement dans les démarches assurance",
  "Disponibilité téléphonique 6j/7",
  "Garantie de localisation ou retour sans frais",
  "Techniciens ponctuels et en tenue professionnelle",
];

export default function PourquoiNousPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Pourquoi nous" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Pourquoi choisir DiagFuite pour votre recherche de fuite à Toulouse ?
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Expert fuite eau Toulouse certifié, agréé par toutes les assurances, intervention sous 48h. Voici pourquoi nos clients nous font confiance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Raisons principales */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark">
                6 raisons de choisir DiagFuite
              </h2>
              <p className="text-brand-text/60 mt-3 max-w-xl mx-auto text-sm">
                Depuis notre création, nous avons réalisé plus de 500 interventions à{" "}
                <Link href="/zone-intervention" className="text-brand-blue hover:underline">Toulouse</Link>{" "}
                et grande couronne. Voici ce qui nous distingue.
              </p>
            </div>
          </FadeIn>

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

          {/* Image + texte */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/equipe.jpg"
                  alt="Équipe DiagFuite, experts en détection de fuite Toulouse"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                  Notre engagement : votre tranquillité d&apos;esprit
                </h2>
                <p className="text-brand-text/70 leading-relaxed mb-4">
                  DiagFuite accompagne particuliers, syndics et assureurs à{" "}
                  <Link href="/zone-intervention" className="text-brand-blue hover:underline">Toulouse</Link>{" "}
                  et sa grande couronne. Notre priorité : localiser votre fuite avec précision grâce à nos techniques de{" "}
                  <Link href="/prestations" className="text-brand-blue hover:underline">détection non destructive</Link>,{" "}
                  sans causer de dégâts supplémentaires, et vous fournir les documents nécessaires pour votre prise en charge par l&apos;
                  <Link href="/assurance" className="text-brand-blue hover:underline">assurance</Link>.
                </p>
                <p className="text-brand-text/70 leading-relaxed mb-4">
                  Nos techniciens sont formés en continu sur les dernières technologies de détection. Nous investissons dans du matériel de pointe homologué pour vous offrir le meilleur service possible. Chaque intervention est documentée par un rapport d&apos;expertise complet remis le jour même.
                </p>
                <p className="text-brand-text/70 leading-relaxed mb-6">
                  Nous intervenons auprès de tous types de clients : particuliers propriétaires ou locataires, syndicats de copropriété, compagnies d&apos;assurance pour leurs expertises, collectivités et entreprises du BTP. Notre expérience multi-secteurs nous permet d&apos;adapter notre approche à chaque situation.
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
                    Demander un devis gratuit
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <Award className="size-10 text-brand-blue mx-auto mb-3" />
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark">
                Nos certifications et agréments
              </h2>
              <p className="text-sm text-brand-text/60 mt-3 max-w-xl mx-auto">
                DiagFuite est une <strong>entreprise recherche fuite agréée</strong> par les principales compagnies d&apos;assurance françaises. Notre rapport d&apos;expertise est reconnu et accepté sans réserve pour toute procédure de sinistre dégât des eaux.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-white border border-gray-200 text-brand-dark font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
            <p className="text-center text-sm text-brand-text/50">
              + tous les assureurs membres de la convention IRSI.{" "}
              <Link href="/assurance" className="text-brand-blue hover:underline">En savoir plus sur la prise en charge assurance</Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Matériel professionnel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <Wrench className="size-10 text-brand-blue mx-auto mb-3" />
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark">
                Notre matériel professionnel
              </h2>
              <p className="text-sm text-brand-text/60 mt-3 max-w-xl mx-auto">
                Nous investissons en permanence dans les équipements les plus récents pour garantir la précision et la fiabilité de chaque intervention.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {materiel.map((item, index) => (
              <FadeIn key={item.name} delay={index * 0.08}>
                <div className="bg-brand-bg border border-gray-100 rounded-xl p-5">
                  <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {item.use}
                  </span>
                  <h3 className="font-bold text-brand-dark mb-2">{item.name}</h3>
                  <p className="text-sm text-brand-text/70 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements qualité */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                  Nos engagements qualité
                </h2>
                <p className="text-brand-text/70 leading-relaxed mb-6">
                  La qualité de service est au cœur de notre approche. Chaque engagement ci-dessous est une promesse concrète que nous tenons à chaque intervention, sans exception.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {engagements.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-brand-text/70">
                      <BadgeCheck className="size-4 text-brand-blue shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-dark rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl mb-6">Faites confiance à l&apos;expertise DiagFuite</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "+500", label: "interventions réalisées" },
                    { value: "48h", label: "délai moyen d'intervention" },
                    { value: "100%", label: "rapports acceptés assurance" },
                    { value: "6j/7", label: "disponibilité téléphonique" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center bg-white/10 rounded-xl p-4">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/70 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block text-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
