"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookies-accepted", "false");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-brand-dark text-white p-4 sm:p-5 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/80 flex-1">
          Nous utilisons des cookies pour améliorer votre expérience sur DiagFuite.fr.{" "}
          <Link href="/politique-confidentialite" className="underline hover:text-brand-blue">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/60 hover:text-white px-3 py-1.5 border border-white/20 rounded-lg transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="text-sm bg-brand-orange hover:bg-brand-orange/90 text-white font-medium px-4 py-1.5 rounded-lg transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
