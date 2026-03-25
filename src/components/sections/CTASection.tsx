import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CTASection({
  title = "Vous avez une fuite ? Agissez maintenant.",
  subtitle = "Devis gratuit sous 24h — Intervention sous 48h — Rapport d'expertise inclus",
  primaryHref = "/contact",
  primaryLabel = "Obtenir mon devis gratuit",
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">{title}</h2>
            <p className="text-white/80 text-lg mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg text-base"
              >
                {primaryLabel}
                <ArrowRight className="size-5" />
              </Link>
              <a
                href="tel:+33614468777"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base"
              >
                <Phone className="size-5" />
                06 14 46 87 77
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
