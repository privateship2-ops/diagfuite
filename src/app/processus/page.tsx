import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { Phone, Wrench, Scan, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment se déroule une recherche de fuite ? | DiagFuite Toulouse",
  description:
    "Étapes détaillées d'une recherche de fuite non destructive à Toulouse : prise de contact, intervention, localisation, rapport expertise. Durées et conseils.",
  alternates: { canonical: "https://diagfuite.fr/processus" },
};

const detailedSteps = [
  {
    icon: Phone,
    step: "01",
    title: "Prise de contact & analyse de votre situation",
    duration: "15 – 30 minutes",
    description: "Vous nous contactez par téléphone au 06 14 46 87 77 ou via notre formulaire en ligne. Cette première étape est gratuite et sans engagement. Elle nous permet de recueillir les informations essentielles pour préparer notre intervention de façon optimale.",
    details: [
      "Description de vos symptômes : taches, bruits, consommation anormale",
      "Identification du type de logement (appartement, maison, copropriété)",
      "Historique du sinistre : depuis quand, évolution, interventions précédentes",
      "Planification de l'intervention sous 48h ouvrées",
      "Information sur les documents à préparer (plan si disponible, accès)",
    ],
    preparation: "Avant notre appel, notez l'emplacement des taches d'humidité, relevez l'index du compteur et vérifiez si celui-ci tourne à l'arrêt de toutes les arrivées d'eau. Ces informations nous seront très utiles.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Intervention avec matériel spécialisé",
    duration: "30 minutes (mise en place)",
    description: "Nos techniciens certifiés arrivent à l'heure convenue avec l'ensemble du matériel nécessaire. L'intervention est planifiée en fonction des informations recueillies lors du premier contact, ce qui permet d'apporter le matériel le plus adapté à votre situation.",
    details: [
      "Caméra thermique infrarouge haute résolution (FLIR, <0,05°C de sensibilité)",
      "Corrélateur acoustique numérique de précision (±10 cm)",
      "Détecteur de gaz traceur homologué",
      "Caméra endoscopique haute définition",
      "Hygromètre et humidimètre professionnels",
      "Équipements de documentation : appareil photo, tablette de rapport",
    ],
    preparation: "Ayez accès à toutes les pièces concernées, aux vannes d'arrêt principales, aux regards de visite si présents, et aux compteurs d'eau. Votre présence (ou celle d'un représentant) est souhaitée pour faciliter l'accès et recevoir les explications en temps réel.",
  },
  {
    icon: Scan,
    step: "03",
    title: "Localisation précise sans destruction",
    duration: "1h – 4h selon complexité",
    description: "C'est le cœur de notre intervention. Nos techniciens inspectent méthodiquement toutes les zones suspectes avec les équipements adaptés. Cette phase est entièrement non destructive : aucune perforation, aucun perçage, aucune démolition.",
    details: [
      "Inspection thermique des murs, sols et plafonds suspects",
      "Mesures acoustiques sur les colonnes et canalisations accessibles",
      "Injection de gaz traceur si nécessaire pour les réseaux sous pression",
      "Inspection endoscopique des canalisations accessibles",
      "Mesures hygrométriques pour cartographier les zones humides",
      "Documentation photographique complète de toutes les zones inspectées",
    ],
    preparation: "Pendant cette phase, nos techniciens peuvent avoir besoin de silence pour les mesures acoustiques. Évitez d'utiliser les équipements hydrauliques (douche, lave-vaisselle, machine à laver) pendant les mesures de corrélation.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Rapport expertise pour votre assurance",
    duration: "Remis le jour même",
    description: "À l'issue de l'intervention, notre technicien finalise et vous remet votre rapport d'expertise complet. Ce document est la pièce maîtresse de votre dossier sinistre auprès de votre assurance. Il est reconnu sans réserve par AXA, MAAF, GMF, Allianz, MMA et tous les assureurs membres de la convention IRSI.",
    details: [
      "Localisation précise de la fuite avec plan coté et photos annotées",
      "Description technique de l'origine et des causes de la fuite",
      "Résultats détaillés de tous les tests effectués",
      "Travaux de réparation préconisés avec description précise",
      "Certification du technicien intervenant",
      "Transmission par email en fin de journée ou au plus tard le lendemain",
    ],
    preparation: "Rien à préparer : le rapport est automatiquement inclus dans toutes nos interventions, sans surcoût. Vous n'avez qu'à le transmettre à votre assurance.",
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
              De la prise de contact à la remise du rapport, chaque étape est pensée pour vous simplifier la vie et optimiser votre prise en charge assurance.
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
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Icon className="size-5 text-brand-blue" />
                        <h2 className="text-xl font-bold text-brand-dark">{step.title}</h2>
                        <span className="flex items-center gap-1 text-xs text-brand-text/50 bg-brand-bg px-2.5 py-1 rounded-full border border-gray-100">
                          <Clock className="size-3" />
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-brand-text/70 leading-relaxed mb-4">{step.description}</p>
                      <ul className="flex flex-col gap-2 mb-4">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm text-brand-text/70">
                            <CheckCircle className="size-4 text-brand-blue shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-brand-blue/5 border border-brand-blue/15 rounded-lg p-4">
                        <p className="text-xs font-semibold text-brand-blue uppercase tracking-wide mb-1">À préparer</p>
                        <p className="text-xs text-brand-text/60 leading-relaxed">{step.preparation}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Après la détection */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Que se passe-t-il après la détection ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {[
                {
                  title: "Transmettez le rapport à votre assurance",
                  desc: "Envoyez notre rapport d'expertise à votre assureur pour déclencher la prise en charge officielle et l'éventuelle expertise contradictoire.",
                },
                {
                  title: "Faites réaliser les réparations",
                  desc: "Un plombier qualifié intervient exactement à l'endroit indiqué dans notre rapport, limitant les travaux au strict minimum.",
                },
                {
                  title: "Suivez votre dossier assurance",
                  desc: "Votre assurance procède à l'indemnisation sur la base de notre rapport. DiagFuite peut vous assister en cas de question technique.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-brand-dark mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-brand-text/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Warning */}
          <FadeIn>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1">N&apos;effectuez pas de travaux avant l&apos;accord de votre assurance</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Après avoir reçu notre rapport, transmettez-le à votre assurance <strong>avant</strong> de faire réaliser les réparations définitives. Des travaux prématurés peuvent compromettre votre remboursement. En savoir plus :{" "}
                    <Link href="/assurance" className="underline">prise en charge assurance et convention IRSI</Link>.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Link to blog article */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-bold text-brand-dark mb-2">Approfondir le sujet</h2>
              <div className="flex flex-col gap-2">
                <Link
                  href="/blog/comment-se-deroule-recherche-fuite"
                  className="flex items-center gap-2 text-sm font-medium text-brand-blue hover:underline"
                >
                  → Lire : Comment se déroule une recherche de fuite non destructive ?
                </Link>
                <Link
                  href="/prestations"
                  className="flex items-center gap-2 text-sm font-medium text-brand-blue hover:underline"
                >
                  → Découvrir nos prestations : thermographie, corrélation, endoscopie
                </Link>
                <Link
                  href="/tarifs"
                  className="flex items-center gap-2 text-sm font-medium text-brand-blue hover:underline"
                >
                  → Consulter nos tarifs de recherche de fuite à Toulouse
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Links */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-brand-text/60">
            Voir aussi :{" "}
            <Link href="/tarifs" className="text-brand-blue hover:underline">tarifs de recherche de fuite</Link>
            {" · "}
            <Link href="/assurance" className="text-brand-blue hover:underline">prise en charge assurance</Link>
            {" · "}
            <Link href="/contact" className="text-brand-blue hover:underline">demander un devis gratuit à Toulouse</Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
