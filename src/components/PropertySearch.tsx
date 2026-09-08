"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function PropertySearch() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative z-[3] -mt-11 lg:-mt-9">
      <Reveal
        className="bg-white rounded shadow-[0_30px_60px_rgba(6,9,30,0.28)] p-5 md:p-7 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 md:gap-5 items-end"
      >
        <div>
          <label className="block text-[11px] tracking-[0.14em] uppercase text-muted font-semibold mb-2">
            Location
          </label>
          <select className="w-full border-0 border-b border-[#E5E1D8] py-2 text-[15.5px] bg-transparent outline-none focus:border-gold">
            <option>Coimbatore</option>
            <option>Kalampalayam</option>
            <option>Theethipalayam</option>
          </select>
        </div>
        <div>
          <label className="block text-[11px] tracking-[0.14em] uppercase text-muted font-semibold mb-2">
            Property Type
          </label>
          <select className="w-full border-0 border-b border-[#E5E1D8] py-2 text-[15.5px] bg-transparent outline-none focus:border-gold">
            <option>Residential Plots</option>
            <option>Gated Community</option>
            <option>Land Investment</option>
          </select>
        </div>
        <div>
          <label className="block text-[11px] tracking-[0.14em] uppercase text-muted font-semibold mb-2">
            Budget
          </label>
          <select className="w-full border-0 border-b border-[#E5E1D8] py-2 text-[15.5px] bg-transparent outline-none focus:border-gold">
            <option>Select Budget</option>
            <option>Under ₹15 Lakhs</option>
            <option>₹15L – ₹30L</option>
            <option>₹30L and above</option>
          </select>
        </div>
        <button
          onClick={scrollToProjects}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-[13.5px] px-6 py-3 transition-transform hover:-translate-y-0.5"
        >
          Find Properties <ArrowRight size={16} />
        </button>
      </Reveal>
    </div>
  );
}
