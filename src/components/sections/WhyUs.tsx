import Link from "next/link";
import Image from "next/image";
import { Shield, BadgeCheck, Clock, ArrowRight } from "lucide-react";
import { whyUsReasons } from "@/data/services";
import { FadeIn } from "./FadeIn";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  BadgeCheck,
  Clock,
};

export function WhyUs() {
  return (
    <section className="py-16 lg:py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <FadeIn direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/technicien-2.jpg"
                alt="Technicien DiagFuite en intervention de détection de fuite Toulouse"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                {["AXA", "MAAF", "GMF", "Allianz", "MMA"].map((brand) => (
                  <span
                    key={brand}
                    className="bg-white/90 text-brand-dark text-xs font-bold px-2 py-1 rounded"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: reasons */}
          <div>
            <FadeIn>
              <div className="mb-8">
                <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
                  Pourquoi DiagFuite ?
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-2 mb-4">
                  La détection de fuite autrement
                </h2>
                <p className="text-brand-text/70 leading-relaxed">
                  Nous combinons savoir-faire technique et matériel de pointe pour vous offrir une détection précise, sans dégâts, reconnue par vos assureurs.
                </p>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-5">
              {whyUsReasons.map((reason, index) => {
                const Icon = iconMap[reason.icon] ?? Shield;
                return (
                  <FadeIn key={reason.title} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="size-5 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-dark mb-1">{reason.title}</h3>
                        <p className="text-sm text-brand-text/70 leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={0.35}>
              <div className="mt-8">
                <Link
                  href="/pourquoi-nous"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
                >
                  En savoir plus sur DiagFuite
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
