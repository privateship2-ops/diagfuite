import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/data/services";
import { FadeIn } from "./FadeIn";

export function ProcessSteps() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wide">
              Comment ça marche ?
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-2 mb-4">
              Notre processus en 4 étapes
            </h2>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              De la prise de contact au rapport d'expertise, nous gérons tout pour vous.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <div className="relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-0.5 bg-brand-blue/20 z-0 -translate-y-0.5" style={{ width: "calc(100% - 3.5rem)", left: "3.5rem" }} />
                )}

                <div className="bg-brand-bg rounded-xl p-6 h-full border border-gray-100">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-text/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/processus"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-dark text-brand-dark font-semibold px-6 py-3 rounded-xl hover:bg-brand-dark hover:text-white transition-colors"
            >
              Voir le processus détaillé
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
