"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types";

type FaqAccordionProps = {
  items: FaqItem[];
};

function AccordionItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 text-left bg-white hover:bg-brand-bg transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-brand-dark text-sm leading-snug">{question}</span>
        <ChevronDown
          className={`size-5 text-brand-blue shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 bg-white border-t border-gray-50">
          <p className="text-sm text-brand-text/70 leading-relaxed pt-3">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
