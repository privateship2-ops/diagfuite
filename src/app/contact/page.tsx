import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/sections/FadeIn";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contactez DiagFuite — Devis gratuit sous 24h | Toulouse",
  description:
    "Contactez DiagFuite pour votre recherche de fuite à Toulouse. Devis gratuit sous 24h. Formulaire, téléphone, email. Intervention sous 48h.",
  alternates: { canonical: "https://diagfuite.fr/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="bg-brand-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Contactez DiagFuite — Devis gratuit sous 24h
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Une fuite ? Une infiltration ? Contactez-nous. Nous vous répondons sous 24h et intervenons sous 48h à Toulouse et grande couronne.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <h2 className="text-2xl font-bold text-brand-dark mb-2">
                  Formulaire de demande de devis
                </h2>
                <p className="text-brand-text/60 text-sm mb-6">Réponse garantie sous 24h — Sans engagement</p>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Contact info */}
              <FadeIn delay={0.1}>
                <div className="bg-brand-bg rounded-2xl border border-gray-100 p-6">
                  <h2 className="font-bold text-brand-dark mb-4">Coordonnées</h2>
                  <div className="flex flex-col gap-4">
                    <a href="tel:+33561000000" className="flex items-center gap-3 text-sm hover:text-brand-blue transition-colors group">
                      <div className="w-9 h-9 bg-brand-blue/10 group-hover:bg-brand-blue/20 rounded-xl flex items-center justify-center transition-colors">
                        <Phone className="size-4 text-brand-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark group-hover:text-brand-blue">05 61 00 00 00</p>
                        <p className="text-xs text-brand-text/50">Appel direct</p>
                      </div>
                    </a>
                    <a href="mailto:contact@diagfuite.fr" className="flex items-center gap-3 text-sm hover:text-brand-blue transition-colors group">
                      <div className="w-9 h-9 bg-brand-blue/10 group-hover:bg-brand-blue/20 rounded-xl flex items-center justify-center transition-colors">
                        <Mail className="size-4 text-brand-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark group-hover:text-brand-blue">contact@diagfuite.fr</p>
                        <p className="text-xs text-brand-text/50">Réponse sous 24h</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-9 h-9 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                        <MapPin className="size-4 text-brand-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark">Toulouse et grande couronne</p>
                        <p className="text-xs text-brand-text/50">Département 31 — Rayon 40 km</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-9 h-9 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="size-4 text-brand-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark">Horaires</p>
                        <p className="text-xs text-brand-text/60 mt-0.5">Lun – Ven : 8h00 – 18h00</p>
                        <p className="text-xs text-brand-text/60">Sam : 9h00 – 13h00</p>
                        <p className="text-xs text-brand-text/60">Urgences : sur devis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Guarantees */}
              <FadeIn delay={0.15}>
                <div className="bg-brand-dark rounded-2xl p-6 text-white">
                  <h2 className="font-bold mb-4">Nos engagements</h2>
                  <div className="flex flex-col gap-3">
                    {[
                      "Devis gratuit sous 24h",
                      "Intervention sous 48h",
                      "Rapport expertise inclus",
                      "Agréé assurances",
                      "Zéro destruction",
                      "Prix transparent, sans surprise",
                    ].map((g) => (
                      <div key={g} className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle className="size-4 text-brand-blue shrink-0" />
                        {g}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Map placeholder */}
              <FadeIn delay={0.2}>
                <div className="rounded-2xl overflow-hidden border border-gray-100 h-48 bg-gray-100 flex items-center justify-center">
                  <iframe
                    title="Localisation DiagFuite Toulouse"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=1.2442%2C43.5047%2C1.6442%2C43.7047&layer=mapnik"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-brand-text/50 mt-2 text-center">Toulouse et sa grande couronne</p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <p className="text-xs text-brand-text/50 text-center">
                  Voir aussi :{" "}
                  <Link href="/tarifs" className="text-brand-blue hover:underline">nos tarifs</Link>
                  {" · "}
                  <Link href="/faq" className="text-brand-blue hover:underline">FAQ</Link>
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
