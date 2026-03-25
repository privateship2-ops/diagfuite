import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { WhyUs } from "@/components/sections/WhyUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { ZoneIntervention } from "@/components/sections/ZoneIntervention";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/sections/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { blogPosts } from "@/data/blog-posts";
import { CheckCircle, ChevronRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "DiagFuite — Détection de fuite non destructive à Toulouse",
  description:
    "DiagFuite : détection de fuite non destructive à Toulouse. Agréé assurances, intervention 48h, rapport expertise. Devis gratuit. Fuite d'eau, gaz, thermographie.",
  alternates: { canonical: "https://diagfuite.fr/" },
  openGraph: {
    title: "DiagFuite — Détection de fuite non destructive à Toulouse",
    description: "Expert en détection de fuites à Toulouse. Non destructif, agréé assurances, rapport expertise. Devis gratuit.",
    url: "https://diagfuite.fr/",
    images: [{ url: "https://diagfuite.fr/images/hero.jpg", width: 1200, height: 630 }],
  },
};

const homepageFaqItems = [
  {
    question: "Quel est le prix d'une recherche de fuite à Toulouse ?",
    answer:
      "Le tarif d'une recherche de fuite non destructive à Toulouse varie entre 150 € et 450 € HT selon la complexité. Pour une fuite simple en appartement, comptez 150–250 € HT. Pour une canalisation encastrée ou enterrée, le tarif monte à 250–450 € HT. Chaque devis est gratuit et personnalisé. Dans la majorité des cas, ces frais sont entièrement pris en charge par votre assurance habitation via la convention IRSI. Nous établissons votre devis gratuitement sous 24h après avoir analysé votre situation.",
    category: "Tarifs",
  },
  {
    question: "La recherche de fuite est-elle prise en charge par mon assurance ?",
    answer:
      "Oui, dans la plupart des cas. Votre assurance habitation couvre les frais de recherche de fuite dans le cadre du sinistre dégât des eaux. La convention IRSI (Indemnisation et Recours des Sinistres Immobiliers) encadre cette prise en charge pour les sinistres inférieurs à 5 000 € HT. Notre rapport d'expertise est reconnu par AXA, MAAF, GMF, Allianz, MMA, Groupama et tous les assureurs membres de la convention. Déclarez votre sinistre à votre assurance dans les 5 jours ouvrés et transmettez-leur notre rapport pour déclencher le remboursement.",
    category: "Assurance",
  },
  {
    question: "Qu'est-ce qu'une recherche de fuite non destructive ?",
    answer:
      "La recherche de fuite non destructive utilise des technologies avancées (thermographie infrarouge, corrélation acoustique, gaz traceur, caméra endoscopique) pour localiser la source d'une fuite sans casser les murs, percer les sols ou creuser le jardin. Contrairement aux méthodes destructives qui génèrent des travaux coûteux, notre approche préserve intégralement votre logement. La localisation est précise au centimètre, permettant au plombier d'intervenir exactement au bon endroit, limitant les travaux de réparation.",
    category: "Technique",
  },
  {
    question: "Quel est votre délai d'intervention à Toulouse ?",
    answer:
      "DiagFuite intervient sous 48 heures ouvrées à Toulouse et dans toute la grande couronne toulousaine (rayon 40 km). Pour les urgences — fuite active, risque d'inondation, fuite de gaz — nous faisons tout pour intervenir le jour même ou le lendemain. Nos horaires : lundi–vendredi 8h–18h, samedi 9h–13h. Pour une urgence, appelez directement le 06 14 46 87 77.",
    category: "Pratique",
  },
  {
    question: "Fournissez-vous un rapport pour mon assurance ?",
    answer:
      "Oui, systématiquement et sans surcoût. Chaque intervention donne lieu à un rapport d'expertise complet comprenant : localisation précise de la fuite avec photos annotées, causes identifiées, travaux préconisés et résultats de tous les tests effectués. Ce document, reconnu par toutes les assurances françaises, est remis par email le jour même. Il constitue la pièce centrale de votre dossier sinistre pour obtenir le remboursement.",
    category: "Pratique",
  },
  {
    question: "Qui paie la recherche de fuite, le locataire ou le propriétaire ?",
    answer:
      "C'est l'assurance du responsable de la fuite qui prend en charge les frais. Le propriétaire est responsable si la fuite provient d'une canalisation encastrée, d'une toiture défectueuse ou d'une vétusté de l'installation. Le locataire l'est si la fuite résulte d'un défaut d'entretien courant (joint usé, flexible défectueux). Notre rapport d'expertise identifie précisément l'origine, ce qui détermine objectivement la responsabilité et facilite le remboursement.",
    category: "Responsabilités",
  },
];

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const recentPosts = blogPosts.slice(0, 3);

