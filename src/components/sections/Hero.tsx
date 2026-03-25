import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";

const badges = [
  "Agréé assurances",
  "100% non destructif",
  "Rapport expertise",
  "Intervention 48h",
];

export function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
          alt="Détection de fuite non destructive à Toulouse"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 text-brand-blue text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-brand-blue/30">
            <CheckCircle className="size-3.5" />
            Spécialiste certifié — Toulouse et grande couronne
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Détection de fuite à Toulouse{" "}
            <span className="text-brand-blue">— Sans casser, sans détruire</span>
          </h1>

          <p className="text-lg text-white/75 leading-relaxed mb-8">
            DiagFuite localise vos fuites d'eau et de gaz avec des technologies non invasives. Agréé par toutes les compagnies d'assurance. Rapport d'expertise fourni.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-lg text-base"
            >
              Devis gratuit en 24h
            </Link>
            <a
              href="tel:+33561000000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-base"
            >
              <Phone className="size-5" />
              05 61 00 00 00
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
              >
                <CheckCircle className="size-3.5 text-brand-blue shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
