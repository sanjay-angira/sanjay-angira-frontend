"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="mt-5 divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#12121a]">
        {faq.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-slate-800 dark:text-zinc-100">
                  {item.question}
                </span>
                {isOpen ? (
                  <Minus className="h-4 w-4 shrink-0 text-primary" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-slate-400" />
                )}
              </button>
              <div
                className={cn(
                  "grid transition-all",
                  isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]",
                )}
              >
                <p className="overflow-hidden px-5 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
