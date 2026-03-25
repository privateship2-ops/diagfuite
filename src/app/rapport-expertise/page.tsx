import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { CheckCircle, FileText, Phone, AlertCircle, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Rapport Expertise Fuite d'Eau | DiagFuite Toulouse",
  description:
    "Rapport d'expertise fuite d'eau à Toulouse. Document reconnu par AXA, MAAF, GMF, Allianz, MMA. Inclus dans chaque intervention DiagFuite. Convention IRSI.",
  alternates: { canonical: "https://diagfuite.fr/rapport-expertise" },
  openGraph: {
    title: "Rapport d'Expertise Fuite d'Eau — Pour votre assurance | DiagFuite",
    description:
      "Rapport d'expertise fuite d'eau reconnu par toutes les assurances. Inclus dans chaque intervention DiagFuite. Convention IRSI. Toulouse et 31.",
    url: "https://diagfuite.fr/rapport-expertise",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "À quoi sert le rapport d'expertise fuite d'eau ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le rapport d'expertise fuite d'eau est le document officiel qui prouve à votre assurance que la fuite a bien été localisée par un professionnel certifié. Il contient la localisation précise de la fuite, les causes identifiées, les résultats des tests effectués et les préconisations de réparation. C'est la pièce maîtresse de votre dossier sinistre dégât des eaux.",
      },
    },
    {
      "@type": "Question",
      name: "Le rapport est-il inclus dans le tarif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, le rapport d'expertise est systématiquement inclus dans le tarif de l'intervention DiagFuite, sans surcoût. Toutes nos interventions donnent lieu à la rédaction et remise du rapport le jour même.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles assurances reconnaissent ce rapport ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre rapport d'expertise est reconnu et accepté sans réserve par AXA, MAAF, GMF, Allianz, MMA, Groupama, Matmut, SMABTP, Generali et tous les assureurs membres de la convention IRSI.",
      },
    },
  ],
};

const contenuRapport = [
  {
    numero: "01",
    titre: "Identification du sinistre",
    details: [
      "Date, adresse et références du sinistre",
      "Nom et coordonnées de l'assuré et du propriétaire",
      "Numéro de dossier sinistre assurance (si disponible)",
      "Description des symptômes constatés à l'arrivée",
      "Historique du sinistre rapporté par le client",
    ],
  },
  {
    numero: "02",
    titre: "Méthodes et équipements utilisés",
    details: [
      "Liste des équipements déployés lors de l'intervention",
      "Protocoles de mesure appliqués",
      "Résultats des mesures hygrométriques par zone",
      "Résultats de la thermographie infrarouge (photos thermiques)",
      "Résultats de la corrélation acoustique ou du gaz traceur",
    ],
  },
  {
    numero: "03",
    titre: "Localisation précise de la fuite",
    details: [
      "Plan coté de localisation de la fuite",
      "Photos annotées montrant l'emplacement exact",
      "Distance par rapport à des repères fixes (murs, angles, accès)",
      "Profondeur de la canalisation si applicable",
      "Nature du réseau en cause (eau chaude, eau froide, évacuation, chauffage)",
    ],
  },
  {
    numero: "04",
    titre: "Diagnostic et préconisations",
    details: [
      "Cause probable ou identifiée de la fuite",
      "Nature des désordres constatés (corrosion, défaut de joint, fissure)",
      "Étendue des dégâts d'humidité cartographiés",
      "Travaux de réparation préconisés avec description précise",
      "Urgence estimée des travaux",
    ],
  },
  {
    numero: "05",
    titre: "Certification et annexes",
    details: [
      "Signature et cachet du technicien intervenant",
      "Numéro de certification et qualifications",
      "Ensemble des photos documentant l'intervention",
      "Relevés de mesures bruts en annexe",
      "Transmission sécurisée par email au format PDF",
    ],
  },
];

const assureurs = [
  "AXA", "MAAF", "GMF", "Allianz", "MMA", "Groupama",
  "Matmut", "SMABTP", "Generali", "Aviva", "Pacifica", "Macif",
];

const faqItems = [
  {
    q: "À quoi sert le rapport d'expertise fuite d'eau ?",
    a: "Le rapport d'expertise fuite d'eau est le document officiel qui prouve à votre assurance que la fuite a bien été localisée par un professionnel certifié. Il contient la localisation précise de la fuite, les causes identifiées, les résultats des tests effectués et les recommandations de réparation. Sans ce document, votre assurance ne peut pas déclencher la prise en charge du sinistre dégât des eaux. C'est la pièce maîtresse de votre dossier. Transmettez-le à votre assureur dès réception, avant d'entreprendre les réparations.",
  },
  {
    q: "Quand et comment le rapport est-il remis ?",
    a: "Le rapport d'expertise est finalisé par notre technicien en fin d'intervention et vous est transmis par email avant la fin de la journée, ou au plus tard le lendemain matin. Vous le recevez au format PDF sécurisé, prêt à être transmis directement à votre assureur. Dans certains cas, notamment pour des interventions complexes nécessitant plusieurs zones inspectées, la finalisation peut prendre jusqu'à 24h. Le rapport est inclus sans surcoût dans toutes nos interventions.",
  },
  {
    q: "Le rapport est-il obligatoire pour l'assurance ?",
    a: "Le rapport d'expertise d'un prestataire agréé n'est pas formellement obligatoire dans tous les cas, mais il est fortement recommandé et souvent exigé par les assureurs pour les sinistres dégât des eaux. Dans le cadre de la convention IRSI, un rapport de recherche de fuite établi par un prestataire agréé est le document de référence pour déterminer la responsabilité et déclencher l'indemnisation. Sans ce document, votre assurance peut rejeter votre demande ou réduire significativement l'indemnisation.",
  },
  {
    q: "Que faire si la fuite n'est pas trouvée ?",
    a: "Dans le cas exceptionnel où la fuite ne peut pas être localisée lors de l'intervention (réseau inaccessible, fuite intermittente, cause non hydraulique), nous vous remettons un rapport négatif circonstancié expliquant les démarches effectuées et les hypothèses diagnostiques. DiagFuite s'engage à ne pas facturer une intervention sans résultat concret. Si la fuite est localisée lors d'une intervention ultérieure, le rapport est émis à ce moment.",
  },
];

