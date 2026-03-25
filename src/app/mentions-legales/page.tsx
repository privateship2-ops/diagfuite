import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions légales | DiagFuite",
  description: "Mentions légales de DiagFuite, entreprise spécialisée dans la détection de fuites non destructive à Toulouse.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Mentions légales" }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-8">Mentions légales</h1>

          <div className="prose max-w-none text-brand-text/70 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">Éditeur du site</h2>
              <p>DiagFuite<br />
              Toulouse, France<br />
              Tél : 06 14 46 87 77<br />
              Email : contact@diagfuite.fr</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, California 94104, États-Unis.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">Propriété intellectuelle</h2>
              <p>L'ensemble du contenu de ce site (textes, images, logos) est protégé par le droit d'auteur. Toute reproduction sans autorisation écrite préalable de DiagFuite est interdite.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">Limitation de responsabilité</h2>
              <p>DiagFuite s'efforce de maintenir les informations de ce site à jour. Cependant, DiagFuite ne peut garantir l'exactitude, la complétude ou l'actualité des informations publiées.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
