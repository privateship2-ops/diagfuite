import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { FadeIn } from "./FadeIn";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note : ${rating}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? "fill-brand-orange text-brand-orange" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-16 lg:py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wide">
              Ils nous font confiance
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-3">
              Ce que disent nos clients
            </h2>
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <span>5/5 — Plus de 200 avis clients</span>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t, index) => (
            <FadeIn key={t.id} delay={index * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col h-full">
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 text-sm text-white/80 leading-relaxed flex-1 italic">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-full bg-brand-blue/30 flex items-center justify-center text-brand-blue font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/temoignages"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
            >
              Lire tous les témoignages
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
