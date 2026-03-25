"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/zone-intervention", label: "Zone" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-40 h-10">
              <Image
                src="/logo-diagfuite.png"
                alt="DiagFuite — Détection de fuite Toulouse"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-text hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+33614468777"
              className="flex items-center gap-2 text-sm font-medium text-brand-dark hover:text-brand-blue transition-colors"
            >
              <Phone className="size-4" />
              06 14 46 87 77
            </a>
            <Link
              href="/contact"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-brand-dark hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 mt-2" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-3 rounded-lg text-sm font-medium text-brand-text hover:bg-brand-bg hover:text-brand-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="tel:+33614468777"
              className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-brand-dark border border-brand-dark/20 rounded-xl"
            >
              <Phone className="size-4" />
              06 14 46 87 77
            </a>
            <Link
              href="/contact"
              className="bg-brand-orange text-white text-sm font-semibold text-center py-2 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
