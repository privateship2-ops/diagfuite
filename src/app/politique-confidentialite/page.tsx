import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Politique de confidentialité | DiagFuite",
  description: "Politique de confidentialité et protection des données personnelles de DiagFuite.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Politique de confidentialité" }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-8">Politique de confidentialité</h1>

          <div className="space-y-8 text-brand-text/70">
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">Collecte des données</h2>
              <p className="leading-relaxed">DiagFuite collecte uniquement les données nécessaires au traitement de vos demandes (nom, email, téléphone, adresse) via notre formulaire de contact. Ces données ne sont jamais revendues à des tiers.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">Finalité du traitement</h2>
              <p className="leading-relaxed">Vos données sont utilisées uniquement pour vous contacter dans le cadre de votre demande de devis ou d'information.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">Durée de conservation</h2>
              <p className="leading-relaxed">Vos données sont conservées pendant 3 ans à compter de votre dernière interaction avec DiagFuite.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">Vos droits</h2>
              <p className="leading-relaxed">Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données. Pour exercer ces droits, contactez-nous à : contact@diagfuite.fr</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">Cookies</h2>
              <p className="leading-relaxed">Ce site utilise des cookies fonctionnels nécessaires à son bon fonctionnement. Vous pouvez refuser les cookies non essentiels via la bannière qui s'affiche lors de votre première visite.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
