import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { CheckCircle, AlertCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Recherche fuite assurance — Convention IRSI | DiagFuite Toulouse",
  description:
    "Prise en charge recherche fuite assurance habitation, convention IRSI expliquée, locataire vs propriétaire, étapes déclaration sinistre. Guide complet DiagFuite.",
  alternates: { canonical: "https://diagfuite.fr/assurance" },
  openGraph: {
    title: "Recherche fuite assurance — Convention IRSI | DiagFuite",
    description: "Convention IRSI expliquée, prise en charge, responsabilités. Guide complet pour votre sinistre dégât des eaux.",
    url: "https://diagfuite.fr/assurance",
  },
};

export default function AssurancePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Assurance" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Recherche de fuite et assurance — Guide complet
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Convention IRSI, prise en charge, responsabilités entre locataires et propriétaires : tout ce que vous devez savoir pour être remboursé.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <FadeIn>
            <div className="mb-12 bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="size-6 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-bold text-green-800 mb-2">Bonne nouvelle : la recherche de fuite est généralement prise en charge</h2>
                  <p className="text-sm text-green-700 leading-relaxed">
                    Dans la grande majorité des sinistres dégât des eaux, les frais de <strong>recherche de fuite assurance</strong> sont couverts par votre contrat d&apos;assurance habitation. DiagFuite est agréé par AXA, MAAF, GMF, Allianz, MMA, Groupama, Matmut et SMABTP. Notre rapport d&apos;expertise est accepté sans réserve par tous les assureurs français.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Convention IRSI */}
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                La convention IRSI expliquée simplement
              </h2>
              <p className="text-brand-text/70 leading-relaxed mb-4">
                La <strong>convention IRSI</strong> (Indemnisation et Recours des Sinistres Immobiliers) est un accord interprofessionnel signé par la quasi-totalité des compagnies d&apos;assurance françaises. Elle remplace depuis 2018 l&apos;ancienne convention CIDRE et vise à simplifier et accélérer le traitement des sinistres dégât des eaux entre voisins ou entre copropriétaires.
              </p>
              <p className="text-brand-text/70 leading-relaxed mb-6">
                Son principe fondamental : quand un sinistre dégât des eaux survient entre deux logements, c&apos;est l&apos;<strong>assureur de la victime</strong> qui gère le dossier et indemnise son assuré, sans que vous ayez à vous battre contre l&apos;assureur de votre voisin responsable. Les recours entre assureurs se font ensuite de façon forfaitaire et automatique, sans intervention de votre part.
              </p>
              <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-brand-dark mb-4">Les trois paliers de la convention IRSI</h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Dommages inférieurs à 1 600 € HT",
                      desc: "Chaque assureur règle les dommages de son propre assuré sans recours entre assureurs. Traitement simplifié et rapide. La recherche de fuite est prise en charge par l'assureur de la victime.",
                      color: "text-green-700",
                    },
                    {
                      label: "Dommages entre 1 600 € et 5 000 € HT",
                      desc: "L'assureur de la victime indemnise son assuré et exerce ensuite un recours forfaitaire auprès de l'assureur du responsable. Vous n'avez pas à gérer ce recours vous-même.",
                      color: "text-blue-700",
                    },
                    {
                      label: "Dommages supérieurs à 5 000 € HT",
                      desc: "Les règles du droit commun s'appliquent. Les assureurs traitent le sinistre au cas par cas. Une expertise contradictoire peut être mandatée. La convention IRSI ne s'applique plus.",
                      color: "text-orange-700",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <p className={`font-semibold text-brand-dark text-sm`}>{item.label}</p>
                        <p className="text-sm text-brand-text/70 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-brand-text/60">
                Pour en savoir plus :{" "}
                <Link href="/blog/convention-irsi" className="text-brand-blue hover:underline">
                  notre article complet sur la convention IRSI
                </Link>
              </p>
            </div>
          </FadeIn>

          {/* Assureurs partenaires */}
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                Nos assurances partenaires
              </h2>
              <p className="text-brand-text/70 leading-relaxed mb-6">
                DiagFuite est officiellement agréé et travaille régulièrement avec toutes les grandes compagnies d&apos;assurance françaises. Notre rapport d&apos;expertise est systématiquement accepté sans réserve pour le traitement de votre sinistre <strong>prise en charge recherche fuite assurance habitation</strong>.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {["AXA", "MAAF", "GMF", "Allianz", "MMA", "Groupama", "Matmut", "SMABTP", "Generali", "Aviva", "Pacifica", "Macif"].map((assurance) => (
                  <div key={assurance} className="bg-brand-bg border border-gray-200 rounded-xl p-3 text-center">
                    <p className="font-bold text-brand-dark text-sm">{assurance}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand-text/50 mt-3">Et tous les assureurs membres de la convention IRSI.</p>
            </div>
          </FadeIn>

          {/* Qui paie ? */}
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                Qui paie la recherche de fuite ?
              </h2>
              <p className="text-brand-text/70 leading-relaxed mb-6">
                La responsabilité dépend de l&apos;origine de la fuite. Notre rapport d&apos;expertise détermine précisément cette origine, ce qui permet d&apos;identifier le responsable de façon objective et incontestable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-bold text-blue-800 mb-3">Le locataire est responsable si :</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Joint de robinet usé non remplacé</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Flexible de douche défectueux</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Canalisation bouchée par négligence</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Mauvaise utilisation des équipements</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Défaut d&apos;entretien des équipements privatifs</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                  <h3 className="font-bold text-orange-800 mb-3">Le propriétaire est responsable si :</h3>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Canalisation encastrée défectueuse</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Toiture ou terrasse en mauvais état</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Vétusté de l&apos;installation générale</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Vice de construction d&apos;origine</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Défaillance des gros équipements</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
                  <h3 className="font-bold text-purple-800 mb-3">La copropriété est responsable si :</h3>
                  <ul className="space-y-2 text-sm text-purple-700">
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Colonne montante collective</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Toiture commune</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Réseau enterré commun</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Parties communes humides</li>
                    <li className="flex items-start gap-2"><CheckCircle className="size-3.5 shrink-0 mt-0.5" />Vide-sanitaire commun</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-brand-text/60">
                Article de référence :{" "}
                <Link href="/blog/qui-paie-recherche-fuite" className="text-brand-blue hover:underline">
                  qui paie la recherche de fuite, locataire ou propriétaire ?
                </Link>
              </p>
            </div>
          </FadeIn>

          {/* Copropriété */}
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                En copropriété : tableau des responsabilités
              </h2>
              <p className="text-brand-text/70 leading-relaxed mb-4">
                En copropriété, la responsabilité dépend de la localisation de la fuite par rapport aux parties communes et privatives définies dans le règlement de copropriété. Notre rapport précise systématiquement cette localisation.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-dark text-white">
                      <th className="text-left p-3 rounded-tl-lg">Localisation de la fuite</th>
                      <th className="text-left p-3">Responsable</th>
                      <th className="text-left p-3 rounded-tr-lg">Assurance sollicitée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { loc: "Colonne montante collective", resp: "Syndicat de copropriété", assurance: "Assurance copropriété" },
                      { loc: "Canalisation privative d'un lot", resp: "Copropriétaire du lot", assurance: "Assurance habitation copropriétaire" },
                      { loc: "Toiture commune", resp: "Syndicat de copropriété", assurance: "Assurance copropriété" },
                      { loc: "Terrasse privative", resp: "Copropriétaire", assurance: "Assurance habitation copropriétaire" },
                      { loc: "Vide-sanitaire commun", resp: "Syndicat de copropriété", assurance: "Assurance copropriété" },
                      { loc: "Raccord sur canalisation collective", resp: "Syndicat si vétusté, copropriétaire si travaux privatifs", assurance: "À déterminer par expertise" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-brand-bg" : "bg-white"}>
                        <td className="p-3 text-brand-dark">{row.loc}</td>
                        <td className="p-3 text-brand-text/70">{row.resp}</td>
                        <td className="p-3 text-brand-text/70">{row.assurance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Steps */}
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                Comment déclarer un sinistre et être remboursé
              </h2>
              <p className="text-brand-text/70 leading-relaxed mb-6">
                Suivez ces étapes dans l&apos;ordre pour maximiser vos chances de remboursement et éviter les erreurs qui pourraient compromettre votre prise en charge.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    num: "1",
                    title: "Déclarez le sinistre dans les 5 jours ouvrés",
                    desc: "Signalez le dégât des eaux à votre assurance habitation dans les 5 jours ouvrés suivant la découverte. Ce délai est contractuel et impératif. Un dépassement peut entraîner la réduction ou le refus de votre indemnisation. Déclarez également si vous êtes responsable, pour couvrir les dommages chez votre voisin.",
                  },
                  {
                    num: "2",
                    title: "Photographiez tous les dégâts",
                    desc: "Prenez des photos complètes de tous les dommages visibles : taches d'humidité, déformations, moisissures, dégâts matériels. Ces photos constituent des preuves indispensables pour votre dossier d'indemnisation. Conservez également tous les objets détériorés jusqu'à l'expertise de l'assurance.",
                  },
                  {
                    num: "3",
                    title: "Faites réaliser la recherche de fuite par DiagFuite",
                    desc: "Contactez DiagFuite pour une intervention sous 48h. Nos techniciens localisent précisément la fuite et rédigent un rapport d'expertise complet reconnu par toutes les assurances. Ce rapport est indispensable pour votre dossier et pour guider les travaux de réparation.",
                  },
                  {
                    num: "4",
                    title: "Transmettez le rapport à votre assureur",
                    desc: "Envoyez notre rapport d'expertise à votre assurance pour déclencher la prise en charge officielle. L'assureur peut alors mandater un expert pour évaluer les dommages. Notre rapport facilite et accélère cette procédure en fournissant toutes les informations techniques nécessaires.",
                  },
                  {
                    num: "5",
                    title: "Attendez l'accord avant les travaux",
                    desc: "N'effectuez aucune réparation définitive avant l'accord écrit de votre assurance. Des travaux prématurés peuvent réduire ou annuler votre remboursement. Seules les mesures d'urgence (arrêter la fuite active, protéger les biens) sont autorisées avant l'accord.",
                  },
                  {
                    num: "6",
                    title: "Faites réaliser les réparations",
                    desc: "Une fois l'accord de votre assurance obtenu, faites intervenir un plombier qualifié en lui remettant notre rapport. Il interviendra exactement au bon endroit, limitant les travaux au strict nécessaire. Notre rapport indique précisément la nature et la localisation des réparations à effectuer.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">{step.title}</p>
                      <p className="text-sm text-brand-text/70 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Warning */}
          <FadeIn>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1">Important : ne commencez pas les travaux sans accord de votre assurance</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Des travaux effectués avant l&apos;expertise de votre assureur peuvent réduire ou annuler votre remboursement. Obtenez d&apos;abord notre rapport de recherche de fuite, puis l&apos;accord écrit de votre assurance avant toute réparation définitive. En cas d&apos;urgence absolue (fuite active inondante), stoppez la fuite et documentez tout, mais ne remettez pas en état avant l&apos;expertise.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Related links */}
          <FadeIn>
            <div className="border-t border-gray-100 pt-8">
              <h2 className="font-bold text-brand-dark mb-4">Articles et pages connexes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/blog/convention-irsi", label: "Convention IRSI et recherche de fuite : tout comprendre" },
                  { href: "/blog/constat-degat-des-eaux", label: "Comment remplir un constat de dégât des eaux" },
                  { href: "/blog/qui-paie-recherche-fuite", label: "Qui paie la recherche de fuite ?" },
                  { href: "/tarifs", label: "Voir nos tarifs de détection de fuite non destructive" },
                  { href: "/prestations", label: "Nos prestations : thermographie, acoustique, endoscopie" },
                  { href: "/contact", label: "Demander un devis gratuit sous 24h" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-brand-blue hover:underline"
                  >
                    <ArrowRight className="size-3.5 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