const avisClients = [
  {
    name: "Isabelle M.",
    date: "mars 2025",
    rating: 5,
    text: "Intervention rapide et très professionnelle. La fuite sur ma canalisation encastrée dans le mur a été localisée en moins de 2h sans casser quoi que ce soit. Le rapport a été accepté par mon assurance AXA dès le premier envoi. Je recommande vivement DiagFuite.",
    context: "Fuite canalisation encastrée — Toulouse (31)",
  },
  {
    name: "Marc D.",
    date: "février 2025",
    rating: 5,
    text: "J'avais une hausse inexpliquée de ma consommation d'eau depuis plusieurs mois. DiagFuite a détecté une fuite sur mon réseau enterré dans le jardin, à 40 cm de profondeur. Précision incroyable avec leur corrélateur acoustique. Technicien ponctuel, pédagogue et rapport reçu le soir même.",
    context: "Fuite réseau enterré — Blagnac (31)",
  },
  {
    name: "Sophie et Laurent T.",
    date: "janvier 2025",
    rating: 5,
    text: "Suite à des dégâts chez notre voisin du dessous, nous avons contacté DiagFuite en urgence. L'équipe est intervenue le lendemain matin. Plancher chauffant percé par des travaux, localisé au thermographe en 45 minutes. Le rapport a tout réglé avec la copropriété et l'assurance.",
    context: "Fuite plancher chauffant — Colomiers (31)",
  },
  {
    name: "Patrick R.",
    date: "décembre 2024",
    rating: 5,
    text: "Très bonne expérience. Mon syndic avait du mal à gérer un sinistre récurrent dans notre immeuble. DiagFuite est intervenu, a localisé la fuite sur la colonne montante et fourni un rapport détaillé qui a permis au syndic de lancer les travaux au bon endroit. Efficace et sérieux.",
    context: "Fuite colonne montante — Tournefeuille (31)",
  },
  {
    name: "Nathalie B.",
    date: "novembre 2024",
    rating: 5,
    text: "Devis clair, intervention à l'heure, rapport complet reçu le soir. La fuite sur ma toiture-terrasse était invisible à l'œil nu — la thermographie a révélé une zone d'infiltration de 2 m² que même mon plombier n'avait pas vue. MAAF a remboursé sans discussion.",
    context: "Infiltration toiture-terrasse — Ramonville (31)",
  },
  {
    name: "Thierry L.",
    date: "octobre 2024",
    rating: 5,
    text: "J'avais contacté deux autres prestataires avant DiagFuite sans résultat. Leur technicien a trouvé une microfissure sur un raccord de radiateur dans une gaine technique inaccessible grâce à leur caméra endoscopique. Très satisfait du service, rapport impeccable.",
    context: "Fuite réseau chauffage — Balma (31)",
  },
];

