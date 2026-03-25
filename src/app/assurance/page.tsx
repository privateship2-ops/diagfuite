import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Recherche de fuite et assurance — Ce que vous devez savoir",
  description:
    "Convention IRSI, prise en charge assurance, locataire vs propriétaire, copropriété : tout savoir sur le remboursement de votre recherche de fuite.",
  alternates: { canonical: "https://diagfuite.fr/assurance" },
  openGraph: {
    title: "Recherche de fuite et assurance — Ce que vous devez savoir",
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
              Recherche de fuite et assurance — Ce que vous devez savoir
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Convention IRSI, prise en charge, responsabilités entre locataires et propriétaires : on vous explique tout.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-like">

          {/* Convention IRSI */}
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                La convention IRSI expliquée simplement
              </h2>
              <p className="text-brand-text/70 leading-relaxed mb-4">
                La <strong>convention IRSI</strong> (Indemnisation et Recours des Sinistres Immobiliers) est un accord entre assureurs qui simplifie le traitement des sinistres dégât des eaux entre voisins. Elle s'applique pour les dommages inférieurs à <strong>5 000 € HT</strong>.
              </p>
              <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-brand-dark mb-3">Comment fonctionne l'IRSI ?</h3>
                <div className="space-y-3">
                  {[
                    { label: "Dommages < 1 600 € HT", desc: "Chaque assureur règle les dommages de son propre assuré, sans recours entre assureurs." },
                    { label: "Dommages entre 1 600 € et 5 000 € HT", desc: "L'assureur de la victime indemnise son assuré, puis exerce un recours forfaitaire contre l'assureur du responsable." },
                    { label: "Dommages > 5 000 € HT", desc: "Les règles du droit commun s'appliquent. Traitement au cas par cas entre assureurs." },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-brand-dark text-sm">{item.label}</p>
                        <p className="text-sm text-brand-text/70">{item.desc}</p>
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

          {/* Qui paie ? */}
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                Qui paie la recherche de fuite ?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-bold text-blue-800 mb-3">Le locataire paie si :</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Joint de robinet usé non remplacé</li>
                    <li>• Flexible de douche défectueux</li>
                    <li>• Canalisation bouchée par négligence</li>
                    <li>• Mauvaise utilisation des équipements</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                  <h3 className="font-bold text-orange-800 mb-3">Le propriétaire paie si :</h3>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li>• Canalisation encastrée défectueuse</li>
                    <li>• Toiture en mauvais état</li>
                    <li>• Vétusté de l'installation</li>
                    <li>• Vice de construction d'origine</li>
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
                En copropriété : qui est responsable ?
              </h2>
              <p className="text-brand-text/70 leading-relaxed mb-4">
                En copropriété, la responsabilité dépend de la localisation de la fuite par rapport aux parties communes et privatives définies dans le règlement de copropriété.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-dark text-white">
                      <th className="text-left p-3 rounded-tl-lg">Localisation de la fuite</th>
                      <th className="text-left p-3">Responsable</th>
                      <th className="text-left p-3 rounded-tr-lg">Assurance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { loc: "Colonne montante collective", resp: "Syndicat de copropriété", assurance: "Assurance copropriété" },
                      { loc: "Canalisation privative d'un lot", resp: "Copropriétaire du lot", assurance: "Assurance habitation du copropriétaire" },
                      { loc: "Toiture commune", resp: "Syndicat de copropriété", assurance: "Assurance copropriété" },
                      { loc: "Terrasse privative", resp: "Copropriétaire", assurance: "Assurance habitation du copropriétaire" },
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
                Les démarches à suivre pour être remboursé
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { num: "1", title: "Déclarez le sinistre dans les 5 jours", desc: "Signalez le dégât des eaux à votre assurance habitation dans les 5 jours ouvrés suivant la découverte du sinistre." },
                  { num: "2", title: "Faites réaliser la recherche de fuite", desc: "DiagFuite intervient sous 48h et vous remet un rapport d'expertise reconnu par toutes les assurances." },
                  { num: "3", title: "Transmettez le rapport à votre assureur", desc: "Envoyez notre rapport à votre assureur pour déclencher la prise en charge et l'expertise des dommages." },
                  { num: "4", title: "Faites réaliser les réparations", desc: "Un plombier peut intervenir précisément à l'endroit identifié dans notre rapport, limitant les travaux." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">{step.title}</p>
                      <p className="text-sm text-brand-text/70 mt-0.5">{step.desc}</p>
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
                  <p className="font-semibold text-amber-800 mb-1">Important : ne commencez pas les travaux avant l'accord de votre assurance</p>
                  <p className="text-sm text-amber-700">
                    Des travaux effectués avant l'expertise de votre assureur peuvent réduire ou annuler votre remboursement. Obtenez d'abord notre rapport, puis l'accord de votre assurance avant toute réparation.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Related links */}
          <FadeIn>
            <div className="border-t border-gray-100 pt-8">
              <h2 className="font-bold text-brand-dark mb-4">Articles connexes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/blog/convention-irsi", label: "Convention IRSI et recherche de fuite : tout comprendre" },
                  { href: "/blog/constat-degat-des-eaux", label: "Comment remplir un constat de dégât des eaux" },
                  { href: "/blog/qui-paie-recherche-fuite", label: "Qui paie la recherche de fuite ?" },
                  { href: "/tarifs", label: "Voir nos tarifs de recherche de fuite" },
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
