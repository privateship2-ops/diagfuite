import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { processSteps } from "@/data/services";
import { Phone, MessageSquare, Wrench, Scan, FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment se déroule une recherche de fuite non destructive ?",
  description:
    "Découvrez les 4 étapes de notre intervention : prise de contact, matériel spécialisé, localisation précise, rapport expertise. Tout est expliqué.",
  alternates: { canonical: "https://diagfuite.fr/processus" },
};

const detailedSteps = [
  {
    icon: Phone,
    step: "01",
    title: "Prise de contact & analyse de votre situation",
    description: "Vous nous contactez par téléphone ou via notre formulaire en ligne. Nous recueillons les informations clés : nature du problème, localisation, historique, type de logement. Cette analyse préalable nous permet de planifier l'intervention avec le matériel le plus adapté.",
    details: [
      "Écoute de votre situation",
      "Questions de diagnostic préliminaire",
      "Planification de l'intervention sous 48h",
      "Confirmation des modalités pratiques",
    ],
  },
  {
    icon: Wrench,
    step: "02",
    title: "Intervention avec matériel spécialisé",
    description: "Nos techniciens certifiés arrivent à l'heure convenue avec l'ensemble du matériel nécessaire. Selon votre situation, nous utilisons : caméra thermique, corrélateur acoustique, détecteur de gaz traceur, caméra endoscopique ou hygromètre professionnel.",
    details: [
      "Techniciens certifiés et expérimentés",
      "Matériel de pointe professionnel",
      "Intervention soignée sans dégâts",
      "Communication claire à chaque étape",
    ],
  },
  {
    icon: Scan,
    step: "03",
    title: "Localisation précise sans destruction",
    description: "Grâce à nos technologies avancées, nous identifions l'origine exacte de la fuite sans percer, casser ou creuser. La localisation est précise au centimètre, ce qui permet au plombier qui interviendra ensuite de travailler au bon endroit uniquement.",
    details: [
      "Localisation au centimètre près",
      "Zero démolition pendant la recherche",
      "Documentation photographique complète",
      "Explication détaillée des résultats",
    ],
  },
  {
    icon: FileText,
    step: "04",
    title: "Rapport expertise pour votre assurance",
    description: "À l'issue de l'intervention, vous recevez un rapport d'expertise complet. Ce document, reconnu par toutes les assurances, contient les photos annotées, la localisation précise de la fuite, les causes identifiées et les travaux préconisés.",
    details: [
      "Rapport remis le jour même ou le lendemain",
      "Photos annotées incluses",
      "Reconnu par AXA, MAAF, GMF, Allianz, MMA",
      "Support pour votre dossier assurance",
    ],
  },
];

export default function ProcessusPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Notre processus" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Comment se déroule une recherche de fuite non destructive ?
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              De la prise de contact à la remise du rapport, chaque étape est pensée pour vous simplifier la vie et optimiser votre prise en charge.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Detailed steps */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {detailedSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.step} delay={index * 0.1}>
                  <div className="flex gap-6">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
                        {step.step}
                      </div>
                      {index < detailedSteps.length - 1 && (
                        <div className="w-0.5 bg-brand-blue/20 flex-1 mt-3 mb-0 min-h-[2rem]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="size-5 text-brand-blue" />
                        <h2 className="text-xl font-bold text-brand-dark">{step.title}</h2>
                      </div>
                      <p className="text-brand-text/70 leading-relaxed mb-4">{step.description}</p>
                      <ul className="flex flex-col gap-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-brand-text/70">
                            <CheckCircle className="size-4 text-brand-blue shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Link to blog article */}
          <FadeIn delay={0.3}>
            <div className="mt-12 bg-brand-bg rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-brand-dark mb-2">En savoir plus</h2>
              <p className="text-sm text-brand-text/70 mb-4">
                Consultez notre article détaillé pour comprendre chaque technique utilisée lors d'une intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/blog/comment-se-deroule-recherche-fuite"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:underline"
                >
                  Lire : Comment se déroule une recherche de fuite ?
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Links */}
      <section className="py-8 bg-brand-bg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-brand-text/60">
            Voir aussi :{" "}
            <Link href="/tarifs" className="text-brand-blue hover:underline">nos tarifs de recherche de fuite</Link>
            {" · "}
            <Link href="/contact" className="text-brand-blue hover:underline">demander un devis gratuit à Toulouse</Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
