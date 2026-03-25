import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/pourquoi-nous", label: "Pourquoi nous" },
  { href: "/processus", label: "Notre processus" },
  { href: "/assurance", label: "Assurance" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/faq", label: "FAQ" },
];

const serviceLinks = [
  { href: "/prestations#detection-fuites-eau", label: "Détection fuites d'eau" },
  { href: "/prestations#detection-fuites-gaz", label: "Détection fuites de gaz" },
  { href: "/prestations#thermographie-infrarouge", label: "Thermographie infrarouge" },
  { href: "/prestations#endoscopie-camera", label: "Endoscopie / Caméra" },
  { href: "/prestations#correlation-acoustique", label: "Corrélation acoustique" },
  { href: "/prestations#rapport-expertise", label: "Rapport d'expertise" },
];

const mainCities = [
  "Toulouse", "Blagnac", "Colomiers", "Tournefeuille",
  "Muret", "Ramonville", "Balma", "L'Union",
  "Portet-sur-Garonne", "Castanet-Tolosan",
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="relative w-44 h-12 bg-white rounded-lg p-2 mb-4">
              <Image
                src="/logo-diagfuite.png"
                alt="DiagFuite"
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Expert en détection de fuites non destructive à Toulouse et sa grande couronne. Agréé assurances, intervention sous 48h.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a href="tel:+33614468777" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                <Phone className="size-4 shrink-0" />
                06 14 46 87 77
              </a>
              <a href="mailto:contact@diagfuite.fr" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                <Mail className="size-4 shrink-0" />
                contact@diagfuite.fr
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                Toulouse et grande couronne (31)
              </span>
              <span className="flex items-start gap-2">
                <Clock className="size-4 shrink-0 mt-0.5" />
                Lun–Ven 8h–18h | Sam 9h–13h
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">Liens rapides</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">Prestations</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">Zone d'intervention</h3>
            <ul className="flex flex-col gap-2">
              {mainCities.map((city) => (
                <li key={city}>
                  <Link
                    href="/zone-intervention"
                    className="text-sm text-white/70 hover:text-brand-blue transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/zone-intervention" className="text-sm text-brand-blue hover:underline">
                  Voir toutes les villes →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} DiagFuite — Tous droits réservés
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <Link href="/mentions-legales" className="hover:text-white/80 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white/80 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
