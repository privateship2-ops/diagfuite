import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/data/cities";
import { FadeIn } from "./FadeIn";

export function ZoneIntervention() {
  return (
    <section className="py-16 lg:py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
              Zone d'intervention
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-2 mb-3">
              Toulouse et toute sa grande couronne
            </h2>
            <p className="text-brand-text/70 max-w-xl mx-auto">
              Intervention rapide sous 48h dans toutes les communes de l'agglomération toulousaine.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href="/zone-intervention"
                className="flex items-center gap-1 text-sm bg-white border border-gray-200 hover:border-brand-blue hover:text-brand-blue text-brand-text px-3 py-1.5 rounded-full transition-colors shadow-sm"
              >
                <MapPin className="size-3.5 text-brand-blue shrink-0" />
                {city.name}
              </Link>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center">
            <Link
              href="/zone-intervention"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
            >
              Voir notre zone d'intervention complète
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
