import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function SiteVisit() {
  return (
    <section
      className="relative py-[120px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,9,30,0.82)] to-[rgba(6,9,30,0.88)]" />
      <Reveal className="relative z-[2] max-w-[640px] mx-auto px-5 text-center">
        <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold-warm">
          See It For Yourself
        </p>
        <h2 className="font-serif font-semibold text-white text-[32px] md:text-[44px] leading-[1.15] my-3.5">
          Visit the Property
          <br />
          Before You Decide
        </h2>
        <p className="text-[#D8D9E4] text-base leading-[1.7]">
          Experience the location, connectivity and surroundings firsthand.
          Speak with the Latitude Promoters team to arrange a site visit.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-7">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-[13.5px] px-6 py-3"
          >
            Schedule Site Visit
          </a>
          <a
            href={`tel:${site.phonePrimaryTel}`}
            className="inline-flex items-center gap-2 rounded-sm border border-white/55 text-white text-[13.5px] px-6 py-3 transition-colors hover:bg-white/10 hover:border-white"
          >
            <Phone size={16} /> Call {site.phonePrimary}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
