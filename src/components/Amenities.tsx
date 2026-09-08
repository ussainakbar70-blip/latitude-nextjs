import { Route, Droplets, Waves, Sun, Grid3x3, Signpost } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: Route, label: "Wide Roads" },
  { icon: Droplets, label: "Water Facilities" },
  { icon: Waves, label: "Drainage System" },
  { icon: Sun, label: "Solar Street Lights" },
  { icon: Grid3x3, label: "Planned Layouts" },
  { icon: Signpost, label: "Connectivity" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-[88px] lg:py-[120px] bg-white">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[620px]">
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold">
            Infrastructure
          </p>
          <h2 className="font-serif font-semibold text-navy-900 text-[32px] md:text-[44px] leading-[1.15] my-3.5">
            Everything a Better
            <br />
            Layout Should Have
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
          {items.map(({ icon: Icon, label }) => (
            <Reveal
              key={label}
              className="bg-white border border-[#ECE9DF] px-6 py-8 text-center transition-all duration-300 hover:border-gold-warm hover:-translate-y-1"
            >
              <Icon size={30} className="text-gold mx-auto mb-4" strokeWidth={1.6} />
              <h4 className="text-[14.5px] font-semibold text-navy-900 m-0">{label}</h4>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