const categoryColors: Record<string, string> = {
  Assurance: "bg-blue-100 text-blue-700",
  Conseils: "bg-green-100 text-green-700",
  Réglementation: "bg-purple-100 text-purple-700",
  Techniques: "bg-orange-100 text-orange-700",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />

      <Hero />
      <ServiceCards />
      <WhyUs />
      <ProcessSteps />
      <Testimonials />

      {/* À propos section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#1E3A5F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
                À propos
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6">
                DiagFuite, votre expert en détection de fuite à Toulouse
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                DiagFuite est une entreprise spécialisée dans la{" "}
                <Link href="/prestations" className="text-brand-blue hover:underline">
                  détection de fuite non destructive
                </Link>{" "}
                implantée à{" "}
                <Link href="/zone-intervention" className="text-brand-blue hover:underline">
                  Toulouse
                </Link>{" "}
                et intervenant dans toute la grande couronne toulousaine (rayon 40 km). Nos techniciens certifiés mettent leur expertise et leur matériel de pointe au service de particuliers, syndics, assureurs et collectivités confrontés à des problèmes de fuites d'eau ou de gaz.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                Notre approche 100% non destructive préserve intégralement votre logement : pas de casse, pas de démolition, pas de travaux inutiles. Grâce à nos technologies (thermographie infrarouge, corrélation acoustique, caméra endoscopique, gaz traceur), nous localisons toute fuite au centimètre près, y compris les fuites sur canalisations encastrées, sous dalle ou enterrées.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                Agréé par toutes les compagnies d'assurance — AXA, MAAF, GMF, Allianz, MMA, Groupama — notre rapport d'expertise est systématiquement fourni à l'issue de chaque intervention. Ce document reconnu facilite votre prise en charge par{" "}
                <Link href="/assurance" className="text-brand-blue hover:underline">
                  l'assurance
                </Link>{" "}
                dans le cadre de la convention IRSI. Notre engagement : qualité, transparence et réactivité sous 48h.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Techniciens certifiés et équipements homologués",
                  "Rapport d'expertise reconnu par toutes les assurances",
                  "Intervention sous 48h dans tout le département 31",
                  "Devis gratuit, tarifs transparents sans surprise",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle className="size-4 text-brand-orange shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/technicien-2.jpg"
                  alt="Technicien DiagFuite en intervention de recherche de fuite à Toulouse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "+500", label: "interventions réalisées" },
                  { value: "48h", label: "délai d'intervention" },
                  { value: "100%", label: "non destructif" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-xl p-4 text-center border border-white/20"
                  >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/70 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ZoneIntervention />

      {/* FAQ section */}
      <section className="py-16 lg:py-20 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-2">
              Questions fréquentes sur la recherche de fuite
            </h2>
            <p className="text-brand-text/60 mt-3 text-sm">
              Les réponses aux questions que nos clients nous posent le plus souvent.
            </p>
          </div>
          <FaqAccordion items={homepageFaqItems} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
            >
              Voir toutes les questions fréquentes
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
              Blog
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-2">
              Nos conseils &amp; guides pratiques
            </h2>
            <p className="text-brand-text/60 mt-3 text-sm max-w-xl mx-auto">
              Assurance, réglementation, techniques — tout ce que vous devez savoir sur la recherche de fuite.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-brand-bg rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-blue/30 hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3 ${
                      categoryColors[post.category] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {post.category}
                  </span>
                  <h3 className="font-bold text-brand-dark text-base leading-snug mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-text/60 leading-relaxed line-clamp-2 flex-1">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-brand-orange font-semibold text-sm group-hover:gap-2 transition-all">
                    Lire l&apos;article
                    <ChevronRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark font-semibold px-6 py-3 rounded-xl hover:bg-brand-dark hover:text-white transition-colors"
            >
              Voir tous les articles
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 lg:py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
              Avis clients
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-2">
              Nos derniers avis clients
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="size-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-brand-text/60 text-sm ml-1">5,0 · +120 avis Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {avisClients.map((avis) => (
              <div key={avis.name} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`size-4 ${i <= avis.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`} />
                  ))}
                </div>
                <p className="text-sm text-brand-text/80 leading-relaxed flex-1">&ldquo;{avis.text}&rdquo;</p>
                <div className="pt-2 border-t border-gray-100">
                  <p className="font-semibold text-brand-dark text-sm">{avis.name}</p>
                  <p className="text-xs text-brand-text/50 mt-0.5">{avis.context} · {avis.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/temoignages"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
            >
              Voir tous les témoignages clients
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick contact form section */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
                Devis gratuit
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-2 mb-4">
                Une fuite ? Contactez-nous
              </h2>
              <p className="text-brand-text/70 leading-relaxed mb-6">
                Décrivez votre situation et recevez un devis gratuit sous 24h. Intervention sous 48h à{" "}
                <Link href="/zone-intervention" className="text-brand-blue hover:underline">
                  Toulouse
                </Link>{" "}
                et grande couronne.
              </p>
              <div className="flex flex-col gap-3 text-sm text-brand-text/80">
                <p>→ <Link href="/tarifs" className="text-brand-blue hover:underline">Consulter nos tarifs de recherche de fuite</Link></p>
                <p>→ <Link href="/assurance" className="text-brand-blue hover:underline">Comprendre la prise en charge par votre assurance</Link></p>
                <p>→ <Link href="/faq" className="text-brand-blue hover:underline">Consulter notre FAQ</Link></p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
