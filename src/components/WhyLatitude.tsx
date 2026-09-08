import Reveal from "./Reveal";

const items = [
  {
    num: "01",
    title: "Thoughtful Locations",
    copy: "Focused on areas with practical access, connectivity and future potential.",
  },
  {
    num: "02",
    title: "Planned Infrastructure",
    copy: "Layouts designed around essential infrastructure and comfortable accessibility.",
  },
  {
    num: "03",
    title: "Transparent Process",
    copy: "Clear communication designed to help customers understand their property decision.",
  },
  {
    num: "04",
    title: "Property Guidance",
    copy: "Practical support at every step, from first enquiry to final documentation.",
  },
  {
    num: "05",
    title: "Customer-Focused Service",
    copy: "Every conversation is treated as a long-term relationship, not a single sale.",
  },
  {
    num: "06",
    title: "Long-Term Perspective",
    copy: "Land selected and planned with future needs and stability in mind.",
  },
];

export default function WhyLatitude() {
  return (
    <section id="why" className="py-[88px] lg:py-[120px] bg-navy-900 text-white">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[620px]">
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold-warm">
            Why Latitude
          </p>
          <h2 className="font-serif font-semibold text-white text-[32px] md:text-[44px] leading-[1.15] my-3.5">
            Property Decisions
            <br />
            Built on Confidence
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] mt-14">
          {items.map((item) => (
            <Reveal key={item.num} className="bg-navy-900 px-8 py-9">
              <span className="font-serif text-gold-warm text-[15px] tracking-[0.1em]">
                {item.num}
              </span>
              <h3 className="text-xl font-semibold text-white my-3.5">{item.title}</h3>
              <p className="text-[#AEB1C4] text-[14.5px] leading-[1.65] m-0">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