export default function RapportExpertisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumb items={[{ label: "Rapport d'expertise" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="size-5 text-brand-orange" />
              <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">Document officiel</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Rapport d&apos;expertise fuite d&apos;eau — Pour votre assurance
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mb-8">
              DiagFuite remet systématiquement un rapport d&apos;expertise complet à l&apos;issue de chaque intervention. Ce document, reconnu par toutes les assurances françaises, est la clé de votre remboursement sinistre dégât des eaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <Download className="size-5" />
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33614468777"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone className="size-5" />
                06 14 46 87 77
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-6">
              Qu&apos;est-ce qu&apos;un rapport de recherche de fuite ?
            </h2>
            <div className="text-brand-text/70 leading-relaxed space-y-4">
              <p>
                Le <strong>rapport de recherche de fuite</strong> (parfois appelé rapport d&apos;expertise fuite d&apos;eau ou rapport de localisation de fuite) est un document technique et officiel rédigé par un technicien certifié à l&apos;issue d&apos;une intervention de{" "}
                <Link href="/chercheur-de-fuite" className="text-brand-blue hover:underline">recherche de fuite</Link>.
                Il atteste de la nature, de la localisation précise et des causes d&apos;une fuite d&apos;eau, et constitue la pièce maîtresse de votre dossier sinistre auprès de votre assurance habitation.
              </p>
              <p>
                Ce document est indispensable dans le cadre de la convention IRSI (Indemnisation et Recours des Sinistres Immobiliers) qui encadre la prise en charge des sinistres dégât des eaux en copropriété et entre voisins. Il permet à votre assureur de déclencher l&apos;indemnisation, de déterminer les responsabilités et d&apos;évaluer les travaux de remise en état.
              </p>
              <p>
                Chez DiagFuite, le <strong>rapport d&apos;expertise est inclus dans toutes nos interventions, sans surcoût</strong>. Il est remis par email en fin de journée au format PDF sécurisé, prêt à être directement transmis à votre assureur. Notre rapport est reconnu et accepté sans réserve par AXA, MAAF, GMF, Allianz, MMA, Groupama et tous les assureurs membres de la convention IRSI.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contenu du rapport */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-10 text-center">
              Contenu détaillé du rapport d&apos;expertise DiagFuite
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-6">
            {contenuRapport.map((section, index) => (
              <FadeIn key={section.numero} delay={index * 0.08}>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-brand-blue text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0">
                      {section.numero}
                    </div>
                    <h3 className="font-bold text-brand-dark">{section.titre}</h3>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {section.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-brand-text/70">
                        <CheckCircle className="size-4 text-brand-blue shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Assureurs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-brand-dark text-center mb-4">
              Assurances qui reconnaissent notre rapport
            </h2>
            <p className="text-sm text-brand-text/60 text-center mb-8 max-w-xl mx-auto">
              Notre rapport d&apos;expertise fuite d&apos;eau est accepté sans réserve par l&apos;ensemble des compagnies d&apos;assurance françaises.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {assureurs.map((a) => (
                <span
                  key={a}
                  className="bg-brand-bg border border-gray-200 text-brand-dark font-bold text-sm px-5 py-2.5 rounded-xl"
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="text-center text-sm text-brand-text/50">
              + tous les assureurs membres de la convention IRSI.{" "}
              <Link href="/assurance" className="text-brand-blue hover:underline">
                En savoir plus sur la prise en charge assurance
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Avertissement */}
      <section className="py-8 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1">
                    Transmettez le rapport avant d&apos;entreprendre les réparations
                  </p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Une fois notre rapport reçu, transmettez-le à votre assurance <strong>avant</strong> de faire réaliser les réparations. Des travaux effectués avant l&apos;accord de votre assureur peuvent compromettre votre remboursement. Votre assureur peut envoyer son propre expert constater les dommages sur la base de notre rapport.{" "}
                    <Link href="/assurance" className="underline">En savoir plus sur la convention IRSI</Link>.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">
              Questions fréquentes sur le rapport de recherche de fuite
            </h2>
            <div className="flex flex-col gap-5">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-brand-bg rounded-xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-brand-dark mb-3">{item.q}</h3>
                  <p className="text-sm text-brand-text/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <FileText className="size-12 text-brand-orange mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Obtenez votre rapport d&apos;expertise dès aujourd&apos;hui
            </h2>
            <p className="text-white/70 mb-8">
              Devis gratuit sous 24h. Intervention sous 48h. Rapport remis le jour même.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33614468777"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone className="size-5" />
                06 14 46 87 77
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-8 bg-brand-bg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-brand-text/60">
            Voir aussi :{" "}
            <Link href="/chercheur-de-fuite" className="text-brand-blue hover:underline">chercheur de fuite Toulouse</Link>
            {" · "}
            <Link href="/assurance" className="text-brand-blue hover:underline">prise en charge assurance convention IRSI</Link>
            {" · "}
            <Link href="/processus" className="text-brand-blue hover:underline">déroulement d'une intervention</Link>
            {" · "}
            <Link href="/tarifs" className="text-brand-blue hover:underline">tarifs recherche de fuite</Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
