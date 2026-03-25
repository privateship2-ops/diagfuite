import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { Droplets, Flame, Scan, Camera, AudioWaveform, FileText, CheckCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestations détection fuite non destructive Toulouse | DiagFuite",
  description:
    "Thermographie infrarouge, corrélation acoustique, endoscopie, détection fuite eau et gaz à Toulouse. Rapport expertise inclus. Devis gratuit sous 24h.",
  alternates: { canonical: "https://diagfuite.fr/prestations" },
  openGraph: {
    title: "Prestations de détection de fuite non destructive — Toulouse",
    description: "Toutes nos techniques de détection non destructive à Toulouse. Rapport expertise inclus.",
    url: "https://diagfuite.fr/prestations",
    images: [{ url: "https://diagfuite.fr/images/thermographie.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Détection de fuites non destructive",
  provider: {
    "@type": "LocalBusiness",
    name: "DiagFuite",
    telephone: "+33614468777",
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
    image: "/images/degats-eaux.jpg",
    imageAlt: "Détection fuite eau non destructive Toulouse",
    extendedContent: `
      <h3>Comment fonctionne la détection de fuite d'eau ?</h3>
      <p>La <strong>détection de fuite d'eau non destructive à Toulouse</strong> fait appel à plusieurs technologies complémentaires selon la nature et la localisation du problème. La corrélation acoustique détecte le bruit caractéristique de l'eau s'échappant sous pression d'une canalisation, même encastrée dans du béton ou enterrée à plusieurs mètres de profondeur. La thermographie infrarouge identifie les zones d'humidité par variation de température. Le gaz traceur (mélange inerte d'azote et d'hydrogène) est injecté dans le réseau et détecté en surface au centimètre près.</p>
      <h3>Dans quels cas y recourir ?</h3>
      <p>Faites appel à notre service de <strong>recherche de fuite eau</strong> si vous constatez : une facture d'eau anormalement élevée, des taches d'humidité sur les murs ou plafonds, un bruit de débit d'eau dans les murs, un sol anormalement humide ou soulevé, ou si votre compteur tourne sans raison apparente. Une fuite non détectée peut provoquer des dégâts structurels importants et des moisissures dangereuses pour la santé.</p>
      <h3>Avantages vs méthodes classiques</h3>
      <p>La <strong>recherche de fuite non destructive</strong> évite les démolitions coûteuses inhérentes aux méthodes traditionnelles (casser les murs, arracher le carrelage, ouvrir les dalles). Elle est plus rapide (2 à 4h vs plusieurs jours), plus précise, et le logement est conservé intact. Les travaux de réparation qui suivent sont ciblés et limités au strict nécessaire. L'assurance prend généralement en charge l'intégralité des frais.</p>
      <h3>Prix indicatif</h3>
      <p>De <strong>150 € à 380 € HT</strong> selon le type de fuite et la surface à inspecter. Devis gratuit fourni avant toute intervention. Dans la majorité des cas, ces frais sont couverts par votre <Link href="/assurance">assurance habitation</Link>.</p>
      <h3>Questions fréquentes</h3>
      <dl>
        <dt>Peut-on détecter une fuite sur plancher chauffant ?</dt>
        <dd>Oui, c'est même l'une de nos spécialités. La thermographie infrarouge est particulièrement efficace sur les planchers chauffants : la fuite crée une anomalie thermique visible à la caméra.</dd>
        <dt>La détection de fuite est-elle prise en charge par l'assurance ?</dt>
        <dd>Oui, dans la très grande majorité des cas. Votre assurance habitation couvre les frais de <Link href="/assurance">recherche de fuite</Link> dans le cadre d'un sinistre dégât des eaux.</dd>
        <dt>Combien de temps dure l'intervention ?</dt>
        <dd>Entre 1h30 et 3h selon la surface et la complexité. Le rapport d'expertise est remis le jour même par email.</dd>
      </dl>
    `,
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
    image: "/images/canalisation.jpg",
    imageAlt: "Détection fuite gaz Toulouse intervention",
    extendedContent: `
      <h3>Comment fonctionne la détection de fuite de gaz ?</h3>
      <p>La <strong>détection de fuite de gaz à Toulouse</strong> utilise des détecteurs électroniques homologués capables de détecter des concentrations de gaz (méthane, propane, butane) de l'ordre du ppm (partie par million). Le technicien balaie méthodiquement toutes les zones à risque : raccords, robinets, tuyauteries, compteur. En cas de fuite détectée, la localisation précise est effectuée et consignée dans un rapport de conformité.</p>
      <h3>Dans quels cas y recourir ?</h3>
      <p>Faites appel à nos services de <strong>recherche de fuite de gaz</strong> si vous sentez une odeur de gaz, si vous entendez un sifflement dans vos tuyauteries, si votre consommation de gaz a anormalement augmenté, ou en prévention avant une mise en location ou une transaction immobilière. Une fuite de gaz non détectée représente un danger vital. En cas d'odeur forte, évacuez immédiatement et appelez le 0800 473 333 (urgences gaz GRDF).</p>
      <h3>Avantages vs méthodes classiques</h3>
      <p>La détection électronique est infiniment plus sensible que le test traditionnel à l'eau savonneuse : elle détecte des fuites invisibles et inodores à l'œil nu. Elle inspecte l'intégralité de l'installation y compris les tuyauteries encastrées et les raccords inaccessibles, sans aucun démontage. Le rapport fourni est utilisable pour votre assurance et pour les démarches auprès de votre fournisseur d'énergie.</p>
      <h3>Prix indicatif</h3>
      <p>De <strong>150 € à 300 € HT</strong> selon l'étendue de l'installation à inspecter. Pour les urgences, une majoration peut s'appliquer. Devis gratuit sur demande.</p>
      <h3>Questions fréquentes</h3>
      <dl>
        <dt>Que faire si je sens le gaz chez moi ?</dt>
        <dd>Évacuez immédiatement, ne touchez aucun interrupteur, n'allumez aucun appareil, ouvrez les fenêtres en passant, et appelez le 0800 473 333 depuis l'extérieur. Appelez-nous ensuite pour une inspection complète.</dd>
        <dt>Intervenez-vous en urgence pour les fuites de gaz ?</dt>
        <dd>Oui, les fuites de gaz avérées sont traitées en priorité. Appelez le 06 14 46 87 77 pour une intervention urgente.</dd>
        <dt>Le rapport est-il accepté par le fournisseur de gaz ?</dt>
        <dd>Oui, notre rapport de conformité est reconnu par GRDF et les fournisseurs de gaz pour les démarches de remise en service.</dd>
      </dl>
    `,
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
    image: "/images/thermographie.jpg",
    imageAlt: "Thermographie infrarouge detection fuite Toulouse",
    extendedContent: `
      <h3>Comment fonctionne la thermographie infrarouge ?</h3>
      <p>La <strong>thermographie infrarouge fuite</strong> repose sur la détection des rayonnements thermiques émis par les surfaces. Une caméra thermique haute résolution capte ces infrarouges et génère une image colorée (thermogramme) où chaque couleur correspond à une température. L'eau froide qui s'infiltre dans un mur ou un plafond crée une tache plus froide (bleutée) facilement identifiable. À l'inverse, l'humidité chaude d'un plancher chauffant en fuite crée une anomalie thermique chaude. Cette technique identifie avec précision la forme, l'étendue et la localisation de la zone humide.</p>
      <h3>Dans quels cas y recourir ?</h3>
      <p>La <strong>thermographie infrarouge</strong> est particulièrement adaptée pour les infiltrations d'eau d'origine inconnue (murs humides, taches de plafond sans fuite visible), les planchers chauffants suspects, les toitures terrasses fuyardes, les façades présentant des remontées capillaires, et les sinistres complexes où plusieurs causes potentielles coexistent. Elle est souvent utilisée en complément d'autres techniques pour établir un diagnostic complet.</p>
      <h3>Avantages vs méthodes classiques</h3>
      <p>Contrairement aux méthodes invasives (carottages, sondages), la thermographie est totalement non destructive et inspecte des surfaces importantes en peu de temps. Elle produit des images documentées et objectivables pour votre assurance. Elle détecte les zones humides même sans fuite active visible, ce qui permet d'agir avant que les dégâts ne s'aggravent. Aucun contact avec les parois n'est nécessaire.</p>
      <h3>Prix indicatif</h3>
      <p>De <strong>150 € à 250 € HT</strong> selon la surface à inspecter. Cette prestation est souvent combinée à d'autres techniques (corrélation acoustique, gaz traceur) pour un diagnostic complet.</p>
      <h3>Questions fréquentes</h3>
      <dl>
        <dt>La thermographie fonctionne-t-elle sur tous les types de murs ?</dt>
        <dd>Elle est efficace sur la grande majorité des supports (béton, plâtre, carrelage, bois). Certains matériaux très réfléchissants peuvent nécessiter des conditions d'inspection spécifiques.</dd>
        <dt>Faut-il préparer les locaux avant l'inspection thermique ?</dt>
        <dd>Il est idéal que les locaux soient à température stabilisée depuis au moins 24h, sans chauffage ou climatisation actif pendant l'inspection. Nos techniciens vous informent des conditions optimales lors de la prise de rendez-vous.</dd>
        <dt>Les images thermiques sont-elles incluses dans le rapport ?</dt>
        <dd>Oui, les thermogrammes annotés sont systématiquement intégrés au rapport d'expertise remis à votre assurance.</dd>
      </dl>
    `,
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
    image: "/images/endoscopie.jpg",
    imageAlt: "Inspection canalisation caméra endoscopique Toulouse",
    extendedContent: `
      <h3>Comment fonctionne l'inspection par caméra endoscopique ?</h3>
      <p>L'<strong>endoscopie canalisation</strong> utilise une caméra haute définition montée sur un câble flexible ou sur roue motorisée, introduite dans les canalisations depuis un regard de visite ou un accès existant. La caméra progresse dans la canalisation et transmet en temps réel des images de l'état interne : fissures, joints défectueux, corrosion, dépôts calcaires, infiltration de racines, écrasements ou effondrements partiels. Tout est enregistré en vidéo et les captures d'écran significatives sont intégrées au rapport.</p>
      <h3>Dans quels cas y recourir ?</h3>
      <p>L'inspection par caméra est recommandée pour : diagnostiquer un bouchon récurrent sans cause apparente, vérifier l'état d'un réseau d'assainissement avant une acquisition immobilière, localiser une fuite ou une casse sur canalisation d'eaux usées, inspecter les canalisations d'eaux pluviales et les branchements enterrés, ou après des travaux de terrassement susceptibles d'avoir endommagé le réseau.</p>
      <h3>Avantages vs méthodes classiques</h3>
      <p>Sans l'endoscopie, il faudrait procéder à des fouilles et démolitions pour inspecter visuellement les canalisations. La caméra endoscopique inspecte des dizaines de mètres de réseau depuis un seul point d'accès, sans creuser ni démolir. Elle fournit une preuve visuelle indiscutable de l'état du réseau, utilisable pour les litiges, les transactions immobilières ou les dossiers d'assurance.</p>
      <h3>Prix indicatif</h3>
      <p>De <strong>200 € à 380 € HT</strong> selon la longueur et l'accessibilité des canalisations à inspecter. Devis gratuit sur demande.</p>
      <h3>Questions fréquentes</h3>
      <dl>
        <dt>Quels diamètres de canalisations pouvez-vous inspecter ?</dt>
        <dd>Nous inspectons les canalisations de 40 mm à 300 mm de diamètre, couvrant l'essentiel des installations domestiques et collectives.</dd>
        <dt>Les images sont-elles fournies en vidéo ?</dt>
        <dd>Oui, nous fournissons une vidéo de l'inspection complète ainsi que des captures d'écran annotées dans le rapport d'expertise.</dd>
        <dt>Peut-on inspecter les canalisations enterrées ?</dt>
        <dd>Oui, c'est même l'une des grandes forces de l'endoscopie : inspecter les canalisations enterrées depuis les regards existants, sans aucune fouille.</dd>
      </dl>
    `,
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
    image: "/images/correlation.jpg",
    imageAlt: "Corrélation acoustique détection fuite canalisation enterrée",
    extendedContent: `
      <h3>Comment fonctionne la corrélation acoustique ?</h3>
      <p>La <strong>corrélation acoustique</strong> est une technique physique avancée utilisée pour localiser les fuites sur canalisations sous pression. Deux capteurs piézoélectriques sont placés sur le réseau (prises de branchement, robinets, regards) de part et d'autre de la zone suspecte. Ces capteurs enregistrent simultanément les vibrations acoustiques générées par l'eau qui s'échappe de la fuite. Un algorithme de traitement du signal calcule la différence de temps d'arrivée du bruit entre les deux capteurs et en déduit la position exacte de la fuite sur la canalisation. La précision est remarquable : ±20 cm sur des tuyaux plastiques, ±10 cm sur de la fonte ou de l'acier.</p>
      <h3>Dans quels cas y recourir ?</h3>
      <p>La corrélation acoustique est la technique de référence pour les <strong>fuites sur canalisations enterrées</strong> (jardin, parking, voirie privée, réseaux collectifs), les canalisations encastrées sous dalle béton ou dans les murs porteurs, et les réseaux d'eau potable sur lesquels les autres techniques sont moins efficaces. Elle est indispensable pour localiser une fuite sans avoir à ouvrir des tranchées exploratoires.</p>
      <h3>Avantages vs méthodes classiques</h3>
      <p>Sans corrélation acoustique, localiser une fuite sur canalisation enterrée implique de creuser des tranchées pour chercher visuellement. Ces fouilles sont extrêmement coûteuses (souvent 1 000 à 5 000 € selon la surface) et aléatoires. La corrélation acoustique localise la fuite précisément avant toute ouverture, réduisant la tranchée nécessaire à 50×50 cm. Le gain économique est considérable. Cette technique fonctionne y compris pour des canalisations à plusieurs mètres de profondeur.</p>
      <h3>Prix indicatif</h3>
      <p>De <strong>300 € à 450 € HT</strong> selon le linéaire à inspecter et l'accessibilité du réseau. Prise en charge fréquente par l'<Link href="/assurance">assurance habitation</Link>.</p>
      <h3>Questions fréquentes</h3>
      <dl>
        <dt>La corrélation acoustique fonctionne-t-elle sur tous les matériaux ?</dt>
        <dd>Elle est très efficace sur les conduites métalliques (fonte, acier, cuivre) et fonctionnelle sur le PVC et le polyéthylène. Sur les matériaux souples, la précision peut être légèrement réduite mais reste suffisante pour localiser la fuite sans fouilles exploratoires.</dd>
        <dt>Faut-il avoir accès au réseau de deux côtés ?</dt>
        <dd>Idéalement oui. Nous avons besoin d'au moins deux points d'accès (robinets, compteurs, regards) encadrant la zone suspecte. Nos techniciens évaluent les accès disponibles lors de la prise de rendez-vous.</dd>
        <dt>La fuite doit-elle être active pour être détectée ?</dt>
        <dd>Oui, la corrélation acoustique requiert une fuite active sur un réseau sous pression. Elle n'est pas adaptée aux réseaux gravitaires (eaux usées hors pression).</dd>
      </dl>
    `,
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
    image: "/images/rapport.jpg",
    imageAlt: "Rapport expertise détection fuite assurance Toulouse",
    extendedContent: `
      <h3>Que contient le rapport d'expertise DiagFuite ?</h3>
      <p>Le <strong>rapport d'expertise de recherche de fuite</strong> est un document technique normalisé d'une dizaine de pages, rédigé par notre technicien certifié à l'issue de chaque intervention. Il comprend : l'identification complète de l'intervenant et ses certifications professionnelles, la description détaillée des lieux et du contexte du sinistre, les constatations visuelles avec description de l'état des installations, les méthodes de détection employées et les résultats de chaque mesure, la localisation précise de la fuite avec plan coté, photos annotées et cotes de distance depuis des points fixes, l'analyse technique des causes de la fuite, les travaux de réparation recommandés avec description de l'intervention nécessaire, et la conclusion technique signée.</p>
      <h3>À quoi sert-il ?</h3>
      <p>Ce document est la pièce centrale de votre dossier sinistre dégât des eaux. Il permet à votre <Link href="/assurance">assurance</Link> d'identifier le responsable et de déclencher la prise en charge financière. Il guide le plombier réparateur qui interviendra exactement au bon endroit, limitant les travaux au strict nécessaire. Il sert également de preuve en cas de litige avec votre voisin ou votre propriétaire. Pour les copropriétés, il détermine si la fuite relève des parties communes ou privatives.</p>
      <h3>Avantages vs méthodes classiques</h3>
      <p>Un rapport d'expertise DiagFuite est accepté sans réserve par l'ensemble des assureurs français membres de la convention IRSI, contrairement à un simple devis de plombier. Sa valeur probante est reconnue par les tribunaux en cas de contentieux. Il est fourni systématiquement et sans surcoût dans chaque intervention.</p>
      <h3>Prix indicatif</h3>
      <p>Le rapport d'expertise est <strong>inclus sans surcoût</strong> dans toutes nos prestations. Son coût est intégré au tarif de l'intervention, qui varie de 150 € à 450 € HT selon le type de détection réalisée.</p>
      <h3>Questions fréquentes</h3>
      <dl>
        <dt>Le rapport est-il reconnu par toutes les assurances ?</dt>
        <dd>Oui, notre rapport est reconnu et accepté sans réserve par AXA, MAAF, GMF, Allianz, MMA, Groupama, Matmut et la totalité des compagnies d'assurance françaises.</dd>
        <dt>Quand est remis le rapport ?</dt>
        <dd>Le rapport d'expertise est transmis par email le jour même de l'intervention, en fin de journée. Une version papier peut être remise sur demande lors de l'intervention.</dd>
        <dt>Peut-on utiliser le rapport pour un litige ?</dt>
        <dd>Oui, le rapport est un document technique signé par un expert certifié. Il est recevable devant les tribunaux comme preuve de l'origine et de la localisation d'une fuite.</dd>
      </dl>
    `,
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
              Technologies avancées, zéro destruction, rapport d&apos;expertise reconnu par les assurances.
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
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>
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

                  {/* Extended content */}
                  <div
                    className="mt-8 bg-brand-bg rounded-2xl p-6 lg:p-8 border border-gray-100 prestation-content"
                    dangerouslySetInnerHTML={{ __html: p.extendedContent }}
                  />
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
            <Link href="/processus" className="text-brand-blue hover:underline">notre processus d&apos;intervention</Link>
            {" · "}
            <Link href="/contact" className="text-brand-blue hover:underline">nous contacter</Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
