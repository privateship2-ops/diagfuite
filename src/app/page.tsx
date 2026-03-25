import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { WhyUs } from "@/components/sections/WhyUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { ZoneIntervention } from "@/components/sections/ZoneIntervention";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/sections/ContactForm";
import Link from "next/link";

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

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <WhyUs />
      <ProcessSteps />
      <Testimonials />
      <ZoneIntervention />

      {/* Quick contact form section */}
      <section className="py-16 lg:py-20 bg-white">
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
                Décrivez votre situation et recevez un devis gratuit sous 24h. Intervention sous 48h à Toulouse et grande couronne.
              </p>
              <div className="flex flex-col gap-3 text-sm text-brand-text/80">
                <p>→ <Link href="/tarifs" className="text-brand-blue hover:underline">Consulter nos tarifs de recherche de fuite</Link></p>
                <p>→ <Link href="/assurance" className="text-brand-blue hover:underline">Comprendre la prise en charge par votre assurance</Link></p>
                <p>→ <Link href="/faq" className="text-brand-blue hover:underline">Consulter notre FAQ</Link></p>
              </div>
            </div>
            <div className="bg-brand-bg rounded-2xl p-6 lg:p-8 border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
