import { ArrowRight, Calendar, Award, ShieldCheck, MapPin } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.08] animate-heroZoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,9,30,0.78)] via-[rgba(8,12,38,0.72)] to-[rgba(6,9,30,0.94)]" />

      <div className="hidden lg:block absolute right-7 top-1/2 -translate-y-1/2 rotate-90 origin-right text-white/55 text-[11px] tracking-[0.35em] z-[2]">
        COIMBATORE &nbsp;•&nbsp; TAMIL NADU
      </div>

      <Reveal className="relative z-[2] max-w-[1240px] mx-auto px-5 md:px-10 w-full pt-28 pb-16">
        <div className="w-[46px] h-0.5 bg-gold-warm mb-4" />
        <p className="text-gold-warm uppercase text-xs font-semibold tracking-[0.28em]">
          Premium Plots in Coimbatore
        </p>
        <h1 className="text-white font-serif font-semibold leading-[1.08] text-[44px] sm:text-[60px] lg:text-[76px] my-3.5">
          Your Land.
          <br />
          Your Future.
          <br />
          Your <span className="text-gold">Latitude.</span>
        </h1>
        <p className="text-[#D8D9E4] text-base max-w-[520px] leading-[1.7] mb-8">
          Discover thoughtfully planned residential plots and promising land
          opportunities designed for confident ownership and long-term value.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#sites"
            className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-br from-gold-warm to-gold text-navy-900 font-semibold text-[13.5px] px-6 py-3 transition-transform hover:-translate-y-0.5"
          >
            Explore Our Sites <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm border border-white/55 text-white text-[13.5px] px-6 py-3 transition-colors hover:bg-white/10 hover:border-white"
          >
            <Calendar size={16} /> Schedule a Site Visit
          </a>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-[#C7C9D6] text-[13px]">
            <Award size={16} className="text-gold-warm" /> Prime Locations
          </div>
          <div className="flex items-center gap-2 text-[#C7C9D6] text-[13px]">
            <ShieldCheck size={16} className="text-gold-warm" /> Quality Infrastructure
          </div>
          <div className="flex items-center gap-2 text-[#C7C9D6] text-[13px]">
            <MapPin size={16} className="text-gold-warm" /> Transparent Guidance
          </div>
        </div>
      </Reveal>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-9 bg-white/25 relative overflow-hidden">
          <span className="absolute left-0 w-px h-5 bg-gold-warm animate-scrollDown" />
        </div>
      </div>
    </section>
  );
}
