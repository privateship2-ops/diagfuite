"use client";

import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import type { ContactFormData } from "@/types";

const schema = z.object({
  nom: z.string().min(2, "Nom requis (minimum 2 caractères)"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  typeClient: z.string().min(1, "Veuillez sélectionner votre profil"),
  typeFuite: z.string().min(1, "Veuillez sélectionner le type de fuite"),
  adresse: z.string().min(5, "Adresse requise"),
  message: z.string().min(10, "Message trop court (minimum 10 caractères)"),
});

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: ContactFormData) {
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form data:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="size-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Demande envoyée !</h3>
        <p className="text-green-700">
          Nous avons bien reçu votre demande. Nous vous contacterons dans les 24h pour établir votre devis gratuit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-brand-dark mb-1">
            Nom complet *
          </label>
          <input
            id="nom"
            type="text"
            {...register("nom")}
            placeholder="Jean Dupont"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
          />
          {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-brand-dark mb-1">
            Téléphone *
          </label>
          <input
            id="telephone"
            type="tel"
            {...register("telephone")}
            placeholder="06 12 34 56 78"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
          />
          {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="jean.dupont@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="typeClient" className="block text-sm font-medium text-brand-dark mb-1">
            Vous êtes *
          </label>
          <select
            id="typeClient"
            {...register("typeClient")}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors bg-white"
          >
            <option value="">Sélectionnez...</option>
            <option value="particulier-proprietaire">Particulier propriétaire</option>
            <option value="particulier-locataire">Particulier locataire</option>
            <option value="syndic">Syndic / Copropriété</option>
            <option value="assurance">Compagnie d'assurance</option>
            <option value="collectivite">Collectivité</option>
            <option value="entreprise-btp">Entreprise BTP</option>
          </select>
          {errors.typeClient && <p className="text-red-500 text-xs mt-1">{errors.typeClient.message}</p>}
        </div>

        <div>
          <label htmlFor="typeFuite" className="block text-sm font-medium text-brand-dark mb-1">
            Type de fuite *
          </label>
          <select
            id="typeFuite"
            {...register("typeFuite")}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors bg-white"
          >
            <option value="">Sélectionnez...</option>
            <option value="fuite-eau">Fuite d'eau</option>
            <option value="fuite-gaz">Fuite de gaz</option>
            <option value="infiltration">Infiltration / Humidité</option>
            <option value="canalisation-bouchee">Canalisation bouchée</option>
            <option value="non-identifie">Non identifié</option>
          </select>
          {errors.typeFuite && <p className="text-red-500 text-xs mt-1">{errors.typeFuite.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="adresse" className="block text-sm font-medium text-brand-dark mb-1">
          Adresse du sinistre *
        </label>
        <input
          id="adresse"
          type="text"
          {...register("adresse")}
          placeholder="15 rue des Fleurs, Toulouse"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
        />
        {errors.adresse && <p className="text-red-500 text-xs mt-1">{errors.adresse.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
          Description du problème *
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          placeholder="Décrivez votre situation : depuis quand, où se situe la fuite, dégâts visibles..."
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <p className="text-xs text-brand-text/50">
        * Champs obligatoires. Vos données sont traitées conformément à notre{" "}
        <a href="/politique-confidentialite" className="underline hover:text-brand-blue">
          politique de confidentialité
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors"
      >
        {isSubmitting ? (
          "Envoi en cours..."
        ) : (
          <>
            <Send className="size-4" />
            Envoyer ma demande de devis
          </>
        )}
      </button>
    </form>
  );
}
