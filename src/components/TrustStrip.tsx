import Reveal from "./Reveal";

const items = [
  {
    title: "DTCP / RERA Focus",
    copy: "Projects presented with clear approval information where applicable.",
  },
  {
    title: "Strategic Locations",
    copy: "Properties selected around practical and developing locations.",
  },
  {
    title: "Quality Infrastructure",
    copy: "Thoughtfully planned roads and essential amenities.",
  },
  {
    title: "Transparent Guidance",
    copy: "Clear assistance throughout the property-buying journey.",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <Reveal key={item.title} className="border-t-2 border-gold-warm pt-5">
            <h3 className="text-[19px] font-semibold text-navy-900 mb-2.5">
              {item.title}
            </h3>
            <p className="text-muted text-[14.5px] leading-[1.6] m-0">{item.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
