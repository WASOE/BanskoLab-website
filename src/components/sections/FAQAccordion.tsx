"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <button
            key={item.question}
            type="button"
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className={cn(
              "w-full rounded-2xl border border-ink/10 bg-white p-5 text-left transition hover:border-ink/30",
              isOpen && "border-brand/40",
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-ink md:text-base">
                {item.question}
              </span>
              <span className="text-sm font-semibold text-ink/60">
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen ? (
              <p className="mt-3 text-sm text-ink/70">{item.answer}</p>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
