"use client";

import { Phone } from "lucide-react";

export function FloatingPhone() {
  return (
    <a
      href="tel:+33614468777"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-brand-orange text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:bg-brand-orange/90 transition-colors"
      aria-label="Appeler DiagFuite"
    >
      <Phone className="size-5" />
      Appeler
    </a>
  );
}
