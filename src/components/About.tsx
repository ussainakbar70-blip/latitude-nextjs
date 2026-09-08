import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-[88px] lg:py-[120px]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-[70px] items-center">
        <Reveal>
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold">
            About Latitude
          </p>
          <h2 className="font-serif font-semibold text-navy-900 text-[32px] md:text-[44px] leading-[1.15] my-3.5">
            Building Value
            <br />
            Beyond the Plot
          </h2>
          <p className="text-muted text-base leading-[1.75] max-w-[560px]">
            Latitude Promoters helps buyers discover thoughtfully planned
            residential plots and land investment opportunities across
            Coimbatore. The focus is on quality infrastructure, practical
            connectivity, transparent guidance and a smoother path toward
            property ownership.
          </p>
          <p className="text-muted text-base leading-[1.75] max-w-[560px] mt-4">
            Every layout is approached with the same intent — make property
            investment simple, secure and genuinely rewarding for the people
            building their future on it.
          </p>
          <a
            href="#why"
            className="inline-flex items-center gap-2 rounded-sm border border-navy-900 text-navy-900 text-[13.5px] px-6 py-3 mt-7 transition-colors hover:bg-navy-900/5"
          >
            Discover Our Approach <ArrowRight size={16} />
          </a>
        </Reveal>

        <Reveal className="relative">
          <div className="plot-corners">
            <span className="c3" />
            <span className="c4" />
            <div className="relative w-full h-[420px] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80"
                alt="Winding road through a landscaped development"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="absolute -left-[18px] sm:-left-[30px] -bottom-7 sm:-bottom-8 bg-navy-900 text-white px-7 py-6 sm:px-[34px] sm:py-[30px] max-w-[250px] shadow-[0_24px_50px_rgba(10,16,51,0.35)]">
            <p className="font-serif text-[22px] leading-[1.3] m-0">
              Your Trusted <span className="text-gold">Property Partner</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
