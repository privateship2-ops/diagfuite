import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/sections/FadeIn";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact DiagFuite — Devis gratuit sous 24h | Toulouse",
  description:
    "Contactez DiagFuite pour votre recherche de fuite à Toulouse. Devis gratuit sous 24h. Urgence fuite : 06 14 46 87 77. Formulaire, téléphone, email.",
  alternates: { canonical: "https://diagfuite.fr/contact" },
};

const faqContact = [
  {
    q: "Quel est votre délai de réponse à un devis ?",
    a: "Nous répondons à toutes les demandes de devis sous 24h ouvrées. En général, vous recevez notre retour dans la journée si votre demande est envoyée avant 16h. Pour les urgences, appelez directement le 06 14 46 87 77.",
  },
  {
    q: "Puis-je planifier une intervention le week-end ?",
    a: "Nous intervenons le samedi de 9h à 13h. Le dimanche, nous réservons nos interventions aux urgences avérées (fuite active, risque d'inondation). Pour toute intervention weekend, appelez-nous directement au 06 14 46 87 77.",
  },
  {
    q: "Comment se déroule l'évaluation téléphonique ?",
    a: "Lors de votre appel, notre technicien vous pose quelques questions sur la nature du problème, sa localisation et son ancienneté. Cette analyse préliminaire nous permet de vous confirmer un tarif estimatif et de préparer l'intervention avec le matériel le plus adapté à votre situation.",
  },
];

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
              Une fuite ? Une infiltration ? Contactez-nous. Nous vous répondons sous 24h et intervenons sous 48h à{" "}
              <Link href="/zone-intervention" className="text-brand-blue hover:underline">
                Toulouse
              </Link>{" "}
              et grande couronne.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Urgence section */}
      <section className="bg-red-600 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="size-6 text-white shrink-0" />
              <div>
                <p className="font-bold text-white text-base">Urgence fuite d&apos;eau active ?</p>
                <p className="text-red-100 text-sm">Appelez directement — intervention possible le jour même</p>
              </div>
            </div>
            <a
              href="tel:+33614468777"
              className="flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors text-lg shrink-0"
            >
              <Phone className="size-5" />
              06 14 46 87 77
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <h2 className="text-2xl font-bold text-brand-dark mb-2">
                  Formulaire de demande de devis gratuit
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
                    <a href="tel:+33614468777" className="flex items-center gap-3 text-sm hover:text-brand-blue transition-colors group">
                      <div className="w-9 h-9 bg-brand-blue/10 group-hover:bg-brand-blue/20 rounded-xl flex items-center justify-center transition-colors">
                        <Phone className="size-4 text-brand-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-dark group-hover:text-brand-blue">06 14 46 87 77</p>
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
                        <p className="font-semibold text-brand-dark">Horaires d&apos;intervention</p>
                        <div className="text-xs text-brand-text/60 mt-0.5 space-y-0.5">
                          <p>Lundi : 8h00 – 18h00</p>
                          <p>Mardi : 8h00 – 18h00</p>
                          <p>Mercredi : 8h00 – 18h00</p>
                          <p>Jeudi : 8h00 – 18h00</p>
                          <p>Vendredi : 8h00 – 18h00</p>
                          <p>Samedi : 9h00 – 13h00</p>
                          <p>Dimanche : Urgences uniquement</p>
                        </div>
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
                  {" · "}
                  <Link href="/assurance" className="text-brand-blue hover:underline">assurance</Link>
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ contact */}
      <section className="py-12 bg-brand-bg border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-xl font-bold text-brand-dark mb-6 text-center">
              Questions fréquentes sur nos délais et interventions
            </h2>
            <div className="flex flex-col gap-4">
              {faqContact.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 p-5">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="size-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-brand-dark mb-1 text-sm">{item.q}</h3>
                      <p className="text-sm text-brand-text/70 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
