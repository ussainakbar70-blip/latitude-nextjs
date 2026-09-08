import { MessageSquare, Compass, Users } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    copy: "Straightforward answers about location, layout and process — no jargon, no pressure.",
  },
  {
    icon: Compass,
    title: "Property Guidance",
    copy: "Practical guidance to help you evaluate a plot against what actually matters to you.",
  },
  {
    icon: Users,
    title: "Support From Enquiry to Visit",
    copy: "Consistent support from the first conversation through to the day you see the site.",
  },
];

export default function CustomerExperience() {
  return (
    <section className="py-[88px] lg:py-[120px] bg-bg">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[620px]">
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold">
            Customer Experience
          </p>
          <h2 className="font-serif font-semibold text-navy-900 text-[32px] md:text-[44px] leading-[1.15] my-3.5">
            A Customer-First
            <br />
            Property Experience
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {items.map(({ icon: Icon, title, copy }) => (
            <Reveal key={title} className="bg-white p-8 shadow-[0_8px_24px_rgba(10,16,51,0.05)]">
              <Icon size={26} className="text-gold mb-4" strokeWidth={1.6} />
              <h4 className="text-lg font-semibold text-navy-900 mb-2">{title}</h4>
              <p className="text-muted text-[14.5px] leading-[1.6] m-0">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
