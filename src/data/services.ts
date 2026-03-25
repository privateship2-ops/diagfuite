import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "detection-fuites-eau",
    title: "Détection de fuites d'eau",
    description:
      "Localisation précise des fuites d'eau dans vos canalisations, sans destruction. Techniques acoustiques et électroniques de pointe.",
    icon: "Droplets",
    href: "/prestations#detection-fuites-eau",
  },
  {
    slug: "detection-fuites-gaz",
    title: "Détection de fuites de gaz",
    description:
      "Inspection et localisation des fuites de gaz avec détecteur électronique homologué. Intervention rapide pour votre sécurité.",
    icon: "Flame",
    href: "/prestations#detection-fuites-gaz",
  },
  {
    slug: "thermographie-infrarouge",
    title: "Thermographie infrarouge",
    description:
      "Caméra thermique pour détecter les infiltrations, ponts thermiques et humidités cachées derrière les murs sans les percer.",
    icon: "Scan",
    href: "/prestations#thermographie-infrarouge",
  },
  {
    slug: "endoscopie-camera",
    title: "Endoscopie / Caméra",
    description:
      "Inspection visuelle de l'intérieur de vos canalisations avec caméra haute résolution. Identification des obstructions et fissures.",
    icon: "Camera",
    href: "/prestations#endoscopie-camera",
  },
  {
    slug: "correlation-acoustique",
    title: "Corrélation acoustique",
    description:
      "Technologie de pointe pour localiser les fuites sur canalisations enterrées sans excavation. Précision au centimètre.",
    icon: "AudioWaveform",
    href: "/prestations#correlation-acoustique",
  },
  {
    slug: "rapport-expertise",
    title: "Rapport d'expertise",
    description:
      "Document officiel remis après intervention, reconnu par toutes les compagnies d'assurance pour la prise en charge des dommages.",
    icon: "FileText",
    href: "/prestations#rapport-expertise",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Prise de contact & analyse",
    description:
      "Vous nous contactez par téléphone ou via le formulaire. Nous analysons votre situation et planifions l'intervention sous 48h.",
  },
  {
    step: "02",
    title: "Intervention avec matériel spécialisé",
    description:
      "Nos techniciens certifiés interviennent avec un équipement de pointe : caméra thermique, corrélateur acoustique, détecteur de gaz.",
  },
  {
    step: "03",
    title: "Localisation précise sans destruction",
    description:
      "Nous identifions l'origine exacte de la fuite sans casser ni percer. Notre méthode préserve entièrement votre logement.",
  },
  {
    step: "04",
    title: "Rapport expertise pour assurance",
    description:
      "Vous recevez un rapport d'expertise complet, reconnu par toutes les assurances, pour faciliter votre prise en charge.",
  },
];

export const whyUsReasons = [
  {
    title: "100% non destructif",
    description:
      "Nos techniques avancées permettent de localiser les fuites sans casser, sans percer et sans travaux préalables. Votre logement reste intact.",
    icon: "Shield",
  },
  {
    title: "Agréé par les assurances",
    description:
      "DiagFuite est agréé AXA, MAAF, GMF, Allianz, MMA. Notre rapport est reconnu par toutes les compagnies d'assurance pour la prise en charge.",
    icon: "BadgeCheck",
  },
  {
    title: "Intervention sous 48h",
    description:
      "Nous intervenons à Toulouse et grande couronne en moins de 48h. Devis gratuit par téléphone ou en ligne, sans engagement.",
    icon: "Clock",
  },
];
