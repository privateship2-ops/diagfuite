import Link from "next/link";
import {
  Droplets,
  Flame,
  Scan,
  Camera,
  AudioWaveform,
  FileText,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import { FadeIn } from "./FadeIn";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  Flame,
  Scan,
  Camera,
  AudioWaveform,
  FileText,
};

export function ServiceCards() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Nos prestations de détection non destructive
            </h2>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              Des technologies avancées pour localiser vos fuites avec précision, sans démolition, avec rapport d'expertise.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Droplets;
            return (
              <FadeIn key={service.slug} delay={index * 0.08}>
                <div className="group bg-brand-bg hover:bg-white border border-gray-100 hover:border-brand-blue/30 hover:shadow-md rounded-xl p-6 transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-blue/10 group-hover:bg-brand-blue/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <Icon className="size-6 text-brand-blue" />
                  </div>
                  <h3 className="text-base font-semibold text-brand-dark mb-2">{service.title}</h3>
                  <p className="text-sm text-brand-text/70 leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:gap-2 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/prestations"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-dark/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Voir toutes nos prestations
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
