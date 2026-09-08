"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[88px] lg:py-[120px] bg-white">
      <div className="max-w-[820px] mx-auto px-5 md:px-10">
        <Reveal className="mb-5">
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold">FAQ</p>
          <h2 className="font-serif font-semibold text-navy-900 text-[32px] md:text-[44px] leading-[1.15] my-3.5">
            Common Questions
          </h2>
        </Reveal>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} className="border-b border-[#E5E1D8]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full text-left bg-none border-none py-6 flex justify-between items-center gap-5 cursor-pointer font-serif text-[19px] sm:text-[21px] text-navy-900"
                >
                  {faq.question}
                  <Plus
                    size={20}
                    className={`flex-shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
                  style={{ maxHeight: isOpen ? "240px" : "0px" }}
                >
                  <p className="text-muted text-[15px] leading-[1.7] pb-6 max-w-[640px] m-0">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
