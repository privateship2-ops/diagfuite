import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { CheckCircle, Phone, Star, MapPin, Shield, FileText, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Chercheur de Fuite d'Eau Toulouse | DiagFuite Expert",
  description:
    "Chercheur de fuite d'eau à Toulouse certifié. DiagFuite localise vos fuites sans destruction, rapport assurance inclus. Intervention sous 48h. Devis gratuit.",
  alternates: { canonical: "https://diagfuite.fr/chercheur-de-fuite" },
  openGraph: {
    title: "Chercheur de Fuite d'Eau Toulouse — Expert certifié | DiagFuite",
    description:
      "Chercheur de fuite eau certifié à Toulouse. Intervention 48h, non destructif, rapport assurance inclus. 06 14 46 87 77.",
    url: "https://diagfuite.fr/chercheur-de-fuite",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DiagFuite — Chercheur de fuite d'eau Toulouse",
  description:
    "Chercheur de fuite d'eau à Toulouse. Détection non destructive, rapport expertise assurance, intervention sous 48h.",
  url: "https://diagfuite.fr/chercheur-de-fuite",
  telephone: "+33614468777",
  areaServed: { "@type": "City", name: "Toulouse" },
  serviceType: "Recherche de fuite d'eau",
};

const competences = [
  {
    icon: Shield,
    title: "Détection 100% non destructive",
    desc: "Un chercheur de fuite professionnel n'ouvre pas les murs au hasard. DiagFuite utilise thermographie infrarouge, corrélation acoustique et gaz traceur pour localiser la fuite sans aucune démolition préalable.",
  },
  {
    icon: FileText,
    title: "Rapport d'expertise reconnu",
    desc: "Chaque intervention se conclut par un rapport d'expertise complet, transmis le jour même, reconnu sans réserve par AXA, MAAF, GMF, Allianz et tous les assureurs membres de la convention IRSI.",
  },
  {
    icon: Clock,
    title: "Intervention sous 48h",
    desc: "Notre chercheur de fuite intervient sous 48h ouvrées à Toulouse et grande couronne. Pour les urgences, nous faisons tout pour intervenir le jour même. Disponibilité 6j/7.",
  },
  {
    icon: MapPin,
    title: "Couverture Toulouse et 31",
    desc: "DiagFuite couvre l'ensemble du département 31 dans un rayon de 40 km autour de Toulouse : Blagnac, Colomiers, Tournefeuille, Muret, Ramonville, Balma, et toute la grande couronne.",
  },
];

const differentiateurs = [
  "Chercheur de fuite certifié, pas un simple plombier",
  "Matériel professionnel homologué : FLIR, Sewerin, gaz traceur",
  "Rapport d'expertise remis le jour de l'intervention",
  "Agréé par toutes les compagnies d'assurance françaises",
  "Devis gratuit, tarifs transparents sans surprise",
  "Zéro destruction, zéro démolition inutile",
  "Disponible 6 jours sur 7, urgences gérées en priorité",
];

const faqItems = [
  {
    q: "Qu'est-ce qu'un chercheur de fuite exactement ?",
    a: "Un chercheur de fuite est un technicien spécialisé dans la localisation précise des fuites d'eau ou de gaz, sans destruction. Contrairement à un plombier qui répare, le chercheur de fuite diagnostique. Il utilise des équipements spéciaux — thermographie infrarouge, corrélateur acoustique, détecteur de gaz traceur, caméra endoscopique — pour localiser une fuite cachée dans un mur, sous un plancher chauffant, dans une canalisation encastrée ou enterrée dans le jardin. Son rôle s'arrête à la localisation et à la rédaction du rapport d'expertise. Les réparations sont ensuite réalisées par un plombier sur la base de ce rapport.",
  },
  {
    q: "Chercheur de fuite ou plombier : quelle différence ?",
    a: "La différence est fondamentale. Un plombier est qualifié pour réparer les canalisations, changer les équipements, effectuer des travaux. Un chercheur de fuite est spécialisé dans le diagnostic et la localisation non destructive. Pour une fuite visible et accessible (robinet qui coule, joint défectueux), un plombier suffit. Pour une fuite cachée — dans un mur, sous dalle, en canalisation encastrée ou enterrée — il faut d'abord un chercheur de fuite pour localiser précisément le problème, puis un plombier pour le réparer exactement à l'endroit indiqué. Cette séquence évite les travaux de recherche destructifs coûteux.",
  },
  {
    q: "Le chercheur de fuite est-il remboursé par l'assurance ?",
    a: "Oui, dans la grande majorité des cas. Lorsqu'une fuite est à l'origine d'un sinistre dégât des eaux, votre assurance habitation prend en charge les frais de recherche de fuite dans le cadre de la convention IRSI. DiagFuite est agréé par toutes les compagnies d'assurance françaises. Notre rapport d'expertise constitue la pièce justificative nécessaire à votre remboursement. Déclarez votre sinistre dans les 5 jours ouvrés suivant la découverte de la fuite, puis transmettez notre rapport pour déclencher la prise en charge.",
  },
];

export default function ChercheurDeFuitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={[{ label: "Chercheur de fuite" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="size-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-white/70 text-sm ml-1">Expert certifié</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Chercheur de fuite d&apos;eau à Toulouse — Expert certifié
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mb-8">
              DiagFuite, votre chercheur de fuite professionnel à Toulouse. Localisation non destructive, rapport d'expertise assurance inclus, intervention sous 48h dans tout le département 31.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+33614468777"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone className="size-5" />
                06 14 46 87 77
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Devis gratuit sous 24h
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-6">
              Pourquoi faire appel à un chercheur de fuite ?
            </h2>
            <div className="prose prose-brand max-w-none text-brand-text/70 leading-relaxed space-y-4">
              <p>
                Une fuite d&apos;eau invisible peut causer des dommages considérables à votre logement avant même d&apos;être détectée. Taches d&apos;humidité sur un mur, compteur qui tourne quand toutes les arrivées d&apos;eau sont fermées, consommation anormalement élevée, moisissures récurrentes : autant de signes qui indiquent la présence d&apos;une fuite cachée nécessitant l&apos;intervention d&apos;un <strong>chercheur de fuite</strong> qualifié.
              </p>
              <p>
                Le recours à un <strong>chercheur de fuite professionnel</strong> est indispensable dès lors que la fuite n&apos;est pas visible à l&apos;œil nu. En effet, une fuite sur canalisation encastrée dans un mur, sous chape ou dans un plancher chauffant, voire sur un réseau enterré dans le jardin, ne peut être localisée qu&apos;avec des équipements spécialisés. Tenter de la trouver à l&apos;aveugle mène systématiquement à des destructions coûteuses et inutiles.
              </p>
              <p>
                DiagFuite est votre <strong>chercheur de fuite à Toulouse</strong> certifié. Grâce à nos équipements de thermographie infrarouge FLIR, de corrélation acoustique Sewerin et de détection par gaz traceur, nous localisons toute fuite au centimètre près, sans ouvrir les murs, sans percer les sols, sans fouilles exploratoires. Notre approche préserve votre logement et permet au plombier d&apos;intervenir exactement au bon endroit, limitant les travaux de réparation au strict minimum.
              </p>
              <p>
                Chaque intervention DiagFuite se conclut par la remise d&apos;un <strong>rapport d&apos;expertise</strong> complet, comprenant photos annotées, localisation précise de la fuite, causes identifiées et recommandations de réparation. Ce document, reconnu par toutes les assurances françaises, est la pièce centrale de votre dossier sinistre pour obtenir le remboursement dans le cadre de la{" "}
                <Link href="/assurance" className="text-brand-blue hover:underline">convention IRSI</Link>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark text-center mb-10">
              Ce qui distingue notre chercheur de fuite
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {competences.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 h-full">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="size-6 text-brand-blue" />
                    </div>
                    <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-sm text-brand-text/70 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-6">
              Comment travaille notre chercheur de fuite ?
            </h2>
            <div className="text-brand-text/70 leading-relaxed space-y-4 mb-8">
              <p>
                Notre <strong>chercheur de fuite</strong> suit un protocole d&apos;intervention structuré en 4 étapes, pensé pour maximiser l&apos;efficacité et minimiser les nuisances pour votre logement.
              </p>
              <p>
                <strong>Étape 1 — Prise de contact et analyse</strong> : lors de votre appel ou de votre demande de devis, notre technicien recueille les informations sur votre situation (type de logement, symptômes observés, ancienneté du problème). Cette analyse préalable nous permet de préparer l&apos;intervention avec le matériel le plus adapté.
              </p>
              <p>
                <strong>Étape 2 — Inspection visuelle et mesures préliminaires</strong> : à son arrivée, notre chercheur de fuite effectue un relevé hygrométrique complet des zones suspectes et procède à une inspection visuelle systématique pour identifier les zones à investiguer en priorité.
              </p>
              <p>
                <strong>Étape 3 — Localisation avec équipements spécialisés</strong> : c&apos;est le cœur de l&apos;intervention. Selon la nature et la localisation probable de la fuite, notre technicien déploie l&apos;équipement adapté : caméra thermique infrarouge pour les infiltrations dans les parois, corrélateur acoustique Sewerin pour les canalisations encastrées ou enterrées, détecteur de gaz traceur pour les réseaux sous pression, caméra endoscopique pour l&apos;inspection interne des canalisations.
              </p>
              <p>
                <strong>Étape 4 — Rapport d&apos;expertise</strong> : une fois la fuite localisée avec précision, notre chercheur de fuite rédige et vous remet votre{" "}
                <Link href="/rapport-expertise" className="text-brand-blue hover:underline">rapport d&apos;expertise</Link>{" "}
                complet. Ce document mentionne la localisation exacte, les causes, les résultats des tests et les préconisations de réparation. Il est transmis par email le jour même.
              </p>
            </div>
            <Link
              href="/processus"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
            >
              → Voir notre processus d&apos;intervention en détail
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Différentiateurs */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">
                  Choisir DiagFuite comme chercheur de fuite
                </h2>
                <p className="text-brand-text/70 leading-relaxed mb-6">
                  Tous les intervenants ne se valent pas. Un chercheur de fuite certifié dispose d&apos;une formation spécifique, d&apos;équipements professionnels homologués et d&apos;une expérience terrain indispensable. DiagFuite répond à tous ces critères avec plus de 500 interventions réalisées à Toulouse et en grande couronne.
                </p>
                <div className="flex flex-col gap-3">
                  {differentiateurs.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-brand-text/70">
                      <CheckCircle className="size-4 text-brand-blue shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-dark rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl mb-4">Demander notre intervention</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Vous avez besoin d&apos;un chercheur de fuite à Toulouse ou dans la grande couronne ? Contactez-nous pour un devis gratuit sous 24h ou pour prendre rendez-vous directement.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+33614468777"
                    className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-5 py-3 rounded-xl transition-colors"
                  >
                    <Phone className="size-5" />
                    06 14 46 87 77
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center border border-white/30 hover:border-white text-white font-medium px-5 py-3 rounded-xl transition-colors text-sm"
                  >
                    Formulaire de devis gratuit
                  </Link>
                </div>
                <p className="text-xs text-white/50 mt-4 text-center">
                  Réponse garantie sous 24h — Intervention sous 48h
                </p>
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
              Questions fréquentes sur le chercheur de fuite
            </h2>
            <div className="flex flex-col gap-5">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-brand-bg rounded-xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-brand-dark mb-3">{item.q}</h3>
                  <p className="text-sm text-brand-text/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="text-brand-blue text-sm font-semibold hover:underline"
              >
                Voir toutes les questions fréquentes →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-8 bg-brand-bg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-brand-text/60">
            Voir aussi :{" "}
            <Link href="/prestations" className="text-brand-blue hover:underline">nos prestations de détection</Link>
            {" · "}
            <Link href="/rapport-expertise" className="text-brand-blue hover:underline">rapport d'expertise fuite d'eau</Link>
            {" · "}
            <Link href="/tarifs" className="text-brand-blue hover:underline">tarifs recherche de fuite Toulouse</Link>
            {" · "}
            <Link href="/assurance" className="text-brand-blue hover:underline">prise en charge assurance</Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
